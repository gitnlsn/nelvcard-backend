import { DescriptionCard } from '@prisma/client';

export type DescriptionCardDto = Omit<DescriptionCard, 'id' | 'pageId'>;
