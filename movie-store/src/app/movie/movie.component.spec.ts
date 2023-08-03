import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieComponent } from './movie.component';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../services/movie.service';
import { DatePipe } from '@angular/common';

describe('MovieComponent', () => {
  let component: MovieComponent;
  let fixture: ComponentFixture<MovieComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MovieComponent]
    });
    fixture = TestBed.createComponent(MovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch movie by rank on init', () => {
    const route = TestBed.inject(ActivatedRoute);
    const movieService = TestBed.inject(MovieService);
    spyOn(route.paramMap, 'subscribe');
    spyOn(movieService, 'getMovieById');
  
    component.ngOnInit();
  
    expect(route.paramMap.subscribe).toHaveBeenCalled();
    expect(movieService.getMovieById).toHaveBeenCalled();
  });

  it('should transform date into ISO format', () => {
    const datePipe = TestBed.inject(DatePipe);
    spyOn(datePipe, 'transform');
  
    const date = '2023-08-03';
    component.getIsoDate(date);
  
    expect(datePipe.transform).toHaveBeenCalledWith(date, 'yyyy-MM-dd');
  });
});
