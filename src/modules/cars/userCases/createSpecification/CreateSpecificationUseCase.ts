import { ISpecifiantionRepository } from "../../repositories/ISpecificationsRepository"

interface IRequest {
    name: string;
    description: string;
}

class CreateSpecificationUseCase{
    constructor(private specificationsRepository: ISpecifiantionRepository){}
    execute({name, description}:IRequest): void {
        const specificationAlreadyExists = this.specificationsRepository.findByname(name);

        if(specificationAlreadyExists){
            throw new Error("Specifications already Exists!")
        }

        this.specificationsRepository.create({
            name,
            description,
        });
    } 
}


export { CreateSpecificationUseCase }