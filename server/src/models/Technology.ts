import { Field, ID, ObjectType } from '@nestjs/graphql';
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  ManyToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Project } from './Project';

@ObjectType()
@Entity({ name: 'technologies' })
export class Technology extends BaseEntity {
  @Field(() => ID, { nullable: false })
  @PrimaryGeneratedColumn()
  public id: number;

  @Field(() => String, { nullable: false })
  @Column({ type: 'varchar', nullable: false, length: '100', unique: true })
  public name: string;

  @Field(() => String, { nullable: false })
  @Column({ type: 'text', nullable: false })
  public icon_url: string;

  @Field(() => String, { nullable: false })
  @CreateDateColumn({ name: 'created_at' })
  public createdAt: string;

  @Field(() => String, { nullable: true })
  @UpdateDateColumn({ name: 'updated_at', nullable: true })
  public updatedAt: string | null;

  @Field(() => [Project], { nullable: false })
  @ManyToMany(() => Project, { nullable: false, onDelete: 'CASCADE' })
  public projects: Project[];
}
