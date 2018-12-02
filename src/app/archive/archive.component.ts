import { Component, OnInit } from '@angular/core';
import {Book} from '../book';
import {BooklistService} from '../booklist.service';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.css']
})
export class ArchiveComponent implements OnInit {
  books: Book[];
  constructor(private bookListService: BooklistService) { }

  ngOnInit() {
    this.getBooks();
  }

  getBooks(): void {
    this.bookListService.getBooks().subscribe(books => this.books = books);
  }

  readAgain(book: Book): void {
    book.read = false;
    this.bookListService.updateBook(book).subscribe(updatedBook => this.books.push(updatedBook) );
  }
}
