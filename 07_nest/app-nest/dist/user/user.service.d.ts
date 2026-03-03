import { User } from './entities/user.entity';
export declare class UserService {
    users: User[];
    create(user: User): User;
    findAll(): User[];
    findOne(id: number): User | null;
}
