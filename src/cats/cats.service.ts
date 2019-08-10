import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { CatEntity } from './cats.entity'
import { Repository } from 'typeorm'
import { CreateCatDto } from './dto/create-cat.dto'

@Injectable()
export class CatsService {
	constructor (@InjectRepository(CatEntity) private readonly CatRepository: Repository<CatEntity>) {}

	async createCat (data: CreateCatDto): Promise<CatEntity> {
		let cat = new CatEntity()
		cat.name = data.name
		cat.age = data.age
		cat.breed = data.breed

		await this.CatRepository.save(cat)

		return cat
	}

	async getCats () {
		return await this.CatRepository.find()
	}
}
