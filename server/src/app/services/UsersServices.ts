import { Repository, getCustomRepository } from 'typeorm';
import { hash } from 'bcryptjs';

import { User } from '@entities/User';
import { UsersRepository } from '../repositories/UsersRepository';

interface IRequest {
  name: string;
  email: string;
  password: string;
}

class UsersServices {
  private usersRepository: Repository<User>;

  constructor() {
    this.usersRepository = getCustomRepository(UsersRepository);
  }

  public async create({ name, email, password }: IRequest): Promise<User> {
    const userAlreadyExists = await this.usersRepository.findOne({ email });

    if (userAlreadyExists) {
      return userAlreadyExists;
    }

    const passwordHash = await hash(password, 8);

    const user = this.usersRepository.create({
      name,
      email,
      password: passwordHash,
    });

    await this.usersRepository.save(user);

    delete user.password;

    return user;
  }
}

export { UsersServices };
