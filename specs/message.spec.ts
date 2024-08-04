import { describe, expect, test as spec } from 'bun:test';

import { message } from '#src';

describe('Message', () => {
  spec('Hello!', async () => {
    return message('Hello!').then((parameter) => {
      expect(parameter).toEqual('Hello!');
    });
  });
});
