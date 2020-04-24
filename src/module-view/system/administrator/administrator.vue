<template lang="">
  <div class="option-record">
    <div class="button-warp">
      <div class="left">
        <a-button type="primary" @click="addAdmin">
          添加管理员
        </a-button>
        <a-button type="default" @click="delAllAdmin">
          删除管理员
        </a-button>
      </div>
      <div class="right">
        <a-input placeholder="请输入姓名" style="width: 200px" />
        <a-input placeholder="请输入手机号码" style="width: 200px" />
        <a-button type="primary" icon="search" @click="onSearch"></a-button>
        <a-button type="link" @click="reset">
          重置
        </a-button>
      </div>
    </div>

    <a-table 
      :columns="columns"
      :dataSource="list"
      :pagination=false
      :rowSelection="{selectedRowKeys: selectedRowKeys, onChange: onSelectChange}"
      @change="handleTableChange"
    >
      <a slot="operation" slot-scope="text, record">
       
        <span @click="() => editAdmin(record)">编辑</span>
        <a-divider type="vertical" />
        <span @click="() => resetPassword(record)">重置密码</span>
        <a-divider type="vertical" />
        <span @click="() => start(record)">启用</span>
      </a>
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
    <edit-admin :show.sync='show' 
                v-if="show"
    />
  </div>
</template>

<script>
  import { EditAdmin } from "./components"

  export default {
    name: 'Administrator',
    components: { EditAdmin },
    data() {
      const columns = [{
        title: '姓名',
        dataIndex: 'name'
      },
      {
        title: '手机号码',
        dataIndex: 'phone'
      },
      {
        title: '角色',
        dataIndex: 'role'
      },
      {
        title: '创建时间',
        dataIndex: 'time'
      },
      {
        title: '状态',
        dataIndex: 'status'
      },
      {
        title: '启用',
        dataIndex: 'option',
        align: "center",
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
        show: false,
        selectedRowKeys: []
      };
    },
    computed: {
      hasSelected() {
        return this.selectedRowKeys.length > 0;
      }
    },
    watch: {
    },
    created() {
      this.getTable()
      console.log(EditAdmin);
    },

    methods: {
      editAdmin(obj) {
       this.show = true
      },
      addAdmin() {
        this.show = true
      },
      // 搜索
      onSearch() {
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
      delAllAdmin(){
        console.log(this.selectedRowKeys);
      },
      onSelectChange(selectedRowKeys) {
        console.log('selectedRowKeys changed: ', selectedRowKeys);
        this.selectedRowKeys = selectedRowKeys;
      },
      handleTableChange(){},
      // 获取列表
      async getTable() {
        await this.getList()
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
        *{
          margin-right:10px;
        }
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
