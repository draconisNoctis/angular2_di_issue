import 'reflect-metadata';
import { Injectable, Inject } from '@angular/core';

class A {}
class B {}
class C {}

// Enabling this Decorator leads to invalid behavior in Angular DI/Metadata.
//@Injectable()
class BaseClass {
  constructor(protected a : A) {}
}

@Injectable()
class Cls1 extends BaseClass {
  constructor(@Inject(B) protected b : B, @Inject(A) a : A) {
    super(a);
  }
}

@Injectable()
class Cls2 extends BaseClass {
  constructor(@Inject(C) protected c : C, @Inject(A) a : A) {
    super(a);
  }
}

console.log(Reflect.getMetadata('parameters', Cls1))
console.log(Reflect.getMetadata('parameters', Cls2))
