import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
const apiUrlCategory = "http://laboweb.ecam.be/notepad_s4/public/index.php/api/categories";
const apiUrlNote = "http://laboweb.ecam.be/notepad_s4/public/index.php/api/notes";

@Injectable({
  providedIn: 'root'
  })

export class RestApiService {

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError('Something bad happened; please try again later.');
  }
  
  private extractData(res: Response) {
    let body = res;
    return body || { };
  }
  getCategories(): Observable<any> {
    return this.http.get(apiUrlCategory, httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError));
  }
  
  getCategoryById(id: string): Observable<any> {
    const url = `${apiUrlCategory}/${id}`;
    return this.http.get(url, httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError));
  }
  
  postCategory(data): Observable<any> {
    const url = `${apiUrlCategory}`;
    console.log(data);
    return this.http.post(url, data, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }
  
  updateCategory(id: string, data): Observable<any> {
    const url = `${apiUrlCategory}/${id}`;
    return this.http.put(url, data, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }
  
  deleteCategory(id: string): Observable<{}> {
    const url = `${apiUrlCategory}/${id}`;
    return this.http.delete(url, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }
  
  getNotes(): Observable<any> {
    return this.http.get(apiUrlNote, httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError));
  }
  
  getNoteById(id: string): Observable<any> {
    const url = `${apiUrlNote}/${id}`;
    return this.http.get(url, httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError));
  }
  
  postNote(data): Observable<any> {
    const url = `${apiUrlNote}`;
    console.log(data);
    return this.http.post(url, data, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }
  
  updateNote(id: string, data): Observable<any> {
    const url = `${apiUrlNote}/${id}`;
    return this.http.put(url, data, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }
  
  deleteNote(id: string): Observable<{}> {
    const url = `${apiUrlNote}/${id}`;
    return this.http.delete(url, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }
  constructor(private http: HttpClient) { }
}
