<template lang="">
  <div>
    <div class="button-warp">
      <div class="left">
        <a-button type="primary" @click="addBuild">
          添加楼栋
        </a-button>
        <a-button type="default" @click="delAllBuild">
          删除楼栋
        </a-button>
      </div>
      <div class="right">
        <a-input-search placeholder="input search text" style="width: 200px" @search="onSearch" />
        <a-button type="link">
          重置
        </a-button>
      </div>
    </div>
    
    <a-table
      :columns="columns" :dataSource="data" :loading="loading"
      :rowSelection="{selectedRowKeys: selectedRowKeys, onChange: onSelectChange}"
      @change="handleTableChange"
    >
      <!-- 按钮位置 -->
      <a slot="action" slot-scope="text,record">
        <span @click="editBuild(text,record)">编辑</span> 
        <a-divider type="vertical" />
        <span @click="delBuild(text,record)">删除</span> 
      </a>
    </a-table>
    <!-- 编辑楼栋 -->
    <edit-build :open="showEdit" @on-ok="saveEdit" @on-cancel="cancelEdit"></edit-build>
  </div>
</template>
<script>
const columns = [
    {
      title: '楼栋名称',
      dataIndex: 'key',
      width: '30%',
      scopedSlots: { customRender: 'name' }
    },
    {
      title: '单元数量',
      dataIndex: 'name',
      width: '15%',
      scopedSlots: { customRender: 'name' }
    },
    {
      title: '楼栋层数',
      dataIndex: 'money',
      width: '15%',
      scopedSlots: { customRender: 'name' }
    },
    {
      title: '楼栋户数',
      dataIndex: 'name1',
      width: '15%',
      scopedSlots: { customRender: 'name' }
    },
    {
      title: '操作',
       width: '15%',
       align: "center",
      dataIndex: '', key: 'x', scopedSlots: { customRender: 'action' }
    }
  ];
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
  import { EditBuild } from './components'
  export default {
    components: { EditBuild },
    data(){
      return {
        data,
        columns,
        showEdit: false,
        selectedRowKeys: []
      }
    },
    computed: {
      hasSelected() {
        return this.selectedRowKeys.length > 0;
      }
    },
    methods: {
      // 搜索
      onSearch(){

      },
      addBuild(){

      },
      editBuild(){
        this.showEdit=true;
      },
      saveEdit(){
        this.showEdit=false;
      },
      cancelEdit(){
        this.showEdit=false;
      },
      delBuild(){},
      delAllBuild(){
        console.log(this.selectedRowKeys);
      },
      onSelectChange(selectedRowKeys) {
        console.log('selectedRowKeys changed: ', selectedRowKeys);
        this.selectedRowKeys = selectedRowKeys;
      },
      handleTableChange(){}
    }
  }
</script>
<style lang="less" scoped>
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
</style>