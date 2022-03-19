import { CommandInteraction, MessageContextMenuInteraction, PermissionResolvable, UserContextMenuInteraction } from 'discord.js';
import { Clientsided } from '../client.js';
declare type AssociatedTypes = {
    'CHAT_INPUT': CommandInteraction;
    'MESSAGE': MessageContextMenuInteraction;
    'USER': UserContextMenuInteraction;
};
declare type AssociatedChanges = {
    [K in keyof AssociatedTypes]: {
        name: string;
        description: string;
        type: K;
        exec: (client: Clientsided, inter: AssociatedTypes[K]) => unknown;
    };
};
export declare type CommandInterface = AssociatedChanges[keyof AssociatedChanges];
export interface CommandPermissions extends Set<string> {
    usersOnly?: string[];
    rolesOnly?: string[];
    serversOnly?: string[];
    userPerms?: PermissionResolvable[];
    botPerms?: PermissionResolvable[];
}
export {};
