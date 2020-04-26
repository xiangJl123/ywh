// eslint-disable-next-line

// 此文件不生效
// import { HomeLayout } from '@/layouts'
import Layout from '@/layout'

export const routerOursMap = [
  //  平台端
  {
    path: '/u-person',
    name: 'u-person',
    redirect: '/person/person-index',
    component: Layout,
    meta: {
      title: '个人中心',
      keepAlive: true,
      icon: 'appstore',
      permission: ['home']
    },
    children: [
      {
        path: 'u-person-index',
        name: 'u-person-index',
        component: () => import('@/module-view/person/person-index'),
        meta: { title: '主界面', keepAlive: false, permission: ['home'] }
      },
      {
        path: 'u-account',
        name: 'u-account',
        component: () => import('@/module-view/person/account/account'),
        meta: { title: '账户设置', keepAlive: false, permission: ['home'] }
      }
    ]
  },
  {
    path: '/u-system',
    name: 'u-system',
    redirect: '/system/administrator',
    component: Layout,
    meta: {
      title: '系统设置',
      keepAlive: true,
      icon: 'setting',
      permission: ['home']
    },
    children: [
      {
        path: 'u-administrator',
        name: 'u-administrator',
        component: () => import('@/module-view/system/administrator/administrator'),
        meta: { title: '管理员', keepAlive: false, permission: ['home'] }
      },
      {
        path: 'u-roles',
        name: 'roles',
        component: () => import('@/module-view/system/roles/roles'),
        meta: { title: '角色管理', keepAlive: false, permission: ['home'] }
      },
      {
        path: 'u-menu',
        name: 'u-menu',
        component: () => import('@/module-view/system/menu/menu'),
        meta: { title: '菜单管理', keepAlive: false, permission: ['home'] }
      },
      {
        path: 'u-option-record',
        name: 'u-option-record',
        component: () => import('@/module-view/system/option-record/option-record'),
        meta: { title: '操作日志', keepAlive: false, permission: ['home'] }
      },
      {
        path: 'u-golbal',
        name: 'u-golbal',
        component: () => import('@/module-view/system/golbal/golbal'),
        meta: { title: '全局设置', keepAlive: false, permission: ['home'] }
      }
    ]
  },
  {
    path: '/u-business',
    name: 'u-business',
    redirect: '/business/cell',
    component: Layout,
    meta: {
      title: '业务运营',
      keepAlive: true,
      icon: 'home',
      permission: ['home']
    },
    children: [
      {
        path: 'u-cell',
        name: 'u-cell',
        component: () => import('@/module-view/business/cell/cell'),
        meta: { title: '小区列表', keepAlive: false, permission: ['home'] }
      },
      {
        path: 'u-industry',
        name: 'u-industry',
        component: () => import('@/module-view/business/industry/industry'),
        meta: { title: '业委会', keepAlive: false, permission: ['home'] }
      },
      {
        path: 'u-company',
        name: 'u-bcompany',
        component: () => import('@/module-view/business/company/company'),
        meta: { title: '物业公司', keepAlive: false, permission: ['home'] }
      },
      {
        path: 'u-config',
        name: 'u-config',
        component: () => import('@/module-view/business/config/config'),
        meta: { title: '账号配置', keepAlive: false, permission: ['home'] }
      }

    ]
  },
  // 物业端
  {
    path: '/u-custom',
    name: 'u-custom',
    redirect: 'u-notice',
    component: Layout,
    meta: {
      title: '客服中心',
      keepAlive: true,
      icon: 'phone',
      permission: ['home']
    },
    children: [
      {
        path: 'u-notice',
        name: 'u-notice',
        component: () => import('@/module-view/custom/notice/notice'),
        meta: { title: '通知公告', keepAlive: false, permission: ['home'] }
      },
      {
        path: 'u-work',
        name: 'u-work',
        component: () => import('@/module-view/custom/work/work'),
        meta: { title: '工单管理', keepAlive: false, permission: ['home'] }
      },
      {
        path: 'u-work-detail',
        name: 'u-work-detail',
        component: () => import('@/module-view/custom/work-detail/work-detail'),
        meta: { title: '工单详情', keepAlive: false, permission: ['home'] }
      }
    ]
  },
  {
    path: '/company',
    name: 'company',
    redirect: '/company/company',
    component: Layout,
    meta: {
      title: '公司管理',
      keepAlive: true,
      icon: 'profile',
      permission: ['home']
    },
    children: [
      {
        //     此页面平台端也有
        path: 'company-info',
        name: 'company-info',
        component: () => import('@/module-view/business/company/company'),
        meta: { title: '物业信息', keepAlive: false, permission: ['home'] }
      },
      {
        path: 'company-staff',
        name: 'company-staff',
        component: () => import('@/module-view/company/staff/staff'),
        meta: { title: '员工信息', keepAlive: false, permission: ['home'] }
      }
    ]
  },

  // 业委会端
  {
    path: '/industry',
    name: 'Iindustry',
    redirect: '/industry/industry',
    component: Layout,
    meta: {
      title: '业委会',
      keepAlive: true,
      icon: 'team',
      permission: ['home']
    },
    children: [
      {
        // 此页面平台端也有
        path: 'industry',
        name: 'industry-info',
        component: () => import('@/module-view/industry/industry/industry'),
        meta: { title: '业委会信息', keepAlive: false, permission: ['home'] }
      },
      {
        // 此页面物业端也有
        path: 'notice',
        name: 'industry-notice',
        component: () => import('@/module-view/custom/notice/notice'),
        meta: { title: '通知公告', keepAlive: false, permission: ['home'] }
      },
      {
        path: 'vote',
        name: 'vote',
        component: () => import('@/module-view/industry/vote/vote'),
        meta: { title: '投票议事', keepAlive: false, permission: ['home'] }
      },

      {
        path: 'vote-statistics',
        name: 'vote-statistice',
        component: () => import('@/module-view/industry/vote-statistics/vote-statistics'),
        meta: { title: '投票统计', keepAlive: false, permission: ['home'] }
      },
      {
        path: 'industry-file',
        name: 'industry-file',
        component: () => import('@/module-view/industry/file/file'),
        meta: { title: '文档管理', keepAlive: false, permission: ['home'] }
      }
    ]
  },
  {
    path: '/data-center',
    name: 'data-center',
    redirect: '/data-center/cell-info',
    component: Layout,
    meta: {
      title: '数据中心',
      keepAlive: true,
      icon: 'area-chart',
      permission: ['home']
    },
    children: [
      {
        path: 'cell-info',
        name: 'cell-info',
        component: () => import('@/module-view/data-center/cell-info/cell-info'),
        meta: { title: '小区信息', keepAlive: false, permission: ['home'] }
      },
      {
        path: 'u-build',
        name: 'u-build',
        component: () => import('@/module-view/data-center/build/build'),
        meta: { title: '楼栋管理', keepAlive: false, permission: ['home'] }
      },
      {
        path: 'u-room',
        name: 'u-room',
        component: () => import('@/module-view/data-center/room/room'),
        meta: { title: '房屋管理', keepAlive: false, permission: ['home'] }
      },
      {
        path: 'u-owner',
        name: 'u-owner',
        component: () => import('@/module-view/data-center/owner/owner'),
        meta: { title: '业主管理', keepAlive: false, permission: ['home'] }
      },
      {
        path: 'u-hold',
        name: 'u-hold',
        component: () => import('@/module-view/data-center/hold/hold'),
        meta: { title: '住户管理', keepAlive: false, permission: ['home'] }
      },
      {
        path: 'hold-detail',
        name: 'hold-detail',
        component: () => import('@/module-view/data-center/hold/hold-detail'),
        meta: { title: '住户信息管理', keepAlive: false, permission: ['home'], hidden: true }
      }
    ]
  }

]
