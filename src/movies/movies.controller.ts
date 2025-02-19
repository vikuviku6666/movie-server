import { Controller, Get, Post, Put, Delete, Body, Param, HttpException, HttpStatus } from '@nestjs/common';
import { MoviesService } from './movies.service';
import { CreateMovieDto } from './dto/create-movie.dto';
import { Movie } from './interfaces/movie.interface';
import { ApiTags, ApiParam } from '@nestjs/swagger';


@ApiTags('movies')
@Controller('movies')

export class MoviesController {
    constructor(private moviesService: MoviesService) { }

    @Get()
    getMovies(): Promise<Movie[]> {
        return this.moviesService.getMovies();
    }

    @ApiParam({name: 'id'})
    @Get(':id')
    getMovie(@Param('id') id): Promise<Movie> {
        return this.moviesService.getMovie(id);
    }

    @Post()
   async createMovie(@Body() createMovieDto: CreateMovieDto): Promise<Movie> {
        try {
            
            return await this.moviesService.createMovie(createMovieDto);
        } catch(err) {
            throw new HttpException(err.message, HttpStatus.UNPROCESSABLE_ENTITY);
        }
    }

    @ApiParam({name: 'id'})
    @Put(':id')
    updateMovie(@Param('id') id, @Body() updateMovieDto: CreateMovieDto): Promise<Movie> {
        return this.moviesService.updateMovie(id, updateMovieDto)
    }

    @ApiParam({name: 'id'})
    @Delete(':id')
    deleteMovie(@Param('id') id): Promise<any> {
        return this.moviesService.deleteMovie(id);
    }
}