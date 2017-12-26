// describe - used to organize the tests: 'let me descvribe ____ to you.'
// it - used inside 'describe': 'let me tell you about ____.'
// expect - used inside 'it': 'here's what I expect'

const earth = {
  isRound: true,
  numberFromSun: 3
};

// .toBe / .not.toBe
// .toBeGreaterThan / .toBeLessThan
// .toBeCloseTo
// .toBeFalsey / .toBeTruthy
// .toEqual
// jasmine.any()
// .toContain
// jasmine.objectContaining()
// .toBeDefined

// ================================================
// 2nd parameter of describe and it is always the callback function, wrapping 'expect'
describe('Earth', () => {
  it('is round', () => {
    // matchers: function attached to 'expect'
    // toBe() is a matcher
    expect(earth.isRound).toBe(true);
  });

  it('is the third planet from the sun', () => {
    expect(earth.numberFromSun).toBe(3);
  });
});

// .toBeGreaterThan / .toBeLessThan

describe('Jasmine Matchers', () => {
  it('allow for === and deep equality', () => {
    // .toBe / .not.toBe - does a === (triple equal) comparison
    expect(1 + 1).toBe(2);
    expect([1, 2, 3]).toEqual([1, 2, 3]);
  });

  it('allow for easy precision checking', () => {
    // .toBeCloseTo - close to some value, not not exactly the same
    expect(3.1415).toBeCloseTo(3.141, 2); // delta = within how many decimal points
  });

  it('allow for easy truthy / falsey checking', () => {
    // .toBeFalsey / .toBeTruthy - when a value can be converted to a boolean value, either falsey or truthy
    expect(0).toBeFalsy();
    expect([]).toBeTruthy();
  });

  it('allows for easy type checking', () => {
    // .toEqual - accepts 2 different objs, will return true if they contain same value, even if not the same reference
    // triple equal on reference values will return false if they're not refering to the same memory in space, even if values are exactly the same
    expect([]).toEqual(jasmine.any(Array));
    // jasmine.any() - useful for type checking
    expect(() => {}).toEqual(jasmine.any(Function));
    expect({}).toEqual(jasmine.any(Object));
  });

  it('allows for checking contents of an object', () => {
    // .toContain - useful when want to see whether an Array contains a value
    expect([1, 2, 3]).toContain(1);
    expect({
      name: 'Jack',
      job: 'Student'
    }).toEqual(
      // jasmine.objectContaining() - useful when looking for an property of an object
      jasmine.objectContaining({
        name: 'Jack'
      })
    );
  });

  it('should behave...', () => {
    // .toBeDefined - certain variable have a specific value, and not undefined
    // earth.isFlat will fail because it is undefined
    expect(earth.isRound).toBeDefined();
  });
});
