import { describe, expect, test as spec } from 'vitest';

import { message } from '#index';

describe('Message', () => {
  spec('Hello!', async () => {
    return message('Hello!').then((argument) => {
      expect(argument).equal('Hello!');
    });
  });
});
