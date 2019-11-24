import { SanitizePipe } from './sanitise.pipe';

describe('SanitisePipe', () => {
  it('create an instance', () => {
    const pipe = new SanitizePipe();
    expect(pipe).toBeTruthy();
  });
});
