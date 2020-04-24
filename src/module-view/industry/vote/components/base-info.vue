<template lang="">
  <div>
    <a-form :form="form">
      <a-form-item label="议事标题："
                   :label-col="formItemLayout.labelCol"
                   :wrapper-col="formItemLayout.wrapperCol"
      >
        <a-input type="text" 
                 v-decorator="[
                   'name',
                   {rules: [{ required: true, message: '请输入议事标题' }], validateTrigger: 'blur'}]" 
        />
      </a-form-item>
      <a-form-item label="投票日期："
                   :label-col="formItemLayout.labelCol"
                   :wrapper-col="formItemLayout.wrapperCol"
      >
        <a-range-picker @change="onChange" v-decorator="['range-picker', rangeConfig]" />
      </a-form-item>
      <a-form-item label="议事详情："
                   :label-col="formItemLayout.labelCol"
                   :wrapper-col="formItemLayout.wrapperCol"
      >
        <j-editor v-decorator="[
          'content',
          {rules: [{ required: true, message: '请输入议事详情' }], validateTrigger: 'blur'}]"
        />
      </a-form-item>
    </a-form>
    <a-button key="submit" type="primary" @click="saveRange">
      保存
    </a-button>
    <a-button>
      取消
    </a-button>
  </div>
</template>
<script>
import JEditor from '@/components/jeecg/JEditor'
export default {
  name: "VoteRange",
  components: {JEditor},
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
      form: this.$form.createForm(this),
      rangeConfig: {
        rules: [{ type: 'array', required: true, message: 'Please select time!' }]
      }
    };
  },
  methods: {
    saveRange(){
      
    },
    onChange(){

    }
  }
}
</script>

