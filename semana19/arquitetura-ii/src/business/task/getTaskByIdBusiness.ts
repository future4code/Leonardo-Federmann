import { selectTaskById } from "../../data/task/selectTaskById"
import { task } from "../../model/task"

export const getTaskByIdBusiness = async (
   id: string
):Promise<task> => {
   const result = await selectTaskById(id)

   if (!result) {
      throw new Error("Tarefa não encontrada")
   }

   const taskWithUserInfo = {
      id: result.id,
      title: result.title,
      description: result.description,
      deadline: result.deadline,
      // status: result.status,
      authorId: result.authorId,
      // authorNickname: result.nickname
   }

   return taskWithUserInfo
}