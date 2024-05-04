import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CatMessageService {
  path: any = '';
  listOfMessages: {[key: string]: String} = {
    '/home' : 'Hola! Soy Puflito, el Gatito espacial. Yo seré tu guía a lo largo de esta web :)',
    '/section/descripcion' : 'descripcion',
    '/section/stack' : 'stack',
    '/section/educacion' : 'educacion',
    '/section/proyectos' : 'proyectos',
    '/section/experiencia' : 'experiencia',
    '/section/cv' : 'cv',
    '/section/redes' : 'redes',
    '/section/contacto' : 'contacto',
    '/section/gracias' : 'gracias'
  }
  
  constructor() {}

  assignPath(value: String): void{
    this.path = value
  }

  returnMessage(): String{
    return this.listOfMessages[this.path]
  }
}
