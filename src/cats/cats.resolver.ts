import { Resolver, Query, Mutation, Args } from '@nestjs/graphql'
import { CatEntity } from './cats.entity'
import { CreateCatDto } from './dto/create-cat.dto'
import { CatsService } from './cats.service'
import { inputCat } from './inputs/cat.input'

@Resolver((of) => CatEntity)
export class CatResolver {
	constructor (private readonly catsService: CatsService) {}

	@Query(() => [ CreateCatDto ])
	async cats () {
		return this.catsService.getCats()
	}

	@Mutation(() => CreateCatDto)
	async createCat (@Args('data') data: inputCat) {
		return this.catsService.createCat(data)
	}
}
