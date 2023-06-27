import eventEntities from './events';
import ticketEntities from './tickets';

import { Feedback } from './feedback.entity';
import { Place } from './place.entity';
import { User } from './user.entity';

const entities = [
  ...eventEntities,
  ...ticketEntities,
  Place,
  Feedback,
  User,
];

export { Place, Feedback, User };
export default entities;
