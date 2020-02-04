import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

import { IThemeManager } from '@jupyterlab/apputils';

/**
 * A plugin for @yudai-nkt/jupyterlab_city-lights-theme
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: '@yudai-nkt/jupyterlab_city-lights-theme:plugin',
  requires: [IThemeManager],
  activate: function(app: JupyterFrontEnd, manager: IThemeManager) {
    const style = '@yudai-nkt/jupyterlab_city-lights-theme/index.css';

    manager.register({
      name: 'City Lights',
      isLight: false,
      load: () => manager.loadCSS(style),
      unload: () => Promise.resolve(undefined)
    });
  },
  autoStart: true
};

export default plugin;
