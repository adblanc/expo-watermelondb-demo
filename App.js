import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { BlogsList } from './components/BlogsList';
import { database } from './db';
import DatabaseProvider from '@nozbe/watermelondb/DatabaseProvider'
import { CreateBlogButton } from './components/CreateBlogButton';

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
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 80
  },
});
