import {Module} from '@nestjs/common';
import {StudentsController} from './students.controller';
import {StudentsService} from './students.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {StudentEntity} from "./entities/student.entity";

@Module({
    imports: [TypeOrmModule.forFeature([StudentEntity])],
    controllers: [StudentsController],
    providers: [StudentsService],
    exports: [StudentsService],
})
export class StudentsModule {
}
