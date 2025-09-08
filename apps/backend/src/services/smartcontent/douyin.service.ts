import { Injectable } from '@nestjs/common';

@Injectable()
export class DouyinService {
    findAll() {
        return ['Douyin data 1', 'Douyin data 2'];
    }
}