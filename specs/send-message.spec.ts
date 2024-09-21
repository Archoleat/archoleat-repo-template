import { describe, expect, test as spec } from 'bun:test';

import { sendMessage } from '#index';

describe('Send Message', () => {
  spec('Hello!', async () => {
    return await sendMessage('Hello!').then((parameter) => {
      expect(parameter).toEqual('Hello!');
    });
  });
});
