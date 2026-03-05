import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema() // me habilita la creacion del schema
export class User {
  @Prop({ required: true }) // acá van las configuraciones de cada propiedad
  first_name: string;
  @Prop({ required: true })
  last_name: string;
  @Prop({ required: true, unique: true })
  email: string;
  @Prop({ required: true })
  role: string;
}

// le digo que me genere el schema a partir de la funcionalidad SchemFactory
export const UserSchema = SchemaFactory.createForClass(User);
export type UserDocument = User & Document; // creo mi TIPO. User y Document de Mongo
