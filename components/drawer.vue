<template>
  <div class="contianer">
    <c-button ref="btnRef" variant-color="blue" @click="isOpen = true">Criar Post</c-button>
    <c-drawer :isOpen="isOpen" placement="left" :on-close="close" :initialFocusRef="() => $refs.inputInsideModal">
      <c-drawer-overlay />
      <c-drawer-content>
        <c-drawer-close-button />
        <c-drawer-header>Crie Seu Post</c-drawer-header>

        <c-drawer-body>
          <addUser @postCriado="getPosts()" @closeDrawer="close()" />
        </c-drawer-body>
      </c-drawer-content>

    </c-drawer>
    <CDivider />

    <infoPost />
</div>
</template>

<script lang="ts">
import Vue from "vue";
import addUser from "~/components/add_post.vue";
import infoPost from '~/components/info_post.vue'

export default Vue.extend({
  name: "IndexPage",
  components: {
    addUser,
    infoPost
  },
  data() {
    return {
      isOpen: false,
    };
  },
  computed: {
  },
  methods: {
    close() {
      this.isOpen = false;
    },
    getPosts() {
      this.$store.dispatch("text/consultarPosts");
    },
  },
  created() {
    this.getPosts();
  },
});
</script>
<style>
.container {
  padding-top: 20px;
  padding-left: 20px;
}
</style>
