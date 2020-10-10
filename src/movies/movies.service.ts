import { Injectable } from '@nestjs/common';
import { Movie } from './interfaces/movie.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
@Injectable()
export class MoviesService {
    constructor(@InjectModel('Movie') private readonly movieModel: Model<Movie>){}
    movies: Movie[] = [
        {
            id: '1',
            title: 'Mission Impossible',
            author: 'Tom Curise'
        },
        {
            id: '2',
            title: 'London As Fallen',
            author: 'Gegard'
        },
        {
            id: '3',
            title: 'Mission Impossible 2',
            author: 'Tom Curise'
        }
    ];

   getMovies(): Movie[] {
        return this.movies;
   }
   getMovie(id: string): Movie{
        return this.movies.find(movie => movie.id === id);
   }
    
    createMovie(movie: Movie) {
        return movie;
    }

    updateMovie(id: string, updateMovieDto): Movie {
        const data = this.movies.find(movie => movie.id === id);
        data.title = updateMovieDto.title ? updateMovieDto.title : data.title;
        data.author = updateMovieDto.author ? updateMovieDto.author : data.author;
        return data;
    }

    deleteMovie(id: string): Movie{
        return this.movies.find(movie => movie.id === id);
   }
}
