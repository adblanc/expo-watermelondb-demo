import { Database } from "@nozbe/watermelondb";
import { withDatabase } from "@nozbe/watermelondb/DatabaseProvider";
import withObservables from "@nozbe/with-observables";
import { FlatList, Text, View } from "react-native";

const NotEnhancedPostsList = ({ blogs }) => {
  return (
    <View>
      <FlatList
        data={blogs}
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
  const blogs = database.collections.get("posts").query();

  return {
    blogs,
  };
});

export const PostsList = withDatabase(enhance(NotEnhancedPostsList));
