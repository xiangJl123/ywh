<template lang="">
  <div>
    <a-steps :current="current">
      <a-step v-for="item in steps" :key="item.title">
        <template slot="title">
          {{ item.title }}
        </template>
        <span slot="description">{{ item.content }}</span>
      </a-step>
    </a-steps>
    <div class="steps-content">
      <transition name="fade-transform" mode="out-in">
        <component :is="componentName"></component>
      </transition>
    </div>

    
    <div class="steps-action">
      <a-button v-if="current < steps.length - 1" type="primary" @click="next">
        Next
      </a-button>
      <a-button
        v-if="current == steps.length - 1"
        type="primary"
        @click="$message.success('Processing complete!')"
      >
        Done
      </a-button>
      <a-button v-if="current>0" style="margin-left: 8px" @click="prev">
        Previous
      </a-button>
    </div>
  </div>
</template>
<script>
import { VoteRange, BaseInfo, FileUp, SelectInfo, VoteStaus} from "./components";
export default {
  components: {VoteRange, BaseInfo, FileUp, SelectInfo, VoteStaus},

    data() {
      return {
        current: 0,
        steps: [
          {
            title: '投票范围',
            content: '选择可参与投票人范围确认投票人基础数据',
            compontent: "VoteRange"
          },
          {
            title: '基本信息',
            content: '设置此次投票议事的详细信息',
            compontent: "BaseInfo"
          },
          {
            title: '附件资源',
            content: '上传此次投票中涉及的合同文档等资源',
            compontent: "FileUp"
          },
          {
            title: '选项信息',
            content: '设置投票选项可设置单选多选',
            compontent: "SelectInfo"

          },
          {
            title: '投票状态',
            content: '显示当前投票状态以及详细信息',
            compontent: "VoteStaus"
          }
        ]
      };
    },
    computed: {
      componentName() {
        return `${this.steps[this.current].compontent}`;
      }
    },
    methods: {
      next() {
        this.current++;
      },
      prev() {
        this.current--;
      }
    }
  };
</script>
<style scoped>
  .steps-content {
    /* border: 1px dashed #e9e9e9; */
    border-radius: 6px;
    /* background-color: #fafafa; */
    min-height: 200px;
    text-align: center;
    padding-top: 80px;
  }

  .steps-action {
    margin-top: 24px;
  }
</style>