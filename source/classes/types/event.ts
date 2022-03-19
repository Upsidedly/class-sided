import { ClientEvents } from 'discord.js';

type AssociatedChanges = {
    [K in keyof ClientEvents]: {
        name: K,
        fn: (arg0: ClientEvents[K]) => any
    }
};

export type eventFn = AssociatedChanges[keyof AssociatedChanges];
