import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { MoviesService } from './movies.service';
import { CreateMovieDto } from './dto/create-movie.dto';
import { Movie } from './interfaces/movie.interface';
import { ApiTags, ApiParam } from '@nestjs/swagger';


@ApiTags('movies')
@Controller('movies')

export class MoviesController {
    constructor(private moviesService: MoviesService) { }

    @Get()
    getMovies(): Movie[] {
        return this.moviesService.getMovies();
    }

    @ApiParam({name: 'id'})
    @Get(':id')
    getMovie(@Param('id') id): Movie {
        return this.moviesService.getMovie(id);
    }

    @Post()
    createMovie(@Body() createMovieDto: CreateMovieDto): Movie {
        return this.moviesService.createMovie(createMovieDto);
    }

    @ApiParam({name: 'id'})
    @Put(':id')
    updateMovie(@Param('id') id, @Body() updateMovieDto: CreateMovieDto): Movie {
        return this.moviesService.updateMovie(id, updateMovieDto)
    }

    @ApiParam({name: 'id'})
    @Delete(':id')
    deleteMovie(@Param('id') id): Movie {
        return this.moviesService.deleteMovie(id);
    }
}