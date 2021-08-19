import {Controller, Get, Res} from '@nestjs/common';
import {Crud, CrudController} from "@nestjsx/crud";
import {StudentEntity} from "./entities/student.entity";
import {StudentsService} from "./students.service";

@Crud({
    model: {
        type: StudentEntity,
    },
    serialize: {
        getMany: StudentEntity,
    },
    query: {
        maxLimit: 100,
        cache: 1000,
        alwaysPaginate: true,
        join: {
            students: {
                required: false,
            },
        },
    },
})

@Controller('students')
export class StudentsController implements CrudController<StudentEntity> {
    constructor(public service: StudentsService) {
    }

    get base(): CrudController<StudentEntity> {
        return this;
    }

    @Get("groupby")
     async groupby(@Res() res) {
        try {
            const data = await this.service.groupby()
            res.status(200).send(data);

        } catch (e) {
            res.status(404).send(e.message);
        }
    }
}
