import { Field, ID, ObjectType } from '@nestjs/graphql';
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@ObjectType()
@Entity({ name: 'users' })
export class User extends BaseEntity {
  @Field(() => ID, { nullable: false })
  @PrimaryGeneratedColumn()
  public id: number;

  @Field(() => String, { nullable: false })
  @Column({
    type: 'varchar',
    nullable: false,
    length: '100',
    name: 'first_name',
  })
  public firstName: string;

  @Field(() => String, { nullable: false })
  @Column({
    type: 'varchar',
    nullable: false,
    length: '100',
    name: 'last_name',
  })
  public lastName: string;

  @Field(() => String, { nullable: false })
  @Column({
    type: 'varchar',
    nullable: false,
    length: '100',
  })
  public username: string;

  @Field(() => String, { nullable: false })
  @Column({ type: 'varchar', nullable: false, length: '100', unique: true })
  public email: string;

  @Column({ type: 'text', nullable: false })
  public password: string;

  @Field(() => String, { nullable: false })
  @Column({
    type: 'enum',
    enum: ['ADMIN', 'USER'],
    default: 'USER',
    nullable: true,
  })
  public type: 'ADMIN' | 'USER';

  @Field(() => String, { nullable: false })
  @CreateDateColumn({ name: 'created_at' })
  public createdAt: string;

  @Field(() => String, { nullable: true })
  @UpdateDateColumn({ name: 'updated_at', nullable: true })
  public updatedAt: string | null;
}
