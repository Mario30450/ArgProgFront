export class Proyectos{

 Id_Proyectos?: number;
 nombre:String; 
 Fechas:String; 
 url_foto:String; 
 descripcion:String;

constructor (nombre:String, 
    Fechas:String, 
    url_foto:String, 
    descripcion:String,
   ){

this.nombre = nombre;
this.Fechas = Fechas;
this.url_foto = url_foto;
this.descripcion = descripcion;
}

}