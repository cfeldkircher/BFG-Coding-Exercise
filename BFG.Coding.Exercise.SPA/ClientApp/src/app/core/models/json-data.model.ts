import { IJsonData } from '../interfaces/ijson-data.interface';
import { IBook } from '../interfaces/ibook.interface';
import { IMovie } from '../interfaces/imovie.interface';

export class JsonData implements IJsonData{
    books: IBook[];
    movies: IMovie[];

    constructor(books: IBook[], movies: IMovie[]) {
        this.books = books;
        this.movies = movies;
    }
}
