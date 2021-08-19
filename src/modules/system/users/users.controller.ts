import {Controller, Post, Body, Get, ParseArrayPipe, Param, Query, Put, Delete, Patch} from '@nestjs/common';
import {
    ApiTags,
    ApiCreatedResponse,
    ApiBody,
    ApiOperation,
    ApiUnauthorizedResponse,
    ApiBadGatewayResponse,
    ApiBadRequestResponse,
    ApiQuery,
    ApiOkResponse,
    ApiParam,
} from '@nestjs/swagger';
import {Crud, CrudController, CrudRequest, Override, ParsedBody, ParsedRequest} from '@nestjsx/crud';
import {hash} from 'bcryptjs';
import {UsersService} from './services/users.service';
import {CreateUserDto, UpdateUserDto} from './dto';
import {DataOutput, IUser} from 'src/common/interfaces';
import {User} from './entities';

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

}
