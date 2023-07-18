import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { TicketsService } from './tickets.service';
import { createTicketDto } from './create-ticket.dto';
import { GetCurrentUserId, Public } from 'src/common/decorators';

@Controller('tickets')
export class TicketsController {
  constructor(private readonly ticketService: TicketsService) {}

  @Public()
  @Get('/')
  getTickets() {
    return this.ticketService.getTickets();
  }

  @Public()
  @Get('/:id')
  getTicketById(@Param('id') ticketId: string) {
    return this.ticketService.getTicketById(ticketId);
  }

  @Post('/')
  createTicket(
    @Body() newTicket: createTicketDto,
    @GetCurrentUserId() userId: number,
  ) {
    return this.ticketService.createTicket(newTicket, userId);
  }
}
