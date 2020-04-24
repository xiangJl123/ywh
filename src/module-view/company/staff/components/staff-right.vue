<template>
  <a-card class="j-address-list-right-card-box" :bordered="false">
    <div class="table-page-search-wrapper">
    </div>

    <a-table 
      :columns="columns"
      :dataSource="list"
      :pagination=false
      :rowSelection="{selectedRowKeys: selectedRowKeys, onChange: onSelectChange, type: 'checkbox'}"
    >
      <template slot="operation" slot-scope="text, record">
        <div class="editable-row-operations">
          <a @click="() => edit(record.key)">编辑</a>
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
  </a-card>
</template>

<script>
const data = [
    {
      key: '1',
      name: 'John Brown',
      money: '￥300,000.00',
      address: 'New York No. 1 Lake Park'
    },
    {
      key: '2',
      name: 'Jim Green',
      money: '￥1,256,000.00',
      address: 'London No. 1 Lake Park'
    },
    {
      key: '3',
      name: 'Joe Black',
      money: '￥120,000.00',
      address: 'Sidney No. 1 Lake Park'
    }
  ];
  export default {
    name: 'AddressListRight',
    components: {},
    data() {
      return {
        cardLoading: true,
        pageSizeOptions: ['10', '20', '30', '40', '50'],
        current: 1,
        pageSize: 10,
        total: 500,
        selectedRowKeys: [],
        columns: [

          {
            title: '姓名',
            width: '15%',
            align: 'center',
            dataIndex: 'realname'
          },
          {
            title: '性别',
            width: '15%',
            align: 'center',
            dataIndex: 'workNo'
          },
          {
            title: '手机号码',
            width: '20%',
            align: 'center',
            dataIndex: 'departName'
          },
          {
            title: '职位',
            width: '15%',
            align: 'center',
            dataIndex: 'post'
          },
          {
            title: '所属部门',
            width: '15%',
            align: 'center',
            dataIndex: 'telephone'
          },
          {
            title: '操作',
            dataIndex: 'option',
            scopedSlots: { customRender: 'operation' }
          }
        ]
      }
    },
    watch: {
      value: {
        immediate: true,

        handler(orgCode) {
          this.list = []
          this.loadData(1, orgCode)
        }
      }
    },
    created() {
    },
    methods: {

      loadData(pageNum, orgCode) {
        this.list= data;
        return 
        this.loading = true
        if (pageNum === 1) {
            this.ipagination.current = 1
        }
      },
      paginationChange(page, pageSize) {
        this.current = page
        this.pageSize = pageSize
      },
      onShowSizeChange(page, pageSize) {
        this.current = page
        this.pageSize = pageSize;
      },
      onSelectChange(list){
        console.log(list);
        this.selectedRowKeys = list
      }

    }
  }
</script>
<style scoped>
  .j-address-list-right-card-box {
    height: 100%;
    min-height: 300px;
  }
  .pagination{
      width:100%;
      height: 40px;
      position: relative;
      margin: 20px 10px;
      padding-right: 20px;
    }
</style>