<template>
    <Header/>
    <Footer/>
</template>
<script lang="ts" setup>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
</script>
<style>



.ingresa{
    background: #F4F5F7;
    color: #FE9A22;
    border-radius: 6px;
    -webkit-border-radius: 6px;
    -moz-border-radius: 6px;
    -ms-border-radius: 6px;
    -o-border-radius: 6px;

}

.regist{
    background: #FE9A22;
    color: #F9FAFF;
    border-radius: 6px;
    -webkit-border-radius: 6px;
    -moz-border-radius: 6px;
    -ms-border-radius: 6px;
    -o-border-radius: 6px;
}


@media screen and (min-width:992px) {
    .navbar-brand img{
        width: 100px;
    }   
}
</style>
