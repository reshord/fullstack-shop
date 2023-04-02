import { Injectable } from '@nestjs/common';
import { json } from 'stream/consumers';

interface IData {
	name: string;
	age: number;
}

@Injectable()
export class AppService {
	data: IData = {
		name: 'dmitriy',
		age: 20
	};

	getHello(): string {
		return JSON.stringify(this.data);
	}
}
