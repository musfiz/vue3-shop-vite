<template>
    <div class="content-slider">
        <div class="slider">
            <swiper
                :slides-per-view="1"
                :space-between="50"
                :pagination="{ clickable: true }"
                :autoplay ="true"
                @swiper="onSwiper"
                @slideChange="onSlideChange"            >
                <swiper-slide><img :src="'/frontend/slider/slider-1.jpg'" alt="No Slider"></swiper-slide>
                <swiper-slide><img :src="'/frontend/slider/slider-2.jpg'" alt="No Slider"></swiper-slide>
                <swiper-slide><img :src="'/frontend/slider/slider-3.jpg'" alt="No Slider"></swiper-slide>
                ...
            </swiper>
        </div>
    </div>
    <div class="content-block">        
        <div class="content-title">

        </div>
        <div class="content-item">
            
        </div>
    </div> 
</template>
<script lang="ts">
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';
export default {
    components:{
        Swiper,
        SwiperSlide
    },
    data () {
        return {
           
        }
    }
}
</script>
<style lang="scss">
</style>