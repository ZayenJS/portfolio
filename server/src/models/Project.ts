import { Field, ID, ObjectType } from '@nestjs/graphql';
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  OneToMany,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { Image } from './Image';
import { Technology } from './Technology';

@ObjectType()
@Entity({ name: 'projects' })
export class Project extends BaseEntity {
  @Field(() => ID, { nullable: false })
  @PrimaryGeneratedColumn()
  public id: number;

  @Field(() => String, { nullable: false })
  @Column({ type: 'varchar', length: '255', nullable: false, unique: true })
  public name: string;

  @Field(() => String, { nullable: false })
  @Column({ type: 'text', nullable: false })
  public description: string;

  @Field(() => String, { nullable: true })
  @Column({ type: 'text', nullable: true })
  public url: string | null;

  @Field(() => String, { nullable: true })
  @Column({ type: 'text', nullable: true })
  public repository: string | null;

  @Field(() => String, { nullable: false })
  @CreateDateColumn({ name: 'created_at' })
  public createdAt: string;

  @Field(() => String, { nullable: true })
  @UpdateDateColumn({ name: 'updated_at', nullable: true })
  public updatedAt: string | null;

  @Field(() => [Image], { nullable: false })
  @OneToMany(() => Image, (image) => image.project)
  images?: Image[];

  @Field(() => [Technology], { nullable: false })
  @JoinTable({
    name: 'projects_technologies',
    joinColumn: { name: 'project_id', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'technology_id', referencedColumnName: 'id' },
  })
  @ManyToMany(() => Technology, { nullable: false, onDelete: 'CASCADE' })
  public technologies: Technology[];
}
