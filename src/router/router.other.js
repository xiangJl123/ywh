// eslint-disable-next-line

// 此文件不生效
import { HomeLayout } from '@/layouts'

export const otherRouterMapchildren = [
  //  平台端
  {
    path: "/person",
    name: "person",
    redirect: "/person/person-index",
    component: HomeLayout,
    meta: {
      title: "个人中心",
      keepAlive: true,
      icon: "appstore",
      permission: ["home"]
    },
    children: [
      {
        path: "/person/person-index",
        name: "person-index",
        component: () => import("@/module-view/person/person-index"),
        meta: { title: "主界面", keepAlive: false, permission: ["home"] }
      },
      {
        path: "/person/account",
        name: "paccount",
        component: () => import("@/module-view/person/account/account"),
        meta: { title: "账户设置", keepAlive: false, permission: ["home"] }
      }
    ]
  },
  {  
    path: "/system",
    name: "system",
    redirect: "/system/administrator",
    component: HomeLayout,
    meta: {
      title: "系统设置",
      keepAlive: true,
      icon: "setting",
      permission: ["home"]
    },
    children: [
      {
        path: "/system/administrator",
        name: "administrator",
        component: () => import("@/module-view/system/administrator/administrator"),
        meta: { title: "管理员", keepAlive: false, permission: ["home"] }
      },
      {
        path: "/system/roles",
        name: "roles",
        component: () => import("@/module-view/system/roles/roles"),
        meta: { title: "角色管理", keepAlive: false, permission: ["home"] }
      },
      {
        path: "/system/menu",
        name: "menu",
        component: () => import("@/module-view/system/menu/menu"),
        meta: { title: "菜单管理", keepAlive: false, permission: ["home"] }
      },
      {
        path: "/system/option-record",
        name: "option-record",
        component: () => import("@/module-view/system/option-record/option-record"),
        meta: { title: "操作日志", keepAlive: false, permission: ["home"] }
      },
      {
        path: "/system/golbal",
        name: "golbal",
        component: () => import("@/module-view/system/golbal/golbal"),
        meta: { title: "全局设置", keepAlive: false, permission: ["home"] }
      }
    ]
  },
  {
    path: "/business",
    name: "business",
    redirect: "/business/cell",
    component: HomeLayout,
    meta: {
      title: "业务运营",
      keepAlive: true,
      icon: "home",
      permission: ["home"]
    },
    children: [
      {
        path: "/business/cell",
        name: "cell",
        component: () => import("@/module-view/business/cell/cell"),
        meta: { title: "小区列表", keepAlive: false, permission: ["home"] }
      },
      {
        path: "/business/industry",
        name: "industry",
        component: () => import("@/module-view/business/industry/industry"),
        meta: { title: "业委会", keepAlive: false, permission: ["home"] }
      },
      {
        path: "/business/company",
        name: "bcompany",
        component: () => import("@/module-view/business/company/company"),
        meta: { title: "物业公司", keepAlive: false, permission: ["home"] }
      },
      {
        path: "/business/config",
        name: "config",
        component: () => import("@/module-view/business/config/config"),
        meta: { title: "账号配置", keepAlive: false, permission: ["home"] }
      }

    ]
  },
  // 物业端
  {
    path: "/custom",
    name: "custom",
    redirect: "/custom/notice",
    component: HomeLayout,
    meta: {
      title: "客服中心",
      keepAlive: true,
      icon: "phone",
      permission: ["home"]
    },
    children: [
      {
        path: "/custom/notice",
        name: "Notice",
        component: () => import("@/module-view/custom/notice/notice"),
        meta: { title: "通知公告", keepAlive: false, permission: ["home"] }
      },
      {
        path: "/custom/work",
        name: "Work",
        component: () => import("@/module-view/custom/work/work"),
        meta: { title: "工单管理", keepAlive: false, permission: ["home"] }
      },
      {
        path: "/custom/work-detail",
        name: "WorkDetail",
        component: () => import("@/module-view/custom/work-detail/work-detail"),
        meta: { title: "工单详情", keepAlive: false, permission: ["home"] }
      }
    ]
  },
  {
    path: "/company",
    name: "company",
    redirect: "/company/company",
    component: HomeLayout,
    meta: {
      title: "公司管理",
      keepAlive: true,
      icon: "profile",
      permission: ["home"]
    },
    children: [
      {
        //     此页面平台端也有
        path: "/company/company",
        name: "company-info",
        component: () => import("@/module-view/business/company/company"),
        meta: { title: "物业信息", keepAlive: false, permission: ["home"] }
      },
      {
        path: "/company/staff",
        name: "Staff",
        component: () => import("@/module-view/company/staff/staff"),
        meta: { title: "员工信息", keepAlive: false, permission: ["home"] }
      }
    ]
  },

  // 业委会端
  {
    path: "/industry",
    name: "Iindustry",
    redirect: "/industry/industry",
    component: HomeLayout,
    meta: {
      title: "业委会",
      keepAlive: true,
      icon: "team",
      permission: ["home"]
    },
    children: [
      {
        // 此页面平台端也有
        path: "/industry/industry",
        name: "industry-info",
        component: () => import("@/module-view/industry/industry/industry"),
        meta: { title: "业委会信息", keepAlive: false, permission: ["home"] }
      },
      {
        // 此页面物业端也有
        path: "/industry/notice",
        name: "industry-notice",
        component: () => import("@/module-view/custom/notice/notice"),
        meta: { title: "通知公告", keepAlive: false, permission: ["home"] }
      }, 
      {
        path: "/industry/vote",
        name: "Vote",
        component: () => import("@/module-view/industry/vote/vote"),
        meta: { title: "投票议事", keepAlive: false, permission: ["home"] }
      }, 
      
      {
        path: "/industry/vote-statistics",
        name: "vote-statistice",
        component: () => import("@/module-view/industry/vote-statistics/vote-statistics"),
        meta: { title: "投票统计", keepAlive: false, permission: ["home"] }
      }, 
      {
        path: "/industry/file",
        name: "File",
        component: () => import("@/module-view/industry/file/file"),
        meta: { title: "文档管理", keepAlive: false, permission: ["home"] }
      }
    ]
  },
  {
    path: "/data-center",
    name: "data-center",
    redirect: "/data-center/cell-info",
    component: HomeLayout,
    meta: {
      title: "数据中心",
      keepAlive: true,
      icon: "area-chart",
      permission: ["home"]
    },
    children: [
      {
        path: "/data-center/cell-info",
        name: "CellInfo",
        component: () => import("@/module-view/data-center/cell-info/cell-info"),
        meta: { title: "小区信息", keepAlive: false, permission: ["home"] }
      },
      {
        path: "/data-center/build",
        name: "Build",
        component: () => import("@/module-view/data-center/build/build"),
        meta: { title: "楼栋管理", keepAlive: false, permission: ["home"] }
      },
      {
        path: "/data-center/room",
        name: "Room",
        component: () => import("@/module-view/data-center/room/room"),
        meta: { title: "房屋管理", keepAlive: false, permission: ["home"] }
      },
      {
        path: "/data-center/owner",
        name: "Owner",
        component: () => import("@/module-view/data-center/owner/owner"),
        meta: { title: "业主管理", keepAlive: false, permission: ["home"] }
      },
      {
        path: "/data-center/hold",
        name: "Hold",
        component: () => import("@/module-view/data-center/hold/hold"),
        meta: { title: "住户管理", keepAlive: false, permission: ["home"] }
      },
      {
        path: "/data-center/hold-detail",
        name: "HoldDetail",
        component: () => import("@/module-view/data-center/hold/hold-detail"),
        meta: { title: "住户信息管理", keepAlive: false, permission: ["home"], hidden: true}
      }
    ]
  }
    

];
