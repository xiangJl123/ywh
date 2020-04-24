<template lang="">
  <div class="staff">
    <a-row type="flex" :gutter="16">
      <a-col :md="5" :sm="24">
        <staff-left />
      </a-col>
      <a-col :md="24-5" :sm="24">
        <staff-right />
      </a-col>
    </a-row>
  </div>
</template>
<script>
import {StaffLeft, StaffRight } from './components'
export default {
  components: {StaffLeft, StaffRight},
  data(){
    return {
      currentOrgCode: ""
    }
  }
}
</script>