import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchComponent } from './search.component';
import { MovieService } from '../services/movie.service';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchComponent]
    });
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should perform search and update search results', () => {
    const movieService = TestBed.inject(MovieService);
    spyOn(movieService, 'searchMovies').and.returnValue([        {
      "year": 2011,
      "title": "Water for Elephants",
      "info": {
          "directors": ["Francis Lawrence"],
          "release_date": "2011-04-15T00:00:00Z",
          "rating": 6.9,
          "genres": [
              "Drama",
              "Romance"
          ],
          "image_url": "https://ia.media-imdb.com/images/M/MV5BMTQzMDU3NDEwN15BMl5BanBnXkFtZTcwMTI3MDU0NA@@._V1_SX400_.jpg",
          "plot": "A veterinary student abandons his studies after his parents are killed and joins a traveling circus as their vet.",
          "rank": 907,
          "running_time_secs": 7200,
          "actors": [
              "Robert Pattinson",
              "Reese Witherspoon",
              "Christoph Waltz"
          ]
      }
  },]);
  
    const searchText = 'Test';
    component.performSearch(searchText);
  
    expect(movieService.searchMovies).toHaveBeenCalledWith(searchText);
    expect(component.searchResults).toEqual([        {
      "year": 2011,
      "title": "Water for Elephants",
      "info": {
          "directors": ["Francis Lawrence"],
          "release_date": "2011-04-15T00:00:00Z",
          "rating": 6.9,
          "genres": [
              "Drama",
              "Romance"
          ],
          "image_url": "https://ia.media-imdb.com/images/M/MV5BMTQzMDU3NDEwN15BMl5BanBnXkFtZTcwMTI3MDU0NA@@._V1_SX400_.jpg",
          "plot": "A veterinary student abandons his studies after his parents are killed and joins a traveling circus as their vet.",
          "rank": 907,
          "running_time_secs": 7200,
          "actors": [
              "Robert Pattinson",
              "Reese Witherspoon",
              "Christoph Waltz"
          ]
      }
  },]);
  });

  it('should push search text to search subject', () => {
    spyOn(component.searchSubject, 'next');
  
    const searchText = 'Test';
    component.searchText = searchText;
    component.onSearch();
  
    expect(component.searchSubject.next).toHaveBeenCalledWith(searchText);
  });
});
