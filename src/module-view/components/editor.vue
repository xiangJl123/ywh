<template>
  <div>
    <a-modal :title="title" v-model="openDialog" @ok="handleOk">
      <template slot="footer">
        <a-button key="submit" type="primary" :loading="loading" @click="handleOk">
          保存
        </a-button>
        <a-button key="back" @click="handleCancel">
          返回
        </a-button>
      </template>
      <div class="tinymce-editor">
        <j-editor v-model="editorValue" />
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
      },
      title: {
        type: String,
        default: ""
      },
      value: {
        type: String,
        default: ""
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
      },
      editorValue: {
        get() {
          return this.value;
        },
        set(val) {
          
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
