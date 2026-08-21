import {
  Body,
  Controller,
  Get,
  Post,
} from '@nestjs/common';

import { ChatService } from './chat.service';

@Controller('chat')
export class ChatController {
  constructor(private readonly chatService: ChatService) {}

  @Get()
  test() {
    return {
      success: true,
      message: 'AURA Backend fonctionne 🚀',
    };
  }

  @Post()
  async chat(@Body('message') message: string) {
    return this.chatService.ask(message);
  }
}