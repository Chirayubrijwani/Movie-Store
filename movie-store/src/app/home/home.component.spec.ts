import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { MovieService } from '../services/movie.service';
import { of } from 'rxjs';
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

  it('should filter and sort movies on search', () => {
    const movies: Movie[] = [
    ];

    // movieService.searchMovies.and.returnValue(of(movies));

    component.searchText = 'Avengers';

    component.onSearch();

    expect(movieService.searchMovies).toHaveBeenCalledWith('Avengers');
    expect(component.topMovies).toEqual([
    ]);
  });
});
