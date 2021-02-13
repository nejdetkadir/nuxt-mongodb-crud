<template lang="pug">
  div
    nav.navbar.navbar-expand-lg.navbar-dark.bg-dark
      .container-fluid
        nuxt-link(to="/" class="navbar-brand") NUXT-MONGO-CRUD
        button.navbar-toggler(type='button' data-bs-toggle='collapse' data-bs-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation')
          span.navbar-toggler-icon
        #navbarSupportedContent.collapse.navbar-collapse
          ul.navbar-nav.me-auto.mb-2.mb-lg-0
            li.nav-item
              nuxt-link(to="/new" class="nav-link") Create Article
    Nuxt
</template>