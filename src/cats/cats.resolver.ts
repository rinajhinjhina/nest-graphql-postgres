import { Resolver, Query } from '@nestjs/graphql'

@Resolver()
export class CatResolver {
	//   constructor(
	//     private readonly catsService: CatsService,
	//     private readonly postsService: PostsService,
	//   ) {}

	@Query(() => String)
	async cat () {
		return 'Returns a cat'
	}
}
