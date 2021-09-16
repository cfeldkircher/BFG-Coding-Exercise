import { Component, OnInit } from '@angular/core';
import { JsonDataService } from './core/services/json-data.service';
import { IBook } from './core/interfaces/ibook.interface';
import { IMovie } from './core/interfaces/imovie.interface';
import { Book } from './core/models/book.model';
import { Movie } from './core/models/movie.model';
import { IJsonData } from './core/interfaces/ijson-data.interface';
import { JsonData } from './core/models/json-data.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})

export class AppComponent implements OnInit{

    title = 'BFG-Coding-Exercise';
    bookList: IBook[] = [];
    movieList: IMovie[] = [];
 
    constructor(private dataService: JsonDataService) {}

    ngOnInit(){
        this.getJsonData();
    }

    getJsonData() {
        this.dataService.getJsonData().subscribe(res => {
            this.bookList = res.books;
            this.movieList = res.movies;
        })
    }
    appendJsonData(data: any) {
        this.dataService.appendJsonData(data).subscribe(res => {
            this.getJsonData;
        })
    }
    addBook(title: string, author: string) {
        if (title != '' && author != '') {
            let newBook: IBook = new Book(title, author);
            this.bookList.push(newBook);

            let jsonData: IJsonData = new JsonData(this.bookList, this.movieList);
            this.appendJsonData(jsonData);
        } else {
            alert('Please enter a book title and author');
        }
        
    }
    addMovie(title: string, director: string) {
        if (title != '' && director != '') {
            let newMovie: IMovie = new Movie(title, director);
            this.movieList.push(newMovie);

            let jsonData: IJsonData = new JsonData(this.bookList, this.movieList);
            this.appendJsonData(jsonData);
        } else {
            alert('Please enter a movie title and director');
        }
    }
}
