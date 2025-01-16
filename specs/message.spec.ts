import { describe, expect, test as spec } from 'bun:test';

import { message } from '#src/index.ts';

describe('Send Message', () => {
  spec('should return "Hello!"', async () => {
    const result = await message('Hello!');

    expect(result).toEqual('Hello!');
  });
});
