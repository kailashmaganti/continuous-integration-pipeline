import { describe, expect, it } from 'vitest';

import { createHealthStatus } from './health.js';

describe('createHealthStatus', () => {
  it('returns the expected service status', () => {
    const result = createHealthStatus(new Date('2026-07-11T00:00:00.000Z'));

    expect(result).toEqual({
      status: 'ok',
      timestamp: '2026-07-11T00:00:00.000Z',
      service: 'continuous-integration-pipeline'
    });
  });
});
