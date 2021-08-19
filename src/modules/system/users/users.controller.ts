import {Controller} from '@nestjs/common';
import {Crud, CrudController, CrudRequest, Override, ParsedBody, ParsedRequest} from '@nestjsx/crud';
import {UsersService} from './services/users.service';
import {User} from './entities';
import {hash} from 'bcryptjs';

@Crud({
    model: {
        type: User,
    },
    serialize: {
        getMany: User,
    },
    query: {
        maxLimit: 100,
        cache: 1000,
        alwaysPaginate: true,
        join: {
            users: {
                required: false,
            },
        },
    },
})
@Controller('users')
export class UsersController implements CrudController<User> {
    constructor(public service: UsersService) {
    }

    get base(): CrudController<User> {
        return this;
    }

    @Override()
    async createOne(
        @ParsedRequest() req: CrudRequest,
        @ParsedBody() dto: any,
    ) {

        if (dto.password) {
            dto.password = await hash(dto.password, 10);
        }
        return this.base.createOneBase(req, dto);
    }

    @Override('updateOneBase')
    async coolFunction(
        @ParsedRequest() req: CrudRequest,
        @ParsedBody() dto: any,
    ) {
        if (dto.password) {
            dto.password = await hash(dto.password, 10);
        }
        return this.base.updateOneBase(req, dto);
    }


}
