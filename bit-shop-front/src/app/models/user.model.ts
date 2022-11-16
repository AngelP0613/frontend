export class User {
    // atributos y sus tipos
    // constructor instancair o a instanciar

    firstName : String
    lastName  : String
    email     : String
    password  : String
    isAdmin   : Boolean
    
    //keyWords:
    constructor( _id='', firstName='', lastName='', description='', email= '', password='', isAdmin=false){

        {
            this.firstName= firstName
            this.lastName= lastName
            this.email= email
            this.password= password
            this.isAdmin= isAdmin
        }
    }
}