<template>
    <!--Componente para ingresar al usuario-->
    <a v-if="ingres" class="btn btn-light ingresa desconectado" data-bs-toggle="modal" data-bs-target="#ingreModal" href="#"
        role="button">Ingresa</a>
    
    <div class="modal fade" id="ingreModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content bg-dark text-white">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Ingresar</h1>
                    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"
                        aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form action="" id="login-form">
                        <label for="email">Email:</label>
                        <input v-model="usuario.email" id="login-email" type="email" class="form-control mb-3" placeholder="Email" required>
                        <label for="password">Contraseña:</label>
                        <input v-model="usuario.password" id="login-password" type="password" class="form-control mb-3" placeholder="******" required>
                        <button type="submit" class="btn btn-warning regist w-100 mb-4" @click.prevent="authUser">Ingresar</button>
    
                    </form>
                    <button type="button" class="btn btn-warning regist">Google</button>
                </div>
            </div>
        </div>
    </div>
    
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router';
import { Modal } from "bootstrap";
import { ref, onMounted } from 'vue';
import { auth } from '@/main'
import { signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth'
import { showMessage } from '../helpers/showMessage'

let usuario = ref({
    email: '',
    password: '',

})

//variable para los estados del boton ingresa
const ingres = ref(true);

let router = useRouter();

onMounted(() => {
    onAuthStateChanged(auth, (user) => {
        if (user) {
            ingres.value = false;
        } else {
            ingres.value = true;
        }
    })
});


const authUser = () => {
    signInWithEmailAndPassword(auth, usuario.value.email, usuario.value.password).then(() => {
        const modal = Modal.getInstance(document.querySelector('#ingreModal'))
        modal.hide()
        router.push('/inicio');
        showMessage('Bienvenido ' + usuario.value.email)
    })
        .catch((error) => {
            if (error.code === "auth/wrong-password") {
                showMessage("Contraseña incorrecta", 'error');
            } else if (error.code === "auth/user-not-found") {
                showMessage("Usuario no existe", 'error');

            } else {
                showMessage("Algo esta mal", "error")
            }
        });

}

</script>

