import { ApiProperty } from "@nestjs/swagger"
import { IsEmail, IsNotEmpty, IsNumber, IsString, Max } from "class-validator"

export class CreateUserDto {

    @ApiProperty()
    @IsEmail()
    @IsString()
    @IsNotEmpty()
    email: string

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    password: string

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    name: string
}