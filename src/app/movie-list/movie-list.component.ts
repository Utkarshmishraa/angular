import { Component,OnInit,Input } from '@angular/core';


@Component({
    selector: 'movie-list',
    templateUrl : './movie-list.component.html',
    styleUrls :[ './movie-list.component.scss']
})

export class MoviesListComponent implements OnInit {
    @Input() movieList;

    constructor() {
        
    }

    ngOnInit() {
        console.log(this.movieList);
    }
}