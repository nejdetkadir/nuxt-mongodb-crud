<template lang="pug">
  .container.mt-5.mb-5
    .row
      .col-md-6.mx-auto
        ArticleForm(:is-update="true")
</template>

<script>
export default {
  head() {
    return {
      title: 'Edit Article',
      meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'You can edit an article from this page'
      }
    ],
    }
  }
}
</script>