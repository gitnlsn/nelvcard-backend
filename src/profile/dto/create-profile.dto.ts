import { DescriptionCardDto } from './description-card.dto';
import { PresentationCardDto } from './presentation-card.dto';
import { SelfPresentationCardDto } from './self-presentation-card.dto';
import { ThemeDto } from './theme.dto';

export class CreateProfileDto {
  userId: string;

  presentationCard: PresentationCardDto;
  selfPresentationCard: SelfPresentationCardDto;
  descriptionCards: DescriptionCardDto[];
  theme: ThemeDto;
}
