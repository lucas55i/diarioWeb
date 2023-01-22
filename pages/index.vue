<template>
  <drawer/>
</template>

<script lang="ts">
import Vue from "vue";
import drawer from "~/components/drawer.vue";
import { User } from "~/core/models/user.model";

export default Vue.extend({
  components: {
    drawer,
    
  },

  data() {
    return {}
  },
  computed: {
    users(): any {
      return this.$store.state.user.users as User;
    },
  },
  methods: {
    getUsers() {
      this.$store.dispatch("user/consultarUsuarios");
    },
  },
  created() {
    this.getUsers();
  },
});;
</script>

<style>

</style>