import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CatMessageService {
  path: any = '';
  listOfMessages: { [key: string]: String } = {
    '/section/description': 'Un gusto!',
    '/section/stack': 'Esas son muchas tecnologías!',
    '/section/education':
      'Instituciones de gran renombre!',
    '/section/projects': 'Dicen que yo soy su proyecto favorito :3',
    '/section/experience': 'Una vasta experiencia en el campo',
    '/section/cv': 'Este CV fue creado en El-Mejor-CV.web.app, la conoces?',
    '/section/social': 'Conectando!',
    '/section/contact':
      'Aquí puedes mandar un correo directo, escribe con confianza! ;)',
    '/section/thanks': 'Gracias, vuelva prontos!',
  };

  constructor() {}

  assignPath(value: String): void {
    this.path = value;
  }

  returnMessage(): String {
    return this.listOfMessages[this.path];
  }
}
