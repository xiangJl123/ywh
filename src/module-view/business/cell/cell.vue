<!--
 * @Descripttion:
 * @version:
 * @Author: hqp
 * @Date: 2020-04-07 20:48:19
 * @LastEditor: hqp
 * @LastEditTime: 2020-04-25 21:40:36
 -->

<template>
  <div class="option-record">
    <div class="button-warp">
      <div class="left">
        <a-button class="item" type="primary" @click="add">
          添加小区
        </a-button>
        <a-button class="item" type="primary" @click="deleteBatch">
          删除小区
        </a-button>
      </div>
      <div class="right">
        <a-input-search
          v-model="key_word"
          placeholder="请输入小区名称/小区地址/街道社区"
          class="serch-input item"
          style="width: 200px"
          @change="empty"
          @search="serch"
        />
        <a-button type="link" @click="reset">
          重置
        </a-button>
      </div>
    </div>

    <a-table
      :columns="columns"
      :data-source="list"
      :pagination="false"
      :row-selection="{selectedRowKeys: selectedRowKeys, onChange: onSelectChange, type: 'checkbox'}"
    >
      <a slot="name" slot-scope="text">{{ text }}</a>
      <template slot="operation" slot-scope="text, record">
        <div class="editable-row-operations">
          <a @click="() => edit(record.key)">编辑</a>
        </div>
      </template>
    </a-table>
    <div class="pagination">
      <a-pagination
        style="float:right;"
        :show-quick-jumper="true"
        :show-size-changer="true"
        :total="total"
        :current="current"
        :page-size.sync="pageSize"
        :page-size-options="pageSizeOptions"
        @change="paginationChange"
      />
    </div>

    <!-- 新增 -->
    <AddModal
      v-if="show"
      :show.sync="show"
    />
  </div>
</template>

<script>
import AddModal from './add-modal'

export default {
  name: 'Cell',
  components: { AddModal },
  props: {},
  data() {
    const columns = [{
      title: '小区名称',
      dataIndex: 'menu_name'
    },
    {
      title: '总户数',
      dataIndex: 'icon'
    },
    {
      title: '小区地址',
      dataIndex: 'type'
    },
    {
      title: '街道/社区',
      dataIndex: 'url'
    },
    {
      title: '微信小程序二维码',
      dataIndex: 'sort'
    },
    {
      title: '操作',
      dataIndex: 'option',
      scopedSlots: { customRender: 'operation' }
    }]
    return {
      columns,
      // 操作列表
      list: [],
      key_word: '',
      pageSizeOptions: ['10', '20', '30', '40', '50'],
      current: 1,
      pageSize: 10,
      total: 500,
      show: false,
      selectedRowKeys: []
    }
  },
  computed: {
  },
  watch: {
  },
  created() {
    this.getTable()
  },
  methods: {
    edit(key) {
      console.log(key)
    },
    add() {
      this.show = true
    },
    // 搜索
    serch() {
      this.getList()
    },
    empty() {
      this.current = 1
      this.getList()
    },
    reset() {
      this.key_word = ''
      this.current = 1
      this.getList()
    },
    // 获取列表
    async getTable() {
      await this.getList()
      console.log(this.list)
    },
    async getList() {
      this.list = [{
        key: 0,
        menu_name: '管理员',
        icon: '',
        type: '目录',
        url: '/system/menu',
        sort: '1',
        option: '1'
      },
      {
        key: 1,
        menu_name: '管理员1',
        icon: '',
        type: '目录1',
        url: '/system/menu/1',
        sort: '11',
        option: '11'
      }]
    },
    paginationChange(page, pageSize) {
      this.current = page
      this.pageSize = pageSize
    },
    onShowSizeChange(page, pageSize) {
      this.current = page
      this.pageSize = pageSize
    },
    onSelectChange(list) {
      console.log(list)
      this.selectedRowKeys = list
    },
    deleteBatch() {
      if (this.selectedRowKeys.length == 0) {
        this.$message.error('请选择要删除小区')
        return
      }
    }
  }
}
</script>

<style lang='less' scoped>
  .option-record {
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

    .pagination{
      width:100%;
      height: 40px;
      position: relative;
      margin: 20px 10px;
      padding-right: 20px;
    }
  }

</style>
