import { Controller, Get, Post, Body } from '@nestjs/common';
import { MoviesService } from './movies.service';
import { CreateMovieDto } from './dto/create-movie.dto';
import { Movie } from './interfaces/movie.interface';
import { ApiTags } from '@nestjs/swagger';


@ApiTags('movies')
@Controller('movies')
export class MoviesController {
    constructor(private moviesService: MoviesService) { }
    
    @Get()
    getMovies(): string {
        return this.moviesService.getMovies();
    }

    @Post()
    createMovie(@Body() createMovieDto: CreateMovieDto): Movie {
        return this.moviesService.createMovie(createMovieDto);
    }
}