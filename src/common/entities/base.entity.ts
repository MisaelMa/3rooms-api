import { Column, CreateDateColumn, Entity, Generated, PrimaryGeneratedColumn, UpdateDateColumn, VersionColumn } from 'typeorm';
import { DateTimeZoneTransformer } from './transformers/date-time-zone.transformer';
//import { Field, ID, Int, Float, ObjectType } from 'type-graphql';

//@ObjectType()
export class Base {
  //@Field(type => ID)
  @PrimaryGeneratedColumn({
    type: 'int',
  })
  id: number;

  //@Field()
  @CreateDateColumn({
    type: 'timestamp with time zone',
  })
  createdAt: Date;

  //@Field()
  @UpdateDateColumn({
    type: 'timestamp with time zone',
  })
  updatedAt: Date;

  //@Field(type => Int)
  @VersionColumn({
    default: 0,
    nullable: false,
  })
  version: number;

  //@Field()
  @Column()
  @Generated('uuid')
  uuid: string;
}
