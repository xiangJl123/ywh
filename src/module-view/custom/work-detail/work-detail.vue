<template lang="">
  <div class="work-detail">
    <div class="work-status">
      <!-- <span>{{ workTypeList[currentType].name }}</span> -->
      <a-tag color="pink">
        {{ workTypeList[currentType].name }}
      </a-tag>
    </div>
    <div class='content'>
      <div class="item" v-for="(item,index) in data" :key="index">
        <a-avatar
          slot="avatar"
          :src="item.avatar"
        />
        <div class="item-content">
          <div class="title">
            <span>{{ item.name }}</span>
            <span>{{ item.phone }}</span>
            <span>{{ item.address }}</span>
          </div>
          <div class="con">
            {{ item.content }}
          </div>
          <div class="img-warp">
            <span v-for="(i,imgindex) in item.imgList" :key="imgindex">
              <img
                width="272"
                :src="i.url"
              />
            </span>
          </div>
          <div class="time">
            {{ item.time }}
          </div>
        </div>
      </div>

      <!-- 状态为2，3才有编辑器 -->
      <div class="item">
        <a-avatar
          slot="avatar"
          :src="avatar"
        />
        <div class="item-content">
          <a-textarea placeholder="请输入处理内容" :rows="4" style="margin-bottom:10px" />
          <a-upload
            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
            :multiple="true"
            :fileList="fileList"
            @change="handleChange"
          >
            <a-button> <a-icon type="upload" />上传图片 </a-button>
          </a-upload>
        </div>
      </div>
    </div>
    <div class="btn-group">
      <a-button type="primary" @click="submit">
        提交进度
      </a-button>
      <a-button type="primary" @click="end">
        完结工单
      </a-button>
      <a-button @click="back">
        返回
      </a-button>
    </div>
  </div>
</template>
<script>
export default {
  name: "WorkDetail",
  data(){
    return {
      currentType: "1",
      // 工单状态
      workTypeList: [
        {status: "1", name: "待处理", button: []},
        {status: "2", name: "待处理", button: []},    // 待处理，未回复
        {status: "3", name: "待处理", button: []},    // 待处理，已回复
        {status: "4", name: "已完结", button: []},
        {status: "5", name: "已完成", button: []},
        {status: "6", name: "已完关闭", button: []}
      ],
      data: [
        {
          href: 'https://www.antdv.com/',
          name: "仗",
          phone: "19087654342",
          address: "hsuashad",
          avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
          content: '内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容',
          imgList: [{url: "https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"},
          {url: "https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"}],
          time: "2019-12-31  12:00"
        },
        {
          href: 'https://www.antdv.com/',
          name: "仗",
          phone: "19087654342",
          address: "hsuashad",
          avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
          content: '内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容',
          imgList: [{url: "https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"},
          {url: "https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"}],
          time: "2019-12-31  12:00"
        }
        
      ],
      avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
      headers: {
          authorization: 'authorization-text'
      },
      fileList: []
    }
  },
  methods: {
    handleChange(info) {
      let fileList = [...info.fileList];

      // 1. Limit the number of uploaded files
      //    Only to show two recent uploaded files, and old ones will be replaced by the new
      fileList = fileList.slice(-2);

      // 2. read from response and show file link
      fileList = fileList.map(file => {
        if (file.response) {
          // Component will show file.url as link
          file.url = file.response.url;
        }
        return file;
      });

      this.fileList = fileList;
    },
    submit(){

    },
    end(){},
    back(){}
  }
}
</script>
<style lang="less" scoped>
.work-detail{
  // 状态
  .work-status{}

  .content{
    .item{
      margin-bottom: 20px;
      padding-right: 20px;
      min-height: 70px;
      .ant-avatar{
        width:50px;
        height: 50px;
        float:left;
      }
      .item-content{
        
        margin-left: 90px;
        .title{
          color:#777;
          line-height: 35px;
          span{
            margin-right: 20px;
          }
        }
        .con{
          margin-bottom:10px;
        }
        .img-warp{
          span{
            display: inline-block;
            width:150px;
            height: 150px;
            border:1px solid #ddd;
            border-radius: 5px;
            margin-right: 10px;
            img{
              float: left;
              width: 100%;
              height: 100%;
              
            }
          }
        }
        .time{
          color:#aaa;
        }
      }
    }
  }

  .btn-group{
    padding:20px 0 20px 80px;

    button{
      margin-right: 20px;
    }
  }
}
</style>