import { Link } from '@prisma/client';

export type LinkDto = Omit<Link, 'id' | 'presentationCardId'>;
