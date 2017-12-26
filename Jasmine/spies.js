// Spies - mock functions
// 1. mimicking functions and track calls to it and all arguments
// 2. only exists in the 'describe' or 'it' block in which it is defined
// 3. are removed after each spec

// ========= creating spies =========
// spyOn() - can only be used when the method already exists on the object
// jasmine.createSpy() will return a brand new function

function add(a, b, c) {
  return a + b + c;
}

// faking behaviors of the functions, without worrying about functions interconnecting with other functionalities
describe('add', () => {
  let addSpy, result;

  beforeEach(() => {
    // spyOn() can only be used on existing functions
    addSpy = spyOn(window, 'add').and.callThrough(); // .and.callThrough() stores the returned value instead of returning undefined
    result = addSpy(1, 2, 3);
  });

  it('is can have params tested', () => {
    // testing without parameters
    expect(addSpy).toHaveBeenCalled();
    // testing whether the function is called with certain parameters
    expect(addSpy).toHaveBeenCalledWith(1, 2, 3); // will throw failure if pass in (1, 2, 3, 4)
  });

  it('can have a return value tested', () => {
    expect(result).toEqual(6);
  });

  // testing frequency
  it('can test how many times the function is ran with .calls', () => {
    // .calls.any() returns false if hasn't been called at all; returns true if has been called at least once
    expect(addSpy.calls.any()).toBe(true);
    // .calls.count() returns the # of times the spy was called
    expect(addSpy.calls.count()).toBe(1);
  });
});
