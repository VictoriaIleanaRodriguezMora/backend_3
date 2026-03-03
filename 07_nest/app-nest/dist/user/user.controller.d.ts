import { UserService } from './user.service';
import { User } from './entities/user.entity';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    create(user: User): User;
    findAll(): User[];
    findOne(id: string): User | null;
}
