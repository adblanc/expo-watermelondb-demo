import { Database } from "@nozbe/watermelondb";
import SQLiteAdapter from "@nozbe/watermelondb/adapters/sqlite";

import Comment from "./model/Comment";
import Post from "./model/Post";
import { mySchema } from "./model/schema";

const adapter = new SQLiteAdapter({
  schema: mySchema,
  dbName: "myapp",
  jsi: true,
});

export const database = new Database({
  adapter,
  modelClasses: [Post, Comment],
});
