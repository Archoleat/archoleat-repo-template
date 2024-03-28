import { describe, expect, test } from 'vitest';

import { message } from '../index.ts';

describe('Message', () => {
  test('Hello!', async () => {
    return message('Hello!').then((argument) => {
      expect(argument).equal('Hello!');
    });
  });
});
