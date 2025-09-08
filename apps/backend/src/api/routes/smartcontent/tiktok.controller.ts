import { Controller, Post, Body } from '@nestjs/common';
import { TiktokService } from '@gitroom/backend/services/smartcontent/tiktok.service';
import { BadRequestException } from '@nestjs/common';

@Controller('api/smartcontent/tiktok')
export class TiktokController {
    constructor(private readonly tiktokService: TiktokService) { }

    @Post('detail')
    async getTiktokDetail(@Body() body: {
        cookie: string;
        proxy: string;
        source: boolean;
        detail_id: string
    }) {
        if (!body.detail_id) {
            throw new BadRequestException('TikTok video ID is required');
        }

        try {
            return await this.tiktokService.findDetail(body.detail_id);
        } catch (error: any) {
            throw new BadRequestException(error?.message || 'Failed to fetch TikTok details');
        }
    }
}
