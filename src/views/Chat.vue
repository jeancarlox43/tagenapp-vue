<template>
    <div class="chat">
        <div class="container">
            <p class="h1 mt-5 text-center">Chats</p>

            <div v-for="item of messages" :key="item.id" 
                class="card mb-3 " 
                :class="item.uid === userChat.uid ? ' text-bg-warning ms-auto' : ' text-bg-light'"
                style="width: 300px; "
                >
                
                <div class="card-body">
                    <h6 class="card-subtitle fw-bold mb-2">{{item.displayName}}</h6>
                    <p class="card-text">{{item.text}}</p>
                </div>
            </div>

        </div> 

        <div class="container">
            <FormEnvia/>
        </div>
    </div>
</template>

<script lang="ts" setup>
import FormEnvia from '@/components/FormEnvia.vue'
import { collection, query, onSnapshot, orderBy} from "firebase/firestore";
import {auth, db} from "@/main"
import {ref} from 'vue'
    const userChat = ref(auth.currentUser);

    const messages = ref([])

const q = query(collection(db, "chats"), orderBy("time"));
const unsubscribe = onSnapshot(q, (snapshot) => {
  snapshot.docChanges().forEach((change) => {
    if (change.type === "added") {
        //console.log("Mensaje: ", change.doc.id, change.doc.data());
        messages.value.push({
            id: change.doc.id,
            ...change.doc.data(),
        });
    }
  });
});

</script>

<style scoped>
    .chat{
        min-height: 100vh;
    }
</style>>
