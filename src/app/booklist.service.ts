import { Injectable } from '@angular/core';
import {Book} from './book';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
const httpOptions = {
  headers: new HttpHeaders({'Content-Type' : 'application/json'})
};
@Injectable({
  providedIn: 'root'
})
export class BooklistService {
  private bookUrl = 'http://localhost:8081/books';
  private http: HttpClient;
  constructor(http: HttpClient) {
    this.http = http;
  }

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.bookUrl);
  }

  getBook(id: number): Observable<Book> {
    const url = `${this.bookUrl}/${id}`;
    return this.http.get<Book>(url);
  }

  addBook(book: Book): Observable<Book> {
    return this.http.post<Book>(this.bookUrl, book, httpOptions);
  }

  updateBook(book: Book): Observable<any> {
    return this.http.put(this.bookUrl, book, httpOptions);
  }

  deleteBook(book: Book | number): Observable<Book> {
    const id = typeof book === 'number' ? book : book.id;
    const url = `${this.bookUrl}/${id}`;
    return this.http.delete<Book>(url, httpOptions);
  }
}
