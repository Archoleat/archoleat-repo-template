import { describe, it } from 'mocha';
import { assert } from 'chai';

import hello from '../src/index.ts';

describe('Message', () => {
  it('Hello!', () => {
    assert.equal(hello(), 'hello!');
  });
});
