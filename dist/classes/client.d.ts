import { Client, ClientOptions, Collection } from 'discord.js';
import { CommandInterface } from './types/command.js';
export declare class Clientsided extends Client {
    commands: Collection<string, CommandInterface>;
    constructor(options: ClientOptions);
}
