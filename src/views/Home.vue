<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld :msg="'Hello World!'"/>
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import { Component, Vue } from 'vue-property-decorator';


@Component({
  name: 'home',
  components: {
    HelloWorld
  }
})
export default class Home extends Vue {}
</script>
