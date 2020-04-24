<template>
  <div>
    <a-modal :title="title" v-model="openDialog" @ok="handleOk">
      <template slot="footer">
        <a-button key="submit" type="primary" :loading="loading" @click="handleOk">
          保存
        </a-button>
        <a-button key="back" @click="handleCancel">
          返回
        </a-button>
      </template>

      <a-form :form="form">
        <a-form-item
          label="公告标题："
          :label-col="formItemLayout.labelCol"
          :wrapper-col="formItemLayout.wrapperCol"
        >
          <a-input type="text" v-decorator="['name']" />
        </a-form-item>
        <a-form-item
          label="公告内容："
          :label-col="formItemLayout.labelCol"
          :wrapper-col="formItemLayout.wrapperCol"
        >
          <j-editor v-decorator="['content']" style="width:300px;" />
        </a-form-item>

        <a-form-item
          label="发送对象："
          :label-col="formItemLayout.labelCol"
          :wrapper-col="formItemLayout.wrapperCol"
        >
          <a-select
            v-decorator="['icon']"
            placeholder="请发送对象"
            @change="handleObjectChange"
          >
            <a-select-option v-for='(item, index) in objectList' 
                             :value="item.id"
                             :key=index
            >
              {{ item.name }}
            </a-select-option>
          </a-select>
        </a-form-item>
      </a-form>
    </a-modal>
  </div>
</template>
<script>
import JEditor from '@/components/jeecg/JEditor'
export default {
  props: {
    // 是否开启模态框
    open: {
      type: Boolean,
      default: false
    }
  },
  components: {JEditor},
  data() {
    const formItemLayout = {
      labelCol: { span: 5 },
      wrapperCol: { span: 8 }
    };
    return {
      objectList: [],
      formItemLayout,
      labelCol: { span: 4 },
      wrapperCol: { span: 14 },
      title: "公告标题",
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
    },
    handleObjectChange(){

    }
  }
};
</script>
