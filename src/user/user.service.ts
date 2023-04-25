import { Injectable } from '@nestjs/common';
import { userDto } from './user.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class UserService {

    constructor(
        private prisma: PrismaService
    ) {

    }

    async getProfile(id: number) {
        const existUser = await this.prisma.user.findUnique({
            where: {
                id
            },
            select: {
                id: true,
                email: true,
                name: true,
                avatarPath: true,
                password: true,
                phone: true,
                favorites: {
                    select: {
                        id: true,
                        name: true,
                        pr
                    }
                }
            }
        })

        return existUser
    }

    updateProfile(id: number, dto: userDto) {
        return {

        }
    }

    toggleFavorite(id: number, prodId: number) {

    }
}
