import DatabaseProvider from "@nozbe/watermelondb/DatabaseProvider";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";

import { BlogsList } from "./src/components/BlogsList";
import { CreateBlogButton } from "./src/components/CreateBlogButton";
import { database } from "./src/db";

export default function App() {
  return (
    <DatabaseProvider database={database}>
      <View style={styles.container}>
        <BlogsList />
        <CreateBlogButton />
        <StatusBar style="auto" />
      </View>
    </DatabaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 80,
  },
});
