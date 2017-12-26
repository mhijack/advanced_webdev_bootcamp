// =========== make variables available to multiple tests ===========
// beforeEach() - run before each 'it' callback
// afterEach() - run after each 'it' callback: useful for 'teardown' - reseting variable used in beforeEach
// beforeAll() / afterAll() - sets state before ALL tests
describe('Counting', () => {
  let count = 0;

  // beforeEach()
  beforeEach(() => {
    count += 1;
  });

  // afterEach()
  afterEach(() => {
    count = 0;
  });

  it('has a counter that increments', () => {
    expect(count).toBe(1);
  });

  it('gets reset', () => {
    expect(count).toBe(1);
  });
});

// nesting dsecribe

// ============= pending tests =============
// xit() / pending() inside it()
describe('Pending specs', () => {
  // 1 xit(
  xit('can start with an xit', () => {
    expect(true).toBe(true);
  });
  // it('is a pending test there is no callback function');

  // 2 pending() inside it()
  it('is a pending if the pending function is invoked inside the callback', () => {
    expect(2).toBe(2);
    pending();
  });
});

// =============== grouping expect functions based on functionalities ===============
