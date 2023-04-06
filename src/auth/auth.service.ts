import { BadRequestException, Injectable } from '@nestjs/common';
import { RegisterDto } from './dto/register.dto';
import { PrismaService } from 'src/prisma.service';
import { faker } from '@faker-js/faker';
import { hash } from 'argon2';
import { LoginDto } from './dto/login.dto';
import { JwtService } from '@nestjs/jwt/dist';
import { User } from '@prisma/client';

@Injectable()
export class AuthService {
	constructor(
		private prismaService: PrismaService,
		private jwt: JwtService
    ) {}

	async register(userDto: RegisterDto) {
		const existUser = await this.prismaService.user.findUnique({
			where: {
				email: userDto.email
			}
		});

		if (existUser) throw new BadRequestException('User already exist');

		const user = await this.prismaService.user.create({
			data: {
				email: userDto.email,
				password: await hash(userDto.password),
				name: faker.name.fullName(),
				avatarPath: faker.image.avatar(),
				phone: faker.phone.number('+380 ## ### ## ##')
			}
		});

		const tokens = await this.issueTokens(user.id)

		return {
			email: user.email,
			name: user.name,
			...tokens
		}
	}

	private async issueTokens(userId: number) {
		const data = {id: userId}

		const accessToken = this.jwt.sign(data, {
			expiresIn: '1h'
		})
		const refreshToken = this.jwt.sign(data, {
			expiresIn: '7d'
		})

		return {
			accessToken,
			refreshToken
		}
	}

  async login(userDto: LoginDto) {

  }
}
