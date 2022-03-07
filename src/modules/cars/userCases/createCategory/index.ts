import { CategoriesRepository } from "../../repositories/CategoriesRepository";
import { CreateCategoryController } from "./CreateCategoryController";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

const categoriesRepository = new CategoriesRepository(); 
const createCategoryUseCase = new CreateCategoryUseCase(categoriesRepository);
const CreateCategoryController = new CreateCategoryController(createCategoryUseCase)

export { CreateCategoryController, CreateCategoryUseCase } 