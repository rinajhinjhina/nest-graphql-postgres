import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { TypeOrmModule } from '@nestjs/typeorm'
import { AppService } from './app.service'
import { GraphQLModule } from '@nestjs/graphql'
import { CatModule } from './cats/cats.module'
@Module({
	imports: [
		TypeOrmModule.forRoot(),
		GraphQLModule.forRoot({
			autoSchemaFile: 'schema.gpl'
		}),
		CatModule
	],
	controllers: [ AppController ],
	providers: [ AppService ]
})
export class AppModule {}
