<template>
  <div>
    <a-modal :title="title" v-model="openDialog">
      <template slot="footer">
        <a-button key="back" @click="handleCancel">
          返回
        </a-button>
      </template>
      <div class="owner-content">
        <a-descriptions title="基本信息 ">
          <a-descriptions-item :span="3" label="业主姓名">
            XXX
          </a-descriptions-item>
          <a-descriptions-item :span="3" label="性别">
            1810000000
          </a-descriptions-item>
          <a-descriptions-item :span="3" label="手机号码">
            d纯纯粹粹
          </a-descriptions-item>
        </a-descriptions>
        <a-descriptions title="认证信息 ">
          <a-descriptions-item :span="3" label="身份证号码">
            128999999999345678
          </a-descriptions-item>
          <a-descriptions-item :span="3" label="证件照">
            <div class="img-warp">
              <div>
                <img src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                <span>正面照</span>
              </div>
            </div>
          </a-descriptions-item>
        </a-descriptions>
        <a-descriptions title="房屋信息 ">
        </a-descriptions>
        <a-table
          :columns="columns" :dataSource="data" @change="handleTableChange"
        >
        </a-table>
      </div>
    </a-modal>
  </div>
</template>
<script>
const columns = [
    {
      title: '楼栋',
      dataIndex: 'key',
      width: '20%',
      scopedSlots: { customRender: 'name' }
    },
    {
      title: '单元',
      dataIndex: 'name',
      width: '20%',
      scopedSlots: { customRender: 'name' }
    },
    {
      title: '房号',
      dataIndex: 'money',
      width: '20%',
      scopedSlots: { customRender: 'name' }
    },
    {
      title: '产权类型',
      dataIndex: 'name1',
      width: '20%',
      scopedSlots: { customRender: 'name' }
    },
    {
      title: '认证状态',
      dataIndex: 'name2',
      width: '20%',
      scopedSlots: { customRender: 'name' }
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
  props: {
      // 是否开启模态框
      open: {
        type: Boolean,
        default: false
      }
  },
  data() {
    return {
      columns,
      data,
      title: "业主详情"
    };
  },
  computed: {
      // 是否开启模态框
      openDialog: {
        get() {
          return this.open;
        },
        set(val) {
          this.handleCancel()
        }
      }
    },
  methods: {
    handleTableChange(){

    },
    handleCancel(e) {
      this.$emit('on-cancel');
    }
  }
};
</script>
<style lang="less" scoped>
.owner-content{
  .img-warp{
    &>div{
      width:100px;
      height: 100px;
      border: 1px dotted #ddd;
      border-radius: 5px;
    }
  }
}

</style>
