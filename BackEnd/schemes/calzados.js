import mongoose from "mongoose";

const calzadosSchema = new mongoose.Schema({
    title: String,
    price: String,
    size: String,
    brand: String, 
    description: String
});
export const calzadosModel = mongoose.model("calzados", calzadosSchema);

calzadosSchema.set("toJSON", {
    transform: (doc, ret) => {
        ret.id = doc._id;
        delete ret._id;
        delete ret.__v;
    }
});
