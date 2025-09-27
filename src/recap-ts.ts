// type Address = {
//   road: string;
//   province: string;
// };

// class Person {
//   // field/property
//   readonly name: string;
//   age: number = 50;
//   address: Address;

//   // method
//   constructor(a: string, b: number, c: Address) {
//     this.name = a;
//     this.age = b;
//     this.address = c;
//     console.log('this is constructor');
//   } // this method is automatically called when we create an instance of a class

//   sayHi(): void {
//     console.log(this.name);
//     console.log('Hi');
//     this.sayHello('world');
//   }

//   sayHello(message: String): void {
//     console.log(`Hello, ${message}`);
//   }
// }

// inheritance
// policeman class is a child class of Person class
// person class is a parent class of policeman class
// class Policeman extends Person {
//   badge: number;
//   rank: string;

//   // if policeman class has no constructor, it will use the constructor of Person class
//   // or you can create constructor in policeman class
//   constructor() {
//     // must call super() before using this in child class
//     super('default', 0, { road: 'unknown', province: 'unknown' });
//   }

//   // method in child class can override method in parent class
//   sayHi() {
//     console.log('Hi from policeman');
//   }
// }

// const police1 = new Policeman();
// police1.sayHi();
// police1.sayHello('everyone');

// check instance of a class
// console.log(police1 instanceof Person); // true
// console.log(police1 instanceof Policeman); // true

// HttpException is a child class of Error class

// instantiate
// const p1 = new Person('alice', 30, { road: '123 Main St', province: 'CA' }); // {name,age,address} , p1 called instance of a class Person
// const p2 = new Person('bob', 25, { road: '456 Elm St', province: 'NY' }); // {name,age,address} , p2 called instance of a class Person
// p1.sayHi();
// p2.sayHello('pai');

// const d = new Date(); // d instance of Date class
// console.log(d instanceof Date); // true

// const error = new Error();
// console.log(error instanceof Date); // false

// class notFoundException extends Error {
//   statusCode: number;
//   // error class has message property already
//   // message: string;

//   constructor(message: string, statusCode: number) {
//     super(message);
//     this.statusCode = statusCode;
//   }
// }

// const notFound = new notFoundException('product not found', 404);
// console.log(notFound);
// console.log(notFound instanceof Error); // true

// Access Modifiers
// public, private, protected
// default is public
// class Person {
//   // public name: string; // can access from anywhere
//   // private name: string; // can access only within the class
//   // protected name: string; // can access within the class and its subclasses
//   protected name: string;
//   private age: number = 50;

//   constructor(name: string) {
//     this.name = name;
//   }
// }

// class Lawyer extends Person {
//   // static property
//   // belongs to the class itself, not the instance
//   static runningId: number = 0;

//   // static method
//   static getRunningId() {
//     console.log('muamua');
//   }

//   // instance property
//   degree: string;

// instance method
//   constructor(degree: string, name: string) {
//     super(name);
//     this.degree = degree;
//   }

//   private sayHi() {
//     console.log(this.name);
//     // console.log(this.age); // Error: Property 'age' is private and only accessible within class 'Person'.
//   }
// }

// console.log(Lawyer.runningId);

// const lawyer1 = new Lawyer('JD', 'Alice');
// console.log(lawyer1.degree);
// console.log(lawyer1.name); // Error: Property 'name' is protected and only accessible within class 'Person' and its subclasses.
// console.log(lawyer1.age); // Error: Property 'age' is private and only accessible within class 'Person'.
// lawyer1.sayHi(); // Error: Property 'sayHi' is private and only accessible within class 'Lawyer'.
// console.log(lawyer1.runningId); // Error: Property 'runningId' does not exist on type 'Lawyer'.

// Example static method in Date class
// Date.now(); // static method // returns the number of milliseconds elapsed since January 1, 1970 00:00:00 UTC

// const d = new Date('2023-01-01'); // instance method
// d.getTime(); // instance method // returns the number of milliseconds since January 1, 1970 00:00:00 UTC

// parse generic type
// T is a placeholder for a type that will be specified when the class is instantiated
// T can be any valid TypeScript type: string, number, boolean, object, array, etc.
// class List<T> {
//   content: T[];

//   constructor(initialValues: T[]) {
//     this.content = initialValues;
//   }
// }

// const a = new List<string>(['apple', 'banana', 'orange']); // T is string
// const b = new List<number>([1, 2, 3]); // T is number
// console.log('a', a);
// console.log('b', b);

// this is long way to declare address property
// class Person {
//   public name: string;
//   public age: number;

//   constructor(name: string, age: number) {
//     this.name = name;
//     this.age = age;
//   }
// }

// // this is short way to declare address property
// class shortHandPerson {
//   constructor(
//     public name: string,
//     public age: number
//   ) {}
// }

// const shortHandP1 = new shortHandPerson('shortHandAlice', 30);
// console.log(shortHandP1);

// interface Repository<T> {
//   findAll(): T[];
//   findById(id: string): T | null;
// }

// // implement interface
// // must implement all methods in the interface
// class UserRepository implements Repository<string> {
//   findAll(): string[] {
//     return [];
//   }

//   findById(id: string): string | null {
//     return id;
//   }
// }

// const u = new UserRepository();
// u.findAll();
// u.findById('123');

// abstract class
// cannot instantiate abstract class
// must be extended by another class
// can have abstract methods (methods without implementation)
abstract class HashService {
  getSalt() {
    console.log('GET salt');
  }

  // abstract method
  // can't have implementation
  abstract hash(): string;
}
// const hs = new HashService(); // Error: Cannot create an instance of an abstract class.

// must be created a subclass to extend abstract class
class BcryptHashService extends HashService {
  hash(): string {
    return 'bcrypt hash';
  }
}

class MdService extends HashService {
  hash(): string {
    return 'md5 hash';
  }
}

// const bcrypt = new BcryptHashService();
// console.log(bcrypt);
// console.log(bcrypt.hash('123456'));

// OOP Principles
// 1. Encapsulation: Bundling of data and methods that operate on that data within one unit (class)
// 2. Inheritance: Mechanism to create a new class using properties and methods of an existing class
// 3. Polymorphism: Ability to present the same interface for different underlying forms (data types)
// 4. Abstraction: Hiding complex implementation details and showing only essential features of the object

// SOLID Principles
// 1. Single Responsibility Principle: A class should have only one reason to change
// 2. Open/Closed Principle: Software entities should be open for extension but closed for modification
// 3. Liskov Substitution Principle: Objects of a superclass should be replaceable with objects of a subclass without affecting the correctness of the program
// 4. Interface Segregation Principle: No client should be forced to depend on methods it does not use
// 5. Dependency Inversion Principle: High-level modules should not depend on low-level modules. Both should depend on abstractions.
class AuthService {
  constructor(public s: HashService) {}

  register(email: string, password: string) {
    const hashedPassword = this.s.hash();
  }
}

// const bcryptService = new BcryptHashService();
// const md5Service = new MdService();
// const authService = new AuthService(bcryptService);
// const authService2 = new AuthService(md5Service);

// DI - Dependency Injection
// NestJS ใช้หลักการ Dependency Injection (DI) ในการจัดการกับการสร้างและการจัดการ instance ของ class ต่างๆ
// NestJs using DI container to manage the lifecycle of class instances and their dependencies

// differnt between interface and abstract class

// interface Repository<T> {
//   findAll(): T[];
//   findById(id: string): T | null;
//   create(input: Omit<T, 'id'>): T;
// }

// class PrismaUserRepository implements Repository<User> {}
// class TestUserRepository implements Repository<User> {
//   private users: User[] = [];

//   findAll(): User[] {
//     return this.users;
//   }
// }

// class UserService {
//   constructor(private userRepository: Repository<User>) {}
//   findAll() {}
// }
