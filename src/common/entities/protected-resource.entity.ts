import { Column } from 'typeorm';
import { Base } from './base.entity';
//import { Field } from 'type-graphql';

export class ProtectedResource extends Base {
  //@Field()
  @Column({
    type: 'boolean',
    default: false,
    nullable: false,
  })
  isRemoved: boolean;

  //@Field()
  @Column({
    type: 'timestamp',
    nullable: true,
  })
  removedAt: Date | null;
}
