<template lang="">
  <div class="work">
    <a-tabs defaultActiveKey="1" @change="callback">
      <!-- ************************待处理************************************* -->
      <a-tab-pane key="1">
        <!-- 标签表头内容 -->
        <span slot="tab">
          <a-badge :count="1000" :overflowCount="999" class="init-badge">
            <a href="#" class="head-example"> 待处理</a>
          </a-badge>
        </span>

        <div class="button-warp">
          <div class="right">
            <a-input placeholder='请输入问题描述' />
            <a-input placeholder='请输入反馈人姓名' />
            <a-input placeholder='请输入手机号码' />
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
            <span @click="showDetail(text,record)">查看工单</span> 
            <a-divider type="vertical" />
            <span @click="accpet(text,record)">受理</span> 
            <a-divider type="vertical" />
            <span @click="close(text,record)">手动关闭</span> 
          </a>
        </a-table>
      </a-tab-pane>

      <!-- ************************处理中************************************* -->
      <a-tab-pane key="2" :forceRender="true">
        <!-- 标签表头内容 -->
        <span slot="tab">
          <a-badge :count="1000" :overflowCount="999" class="init-badge">
            <a href="#" class="head-example"> 处理中</a>
          </a-badge>
        </span>
        <div class="button-warp">
          <div class="right">
            <a-input placeholder='请输入问题描述' />
            <a-input placeholder='请输入反馈人姓名' />
            <a-input placeholder='请输入手机号码' />
            <a-button type="primary" icon="search"></a-button>
            <a-button type="link">
              重置
            </a-button>
          </div>
        </div>
        <a-table
          :columns="columns1" :dataSource="data"
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
      <!-- ************************已完结************************************* -->
      <a-tab-pane key="3" :forceRender="true">
        <!-- 标签表头内容 -->
        <span slot="tab">
          <a-badge :count="1000" :overflowCount="999" class="init-badge">
            <a href="#" class="head-example"> 已完结</a>
          </a-badge>
        </span>
        <div class="button-warp">
          <div class="right">
            <a-input placeholder='请输入问题描述' />
            <a-input placeholder='请输入反馈人姓名' />
            <a-input placeholder='请输入手机号码' />
            <a-button type="primary" icon="search"></a-button>
            <a-button type="link">
              重置
            </a-button>
          </div>
        </div>
        <a-table
          :columns="columns1" :dataSource="data"
          @change="handleTableChange2"
        >
          <!-- 按钮位置 -->
          <a slot="action" slot-scope="text,record">
            <span @click="showDetail(text,record)">查看工单</span> 
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
      <!-- ************************已完成************************************* -->
      <a-tab-pane key="4" :forceRender="true">
        <!-- 标签表头内容 -->
        <span slot="tab">
          <a-badge :count="1000" :overflowCount="999" class="init-badge">
            <a href="#" class="head-example"> 已完成</a>
          </a-badge>
        </span>
        <div class="button-warp">
          <div class="right">
            <a-input placeholder='请输入问题描述' />
            <a-input placeholder='请输入反馈人姓名' />
            <a-input placeholder='请输入手机号码' />
            <a-select defaultValue=" " @change="handleChange" placeholder='请选择评价'>
              <a-select-option value=" ">
                全部
              </a-select-option>
              <a-select-option value="1">
                满意
              </a-select-option>
              <a-select-option value="2">
                不满意
              </a-select-option>
              <a-select-option value="3">
                一般
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
          @change="handleTableChange2"
        >
          <!-- 按钮位置 -->
          <a slot="action" slot-scope="text,record">
            <span @click="showDetail(text,record)">查看工单</span> 
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
      <!-- ************************已关闭************************************* -->
      <a-tab-pane key="5" :forceRender="true">
        <!-- 标签表头内容 -->
        <span slot="tab">
          <a-badge :count="1000" :overflowCount="999" class="init-badge">
            <a href="#" class="head-example"> 已关闭</a>
          </a-badge>
        </span>
        <div class="button-warp">
          <div class="right">
            <a-input placeholder='请输入问题描述' />
            <a-input placeholder='请输入反馈人姓名' />
            <a-input placeholder='请输入手机号码' />
            <a-button type="primary" icon="search"></a-button>
            <a-button type="link">
              重置
            </a-button>
          </div>
        </div>
        <a-table
          :columns="columns1" :dataSource="data"
          @change="handleTableChange2"
        >
          <!-- 按钮位置 -->
          <a slot="action" slot-scope="text,record">
            <span @click="showDetail(text,record)">查看工单</span> 
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
    </a-tabs>
    <!-- <edit-hold :open="showEdit" @on-cancel="backHold"></edit-hold> -->
  </div>
</template>
<script>
//  待处理，处理中，已完结
const columns1 = [
    {title: '问题描述', dataIndex: 'key', scopedSlots: { customRender: 'name' }},
    {title: '反馈人', dataIndex: 'address', scopedSlots: { customRender: 'name' }},
    {title: '手机号码', dataIndex: 'name',  scopedSlots: { customRender: 'name' }},
    {title: '房号信息', dataIndex: 'name2', scopedSlots: { customRender: 'name' }},
    {title: '提交时间', dataIndex: 'name1', scopedSlots: { customRender: 'name' }},
    {title: '操作', dataIndex: '', align: "center", key: 'x', scopedSlots: { customRender: 'action' }}
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
      showEdit: false,
      pageSizeOptions: ['10', '20', '30', '40', '50'],
      current: 1,
      pageSize: 10,
      total: 500
    }
  },
  methods: {
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
    handleTableChange1(){},
    handleTableChange2(){},

    // 查看详情
    showDetail() {
      this.showEdit=true;
    },
    // 受理
    accpet(){},
    // 删除
    delHold(){},
    backHold(){
      this.showEdit=false;
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
  input,.ant-cascader-picker,.ant-layout *,.ant-input-search,.ant-select{
    width:150px;
    margin-right: 10px;
  }
}
.init-badge{
  /deep/ sup.ant-badge-count{
  top: -5px;
  right: -24px;
  } 
}
</style>