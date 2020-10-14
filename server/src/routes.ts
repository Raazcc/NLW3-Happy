import { Router } from 'express'
import multer from 'multer'
import uploadConfig from './config/upload'
import OrphanagesController from './controllers/OrphanagesController'

const routes = Router()
const upload = multer(uploadConfig)

//cria um orfanato
routes.post('/orphanages', upload.array('images'), OrphanagesController.create)

//lista todos os orfanatos
routes.get('/orphanages', OrphanagesController.index)

//busca um unico orfanato
routes.get('/orphanages/:id', OrphanagesController.show)

export default routes