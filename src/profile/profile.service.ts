import { Injectable, createParamDecorator } from '@nestjs/common';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { PrismaService } from '../services/prisma.service';
import { createQuery } from './utils/createQuery';

@Injectable()
export class ProfileService {
  constructor(private prisma: PrismaService) {}

  async create(createProfileDto: CreateProfileDto) {
    return createQuery(this.prisma.page, createProfileDto);
  }

  async findOne(id: string) {
    return await this.prisma.page.findFirst({
      where: {
        id,
      },
      include: {
        descriptionCards: true,
        presentationCard: true,
        selfPresentationCard: true,
        theme: true,
      },
    });
  }

  async update(id: string, updateProfileDto: UpdateProfileDto) {
    return await this.prisma.$transaction(async (transaction) => {
      await transaction.page.delete({
        where: {
          id,
        },
      });

      return await createQuery(transaction.page, updateProfileDto);
    });
  }

  async remove(id: string) {
    return await this.prisma.page.delete({ where: { id } });
  }
}
