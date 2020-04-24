<template lang="">
  <div>
    <a-upload
      listType="picture"
      action="//jsonplaceholder.typicode.com/posts/"
      :previewFile="previewFile"
    >
      <a-button> <a-icon type="upload" /> 上传文件 </a-button>
      <a-button> <a-icon type="upload" /> 上传文章 </a-button>
    </a-upload>
  </div>
</template>
<script>
export default {
  name: "VoteRange",
  data() {
    
    return {
      
    };
  },
  methods: {
      previewFile(file) {
        console.log('Your upload file:', file);
        // Your process logic. Here we just mock to the same file
        return fetch('https://next.json-generator.com/api/json/get/4ytyBoLK8', {
          method: 'POST',
          body: file
        })
          .then(res => res.json())
          .then(({ thumbnail }) => thumbnail);
      }
    }
}
</script>
<style lang="less">
button{
  margin-right:10px;
}
</style>

