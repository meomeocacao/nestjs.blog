/* eslint-disable prettier/prettier */
import { IsNotEmpty } from 'class-validator';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryColumn,
} from 'typeorm';
import { BaseEntity } from './base.entity';
import { Category } from './category.entity';
import { Comment } from './comment.entity';
import { ImgPost } from './imgpost.entity';
import { Tag } from './tag.entity';
import { User } from './user.entity';

@Entity()
export class Post extends BaseEntity {
  @PrimaryColumn()
  @IsNotEmpty()
  title: string;

  @Column()
  @IsNotEmpty()
  content: string;

  @OneToMany(() => ImgPost, (imgpost) => imgpost.post)
  imgposts: ImgPost[];

  @OneToMany(() => Comment, (comment) => comment.post)
  comments: Comment[];

  @ManyToOne(() => User, (user) => user.posts)
  user: User;

  @ManyToMany(() => Tag, (tag) => tag.posts, { cascade: true })
  @JoinTable()
  tags: Tag[];

  @ManyToMany(() => Category, (category) => category.posts, { cascade: true })
  @JoinTable()
  categories: Category[];

  @Column({ default: false })
  published: boolean;
}
