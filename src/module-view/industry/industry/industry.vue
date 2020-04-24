<template>
  <div class="option-record">
    <a-table 
      :columns="columns"
      :dataSource="list"
      :pagination=false
    >
      <a slot="action" slot-scope="text,record">
        <span @click="editIndustry(text,record)">编辑</span> 
        <a-divider type="vertical" />
        <span @click="aboutIn(text,record)">关于业委会</span>
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
    <!-- 编辑业委会 --> 
    <edit-industry :open="editShow" @on-ok="saveEdit" @on-cancel="cancelEdit"></edit-industry>
  </div>
</template>
<script>
import { EditIndustry } from "./components"
export default {
  name: 'Industry',
  components: {EditIndustry},
  props: {},
  data() {
    const columns = [{
      title: '小区名称',
      dataIndex: 'name'
    },
    {
      title: '小区地址',
      dataIndex: 'adress'
    },
    {
      title: '届次',
      dataIndex: 'num'
    },
    {
      title: '委员人数',
      dataIndex: 'count'
    },
    {
      title: '任期',
      dataIndex: 'long'
    },
    {
      title: '成立日期',
      dataIndex: 'time'
    },
    {
      title: '届满日期',
      dataIndex: 'time1'
    }, {
      title: '状态',
      dataIndex: 'status'
    }, {
      title: '操作',
      dataIndex: '',
      key: 'action',
      align: "center",
      scopedSlots: { customRender: 'action' }
    }]
    return {
      columns,
      editShow: false,
      // 操作列表
      list: [],
      pageSizeOptions: ['10', '20', '30', '40', '50'],
      current: 1,
      pageSize: 10,
      total: 500
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
    // 搜索
    serch() {
      this.getList()
    },
    empty() {
      this.current = 1
      this.getList()
    },
    reset() {
      this.current = 1
      this.getList()
    },
    // 获取列表
    async getTable() {
      await this.getList()
      console.log(this.list);
      
    },
    async getList(){
     
        this.list = [{
         name: "0"
       }]
     
    },
    paginationChange() {

    },
    onShowSizeChange(current, pageSize) {
      this.pageSize = pageSize;
    },
    // 编辑
    editIndustry(){
      this.editShow=true;
    },
    saveEdit(){
      this.editShow=false;
    },
    cancelEdit(){
      this.editShow=false;
    },
    // 关于业委会
    aboutIn(){}
  }
};
</script>

<style lang='less' scoped>
  .option-record {
    .search-box {
      margin-bottom: 20px;
      .item {
        margin-right: 10px;
        &.serch-input{
          width: 200px;
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
