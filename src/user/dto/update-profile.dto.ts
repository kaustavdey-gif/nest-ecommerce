import {IsNotEmpty, IsString } from "class-validator";


export class UserProfileDto{
    @IsString()
    @IsNotEmpty()
    name: string;
    @IsNotEmpty()
    @IsString()
    email: string
}