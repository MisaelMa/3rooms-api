import {Injectable} from '@nestjs/common';
import {TypeOrmCrudService} from "@nestjsx/crud-typeorm";
import {User} from "../users/entities";
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {StudentEntity} from "./entities/student.entity";

@Injectable()
export class StudentsService extends TypeOrmCrudService<StudentEntity> {
    constructor(
        @InjectRepository(StudentEntity)
        private readonly userRepository: Repository<StudentEntity>,
    ) {
        super(userRepository);
    }

    async groupby() {
        const list = ["Primavera", "Canto", "baile"]
        const resultado = []
        let i = 1
        for (const l of list) {
            const busqueda = await this.userRepository.find({
                where: {
                    type: l
                }
            })
            resultado.push({
                numero: `Programa ${i}`,
                name: l,
                total: busqueda.length,
                students: busqueda,
            })
            i++;
        }
        return resultado
    }
}
