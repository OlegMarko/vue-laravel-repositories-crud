<template>
    <div>
        <h1>Create An Item</h1>

        <div class="row">
            <div class="col-md-offset-10 col-md-2">
                <router-link :to="{name: 'DisplayItem'}" class="btn btn-primary">
                    Return To Items
                </router-link>
            </div>
        </div>

        <br>

        <form v-on:submit.prevent="addItem">
            <div class="row">
                <div class="col-md-6">
                    <div class="form-group">
                        <label for="name">Item Name:</label>
                        <input type="text" id="name" class="form-control" v-model="item.name">
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-6">
                    <div class="form-group">
                        <label for="price">Item Price:</label>
                        <input type="number" id="price" class="form-control" v-model="item.price">
                    </div>
                </div>
            </div>
            <br>
            <div class="form-group">
                <button class="btn btn-primary">Add Item</button>
            </div>
        </form>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                item: {}
            }
        },
        methods: {
            addItem() {
                let url = baseURL + '/items';

                this.axios.post(url, this.item)
                    .then((response) => {
                        this.$router.push({name: 'DisplayItem'});
                    });
            }
        }
    }
</script>
