import { appSchema, tableSchema } from "@nozbe/watermelondb";

export enum TableName {
  Posts = "posts",
  Comments = "comments",
}

export const mySchema = appSchema({
  version: 1,
  tables: [
    tableSchema({
      name: TableName.Posts,
      columns: [
        { name: "title", type: "string" },
        { name: "subtitle", type: "string", isOptional: true },
        { name: "body", type: "string" },
        { name: "is_pinned", type: "boolean" },
      ],
    }),
    tableSchema({
      name: TableName.Comments,
      columns: [
        { name: "body", type: "string" },
        { name: "post_id", type: "string", isIndexed: true },
      ],
    }),
  ],
});
