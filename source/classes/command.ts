import { ApplicationCommandData, CommandInteraction, MessageContextMenuInteraction, UserContextMenuInteraction } from 'discord.js'
import { Clientsided } from './client.js'
import { CommandInterface, CommandPermissions } from './types/command.js'

export class Command {
    name: string;
    description: string;
    type: 'CHAT_INPUT' | 'USER' | 'MESSAGE';
    exec: (
      ((client: Clientsided, inter: CommandInteraction) => any) |
      ((client: Clientsided, inter: MessageContextMenuInteraction) => any) |
      ((client: Clientsided, inter: UserContextMenuInteraction) => any)
    )

    perm: CommandPermissions | null

    constructor (data: CommandInterface, perm?: CommandPermissions) {
      this.name = data.name
      this.description = data.description
      this.type = data.type
      this.exec = data.exec
      this.perm = perm || null
    }

    format () {
      const format: ApplicationCommandData = {
        name: this.name,
        description: this.description,
        type: this.type,
        defaultPermission: this.perm === null ||
            this.perm.size === 0 ||
            (
              (this.perm.usersOnly === undefined || this.perm.usersOnly.length === 0) &&
                (this.perm.rolesOnly === undefined || this.perm.rolesOnly.length === 0)
            )
      }
      return format
    }
}
