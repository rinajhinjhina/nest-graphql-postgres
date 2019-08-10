import { Field, ObjectType, Int } from 'type-graphql'

@ObjectType()
export class CreateCatDto {
	@Field() readonly id?: string
	@Field() readonly name: string
	@Field() readonly breed: string
	@Field() readonly age: number
}
