import { User } from '../entities/user.entity';

export const UsersCatalogue: User[] = [
  {
    id: 1,
    email: 'amir@gmail.com',
    name: "Amir Misael",
    username: 'MisaelMa',
    password: '12345',
    enabled: true,
    rol: 'admin'
  } as User,
  {
    id: 2,
    email: 'guest@gmail.com',
    name: "guest",
    username: 'guest',
    password: '12345',
    enabled: true,
    rol: 'guest'
  } as User,
];
