# Small WatermelonDB with Expo demo

## Technologies used
- Expo
- Expo config plugins
- WatermelonDB

## Typescript
In tsconfig.json :
```json
    "emitDecoratorMetadata": true,
    "experimentalDecorators": true,
```
Pass model as generic when getting collections :
```ts
await database.get<Post>("posts")
```
When using `withDatabase`, type database using following type :
```ts
import { Database } from "@nozbe/watermelondb"
```

## Issues

issue to fix to build on m1 :
remove arm64 from excluded architectures
https://github.com/expo/expo/issues/15800#issuecomment-1239946164