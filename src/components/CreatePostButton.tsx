import { useDatabase } from "@nozbe/watermelondb/hooks";
import { Button } from "react-native";

import type { Post } from "../model/Post";

export const CreatePostButton = () => {
  const database = useDatabase();

  return (
    <Button
      title="Create post"
      onPress={() => {
        database.write(async () => {
          const post = await database.get<Post>("posts").create((post) => {
            post.title = "New post" + Math.floor(Math.random() * 100);
            post.body = "Lorem ipsum...";
          });

          return post;
        });
      }}
    />
  );
};
