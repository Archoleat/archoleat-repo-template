import { describe, it } from 'mocha';
import { assert } from 'chai';

import hello from '../index.js';

describe('Message', () => {
  it('Hello!', () => {
    assert.equal(hello(), 'hello!');
  });
});
