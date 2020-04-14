import { Moment } from 'moment';

export interface IParticipant {
  id?: number;
  name?: string;
  age?: number;
  dob?: Moment;
}

export class Participant implements IParticipant {
  constructor(public id?: number, public name?: string, public age?: number, public dob?: Moment) {}
}
