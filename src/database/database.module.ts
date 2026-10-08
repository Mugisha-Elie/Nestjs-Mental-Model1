import { Module, DynamicModule, Global } from '@nestjs/common';
import { DatabaseConfig } from './interfaces/database-config';

@Global()
@Module({})
export class DatabaseModule {
  static forRoot(options: DatabaseConfig): DynamicModule {
    const connectionProvider = {
      provide: 'DATABASE_CONNECTION',
      useValue: {
        connected: true,
        connectionString: `postgres://${options.host}:${options.port}`,
      },
    };

    return {
      module: DatabaseModule,
      providers: [connectionProvider],
      exports: [connectionProvider],
    };
  }
}
