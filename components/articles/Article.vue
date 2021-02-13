<template lang="pug">
  .card.text-center.shadow.bg-body.rounded
    .card-header
      | Title
    .card-body
      p.card-text Text
      .actions
        nuxt-link(to="/articles/1" class="btn btn-primary btn-sm" v-if="!isDetails") Read
        nuxt-link(to="/articles/1/edit" class="btn btn-warning btn-sm") Update
        button.btn.btn-danger.btn-sm(@click.prevent="deleteArticle") Delete
    .card-footer.text-muted Created at
</template>

<script>
export default {
  methods: {
    deleteArticle() {
      console.log('clicked the delete button');
    }
  },
  props: {
    isDetails: {
      type: Boolean,
      default: false,
    }
  }
}
</script>

<style scoped>
.btn{
  margin: 2px 2px 2px 2px;
}
</style>