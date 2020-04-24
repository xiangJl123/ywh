<template>
  <div>
    <a-table
      :columns="columns" :dataSource="data"
      @change="handleTableChange"
    >
      <a slot="action" slot-scope="text,record" @click="showCell(text,record)">关于小区</a>
    </a-table>
    <edit :open="showEdit" @on-ok="saveEdit" @on-cancel="cancelEdit"></edit>
  </div>
</template>
<script>
import { Edit } from "./components"
const columns = [
    {
      title: '小区名称',
      dataIndex: 'key',
      width: '15%',
      scopedSlots: { customRender: 'name' }
    },
    {
      title: '总户数',
      dataIndex: 'name',
      width: '10%',
      scopedSlots: { customRender: 'name' }
    },
    {
      title: '地址',
      dataIndex: 'money',
      width: '25%',
      scopedSlots: { customRender: 'name' }
    },
    {
      title: '街道/社区',
      dataIndex: 'name1',
      width: '25%',
      scopedSlots: { customRender: 'name' }
    },
    {
      title: '微信小程序二维码',
      dataIndex: 'name2',
      width: '15%',
      scopedSlots: { customRender: 'name' }
    },
    {
      title: '操作',
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
    data(){
      return {
        data,
        columns,
        showEdit: false
      }
    },
    components: { Edit },
    methods: {
      handleTableChange(){},
      showCell(text, record){
        console.log(text);
        console.log(record);
        this.showEdit=true;
      },
      saveEdit(){
        this.showEdit=false;
      },
      cancelEdit(){
        this.showEdit=false;
      }
    }
  }
</script>