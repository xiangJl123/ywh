<template lang="">
  <div>
    <div class="button-warp">
      <div class="left">
        <a-button type="primary" @click="addRoom">
          添加房屋
        </a-button>
        <a-button type="default" @click="delAllRoom">
          删除房屋
        </a-button>
      </div>
      <div class="right">
        <a-input placeholder="请输入楼栋" />
        <a-input placeholder="请输入单元" />
        <a-input placeholder="请输入房号" />
        <a-button type="primary" icon="search" @click="onSearch"></a-button>
        <a-button type="link">
          重置
        </a-button>
      </div>
    </div>
    <a-table
      :columns="columns" :dataSource="data"
      :rowSelection="{selectedRowKeys: selectedRowKeys, onChange: onSelectChange}"
      @change="handleTableChange"
    >
      <!-- 按钮位置 -->
      <a slot="action" slot-scope="text,record">
        <span @click="editRoom(text,record)">编辑</span> 
        <a-divider type="vertical" />
        <span @click="delRoom(text,record)">删除</span> 
      </a>
    </a-table>

    <edit-room :open="showEdit" @on-ok="saveEdit" @on-cancel="cancelEdit"></edit-room>
  </div>
</template>
<script>
import { EditRoom } from "./components"
const columns = [
    {
      title: '楼栋',
      dataIndex: 'key',
      width: '15%',
      scopedSlots: { customRender: 'name' }
    },
    {
      title: '单元',
      dataIndex: 'name',
      width: '10%',
      scopedSlots: { customRender: 'name' }
    },
    {
      title: '楼层',
      dataIndex: 'money',
      width: '20%',
      scopedSlots: { customRender: 'name' }
    },
    {
      title: '房号',
      dataIndex: 'name1',
      width: '10%',
      scopedSlots: { customRender: 'name' }
    },
    {
      title: '建筑面积(m²)',
      dataIndex: 'name2',
      width: '10%',
      scopedSlots: { customRender: 'name' }
    },
    {
      title: '套内面积(m²)',
      dataIndex: 'name3',
      width: '10%',
      scopedSlots: { customRender: 'name' }
    },
    {
      title: '房屋类型',
      dataIndex: 'name4',
      width: '10%',
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
 
  export default {
    components: { EditRoom },
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
      addRoom(){

      },
      editRoom(){
        this.showEdit=true;
      },
      saveEdit(){
        this.showEdit=false;
      },
      cancelEdit(){
        this.showEdit=false;
      },
      delRomm(){},
      delAllRoom(){
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
    .ant-input{
      width:150px;
      margin-right: 10px;
    }
  }
}
</style>