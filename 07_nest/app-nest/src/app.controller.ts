import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

// @Controller('/api') // si quiero definir rutas
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/hello') // esta ruta es /api/hello
  getHello(): string {
    return this.appService.getHello(); // El controlador, llama al servicio
  }
}
