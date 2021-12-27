import { Field, ID, ObjectType } from '@nestjs/graphql';
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Project } from './Project';

@ObjectType()
@Entity({ name: 'images' })
export class Image extends BaseEntity {
  @Field(() => ID, { nullable: false })
  @PrimaryGeneratedColumn()
  public id: number;

  @Field(() => String, { nullable: false })
  @Column({ type: 'text', nullable: false })
  public url: string;

  @Field(() => String, { nullable: false })
  @CreateDateColumn({ name: 'created_at' })
  public createdAt: string;

  @Field(() => String, { nullable: true })
  @UpdateDateColumn({ name: 'updated_at', nullable: true })
  public updatedAt: string | null;

  @Field(() => Project)
  @JoinColumn({ name: 'project_id', referencedColumnName: 'id' })
  @ManyToOne(() => Project, (project) => project.images, {
    onDelete: 'CASCADE',
  })
  public project: Project;
}
