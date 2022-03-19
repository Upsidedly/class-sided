import { Client, ClientOptions, Collection } from 'discord.js';
import { CommandInterface } from './types/command.js';

export class Clientsided extends Client {
    commands = new Collection<string, CommandInterface>()

    constructor (options: ClientOptions) {
      super(options);
    }
}
