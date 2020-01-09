<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">techBola SPA App</div>

                    <div class="card-body">
                        <h2>{{ welcome }}</h2>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Home",
        computed: {
            welcome() {
                return this.$store.getters.welcome
            }
        }
    }
</script>

<style scoped>

</style>
