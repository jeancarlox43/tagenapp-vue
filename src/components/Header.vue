<template>
    <nav class="navbar navbar-expand-lg bg-dark navbar-dark">
        <div class="container-fluid">
            
            <router-link class="navbar-brand"  to="/">
                <img src="../assets/logo.png" alt="logo">
            </router-link> 
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <router-link class="nav-link" to="/about">Acerca de</router-link>
                </li>  
                <li class="nav-item">
                    <a class="nav-link" href="#">Explorar</a>
                </li>

                <li class="nav-item">
                    <a class="nav-link" href="#">Conviertete en freelance</a>
                </li>
            </ul>
            <div class="d-grid gap-3 d-md-flex justify-content-md-end">
                <ModalIngresa/>

                <ModalRegistro/>

                
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <router-link v-if="login" class="nav-link" to="/inicio">Inicio</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link v-if="login" class="nav-link" to="/chat">Mensajes</router-link>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link conectado " v-if="login"  href="#" id="cerrarSesion" @click="cerrarSesion">Cerrar Sesión</a>
                    </li>
                    
                </ul>
                
            </div>
          </div>
        </div>
    </nav>
    <router-view/>
    
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import ModalRegistro from './ModalRegistro.vue';
import ModalIngresa from './ModalIngresa.vue';
import { auth } from '@/main';
import { onAuthStateChanged, signOut } from 'firebase/auth';


const login = ref(false);
const router = useRouter();

onMounted(() => {
    onAuthStateChanged(auth, (user) =>{
        if(user){
            login.value = true;
        }else{
            login.value = false;
        }
    })
});

const cerrarSesion = () => {
    signOut(auth).then(() =>{
        router.push("/");    
    });

}

</script>

<style scoped>
.navbar .navbar-nav .nav-link{
    padding: .5em 1em;
}


.navbar-brand img{
    width: 80px;
}
</style>