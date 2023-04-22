import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  Tree,
  TreeChildren,
  TreeParent,
} from 'typeorm';

@Entity()
@Tree('materialized-path')
export class MenuItem {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  url: string;

  // @Column({ type: 'integer', default: null })
  // parentId: number;

  @Column({ type: 'datetime' })
  createdAt: string;

  @TreeParent()
  parent: MenuItem;

  @TreeChildren()
  children: MenuItem[];
}
