export class Product {

    //atributos y sus tipos
   // _id: string 
    name: string
    image: string
    description: string
    stock: number
    price:number
    //keywords: string[] 

    //constructor instanciar o a inicializar los atributos cuando tengan un valor
    constructor(_id = '', name='', price=0, image='', description='', stock=0){
       // this._id = _id
        this.name = name
        this.image = image
        this.description = description
        this.stock = stock
        this.price = price
    }

}
