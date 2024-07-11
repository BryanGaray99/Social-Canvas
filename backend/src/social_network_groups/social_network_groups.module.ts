import { Module } from '@nestjs/common';
import { SocialNetworkGroupsService } from './social_network_groups.service';
import { SocialNetworkGroupsController } from './social_network_groups.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SocialNetworkGroupEntity } from './social_network_groups.entity';

@Module({
  imports: [TypeOrmModule.forFeature([SocialNetworkGroupEntity])],
  providers: [SocialNetworkGroupsService],
  controllers: [SocialNetworkGroupsController],
})
export class SocialNetworkGroupsModule {}
