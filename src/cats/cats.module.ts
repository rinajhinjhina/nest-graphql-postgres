import { CatResolver } from './cats.resolver'
import { Module } from '@nestjs/common'
import { CatsService } from './cats.service'
import { TypeOrmModule } from '@nestjs/typeorm'
import { CatEntity } from './cats.entity'

@Module({
	imports: [ TypeOrmModule.forFeature([ CatEntity ]) ],
	providers: [ CatResolver, CatsService ]
})
export class CatModule {}
