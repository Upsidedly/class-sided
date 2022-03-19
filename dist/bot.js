import { ConfigError } from './errors/configerror.js';
import { Errorsided } from './errors/errorsided.js';
import { readFile } from 'fs/promises';
import MissingConfigInfoError from './errors/missinginfo.js';
function initialize(options) {
    try {
        readFile('./CONFIG.txt', 'utf-8').then((configExample) => {
            readFile(`${options.homeDir || '.'}/${options.configName || 'config'}.json`, 'utf8').then((unparsed) => {
                const config = JSON.parse(unparsed);
                if (!config.token || !config.text || !config.prefix || !config.highlight || !config.events || !config.commands) {
                    throw new Errorsided('Missing information in configuration file.', { cause: new MissingConfigInfoError(`Info missing.\n${configExample}`) });
                }
            }).catch(console.log);
        });
    }
    catch (err) {
        // No configuration file in given root directory
        throw new Errorsided('No configuration file found', { cause: new ConfigError('No config.') });
    }
}
;
export default initialize;
initialize({ homeDir: '.' });
