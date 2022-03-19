import { ConfigError } from './errors/configerror.js';
import { Errorsided } from './errors/errorsided.js';
import { ConfigData, InitializeOptions } from './types/interfaces.js';
import MissingConfigInfoError from './errors/missinginfo.js';
import { read } from './functions/read.js';

function initialize (options: InitializeOptions) {
  const data = {
    root: options.homeDir || '.',
    config: options.configName || 'config'
  }

  try {
    const configExample = read('./CONFIG.txt');
    const unp = read(`${data.root}/${data.config}.json`);
    if (!unp) throw new Errorsided('No configuration file found', { cause: new ConfigError('No config.\nPlease create a configuration file in root directory or the directory specified.') })
    const config = JSON.parse(unp) as ConfigData;
    if (!config.token || !config.text || !config.prefix || !config.highlight || !config.events || !config.commands) {
      throw new Errorsided('Missing information in configuration file.', { cause: new MissingConfigInfoError(`Info missing.\n${configExample}`) })
    }
  } catch (err) {
    // No configuration file in given root directory
    throw new Errorsided('No configuration file found', { cause: new ConfigError('No config.\nPlease create a configuration file in root directory or the directory specified.') })
  }
};

export default initialize;

initialize({ homeDir: '.' });
