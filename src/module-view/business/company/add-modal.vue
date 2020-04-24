<!--
 * @Descripttion: 
 * @version: 
 * @Author: hqp
 * @Date: 2020-04-07 21:17:33
 * @LastEditor: hpp
 * @LastEditTime: 2020-04-07 23:09:20
 -->
<template>
  <a-modal
    :title="title"
    centered
    v-model="visible"
    :destroyOnClose='true'
    :maskClosable="false"
    :okText="'添加'"
    :cancelText="'返回'"
    @ok="confirm"
    @cancel="cancel"
  >
    <a-form-model :model="form" :rules="rules" ref="ruleForm" :label-col="labelCol" :wrapper-col="wrapperCol">
      <a-form-model-item prop='n' label="所属地区：">
        <a-input v-model="form.n" />
      </a-form-model-item>
      <a-form-model-item prop='m' label="选择小区：">
        <a-input v-model="form.m" />
      </a-form-model-item>
      <a-form-model-item prop='name' label="公司名称：">
        <a-input v-model="form.name" />
      </a-form-model-item>
    </a-form-model>
  </a-modal>
</template>

<script>
export default {
  name: 'AddModal',
  components: {},
  props: {
    show: {
      type: Boolean,
      default: false
    },
    title: {
      type: [String],
      default: '添加小区'
    }
  },
  data() {
    return {
      labelCol: { span: 5 },
      wrapperCol: { span: 18 },
      form: {
        name: '',
        n: '',
        m: ''
      },
      rules: {
        name: [
          { required: true, message: '公司名称', trigger: 'blur' }
        ],
        n: [
          { required: true, message: '请选择所属地区', trigger: 'blur' }
        ],
        m: [
          { required: true, message: '选择小区', trigger: 'blur' }
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
    confirm() {
      this.$refs.ruleForm.validate(valid => {
        if (valid) {
          console.log('submit!');
        } else {
          console.log('error submit!!');
          return false;
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
