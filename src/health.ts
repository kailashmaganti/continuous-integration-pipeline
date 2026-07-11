export type HealthStatus = {
  status: 'ok';
  timestamp: string;
  service: string;
};

/** Creates a predictable health response for a service endpoint. */
export function createHealthStatus(now: Date = new Date()): HealthStatus {
  return {
    status: 'ok',
    timestamp: now.toISOString(),
    service: 'continuous-integration-pipeline'
  };
}
