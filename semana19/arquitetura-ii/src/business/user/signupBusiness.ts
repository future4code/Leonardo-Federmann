import { hash } from "../../services/hashManager";
import { insertUser } from "../../data/user/insertUser";
import { insertUserDTO, signupInputDTO, userData } from "../../model/user";
import { generateToken } from "../../services/authenticator";
import { generateId } from "../../services/idGenerator";

export const signupBusiness = async (
   signupInputDTO: signupInputDTO
):Promise<string> => {
   if (
      !signupInputDTO.name ||
      !signupInputDTO.nickname ||
      !signupInputDTO.email ||
      !signupInputDTO.password ||
      !signupInputDTO.role
   ) {
      throw new Error('Preencha os campos "name","nickname", "email" e "password"')
   }

   const cypherPassword = await hash(signupInputDTO.password);

   const newUser:insertUserDTO = {
      ...signupInputDTO,
      password: cypherPassword,
      id: generateId()
   }

   await insertUser(newUser)

   const token: string = generateToken({
      id: newUser.id,
      role: signupInputDTO.role
   })

   return token

}
