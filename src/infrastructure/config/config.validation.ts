/* eslint-disable @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access */
import * as Joi from 'joi';

export const configValidationSchema = Joi.object({
  NODE_ENV: Joi.string()
    .valid('development', 'production', 'test', 'staging')
    .empty('')
    .default('development'),
  PORT: Joi.number().integer().min(1).max(65535).empty('').default(3000),
  APP_NAME: Joi.string().trim().min(1).empty('').default('NestJS Application'),
});

