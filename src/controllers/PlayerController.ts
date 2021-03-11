import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { PlayersRepository } from "../repositories/PlayersRepository";

class PlayerController {

    async create(request: Request , response: Response){
        
        const {name, quantidade, valor} = request.body;

        
        console.log(request.body)

       
        const playersRepository = getCustomRepository(PlayersRepository);

        //SELECT * FROM USERS WHERE EMAIL = "EMAIL"
        const playersAlreadyExists= await playersRepository.findOne({
            name
        });

        if(playersAlreadyExists) {
            return response.status(400).json({
                error: "Nome já cadastrado"
            })
        }

        const user = playersRepository.create({
            name, quantidade, valor
        });



        await playersRepository.save(user);
        return response.json(user);



    }
}

export { PlayerController };
