<!--
 * @Descripttion: 
 * @version: 
 * @Author: hqp
 * @Date: 2020-03-30 21:14:54
 * @LastEditor: hqp
 * @LastEditTime: 2020-03-30 21:48:15
 -->
<template>
  <div>
    <div class="item">
      <label class="label-title">姓名：</label>
      <span class="label-name">法国红酒的环</span>
    </div>
    <div class="item">
      <label class="label-title">性别：</label>
      <span class="label-name">法国红酒的环</span>
    </div>
    <div class="item">
      <label class="label-title">职位：</label>
      <span class="label-name">法国红酒的环</span>
    </div>
    <div class="item">
      <label class="label-title">所属部门：</label>
      <span class="label-name">法国红酒的环</span>
    </div>
    <div class="item">
      <label class="label-title">备注：</label>
      <span class="label-name">法国红酒的环</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AccountInfo',
  components: {},
  props: {},
  data() {
    return {
    };
  },
  computed: {
  },
  watch: {
  },
  created() {},
  methods: {}
};
</script>

<style lang='less' scoped>
  .item {
    height:80px;
    line-height: 80px;
    .label-title{
      // font-size: 16px;
      font-weight: bold;
      color: rgba(0, 0, 0, 0.85);
      display: inline-block;
      width: 150px;
      text-align: right;
      margin-right:20px;
   }
  }
  
</style>
