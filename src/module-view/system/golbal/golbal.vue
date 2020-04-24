<template lang="">
  <div class="golbal">
    <div class="title">
      注册设置
    </div>
    <div class="content">
      <a-form :model="form" :rules="rules" ref="ruleForm" :label-col="labelCol" :wrapper-col="wrapperCol">
        <a-form-model-item label="注册设置：">
          <a-checkbox-group v-model="form.type" @change="changeType">
            <a-checkbox value="1" name="type">
              真实姓名+手机号
            </a-checkbox>
            <a-checkbox value="2" name="type">
              身份证号
            </a-checkbox>
            <a-checkbox value="3" name="type">
              身份证正反面
            </a-checkbox>
            <a-checkbox value="4" name="type">
              产权证号&合同备案号
            </a-checkbox>
            <a-checkbox value="5" name="type">
              活体人脸核身
            </a-checkbox>
          </a-checkbox-group>
        </a-form-model-item>

        <a-form-model-item label="住户审核模式：">
          <a-checkbox-group v-model="form.type1" @change="changeType">
            <a-checkbox value="1" name="type1">
              先通过，业主再审核
            </a-checkbox>
            <a-checkbox value="2" name="type1">
              业主先审核，再通过
            </a-checkbox>
          </a-checkbox-group>
        </a-form-model-item>
      </a-form>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return {
      labelCol: { span: 4 },
      wrapperCol: { span: 19 },
      form: {
        type: [],
        type1: []
      },
      rules: {
        type: [
          { required: true, message: '请输入小区名称', trigger: 'blur' }
        ],
        type1: [
          { required: true, message: '请输入小区人数', trigger: 'blur' }
        ]
      }
    };
  },
  mouted(){

  },
  methods: {
    changeType(){
      console.log(this.form)
    }
  }
}
</script>
<style lang="less" scoped>
.golbal{
  .title{
    line-height: 30px;
    padding-left:30px;
    margin-bottom:20px;
  }
}
  
</style>