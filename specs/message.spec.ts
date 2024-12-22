import { describe, expect, test as spec } from 'bun:test';

import { message } from '#index';

describe('Send Message', async () => {
  spec('should return "Hello!"', async () => {
    await message('Hello!').then((string) => {
      expect(string).toEqual('Hello!');
    });
  });
});
