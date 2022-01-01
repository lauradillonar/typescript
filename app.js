"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function DecoradorPersona(data) {
    return function (constructor) {
        return class extends constructor {
            constructor() {
                super(...arguments);
                this.array = data.split(",");
                this.Nombre = this.array[0];
                this.Apellido = this.array[1];
            }
        };
    };
}
let Persona = class Persona {
    constructor(nombre, apellido) {
        this.nombre = "";
        this.apellido = "";
        this.añoNac = 0;
        this.nombre = nombre;
        this.apellido = apellido;
    }
    decirNombre() {
        console.log(`Mi nombre es ${this.nombre} ${this.apellido}`);
    }
};
Persona = __decorate([
    DecoradorPersona('Juan,López')
], Persona);
let persona1 = new Persona("María", "Rodriguez");
persona1.decirNombre();
console.log(persona1);
