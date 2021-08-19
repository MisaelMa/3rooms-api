import { Column, Entity, DeleteDateColumn, Index, BeforeInsert, BeforeUpdate, JoinTable, OneToMany, OneToOne } from 'typeorm';
import { Exclude } from 'class-transformer';
import { hash } from 'bcryptjs';
import { ApiProperty } from '@nestjs/swagger';
import { EntityBaseWithDate, EntityBase, EmptyEntity } from '../../../../common/abstracts';

@Entity('user')
export class User extends EntityBaseWithDate(EntityBase(EmptyEntity)) {
  @ApiProperty()
  @Column({ type: 'varchar', length: 255, nullable: false })
  email!: string;

  @ApiProperty()
  @Column({ type: 'varchar', length: 100, nullable: false })
  name: string;

  @ApiProperty()
  @Column({ type: 'varchar', length: 50, nullable: false })
  username: string;

  @ApiProperty()
  @Exclude()
  @Column({ type: 'varchar', length: 500, nullable: true, select: false })
  password: string;

  @BeforeInsert()
  @BeforeUpdate()
  async hashPassword() {
    if (!this.password) {
      return;
    }
    this.password = await hash(this.password, 10);
  }

  @ApiProperty()
  @Column({ type: 'bool', default: true, select: false })
  enabled: boolean;

  @ApiProperty()
  @Column({ type: 'varchar', length: 20, nullable: false })
  rol: string;

  @ApiProperty()
  @DeleteDateColumn({ name: 'deleted_at' })
  public deletedAt: Date;
}
