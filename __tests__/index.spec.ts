import { assert } from 'chai';

import welcome from '../src/index.ts';

describe('Welcome', () => {
  it('Message', () => {
    assert.equal(welcome(), 'Customize your project!');
  });
});
