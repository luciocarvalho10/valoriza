import { getCustomRepository } from "typeorm"
import { UsersRepositories } from "../repositories/UsersRepositories"
import { existClass, notExistString } from "../utilities/existOrNot"
import { hash } from "bcryptjs"

interface IUserRepository {
  name: string
  email: string
  password: string
  admin?: boolean
}

class CreateUserService {
  async execute({ name, email, password, admin }: IUserRepository) {
    const UsersRepository = getCustomRepository(UsersRepositories)

    notExistString(email, "Email incorrect!")

    const userExist = await UsersRepository.findOne({ email })

    existClass(userExist, "User alrady exist!")

    const passwordHash = await hash(password, 8)

    const user = UsersRepository.create({
      name,
      email,
      password: passwordHash,
      admin,
    })
    await UsersRepository.save(user)

    return user
  }
}

export { CreateUserService }
