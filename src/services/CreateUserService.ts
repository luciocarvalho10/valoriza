import { UsersRepositories } from "../repositories/UsersRepositories"

interface IUserRepository {
  name: string
  email: string
  admin?: boolean
}

class CreateUserService {
  async execute({ name, email, admin }: IUserRepository) {
    const UsersRepository = new UsersRepositories()

    if (!email) {
      throw new Error("Email incorrect!")
    }

    const userExist = await UsersRepository.findOne({ email })

    if (userExist) {
      throw new Error("User alredy exist!")
    }

    const user = UsersRepository.create({ name, email, admin })
    await UsersRepository.save(user)

    return user
  }
}

export { CreateUserService }
