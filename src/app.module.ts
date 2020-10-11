import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { MoviesModule } from './movies/movies.module';
import { LoggerMiddleware } from './shared/middlewares/logger.middleware';
@Module({
  imports: [MongooseModule.forRoot(process.env.MONGO_URI, { 
    useNewUrlParser: true
  }), 
  MoviesModule,
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('movies');
  }

}
