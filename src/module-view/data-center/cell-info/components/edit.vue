<template>
  <div>
    <a-modal title="关于小区" v-model="openDialog" @ok="handleOk">
      <template slot="footer">
        <a-button key="submit" type="primary" :loading="loading" @click="handleOk">
          保存
        </a-button>
        <a-button key="back" @click="handleCancel">
          返回
        </a-button>
      </template>
      <div class="tinymce-editor">
        <j-editor v-model="value" />
      </div>
    </a-modal>
  </div>
</template>
<script>
import JEditor from '@/components/jeecg/JEditor'
  export default {
    props: {
      // 是否开启模态框
      open: {
        type: Boolean,
        default: false
      }
    },
    components: { JEditor},
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
    created(){
    },
     mounted() {
        tinymce.init({})
    },
    data() {
      return {
        value: ""
      };
    },
    methods: {
      showModal() {
        this.visible = true;
      },
      handleOk(e) {
        this.$emit('on-ok');
      },
      handleCancel(e) {
        this.$emit('on-cancel');
      },
      onClick(){

      }
    }
  };
</script>
