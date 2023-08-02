import { Component } from '@angular/core';
import { Movie } from '../models/movie.model';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
   topMovies: Movie[] = [];

   constructor (private movieService: MovieService) {}

   ngOnInit(): void {
    this.topMovies = this.movieService.getAllMovies().slice(0,4);
   }
}
