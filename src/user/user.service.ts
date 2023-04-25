import { Injectable } from '@nestjs/common';
import { userDto } from './user.dto';

@Injectable()
export class UserService {


    getProfile(id: number) {
        return {"hello": "sdfsdf"}
    }

    updateProfile(id: number, dto: userDto) {
        return {

        }
    }

    toggleFavorite(id: number, prodId: number) {

    }
}
