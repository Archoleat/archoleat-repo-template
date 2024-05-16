import { describe, expect, test as spec } from 'vitest';

import { message } from '../src/index.ts';

describe('Message', () => {
  spec('Hello!', async () => {
    return message('Hello!').then((argument) => {
      expect(argument).equal('Hello!');
    });
  });
});
