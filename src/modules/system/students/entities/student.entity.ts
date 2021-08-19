import { Column, Entity, DeleteDateColumn, Index, BeforeInsert, BeforeUpdate, JoinTable, OneToMany, OneToOne } from 'typeorm';
import { Exclude } from 'class-transformer';
import { hash } from 'bcryptjs';
import { ApiProperty } from '@nestjs/swagger';
import { EntityBaseWithDate, EntityBase, EmptyEntity } from '../../../../common/abstracts';

@Entity('student')
export class StudentEntity extends EntityBaseWithDate(EntityBase(EmptyEntity)) {
  @ApiProperty()
  @Column({ type: 'varchar', length: 100, nullable: false })
  name: string;

  @ApiProperty()
  @Column({ type: 'varchar', length: 50, nullable: false })
  type: string;

  @ApiProperty()
  @Column({ type: 'varchar', length: 50, nullable: false })
  registeDate: string;
}
