import { assert } from 'chai';
import { describe, it } from 'mocha';

import hello from '../index.ts';

describe('Message', () => {
  it('Hello!', () => {
    assert.equal(hello('Hello!'), 'Hello!');
  });
});
