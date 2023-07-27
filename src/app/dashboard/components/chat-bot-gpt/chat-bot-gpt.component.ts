import { Component, ElementRef, OnInit, ViewChild, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatBotServiceTsService } from './chat-bot.service.ts.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Menssage } from './interfaces/menssage.interface';


@Component({
  selector: 'chat-bot-gpt',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './chat-bot-gpt.component.html',
  styleUrls: ['./chat-bot-gpt.component.scss']
})
export class ChatBotGptComponent implements OnInit{
  private chatBotService =  inject(ChatBotServiceTsService);
  private fb = inject(FormBuilder);
  public pregunta:string = 'cuanto puede vivir un gato gris gordo?'
  public isOpen: boolean = false;
  public menssages: Menssage[]=[];
  public userClass: string ='chat-bot__chat__container-board__board__user-menssage';
  public botClass: string ='chat-bot__chat__container-board__board__bot-menssage';
  public errorClass: string ='chat-bot__chat__container-board__board__error-menssage';

  @ViewChild('board')
  private board!: ElementRef;

  public myForm :FormGroup = this.fb.group({
    question:['',[Validators.required]]
  })

  ngOnInit(): void {
    // this.chatBotService.getDataFromOpenAI(this.pregunta).subscribe(resp =>{console.log(resp.text)})
  }

  openChat():void{
    this.isOpen = !this.isOpen;
  }

  scrollToBottom(){
    try {
      this.board.nativeElement.scrollTop = this.board.nativeElement.scrollHeight;
    } catch(err) { }
  }
  // This method saves the menssage in the array
  saveMenssage(menssage:string,classType:string){
    this.menssages.push(
      {
        text:menssage,
        type:classType
      })
  }

  // Form submit
  onSave(){
    const text = this.myForm.get('question')?.value;
    if (text.lenght === 0) return;
    this.saveMenssage(text, this.userClass);
      this.myForm.reset();
      this.scrollToBottom()
  }


}
