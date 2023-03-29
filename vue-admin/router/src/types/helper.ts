import _ from 'lodash'

class Helper {
  public env = {} as ImportMetaEnv

  constructor() {
    this.env = this.geEnvs()
  }

  private geEnvs(): ImportMetaEnv {
    const envs: any = _.cloneDeep(import.meta.env)
    // 遍历env对象，将值为true的转换为布尔值，值为数字的转换为数字
    Object.entries(import.meta.env as Record<string, any>).forEach(([key, value]) => {
      if (value == 'true' || value == 'false') {
        envs[key] = value == 'true' ? true : false
      } else if (/^\d+$/.test(value)) envs[key] = Number(value)
      else if (value == 'null') envs[key] = null
      else if (value == 'undefined') envs[key] = undefined
    })
    return envs
  }
}

const helper = new Helper()
const env = helper.env

export default helper

export { env }
