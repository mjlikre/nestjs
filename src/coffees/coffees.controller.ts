import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('coffees')
export class CoffeesController {
    @Get('flavors')
    findAll() {
        return 'this action returns all coffees'
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return `this acitons returns #${id} coffee`; 
    }
    
    @Post()
    create(@Body() body) {
        return body
    }
}
