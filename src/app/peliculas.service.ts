import{Injectable} from '@angular/core';
import{Pelicula} from './pelicula';
import{PELICULAS}from './mock-peliculas';

@Injectable()
export class PeliculaService{
    getPeliculas():Promise<Pelicula[]>{
        return Promise.resolve(PELICULAS);
    }

    getPeliculasSlowly():Promise<Pelicula[]>{
        return new Promise(resolve =>{
            setTimeout(()=>resolve(this.getPeliculas()),2000);
        });
    }
}