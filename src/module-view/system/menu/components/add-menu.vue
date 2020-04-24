<!--
 * @Descripttion: 
 * @version: 
 * @Author: hqp
 * @Date: 2020-03-30 21:14:54
 * @LastEditor: hqp
 * @LastEditTime: 2020-04-07 22:46:18
 -->
<template>
  <div>
    <a-modal
      title="修改密码"
      centered
      v-model="visible"
      :destroyOnClose='true'
      :maskClosable="false"
      :okText="添加"
      :cancelText="返回"
      @ok="confirm"
      @cancel="cancel"
    >
      <a-form :form="form">
        <a-form-item label="上级菜单"
                     :label-col="formItemLayout.labelCol"
                     :wrapper-col="formItemLayout.wrapperCol"
        >
          <a-select
            v-decorator="['menuSuperior']"
            placeholder="请选择上级菜单"
            @change="handleMenuChange"
          >
            <a-select-option v-for='(item, index) in menu_superior_list' 
                             :value="item.id"
                             :key=index
            >
              {{ item.name }}
            </a-select-option>
          </a-select>
        </a-form-item>

        <a-form-item label="菜单类型"
                     :label-col="formItemLayout.labelCol"
                     :wrapper-col="formItemLayout.wrapperCol"
        >
          <a-radio-group 
            @change="handleMenuTypeChange" 
            v-model="menu_type"
          >
            <a-radio value="1">
              目录
            </a-radio>
            <a-radio value="2">
              菜单
            </a-radio>
            <a-radio value="3">
              按钮
            </a-radio>
          </a-radio-group>
        </a-form-item>

        <a-form-item label="图标"
                     :label-col="formItemLayout.labelCol"
                     :wrapper-col="formItemLayout.wrapperCol"
        >
          <a-select
            v-decorator="['icon']"
            placeholder="请选择图标"
            @change="handleMenuChange"
          >
            <a-select-option v-for='(item, index) in menu_superior_list' 
                             :value="item.id"
                             :key=index
            >
              {{ item.name }}
            </a-select-option>
          </a-select>
        </a-form-item>

        <a-form-item label="显示顺序"
                     :label-col="formItemLayout.labelCol"
                     :wrapper-col="formItemLayout.wrapperCol"
        >
          <a-input type="text"
                   v-decorator="[
                     'sort',
                     {rules: [{ required: true, message: '请填写显示顺序' }]}]"
                   placeholder="请填写显示顺序"
          />
        </a-form-item>
       

        <a-form-item label="菜单名称"
                     :label-col="formItemLayout.labelCol"
                     :wrapper-col="formItemLayout.wrapperCol"
        >
          <a-input type="text"
                   v-decorator="[
                     'menu',
                     {rules: [{ required: true, message: '请填写菜单' }]}]"
                   placeholder="请填写菜单"
          />
        </a-form-item>

        <a-form-item label="菜单描述"
                     :label-col="formItemLayout.labelCol"
                     :wrapper-col="formItemLayout.wrapperCol"
        >
          <a-input type="text"
                   v-decorator="['meun_desc']"
                   placeholder="填写添加的菜单功能描述，便于使用者理解"
          />
        </a-form-item>

        <a-form-item label="帮助链接"
                     :label-col="formItemLayout.labelCol"
                     :wrapper-col="formItemLayout.wrapperCol"
        >
          <a-input type="text"
                   v-decorator="[
                     'url',
                     {rules: [{ validator: handleUrl }], validateTrigger: 'blur'}]"
                   placeholder="请输入帮助文档链接"
          />
        </a-form-item>
      </a-form>
    </a-modal>
  </div>
</template>

<script>
export default {
  name: 'AddMenu',
  components: {},
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },
   data() {
    const formItemLayout = {
      labelCol: { span: 5 },
      wrapperCol: { span: 18 }
    };
    return {
      formItemLayout,
      form: this.$form.createForm(this),
      menu_superior_list: [{
        name: "系统设置",
        id: "1110"
      },
      {
        name: "物业管理",
        id: "1111"
      }],
      // 菜单类型
      menu_type: '1'
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
    // 上级菜单变化
    handleMenuChange(value){
      console.log(value);
      // this.form.setFieldsValue({
      //   menuSuperior: value
      // });
    },
    handleMenuTypeChange(value) {
      console.log(value);
    },
    handleUrl(rule, value, callback) {
        const reg = /(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&:/~\+#]*[\w\-\@?^=%&/~\+#])?/
        
        if (value && !reg.test(value)) {
            callback('请输入正确的网址！')
        }

        // Note: 必须总是返回一个 callback，否则 validateFieldsAndScroll 无法响应
        callback()
    },
    confirm() {
      this.form.validateFields(err => {
        if (!err) {
          // console.info('success');
          console.log(this.menuSuperior)
          console.info(this.form);
          // this.cancel()
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
