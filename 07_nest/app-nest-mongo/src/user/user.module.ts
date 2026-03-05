import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { User } from './schema/user.schema';
import { UserSchema } from './schema/user.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: User.name, // nombre de la collection
        schema: UserSchema,
      },
    ]),
  ], // agrego esto
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
