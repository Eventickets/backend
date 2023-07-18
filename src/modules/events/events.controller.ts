import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { Public } from 'src/common/decorators';
import { EventsService } from './events.service';
import { createEventDto } from './create-event.dto';

@Controller('events')
export class EventsController {
  constructor(private readonly eventService: EventsService) {}

  @Public()
  @Get('/')
  getTickets() {
    return this.eventService.getEvents();
  }

  @Public()
  @Get('/:id')
  getTicketById(@Param('id') eventId: string) {
    return this.eventService.getEventById(eventId);
  }

  @Post('/')
  createTicket(@Body() newEvent: createEventDto) {
    return this.eventService.createEvent(newEvent);
  }
}
