import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Movie } from './interfaces/movie.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
@Injectable()
export class MoviesService {
    constructor(@InjectModel('Movie') private readonly movieModel: Model<Movie>){}
   

    async getMovies(): Promise<Movie[]> {
        return await this.movieModel.find().exec();
        
   }
   async getMovie(id: string): Promise<Movie> {
       try {
        return await this.movieModel.findById(id).exec();
       } catch (err) {
        throw new HttpException('Movie Not Found', HttpStatus.NOT_FOUND);
     }
   }
    
   async createMovie(movie: Movie): Promise<Movie> {
        const newMovie = await new this.movieModel(movie);
        return newMovie.save();
    }

  async  updateMovie(id: string, updateMovieDto): Promise<Movie> {
        
      return await this.movieModel.findByIdAndUpdate(id, updateMovieDto, {
          new: true,
      });
    }

   async deleteMovie(id: string): Promise<any> {
       return await this.movieModel.findByIdAndRemove(id);
   }
}
