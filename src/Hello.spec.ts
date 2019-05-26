import { Hello } from './Hello';

describe('Hello', () => {
  it('should say hello', () => {
    const hello = new Hello();
    expect(hello.sayHello()).toBeTruthy();
  });
});
