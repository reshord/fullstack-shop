import { IsEmail, IsOptional, IsString } from "class-validator";

export class userDto {
    @IsEmail()
    email: string

    @IsOptional()
    @IsString()
    password: string

    @IsOptional()
    @IsString()
    name: string

    @IsOptional()
    @IsString()
    avatarPath: string

    @IsOptional()
    @IsString()
    phone: string
}