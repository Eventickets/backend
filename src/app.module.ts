import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import databaseConfig from './config/database.config';
import { UsersModule } from './modules/users/users.module';
import { AuthModule } from '@modules/auth/auth.module';
import { APP_GUARD } from '@nestjs/core';
import { AtGuard } from './common/guards';
import { TicketsModule } from '@modules/tickets/tickets.module';
import { EventsModule } from '@modules/events/events.module';
import { LocationsModule } from '@modules/locations/locations.module';
import { FeedbacksModule } from '@modules/feedbacks/feedbacks.module';
import { CitiesModule } from '@modules/cities/cities.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync(databaseConfig.asProvider()),
    AuthModule,
    UsersModule,
    TicketsModule,
    EventsModule,
    LocationsModule,
    FeedbacksModule,
    CitiesModule,
  ],
  providers: [
    {
      provide: APP_GUARD,
      useClass: AtGuard,
    },
  ],
})
export class AppModule {}
