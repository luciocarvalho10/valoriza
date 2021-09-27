import {
  Entity,
  PrimaryColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm"
import { v4 as uuid } from "uuid"

@Entity("tags")
class tag {
  @PrimaryColumn()
  readonly id: string

  @Column()
  name: string

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date

  constructor() {
    if (!this.id) {
      this.id = uuid()
    }
  }
}

export { tag }
