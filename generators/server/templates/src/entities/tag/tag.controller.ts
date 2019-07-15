import { Controller, Get } from '@nestjs/common';

import { TagEntity } from './tag.entity';
import { TagService } from './tag.service';

import { ApiBearerAuth, ApiUseTags, } from '@nestjs/swagger';

@ApiBearerAuth()
@ApiUseTags('tags')
@Controller('tags')
export class TagController {

    constructor(private readonly tagService: TagService) {
    }

    @Get()
    async findAll(): Promise<TagEntity[]> {
        return await this.tagService.findAll();
    }

}
