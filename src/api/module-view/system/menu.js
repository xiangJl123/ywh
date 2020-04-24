import request from '@/utils/request'

// 查询菜单列表
export function listMenu(query) {
  return request({
    url: '/app/menu/list',
    method: 'get',
    params: query
  })
}

// 查询菜单详细
export function getMenu(menuId) {
  return request({
    url: '/ywhapi/app/menu/' + menuId,
    method: 'get'
  })
}

// 查询菜单下拉树结构
// export function treeselect() {
//   return request({
//     url: '/system/menu/treeselect',
//     method: 'get'
//   })
// }

// 根据角色ID查询菜单下拉树结构
// export function roleMenuTreeselect(roleId) {
//   return request({
//     url: '/system/menu/roleMenuTreeselect/' + roleId,
//     method: 'get'
//   })
// }

// 新增菜单
export function addMenu(data) {
  return request({
    url: '/ywhapi/app/menu',
    method: 'post',
    data: data
  })
}

// 修改菜单
export function updateMenu(data) {
  return request({
    url: '/system/add/menu',
    method: 'put',
    data: data
  })
}

// 删除菜单
export function delMenu(menuIds) {
  return request({
    url: '/ywhapi/app/menu/' + menuIds,
    method: 'delete'
  })
}
// 导出菜单权限
export function exportMenu(menuIds) {
  return request({
    url: '/ywhapi/app/menu/export',
    method: 'get'
  })
}