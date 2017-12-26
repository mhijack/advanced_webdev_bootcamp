/* Clock - for testing time dependent code (synchronous & asynchronous)

jasmine.clock().install() - commonly done in beforeEach() block;

jasmine.clock().uninstall() - commonly done in afterEach() block;

*/

// ======== testing setTimeout() ========
describe('a simple setTimeout', () => {
  let sample;

  beforeEach(() => {
    sample = jasmine.createSpy('sampleFunction');
    jasmine.clock().install();
  });

  afterEach(() => {
    jasmine.clock().uninstall();
  });

  it('is only invoked after 1000 milliseconds', () => {
    setTimeout(() => {
      sample();
    }, 1000);

    // moves clock a certain amount of time
    jasmine.clock().tick(999);
    expect(sample).not.toHaveBeenCalled();
    jasmine.clock().tick(1);
    expect(sample).toHaveBeenCalled();
  });
});

// ======== testing setInterval() ========
describe('a simple setInterval', () => {
  let dummyFunction;

  beforeEach(() => {
    dummyFunction = jasmine.createSpy('dummyFunction');
    jasmine.clock().install();
  });

  afterEach(() => {
    jasmine.clock().uninstall();
  });

  it('check to see the # of times the function is invoked', () => {
    setInterval(() => {
      dummyFunction();
    }, 1000);

    jasmine.clock().tick(999);
    expect(dummyFunction.calls.count()).toBe(0);
    jasmine.clock().tick(1000);
    expect(dummyFunction.calls.count()).toBe(1);
    jasmine.clock().tick(1);
    expect(dummyFunction.calls.count()).toBe(2);
  });
});

// ======== testing HTTP requests ========
// commonly done through adding callback functions to beforeEach() or afterEach() or it() block
function getUserInfo(username) {
  const url = 'http://api.github.com/users/' + username;
  return fetch(url, {
    method: 'GET'
  }).then(data => {
    return data.json();
  });
}

describe('#getUserInfo', () => {
  it('returns the correct name for the user', done => {
    getUserInfo('mhijack').then(data => {
      expect(data.login).toBe('mhijack');
      // must call done() to finish test
      // done can be called anything
      done();
    });
  });
});
