import { Button } from "react-native"
import {useDatabase} from '@nozbe/watermelondb/hooks'


export const CreateBlogButton = () => {
	const database = useDatabase()


	return (
		<Button title="Create blog" onPress={() => {
			database.write(async() => {
				const post = await database.get('posts').create(post => {
					post.title = 'New post' + Math.floor(Math.random() * 100)
					post.body = 'Lorem ipsum...'
				      })

				      return post
			})
		}} />
	)
}