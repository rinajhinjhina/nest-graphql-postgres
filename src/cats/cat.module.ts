import { CatResolver } from './cats.resolver'
import { Module } from '@nestjs/common'

@Module({
	providers: [ CatResolver ]
})
export class CatModule {}
