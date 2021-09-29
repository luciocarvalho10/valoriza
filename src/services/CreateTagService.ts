import { getCustomRepository } from "typeorm"
import { TagsRepositories } from "../repositories/TagsRepositories"
import { existClass, notExistString } from "../utilities/existOrNot"

class CreateTagService {
  async execute(name: string) {
    const tagsRepository = getCustomRepository(TagsRepositories)

    notExistString(name, "Incorrect name!")

    const tagAlreadyExist = await tagsRepository.findOne({ name })

    existClass(tagAlreadyExist, "Name already exist!")

    const tag = tagsRepository.create({ name })

    await tagsRepository.save(tag)

    return tag
  }
}

export { CreateTagService }
