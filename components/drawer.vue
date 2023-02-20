<template>
  <div class="contianer">
    <c-button ref="btnRef" variant-color="blue" @click="isOpen = true">Criar Post</c-button>
    <c-drawer
      :isOpen="isOpen"
      placement="left"
      :on-close="close"
      :initialFocusRef="() => $refs.inputInsideModal"
    >
      <c-drawer-overlay />
      <c-drawer-content>
        <c-drawer-close-button />
        <c-drawer-header>Crie Seu Post</c-drawer-header>

        <c-drawer-body>
          <addUser @postCriado ="getPosts()" @closeDrawer="close()" />
        </c-drawer-body>
      </c-drawer-content>
    </c-drawer>
    <CDivider />

    <c-stack :spacing="5"  v-for="user in posts">
      <c-box :p="5" shadow="md" border-width="1px">
        <c-text><strong>Autor: </strong> {{user.author}}</c-text>
        <c-text :mt="4">{{user.conteudo}}</c-text>
      </c-box>
      <br>
    </c-stack>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import addUser from "~/components/add_post.vue";

export default Vue.extend({
  name: "IndexPage",
  components: {
    addUser,
  },
  data() {
    return {
      isOpen: false,
    };
  },
  computed: {
    posts(): any {
      return this.$store.state.text.posts;
    },
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
