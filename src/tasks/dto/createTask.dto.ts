import {
    IsBoolean,
    IsString,
    MinLength,
} from "class-validator"

export class CreateTaskDto {
    @IsString()
    @MinLength(1)
    title: String

    @IsBoolean()
    status: Boolean
}