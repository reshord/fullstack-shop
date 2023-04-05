import { IsEmail, MinLength, IsString } from "class-validator";

export class RegisterDto {
    @IsEmail()
    email: string
    
    @MinLength(6, {
        message: 'Password length must be more than 6'
    })
    @IsString()
    password: string
    
    @IsString()
    name: string

    @IsString()
    avatarPath: string

    @IsString()
    phone: string
}
