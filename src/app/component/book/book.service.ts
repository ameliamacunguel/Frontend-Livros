import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { Book } from './book-create/book.model';
import { Observable, map, catchError, EMPTY} from 'rxjs';
import { Form } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  
  baseUrl = "https://localhost:7034/books"
 

  constructor(private snackBar: MatSnackBar, private http: HttpClient){}

  showMessage(msg: string, isError: boolean = false) {
    this.snackBar.open(msg, "X", {
      duration:3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ['msg-error'] : ['msg-success']
    });
  }


  create(book: Book): Observable<Book> {
    return this.http.post<Book>(this.baseUrl, book).pipe(
     map((obj) => obj),
     catchError(e =>this.errorHandler(e))
    );
  }

  read():Observable<Book[]>{
    return this.http.get<Book[]>(this.baseUrl).pipe(
      map((obj) => obj),
      catchError(e =>this.errorHandler(e))
      
    );
  }

  readById(id: number): Observable<Book> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Book>(url).pipe(
      map((obj) => obj),
      catchError(e =>this.errorHandler(e))
      
    );
  }

  update(book: Book): Observable<Book> {
    const url = `${this.baseUrl}/${book.id}`;
    return this.http.put<Book>(url, book).pipe(
     map((obj) => obj),
     catchError(e =>this.errorHandler(e))
    );
  }

  delete(book: Book): Observable<Book> {
    console.log()
    return this.http.delete<Book>(`${this.baseUrl}/${book.id}`).pipe(
     map((obj) => obj),
     catchError(e =>this.errorHandler(e))
    );
  }
  errorHandler(e: any): Observable<any>{
    this.showMessage("Ocorreu um erro!", true);
    return EMPTY
  }

  postForms(form: any): Observable<Form>{
    return this.http.post<any>(this.baseUrl, form); 
  }

}
