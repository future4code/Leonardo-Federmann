## ATIVIDADE DE KNEX.JS

### 1
- **a-)** Ao utilizar o raw para retornar um valor do MySQL, a resposta virá como um array que contém, em seu primeiro item, as informações solicitadas e, nos demais, dados que não serão utilizados - motivo pelo qual costuma-se, nos endpoints, retornar somente o item de índice 0 dessa array. 
- **b-)** 
const getActorByName = async(nome:string):Promise<any> =>{
    try{
        const actor = await connection.raw(`
        SELECT * FROM actor WHERE nome="${nome}";
        `)
        return actor[0][0]
    }catch(error){
        return(error.message)
    }
}

- **c-)**
const getQuantityOfGender = async(gender:string):Promise<any> =>{
    try{
        const quantity = await connection.raw(`
        SELECT COUNT(*) FROM actor WHERE gender="${gender}";
        `)
        return quantity[0][0]
    }catch(error){
        return error.message
    }
}

### 2
- **a-)**
const updateSalary = async(salary:number, id:string):Promise<void> =>{
    try{
        await connection("actor").update({
            salary:salary
        }).where({
            id:id
        })
    }catch(error){
        console.log(error)
    }
}

- **b-)**
const deleteActor = async(id:string):Promise<void> =>{
    try{
        await connection("actor").delete().where({
            id:id
        })
    }catch(error){
        console.log(error.message)
    }
}

- **c-)**
const avarageSalaryOfGender = async(gender:string):Promise<any> =>{
    try{
        const result = connection("actor").avg("salary as average").where({
            gender: gender
        })
        return result
    }catch(error){
        return error.message
    }
}

### 3
- **a-)**
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

- **b-)**
app.get("/actor", async(req:Request, res:Response)=>{
    try{
        const gender_count = await connection.raw(`
        SELECT COUNT(*) AS "contagem" FROM actor WHERE gender="${req.query.gender}";
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

### 4
- **a-)**
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

- **b-)**
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