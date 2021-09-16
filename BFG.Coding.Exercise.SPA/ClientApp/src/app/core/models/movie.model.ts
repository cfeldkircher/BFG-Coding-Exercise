import { IMovie } from '../interfaces/imovie.interface';

export class Movie implements IMovie{
    title: string;
    director: string;

    constructor(title:string, director:string) {
        this.title = title;
        this.director = director;
    }
    
}
