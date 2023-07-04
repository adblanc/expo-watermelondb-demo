import { FlatList, Text, View } from "react-native"
import withObservables from '@nozbe/with-observables'	
import { withDatabase } from "@nozbe/watermelondb/DatabaseProvider"

const NotEnhancedBlogsList = ({blogs}) => {
	return (
		<View>
			<FlatList
				data={blogs}
				renderItem={({item}) => {
					return (
						<Text style={{padding: 20, fontSize: 20}}>{item.title}</Text>
					)
				}}
			/>	
		</View>
	)
}

const enhance = withObservables([], ({database}) => {
	const blogs = database.collections
	.get('posts')
	.query()
	
	return ({
		blogs,
	})
})
	

export const BlogsList = withDatabase(enhance(NotEnhancedBlogsList))