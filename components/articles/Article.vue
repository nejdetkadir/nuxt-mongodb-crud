<template lang="pug">
  .card.text-center.shadow.bg-body.rounded
    .card-header {{article.title}}
    .card-body
      p.card-text {{ isDetails ? article.text : article.text.substring(0, 50)}}
      .actions
        nuxt-link(:to="'/articles/'+article._id" class="btn btn-primary btn-sm" v-if="!isDetails") Read
        nuxt-link(:to="'/articles/'+article._id + '/edit'" class="btn btn-warning btn-sm") Update
        button.btn.btn-danger.btn-sm(@click.prevent="deleteArticle") Delete
    .card-footer.text-muted Created at
</template>

<script>
export default {
  methods: {
    async deleteArticle() {
      let res = await this.$axios.delete('/api/articles/delete', {data: {id: this.article._id}}, {})
      if (res.data !== null && res.status == 200) {
        this.isDetails ? this.$router.push('/') : this.$nuxt.refresh()
      } else {
        this.$router.push('/?status=deleteerror')
      }      
    }
  },
  props: {
    isDetails: {
      type: Boolean,
      default: false,
    },
    article: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.btn{
  margin: 2px 2px 2px 2px;
}
</style>