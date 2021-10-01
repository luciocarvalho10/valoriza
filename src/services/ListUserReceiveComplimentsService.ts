import { getCustomRepository } from "typeorm"
import { ComplimentsRepositories } from "../repositories/ComplimentsRepositories"

class ListUserReceiveComplimentsService {
  async execute(userId: string) {
    const complimentsRepositories = getCustomRepository(ComplimentsRepositories)
    const compliments = await complimentsRepositories.find({
      where: {
        user_receiver: userId,
      },
    })

    return compliments
  }
}

export { ListUserReceiveComplimentsService }
