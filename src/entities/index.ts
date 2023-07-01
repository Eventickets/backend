import { Feedback } from './feedback.entity';
import { Locations } from './locations.entity';
import { User } from './user.entity';
import { Event } from './event.entity';
import { Ticket } from './ticket.entity';

const entities = [Event, Ticket, Locations, Feedback, User];

export { Event, Ticket, Locations, Feedback, User };
export default entities;