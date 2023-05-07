<template>
  <div class="page">
        <Header/> 
        <div class="container">
            <div class="menu-wrapper" >
                <Menubar/>    
            </div> 
            <div class="content-wrapper">
                <router-view/>
            </div> 
        </div>
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import Menubar from './views/frontend/layouts/Menubar.vue'
import Header from './views/frontend/layouts/Header.vue'
export default {
    components: { 
        Header, Menubar
    },
    
}
</script>

<style lang="scss">
#app {
    font-family: segoe ui, Arial, lucida, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
} 

.container{
    display: flex;
}


</style>
