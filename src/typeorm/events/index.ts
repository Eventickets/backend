import { Event } from './event.entity';
import { EventPlaces } from './eventPlaces.entity';
import { EventStatus } from './eventStatus.entity';
import { EventTypes } from './eventTypes.entity';

const eventEntities = [Event, EventStatus, EventTypes, EventPlaces];

export { Event, EventStatus, EventTypes, EventPlaces };
export default eventEntities;
