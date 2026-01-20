import { registerAs, type ConfigFactory } from '@nestjs/config';

type AppConfig = {
  nodeEnv: string;
  port: number;
  name: string;
};

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
export const appConfig: ConfigFactory<AppConfig> = registerAs<AppConfig>('app', (): AppConfig => {
  const portEnv = process.env.PORT;
  const parsedPort =
    typeof portEnv === 'string' && portEnv.trim().length > 0
      ? Number.parseInt(portEnv, 10)
      : Number.NaN;
  const port = Number.isFinite(parsedPort) ? parsedPort : 3000;

  return {
    nodeEnv: process.env.NODE_ENV ?? 'development',
    port,
    name: process.env.APP_NAME ?? 'NestJS Application',
  };
});

