import 'dotenv/config';

const required = (name: string, fallback?: string) => {
  const v = process.env[name] ?? fallback;
  if (v === undefined)
    throw new Error(`No existe la variable de entorno ${name}`);
  return v;
};
