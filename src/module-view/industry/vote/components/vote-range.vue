<template lang="">
  <div>
    <a-form :form="form">
      <a-form-item label="选择投票范围："
                   :label-col="formItemLayout.labelCol"
                   :wrapper-col="formItemLayout.wrapperCol"
      >
        <a-input type="text" 
                 v-decorator="[
                   'name',
                   {rules: [{ required: true, message: '请输入小区名字' }], validateTrigger: 'blur'}]" 
        />
        <a-select defaultValue="选择楼栋">
          <a-select-option value="1">
            1
          </a-select-option>
          <a-select-option value="2">
            2
          </a-select-option>
        </a-select>
        <a-select defaultValue="选择单元">
          <a-select-option value="1">
            1
          </a-select-option>
          <a-select-option value="2">
            2
          </a-select-option>
        </a-select>
        <a-button key="submit" type="primary" @click="saveRange">
          保存
        </a-button>
      </a-form-item>
    </a-form>
  </div>
</template>
<script>
export default {
  name: "VoteRange",
  data() {
    const formItemLayout = {
        labelCol: { span: 5 },
        wrapperCol: { span: 8 }
      };
    return {
      formItemLayout,
      labelCol: { span: 4 },
      wrapperCol: { span: 14 },
      loading: false,
      form: this.$form.createForm(this)
    };
  },
  methods: {
    saveRange(){
      
    }
  }
}
</script>

