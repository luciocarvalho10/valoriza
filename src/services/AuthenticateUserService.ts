import { getCustomRepository } from "typeorm"
import { compare } from "bcryptjs"

import { UsersRepositories } from "../repositories/UsersRepositories"
import {
  notExistBoolean,
  notExistClass,
  notExistString,
} from "../utilities/existOrNot"
import { sign } from "jsonwebtoken"

interface IAuthenticateRequest {
  email: string
  password: string
}

class AuthenticateUserService {
  async execute({ email, password }: IAuthenticateRequest) {
    const usersRepositories = getCustomRepository(UsersRepositories)

    const user = await usersRepositories.findOne({ email })

    notExistClass(user, "Email/Password incorrect!")

    const authorized = await compare(password, user.password)

    notExistBoolean(authorized, "Email/Password incorrect!")

    const token = sign({ email: user.email }, "4f93ac9f3d23a128ce8fdd23e12b", {
      subject: user.id,
      expiresIn: "1d",
    })

    return token
  }
}

export { AuthenticateUserService }
