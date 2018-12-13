import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
    
})

export class DashboardComponent implements OnInit {
    User = "Utkarsh";
    movie : any = '';
    movieList : any;
    noMovieListPresent :boolean = false;
    constructor() {

    }

    ngOnInit() {
        // alert('DashBoard Component Loaded');
    }

    searchMovie(movieName) {
        if(movieName == '') { 
           this.noMovieListPresent = true;
        }
        this.noMovieListPresent = false;
        this.movieList = movieName
        console.log("Search for Movies" + movieName);
    }

}