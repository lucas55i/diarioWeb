<template>
 <div class="contianer">
    <c-button ref="btnRef" @click="isOpen =true">Criar Post</c-button>

    <c-drawer :isOpen="isOpen" placement="left" :on-close="close" :initialFocusRef="()=>$refs.inputInsideModal">
      <c-drawer-overlay />
      <c-drawer-content>
      <c-drawer-close-button />
      <c-drawer-header>Crie Seu Post</c-drawer-header>

      <c-drawer-body>
          <addUser/>
      </c-drawer-body>

      <c-drawer-footer>
        <c-button variant="outline" mr="3" @click="isOpen = false">Cancelar</c-button>
        <c-button variant-color="blue">Publicar Post</c-button>
      </c-drawer-footer>
      </c-drawer-content>
    </c-drawer>
    <CDivider/>

  </div>
</template>

<script lang="ts">
import Vue from "vue";
import addUser from "~/components/add_post.vue"

export default Vue.extend({
  name: 'IndexPage',
  components: {
    addUser
  },
  inject: ['$chakraColorMode', '$toggleColorMode'],
  data() {
    return {
      isOpen: false
    }
  },
  computed: {
   
  },
  methods: {
    close () {
      this.isOpen = false
    }
  }
})
</script>
<style>
.container{
  padding-top: 20px;
  padding-left: 20px;
}
</style>
