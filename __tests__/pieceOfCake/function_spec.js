describe('for function', () => {
  fit('should be able to define function in function scope', () => {
    function outerFunction() {
      const myName = 'World';
      function innerFunction() {
        return `Hello ${myName}`;
      }

      return innerFunction();
    }

    // <--start
    // Please write down the correct value. You should write the final result directly.
    const expected = 'Hello World';
    // --end->

    expect(outerFunction()).toEqual(expected);
  });

  fit('should pass function as value', () => {
    // 为箭头函数配置函数名
    const sayHello = () => 'Hello';

    function greeting(prefixGenerator, name) {
      return `${prefixGenerator()} ${name}`;
    }

    // <--start
    // Please write down the correct value. You should write the final result directly.
    const expected = 'Hello World';
    // --end->

    expect(greeting(sayHello, 'World')).toEqual(expected);
  });

  fit('should allow optional arguments for any function', () => {
    function square(x) { return x * x; }
    // <--start
    // Please write down the correct value. You should write the final result directly.
    // 只接受声明的形参个数,多的不接收
    const expected = 36;
    // --end->

    expect(square(6, 'Hello', 4)).toEqual(expected);
  });

  fit('should be undefined for not specified parameter', () => {
    function minus(left, right) {
      if (right === undefined) { return -left; }
      return left - right;
    }

    // <--start
    // Please write down the correct value. You should write the final result directly.
    const expectedForSingleArgument = -5;
    const expectedForTwoArguments = 2;
    // --end->

    expect(minus(5)).toEqual(expectedForSingleArgument);
    expect(minus(5, 3)).toEqual(expectedForTwoArguments);
  });

  fit('should specify default parameters', () => {
    function power(base, exponent = 2) {
      let result = 1;
      for (let count = 0; count < exponent; count += 1) {
        result *= base;
      }
      return result;
    }

    // <--start
    // Please write down the correct value. You should write the final result directly.
    const expected = 16;
    // --end->

    expect(power(4)).toEqual(expected);
  });

  fit('should not modify the original variable', () => {
    // eslint-disable-next-line prefer-const
    let guessIfIAmChanged = 'Origin';
    function transferToAnotherWord(word) {
      // eslint-disable-next-line no-param-reassign
      word = 'Changed';
      return word;
    }

    const returnValue = transferToAnotherWord(guessIfIAmChanged);

    // <--start
    // Please write down the correct value. You should write the final result directly.
    const expectedReturnValue = 'Changed';
    const expectedWord = 'Origin';
    // --end->

    expect(returnValue).toEqual(expectedReturnValue);
    expect(guessIfIAmChanged).toEqual(expectedWord);
  });

  fit('should modify the content of the variable', () => {
    const person = {};
    // eslint-disable-next-line no-shadow
    function addName(person, name) {
      // eslint-disable-next-line no-param-reassign
      person.name = name;
      return person;
    }

    const returnValue = addName(person, 'Bob');

    // <--start
    // Please write down the correct value. You should write the final result directly.
    const expectedName = 'Bob';
    const expectedReturnValueName = 'Bob';
    // --end->

    expect(person.name).toEqual(expectedName);
    expect(returnValue.name).toEqual(expectedReturnValueName);
  });

  fit('should capture local variables', () => {
    function wrapValue() {
      const localVariable = 'Hello';
      return () => localVariable;
    }

    // f()()两个括号代表:第一个代表执行f(),第二个代表执行f()里面的return的函数
    const actual = wrapValue()();

    // <--start
    // Please write down the correct value. You should write the final result directly.
    const expected = 'Hello';
    // --end->

    expect(actual).toEqual(expected);
  });

  fit('should change captured variable', () => {
    let guessIfIAmChanged = 'Origin';

    function wrapValue() {
      return () => { guessIfIAmChanged = 'Changed'; };
    }

    wrapValue()();

    // <--start
    // Please write down the correct value. You should write the final result directly.
    const expected = 'Changed';
    // --end->

    expect(guessIfIAmChanged).toEqual(expected);
  });

  fit('should create some recursion trick', () => {
    function findSolution(target) {
      function find(current, history) {
        // eslint-disable-next-line eqeqeq
        if (current == target) { return history; }
        if (current > target) { return null; }
        return find(current + 5, `(${history} + 5)`)
          || find(current * 3, `(${history} * 3)`);
      }

      return find(1, '1');
    }
    // <--start
    // Please write down the correct value. You should write the final result directly.
    const expected = '(((1 * 3) + 5) * 3)';
    // --end->

    expect(findSolution(24)).toEqual(expected);
  });

  fit('should accept any number of parameters', () => {
    function sum(...numbers) {
      let result = 0;
      for (let i = 0; i < numbers.length; i += 1) {
        result += numbers[i];
      }
      return result;
    }

    // <--start
    // Please write down the correct value. You should write the final result directly.
    const expected = 6;
    // --end->

    expect(sum(1, 2, 3)).toEqual(expected);
  });

  fit('should also use 3 dot notation to call function with rest parameters', () => {
    // 将多个参数合并为数组
    function sum(...numbers) {
      let result = 0;
      for (let i = 0; i < numbers.length; i += 1) {
        result += numbers[i];
      }
      return result;
    }

    // <--start
    // Please write down the correct value. You should write the final result directly.
    const expected = 6;
    // --end->

    const parameters = [1, 2, 3];
    // 将数组展开
    const actual = sum(...parameters);

    expect(actual).toEqual(expected);
  });

  fit('should be able to passing parameters in mixed way', () => {
    function sum(...numbers) {
      let result = 0;
      for (let i = 0; i < numbers.length; i += 1) {
        result += numbers[i];
      }
      return result;
    }

    const parameters = [1, 2, 3];
    const actual = sum(9, ...parameters, 10);

    // <--start
    // Please write down the correct value. You should write the final result directly.
    const expected = 25;
    // --end->

    expect(actual).toEqual(expected);
  });

  // 和promise.then(resolve(),reject())一个意思,将函数放在性参中传入
  fit('should pass pre-defined function as callback', () => {
    function repeat(n, action) {
      for (let i = 0; i < n; i += 1) { action(i); }
    }
    const labels = [];
    repeat(3, index => labels.push(index * 3));

    // <--start
    // Please write down the correct value. You should write the final result directly.
    const expected = [0, 3, 6];
    // --end->

    expect(labels).toEqual(expected);
  });

  fit('should create higher order function', () => {
    function greaterThan(n) {
      return value => value > n;
    }

    const greaterThan10 = greaterThan(10);

    // <--start
    // Please write down the correct value. You should write the final result directly.
    const expected = false;
    // --end->

    expect(greaterThan10(3)).toEqual(expected);
  });

  fit('should not make you crazy with high order function', () => {
    function noisy(f) {
      return (...args) => f(...args);
    }

    const array = [20, 160, 11];
    // noisy(Math.min)(...array),双括号,调用子函数,第一个括号给形参f注入函数为Math.min,第二个...array赋值给...args,
    // 故Math.min(20,160,11)结果为11
    const actual = noisy(Math.min)(...array);

    // <--start
    // Please write down the correct value. You should write the final result directly.
    const expected = 11;
    // --end->

    expect(actual).toEqual(expected);
  });

  fit('should not make you crazy even we change the control flow', () => {
    function unless(test, then) { if (!test) then(); }
    function repeat(n, action) {
      for (let i = 0; i < n; i += 1) { action(i); }
    }

    const logs = [];

    // 其实很简单,直接把函数形参去替代方法体中的形参
    // 方法意思:从0到5-1的数中,如果这个数%2===1为false,那么将次数压入数组中,所以数组中为0, 2, 4
    repeat(5, (n) => {
      unless(n % 2 === 1, () => logs.push(n));
    });

    // <--start
    // Please write down the correct value. You should write the final result directly.
    const expected = [0, 2, 4];
    // --end->

    expect(logs).toEqual(expected);
  });
});
