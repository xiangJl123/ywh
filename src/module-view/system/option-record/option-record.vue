<template>
  <div class="option-record">
    <div class="button-warp">
      <div class="right">
        <a-range-picker class="item" @change="onChangeDate" />
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
  </div>
</template>

<script>
export default {
  name: 'OptionRecord',
  components: {},
  props: {},
  data() {
    const columns = [{
      title: '操作时间',
      align: "center",
      dataIndex: 'time'
    },
    {
      title: '操作人',
       align: "center",
      dataIndex: 'people'
    },
    {
      title: '手机号码',
       align: "center",
      dataIndex: 'tel'
    },
    {
      title: '操作内容',
       align: "center",
      dataIndex: 'content'
    },
    {
      title: 'ip地址',
       align: "center",
      dataIndex: 'ip'
    }]
    return {
      columns,
      // 操作列表
      list: [],
      // 开始时间
      date_start: '',
      // 结束时间
      date_end: '',
      key_word: '',
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
    onChangeDate(date, dateString) {
      // console.log(date);
      // console.log(dateString)
      this.date_start = dateString[0]
      this.date_end = dateString[1]
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
      this.date_start = ''
      this.date_end = ''
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
         key: "0",
         time: "2019-01-33 11:34:56",
         content: "djkdhjdh",
         people: "管理员",
         tel: "184899838929",
         ip: "192.168.0.89"
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
