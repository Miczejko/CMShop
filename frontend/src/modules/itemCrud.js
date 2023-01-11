import { reactive } from 'vue'
// import { useRoute,  } from 'vue-router'
import axios from 'axios'

const getItems = () => {

    // const route = useRoute();
    //const router = useRouter();

    // tymczasowy obiekt state 
    const state = reactive({
        name: "",
        description: "",
        price: 0,
        image: "",
        items: []
    })  

    const clearState = () => {
        state.items=[];
    }

    const getAllItems = async () => {
        try
        {
            await axios.get(`http://localhost:3000/item/`)
                .then((res) => {
                    state.items = res.data
                    console.log(state);
                })
        }
        catch(error)
        {
          console.log("error from ItemsCrud.js", error) 
        }
    }


    const addItem = async (item) => {
        await axios.post(`http://localhost:3000/item/new/`, item).then(() => {
            clearState();
            getAllItems();
        });
        console.log("Dziala");
    }

    const updateItem = async (id, item) => {
        console.log("item",item);
        await axios.put(`http://localhost:3000/item/update/${id}`, item).then(() => {
            clearState();
            getAllItems();
        });
    }

    const getItem = async (id) => {
        await axios.get(`http://localhost:3000/item/get/${id}`)
            .then((res) => {
                const item = res.data
                state.name = item.name
                state.description = item.description
                state.price = item.price
                state.image = item.image
            })
    }

    const deleteItem = async (id) => {
        try{
            axios.delete(`http://localhost:3000/item/delete/${id}`).then(() => {
                clearState();
                getAllItems();
            })
        }catch(e){
            console.log(e)
        }
    }

    

    return {
        state,
        clearState,
        getAllItems,
        deleteItem,
        getItem,
        addItem,
        updateItem
    }
}

export default getItems