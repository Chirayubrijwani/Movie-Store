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
    // Filter the top movies based on the search text
    this.topMovies = this.movieService
      .searchMovies(this.searchText)
      .sort((a, b) => b.year - a.year)
      // .slice(0, 4);
  }


// Method 1
   // 1.fetch without search string
  //  2.filter by year desc(top 4)
  // Method 2
    //1. Fetch with search string
    //2.By year desc ()
}
