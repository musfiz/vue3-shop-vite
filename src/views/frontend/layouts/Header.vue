<template>
    <div class="header-wrapper">
        <div class="header-nav">           
            <button class="nav-menu"><img :src="'frontend/icons/list.svg'" alt="Not Found"></button>
            <div class="nav-brand">
                <img :src="'frontend/logo.svg'" alt="">
            </div>
            <div class="nav-search">
                <img :src="'frontend/icons/search.svg'" alt="Not Found">
                <input type="text">
                <img :src="'frontend/icons/cancel.svg'" alt="Not Found">
            </div>            
            <div class="nav-item">
                <a href="">Complain & Help</a>
            </div>
            <div class="nav-item">
                <a href="">Track Order</a>
            </div>
            <div class="nav-account">
                <a href="">Sign in</a>
            </div>
            <div class="nav-cart">
                <a href="#">Cart  <img :src="'frontend/icons/cart.svg'" alt=""></a>               
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return {
           
        }
    }
}
</script>
<style lang="scss">
</style>