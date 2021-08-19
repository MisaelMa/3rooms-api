import { Factory, Seeder } from 'typeorm-seeding';
import { Connection } from 'typeorm';

import { StudentEntity } from '../entities/student.entity';
import { StudentCatalogue } from './student.catalogue';
import { hash } from 'bcrypt';

export default class StudentInsertUpdateSeed implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    await connection.getRepository(StudentEntity).save(StudentCatalogue);
  }
}
