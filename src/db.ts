
import { Database } from '@nozbe/watermelondb'
import SQLiteAdapter from '@nozbe/watermelondb/adapters/sqlite'

import {mySchema} from './model/schema'
import Post from './model/Post';
import Comment from './model/Comment';

const adapter = new SQLiteAdapter({
	schema: mySchema,
	dbName: 'myapp',
	jsi: true, 
      })
      
      export const database = new Database({
	adapter,
	modelClasses: [
	  Post,
	  Comment,
	],
      })

