import { IsEmail, IsNotEmpty, IsNumber, IsString, Max } from "class-validator"

export class CreateUserDto {
    @IsEmail()
    @IsString()
    @IsNotEmpty()
    email: String

    @IsString()
    @IsNotEmpty()
    password: String

    @IsString()
    @IsNotEmpty()
    name: String

    @IsNumber()
    @IsNotEmpty()
    @Max(100)
    age: Number
}