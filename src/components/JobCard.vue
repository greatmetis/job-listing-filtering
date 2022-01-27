<template>
<div class="relative job-card flex items-center shadow-base bg-white rounded px-2 pt-5 pb-4 mt-4 lg:gap-x-2 lg:px-6" :class="{'feature-border':isFeatured}">
  <div class="w-[60px] absolute top-[0px] transform -translate-y-1/2 lg:relative lg:transform-none lg:w-[88px]">
    <img :src="job.logo" alt="Company Logo">
  </div>
  <div class="flex flex-col flex-auto lg:flex-row lg:justify-between lg:items-center lg:gap-x-2 lg:relative">
    <!-- job card content -->
    <div class="lg:1/2 xl:w-2/3">
      <div class="flex items-center mb-1">
        <h2 class="text-primary mr-1 lg:mr-2 md:text-md">{{job.company}}</h2>
        <div class=" flex items-center flex-wrap gap-x-1">
          <span class="text-xs md:text-base uppercase py-1/2  px-2 text-white rounded-full bg-primary" v-if="job.new">new!</span>
          <span class="hidden xs:block text-xs md:text-base uppercase py-1/2 px-2 text-white rounded-full bg-very-dark-cyan" v-show="isFeatured">featured</span>
        </div>
      </div>
      <h1 class="text-black mb-1 hover:text-primary cursor-pointer md:text-lg">{{job.position}}</h1>
      <div class="text-dark-cyan flex justify-start lg:justify-start gap-x-2 items-center">
        <h3>{{job.postedAt}}</h3>
        <span>&#183;</span>
        <h3>{{job.contract}}</h3>
        <span>&#183;</span>
        <h3>{{job.location}}</h3>
      </div>
    </div>
    <!-- job card filters -->
    <div class="flex flex-wrap lg:1/2 xl:w-1/3 gap-y-2 mt-4 pt-3 justify-between lg:justify-end lg:mt-0 border-t-2 border-dark-cyan border-opacity-25  lg:p-0 lg:border-0">
      <Tags @click="getRoleFilter(job.role)">{{job.role}}</Tags>
      <Tags @click="getLevelFilter(job.level)">{{job.level}}</Tags>
      <Tags v-for="(lang,index) in job.languages" :key="index" @click="getLanguageFilter(lang)">{{lang}}</Tags>
      <Tags v-for="(tool,index) in job.tools" :key="index" @click="getToolFilter(tool)">{{tool}}</Tags>
    </div>
  </div>
</div>

</template>

<script>
import Tags from './Tags.vue'
export default {
props:{
  job:Object
},
components:{
  Tags
},
computed:{
  isFeatured(){
    return this.job.featured
  }
},
methods:{
  getRoleFilter(txt){
    this.$emit('addRoleFilter',txt) 
  },
  getLevelFilter(txt){
    this.$emit('addLevelFilter',txt) 
  },
  getToolFilter(txt){
    this.$emit('addToolFilter',txt) 
  },
  getLanguageFilter(txt){
    this.$emit('addLanguageFilter',txt) 
  }
},

}
</script>

<style lang="scss">


</style>