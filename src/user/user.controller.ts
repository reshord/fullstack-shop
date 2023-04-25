import {
   Controller, 
   Get, 
   HttpCode, 
   Put,
   Patch, 
   UsePipes, 
   ValidationPipe,
   Param
  } from '@nestjs/common';
import { UserService } from './user.service';
import { Auth } from 'src/auth/decorators/auth.decorator';
import { CurrentUser } from 'src/auth/decorators/user.decorator';
import { userDto } from './user.dto';

@Controller('users')
export class UserController {
	constructor(private readonly userService: UserService) {}

	@Get('profile')
  @Auth()
	async getProfile(@CurrentUser('id') id: number) {
		return this.userService.getProfile(id);
	}

	@UsePipes(new ValidationPipe())
	@HttpCode(200)
  @Auth()
	@Put('profile')
	async updateProfile(@CurrentUser('id') id: number, dto: userDto) {
		return this.userService.updateProfile(id, dto)
	}

  @HttpCode(200)
  @Auth()
	@Patch('profile/favorites/:prodId')
	async toggleFavorite(
      @Param('prodId') prodId: number, 
      @CurrentUser('id') id: number
    ) {
		return this.userService.toggleFavorite(id, prodId)
	}
}
