import { PartialType } from '@nestjs/swagger';
import { CreateContactPhoneDto } from './index';

export class UpdateContactPhoneDto extends PartialType(CreateContactPhoneDto) {
  phone: string;
}
