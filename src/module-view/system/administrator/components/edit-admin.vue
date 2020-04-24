
<template>
  <div>
    <a-modal
      :title="title"
      centered
      v-model="visible"
      :destroyOnClose='true'
      :maskClosable="false"

      @ok="confirm"
      @cancel="cancel"
    >
      <a-form-model :model="form" :rules="rules" ref="ruleForm" :label-col="labelCol" :wrapper-col="wrapperCol">
        <a-form-model-item prop='name' label="姓名：">
          <a-input v-model="form.name" />
        </a-form-model-item>
        <a-form-model-item prop='phone' label="手机号：">
          <a-input v-model="form.phone" />
        </a-form-model-item>
        <a-form-model-item prop='remark' label="备注：">
          <a-textarea
            v-model="form.remark" 
            :autoSize="{ minRows: 2, maxRows: 6 }"
          />
        </a-form-model-item>
      </a-form-model>
    </a-modal>
  </div>
</template>

<script>
export default {
  name: 'EditAdmin',
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },
   data() {
    return {
      labelCol: { span: 5 },
      wrapperCol: { span: 18 },
      title: "编辑管理员",
      // form: this.$form.createForm(this),
      form: {
        name: '',
        phone: '',
        remark: ''
      },
      rules: {
        name: [
          { required: true, message: '请输入姓名', trigger: 'blur' }
        ],
        phone: [
          { required: true, message: '请输入手机号', trigger: 'blur' },
          { validator: this.handlePhone, trigger: 'blur'}
        ],
        remark: [
          { required: true, message: '请输入备注', trigger: 'blur' }
        ]
      }
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
    handlePhone(rule, value, callback) {
        const reg = /^((13[0-9])|(17[0-1,6-8])|(15[^4,\\D])|(18[0-9]))\d{8}$/;
        
        if (value && !reg.test(value)) {
            callback('请输入正确的手机号！')
        }
        // Note: 必须总是返回一个 callback，否则 validateFieldsAndScroll 无法响应
        callback()
    },
    confirm() {
      this.$refs.ruleForm.validate(valid => {
        if (valid) {
          console.log(this.form);
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    cancel(){
      this.$refs.ruleForm.resetFields();
      this.$emit("update:show", false)
    }
  }
};
</script>

<style lang='scss' scoped>

</style>
