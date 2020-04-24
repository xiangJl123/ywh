<template lang="">
  <div class="select-info">
    <div class="info-content">
      <!-- 一个选项 -->
      <div class="item">
        <div class="item-title">
          <span>事项1</span>

          <!-- 按钮组 -->
          <div class="btn-group">
            <a-icon type="arrow-up" />
            <a-icon type="arrow-down" />
            <a-icon type="delete" />
          </div>
        </div>

        <div class="item-con">
          <a-form-model
            ref="ruleForm"
            :label-col="formItemLayout.labelCol"
            :wrapper-col="formItemLayout.wrapperCol"
          >
            <a-form-item label="事项描述">
              <a-input type="text" 
                       v-decorator="[
                         'name',
                         {rules: [{ required: true, message: '请输入事项描述' }], validateTrigger: 'blur'}]" 
              />
            </a-form-item>

            <a-form-item label="选项类型">
              <a-radio-group v-decorator="['radio-group']">
                <a-radio value="a">
                  单选
                </a-radio>
                <a-radio value="b">
                  多选
                </a-radio>
              </a-radio-group>
              <!-- <a-input-number :min="1" :max="10" v-decorator="[
                'num',
                {rules: [{ required: true, message: '请输入多选个数' }], validateTrigger: 'blur'}]" 
              /> -->
            </a-form-item>

            <a-form-item
              v-for="(domain, index) in dynamicValidateForm.domains"
              :key="domain.key"
              :label="index === 0 ? '选项描述' : ''"
              :prop="'domains.' + index + '.value'"
              :rules="{
                required: true,
                message: '描述不能为空',
                trigger: 'blur',
              }"
            >
              <div class="input-warp">
                <a-input
                  v-model="domain.value"
                  style="display:inline"
                  placeholder="please input domain"
                />
                <!-- <a-button type="link" @click="addDomain">
                  添加
                </a-button> -->
                <a-button type="link" @click="removeDomain(domain)" v-if="dynamicValidateForm.domains.length > 1">
                  删除
                </a-button>
              </div>
            </a-form-item>
          </a-form-model>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "SelectInfo",
  data() {
    const formItemLayout = {
        labelCol: { span: 5 },
        wrapperCol: { span: 8 }
      };
    return {
      dynamicValidateForm: {
        domains: [{
          value: "11"
        }]
      },
      formItemLayout,
      labelCol: { span: 4 },
      wrapperCol: { span: 14 },
      loading: false,
      form: this.$form.createForm(this)
    };
  },
  computed: {
    
  },
  methods: {
    removeDomain(item) {
      let index = this.dynamicValidateForm.domains.indexOf(item);
      if (index !== -1) {
        this.dynamicValidateForm.domains.splice(index, 1);
      }
    },
    addDomain() {
      this.dynamicValidateForm.domains.push({
        value: '',
        key: Date.now()
      });
    }
  }
}
</script>
<style lang="less" scoped>
  .select-info{
    .info-content{
      margin:auto;
      width: 700px;

      .item{
        border:1px solid #ddd;
        border-radius: 5px;
        .item-title{
          border-bottom:1px solid #ddd;
          line-height: 40px;
          text-align: left;
          padding:0 20px;
          .btn-group{
            display: inline;
            float: right;
            &>i{
              margin-right: 10px;
            }
          }
        }
        
        .item-con{
          padding-top: 20px;
          .input-warp{

          }
        }
      }
    }
  }
</style>

