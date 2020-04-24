<template lang="">
  <div class="Notice">
    <div class="button-warp">
      <div class="left">
        <a-button type="primary" @click="addNotice">
          发布公告
        </a-button>
        <a-button type="default" @click="delAllNotice">
          删除
        </a-button>
      </div>
      <div class="right">
        <a-input-search placeholder="input search text" style="width: 200px" @search="onSearch" />
        <a-button type="link">
          重置
        </a-button>
      </div>
    </div>
    <a-table :dataSource="data" :rowSelection="{selectedRowKeys: selectedRowKeys, onChange: onSelectChange}">
      <a-table-column title="公告标题" dataIndex="age" key="age" />
      <a-table-column title="发送对象" dataIndex="address" key="address" />
      <a-table-column title="状态" dataIndex="tags" key="tags"></a-table-column>
      <a-table-column title="发布时间" dataIndex="tags2" key="tags2"></a-table-column>
      <a-table-column title="发布人" dataIndex="tags1" key="tags1"></a-table-column>
      <a-table-column title="浏览数" dataIndex="tags3" key="tags3"></a-table-column>
      <a-table-column title="操作" key="action" align="center">
        <a slot-scope="text, record">
          <span @click="editNotice(text,record)">查看详情</span> 
          <a-divider type="vertical" />
          <span @click="delNotice(text,record)">删除</span> 
          <span @click="resetNotice(text,record)">撤销</span> 
          
        </a>
      </a-table-column>
    </a-table>
    <!-- 编辑公告 -->
    <edit-notice :open="showEdit" @on-cancel="cancelEdit" @on-ok="saveEdit"></edit-notice> 
  </div>
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
  import {EditNotice} from "./components"
  export default {
    data(){
      return {
        data,
        showEdit: false,
        selectedRowKeys: []
      }
    },
    components: {
      EditNotice
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
      addNotice(){

      },
      editNotice(){
        this.showEdit=true;
      },
      saveEdit(){
        this.showEdit=false;
      },
      cancelEdit(){
        this.showEdit=false;
      },
      delNotice(){},
      delAllNotice(){
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