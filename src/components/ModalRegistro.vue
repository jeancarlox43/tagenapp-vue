<template>
   <!--Componente para registrar al usuario-->
   <a class="btn btn-warning regist desconectado" data-bs-toggle="modal" data-bs-target="#registModal"  href="#" role="button">Regístrate</a>
   
      <div class="modal fade" id="registModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content bg-dark text-white">
                 <div class="modal-header">  
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Registro</h1>
                    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                 <div class="modal-body">
                    <form action="" id="regis-form">
                        <label for="email">Email:</label>
                        <input v-model="usuario.email" type="email" id="regis-email" class="form-control mb-3" placeholder="Email" required>

                        <label for="password">Contraseña:</label>
                        <input v-model="usuario.password"  type="password" id="regis-password" class="form-control mb-3" placeholder="******" required>

                        <label for="confirmpassword">Confirmar Contraseña:</label>
                        <input v-model="usuario.confirPassword" type="password" id="regis-password" class="form-control mb-3" placeholder="******" required>
                        
                        <button type="submit"   class="btn btn-warning regist" @click.prevent="regisUser">Registrar</button>
                    </form>
                </div>
        </div>
        </div>
     </div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router';
import {ref} from 'vue'
import {showMessage} from '../helpers/showMessage'
import {Modal} from "bootstrap";
import {auth} from '@/main'
import {createUserWithEmailAndPassword} from 'firebase/auth'
   let usuario = ref({
      email: '',
      password: '',
      confirPassword: ''
   })

   let router = useRouter();
  


   const regisUser = () =>{
        createUserWithEmailAndPassword(auth, usuario.value.email, usuario.value.password).then(() =>{
            const registModal = document.querySelector('#registModal')
            const modal = Modal.getInstance(registModal)
            modal.hide()
            router.push('/inicio');
            showMessage('Bienvenido '+ usuario.value.email)
        })
        .catch((error) =>{
           if (error.code === 'auth/email-already-in-use') {
              showMessage("El Correo ya esta en uso", "error")
           } else if (error.code === 'auth/invalid-email') {
              showMessage("Correo Invalido", "error")
           } else if (error.code === 'auth/weak-password') {
              showMessage("Contraseña muy debil", "error")
           } else if (error.code) {
              showMessage("Algo esta mal", "error")
           }
        });
        
    }

   
  
</script>

<style scoped>
   
</style>

