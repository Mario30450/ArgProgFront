export class Persona {
    
    id_Perfil?:number;
    nombre:String; 
    apellido:String; 
    username:String;
    password:String;
    puesto:String;
    url_foto_perfil:String; 
    url_banner:String; 
    descripcion:String;
    cita:String; 
   
   
   
   constructor (
    nombre:String, 
    apellido:String, 
    username:String,
    password:String,
    puesto:String,
    url_foto_perfil:String, 
    url_banner:String, 
    descripcion:String,
    cita:String, 
    ){
   this.nombre = nombre;
   this.apellido = apellido;
   this.password = password;
   this.puesto = puesto;
   this.username = username;
   this.descripcion = descripcion;
   this.cita = cita;
   this.url_banner = url_banner;
   this.url_foto_perfil = url_foto_perfil;
   }
   }
       
   