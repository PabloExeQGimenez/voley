import 'dotenv/config';

const required = (name: string, fallback?: string) => {
  const v = process.env[name] ?? fallback;
  if (v === undefined)
    throw new Error(`No existe la variable de entorno ${name}`);
  return v;
};

export const ENV = {
  NODE_ENV: process.env.NODE_ENV ?? 'development',
  PORT: Number(required('PORT', '4000')),
  DATABASE_URL: required('DATABASE_URL'),
  CORS_ORIGIN: required('CORS_ORIGIN', '*'),
};
