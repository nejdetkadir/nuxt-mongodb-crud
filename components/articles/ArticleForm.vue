<template lang="pug">
  form
    h1.mb-5.text-center {{isUpdate ? "UPDATE" : "CREATE"}} ARTICLE FORM
    .alert.alert-danger.text-center(v-if="validError") {{validError}}
    .mb-3
      label.form-label Article title
      input.form-control(type='text' v-model="form.title")
    .mb-3
      label.form-label Article text
      textarea.form-control(rows='5' v-model="form.text")
    button.btn(@click.prevent="submitForm" :class="{'btn-primary' : isUpdate, 'btn-success' : !isUpdate}") {{isUpdate ? "UPDATE" : "CREATE"}} ARTICLE
</template>

<script>
export default {
  data() {
    return {
      form: {
        title: '',
        text: ''
      },
      validError: ''
    }
  },
  methods: {
    async submitForm() {
      if (this.form.title.length >= 4 && this.form.text.length >= 4) {
        let res = this.isUpdate ? await this.$axios.put('/api/articles/update', this.form) : await this.$axios.post('/api/articles/new', this.form)
        if (res.status == 201 || res.status == 200) {
          this.$router.push(`/articles/${res.data._id}`)
        } else {
          this.validError = res.data
        }
      } else {
        this.validError = 'Validation error'
      }      
    }
  },
  props: {
    isUpdate: {
      type: Boolean,
      default: false,
    }
  },
  created() {
    if (this.isUpdate) {
      this.$axios.get(`/api/articles/${this.$route.params.id}`)
      .then(res => {
        if (res.status == 200) {
          this.form = res.data
        } else {
          this.$router.push('/?status?notfound')
        }
      })
    }
  }
}
</script>