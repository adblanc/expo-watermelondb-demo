import { Model, Relation } from "@nozbe/watermelondb";
import { Associations } from "@nozbe/watermelondb/Model";
import { relation } from "@nozbe/watermelondb/decorators";

import type { Post } from "./Post";
import { TableName } from "./schema";

export class Comment extends Model {
  static table = TableName.Comments;
  static associations: Associations = {
    [TableName.Posts]: { type: "belongs_to", key: "post_id" },
  };

  @relation("posts", "post_id") post: Relation<Post>;
}
