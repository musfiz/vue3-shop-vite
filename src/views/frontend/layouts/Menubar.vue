<template>    
    <div class="menu-content">
        <div class="menu-item">  
            <div class="menu-item-group">
                <div class="item-parent">
                    <img :src="'frontend/icons/menu/man.png'" alt="">
                    <!-- <a href="#">Man</a> -->
                    <router-link to="/">Man</router-link>
                </div>
            </div>
            <div class="menu-item-group">
                <div class="item-parent">
                    <img :src="'frontend/icons/menu/women.png'" alt="">
                    <!-- <a href="#">Women</a> -->
                    <router-link to="/women-category">Women</router-link>
                </div>
            </div>
            <div class="menu-item-group">
                <div class="item-parent">
                    <img :src="'frontend/icons/menu/kids.png'" alt="">
                    <a href="#">Baby & Kids</a>
                </div>
            </div> 
            <div class="menu-item-group">
                <div class="item-parent">
                    <img :src="'frontend/icons/menu/living.png'" alt="">
                    <a href="#">Home & Living</a> 
                </div>                   
            </div> 
            <div class="menu-item-group">
                <div class="item-parent" @click="toggleChildMenu()">
                    <img :src="'frontend/icons/menu/electronics.png'" alt="">
                    <a href="#">Electronics</a>
                    <img class="child-menu-icon" :src="'frontend/icons/chevron-right.svg'" alt="No Image" :class="{'rotate': isRotate}">
                </div>
                
                <div class="item-child-group" :class="{'active': menuActive}">                            
                    <div class="item-child">
                        <a href="#">Computing</a>                           
                    </div>                         
                    <div class="item-child">
                        <a href="#">Home Appliances</a>                                              
                    </div>                         
                    <div class="item-child">
                        <a href="#">Gadget</a>                            
                    </div>                         
                </div>
                
            </div>   
            <div class="menu-item-group">
                <div class="item-parent">
                    <img :src="'frontend/icons/menu/book.png'" alt="">
                    <a href="#">Books & Stationary</a>
                </div>
            </div>  
            <div class="menu-item-group">
                    <div class="item-parent">
                <img :src="'frontend/icons/menu/grocery.png'" alt="">
                <a href="#">Food & Grocery</a>
                    </div>
            </div>
            <div class="menu-item-group">
                    <div class="item-parent">
                <img :src="'frontend/icons/menu/beauty.png'" alt="">
                <a href="#">Beauty & Health</a>
                    </div>
            </div> 
            <div class="menu-item-group">
                <div class="item-parent">
                <img :src="'frontend/icons/menu/clean.png'" alt="">
                <a href="#">Cleaning & Clear</a>
                </div>
            </div>                     
        </div> 
    </div>    
</template>
<script>
export default {
    data(){
        return{
            menuActive: false,
            isRotate: false
        }
    },
    methods:{
        toggleChildMenu(){
            this.menuActive = !this.menuActive;
            this.isRotate = !this.isRotate;
        }
    },
    mounted(){
         console.log('component Mounted');
    }
}
</script>
<style lang="scss">
</style>