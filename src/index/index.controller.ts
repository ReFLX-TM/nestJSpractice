import { Controller, Get, HttpCode, Param, ParseBoolPipe, ParseIntPipe, Query, Req, Res, UseGuards } from '@nestjs/common';
import { Request, Response } from 'express';
import { ValidateUserPipe } from './pipes/validate-user/validate-user.pipe';
import { AuthGuard } from './guards/auth/auth.guard';


@Controller()
export class IndexController {

    @Get("/")
    index(@Req() request: Request, @Res() response: Response) {
        console.log(request.url);

        return response.status(200).json({
            message: "Hello World",
        })
    }

    @Get("notfound")
    @HttpCode(404)
    notFoundPage() {
        return "404 Not Found";
    }

    @Get("error")
    @HttpCode(500)
    errorPage() {
        return "Error Route";
    }

    @Get("/ticket/:num")
    getNumbers(@Param("num", ParseIntPipe) num: number) {
        return num + 14;
    }

    @Get("active/:status")
    isUserActive(@Param("status", ParseBoolPipe) status: boolean) {
        return status
    }

    @Get("greet")
    @UseGuards(AuthGuard)
    greet(@Query(ValidateUserPipe) query: {name: string, age: number}) {
        return `Hello ${query.name}, you are ${query.age + 10} years old`
    }
}
