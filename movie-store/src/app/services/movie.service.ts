import { Injectable } from '@angular/core';
import { Movie } from '../models/movie.model';
import {moviesData} from '../models/movies.data';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private movies: Movie[];

  constructor() {
    this.movies = moviesData;
   }

   getAllMovies():Observable< Movie[]> {
    return of(this.movies); //Replace this with API calls if you have an actual API
   }

   searchMovies(searchText: string): Movie[] {
    //Implement movie search based on the searchText provided
     return this.movies.filter(movie => 
      //By adding the or condition we can add search based on genere,actor etc 
      movie.title.toLowerCase().includes(searchText.toLowerCase()) 
     // Present search is based on movie title
)
   }

  getMovieById(rank: number): Movie | undefined {
     // Implement logic to get a movie by its ID
    return this.movies.find(movie => movie.info.rank === rank);
   }
}
