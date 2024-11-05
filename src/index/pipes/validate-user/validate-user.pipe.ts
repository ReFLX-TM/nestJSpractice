import { ArgumentMetadata, HttpException, HttpStatus, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class ValidateUserPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    console.log(value)

    const ageNumber = parseInt(value.age.toString(), 10)

    if (isNaN(ageNumber)) {
      throw new HttpException("Age must be a Number", HttpStatus.BAD_REQUEST)
    }

    return {
      ...value,
      age: ageNumber
    };
  }
}
