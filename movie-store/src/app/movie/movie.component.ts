import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Movie} from '../models/movie.model';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
 selectedMovie: Movie | undefined;

 constructor (private route: ActivatedRoute,
              private movieService: MovieService
  ) {}
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const rank = Number(params.get('rank'));
      this.selectedMovie = this.movieService.getMovieById(rank);
      console.log(this.selectedMovie);
    })
  }

}
