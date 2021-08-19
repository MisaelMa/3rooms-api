import { PartialType } from '@nestjs/swagger';
import { CreateUserMetadataDto } from './index';

export class UpdateUserMetadataDto extends PartialType(CreateUserMetadataDto) {}
