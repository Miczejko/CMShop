<template>
    <div>
        <!-- login panel -->
        <div v-if="!admin.auth">
            <h1 style="color: rgba(240, 248, 255, 0.459);"> Login as Admin </h1>
            <label style="color: rgba(240, 248, 255, 0.459);">Admin pass: </label>
            <input type="password" v-model="admin.pass">
            <button @click="confirmAdminPass">Confirm</button>
        </div>
        <!-- page content when logged in -->
        <div v-if="admin.auth">
            <h1 style="color: rgba(240, 248, 255, 0.459);"> Admin Panel</h1>
            <button @click="logout">Logout</button>
            <hr/>
<!-- add form -->
            <div class="form">
                <h1>Add item</h1>
                <label>Name:</label>
                <input type="text" v-model="newItem.name" placeholder="Name ...">
                <br/>
                <label>Description:</label>
                <textarea v-model="newItem.description" placeholder="Description ..."></textarea>
                <br/>
                <label>Price:</label>
                <input type="number" v-model="newItem.price"><br/>
                <label>Image:</label>
                <input list="images" v-model="newItem.image">
                <datalist id="images">
                    <option value="cos.jpg"></option>
                    <option value="cos.jpg"></option>
                    <option value="tribal.png"></option>
                    <option value="logo.png"></option>
                    <option value="tribal.jpg"></option>
                </datalist><br/>
                <button @click="addBtn"> 
                    Add new
                </button>
            </div>
<!-- edit form -->
            <div class="form">
                <h1>Edit item</h1>
                <label>Id:</label>
                <input type="text" v-model="editItemId.id" placeholder="Id ...">
                <br/>
                <label>Name:</label>
                <input type="text" v-model="editItem.name" placeholder="Name ...">
                <br/>
                <label>Description:</label>
                <textarea v-model="editItem.description" placeholder="Description ..."></textarea>
                <br/>
                <label>Price:</label>
                <input type="number" v-model="editItem.price"><br/>
                <label>Image:</label>
                <input list="images" v-model="editItem.image">
                <datalist id="images">
                    <option value="cos.jpg"></option>
                    <option value="cos.jpg"></option>
                    <option value="tribal.png"></option>
                    <option value="logo.png"></option>
                    <option value="tribal.jpg"></option>
                </datalist><br/>
                <button @click="editBtn"> 
                    Update
                </button>
            </div>
<!-- all items -->
            <div class="form">
                <h1>All items</h1>
                <p>Id | Name | Description | Price</p>
                <hr/>
                <div v-for="item in state.items" :key="item._id" :id="item._id">
                <p>{{ item._id +" | "+ item.name +" | "+ item.description+" | "+ item.price }}</p>
                <button @click="deleteBtn(item._id)">Delete</button>
                <button @click="setToEdited(item._id)">Edit</button>
                <hr/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ItemCrud from '@/modules/itemCrud'
import { reactive } from 'vue';

export default {
    setup() {
        const { state, getAllItems, addItem, deleteItem, updateItem} = ItemCrud();
        getAllItems();

        //reactive element which store data about admin (for easy access from inputs and buttons)
        const admin = reactive({
            pass: "",
            auth: localStorage.getItem('auth')==1 ? true : false, // changing auth: localstorage.auth is 0 or null than false if 1 than true
        });

        //login function
        const confirmAdminPass = () =>{
            if(admin.pass == "123"){
                localStorage.setItem('auth', 1);
                admin.auth = true;
            }
        }
        //logout function
        const logout = () => {
            localStorage.setItem('auth', 0);
            admin.auth = false;
        }


        //add button function
        const addBtn = () =>{
            if(newItem.name!="" && newItem.description!="" && newItem.price > 0 && newItem.image!=""){
                addItem(newItem);
            }
            else{
                window.alert("wrong data");
            }
        }

        //delete button function
        const deleteBtn = (id) =>{
            deleteItem(id);
        }

        //edit button function
        const editBtn = () => {
            if(editItemId.id!="" && editItem.name!="" && editItem.description!="" && editItem.price > 0 && editItem.image!=""){
                console.log("weszlo");
                updateItem(editItemId.id, editItem);
            }
            else{
                window.alert("wrong data");
            }
        }

        //setting edit input id to id from chosen item
        const setToEdited = (id) => {
            editItemId.id = id;
        }
        
        // new item storage
        const newItem = reactive({
            name: "",
            description: "",
            price: 0,
            image: ""
        })

        // storage for item to edit id
        const editItemId = reactive({
            id: ""
        })

        // edited item storage
        const editItem = reactive({
            name: "",
            description: "",
            price: 0,
            image: ""
        })


        return {state, admin, newItem, editItemId, editItem, confirmAdminPass, logout, addBtn, deleteBtn, editBtn, setToEdited}
    },
}
</script>

<style scoped>
.form{
    background-color: rgba(255, 255, 255, 0.836);
    margin-left: auto;
    margin-right: auto;
    border: 1px black solid;
    border-radius: 10px;
    width: 400px;
    padding: 10px 10px 40px 10px;
}
</style>
