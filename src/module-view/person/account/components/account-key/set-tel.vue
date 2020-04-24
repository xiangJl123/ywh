<!--
 * @Descripttion: 
 * @version: 
 * @Author: hqp
 * @Date: 2020-03-30 21:14:54
 * @LastEditor: hqp
 * @LastEditTime: 2020-03-31 22:24:46
 -->
<template>
  <div>
    <a-modal title="更换手机号码" centered v-model="visible" :destroyOnClose='true' :maskClosable="false" @ok="confirm" @cancel="cancel">
      <a-form :form="form">
        <a-form-item label="新手机号码："
                     :label-col="formItemLayout.labelCol"
                     :wrapper-col="formItemLayout.wrapperCol"
        >
          <a-input v-decorator="[
                     'tel',
                     {rules: [{ required: true, pattern: /^1[34578]\d{9}$/, message: '请输入正确的手机号' }], validateTrigger: 'blur'}]"
                   placeholder="请输入手机号"
          />
        </a-form-item>
      </a-form>
    </a-modal>
  </div>
</template>

<script>

export default {
  name: 'SetTel',
  components: {},
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },
  data() {
    const formItemLayout = {
      labelCol: { span: 5 },
      wrapperCol: { span: 8 }
    };
    return {
      formItemLayout,
      form: this.$form.createForm(this)
    };
  },
  computed: {
    visible: {
      set() {
        this.cancel()
      },
      get() {
        return this.show
      }
    }
  },
  watch: {},
  created() {},
  methods: {
    confirm() {
      this.form.validateFields(err => {
        if (!err) {
          // console.info('success');
          this.cancel()
        }
      });
      
      
    },
    cancel(e) {
      
      this.$emit("update:show", false)
    }
  }
};
</script>

<style lang='scss' scoped>

</style>
