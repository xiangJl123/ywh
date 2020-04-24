<template>
  <a-card :bordered="false" style="height: 100%;">
    <a-spin>
      <a-tree
        showLine
        checkStrictly
        :expandedKeys.sync="expandedKeys"
        :selectedKeys="selectedKeys"
        :dropdownStyle="{maxHeight:'200px',overflow:'auto'}"
        :treeData="treeDataSource"
        @select="handleTreeSelect"
      />
    </a-spin>
  </a-card>
</template>

<script>
  // import { queryDepartTreeList, searchByKeywords } from '@/api/api'
const arr=[{"key": "6d35e179cd814e3299bd588ea7daed3f", "value": "6d35e179cd814e3299bd588ea7daed3f", "title": "卓尔互动公司", "isLeaf": false, "id": "6d35e179cd814e3299bd588ea7daed3f", "parentId": "", "departName": "卓尔互动公司", "departNameEn": null, "departNameAbbr": null, "departOrder": 0, "description": null, "orgCategory": "1", "orgType": "1", "orgCode": "A02", "mobile": null, "fax": null, "address": null, "memo": null, "status": null, "delFlag": "0", "createBy": "admin", "createTime": "2019-02-26 16:36:39", "updateBy": "admin", "updateTime": "2019-05-13 17:17:53", "children": [{"key": "5159cde220114246b045e574adceafe9", "value": "5159cde220114246b045e574adceafe9", "title": "研发部", "isLeaf": true, "id": "5159cde220114246b045e574adceafe9", "parentId": "6d35e179cd814e3299bd588ea7daed3f", "departName": "研发部", "departNameEn": null, "departNameAbbr": null, "departOrder": 1, "description": null, "orgCategory": "1", "orgType": "2", "orgCode": "A02A02", "mobile": null, "fax": null, "address": null, "memo": null, "status": null, "delFlag": "0", "createBy": "admin", "createTime": "2019-02-26 16:44:38", "updateBy": "admin", "updateTime": "2019-12-03 14:25:39", "children": null}, {"key": "a7d7e77e06c84325a40932163adcdaa6", "value": "a7d7e77e06c84325a40932163adcdaa6", "title": "财务部", "isLeaf": true, "id": "a7d7e77e06c84325a40932163adcdaa6", "parentId": "6d35e179cd814e3299bd588ea7daed3f", "departName": "财务部", "departNameEn": null, "departNameAbbr": null, "departOrder": 2, "description": null, "orgCategory": "1", "orgType": "2", "orgCode": "A02A01", "mobile": null, "fax": null, "address": null, "memo": null, "status": null, "delFlag": "0", "createBy": "admin", "createTime": "2019-02-26 16:36:47", "updateBy": "admin", "updateTime": "2019-12-03 14:25:34", "children": null}]}, {"key": "c6d7cb4deeac411cb3384b1b31278596", "value": "c6d7cb4deeac411cb3384b1b31278596", "title": "北京国炬公司", "isLeaf": false, "id": "c6d7cb4deeac411cb3384b1b31278596", "parentId": "", "departName": "北京国炬公司", "departNameEn": null, "departNameAbbr": null, "departOrder": 0, "description": null, "orgCategory": "1", "orgType": "1", "orgCode": "A01", "mobile": null, "fax": null, "address": null, "memo": null, "status": null, "delFlag": "0", "createBy": "admin", "createTime": "2019-02-11 14:21:51", "updateBy": "admin", "updateTime": "2019-03-22 16:47:19", "children": [{"key": "4f1765520d6346f9bd9c79e2479e5b12", "value": "4f1765520d6346f9bd9c79e2479e5b12", "title": "市场部", "isLeaf": true, "id": "4f1765520d6346f9bd9c79e2479e5b12", "parentId": "c6d7cb4deeac411cb3384b1b31278596", "departName": "市场部", "departNameEn": null, "departNameAbbr": null, "departOrder": 0, "description": null, "orgCategory": "1", "orgType": "2", "orgCode": "A01A03", "mobile": null, "fax": null, "address": null, "memo": null, "status": null, "delFlag": "0", "createBy": "admin", "createTime": "2019-02-20 17:15:34", "updateBy": "admin", "updateTime": "2019-05-29 16:53:12", "children": null}, {"key": "57197590443c44f083d42ae24ef26a2c", "value": "57197590443c44f083d42ae24ef26a2c", "title": "研发部", "isLeaf": false, "id": "57197590443c44f083d42ae24ef26a2c", "parentId": "c6d7cb4deeac411cb3384b1b31278596", "departName": "研发部", "departNameEn": null, "departNameAbbr": null, "departOrder": 0, "description": null, "orgCategory": "1", "orgType": "2", "orgCode": "A01A05", "mobile": null, "fax": null, "address": null, "memo": null, "status": null, "delFlag": "0", "createBy": "admin", "createTime": "2019-02-21 16:14:41", "updateBy": "admin", "updateTime": "2019-04-23 20:40:27", "children": [{"key": "2ea16c76c6e14d7d80e734af209916d3", "value": "2ea16c76c6e14d7d80e734af209916d3", "title": "研发一部(JEECG)", "isLeaf": true, "id": "2ea16c76c6e14d7d80e734af209916d3", "parentId": "57197590443c44f083d42ae24ef26a2c", "departName": "研发一部(JEECG)", "departNameEn": null, "departNameAbbr": null, "departOrder": 0, "description": null, "orgCategory": "2", "orgType": "3", "orgCode": "A01A05A01", "mobile": null, "fax": null, "address": null, "memo": null, "status": null, "delFlag": "0", "createBy": "admin", "createTime": "2020-02-20 15:25:46", "updateBy": null, "updateTime": null, "children": null}, {"key": "c07bec77bb7c499b97f06ca660928bb7", "value": "c07bec77bb7c499b97f06ca660928bb7", "title": "项目研发部", "isLeaf": true, "id": "c07bec77bb7c499b97f06ca660928bb7", "parentId": "57197590443c44f083d42ae24ef26a2c", "departName": "项目研发部", "departNameEn": null, "departNameAbbr": null, "departOrder": 0, "description": null, "orgCategory": "2", "orgType": "3", "orgCode": "A01A05A03", "mobile": null, "fax": null, "address": null, "memo": null, "status": null, "delFlag": "0", "createBy": "admin", "createTime": "2020-02-20 15:26:07", "updateBy": null, "updateTime": null, "children": null}, {"key": "c9169e0d610341bcb3447be88e7a309e", "value": "c9169e0d610341bcb3447be88e7a309e", "title": "研发二部(JEEWX)", "isLeaf": true, "id": "c9169e0d610341bcb3447be88e7a309e", "parentId": "57197590443c44f083d42ae24ef26a2c", "departName": "研发二部(JEEWX)", "departNameEn": null, "departNameAbbr": null, "departOrder": 0, "description": null, "orgCategory": "2", "orgType": "3", "orgCode": "A01A05A02", "mobile": null, "fax": null, "address": null, "memo": null, "status": null, "delFlag": "0", "createBy": "admin", "createTime": "2020-02-20 15:25:58", "updateBy": null, "updateTime": null, "children": null}]}, {"key": "67fc001af12a4f9b8458005d3f19934a", "value": "67fc001af12a4f9b8458005d3f19934a", "title": "财务部", "isLeaf": false, "id": "67fc001af12a4f9b8458005d3f19934a", "parentId": "c6d7cb4deeac411cb3384b1b31278596", "departName": "财务部", "departNameEn": null, "departNameAbbr": null, "departOrder": 0, "description": null, "orgCategory": "1", "orgType": "2", "orgCode": "A01A04", "mobile": null, "fax": null, "address": null, "memo": null, "status": null, "delFlag": "0", "createBy": "admin", "createTime": "2019-02-21 16:14:35", "updateBy": "admin", "updateTime": "2019-02-25 12:49:41", "children": [{"key": "da11cdc4d3d443a0b21139a0b7dd8a7b", "value": "da11cdc4d3d443a0b21139a0b7dd8a7b", "title": "出纳科", "isLeaf": true, "id": "da11cdc4d3d443a0b21139a0b7dd8a7b", "parentId": "67fc001af12a4f9b8458005d3f19934a", "departName": "出纳科", "departNameEn": null, "departNameAbbr": null, "departOrder": 0, "description": null, "orgCategory": "2", "orgType": "3", "orgCode": "A01A04A01", "mobile": null, "fax": null, "address": null, "memo": null, "status": null, "delFlag": "0", "createBy": "admin", "createTime": "2020-02-20 15:26:20", "updateBy": null, "updateTime": null, "children": null}, {"key": "ec5edd08e4654a69928462542eb35c2c", "value": "ec5edd08e4654a69928462542eb35c2c", "title": "核算科", "isLeaf": true, "id": "ec5edd08e4654a69928462542eb35c2c", "parentId": "67fc001af12a4f9b8458005d3f19934a", "departName": "核算科", "departNameEn": null, "departNameAbbr": null, "departOrder": 0, "description": null, "orgCategory": "2", "orgType": "3", "orgCode": "A01A04A02", "mobile": null, "fax": null, "address": null, "memo": null, "status": null, "delFlag": "0", "createBy": "admin", "createTime": "2020-02-20 15:26:31", "updateBy": null, "updateTime": null, "children": null}]}]}];
  export default {
    name: 'AddressListLeft',
    props: ['value'],
    data() {
      return {
        cardLoading: false,
        loading: false,
        treeDataSource: [],
        selectedKeys: [],
        expandedKeys: []
      }
    },
    created() {
      this.queryTreeData()
    },
    methods: {

      queryTreeData(keyword) {
         this.treeDataSource=arr;
        return 
        this.commonRequestThen(queryDepartTreeList({
          departName: keyword || undefined
        }))
      },

      handleTreeSelect(selectedKeys, event) {
        // if (selectedKeys.length > 0 && this.selectedKeys[0] !== selectedKeys[0]) {
        //   this.selectedKeys = [selectedKeys[0]]
        //   let orgCode = event.node.dataRef.orgCode
        //   this.emitInput(orgCode)
        // }
      },

      emitInput(orgCode) {
       // this.$emit('input', orgCode)
      },

      commonRequestThen(promise) {
        this.loading = true
        promise.then(res => {
          if (res.success) {
            this.treeDataSource = res.result
            // update-begin- --- author:wangshuai ------ date:20200102 ---- for:去除默认选中第一条数据、默认展开所有第一级
            // 默认选中第一条数据、默认展开所有第一级
            // if (res.result.length > 0) {
            //   this.expandedKeys = []
            //   res.result.forEach((item, index) => {
            //     if (index === 0) {
            //       this.selectedKeys = [item.id]
            //       this.emitInput(item.orgCode)
            //     }
            //     this.expandedKeys.push(item.id)
            //   })
            // }
           // update-end- --- author:wangshuai ------ date:20200102 ---- for:去除默认选中第一条数据、默认展开所有第一级
          } else {
            this.$message.warn(res.message)
            console.error('组织机构查询失败:', res)
          }
        }).finally(() => {
          this.loading = false
          this.cardLoading = false
        })
      }

    }
  }
</script>

<style scoped>

</style>