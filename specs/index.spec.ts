import { describe, test, expect } from 'vitest';

import hello from '../index.ts';

describe('Message', () => {
  test('Hello!', async () => {
    return hello('Hello!').then((argument) => {
      expect(argument).equal('Hello!');
    });
  });
});
