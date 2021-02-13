<template lang="pug">
  .container.mt-5.mb-5
    .row
      .col-md-12
        Article(:isDetails="true" :article="article")
</template>

<script>
export default {
  asyncData({$axios, params, redirect}) {
    return $axios.get(`/api/articles/${params.id}`)
    .then(res => {
      if (res.status == 200) {
        return { article: res.data }
      } else{
        throw new Error
      }
    }).catch(() => {
      redirect('/?status=notfound')
    })
  }
}
</script>