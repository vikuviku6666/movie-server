import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { MoviesModule } from './movies/movies.module';
@Module({
  imports: [MongooseModule.forRoot(process.env.MONGO_URI, { 
    useNewUrlParser: true
  }), 
  MoviesModule,
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
