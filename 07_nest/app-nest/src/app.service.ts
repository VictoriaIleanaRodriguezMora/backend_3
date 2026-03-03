import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    // este es el que retorna 'hello world'
    return 'Hello World!';
  }
}
