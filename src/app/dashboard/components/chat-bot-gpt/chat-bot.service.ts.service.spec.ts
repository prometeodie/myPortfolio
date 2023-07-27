import { TestBed } from '@angular/core/testing';

import { ChatBotServiceTsService } from './chat-bot.service.ts.service';

describe('ChatBotServiceTsService', () => {
  let service: ChatBotServiceTsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChatBotServiceTsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
