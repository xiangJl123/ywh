<template lang="">
  <div class="work">
    <a-tabs defaultActiveKey="1" @change="callback">
      <!-- ************************投票统计************************************* -->
      <a-tab-pane key="1" tab="投票统计">
        投票统计
      </a-tab-pane>

      <!-- ************************已投票************************************* -->
      <a-tab-pane key="2" tab="已投票">
        <div class="button-warp">
          <div class="left">
            <a-button type="primary">
              导出名单
            </a-button>
            <a-button type="primary">
              导出投票
            </a-button>
          </div>
          <div class="right">
            <a-cascader :options="options" @change="onChange" placeholder="楼栋/单元/房号" />
            <a-input placeholder='请输入业主姓名' />
            <a-input placeholder='请输入联系方式' />
            <a-input placeholder='请输入手机号码' />
            <a-select defaultValue=" " @change="handleChange" placeholder='请选择投票方式'>
              <a-select-option value=" ">
                全部
              </a-select-option>
              <a-select-option value="1">
                网络投票
              </a-select-option>
              <a-select-option value="2">
                人工录入
              </a-select-option>
            </a-select>
            <a-button type="primary" icon="search"></a-button>
            <a-button type="link">
              重置
            </a-button>
          </div>
        </div>
        <a-table
          :columns="columns1" :dataSource="data"
          :rowSelection="{selectedRowKeys: selectedRowKeys, onChange: onSelectChange}"
          @change="handleTableChange2"
        >
          <!-- 按钮位置 -->
          <a slot="action" slot-scope="text,record">
            <span @click="showDetail(text,record)">查看工单</span> 
            <a-divider type="vertical" />
            <span @click="endDetail(text,record)">完结工单</span>
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
      </a-tab-pane>
      <!-- ************************未投票************************************* -->
      <a-tab-pane key="3" tab="未投票">
        <div class="button-warp">
          <div class="left">
            <a-button type="primary">
              导出名单
            </a-button>
            <a-button type="primary">
              导出投票
            </a-button>
          </div>
          <div class="right">
            <a-cascader :options="options" @change="onChange" placeholder="楼栋/单元/房号" />
            <a-input placeholder='请输入业主姓名' />
            <a-input placeholder='请输入联系方式' />
            <a-input placeholder='请输入手机号码' />
            <a-select defaultValue=" " @change="handleChange" placeholder='请选择投票方式'>
              <a-select-option value=" ">
                全部
              </a-select-option>
              <a-select-option value="1">
                网络投票
              </a-select-option>
              <a-select-option value="2">
                人工录入
              </a-select-option>
            </a-select>
            <a-button type="primary" icon="search"></a-button>
            <a-button type="link">
              重置
            </a-button>
          </div>
        </div>
        <a-table
          :columns="columns1" :dataSource="data"
          :rowSelection="{selectedRowKeys: selectedRowKeys, onChange: onSelectChange}"
          @change="handleTableChange2"
        >
          <!-- 按钮位置 -->
          <a slot="action" slot-scope="text,record">
            <span @click="showDetail(text,record)">查看工单</span> 
            <a-divider type="vertical" />
            <span @click="endDetail(text,record)">完结工单</span>
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
      </a-tab-pane>

      <!-- ************************结果公示************************************* -->
      <a-tab-pane key="4" tab="结果公示" class="statstics-work">
        <h3 class="title">
          标题
        </h3>
        <a-card title="公示说明" size="small">
          <a href="#" slot="extra">编辑</a>
          <p>card content</p>
          <p>card content</p>
          <p>card content</p>
        </a-card>
        <div class="statstics-content">
          <div class="item" v-for="(item,index) in result" :key="index">
            <div class="item-title">
              {{ index+1 }}、{{ item.title }}
            </div>
            <div class="item-table">
              <a-table
                :columns="columnsTable" :dataSource="item.tableData" :pagination="false"
              >
              </a-table>
            </div>
            <div class="item-result">
              本提案投票通过。
            </div>
          </div>
        </div>
      </a-tab-pane>
    </a-tabs>
    <!-- <edit-hold :open="showEdit" @on-cancel="backHold"></edit-hold> -->
  </div>
</template>
<script>
//  待处理，处理中，已完结
const columns1 = [
    {title: '楼栋', dataIndex: 'key', scopedSlots: { customRender: 'name' }},
    {title: '单元', dataIndex: 'address', scopedSlots: { customRender: 'name' }},
    {title: '房号', dataIndex: 'name',  scopedSlots: { customRender: 'name' }},
    {title: '专有部分面积（m²）', dataIndex: 'name8', scopedSlots: { customRender: 'name' }},
    {title: '投票权数', dataIndex: 'name1', scopedSlots: { customRender: 'name' }},
    {title: '业主姓名', dataIndex: 'name2', scopedSlots: { customRender: 'name' }},
    {title: '性别', dataIndex: 'name3', scopedSlots: { customRender: 'name' }},
    {title: '联系方式', dataIndex: 'name4', scopedSlots: { customRender: 'name' }},
    {title: '投票方式', dataIndex: 'name5', scopedSlots: { customRender: 'name' }},
    {title: '投票时间', dataIndex: 'name6', scopedSlots: { customRender: 'name' }},
    {title: '表决结果', dataIndex: 'name7', scopedSlots: { customRender: 'name' }}
];
// 已完成
const columns2 = [
    {title: '问题描述', dataIndex: 'key', scopedSlots: { customRender: 'name' }},
    {title: '反馈人', dataIndex: 'address', scopedSlots: { customRender: 'name' }},
    {title: '手机号码', dataIndex: 'name',  scopedSlots: { customRender: 'name' }},
    {title: '房号信息', dataIndex: 'name2', scopedSlots: { customRender: 'name' }},
    {title: '提交时间', dataIndex: 'name1', scopedSlots: { customRender: 'name' }},
    {title: '评价', dataIndex: 'name3', scopedSlots: { customRender: 'name' }},
    {title: '操作', dataIndex: '', align: "center", key: 'x', scopedSlots: { customRender: 'action' }}
];
const columnsTable=[
    {title: '选项', dataIndex: 'key', scopedSlots: { customRender: 'name' }},
    {title: '票数', dataIndex: 'address', scopedSlots: { customRender: 'name' }},
    {title: '票数占比（%）', dataIndex: 'name',  scopedSlots: { customRender: 'name' }},
    {title: '专有部分面积（m²）', dataIndex: 'name2', scopedSlots: { customRender: 'name' }},
    {title: '专有部分面积占比（%）', dataIndex: 'name1', scopedSlots: { customRender: 'name' }}
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
      columns1,
      columns2,
      columnsTable,
      showEdit: false,
      pageSizeOptions: ['10', '20', '30', '40', '50'],
      current: 1,
      pageSize: 10,
      total: 500,
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
      }],
      result: [{
        title: "xiasdhsdsd",
        tableData: [
          {name: "sds", id: 1}
        ]
      }]
    }
  },
  methods: {
     // 修改楼栋/单元/房号
    onChange(){},
    hasSelected() {
      return this.selectedRowKeys.length > 0;
    }, 
    onSelectChange(selectedRowKeys) {
      console.log('selectedRowKeys changed: ', selectedRowKeys);
      this.selectedRowKeys = selectedRowKeys;
    },
    paginationChange(page, pageSize) {
        this.current = page
        this.pageSize = pageSize
    },
    onShowSizeChange(page, pageSize) {
        this.current = page
        this.pageSize = pageSize;
    },
    callback(key) {
        console.log(key);
    },
    onSearch(){},
    handleChange(){},
    handleTableChange2(){},

    // 查看详情
    showDetail() {
      this.showEdit=true;
    },
    // 完结工单
    endDetail(){

    }
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
  input,.ant-cascader-picker,.ant-layout *,.ant-input-search{
    width:150px;
    margin-right: 10px;
  }
  .ant-select{
    width:90px;
    margin-right: 10px;
  }
}
.init-badge{
  /deep/ sup.ant-badge-count{
  top: -5px;
  right: -24px;
  } 
}
.statstics-work{
  padding:0 20px;
  .title{
    line-height: 70px;
    text-align: center;
  }
  .ant-card{
    margin:30px 0;
  }
  .statstics-content{
    .item-title{
      line-height: 40px;
    }
    .item-result{
      line-height: 40px;
    }
  }
}
</style>