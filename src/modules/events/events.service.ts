import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Event } from 'src/entities';
import { Repository } from 'typeorm';
import { createEventDto } from './create-event.dto';

@Injectable()
export class EventsService {
  constructor(
    @InjectRepository(Event)
    private readonly eventRepository: Repository<Event>,
  ) {}

  async createEvent(newEvent: createEventDto) {
    await this.eventRepository.save({
      ...newEvent,
    });
  }

  async getEventById(eventId: string) {
    return await this.eventRepository.findOne({
      where: { id: +eventId },
    });
  }

  async getEvents() {
    return await this.eventRepository.find();
  }
}
