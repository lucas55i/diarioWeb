<template>
 <div class="contianer">
 <c-form-control>
          <c-stack spacing="24px">
              <c-box>
                <c-form-label for="username">Nome</c-form-label>
                <c-input
                  ref="firstField"
                  id="username"
                  placeholder="Digite seu nome"
                />
              </c-box>

              <c-box>
                <c-form-label for="desc">Conteúdo do Post</c-form-label>
                <c-textarea id="desc" />
              </c-box>
          </c-stack>
          <c-drawer-footer>
        <c-button variant="outline" mr="3" @click="isOpen = false">Cancelar</c-button>
        <c-button variant-color="blue">Publicar Post</c-button>
      </c-drawer-footer>
        </c-form-control>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  components: {

  },
  data() {
    return {
      isOpen: false
    }
  },
  computed: {
   
  },
  methods: {
    
  }
})
</script>
<style>

</style>
