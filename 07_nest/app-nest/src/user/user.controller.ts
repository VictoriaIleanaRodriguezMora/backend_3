import {
  Controller,
  Get,
  Post,
  Body,
  // Patch,
  Param,
  // Delete,
} from '@nestjs/common';
import { UserService } from './user.service';
// import { CreateUserDto } from './dto/create-user.dto';
// import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Controller('users') // la ruta es /users
export class UserController {
  // el private significa que el acceso a esta propiedad está restringido a sólo dentro de esta clase
  // readonly significa que una vez asignado el valor no se puede modificar en ningun otro lugar. despues de la inicializacion, no se puede modificar
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body() user: User) {
    // create(@Body() - indica que va a recibir un body, ¿De qué tipo?
    return this.userService.create(user); // guardo el obj que recibo, que es de tipo user
  }

  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Get(':id') // indico parametro dinámico
  findOne(@Param('id') id: string) {
    // findOne |  es el método del servicio
    // (@Param('id') | es para indicar el tipado del parametro
    return this.userService.findOne(+id); // el +, es para convertirlo a number
  }
}
