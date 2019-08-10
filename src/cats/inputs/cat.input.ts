import { Field, Int, InputType } from 'type-graphql'

@InputType()
export class inputCat {
	@Field() readonly name: string
	@Field() readonly breed: string
	@Field() readonly age: number
}
