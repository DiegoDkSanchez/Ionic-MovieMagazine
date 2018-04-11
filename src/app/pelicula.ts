export class Pelicula{
    
    id:number;
    img:string;
    titulo:string;
    descripcion:string;
    categoria:string;
    precio:number;

    actores:{
        principales:string;
        secundarios:string;
    }
}