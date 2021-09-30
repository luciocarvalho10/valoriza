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
  async execute({ name, email, password, admin = false }: IUserRepository) {
    const usersRepository = getCustomRepository(UsersRepositories)

    notExistString(email, "Email incorrect!")

    const userExist = await usersRepository.findOne({ email })

    existClass(userExist, "User alrady exist!")

    const passwordHash = await hash(password, 8)

    const user = usersRepository.create({
      name,
      email,
      password: passwordHash,
      admin,
    })
    await usersRepository.save(user)

    return user
  }
}

export { CreateUserService }
