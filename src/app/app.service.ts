import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

export class AppComponent {
    constructor(private http: HttpClient) { }
    private extractData(res: Response) {
        let body = res;
        return body || { };
      }
}