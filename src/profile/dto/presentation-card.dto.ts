import { PresentationCard } from '@prisma/client';
import { LinkDto } from './link.dto';

type PresentationCardWithNoId = Omit<PresentationCard, 'id' | 'page'>;

export interface PresentationCardDto extends PresentationCardWithNoId {
  links: LinkDto[];
}
