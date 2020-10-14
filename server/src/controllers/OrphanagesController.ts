import { Request, Response } from 'express'
import { getRepository } from 'typeorm'
import Orphanage from '../models/Orphanage'

export default {

    //Lista todos orfanatos
    async index(req: Request, res: Response) {
        const orphanagesRepository = getRepository(Orphanage)
        const orphanages = await orphanagesRepository.find()
        return res.json(orphanages)
    },

    //busca somente um orfanato com ID de parametro
    async show(req: Request, res: Response) {
        const { id } = req.params
        const orphanagesRepository = getRepository(Orphanage)
        const orphanage = await orphanagesRepository.findOneOrFail(id)
        return res.json(orphanage)
    },

    //cria um orfanato
    async create(req: Request, res: Response) {
        const {
            name,
            latitude,
            longitude,
            about,
            instructions,
            opening_hours,
            open_on_weekends
        } = req.body

        const orphanagesRepository = getRepository(Orphanage)

        const orphanage = orphanagesRepository.create({
            name,
            latitude,
            longitude,
            about,
            instructions,
            opening_hours,
            open_on_weekends
        })

        await orphanagesRepository.save(orphanage)
        return res.json({ message: "Orfanato criado!" })
    }
}