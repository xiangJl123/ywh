<template lang="">
  <div class="vote-status">
    <!-- 状态显示 -->
    <a-result
      :title="statusObj.text"
    >
    </a-result>

    <!-- 描述显示 -->
    <div class="vote-des">
      <div class="title">
        事项说明
      </div>
      <div class="content">
        说明说明说明说明说明说明说明说明说明说明说明说明说明说明说明说明
      </div>
    </div>
    

    <!-- 按钮组 -->
    <div class="btn-group">
      <a-button type="primary" @click="publics">
        发布
      </a-button>
      <a-button type="primary" @click="view">
        预览
      </a-button>
      <a-button type="primary" @click="delay">
        投票延期
      </a-button>
      <a-button type="primary" @click="stop">
        投票终止
      </a-button>
      <a-button type="primary" @click="manual">
        人工录入
      </a-button>
      <a-button type="primary" @click="statis">
        投票统计
      </a-button>
      <a-button type="primary" @click="del">
        删除
      </a-button>
      <a-button type="primary" @click="option">
        操作日志
      </a-button>
      <a-button @click="back">
        返回
      </a-button>
    </div>
    <!-- 投票延期弹窗 -->
    <vote-delay :show.sync='showDelay' 
                v-if="showDelay"
    ></vote-delay>
  </div>
</template>
<script>
import  VoteDelay  from "./vote-delay"
export default {
  name: "VoteStatus",
     components: { VoteDelay },
    data() {
    
      return {
        currentStayus: 1,   // 当前状态 1-带发布 2-进行中 3一已结束 4-已终止
        statusList: [{
          status: 1,
          className: "",
          text: "待发布",
          button: ["publics", "view", "back"]
        }, {
          status: 2,
          className: "",
          text: "进行中",
          button: ["delay", "stop", "manual", "statis", "option", "back"]
        }, {
          status: 3,
          className: "",
          text: "已结束",
           button: ["view", "delay", "statis", "del", "option"]
        }, {
          status: 4,
          className: "",
          text: "已终止",
           button: ["statis", "del", "option"]
        }],
        showDelay: false

      };
    },
    created(){
      console.log(VoteDelay)
    },
    computed: {
      statusObj() {
        return this.statusList[this.currentStayus]
      }
    },
    methods: {
      publics(){
        this.currentStayus=2
      },
      view(){},
      back(){},
      delay(){
        this.showDelay=true;
      },
      manual(){},
      statis(){},
      del(){},
      option(){},
      stop(){}
    }
}
</script>
<style lang="less">
  .vote-des{
    margin:0 auto 30px;
    width: 700px;
    border-radius: 5px;
    background: #efefef;
    padding:20px;
  }
</style>
    