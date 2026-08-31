import { PipeTransform, Injectable, BadRequestException } from '@nestjs/common';

@Injectable()
export class PositiveIntPipe implements PipeTransform<string, number> {
  transform(value: string): number {
    const intValue = Number(value);

    if (isNaN(intValue) || intValue <= 0) {
      throw new BadRequestException(
        'The Input value must be a valid positive number',
      );
    }

    return intValue;
  }
}
