import {Router, Request, Response } from 'express';
import { CreateCategoryController } from '../modules/cars/userCases/createCategory';
import { listCategoriesController } from '../modules/cars/userCases/listCategories';
import { importCategoryController } from '../modules/cars/userCases/ImportCategory';
import multer from "multer"

const categoriesRoutes = Router();

const upload = multer({
    dest: './temp'
})

categoriesRoutes.post("/", (request, response)=>{
   return CreateCategoryController.handle(request, response)
});

categoriesRoutes.get("/", (request, response) => {
    return listCategoriesController.handle(request, response)
})

categoriesRoutes.post("/import", upload.single("file"), (request, response)=>{
    return importCategoryController.handle(request,response)
})
export {categoriesRoutes};