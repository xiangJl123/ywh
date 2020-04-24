<template lang="">
  <div>
    <a-tabs defaultActiveKey="1" @change="callback">
      <a-tab-pane tab="已迁入" key="1">
        <div class="button-warp">
          <div class="right">
            <a-input placeholder='请输入姓名' />
            <a-input placeholder='请输入手机号码' />
            <a-cascader :options="options" @change="onChange" placeholder="楼栋/单元/房号" />
            <a-button type="primary" icon="search"></a-button>
            <a-button type="link">
              重置
            </a-button>
          </div>
        </div>
        <a-table
          :columns="columns1" :dataSource="data"
          @change="handleTableChange1"
        >
          <!-- 按钮位置 -->
          <a slot="action" slot-scope="text,record">
            <span @click="editOut(text,record)">迁出</span> 
          </a>
        </a-table>
      </a-tab-pane>
      <a-tab-pane tab="待审核" key="2" :forceRender="true">
        <div class="button-warp">
          <div class="right">
            <a-input placeholder='请输入姓名' />
            <a-input placeholder='请输入手机号码' />
            <a-cascader :options="options" @change="onChange" placeholder="楼栋/单元/房号" />
            <a-button type="primary" icon="search"></a-button>
            <a-button type="link">
              重置
            </a-button>
          </div>
        </div>
        <a-table
          :columns="columns2" :dataSource="data"
          @change="handleTableChange2"
        >
          <!-- 按钮位置 -->
          <a slot="action" slot-scope="text,record">
            <span @click="editIn(text,record)">迁入</span> 
            <a-divider type="vertical" />
            <span @click="rejectIn(text,record)">拒绝</span>
          </a>
        </a-table>
      </a-tab-pane>
      <a-tab-pane tab="已迁出" key="3">
        <div class="button-warp">
          <div class="right">
            <a-input placeholder='请输入姓名' />
            <a-input placeholder='请输入手机号码' />
            <a-cascader :options="options" @change="onChange" placeholder="楼栋/单元/房号" />
            <a-button type="primary" icon="search"></a-button>
            <a-button type="link">
              重置
            </a-button>
          </div>
        </div>
        <a-table
          :columns="columns3" :dataSource="data"
          @change="handleTableChange2"
        >
        </a-table>
      </a-tab-pane>
      <a-tab-pane tab="未通过" key="4">
        <div class="button-warp">
          <div class="right">
            <a-input placeholder='请输入姓名' />
            <a-input placeholder='请输入手机号码' />
            <a-cascader :options="options" @change="onChange" placeholder="楼栋/单元/房号" />
            <a-button type="primary" icon="search"></a-button>
            <a-button type="link">
              重置
            </a-button>
          </div>
        </div>
        <a-table
          :columns="columns3" :dataSource="data"
          @change="handleTableChange2"
        >
          <!-- 按钮位置 -->
          <a slot="action" slot-scope="text,record">
            <span @click="delHold(text,record)">删除</span> 
          </a>
        </a-table>
      </a-tab-pane>
    </a-tabs>

    <!-- // 迁出说明 -->
    <out-des :open="showOut" :title="title" @on-cancel="cancelOut" @on-ok="handleOkOut"></out-des>
  </div>
</template>
<script>

//  已迁入 
const columns1 = [
    {title: '姓名', dataIndex: 'key', width: '10%', scopedSlots: { customRender: 'name' }},
    {title: '手机号码', dataIndex: 'address', width: '10%', scopedSlots: { customRender: 'name' }},
    {title: '楼栋', dataIndex: 'name', width: '10%', scopedSlots: { customRender: 'name' }},
    {title: '单元', dataIndex: 'name2', width: '15%', scopedSlots: { customRender: 'name' }},
    {title: '房号', dataIndex: 'name1', width: '15%', scopedSlots: { customRender: 'name' }},
    {title: '身份类型', dataIndex: 'money', width: '10%', scopedSlots: { customRender: 'name' }},
    {title: '迁入时间', dataIndex: 'name3', width: '15%', scopedSlots: { customRender: 'name' }},
    {title: '操作', dataIndex: '', align: "center", key: 'x', scopedSlots: { customRender: 'action' }}
];
// 待审核
const columns2 = [
    {title: '住户姓名', dataIndex: 'key', width: '10%', scopedSlots: { customRender: 'name' }},
    {title: '手机号码', dataIndex: 'address', width: '10%', scopedSlots: { customRender: 'name' }},
    {title: '楼栋', dataIndex: 'name', width: '10%', scopedSlots: { customRender: 'name' }},
    {title: '单元', dataIndex: 'name2', width: '15%', scopedSlots: { customRender: 'name' }},
    {title: '房号', dataIndex: 'name1', width: '15%', scopedSlots: { customRender: 'name' }},
    {title: '身份类型', dataIndex: 'money', width: '10%', scopedSlots: { customRender: 'name' }},
    {title: '注册时间', dataIndex: 'name3', width: '15%', scopedSlots: { customRender: 'name' }},
    {title: '操作', dataIndex: '', align: "center", key: 'x', scopedSlots: { customRender: 'action' }}
];
//  已迁出
const columns3 = [
    {title: '姓名', dataIndex: 'key', width: '10%', scopedSlots: { customRender: 'name' }},
    {title: '手机号码', dataIndex: 'address', width: '10%', scopedSlots: { customRender: 'name' }},
    {title: '房屋信息', dataIndex: 'name', width: '20%', scopedSlots: { customRender: 'name' }},
    {title: '身份类型', dataIndex: 'money', width: '10%', scopedSlots: { customRender: 'name' }},
    {title: '迁出时间', dataIndex: 'name2', width: '25%', scopedSlots: { customRender: 'name' }},
    {title: '迁出说明', dataIndex: 'name1', width: '25%', scopedSlots: { customRender: 'name' }}
];
// 未通过
const columns4 = [
    {title: '姓名', dataIndex: 'key', width: '10%', scopedSlots: { customRender: 'name' }},
    {title: '手机号码', dataIndex: 'address', width: '20%', scopedSlots: { customRender: 'name' }},
    {title: '房屋信息', dataIndex: 'name', width: '10%', scopedSlots: { customRender: 'name' }},
    {title: '审核时间', dataIndex: 'name2', width: '25%', scopedSlots: { customRender: 'name' }},
    {title: '不通过原因', dataIndex: 'name1', width: '25%', scopedSlots: { customRender: 'name' }},
    {title: '操作', dataIndex: '', width: '10%', align: "center", key: 'x', scopedSlots: { customRender: 'action' }}
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
import {  OutDes} from "./components"
export default {
  components: {OutDes},
  data(){
    return {
      data,
      columns1,
      columns2,
      columns3,
      columns4,
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
      }],
      showOut: false,
      title: ""
    }
  },
  methods: {
    callback(key) {
        console.log(key);
    },
      // 修改楼栋/单元/房号
    onChange(){},
    onSearch(){},
    handleTableChange1(){},
    handleTableChange2(){},
    // 迁入
    editIn(){},
    // 迁出
    editOut(){
      this.title="迁出说明";
      this.showOut=true;
    },
    
    // 拒绝
    rejectIn(){
      this.title="填写原因";
      this.showOut=true;
    },
    // 删除
    delHold(){},
    cancelOut(){
      this.showOut=false;
    },
    handleOkOut(){
      this.showOut=false;
    }
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
}
</style>