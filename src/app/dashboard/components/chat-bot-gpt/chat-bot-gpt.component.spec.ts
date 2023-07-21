import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatBotGptComponent } from './chat-bot-gpt.component';

describe('ChatBotGptComponent', () => {
  let component: ChatBotGptComponent;
  let fixture: ComponentFixture<ChatBotGptComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ChatBotGptComponent]
    });
    fixture = TestBed.createComponent(ChatBotGptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
