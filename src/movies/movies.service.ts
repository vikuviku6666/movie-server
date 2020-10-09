import { Injectable } from '@nestjs/common';

@Injectable()
export class MoviesService {
   getMovies(): string{
        return "this will return all the quote";
   }
    
    createMovie(movie: any) {
        return movie;
    }
}
