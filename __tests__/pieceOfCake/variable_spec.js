describe('for variable', () => {
  fit('should have function scope for var variable', () => {
    // eslint-disable-next-line vars-on-top, no-var, no-empty
    for (var i = 0; i <= 5; i += 1) { }

    // <--start
    // Please write down the correct value. You should write the final result directly.
    const expected = 6;
    // --end->

    // eslint-disable-next-line block-scoped-var
    expect(i).toEqual(expected);
  });

  fit('should have block scope for let and const variable', () => {
    // eslint-disable-next-line prefer-const
    let i = 1000;
    // eslint-disable-next-line no-empty, no-shadow
    for (let i = 0; i <= 5; i += 1) { }

    // <--start
    // Please write down the correct value. You should write the final result directly.
    const expected = 1000;
    // --end->

    // eslint-disable-next-line no-undef
    expect(i).toEqual(expected);
  });

  fit('should be able to change details of const variable', () => {
    const constVariable = { name: 'changeit' };
    constVariable.name = 'new name';

    // <--start
    // Please write down the correct value. You should write the final result directly.
    const expected = 'new name';
    // --end->

    // const定义的常量是不可以改变值的,比如const i = i ;这里如果把i = 2;那么会报错;
    // 但是这个测试中,是改变了constVariable的name属性,但是constVariable没有变,因为constVariable是一个指针
    // 但是如果指针的值改变了,那么也会报错,修改属性的值是不会改变指针的值的
    expect(constVariable.name).toEqual(expected);
  });
});
