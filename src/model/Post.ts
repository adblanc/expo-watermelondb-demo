import { Model, Query } from "@nozbe/watermelondb";
import { Associations } from "@nozbe/watermelondb/Model";
import { field, text, children } from "@nozbe/watermelondb/decorators";

import type Comment from "./Comment";
import { TableName } from "./schema";

export default class Post extends Model {
  static table = TableName.Posts;
  static associations: Associations = {
    [TableName.Comments]: { type: "has_many", foreignKey: "post_id" },
  };

  @text("title") title: string;
  @text("body") body: string;
  @field("is_pinned") isPinned: boolean;

  @children("comments") comments: Query<Comment>;
}
