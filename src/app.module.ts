import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { GraphQLModule } from '@nestjs/graphql'
import { CatModule } from './cats/cat.module'
@Module({
	imports: [
		GraphQLModule.forRoot({
			autoSchemaFile: 'schema.gpl'
		}),
		CatModule
	],
	controllers: [ AppController ],
	providers: [ AppService ]
})
export class AppModule {}
