import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const role = req.headers['x-user-role'] as string;

    if (role) {
      (req as any).user = {
        roles: [role],
      };
    }
    next();
  }
}
