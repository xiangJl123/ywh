<!--
 * @Descripttion:
 * @version:
 * @Author: hqp
 * @Date: 2020-04-07 21:17:33
 * @LastEditor: hpp
 * @LastEditTime: 2020-04-25 21:40:21
 -->
<template>
  <a-modal
    v-model="visible"
    :title="title"
    centered
    :destroy-on-close="true"
    :mask-closable="false"
    :ok-text="'添加'"
    :cancel-text="'返回'"
    @ok="confirm"
    @cancel="cancel"
  >
    <a-form-model ref="ruleForm" :model="form" :rules="rules" :label-col="labelCol" :wrapper-col="wrapperCol">
      <a-form-model-item prop="name" label="小区名称：">
        <a-input v-model="form.name" />
      </a-form-model-item>
      <a-form-model-item prop="num" label="总户数：">
        <a-input v-model="form.num">
          <span slot="addonAfter">人</span>
        </a-input>
      </a-form-model-item>
      <a-form-model-item prop="n" label="所属地区：">
        <a-input v-model="form.n" />
      </a-form-model-item>
      <a-form-model-item prop="m" label="所属社区：">
        <a-input v-model="form.m" />
      </a-form-model-item>
      <a-form-model-item prop="adress" label="详细地址：">
        <a-input v-model="form.adress" />
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
        num: '',
        n: '',
        m: '',
        adress: ''
      },
      rules: {
        name: [
          { required: true, message: '请输入小区名称', trigger: 'blur' }
        ],
        num: [
          { required: true, message: '请输入小区人数', trigger: 'blur' }
        ],
        n: [
          { required: true, message: '请选择所属地区', trigger: 'blur' }
        ],
        m: [
          { required: true, message: '请选择所属社区', trigger: 'blur' }
        ],
        adress: [
          { required: true, message: '请输入小区地址', trigger: 'blur' }
        ]
      }
    }
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
  watch: {
  },
  created() {},
  methods: {
    confirm() {
      this.$refs.ruleForm.validate(valid => {
        if (valid) {
          console.log('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    cancel() {
      // this.visible = false
      this.$emit('update:show', false)
    }
  }
}
</script>

<style lang='scss' scoped>

</style>
