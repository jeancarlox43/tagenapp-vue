<template>
    <div class="formEnvia">
        <div class="form w-100">
            <input v-model="message" type="text" class="form-control" id="inputMessage">
            <button class="btn btn-warning regist mt-4" @click.prevent="enviarMe">
                Enviar <i class="fa-solid fa-arrow-right"></i>
            </button>
        </div>
    </div>    
</template>

<style>

</style>

<script lang="ts" setup>
import { ref } from "vue"
import {auth, db} from "@/main"
import { addDoc, collection } from "@firebase/firestore"
import { showMessage } from '../helpers/showMessage'

const message = ref('')

const enviarMe = async () => {

    try {
        const docRef = await addDoc(collection(db, "chats"), {
            text: message.value,
            time: Date.now(),
            uid: auth.currentUser?.uid,
            displayName: auth.currentUser?.email
        });
        message.value = "";
    } catch (error) {
        showMessage("Algo esta mal", "error")
    }


}
</script>
