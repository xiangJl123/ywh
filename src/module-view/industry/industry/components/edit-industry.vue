<template>
  <div>
    <a-modal :title="title" v-model="openDialog" @ok="handleOk">
      <template slot="footer">
        <a-button key="submit" type="primary" :loading="loading" @click="handleOk">保存</a-button>
        <a-button key="back" @click="handleCancel">返回</a-button>
      </template>

      <a-form :form="form">
        <a-form-item
          label="业务会名称："
          :label-col="formItemLayout.labelCol"
          :wrapper-col="formItemLayout.wrapperCol"
        >
          <a-input type="text" disabled v-decorator="['name']" />
        </a-form-item>
        <a-form-item
          label="委员人数："
          :label-col="formItemLayout.labelCol"
          :wrapper-col="formItemLayout.wrapperCol"
        >
          <a-input
            addonAfter="人"
            type="number"
            v-decorator="['num',{rules: [{ required: true, message: '请输入委员人数' }], validateTrigger: 'blur'}]"
            :min="1"
          />
        </a-form-item>

        <a-form-item
          label="任期："
          :label-col="formItemLayout.labelCol"
          :wrapper-col="formItemLayout.wrapperCol"
        >
          <a-input
            addonAfter="年"
            type="number"
            v-decorator="['year',{rules: [{ required: true, message: '请输入任期' }], validateTrigger: 'blur'}]"
            :min="1"
          />
        </a-form-item>
        <a-form-item
          label="任期："
          :label-col="formItemLayout.labelCol"
          :wrapper-col="formItemLayout.wrapperCol"
        >
          <a-date-picker
            v-model="form.date1"
            show-time
            type="date"
            placeholder="成立日期"
            style="width: 100%;"
            v-decorator="['year',{rules: [{ required: true, message: '请输入成立日期' }], validateTrigger: 'blur'}]"
          />
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
      title: "编辑楼栋",
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
        this.handleCancel();
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
      this.$emit("on-ok");
    },
    handleCancel(e) {
      this.$emit("on-cancel");
    }
  }
};
</script>
