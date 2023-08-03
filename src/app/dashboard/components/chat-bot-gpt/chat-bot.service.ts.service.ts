
import { Injectable } from '@angular/core';
import { Configuration, OpenAIApi } from 'openai';
import { Observable, catchError, filter, from, map, of } from 'rxjs';
import { enviroment } from 'src/environment/enviroment';

@Injectable({
  providedIn: 'root'
})
export class ChatBotServiceTsService {
private API_KEY:string = enviroment.apikey;

  constructor() { }

  readonly configuration = new Configuration({apiKey:this.API_KEY});

  readonly openAi = new OpenAIApi(this.configuration);

  getDataFromOpenAI(text:string):Observable<any>{
      return from(this.openAi.createCompletion({
        model: 'text-davinci-003',
        prompt: text,
        max_tokens: 256,
        temperature: 0.8,
      })).pipe(
        filter((resp)=>!!resp && !!resp.data),
        map(resp => resp.data),
        map(data => data.choices[0]),
        catchError(err=>{ return of(null)})
      )
  }
}
