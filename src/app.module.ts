import { Module } from '@nestjs/common';
import { NotificationsGateway } from './notifications/notifications.gateway';

@Module({
   imports: [],
   controllers: [],
   providers: [NotificationsGateway],
})
export class AppModule {}