<template>
    <!--Pagina inicio de -->

   <div class="inicio">
    <div class="container">
        <p class="h1 mt-3">Hola, {{name}}</p>
        <p class="h3 mt-3 text-muted">¡Bienvenido de nuevo!</p>
    </div>
   </div>
  </template>
  
  <style scoped>
    .inicio{
        min-height: 100vh;
    }
  </style>

<script lang="ts" setup>
import {auth} from "@/main"
import {ref} from "vue"

const name = ref(auth.currentUser?.email)


</script>