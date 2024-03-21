import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CatMessageService {
  path: any = '';
  listOfMessages: {[key: string]: String} = {
    '/home' : 'Hola! Soy Puflito, el Gatito espacial. Yo seré tu guía a lo largo de esta web :)',
    '/section/descripcion' : 'Agradable sujeto :)',
    '/section/stack' : 'También sabe usar excel',
    '/section/educacion' : 'Dicen que aprendió a programar en Vietnam',
    '/section/proyectos' : 'Soy su proyecto favorito verdad? :c',
    '/section/experiencia' : '-',
    '/section/cv' : '(Hecho en Canva)',
    '/section/redes' : 'En su LinkedIn comparte memes :D',
    '/section/contacto' : 'Mande con confianza ;)',
    '/section/gracias' : 'Gracias por tu visita! :B'
  }
  
  constructor() {}

  assignToPath(value: String): void{
    this.path = value
  }

  comparePath(): String{
    return this.listOfMessages[this.path]
  }
}
