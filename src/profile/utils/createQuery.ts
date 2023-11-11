import { Prisma, PrismaClient } from '@prisma/client';
import { DefaultArgs } from '@prisma/client/runtime/library';
import { CreateProfileDto } from '../dto/create-profile.dto';

export const createQuery = (
  page: PrismaClient<Prisma.PrismaClientOptions, never, DefaultArgs>['page'],
  createProfileDto: CreateProfileDto,
) => {
  return page.create({
    data: {
      presentationCard: {
        create: {
          ...createProfileDto.presentationCard,
          links: {
            createMany: {
              data: createProfileDto.presentationCard.links,
            },
          },
        },
      },
      selfPresentationCard: {
        create: {
          ...createProfileDto.selfPresentationCard,
        },
      },
      descriptionCards: {
        createMany: {
          data: createProfileDto.descriptionCards,
        },
      },
      theme: {
        create: createProfileDto.theme,
      },
      user: {
        connect: {
          id: createProfileDto.userId,
        },
      },
    },
  });
};
