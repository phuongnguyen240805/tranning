import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class TiktokService {
    async findDetail(detailId: string) {
        try {
            console.log('Calling TikTok API with ID:', detailId);
            const response = await axios.post('https://tiktok.dnggnd.online/tiktok/detail', {
                cookie: "",
                proxy: "",
                source: false,
                detail_id: detailId
            }, {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                timeout: 10000
            });
            console.log('TikTok API Response:', response.data);
            return response.data;
        } catch (error: any) {
            console.error('TikTok API Error:', {
                message: error.message,
                response: error.response?.data,
                status: error.response?.status
            });
            throw new Error(error.response?.data?.message || 'Failed to fetch TikTok details');
        }
    }

    findAll() {
        return ['Tiktok data 1', 'Tiktok data 2'];
    }
}