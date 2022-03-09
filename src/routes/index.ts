import {Router} from 'express'

import{categoriesRoutes} from "./categories.routes"
import { specificantionRoutes } from './specification.routes';

const router = Router();

router.use("/categories", categoriesRoutes);
router.use("/specifications", specificantionRoutes)

export { router }