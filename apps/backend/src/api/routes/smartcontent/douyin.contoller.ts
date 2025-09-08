import { DouyinService } from '@gitroom/backend/services/smartcontent/douyin.service';
import { Controller, Get } from '@nestjs/common';

@Controller('smartcontent/douyin')
export class DouyinController {
    constructor(private readonly douyinService: DouyinService) { }

    @Get()
    getDouyinContent() {
        return this.douyinService.findAll();
    }
}