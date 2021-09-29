import { getCustomRepository } from "typeorm"
import { ComplimentsRepositories } from "../repositories/ComplimentsRepositories"
import { UsersRepositories } from "../repositories/UsersRepositories"
import { notExistBoolean, notExistClass } from "../utilities/existOrNot"

interface IComplimentRequest {
  tag_id: string
  user_sender: string
  user_receiver: string
  message: string
}

class CreateComplimentService {
  async execute({
    tag_id,
    user_sender,
    user_receiver,
    message,
  }: IComplimentRequest) {
    const complimentsRepositories = getCustomRepository(ComplimentsRepositories)
    const usersRepositories = getCustomRepository(UsersRepositories)

    notExistBoolean(user_sender === user_receiver, "Incorrect receiver")

    const receiverExist = await usersRepositories.findOne(user_receiver)

    notExistClass(receiverExist, "User receiver does not exists!")

    const compliment = complimentsRepositories.create({
      tag_id,
      user_sender,
      user_receiver,
      message,
    })

    await complimentsRepositories.save(compliment)

    return compliment
  }
}

export { CreateComplimentService }
