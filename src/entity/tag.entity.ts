/* eslint-disable prettier/prettier */
import { IsEmail, IsNotEmpty, Length } from 'class-validator';
import { Column, Entity, ManyToMany, ManyToOne, PrimaryColumn } from 'typeorm';
import { BaseEntity } from './base.entity';
import { PostEntity } from './post.entity';

@Entity()
export class Tag extends BaseEntity {
  @IsNotEmpty()
  @PrimaryColumn()
  tag: string;

  @IsNotEmpty()
  @Column()
  content: string;

  @ManyToMany(() => PostEntity, (post) => post.tags, {
    cascade: true,
  })
  posts: PostEntity[];
}
