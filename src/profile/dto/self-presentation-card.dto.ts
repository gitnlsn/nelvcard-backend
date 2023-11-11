import { SelfPresentationCard } from '@prisma/client';

export type SelfPresentationCardDto = Omit<SelfPresentationCard, 'id'>;
