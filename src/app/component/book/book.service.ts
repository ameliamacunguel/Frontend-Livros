import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { Book } from './book-create/book.model';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  
  baseUrl = "https://localhost:7034/books"
 

  constructor(private snackBar: MatSnackBar, private http: HttpClient){}

  showMessage(msg: string) {
    this.snackBar.open(msg, "X", {
      duration:3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass:['msg-success']
    });
  }


  create(book: Book): Observable<Book> {
    return this.http.post<Book>(this.baseUrl, book).pipe(
     map((obj) => obj)
    );
  }

  read():Observable<Book[]>{
    return this.http.get<Book[]>(this.baseUrl).pipe(
      map((obj) => obj)
      
    );
  }

  readById(id: string): Observable<Book> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Book>(url).pipe(
      map((obj) => obj)
      
    );
  }

  update(book: Book): Observable<Book> {
    return this.http.post<Book>(this.baseUrl, book).pipe(
     map((obj) => obj)
    );
  }

  delete(book: Book): Observable<Book> {
    return this.http.post<Book>(this.baseUrl, book).pipe(
     map((obj) => obj)
    );
  }
}
