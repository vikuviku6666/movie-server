import { Controller, Get } from '@nestjs/common';

@Controller('movies')
export class MoviesController {

    @Get() //localhost:3000/movies
    getMovies() {
    return 'watch nice movies';
    }
}
