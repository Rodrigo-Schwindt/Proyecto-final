export class Calzados {
    constructor (model) { this.model = model; }

    async GetCalzados(){
        const result = await this.model.GetCalzados()
        return result;
    }

    async GetCalzadosForID(id){
        const result = await this.model.GetCalzadosForID(id)
        return result;
    }

    async CreateCalzados(data){
        const result = await this.model.CreateCalzados(data)
    }
    async UpdateCalzados(data, id){
        const result = await this.model.UpdateCalzados(data, id)
    }
    async ReplaceCalzados(data, id){
        const result = await this.model.ReplaceCalzados(data, id)
    }
    async DeleteCalzados(id){
        const result = await this.model.DeleteCalzados(id)
    }
}