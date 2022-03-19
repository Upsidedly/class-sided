import { ClientEvents } from 'discord.js';
import { eventFn } from './types/event';

export class Event {
    public readonly name: keyof ClientEvents
    public readonly fn: eventFn

    constructor (name: keyof ClientEvents, fn: eventFn) {
      this.name = name
      this.fn = fn
    }
}
