import { Router } from 'express'
import OrphanagesController from './controllers/OrphanagesController'

const routes = Router()

//cria um orfanato
routes.post('/orphanages', OrphanagesController.create)

//lista todos os orfanatos
routes.get('/orphanages', OrphanagesController.index)

//busca um unico orfanato
routes.get('/orphanages/:id', OrphanagesController.show)

export default routes