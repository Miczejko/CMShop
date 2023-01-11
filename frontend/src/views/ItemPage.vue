<template>
    <div>
        <div class="container">
            <h1>{{state.name}}</h1>
            <img :src="require('@/assets/' + state.image)">
            <h4> {{ state.price }}$</h4>
            <p>{{ state.description }}</p>
            <button @click="buy">Buy</button>
        </div>
    </div>
</template>

<script>
import ItemCrud from '@/modules/itemCrud'
import { useRoute } from 'vue-router'

export default {
    setup() {
        const route = useRoute();
        const { state, getItem } = ItemCrud();
        getItem(route.params.id);

        const buy = () => {
            window.alert("not avaible yet");
        }
        return {state, buy}
    },
}
</script>

<style scoped>
button{
    background-color: black;
    border-radius: 10px;
    width: 60px;
    height: 30px;
    color: white;
    transition-duration: 0.4s;
}
button:hover{
    width: 70px;
    box-shadow: 3px 3px 4px rgb(160, 160, 160);
} 
.container{
    background-color: rgba(255, 255, 255, 0.705);
    padding: 50px 0px;
}
</style>
