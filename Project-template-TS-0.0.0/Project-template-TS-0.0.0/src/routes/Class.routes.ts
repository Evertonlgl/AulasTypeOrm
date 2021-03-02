import {response, Router} from "express";
import { getRepository, Repository } from "typeorm";
import ClassRepository from "../database/repository/ClassRepository";
import Class from '../models/Class';

const classRouter = Router();


classRouter.post('/', async (response ,request) => {
    
 
    try {

        const repo = getRepository (Class);
        const res = await repo.save(response.body);
        return response.body(201).json(res);

    }catch(err){
        
        console.log('err.message :>>', err.message);

    }

});

//fazendo o get

classRouter.get('/', async (request, response) => {
    
    return response.json(await getRepository(Class).find());

});


//criando get com paramentros
classRouter.get('/:name', async (request, response) => {
    
    const repository = getRepository(Class);
    const res = await repository.find({

        where: {
            name:  request.params.name,
        }

    }),


    return response.json(res);
});


// personalizado com repository classe especifica
classRouter.get('/:name', async (request, response) => {
    
    const repository = getCustomRepository(ClassRepository);
    const res = await repository.findByname(request.params.name);

    return response.json(res);
});
export default  classRouter;