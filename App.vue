<template>
  <setup v-if="isLoaded"></setup>
</template>

<script>
import { Font } from "expo";
import Setup from "./src/setup.vue";
  export default {
    data () {
      return {
        isLoaded: false
      }
    },
    async mounted () { 
      await Font.loadAsync({
        'Roboto': require('native-base/Fonts/Roboto.ttf'),
        'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
        'Ionicons': require('@expo/vector-icons/fonts/Ionicons.ttf'),
      });
      this.isLoaded = true;
    },
    components: { Setup }
  };
</script>