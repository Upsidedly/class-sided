import { ApplicationCommandData, CommandInteraction, MessageContextMenuInteraction, UserContextMenuInteraction } from 'discord.js';
import { Clientsided } from './client.js';
import { CommandInterface, CommandPermissions } from './types/command.js';
export declare class Command {
    name: string;
    description: string;
    type: 'CHAT_INPUT' | 'USER' | 'MESSAGE';
    exec: (((client: Clientsided, inter: CommandInteraction) => any) | ((client: Clientsided, inter: MessageContextMenuInteraction) => any) | ((client: Clientsided, inter: UserContextMenuInteraction) => any));
    perm: CommandPermissions | null;
    constructor(data: CommandInterface, perm?: CommandPermissions);
    format(): ApplicationCommandData;
}
