import { Component, OnInit } from '@angular/core';
import {Book} from '../book';
import {BooklistService} from '../booklist.service';

@Component({
  selector: 'app-reading-list',
  templateUrl: './reading-list.component.html',
  styleUrls: ['./reading-list.component.css']
})
export class ReadingListComponent implements OnInit {
  books: Book[];
  constructor(private bookListService: BooklistService) { }

  ngOnInit() {
    this.getBooks();
  }

  getBooks(): void {
    this.bookListService.getBooks().subscribe(books => this.books = books);
  }

  addBook(name: string): void {
    name = name.trim();
    if (!name) {
      return;
    }
    this.bookListService.addBook({name} as Book).subscribe(book => {this.books.push(book); } );
  }

  markAsRead(book: Book): void {
    book.read = true;
    this.bookListService.updateBook(book).subscribe(updatedBook => this.books.push(updatedBook) );
  }
}
