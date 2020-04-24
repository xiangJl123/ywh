<template>
  <div class="option-record">
    <div class="button-warp">
      <div class="left">
        <a-button class="item" type="primary" @click="add">
          添加菜单
        </a-button>
      </div>
      <div class="right">
        <!-- <a-input placeholder="请输入操作内容" 
                 v-model="key_word"
                 @change="empty"
                 class="serch-input item"
        /> -->
        <a-input-search placeholder="请输入操作内容" 
                        v-model="key_word"
                        @change="empty"
                        class="serch-input item" style="width: 200px" @search="serch"
        />
        <a-button type="link" @click="reset">
          重置
        </a-button>
      </div>
    </div>

    <a-table 
      :columns="columns"
      :dataSource="list"
      :pagination=false
    >
      <template slot="operation" slot-scope="text, record">
        <div class="editable-row-operations">
          <a @click="() => edit(record)">编辑</a>
        </div>
      </template>
    </a-table>
    <div class="pagination">
      <a-pagination 
        style="float:right;"
        :showQuickJumper="true" 
        :showSizeChanger='true'
        :total="total" 
        :current='current'
        :pageSize.sync='pageSize'
        :pageSizeOptions='pageSizeOptions'
        @change="paginationChange"
      />
    </div>
    
    <!-- 新增或编辑菜单 -->
    <AddMenu :show.sync='show' 
             v-if="show"
    />
  </div>
</template>

<script>
  import AddMenu from "./components"
  import { listMenu, getMenu, delMenu, addMenu, updateMenu,exportMenu} from "../../../api/module-view/system/menu";

  export default {
    name: 'Menu',
    components: { AddMenu },
    props: {},
    data() {
      const columns = [{
        title: '菜单名称',
        dataIndex: 'menu_name'
      },
      {
        title: '图标',
        dataIndex: 'icon'
      },
      {
        title: '类型',
        dataIndex: 'type'
      },
      {
        title: '菜单URL',
        dataIndex: 'url'
      },
      {
        title: '排序',
        dataIndex: 'sort'
      },
      {
        title: '操作',
        dataIndex: 'option',
        scopedSlots: { customRender: 'operation' }
      }]
      return {
        columns,
        // 操作列表
        list: [],
        key_word: '',
        pageSizeOptions: ['10', '20', '30', '40', '50'],
        current: 1,
        pageSize: 10,
        total: 500,
        show: false
      };
    },
    computed: {
    },
    watch: {
    },
    created() {
      this.getTable()
    },
    methods: {
      edit(obj) {
        console.log(obj)
        this.add()
      },
      add() {
        this.show = true
      },
      // 搜索
      serch() {
        this.getList()
      },
      empty() {
        this.current = 1
        this.getList()
      },
      reset() {
        this.key_word = ''
        this.current = 1
        this.getList()
      },
      // 获取列表
      async getTable() {
        const res=await listMenu()
        console.log(this.list);
        
      },
      async getList(){
      
          this.list = [{
          key: "0",
          menu_name: "管理员",
          icon: "",
          type: "目录",
          url: "/system/menu",
          sort: "1",
          option: '1'
        }]
      
      },
      paginationChange(page, pageSize) {
        this.current = page
        this.pageSize = pageSize
      },
      onShowSizeChange(page, pageSize) {
        this.current = page
        this.pageSize = pageSize;
      }
    }
  };
</script>

<style lang='less' scoped>
  .option-record {
    .button-warp{
      padding:0px 0px 10px 0px;
      overflow: hidden;
      .left{
        float: left;
        *{
          margin-right:10px;
        }
      }
      .right{
        float:right;
      }
    }
    
    .pagination{
      width:100%;
      height: 40px;
      position: relative;
      margin: 20px 10px;
      padding-right: 20px;
    }
  }
  
</style>
