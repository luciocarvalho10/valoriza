import { getCustomRepository } from "typeorm"
import { TagsRepositories } from "../repositories/TagsRepositories"
import { existClass, notExistString } from "../utilities/existOrNot"

class CreateTagService {
  async execute(name: string) {
    const tagsRepositories = getCustomRepository(TagsRepositories)

    notExistString(name, "Incorrect name!")

    const tagAlreadyExist = await tagsRepositories.findOne({ name })

    existClass(tagAlreadyExist, "Name already exist!")

    const tag = tagsRepositories.create({ name })

    await tagsRepositories.save(tag)

    return tag
  }
}

export { CreateTagService }
