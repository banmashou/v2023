// test.ts

import { MockMethod } from 'vite-plugin-mock'
export default [
  {
    url: '/api/get',
    method: 'get',
    response: () => {
      return {
        code: 200,
        message: '请求成功',
        type: 'success',
        data: {
          name: '斑马兽',
        },
      }
    },
  },
] as MockMethod[]
