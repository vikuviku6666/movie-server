import { Injectable } from '@nestjs/common';
import { Movie } from './interfaces/movie.interface';

@Injectable()
export class MoviesService {
   getMovies(): string{
        return "this will return all the quote";
   }
    
    createMovie(movie: Movie) {
        return movie;
    }
}
