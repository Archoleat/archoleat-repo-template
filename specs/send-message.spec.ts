import { describe, expect, test as spec } from 'bun:test';

import { sendMessage } from '#index';

describe('Send Message', async () => {
  spec('should return "Hello!"', async () => {
    await sendMessage('Hello!').then((string) => {
      expect(string).toEqual('Hello!');
    });
  });
});
