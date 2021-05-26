import express, {Request, Response} from 'express'
import knex from 'knex'
import connection from './connection'
import app from './app'


// const getActorById = async (id: string): Promise<any> => {
//     const result = await connection.raw(`
//       SELECT * FROM Actor WHERE id = '${id}'
//     `)
  
//       return result[0][0]
//   }
  
  
//   // Assim a chamada funciona fora dos endpoints com .then()/.catch
//   getActorById("001")
//       .then(result => {
//           console.log(result)
//       })
//       .catch(err => {
//           console.log(err)
//       })
  
//   // Assim a chamada funciona fora dos endpoints com await
// //   async () => {
// //     console.log(await getActorById("001") )
// //   })
  
  
//   // Ou então podemos chamá-la dentro de um endpoint
//   app.get("/users/:id", async (req: Request, res: Response) => {
//     try {
//       const id = req.params.id
  
//       console.log(await getActorById(id))
  
//       res.end()
//     } catch (error) {
//           console.log(error.message)
//       res.status(500).send("Unexpected error")
//     }
//   }) // bata no http://localhost:3003/users/001 e veja o que acontece no terminal

// const getActorByName = async(nome:string):Promise<any> =>{
//     try{
//         const actor = await connection.raw(`
//         SELECT * FROM actor WHERE nome="${nome}";
//         `)
//         return actor[0][0]
//     }catch(error){
//         return(error.message)
//     }
// }

// const getQuantityOfGender = async(gender:string):Promise<any> =>{
//     try{
//         const quantity = await connection.raw(`
//         SELECT COUNT(*) FROM actor WHERE gender="${gender}";
//         `)
//         return quantity[0][0]
//     }catch(error){
//         return error.message
//     }
// }

// getQuantityOfGender("female").then((res)=>console.log(res))

// const updateSalary = async(salary:number, id:string):Promise<void> =>{
//     try{
//         await connection("actor").update({
//             salary:salary
//         }).where({
//             id:id
//         })
//     }catch(error){
//         console.log(error)
//     }
// }

// updateSalary(2000000, "002").then((res)=>console.log("DEU BOM"))

// const deleteActor = async(id:string):Promise<void> =>{
//     try{
//         await connection("actor").delete().where({
//             id:id
//         })
//     }catch(error){
//         console.log(error.message)
//     }
// }

// // deleteActor("003").then((res)=>console.log("APAGOU DE BOA"))

// const avarageSalaryOfGender = async(gender:string):Promise<any> =>{
//     try{
//         const result = connection("actor").avg("salary as average").where({
//             gender: gender
//         })
//         return result
//     }catch(error){
//         return error.message
//     }
// }

// avarageSalaryOfGender("male").then((res)=>console.log(res)).catch((error)=>console.log(error))

app.get("/actor", async(req:Request, res:Response)=>{
    try{
        const gender_count = await connection.raw(`
        SELECT COUNT(*) FROM actor WHERE gender="${req.query.gender}";
        `)
        res.status(200).send({
            count: gender_count[0][0]
        })
    }catch(error){
        res.status(400).send({
            message:error.message
        })
    }
})

app.get("/actor/:id", async(req:Request, res:Response)=>{
    try{
        const actor = await connection.raw(`
        SELECT * FROM actor WHERE id=${req.params.id};
        `)
        res.status(200).send({
            message:"success",
            actor:actor[0][0]
        })
    }catch(error){
        res.status(400).send(error.message)
    }
})

app.post("/actor/update", async(req:Request, res:Response)=>{
    try{
        await connection.raw(`
        UPDATE actor
        SET salary=${req.body.salary}
        WHERE id="${req.body.id}";
        `)
        res.status(200).send("Salário atualizado com sucesso!")
    }catch(error){
        res.status(400).send({
            message:error.message
        })
    }
})

app.delete("/actor/delete/:id", async(req:Request, res:Response)=>{
    try{
        await connection.raw(`
        DELETE FROM actor WHERE id="${req.params.id}";
        `)
        res.status(200).send("Ator deletado com sucesso!")
    }catch(error){
        res.status(400).send({
            message: error.message
        })
    }
})
