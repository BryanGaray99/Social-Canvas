import { Module } from '@nestjs/common';
import { ProvidersService } from './providers.service';
import { ProvidersController } from './providers.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProviderEntity } from './providers.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ProviderEntity])],
  providers: [ProvidersService],
  controllers: [ProvidersController],
})
export class ProvidersModule {}
