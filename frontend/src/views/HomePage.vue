<template>
    <div>
        <div class="container">
            <div class="itemCard" v-for="item in state.items" :key="item._id" :id="item._id" @click="itemDetail(item._id)">
            <img :src="require('@/assets/' + item.image)">
            <h3>{{ item.name }}</h3>
            <h4> {{ item.price }}$ </h4>
            </div>
        </div>
    </div>
</template>

<script>
import ItemCrud from '@/modules/itemCrud'
import { useRouter } from 'vue-router';

export default {
    setup() {
        const router = useRouter();
        const { state, getAllItems} = ItemCrud();

        getAllItems();

        const itemDetail = (id) => {
            router.push(`/item/${id}`)
        }

        return {state, itemDetail};
    },
}
</script>

<style scoped>
.container{

}
.itemCard{
    float: left;
    margin: 10px;
    width: 300px;
    height: 400px;
    border: 1px black solid;
    border-radius: 20px;
    box-shadow:5px 5px 10px gray ;
    background-color: rgba(255, 255, 255, 0.521);
}
.itemCard:hover{
    background-image: url("../assets/tribal.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    text-shadow: 2px 2px rgb(197, 197, 197);
}

img{
    margin-top: 20px;
    height: 300px;
    background-color: rgb(202, 202, 202);
    object-fit: fill;
    border-bottom: 1px solid rgb(173, 173, 173);
    border-top: 1px solid rgb(168, 168, 168);
}

h4{
    text-align: right;
    margin-right: 10px;
    color: green;
}

h3{
    margin: 0px;
}
</style>
