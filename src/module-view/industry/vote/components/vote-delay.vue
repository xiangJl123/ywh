<template>
  <div>
    <a-modal :title="title" centered
             v-model="openDialog"
             :destroyOnClose='true'
             :maskClosable="false" @ok="confirm"
             @cancel="cancel"
    >
      <!-- <template slot="footer">
        <a-button key="submit" type="primary" :loading="loading" @click="handleOk">
          保存
        </a-button>
        <a-button key="back" @click="handleCancel">
          返回
        </a-button>
      </template> -->

      <a-form :form="form" :label-col="formItemLayout.labelCol" :wrapper-col="formItemLayout.wrapperCol">
        <a-form-item
          label="原截止时间："
        >
          <a-input type="text" disabled />
        </a-form-item>
        <a-form-item
          label="新截止时间："
        >
          <a-date-picker
            v-model="form.date1"
            show-time
            type="date"
            v-decorator="['num',{rules: [{ required: true, message: '请输入新截止时间' }], validateTrigger: 'blur'}]"
            placeholder="Pick a date"
            style="width: 100%;"
          />
        </a-form-item>

        <a-form-item
          label="备注："
        >
          <a-input type="textarea" v-decorator="['year',{rules: [{ required: true, message: '请输入备注' }],validateTrigger: 'blur'}]" />
        </a-form-item>
      </a-form>
    </a-modal>
  </div>
</template>
<script>
export default {
  name: "VoteDelay",
  props: {
    // 是否开启模态框
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
      labelCol: { span: 4 },
      wrapperCol: { span: 14 },
      title: "延期投票",
      loading: false,
      form: this.$form.createForm(this)
    };
  },
  computed: {
    // 是否开启模态框
    openDialog: {
      get() {
        return this.cancel()
      },
      set(val) {
        return this.show
      }
    }
  },
  methods: {
    confirm(e) {
      this.form.validateFields(err => {
        if (!err) {
          // console.info('success');
          // this.cancel()
        }
      });
     // this.$emit("on-ok");
    },
    cancel(e) {
     this.$emit("update:show", false)
    }
  }
};
</script>
