import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsController } from './products/products.controller';
import { UsersController } from './users/users.controller';
import { AuthMiddleware } from './custom/middleware/auth/auth.middleware';
import { DatabaseModule } from './database/database.module';
import { ProductsService } from './products/products.service';

@Module({
  imports: [DatabaseModule.forRoot({ host: 'localhost', port: 5432 })],
  controllers: [AppController, ProductsController, UsersController],
  providers: [AppService, ProductsService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleware).forRoutes('*');
  }
}
