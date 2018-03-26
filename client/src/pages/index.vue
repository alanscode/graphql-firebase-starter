<template>
  <q-page padding class="docs-input row justify-center">
    <div style="width: 500px; max-width: 90vw;">
      <q-spinner color="teal-4" size="80px" v-show="once.length==0" />
      <ul>
        <li v-for="(session,i) in parsed" :key="i">{{session.limit + ' ' + session.game}}</li>
      </ul>
      <button @click="clicked" class="button">Click Me</button>
    </div>
  </q-page>
</template>

<script>
import gql from 'graphql-tag'
 export default {
    data() {
      return {
        once:'',
      }
    },
    apollo:{
      once: gql`{ once(path:"pokerlogs/users/tJCOV0LLGlTU4NlRbJUd4CGcV9n2/sessions") }`
    },
    methods:{
      clicked(){        
        debugger
        console.log('clicked')
      }
    },
    computed:{
      parsed(){
        return this.once ? JSON.parse(this.once) : ''
      }
    },
    mounted(){
      console.log(this.parsed)
    }
  }
</script>
