import { IBook } from '../interfaces/ibook.interface';

export class Book implements IBook{
    title: string
    author: string;

    constructor(title: string, author: string) {
        this.title = title;
        this.author = author;
    }
}
