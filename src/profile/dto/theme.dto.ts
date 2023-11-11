import { Theme } from '@prisma/client';

export type ThemeDto = Omit<Theme, 'id'>;
