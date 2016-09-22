"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
require("reflect-metadata");
var core_1 = require("@angular/core");
/*function Injectable() : ClassDecorator {
  return () => {}
}

function Inject(val) {
  return (cls, key, index) => {
    let parameters = Reflect.getMetadata('parameters', cls) || [];
    
    while(parameters.length < index) {
      parameters.push(null);
    }
    parameters[index] = parameters[index] || [];
    parameters[index].push(val);
    Reflect.defineMetadata('parameters', parameters, cls);
  }
}*/
var A = (function () {
    function A() {
    }
    return A;
}());
var B = (function () {
    function B() {
    }
    return B;
}());
var C = (function () {
    function C() {
    }
    return C;
}());
//@Injectable()
var BaseClass = (function () {
    function BaseClass(a) {
        this.a = a;
    }
    return BaseClass;
}());
var Cls1 = (function (_super) {
    __extends(Cls1, _super);
    function Cls1(b, a) {
        _super.call(this, a);
        this.b = b;
    }
    return Cls1;
}(BaseClass));
Cls1 = __decorate([
    core_1.Injectable(),
    __param(0, core_1.Inject(B)), __param(1, core_1.Inject(A))
], Cls1);
var Cls2 = (function (_super) {
    __extends(Cls2, _super);
    function Cls2(c, a) {
        _super.call(this, a);
        this.c = c;
    }
    return Cls2;
}(BaseClass));
Cls2 = __decorate([
    core_1.Injectable(),
    __param(0, core_1.Inject(C)), __param(1, core_1.Inject(A))
], Cls2);
//console.log(Reflect.getMetadata('parameters', Cls1))
//console.log(Reflect.getMetadata('parameters', Cls2))
console.log(Reflect.getMetadata('parameters', Cls1) == Reflect.getMetadata('parameters', Cls2));
assert(Reflect.getMetadata('parameters', Cls1) !== Reflect.getMetadata('parameters', Cls2), "Should not share metadata");
