import { Chalk } from 'chalk'

export interface ConfigData {
    prefix: string,
    token: string,

    highlight: typeof Chalk

    events: {
        path: string,
        depth: number,
        excludes: string[]
    },
    commands: {
        path: string,
        depth: number,
        excludes: string[]
    },
    text: {
        path: string,
        depth: number,
        excludes: string[]
    }
};

export interface InitializeOptions {
    /**
     * Home directory for all the paths, searches for config file here. (default is root dir)
     */
    homeDir?: string,

    /**
     * Name of the config file (default is 'config')
     */
    configName?: string,
};
