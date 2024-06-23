import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CatMessageService {
  path: any = '';
  listOfMessages: {[key: string]: String} = {
    '/section/description' : 'Un perfil bien detallado!',
    '/section/stack' : 'Una lista completa de herramientas de desarrollo!',
    '/section/education' : 'Algunas instituciones importantes, además de lo que aprendió por cuenta propia!',
    '/section/projects' : 'Dicen que yo soy su proyecto favorito :3',
    '/section/experience' : 'Más de 6 años en la industria digital!',
    '/section/cv' : 'Aquí encontrarás una versión resumida de todo lo que viste',
    '/section/social' : 'LinkedIn es la recomendación de la casa!',
    '/section/contact' : 'Aquí puedes mandar un correo directo, escribe con confianza! ;)',
    '/section/thanks' : 'Gracias, vuelva prontos!'
  }
  
  constructor() {}

  assignPath(value: String): void{
    this.path = value
  }

  returnMessage(): String{
    return this.listOfMessages[this.path]
  }
}
