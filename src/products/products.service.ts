import { Injectable, Inject } from '@nestjs/common';

@Injectable()
export class ProductsService {
  constructor(
    @Inject('DATABASE_CONNECTION') private connection: any
  ) { }

  getConnectionStatus()
}
