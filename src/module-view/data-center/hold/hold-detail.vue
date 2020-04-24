<template lang="">
  <div>
    <div class="button-warp">
      <div class="button-warp">
        <div class="right">
          <a-cascader :options="options" @change="onChange" placeholder="楼栋/单元/房号" />
          <!-- 产权类型 -->
          <a-select defaultValue="产权类型">
            <a-select-option value="1">
              共有
            </a-select-option>
            <a-select-option value="2">
              非共有
            </a-select-option>
          </a-select>

          <!-- 居住类型 -->
          <a-select defaultValue="居住类型">
            <a-select-option value="1">
              自用
            </a-select-option>
            <a-select-option value="2">
              租用
            </a-select-option>
          </a-select>

          <!-- 使用情况 -->
          <a-select defaultValue="居住类型">
            <a-select-option value="1">
              入住
            </a-select-option>
            <a-select-option value="2">
              空置
            </a-select-option>
          </a-select>

          <!-- 是否认证 -->
          <a-select defaultValue="是否认证">
            <a-select-option value="1">
              已认证
            </a-select-option>
            <a-select-option value="2">
              未认证
            </a-select-option>
          </a-select>
          <a-input placeholder='请输入业主或者租户姓名' />
         
          <a-button type="primary" icon="search"></a-button>
          <a-button type="link">
            重置
          </a-button>
        </div>
      </div>
    </div>
    <a-table
      :columns="columns" :dataSource="data"
      bordered
      @change="handleTableChange"
    >
      <!-- 按钮位置 -->
      <a slot="action" slot-scope="text,record">
        <span @click="checkHold(text,record)">查看住户</span>  
      </a>
    </a-table>

    <edit-hold :open="showEdit" @on-cancel="cancelEdit"></edit-hold>
  </div>
</template>
<script>
import { EditHold } from "./components"
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
      title: '房号',
      dataIndex: 'name1',
      width: '10%',
      scopedSlots: { customRender: 'name' }
    },
    {
      title: '产权类型',
      dataIndex: 'money',
      width: '20%',
      scopedSlots: { customRender: 'name' }
    },
    {
      title: '使用情况',
      dataIndex: 'name2',
      width: '10%',
      scopedSlots: { customRender: 'name' }
    },
    {
      title: '居住情况',
      dataIndex: 'name3',
      width: '10%',
      scopedSlots: { customRender: 'name' }
    },
    {
      title: '业主认证',
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
    components: { EditHold },
    data(){
      return {
        data,
        columns,
        showEdit: false,
        selectedRowKeys: [],
        options: [{
          value: 'zhejiang',
          label: 'Zhejiang',
          children: [{
            value: 'hangzhou',
            label: 'Hangzhou',
            children: [{
              value: 'xihu',
              label: 'West Lake'
            }]
          }] //  楼栋/单元/房号
        }]
      }
    },
    computed: {
      hasSelected() {
        return this.selectedRowKeys.length > 0;
      }
    },
    methods: {
      onChange(){

      },
      checkHold(){
        this.showEdit=true;
      },
      saveEdit(){
        this.showEdit=false;
      },
      cancelEdit(){
        this.showEdit=false;
      },
      handleTableChange(){}
    }
  }
</script>
<style lang="less" scoped>
.button-warp{
  padding:0px 0px 10px 0px;
  overflow: hidden;
  .right{
    float:right;
  }
  input,.ant-cascader-picker,.ant-layout *,.ant-input-search{
    width:150px;
    margin-right: 10px;
  }
  .ant-select{
    width:120px;
    margin-right: 10px;
  }
}
</style>