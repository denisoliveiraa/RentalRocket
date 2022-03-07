import {response, Router} from 'express'

import { SpecificationsRepository } from '../modules/cars/repositories/SpecificantionsRepository';
import { CreateSpecificationService } from '../modules/cars/services/CreateSpecificationService';

const specificantionRoutes = Router();
const specificantionRepository = new SpecificationsRepository()

specificantionRoutes.post("/", (request, response) => {
        const {name, description} = request.body
        const createSpecificationService = new CreateSpecificationService(specificantionRepository)
        createSpecificationService.execute({name, description})

        return response.status(201).send()
})

export { specificantionRoutes }