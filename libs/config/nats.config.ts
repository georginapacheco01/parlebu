export const getNatsUrl = (): string => {
  return process.env.NATS_URL || 'nats://localhost:4222';
};
