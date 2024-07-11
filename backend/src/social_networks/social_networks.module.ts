import { Module } from '@nestjs/common';
import { SocialNetworksService } from './social_networks.service';
import { SocialNetworksController } from './social_networks.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SocialNetworkEntity } from './social_networks.entity';

@Module({
  imports: [TypeOrmModule.forFeature([SocialNetworkEntity])],
  providers: [SocialNetworksService],
  controllers: [SocialNetworksController],
})
export class SocialNetworksModule {}
