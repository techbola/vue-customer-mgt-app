<template>
    <div>
        <div class="container-fluid p-0 m-0">
            <div class="row">
                <div class="col-md-12">
                    <Header />
                </div>
            </div>
        </div>
        <div class="content">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    import Header from "./Header";

    export default {
        name: 'main-app',
        components: {Header}
    }
</script>
