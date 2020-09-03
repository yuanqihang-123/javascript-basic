describe('for strings', () => {
  fit('should get character at certain position', () => {
    const string = 'Hello';
    const characterWithinRange = string[1];
    const characterOutOfRange = string[10];

    // <--start
    // Please write down the correct value. You should write the final result directly.
    const expectedCharWithinRange = 'e';
    // 数字未定义是NaN,string未定义是undefined;
    const expectedCharOutOfRange = undefined;
    // --end->

    expect(characterWithinRange).toEqual(expectedCharWithinRange);
    expect(characterOutOfRange).toEqual(expectedCharOutOfRange);
  });

  fit('should use template string to create strings', () => {
    const variable = 'World';
    const template = `Hello ${variable}`;

    // <--start
    // Please write down the correct value. You should write the final result directly.
    const expected = 'Hello World';
    // --end->

    expect(template).toEqual(expected);
  });

  fit('should get substring', () => {
    const string = 'coconuts';

    // <--start
    // Please write down the correct value. You should write the final result directly.
    const expected = 'nut';
    // --end->
    // 左开右闭,故是nut
    expect(string.slice(4, 7)).toEqual(expected);
  });

  fit('should get first index of a string', () => {
    const string = 'coconuts';

    // <--start
    // Please write down the correct value. You should write the final result directly.
    const expected = 5;
    // --end->
    expect(string.indexOf('ut')).toEqual(expected);
  });

  fit('should be able to trim string', () => {
    const string = ' coconuts \n';

    // <--start
    // Please write down the correct value. You should write the final result directly.
    const expected = 'coconuts';
    // --end->

    // trim()删除开头和结尾的空格还有行终止符
    expect(string.trim()).toEqual(expected);
  });

  fit('should split string', () => {
    const words = 'what a beautiful    day';
    const splitted = words.split(' ');

    // <--start
    // Please write down the correct value. You should write the final result directly.
    const expected = ['what', 'a', 'beautiful', '', '', '', 'day'];
    // --end->

    expect(splitted).toEqual(expected);
  });

  fit('should join strings', () => {
    const splitted = ['what', 'a', 'beautiful', 'day'];

    // <--start
    // Please write down the correct value. You should write the final result directly.
    const expected = 'what->a->beautiful->day';
    // --end->

    expect(splitted.join('->')).toEqual(expected);
  });

  fit('should be aware to the codepoint larger than 16-bit', () => {
    const emoji = '🐴👟';

    // <--start
    // Please write down the correct value. You should write the final result directly.
    const expected = 4;
    // --end->

    expect(emoji.length).toEqual(expected);
  });
});
