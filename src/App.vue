<template>
  <div class="bg-light-cyan--bg min-h-screen">
    <div class="header bg-primary bg-cover bg-no-repeat">
    </div>
    <div class="container">
      <div v-if="isFiltered" class="bg-white px-3 py-3 rounded-md flex justify-between shadow-base transform -translate-y-1/2 lg:px-5">
        <div class="job-filter_tags flex flex-wrap gap-y-2">
          <filter-tags @delBtn="delFilter(tag)" v-for="tag in filteredTags" :key="tag">
            {{tag}}</filter-tags>
        </div>
        <button @click="delAllfilter" class="hover:text-primary hover:underline text-dark-cyan">Clear</button>
      </div>
      <div class="job-cards flex flex-col gap-y-8 lg:gap-y-5 py-4">
        <job-card v-for="job in filteredJobs" :key="job.id" 
        @addRoleFilter="addRoleFilter"
        @addLevelFilter="addLevelFilter"
        @addLanguageFilter="addLanguageFilter"
        @addToolFilter="addToolFilter" 
        :job="job"/>
      </div>
      <div class="text-center mt-2 p-2 text-dark-cyan opacity-70 text-[12px] sm:text-base">
    Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
    Coded by <a href="#">Metis T</a>.
      </div>
    </div>
  </div>
</template>

<script>
import JobCard from './components/JobCard.vue'
import Tags from './components/Tags.vue'
import FilterTags from './components/FilterTags.vue'
import photosnap from './assets/icon/photosnap.svg'
import manage from './assets/icon/manage.svg'
import account from './assets/icon/account.svg'
import myhome from './assets/icon/myhome.svg'
import loopStudios from './assets/icon/loop-studios.svg'
import faceit from './assets/icon/faceit.svg'
import shortly from './assets/icon/shortly.svg'
import insure from './assets/icon/insure.svg'
import eyecamCo from './assets/icon/eyecam-co.svg'
import theAirFilterCompany from './assets/icon/the-air-filter-company.svg'
export default {
  name: 'App',
  components: {
    JobCard,
    Tags,
    FilterTags
  },
  data(){
    return{
      jobs:[
        {
          "id": 1,
          "company": "Photosnap",
          "logo": photosnap,
          "new": true,
          "featured": true,
          "position": "Senior Frontend Developer",
          "role": "Frontend",
          "level": "Senior",
          "postedAt": "1d ago",
          "contract": "Full Time",
          "location": "USA Only",
          "languages": ["HTML", "CSS", "JavaScript"],
          "tools": []
        },
        {
          "id": 2,
          "company": "Manage",
          "logo": manage,
          "new": true,
          "featured": true,
          "position": "Fullstack Developer",
          "role": "Fullstack",
          "level": "Midweight",
          "postedAt": "1d ago",
          "contract": "Part Time",
          "location": "Remote",
          "languages": ["Python"],
          "tools": ["React"]
        },
        {
          "id": 3,
          "company": "Account",
          "logo": account,
          "new": true,
          "featured": false,
          "position": "Junior Frontend Developer",
          "role": "Frontend",
          "level": "Junior",
          "postedAt": "2d ago",
          "contract": "Part Time",
          "location": "USA Only",
          "languages": ["JavaScript"],
          "tools": ["React", "Sass"]
        },
        {
          "id": 4,
          "company": "MyHome",
          "logo": myhome,
          "new": false,
          "featured": false,
          "position": "Junior Frontend Developer",
          "role": "Frontend",
          "level": "Junior",
          "postedAt": "5d ago",
          "contract": "Contract",
          "location": "USA Only",
          "languages": ["CSS", "JavaScript"],
          "tools": []
        },
        {
          "id": 5,
          "company": "Loop Studios",
          "logo": loopStudios,
          "new": false,
          "featured": false,
          "position": "Software Engineer",
          "role": "FullStack",
          "level": "Midweight",
          "postedAt": "1w ago",
          "contract": "Full Time",
          "location": "Worldwide",
          "languages": ["JavaScript"],
          "tools": ["Ruby", "Sass"]
        },
        {
          "id": 6,
          "company": "FaceIt",
          "logo": faceit,
          "new": false,
          "featured": false,
          "position": "Junior Backend Developer",
          "role": "Backend",
          "level": "Junior",
          "postedAt": "2w ago",
          "contract": "Full Time",
          "location": "UK Only",
          "languages": ["Ruby"],
          "tools": ["RoR"]
        },
        {
          "id": 7,
          "company": "Shortly",
          "logo": shortly,
          "new": false,
          "featured": false,
          "position": "Junior Developer",
          "role": "Frontend",
          "level": "Junior",
          "postedAt": "2w ago",
          "contract": "Full Time",
          "location": "Worldwide",
          "languages": ["HTML", "JavaScript"],
          "tools": ["Sass"]
        },
        {
          "id": 8,
          "company": "Insure",
          "logo": insure,
          "new": false,
          "featured": false,
          "position": "Junior Frontend Developer",
          "role": "Frontend",
          "level": "Junior",
          "postedAt": "2w ago",
          "contract": "Full Time",
          "location": "USA Only",
          "languages": ["JavaScript"],
          "tools": ["Vue", "Sass"]
        },
        {
          "id": 9,
          "company": "Eyecam Co.",
          "logo": eyecamCo,
          "new": false,
          "featured": false,
          "position": "Full Stack Engineer",
          "role": "Fullstack",
          "level": "Midweight",
          "postedAt": "3w ago",
          "contract": "Full Time",
          "location": "Worldwide",
          "languages": ["JavaScript", "Python"],
          "tools": ["Django"]
        },
        {
          "id": 10,
          "company": "The Air Filter Company",
          "logo": theAirFilterCompany,
          "new": false,
          "featured": false,
          "position": "Front-end Dev",
          "role": "Frontend",
          "level": "Junior",
          "postedAt": "1mo ago",
          "contract": "Part Time",
          "location": "Worldwide",
          "languages": ["JavaScript"],
          "tools": ["React", "Sass"]
        }
      ],
      roleFilters:[],
      levelFilters:[],
      toolFilters:[],
      languageFilters:[]
    }
  },
  methods:{
    addRoleFilter(txt){
      console.log(txt)
      this.roleFilters.includes(txt) ? '' : this.roleFilters.push(txt)

    },
    addLevelFilter(txt){
      this.levelFilters.includes(txt) ? '' : this.levelFilters.push(txt)
    },
    addLanguageFilter(txt){
      console.log(txt)
      this.languageFilters.includes(txt) ? '' : this.languageFilters.push(txt)
    },
    addToolFilter(txt){
      console.log(txt)
      this.toolFilters.includes(txt) ? '' : this.toolFilters.push(txt)
    },
    delFilter(tag){
      if(this.roleFilters.includes(tag)){
        return this.roleFilters = this.roleFilters.filter(item => item !== tag)
      }
      if(this.levelFilters.includes(tag)){
          return this.levelFilters = this.levelFilters.filter(item => item !== tag)
      }
      if(this.languageFilters.includes(tag)){
          return this.languageFilters = this.languageFilters.filter(item => item !== tag)
      }
      if(this.toolFilters.includes(tag)){
          return this.toolFilters = this.toolFilters.filter(item => item !== tag)
      }
    },
    delAllfilter(){
      this.roleFilters = []
      this.levelFilters = []
      this.languageFilters = []
      this.toolFilters = []
    },

  },
  computed:{
    filteredTags(){
      return [...this.roleFilters,...this.levelFilters,...this.languageFilters,...this.toolFilters]
    },
    filteredJobs(){
      let filterResults= this.jobs
      // no filter is applied
      if(!this.isFiltered){
        return this.jobs
      }
      if(this.roleFilters.length > 0){
        filterResults = this.jobs.filter(job=>job.role == this.roleFilters)
      }
      if(this.levelFilters.length > 0){
        filterResults = filterResults.filter(job=>job.level == this.levelFilters)
      }
      if(this.languageFilters.length > 0){
        this.languageFilters.forEach(lang=>{
          filterResults = filterResults.filter(job=>job.languages.includes(lang))
        })
      }
      if(this.toolFilters.length > 0){
        this.toolFilters.forEach(t=>{
          filterResults = filterResults.filter(job=>job.tools.includes(t))
        })
      }  
      return filterResults
    },
    isFiltered(){
      if(this.filteredTags.length > 0){
        return true
      }
      return false
    }
  },
  
}
</script>

<style lang="scss">
.header{
  background: url(./assets/icon/bg-header-desktop.svg);
  height:150px;
}

</style>
