import { Component, OnInit } from '@angular/core';
import { Movie } from '../models/movie.model'
import { MovieService } from '../services/movie.service';
import { Router } from '@angular/router';
import {Subject} from 'rxjs';
import { debounceTime, distinctUntilChanged, filter } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchText = '';
  searchResults: Movie[] = [];
  private searchSubject = new Subject<string>();

  constructor(private movieService: MovieService,
    private router: Router) {}

  ngOnInit(): void {
    this.searchSubject.pipe(debounceTime(300),
    distinctUntilChanged(),
    filter((searchText) => searchText.length >= 3 || searchText.trim() === '')
    ).subscribe(searchText => {
      this.performSearch(searchText);
    });
  }

  performSearch(searchText: string): void {
    if(searchText === '' ) {
      this.searchResults = [];
    } else {
      this.searchResults = this.movieService.searchMovies(searchText);
    }
  }
// Search on directors,actors,geners
//Local storage on state
  // onSearch(): void {
  //   if(this.searchText.trim() === '') {
  //     this.searchResults = [];
  //   } else {
  //     this.searchResults = this.movieService.searchMovies(this.searchText);
  //   }
  // }

  onSearch():void {

    this.searchSubject.next(this.searchText.trim());
  }

  goToMovieDetails(rank: number): void {
    this.router.navigateByUrl(`/movie/${rank}`);
  }
}
