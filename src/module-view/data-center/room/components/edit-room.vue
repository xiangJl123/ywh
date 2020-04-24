<template>
  <div>
    <a-modal :title="title" v-model="openDialog" @ok="handleOk">
      <template slot="footer">
        <a-button key="submit" type="primary" :loading="loading" @click="handleOk">
          保存
        </a-button>
        <a-button key="back" @click="handleCancel">返回</a-button>
      </template>

      <a-form :form="form">
        <a-form-item label="楼栋/单元："
                     :label-col="formItemLayout.labelCol"
                     :wrapper-col="formItemLayout.wrapperCol"
        >
          <a-select
            v-decorator="[
              'select',
              { rules: [{ required: true, message: '  请选择楼栋单元' }] },
            ]"
          >
            <a-select-option value="1">
              1
            </a-select-option>
            <a-select-option value="2">
              2
            </a-select-option>
          </a-select>
        </a-form-item>
        <a-form-item label="楼层："
                     :label-col="formItemLayout.labelCol"
                     :wrapper-col="formItemLayout.wrapperCol"
        >
          <a-input addonAfter="层" type="number"
                   v-decorator="[
                     'hold',
                     {rules: [{ required: true, message: '请输入楼层' }], validateTrigger: 'blur'}]" 
                   :min=1
          />
        </a-form-item>
        <a-form-item label="房号："
                     :label-col="formItemLayout.labelCol"
                     :wrapper-col="formItemLayout.wrapperCol"
        >
          <a-input
            v-decorator="[
              'num',
              {rules: [{ required: true, message: '请输入房号' }], validateTrigger: 'blur'}]" 
          />
        </a-form-item>
        <a-form-item label="建筑面积："
                     :label-col="formItemLayout.labelCol"
                     :wrapper-col="formItemLayout.wrapperCol"
        >
          <a-input addonAfter="m²" type="number"
                   v-decorator="[
                     'jian',
                     {rules: [{ required: true, message: '请输入楼层' }], validateTrigger: 'blur'}]" 
          />
        </a-form-item>
        <a-form-item label="套内面积："
                     :label-col="formItemLayout.labelCol"
                     :wrapper-col="formItemLayout.wrapperCol"
        >
          <a-input addonAfter="m²" type="number"
                   v-decorator="[
                     'tao',
                     {rules: [], validateTrigger: 'blur'}]" 
          />
        </a-form-item>
        <a-form-item label="房屋类型"
                     :label-col="formItemLayout.labelCol"
                     :wrapper-col="formItemLayout.wrapperCol"
        >
          <a-select
            v-decorator="[
              'type',
              { rules: [{ required: true, message: '  请选择房屋类型' }] },
            ]"
          >
            <a-select-option value="1">
              住宅
            </a-select-option>
            <a-select-option value="2">
              商铺
            </a-select-option>
          </a-select>
        </a-form-item>
      </a-form>
    </a-modal>
  </div>
</template>
<script>
export default {
  props: {
      // 是否开启模态框
      open: {
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
      labelCol: { span: 4 },
      wrapperCol: { span: 14 },
      title: "编辑房屋",
      loading: false,
      form: this.$form.createForm(this)
    };
  },
  computed: {
      // 是否开启模态框
      openDialog: {
        get() {
          return this.open;
        },
        set(val) {
          this.handleCancel()
        }
      }
    },
  methods: {
    handleOk(e) {
      this.form.validateFields(err => {
        if (!err) {
          // console.info('success');
          // this.cancel()
        }
      });
      this.$emit('on-ok');
    },
    handleCancel(e) {
      this.$emit('on-cancel');
    }
  }
};
</script>
