describe('for object', () => {
  fit('should access property via dot or bracket', () => {
    const person = { name: 'Bob' };

    // <--start
    // Please write down the correct value. You should write the final result directly.
    const expectedName = 'Bob';
    // --end->

    expect(person.name).toEqual(expectedName);
    // eslint-disable-next-line dot-notation
    expect(person['name']).toEqual(expectedName);
  });

  fit('should get undefined if property is not defined', () => {
    const person = { name: 'Bob' };

    // <--start
    // Please write down the correct value. You should write the final result directly.
    const expected = undefined;
    // --end->

    expect(person.whatTheHellIsThat).toEqual(expected);
  });

  fit('should remove object property using delete operator', () => {
    const person = { name: 'Bob' };

    // <--start
    // Please write a line of code to remove the `name` property.
    delete person.name;
    // --end->

    expect(person.name).toBeUndefined();
  });

  fit('should be able to find all the keys', () => {
    const person = {
      name: 'Bob', yearOfBirth: 2019,
    };

    // <--start
    // Please write down the correct value. You should write the final result directly.
    const expected = ['name', 'yearOfBirth'];
    // --end->

    expect(Object.keys(person)).toEqual(expected);
  });

  fit('should create object with braces expression', () => {
    const person = {
      name: 'Bob',
      // eslint-disable-next-line object-shorthand, func-names
      greeting: function () { return `Hello, I am ${this.name}`; },
    };

    person.name = 'John';

    // <--start
    // Please write down the correct value. You should write the final result directly.
    const expected = 'Hello, I am John';
    // --end->

    expect(person.greeting()).toEqual(expected);
  });

  fit('should destruct object', () => {
    const person = { name: 'Bob', yearOfBirth: 2019 };
    const { name } = person; // 对象的解构赋值

    // <--start
    // Please write down the correct value. You should write the final result directly.
    const expected = 'Bob';
    // --end->

    expect(name).toEqual(expected);
  });

  fit('should serialize object to JSON', () => {
    const person = { name: 'Bob', yearOfBirth: 2019 };
    const json = JSON.stringify(person);

    // <--start
    // Please write down the correct value. You should write the final result directly.
    const expected = '{"name":"Bob","yearOfBirth":2019}';
    // --end->

    expect(json).toEqual(expected);
  });

  fit('should parse JSON to object', () => {
    const json = '{"color":"Red","value":"#ff0000"}';
    const color = JSON.parse(json);

    // <--start
    // Please write down the correct value. You should write the final result directly.
    const expected = { color: 'Red', value: '#ff0000' };
    // --end->

    expect(color).toEqual(expected);
  });

  fit('should point to the object it was called on for "this" in a method', () => {
    function speak(line) {
      return `The ${this.type} rabbit says ${line}.`;
    }
    const rabbit = { type: 'white', speak };

    // <--start
    // Please write down the correct value. You should write the final result directly.
    const expected = 'The white rabbit says Hello.';
    // --end->

    expect(rabbit.speak('Hello')).toEqual(expected);
  });

  fit('should explicitly specify this using call method', () => {
    function speak(line) {
      return `The ${this.type} rabbit says ${line}.`;
    }
    const rabbit = { type: 'white', speak };

    speak.call(rabbit, 'Hello');

    // <--start
    // Please write down the correct value. You should write the final result directly.
    const expected = 'The white rabbit says Hello.';
    // --end->

    expect(rabbit.speak('Hello')).toEqual(expected);
  });

  fit('should capture this in the scope around it for arrow function', () => {
    function normalize() {
      return this.coords.map(n => n / this.length);
    }

    const actual = normalize.call({ coords: [0, 10, 15], length: 5 });

    // <--start
    // Please write down the correct value. You should write the final result directly.
    const expected = [0, 2, 3];
    // --end->

    expect(actual).toEqual(expected);
  });

  fit('should get object prototype for an object', () => {
    const emptyObject = {};

    // <--start
    // Please write down the correct value. You should write the final result directly.
    // https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/GetPrototypeOf
    const expected = Object.prototype;
    // --end->

    // Object.getPrototypeOf(xxx),获取xxx的prototype=父类的prototype,
    // 这里的emptyObject是个对象,而对象的父类是Object,所以==Object.prototype
    expect(Object.getPrototypeOf(emptyObject)).toBe(expected);
  });

  fit('should get null for object prototype\'s prototype', () => {
    const objectPrototype = Object.prototype;

    // <--start
    // Please write down the correct value. You should write the final result directly.
    const expected = null;
    // --end->

    expect(Object.getPrototypeOf(objectPrototype)).toEqual(expected);
  });

  fit('should be able to create object with specified prototype', () => {
    const rabbitPrototype = {
      speak(line) { return `The ${this.type} rabbit says ${line}.`; },
    };
    const killerRabbit = Object.create(rabbitPrototype);
    killerRabbit.type = 'killer';

    const words = killerRabbit.speak('SKREEEE');

    // <--start
    // Please write down the correct value. You should write the final result directly.
    const expected = 'The killer rabbit says SKREEEE.';
    // --end->

    expect(words).toEqual(expected);
  });

  fit('should simulate constructor using function, and use function\'s prototype as definition', () => {
    function Rabbit(type) { this.type = type; }
    // eslint-disable-next-line func-names
    Rabbit.prototype.speak = function (line) { return `The ${this.type} rabbit says ${line}.`; };

    const rabbit = new Rabbit('weird');

    // <--start
    // Please write down the correct value. You should write the final result directly.
    const expected = 'The weird rabbit says ?_?.';
    // --end->

    expect(rabbit.speak('?_?')).toEqual(expected);

    const prototypeOfRabbitInstance = Object.getPrototypeOf(rabbit);
    // eslint-disable-next-line no-unused-vars
    const rabbitFunctionPrototype = Rabbit.prototype;
    const prototypeOfRabbitFunction = Object.getPrototypeOf(Rabbit);
    // eslint-disable-next-line no-unused-vars
    const functionPrototype = Function.prototype;

    // <--start
    // Please write down the correct value. You should choose the correct value from:
    // * prototypeOfRabbitInstance
    // * rabbitFunctionPrototype
    // * prototypeOfRabbitFunction
    // * functionPrototype

    // Object.getPrototypeOf(xxx),获取xxx的prototype=父类的prototype,
    // 这里的rabbit的父类是Rabbit,所以==Rabbit.prototype
    // 这里的Rabbit(构造函数)函数的父类是Function,所以==Rabbit.prototype
    const expectedPrototypeOfRabbitInstance = Rabbit.prototype;
    const expectedPrototypeOfRabbitFunction = Function.prototype;
    // --end->

    expect(prototypeOfRabbitInstance).toBe(expectedPrototypeOfRabbitInstance);
    expect(prototypeOfRabbitFunction).toBe(expectedPrototypeOfRabbitFunction);
  });

  fit('should use the class notation rather than the awkward function', () => {
    class Rabbit {
      constructor(type) { this.type = type; }

      speak(line) { return `The ${this.type} rabbit says ${line}.`; }
    }

    const rabbit = new Rabbit('white');

    // <--start
    // Please write down the correct value. You should write the final result directly.
    const expected = 'The white rabbit says Hi.';
    // --end->

    expect(rabbit.speak('Hi')).toEqual(expected);
  });

  fit('should overriding property of prototype for an instance', () => {
    class Rabbit {}
    const killerRabbit = new Rabbit();
    Rabbit.prototype.teeth = 'small';

    // <--start
    // Please write down the correct value. You should write the final result directly.
    const expectedKillerRabbitTeeth = 'small';
    // --end->

    expect(killerRabbit.teeth).toEqual(expectedKillerRabbitTeeth);

    killerRabbit.teeth = 'sharp';

    // <--start
    // Please write down the correct value. You should write the final result directly.
    const expectedOverrideKillerRabbitTeeth = 'sharp';
    const expectedRabbitPrototypeTeeth = 'small';
    // --end->

    expect(killerRabbit.teeth).toEqual(expectedOverrideKillerRabbitTeeth);
    expect(Rabbit.prototype.teeth).toEqual(expectedRabbitPrototypeTeeth);
  });

  fit('should be the same for method overriding', () => {
    class Rabbit {}
    const killerRabbit = new Rabbit();
    // eslint-disable-next-line func-names
    Rabbit.prototype.speak = function () { return 'Hi'; };

    // <--start
    // Please write down the correct value. You should write the final result directly.
    const expectedKillerRabbitSpeak = 'Hi';
    // --end->

    expect(killerRabbit.speak()).toEqual(expectedKillerRabbitSpeak);

    // eslint-disable-next-line func-names
    killerRabbit.speak = function () { return '@_@'; };

    // <--start
    // Please write down the correct value. You should write the final result directly.
    const expectedOverrideKillerRabbitSpeak = '@_@';
    const expectedRabbitPrototypeSpeak = 'Hi';
    // --end->

    expect(killerRabbit.speak()).toEqual(expectedOverrideKillerRabbitSpeak);
    expect(Rabbit.prototype.speak()).toEqual(expectedRabbitPrototypeSpeak);
  });

  fit('should be able to define getter and setter and static method', () => {
    class Temperature {
      constructor(celsius) { this.celsius = celsius; }

      get fahrenheit() { return this.celsius * 1.8 + 32; }

      set fahrenheit(value) { this.celsius = (value - 32) / 1.8; }

      static fromFahrenheit(value) { return new Temperature((value - 32) / 1.8); }
    }

    // <--start
    // Please write down the correct value. You should write the final result directly.
    const expectedFahrenheit = 71.6;
    // --end->

    expect(new Temperature(22).fahrenheit).toEqual(expectedFahrenheit);

    // <--start
    // Please write down the correct value. You should write the final result directly.
    const expectedCelsius = 30;
    // --end->

    expect(Temperature.fromFahrenheit(86).celsius).toEqual(expectedCelsius);
  });

  fit('should inherit from existing class', () => {
    class Rabbit {
      constructor(type) { this.type = type; }

      speak() { return `I am ${this.type} rabbit`; }
    }

    class CrazyRabbit extends Rabbit {
      speak() { return `I am crazy ${this.type} rabbit`; }
    }

    const rabbit = new CrazyRabbit('white');

    // <--start
    // Please write down the correct value. You should write the final result directly.
    const expectedSpeak = 'I am crazy white rabbit';
    // --end->

    expect(rabbit.speak()).toEqual(expectedSpeak);
  });

  fit('should determine whether an instance is derived from certain class', () => {
    class Rabbit {
      constructor(type) { this.type = type; }

      speak() { return `I am ${this.type} rabbit`; }
    }

    class CrazyRabbit extends Rabbit {
      speak() { return `I am crazy ${this.type} rabbit`; }
    }

    const rabbit = new CrazyRabbit('white');

    // <--start
    // Please write down the correct value. You should write the final result directly.
    const rabbitIsRabbit = true;
    // --end->

    // rabbit instanceof Rabbit判断Rabbit.prototype是否在rabbit的原型链上,很显然是在的
    // rabbit instanceof Rabbit,通俗来讲就是看rabbit实例是否是Rabbit派生出来的
    expect(rabbit instanceof Rabbit).toEqual(rabbitIsRabbit);

    // <--start
    // Please write down the correct value. You should write the final result directly.
    const rabbitIsCrazyRabbit = true;
    // --end-->

    expect(rabbit instanceof CrazyRabbit).toEqual(rabbitIsCrazyRabbit);

    // <--start
    // Please write down the correct value. You should write the final result directly.
    const rabbitIsObject = true;
    // --end-->

    expect(rabbit instanceof Object).toEqual(rabbitIsObject);

    // <--start
    // Please write down the correct value. You should write the final result directly.
    const rabbitIsNumber = false;
    // --end-->
    // console.log((Object.getPrototypeOf(rabbit)) === CrazyRabbit.prototype); 结果为true,说明还是找父类
    expect(rabbit instanceof Number).toEqual(rabbitIsNumber);
  });
});
