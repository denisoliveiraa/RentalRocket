import fs from "fs";
import {parse} from "csv-parse";
import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";


interface IImportCategory {
    name: string;
    description: string;
}

class ImportCategoryUseCase {
    constructor(private categoriesRepository: ICategoriesRepository){}

    loadCateogrie(file: Express.Multer.File){
        const stream = fs.createReadStream(file.path);
        const categories: IImportCategory[] = [];
        
        const parseFile = parse();

        stream.pipe(parseFile)
        

        stream.on("data", async (line) => {
            const [name, description] = line;
            categories.push({
                name,
                description
            })
        })
    }

    execute(file: Express.Multer.File): void {
        
    }
}


export {ImportCategoryUseCase}