import { Factory, Seeder } from 'typeorm-seeding';
import { Connection } from 'typeorm';

import { User } from '../entities/user.entity';
import { UsersCatalogue } from './users.catalogue';
import { hash } from 'bcrypt';

export default class UsersInsertUpdateSeed implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    const list = await Promise.all(
      UsersCatalogue.map(
        async (user): Promise<User> => {
          user.password = await hash(user.password, 10);
          return user;
        },
      ),
    );
    await connection.getRepository(User).save(list,{});
  }
}
