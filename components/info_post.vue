<template>
    <div class="contianer">
        <c-stack :spacing="5" v-for="user in posts">
            <c-box :p="5" shadow="md" border-width="1px">
                <c-text><strong>Autor: </strong> {{ user.author }}</c-text>
                <c-text :mt="4">{{ user.conteudo }}</c-text>
            </c-box>
            <br>
        </c-stack>
    </div>
</template>
  
<script lang="ts">
import Vue from "vue";

export default Vue.extend({
    components: {},
    data() {
        return {

        };
    },
    computed: {
        posts(): any {
            return this.$store.state.text.posts;
        },
    },
    methods: {
        getPosts() {
            this.$store.dispatch("text/consultarPosts");
        },
    },
    created() {
        this.getPosts();
    },
});
</script>
<style></style>
  