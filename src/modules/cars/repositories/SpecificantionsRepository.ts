import e from "express";
import { Specification } from "../model/Specificantion";
import { ISpecifiantionRepository, ICreateSpecifiantionDTO } from "./ISpecificationsRepository";


class SpecificationsRepository implements ISpecifiantionRepository {
    private specifications: Specification[]
    
    constructor(){
        this.specifications = []
    }
    findByname(name: string): Specification {
        const specificantion = this.specifications.find(
            (specification)=>specification.name === name);
            return specificantion;
    }
    
    create({description, name}: ICreateSpecifiantionDTO): void {
        const specificantion = new Specification();

        Object.assign(specificantion, {
            name, 
            description,
            create_at: new Date(),
        });

        this.specifications.push(specificantion)
    }
}
export { SpecificationsRepository}