import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const backendRoot = path.resolve(__dirname, '../..');

const envCandidates = [
  path.join(backendRoot, '.env'),
  path.join(process.cwd(), '.env'),
];

const resolvedEnvPath = envCandidates.find((candidate) => fs.existsSync(candidate));

if (resolvedEnvPath) {
  dotenv.config({ path: resolvedEnvPath });
}

export const ENV_FILE_PATH = resolvedEnvPath;
