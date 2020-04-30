<template lang="">
  <div>
    <a-tabs defaultActiveKey="1" @change="callback">
      <a-tab-pane tab="文件资源" key="1">
        <div class="button-warp">
          <div class="left">
            <a-button type="primary" @click="addFile">
              上传文件
            </a-button>
            <a-button type="default" @click="delFile">
              删除文件
            </a-button>
          </div>
          <div class="right">
            <a-input placeholder='请输入文件名称' />
           
            <a-select :options="options" @change="onChangeType" placeholder="请选择资源分类" />
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
            <span @click="editFile(text,record)">编辑</span> 
            <a-divider type="vertical" />
            <span @click="downFile(text,record)">下载</span>
          </a>
        </a-table>
      </a-tab-pane>
      <a-tab-pane tab="文章资源" key="2">
        <div class="button-warp">
          <div class="left">
            <a-button type="primary" @click="addArticle">
              上传文章
            </a-button>
            <a-button type="default" @click="delArticle">
              删除文章
            </a-button>
          </div>
          <div class="right">
            <a-input placeholder='请输入文章名称' />
           
            <a-select @change="onChange" placeholder="请选择资源分类">
              <a-select-option value="jack">
                Jack
              </a-select-option>
              <a-select-option value="lucy">
                Lucy
              </a-select-option>
              <a-select-option value="disabled" disabled>
                Disabled
              </a-select-option>
              <a-select-option value="Yiminghe">
                yiminghe
              </a-select-option>
            </a-select>
            <a-button type="primary" icon="search"></a-button>
            <a-button type="link">
              重置
            </a-button>
          </div>
        </div>
        <a-table
          :columns="columns2" :dataSource="data"
          @change="handleTableChange1"
        >
          <!-- 按钮位置 -->
          <a slot="action" slot-scope="text,record">
            <span @click="editArticle(text,record)">编辑</span> 
          </a>
        </a-table>
      </a-tab-pane>

      <a-tab-pane tab="资源分类" key="3">
        <div class="button-warp">
          <div class="left">
            <a-input-search style="margin-bottom: 8px" placeholder="请输入" @change="onChangeTree" />
          </div>
        </div>
        <a-tree
          @expand="onExpand"
          :expandedKeys="expandedKeys"
          :autoExpandParent="autoExpandParent"
          :treeData="gData"
        >
          <template slot="title" slot-scope="{ title }">
            <span v-if="title.indexOf(searchValue) > -1">
              {{ title.substr(0, title.indexOf(searchValue)) }}
              <span style="color: #f50">{{ searchValue }}</span>
              {{ title.substr(title.indexOf(searchValue) + searchValue.length) }}
            </span>
            <span v-else>{{ title }}</span>
          </template>
        </a-tree>
      </a-tab-pane>
    </a-tabs>
  </div>
</template>
<script>
//  文件 
const columns1 = [
    {title: '文件名称', dataIndex: 'key', scopedSlots: { customRender: 'name' }},
    {title: '资源分类', dataIndex: 'address', scopedSlots: { customRender: 'name' }},
    {title: '文件大小', dataIndex: 'name',  scopedSlots: { customRender: 'name' }},
    {title: '创建人', dataIndex: 'name2',  scopedSlots: { customRender: 'name' }},
    {title: '创建时间', dataIndex: 'name1', scopedSlots: { customRender: 'name' }},
    {title: '操作', dataIndex: '', align: "center", key: 'x', scopedSlots: { customRender: 'action' }}
];
// 文章
const columns2 = [
    {title: '文章标题', dataIndex: 'key', scopedSlots: { customRender: 'name' }},
    {title: '文章链接', dataIndex: 'key', scopedSlots: { customRender: 'name' }},
    {title: '资源分类', dataIndex: 'address', scopedSlots: { customRender: 'name' }},
    {title: '创建人', dataIndex: 'name2',  scopedSlots: { customRender: 'name' }},
    {title: '创建时间', dataIndex: 'name1', scopedSlots: { customRender: 'name' }},
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
const x = 3;
const y = 2;
const z = 1;
const gData = [];

const generateData = (_level, _preKey, _tns) => {
  const preKey = _preKey || '0';
  const tns = _tns || gData;

  const children = [];
  for (let i = 0; i < x; i++) {
    const key = `${preKey}-${i}`;
    tns.push({ title: key, key, scopedSlots: { title: 'title' } });
    if (i < y) {
      children.push(key);
    }
  }
  if (_level < 0) {
    return tns;
  }
  const level = _level - 1;
  children.forEach((key, index) => {
    tns[index].children = [];
    return generateData(level, key, tns[index].children);
  });
};
generateData(z);

const dataList = [];
const generateList = data => {
  for (let i = 0; i < data.length; i++) {
    const node = data[i];
    const key = node.key;
    dataList.push({ key, title: key });
    if (node.children) {
      generateList(node.children);
    }
  }
};
generateList(gData);

const getParentKey = (key, tree) => {
  let parentKey;
  for (let i = 0; i < tree.length; i++) {
    const node = tree[i];
    if (node.children) {
      if (node.children.some(item => item.key === key)) {
        parentKey = node.key;
      } else if (getParentKey(key, node.children)) {
        parentKey = getParentKey(key, node.children);
      }
    }
  }
  return parentKey;
};
export default {
  data(){
    return {
      data,
      columns1,
      columns2,
      showEdit: false,
      treeData: [
        { title: 'Expand to load', key: '0' },
        { title: 'Expand to load', key: '1' },
        { title: 'Tree Node', key: '2', isLeaf: true }
      ],
      expandedKeys: [],
      searchValue: '',
      autoExpandParent: true,
      gData
    }
  },
  methods: {
    callback(key) {
        console.log(key);
    },
    // change资源分类
    onChangeType(){},
    addFile(){},
    editFile(){},
    delFile(){},
    downFile(){},
    addArticle(){},
    delArticle(){},
    editArticle(){},
    onExpand(expandedKeys) {
      this.expandedKeys = expandedKeys;
      this.autoExpandParent = false;
    },
    onChangeTree(e) {
      const value = e.target.value;
      const expandedKeys = dataList
        .map(item => {
          if (item.key.indexOf(value) > -1) {
            return getParentKey(item.key, gData);
          }
          return null;
        })
        .filter((item, i, self) => item && self.indexOf(item) === i);
      Object.assign(this, {
        expandedKeys,
        searchValue: value,
        autoExpandParent: true
      });
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
  input,.ant-layout *,.ant-input-search,.ant-select{
    width:150px;
    margin-right: 10px;
  }
}
</style>