<template>
  <div>
    <a-tabs 
      v-model='activeKey'
      @change="change"
    >
      <a-tab-pane tab="账户信息" key="1">
        <AccountInfo />
      </a-tab-pane>
      <a-tab-pane tab="账户安全" key="2">
        <AccountKey />
      </a-tab-pane>
    </a-tabs>
    
    <!-- 账号密码 -->
    <!-- <AccountKey v-if="defaultActiveKey==2" /> -->
    <!-- 账号信息 -->
    <!-- <AccountInfo v-if="defaultActiveKey==1" /> -->
  </div>
</template>

<script>
  import { AccountKey, AccountInfo } from "./components"
  export default {
    name: 'Account',
    components: { AccountKey, AccountInfo },
    props: {},
    data() {
      return {
        tabs: [{
          tab: "账户信息",
          key: "1"
        },
        {
          tab: "账户安全",
          key: "2"
        }],
        activeKey: "1"
      };
    },
    computed: {
    },
    watch: {
    },
    created() {},
    methods: {
      change(val) {
        console.log(val);
        // this.defaultActiveKey = val
        
      }
    }
  };
</script>

<style lang='less' scoped>

</style>
