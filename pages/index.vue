<template lang="pug">
  .container.mt-5.mb-5
    .row
      .col-md-12(v-if="this.$route.query.status")
        .col-md-6.mx-auto
          .alert.alert-danger.text-center {{messages[this.$route.query.status]}}
      .col-sm-6.col-md-4.col-lg-3.p-3(v-for="(article, index) in articles" :key="index")
        Article(:article="article")
</template>

<script>
export default {
  data() {
    return {
      messages: {
        'notfound': 'Can not found an article',
        'deleteerror': 'An error occurred while deleting article'
      }
    }
  },
  asyncData({$axios}) {
    return $axios.get(`/api/articles`)
    .then(res => {
      return { articles: res.data }
    })
  },
  head() {
    return {
      title: 'Articles',
      meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'You can find all articles in this page'
      }
    ],
    }
  }
}
</script>