import { Specification } from "../model/Specificantion";



interface ICreateSpecifiantionDTO {
    name: string,
    description: string
}

interface ISpecifiantionRepository {
    create({description, name}: ICreateSpecifiantionDTO): void
        findByname(nome: string): Specification;
}

export { ISpecifiantionRepository, ICreateSpecifiantionDTO }