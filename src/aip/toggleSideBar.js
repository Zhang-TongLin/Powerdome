import request from '../utils/request'
export const getPermissionList = () => {
    return request({
        url: '/api/sysUser/getPermissionList',
        method:'GET',
        
    })
}