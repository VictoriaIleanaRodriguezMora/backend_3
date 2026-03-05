import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './schema/user.schema';
import { Model } from 'mongoose';
import { createHash } from './utils/utils';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private UserModel: Model<UserDocument>) {}

  // CREATE
  async create(createUserDto: CreateUserDto) {
    const newUser = {
      ...createUserDto,
      password: createHash(createUserDto.password),
      role: createUserDto.role || 'user',
    } as CreateUserDto;

    return await this.UserModel.create(newUser);
  }

  // GET ALL
  async findAll() {
    return await this.UserModel.find();
  }

  // GET ONE
  async findOne(id: string) {
    return await this.UserModel.findById(id);
  }

  // FIND BY EMAIL
  async findByEmail(emailParam: string) {
    return await this.UserModel.findOne({ email: emailParam });
  }

  // UPDATE
  async update(id: string, updateUserDto: UpdateUserDto) {
    if (updateUserDto.password) {
      const password: string = updateUserDto.password;
      updateUserDto.password = createHash(password);
    }

    return this.UserModel.findByIdAndUpdate(id, updateUserDto, { new: true });
  }

  // DELETE
  async remove(id: string) {
    return await this.UserModel.findByIdAndDelete(id);
  }
}
