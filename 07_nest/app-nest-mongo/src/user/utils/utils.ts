import { compareSync, hashSync } from 'bcryptjs';

export const createHash = (password: string) => hashSync(password, 10);

export const isValidPassword = (password: string, hash: string) =>
  compareSync(password, hash);
