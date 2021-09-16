import { IBook } from './ibook.interface';
import { IMovie } from './imovie.interface';

export interface IJsonData {
    books: IBook[];
    movies: IMovie[];
}
