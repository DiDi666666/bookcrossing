import request from '@/utils/request'

//例
export const user_page = (data) => {
  return request({
    url: '/api/user_page',
    method: 'post',
    data: data,
  })
}
