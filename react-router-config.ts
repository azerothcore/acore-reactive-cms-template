import type { Config } from '@react-router/dev/config'
import reactRouterConfig from './packages/acore-reactive-cms/react-router.config.ts'

export default { ...reactRouterConfig, appDirectory: 'packages/acore-reactive-cms/src/app' } satisfies Config
