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
   searchText: string = '';

   constructor (private movieService: MovieService) {}

   ngOnInit(): void {
    this.loadTopMovies();
   }


   loadTopMovies() {
    // Get all movies and sort them in descending order based on the year
    this.movieService.getAllMovies().subscribe((movies) => {
      this.topMovies = movies.sort((a, b) => b.year - a.year).slice(0, 4);
    });
  }

onSearch() {
    if (this.searchText) {
      // Filter the top movies based on the search text
      this.topMovies = this.movieService
        .searchMovies(this.searchText)
        .sort((a, b) => b.year - a.year);
    } else {
      // If the search text is empty, reload the top movies
      this.loadTopMovies();
    }
  }
}
