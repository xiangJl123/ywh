<template>
  <div>
    <a-modal :title="title" v-model="openDialog">
      <template slot="footer">
        <a-button key="submit" type="primary" :loading="loading" @click="handleOk">
          保存
        </a-button>
        <a-button key="back" @click="handleCancel">
          返回
        </a-button>
      </template>
      <a-textarea placeholder="请输入" :rows="4" />
    </a-modal>
  </div>
</template>
<script>
export default {
  props: {
      // 是否开启模态框
      open: {
        type: Boolean,
        default: false
      },
      title: {
        type: String,
        default: ""
      }
  },
  data() {
    return {
      loading: false
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
    handleOk(){
      this.$emit('on-ok');
    },
    handleCancel(e) {
      this.$emit('on-cancel');
    }
  }
};
</script>
