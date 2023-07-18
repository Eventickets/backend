import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Ticket } from 'src/entities';
import { Repository } from 'typeorm';
import { createTicketDto } from './create-ticket.dto';
import { TicketStatus } from '@enums/ticket-status.enum';

@Injectable()
export class TicketsService {
  constructor(
    @InjectRepository(Ticket)
    private readonly ticketRepository: Repository<Ticket>,
  ) {}

  async createTicket(newTicket: createTicketDto, userId: number) {
    await this.ticketRepository.save({
      ...newTicket,
      user_id: userId,
      status: TicketStatus.PUBLISHED,
      visits: 0,
    });
  }

  async getTicketById(ticketId: string) {
    return await this.ticketRepository.findOne({
      where: { id: +ticketId },
    });
  }

  // async getTicketsByEventId(eventId: string) {
  //   return await this.ticketRepository.find({
  //     where: { event_id: +eventId },
  //   });
  // }

  async getTickets() {
    return await this.ticketRepository.find();
  }
}
