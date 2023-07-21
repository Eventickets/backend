import { Feedback } from './feedback.entity';
import { Locations } from './locations.entity';
import { User } from './user.entity';
import { Event } from './event.entity';
import { Ticket } from './ticket.entity';
import { City } from './city.entity';
import { Province } from './province.entity';
import { State } from './state.entity';

const entities = [Event, Ticket, Locations, Feedback, User, City, Province, State];

export { Event, Ticket, Locations, Feedback, User, City, Province, State };
export default entities;
