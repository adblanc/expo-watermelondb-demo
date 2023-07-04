import { Database } from "@nozbe/watermelondb";
import { withDatabase } from "@nozbe/watermelondb/DatabaseProvider";
import withObservables from "@nozbe/with-observables";
import { FlatList, Text, View } from "react-native";

import { Post } from "../model/Post";

const NotEnhancedPostsList = ({ posts }: { posts: Post[] }) => {
  return (
    <View>
      <FlatList
        data={posts}
        renderItem={({ item }) => {
          return (
            <Text style={{ padding: 20, fontSize: 20 }}>{item.title}</Text>
          );
        }}
      />
    </View>
  );
};

const enhance = withObservables([], ({ database }: { database: Database }) => {
  const posts = database.collections.get("posts").query();

  return {
    posts,
  };
});

export const PostsList = withDatabase(enhance(NotEnhancedPostsList));
