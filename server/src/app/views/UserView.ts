import { User } from '@entities/User';

export interface IUser {
  id: string;
  name: string;
  email: string;
}

export default {
  render(user: User): IUser {
    return {
      id: user.id,
      name: user.name,
      email: user.email,
    };
  },

  renderMany(users: User[]): IUser[] {
    return users.map(user => this.render(user));
  },
};
