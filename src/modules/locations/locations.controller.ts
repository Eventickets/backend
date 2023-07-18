import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { TicketsService } from './tickets.service';
import { createTicketDto } from './create-ticket.dto';
import { GetCurrentUserId, Public } from 'src/common/decorators';

@Controller('locations')
export class TicketsController {
  constructor(private readonly locationsService: LocationsService) {}
}
