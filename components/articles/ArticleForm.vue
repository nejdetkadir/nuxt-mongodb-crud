<template lang="pug">
  form
    h1.mb-5.text-center {{isUpdate ? "UPDATE" : "CREATE"}} ARTICLE FORM
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
      }
    }
  },
  methods: {
    submitForm() {
      if(this.isUpdate) {
        console.log('update form');
      } else {
        console.log('save form');
      }
    }
  },
  props: {
    isUpdate: {
      type: Boolean,
      default: false,
    },
    article: {
      type: Object,
      required: false
    }
  }
}
</script>