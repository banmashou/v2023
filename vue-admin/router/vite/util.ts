import _ from 'lodash'

export function parseEvn(env: Record<string, any>) {
  const envs = _.cloneDeep(env)
  // 遍历env对象，将值为true的转换为布尔值，值为数字的转换为数字
  Object.entries(env).forEach(([key, value]) => {
    if (value == 'true' || value == 'false') {
      envs[key] = value == 'true' ? true : false
    }

    if (/^\d+$/.test(value)) {
      envs[key] = parseInt(value)
    }
  })
  return envs
}
