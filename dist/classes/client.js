import { Client, Collection } from 'discord.js';
export class Clientsided extends Client {
    constructor(options) {
        super(options);
        this.commands = new Collection();
    }
}
