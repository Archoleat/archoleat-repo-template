import { expect } from 'chai';
import { describe, it } from 'mocha';

import hello from '../index.ts';

describe('Message', () => {
  it('Hello!', async () => {
    return hello('Hello!').then((argument) => {
      expect(argument).equal('Hello!');
    });
  });
});
