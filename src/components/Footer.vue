<template>
     <footer class="footer  bg-dark text-white ">
        <div class="container fluid">
            <div class="row p-3 pb-2">
                <div class="col-xs-12 col-md-6 col-lg-4">
                    <p>&copy; 2022 Tagenapp, Inc.</p>
                </div>
                <div class="col-xs-12 col-md-6 col-lg-4">
                    <img id="img-footer" src="../assets/logo.png" alt="logo">
                </div>
                <div class="col-xs-12 col-md-6 col-lg-4">
                    <p class="h5 mb-3">Nuestras redes</p> 
                    <ul class="col-3 list-unstyled">
                        <li class="d-flex justify-content-between">
                            <!--FB-->
                            <a href="" class="text-reset">
                                <i class="fa-brands fa-facebook-f"></i>
                            </a>
                            <!--Instagram-->
                            <a href="" class="text-reset">
                                <i class="fab fa-instagram"></i>
                            </a>
                            <!--Twitter-->
                            <a href="" class="text-reset">
                                <i class="fa-brands fa-twitter"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
      </footer>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'Footer'
})
</script>

<style scoped>
#img-footer{
    width: 80px;
}
</style>