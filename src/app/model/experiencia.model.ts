export class Experiencia {
    Id_Experiencia?:number;
     Fechas:String; 
     Descripcion:String ; 
     Puesto:String;
    
    
    constructor
     (Fechas:String, 
       Descripcion:String , 
       Puesto:String,
      ){
    this.Fechas = Fechas;
    this.Descripcion = Descripcion;
    this.Puesto = Puesto;
   
    }
    
}

