<!--
 * @Descripttion: 
 * @version: 
 * @Author: hqp
 * @Date: 2020-03-30 21:14:54
 * @LastEditor: hqp
 * @LastEditTime: 2020-03-30 22:19:54
 -->
<template>
  <div>
    <div class="item">
      <label class="label-title">账户密码：</label>
      <span class="label-name">法国红酒的环</span>
      <span class="set" @click="setKey">修改密码</span>
    </div>
    <div class="item">
      <label class="label-title">手机号码：</label>
      <span class="label-name">法国红酒的环</span>
      <span class="set" @click="setTel">更换手机号码</span>
    </div>
    <div class="item">
      <label class="label-title">微信账号：</label>
      <span class="label-name">法国红酒的环</span>
      <span class="set">解除绑定</span>
    </div>

    <!-- 更换手机号码 -->
    <SetTel :show.sync="showSetTel" />

    <SetKey :show.sync="showSetKey" />
  </div>
</template>

<script>
  import SetTel from "./set-tel"
  import SetKey from "./set-key"

  export default {
    name: 'AccountKey',
    components: {  SetTel, SetKey },
    props: {},
    data() {
      return {
        showSetTel: false,
        showSetKey: false
      };
    },
    computed: {
    },
    watch: {
    },
    created() {},
    methods: {
      setTel() {
        this.showSetTel = true
      },
      setKey() {
        this.showSetKey = true
      }
    }
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
   .label-name {
     display: inline-block;
     width: 200px;
     color: #aaa;
   }
   .set{
     color: #4090ff;
     cursor: pointer;
   }
  }
  
</style>
