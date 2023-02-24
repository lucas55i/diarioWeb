<template>
    <div class="card-post">
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
});
</script>
<style>
.card-post{
    background-color: #444;
    margin: 8px 0;
    padding: 15px 20px;
    border-radius: 5px;
    justify-content: space-between;
    color: #eee;
    align-items: center;
}
</style>
   