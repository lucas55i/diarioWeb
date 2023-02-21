<template>
  <div class="add-post-container">
    <c-form-control ref="criarPostForm" is-required>
      <c-stack spacing="24px">
        <c-box>
          <c-form-label class="label" for="username">Nome</c-form-label>
          <c-input type="text" v-model="post.author" id="author" placeholder="Digite seu nome" />
        </c-box>

        <c-box>
          <c-form-label class="label" for="desc">Conteúdo do Post</c-form-label>
          <c-textarea aria-required="true" id="conteudo" v-model="post.conteudo" />
        </c-box>
      </c-stack>
      <c-drawer-footer>
        <c-button variant="outline" @click="close()">Cancelar</c-button>
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
.label {
  color: #eee;
}

.add-post-container {
  margin: 15px 0;
  width: 100%;
}

.add-post-input {
  height: 40px;
  padding: 0 10px;
  border-radius: 5px;
  border: none;
  flex: 2;
  background-color: #444;
  font-size: 16px;
}
</style>
