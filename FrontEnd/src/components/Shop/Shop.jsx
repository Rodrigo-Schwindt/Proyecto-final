import "./shop.css";
import { FaPlus } from "react-icons/fa";
import { useEffect, useState } from "react";

export function Shop() {
  const [formulario, setFormulario] = useState(false);

  const [formData, setFormData] = useState({
    title: "",
    price: "",
    size: "",
    brand: "",
    description: "",
  });

  const [productos, setProductos] = useState([]);

  const onChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3010/calzados", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();


      setFormData({
        title: "",
        price: "",
        size: "",
        brand: "",
        description: "",
      });

      setFormulario(false);
      getProductos();
    } catch (error) {
      console.error("Error al subir producto:", error);
    }
  };


  const getProductos = async () => {
    try {
      const res = await fetch("http://localhost:3010/calzados");
      const data = await res.json();
      setProductos(data);
    } catch (error) {
      console.error("Error al cargar productos:", error);
    }
  };

  useEffect(() => {
    getProductos();
  }, []);

  return (
    <div className="shop-container">
      <div className="grid-aside">
        <div className="aside shadow">
          <h2>Filtros</h2>
          <h2>Categorías</h2>
          <p>ejemplo</p>
          <p>ejemplo</p>
          <p>ejemplo</p>
          <p>ejemplo</p>
          <p>ejemplo</p>
          <p>ejempl0</p>
          <p>ejemplo</p>
          <p>ejemplo</p>
          <p>ejemplo</p>
          <p>ejemplo</p>
          <p>ejemplo</p>
          <p>ejemplo</p>
        </div>
      </div>

      <div className="grid-shop">
        <div className="faplus" onClick={() => setFormulario(!formulario)}>
          <FaPlus />
        </div>

        {productos.length > 0 ? (
          productos.map((item, index) => (
            <div className="shadow" key={index}>
              <div className="grid-shop-children">
                <img src="imagen.png" alt={item.title} />
              </div>
              <h3>{item.title}</h3>
              <p>Precio: ${item.price}</p>
              <p>Talle: {item.size}</p>
              <p>Marca: {item.brand}</p>
              <div className="carrito">
                <h2>Añadir al carrito</h2>
              </div>
            </div>
          ))
        ) : (
          <p>No hay productos.</p>
        )}
      </div>

      {formulario && (
        <div className="modal">
          <form onSubmit={handleSubmit} className="formulario">
            <input
              type="text"
              name="title"
              placeholder="Nombre del producto"
              onChange={onChange}
              value={formData.title}
              required
            />
            <input
              type="text"
              name="price"
              placeholder="Precio"
              onChange={onChange}
              value={formData.price}
              required
            />
            <input
              type="text"
              name="size"
              placeholder="Talle"
              onChange={onChange}
              value={formData.size}
              required
            />
            <input
              type="text"
              name="brand"
              placeholder="Marca"
              onChange={onChange}
              value={formData.brand}
              required
            />
            <textarea
              name="description"
              placeholder="Descripción"
              rows="6"
              onChange={onChange}
              value={formData.description}
              required
            />
            <input type="submit" value="Subir" />
            <button type="button" onClick={() => setFormulario(false)}>
              Cancelar
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
