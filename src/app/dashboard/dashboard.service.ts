import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'



@Injectable() 

export class DashboardService {

    constructor(private http : HttpClient) {

    }

    private getMoviesList() {
       return this.http.get('url');
    }
}