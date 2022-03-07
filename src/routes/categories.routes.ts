import Router from 'express';
import { CategoriesRepository } from '../modules/cars/repositories/CategoriesRepository';
import { CreateCategoryController } from '../modules/cars/userCases/createCategory';


const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository()

categoriesRoutes.post("/", (request, response)=>{
   return CreateCategoryController.handle(request, response)
});

categoriesRoutes.get("/", (request, response) => {
    const all = categoriesRepository.list();
    return response.json(all)
})

export {categoriesRoutes};