import {
  type App,
  setupDevtoolsPlugin
} from '@vue/devtools-api'
import { type Plugin } from 'vue'
import * as useSubscriptionDevtools from '@/useSubscription/useSubscriptionDevtools'

export const plugin: Plugin = {
  install(app: App): void {
    setupDevtoolsPlugin({
      id: 'nebula-vue-compositions-devtools',
      label: 'Nebula Devtools',
      packageName: '@kozmoai/vue-compositions',
      homepage: 'https://www.nebula.io/',
      settings: {
        ...useSubscriptionDevtools.SUBSCRIPTION_DEVTOOLS_SETTINGS,
      },
      enableEarlyProxy: true,
      app,
    }, (api) => {
      useSubscriptionDevtools.init(api)
    })
  },
}
