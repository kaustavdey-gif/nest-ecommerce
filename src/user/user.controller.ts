import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UserService } from './user.service.js';
import { UserProfileDto } from './dto/update-profile.dto.js';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService){}
    @Post()
    createUser(@Body() userData: UserProfileDto){
        return this.userService.createUser(userData)
    }
    @Get()
    findAll(){
        return this.userService.findAll()
    }

    @Get(':id')
    findById(@Param('id') id:string){
        return this.userService.findById(id)
    }
}

