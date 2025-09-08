import { Module } from '@nestjs/common';
import { DouyinService } from '@gitroom/backend/services/smartcontent/douyin.service';
import { TiktokService } from '@gitroom/backend/services/smartcontent/tiktok.service';
import { DouyinController } from '@gitroom/backend/api/routes/smartcontent/douyin.contoller';
import { HttpModule } from '@nestjs/axios';
import { TiktokController } from '@gitroom/backend/api/routes/smartcontent/tiktok.controller';

@Module({
    imports: [HttpModule],
    controllers: [DouyinController, TiktokController],
    providers: [DouyinService, TiktokService],
    exports: [DouyinService, TiktokService],
})
export class SmartContentModule { }