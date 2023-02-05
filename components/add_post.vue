<template>
  <div class="contianer">
    <c-form-control ref="criarPostForm" is-required>
      <c-stack spacing="24px">
        <c-box>
          <c-form-label for="username">Nome</c-form-label>
          <c-input type="text" v-model="post.author" id="username" placeholder="Digite seu nome" />
        </c-box>

        <c-box>
          <c-form-label for="desc">Conteúdo do Post</c-form-label>
          <c-textarea aria-required="true" id="desc" v-model="post.conteudo" />
        </c-box>
      </c-stack>
      <c-drawer-footer>
        <c-button variant="outline" mr="3" @click="close()">Cancelar</c-button>
        <c-button variant-color="blue" @click="criarPost()">Publicar Post</c-button>
      </c-drawer-footer>
    </c-form-control>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { AddPost } from "~/core/models/post.model";

export default Vue.extend({
  components: {},
  data() {
    return {
      isOpen: false,
      post: {} as AddPost,
    };
  },
  computed: {},
  methods: {
    async criarPost() {
      const addPost = { ...this.post };
      if (!this.post.author || !this.post.conteudo) {
        this.$toast({
          title: 'Preencha todos os campos',
          status: 'warning',
          duration: 2000
        })
      } else {
        await this.$store.dispatch("text/criarPost", addPost);
        this.$emit('postCriado')
        this.$emit('closeDrawer')
      }

    },

    close() {
      this.$emit('closeDrawer')
    },
  },
});
</script>
<style>
</style>
