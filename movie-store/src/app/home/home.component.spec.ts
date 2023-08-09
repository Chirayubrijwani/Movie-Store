import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { MovieService } from '../services/movie.service';
import { of, throwError } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { Movie } from '../models/movie.model';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let movieService: jasmine.SpyObj<MovieService>;

  beforeEach(() => {
    const spy = jasmine.createSpyObj('MovieService', ['getAllMovies', 'searchMovies']);
    TestBed.configureTestingModule({
      declarations: [HomeComponent],
      providers: [{ provide: MovieService, useValue: spy }],
      imports: [FormsModule],
    });
    movieService = TestBed.inject(MovieService) as jasmine.SpyObj<MovieService>;
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch top 4 movies based on year', () => {
    const movies: Movie[] = [
    ];

    movieService.getAllMovies.and.returnValue(of(movies));

    fixture.detectChanges();

    expect(component.topMovies).toEqual([
      
    ]);
  });

  it('should handle errors when fetching top movies', () => {
    movieService.getAllMovies.and.returnValue(throwError('Error fetching movies'));
  
    fixture.detectChanges();
  
    expect(component.topMovies).toEqual([
      
    ]);
  });


  it('should filter and sort movies on search', () => {
    component.searchText = 'Avengers';

    component.onSearch();

    expect(movieService.searchMovies).toHaveBeenCalledWith('Avengers');
    expect(component.topMovies).toEqual([
      {
        "year": 2012,
        "title": "The Avengers",
        "info": {
            "directors": ["Joss Whedon"],
            "release_date": "2012-04-11T00:00:00Z",
            "rating": 8.2,
            "genres": [
                "Action",
                "Fantasy"
            ],
            "image_url": "https://ia.media-imdb.com/images/M/MV5BMTk2NTI1MTU4N15BMl5BanBnXkFtZTcwODg0OTY0Nw@@._V1_SX400_.jpg",
            "plot": "Nick Fury of S.H.I.E.L.D. assembles a team of superhumans to save the planet from Loki and his army.",
            "rank": 48,
            "running_time_secs": 8580,
            "actors": [
                "Robert Downey Jr.",
                "Chris Evans",
                "Scarlett Johansson"
            ]
        }
    },
    ]);
  });
});
