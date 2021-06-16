import connection  from "../connection";
import {task} from '../../model/task'

export const selectTaskById = async (
   id: string
): Promise<task> => {
   const result = await connection.raw(`
        SELECT tasks.*, nickname FROM to_do_list_tasks AS tasks
        JOIN to_do_list_users AS users
        ON author_id = users.id
        WHERE tasks.id = '${id}';
    `)
   const {title, description, deadline, author_id } = result[0][0]
    const task: task = {
       id,
       title,
       description,
       deadline,
       authorId: author_id
    }

   return task
}