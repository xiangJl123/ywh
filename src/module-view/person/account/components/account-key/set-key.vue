<!--
 * @Descripttion: 
 * @version: 
 * @Author: hqp
 * @Date: 2020-03-30 21:14:54
 * @LastEditor: hqp
 * @LastEditTime: 2020-03-31 22:39:52
 -->
<template>
  <div>
    <a-modal
      title="修改密码"
      centered
      v-model="visible"
      :destroyOnClose='true'
      :maskClosable="false"
      @ok="confirm"
      @cancel="cancel"
    >
      <a-form :form="form">
        <a-form-item label="新密码"
                     :label-col="formItemLayout.labelCol"
                     :wrapper-col="formItemLayout.wrapperCol"
        >
          <a-input type="password"
                   v-decorator="[
                     'password',
                     {rules: [{ required: true, message: '请输入密码' },{min: 6, message: '密码最少6位'}], validateTrigger: 'blur'}]"
                   placeholder="请输入新密码"
          />
        </a-form-item>

        <a-form-item label="确认新密码"
                     :label-col="formItemLayout.labelCol"
                     :wrapper-col="formItemLayout.wrapperCol"
        >
          <a-input type="password"
                   v-decorator="[
                     'password_new',
                     {rules: [{ required: true, message: '请确认密码' }, { validator: handlePassword }], validateTrigger: 'blur'}]"
                   placeholder="请确认密码"
          />
        </a-form-item>
      </a-form>
    </a-modal>
  </div>
</template>

<script>
export default {
  name: 'SetKey',
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
      get(){
        return this.show
      }
    }
  },
  watch: {
  },
  created() {},
  methods: {
    handlePassword(rule, value, callback) {
       console.log(rule);
       console.log(value);
       const { getFieldValue } = this.form
       console.log(this.form);
       
        if (value && value !== getFieldValue('password')) {
            callback('两次输入不一致！')
        }

        // Note: 必须总是返回一个 callback，否则 validateFieldsAndScroll 无法响应
        callback()
    },
    confirm() {
      this.form.validateFields(err => {
        if (!err) {
          // console.info('success');
          this.cancel()
        }
      });
    },
    cancel(){
      // this.visible = false
      this.$emit("update:show", false)
    }
  }
};
</script>

<style lang='scss' scoped>

</style>
