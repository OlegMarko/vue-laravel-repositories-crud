<template>
    <div>
        <h1>Update Item</h1>
        
        <div class="row">
            <div class="col-md-offset-10 col-md-2">
                <router-link :to="{name: 'DisplayItem'}" class="btn btn-primary">
                    Return To Items
                </router-link>
            </div>
        </div>

        <br>

        <form v-on:submit.prevent="updateItem">
            <div class="form-group">
                <label for="name">Item Name:</label>
                <input type="text" id="name" class="form-control" v-model="item.name">
            </div>

            <div class="form-group">
                <label for="price">Item Price:</label>
                <input type="number" id="price" class="form-control" v-model="item.price">
            </div>

            <div class="form-group">
                <button class="btn btn-primary">Update</button>
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
        created: function () {
            this.getItem()
        },
        methods: {
            getItem() {
                let url = baseURL + '/items/' + this.$route.params.id + '/edit';

                this.axios.get(url, this.item)
                    .then((response) => {
                        this.item = response.data;
                    });
            },

            updateItem() {
                let url = baseURL + '/items/'+this.item.id;

                this.axios.patch(url, this.item)
                    .then((response) => {
                        this.$router.push({name: 'DisplayItem'})
                    })
            }
        }
    }
</script>
