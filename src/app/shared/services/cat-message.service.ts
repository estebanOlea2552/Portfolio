import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CatMessageService {
  path: any = '';
  listOfMessages: {[key: string]: String} = {
    '/section/description' : 'Gran presentación, hasta yo me emocioné',
    '/section/stack' : 'Guau! esas son muchas tecnologías',
    '/section/education' : 'Un sujeto muy educado',
    '/section/projects' : 'Dicen que yo soy su proyecto favorito :3',
    '/section/experience' : 'A eso le llamo una persona activa!',
    '/section/cv' : 'Qué lindos botones, no te dan ganas de presionarlos?',
    '/section/social' : 'En LinkedIn comparte muchos memes',
    '/section/contact' : 'Qué nervios!',
    '/section/thanks' : 'Gracias por visitarnos :)'
  }
  
  constructor() {}

  assignPath(value: String): void{
    this.path = value
  }

  returnMessage(): String{
    return this.listOfMessages[this.path]
  }
}
