<template>
  <div>
    <a-modal :title="title" v-model="openDialog">
      <template slot="footer">
        <a-button key="back" @click="handleCancel">
          返回
        </a-button>
      </template>
      <a-table
        :columns="columns" :dataSource="data" @change="handleTableChange"
      >
      </a-table>
    </a-modal>
  </div>
</template>
<script>
const columns = [
    {
      title: '姓名',
      dataIndex: 'key',
      width: '15%',
      scopedSlots: { customRender: 'name' }
    },
    {
      title: '性别',
      dataIndex: 'name',
      width: '10%',
      scopedSlots: { customRender: 'name' }
    },
    {
      title: '手机号码',
      dataIndex: 'money',
      width: '20%',
      scopedSlots: { customRender: 'name' }
    },
    {
      title: '身份类型',
      dataIndex: 'name1',
      width: '15%',
      scopedSlots: { customRender: 'name' }
    },
    {
      title: '认证状态',
      dataIndex: 'name2',
      width: '20%',
      scopedSlots: { customRender: 'name' }
    },
    {
      title: '备注',
      dataIndex: 'name3',
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
      title: "住户信息"
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
