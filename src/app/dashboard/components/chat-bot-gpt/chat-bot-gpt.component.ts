import { Component, ElementRef, OnInit, ViewChild, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { text } from './Text';
import { FullMessage, Message } from './interfaces';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';
import { FormResponse } from '../../interfaces';


@Component({
  selector: 'chat-bot-gpt',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule],
  templateUrl: './chat-bot-gpt.component.html',
  styleUrls: ['./chat-bot-gpt.component.scss']
})
export class ChatBotGptComponent implements OnInit{
  readonly URL ='https://protf_server-1-b4836098.deta.app/chatbot';
  private fb = inject(FormBuilder);
  private http = inject(HttpClient)
  public isOpen: boolean = false;
  public messages: Message[]=[];

  public userClass: string ='chat-bot__chat__container-board__board__user-message';
  public botClass: string ='chat-bot__chat__container-board__board__bot-message';
  public errorClass: string ='chat-bot__chat__container-board__board__error-message';

  public spiner: boolean = false;
  public isInfoPopUpOpen: boolean = false;
  public botMessage: string[] = [text];

  @ViewChild('board')
  private board!: ElementRef;

  public myForm :FormGroup = this.fb.group({
    question:['',[Validators.required]]
  })

  constructor(){}

  ngOnInit(): void { }

  openChat():void{
    this.isOpen = !this.isOpen;
    this.closePopUp()
  }

  scrollToBottom(){
    try {
      this.board.nativeElement.scrollTop = this.board.nativeElement.scrollHeight;
    } catch(err) { }
  }
  // This method saves the message in the array
  savemessage(message:string,classType:string){
    this.messages.push(
      {
        text:message,
        type:classType
      })
  }

  // Form submit
  onSave():void{
    const question = this.myForm.get('question')?.value;
    let text!:FullMessage;
    if (question.length === 0) return;

      this.savemessage(question,this.userClass)
      this.AddTextToTheArray('user',question);
      text = this.concatText(this.botMessage)
      this.myForm.reset();
      this.turnOnOffSpiner()
      this.getBotResponse(text);
      this.scrollToBottom();
  }
  // methods to get the information from OpenAI
  getBotResponse(question:FullMessage):void{
    this.http.post<any>(this.URL,question).subscribe(resp =>{
      if (!resp[0]){
         this.savemessage('Something goes wrong, try again....',this.errorClass);
         this.turnOnOffSpiner()
        return;
    }
    this.savemessage(resp[0],this.botClass)
    this.AddTextToTheArray('assistant',resp[0]);
    this.turnOnOffSpiner()
    this.scrollToBottom();
    })
  }

  turnOnOffSpiner():void{
    this.spiner = !this.spiner;
  }
// this method add the questions and the answer to the arrayRandomIndex, this array is used to give some context to the AI
  AddTextToTheArray(role:string,text:string){
    const fullMessage = `role:${role},content:${text}`;
    if(this.botMessage.length > 10){
      this.botMessage.splice(1,2)
    }
    this.botMessage.push(fullMessage);
  }

  // openAI only acept string, this method transfor the array where all the questions and answers are saved in a string,
  concatText(array:string[]){
    const text = array.reduce((a,b)=>{return a+b});
    return {message:text}
  }

  closePopUp(){
    this.isInfoPopUpOpen = true;
  }
}
