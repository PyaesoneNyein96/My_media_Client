<template>
    <swiper :slidesPerView="1" :pagination="{
        type: 'progressbar',
    }" :navigation="true" :spaceBetween="10" :breakpoints="{
    '@0.00': {
        slidesPerView: 1,
        spaceBetween: 1,
    },
    '@0.75': {
        slidesPerView: 2,
        spaceBetween: 2,
    },
    '@1.00': {
        slidesPerView: 3,
        spaceBetween: 2,
    },
    '@1.50': {
        slidesPerView: 5,
        spaceBetween: 2,
    },
}" :modules="modules" class="mySwiper ">

        <swiper-slide class="" v-for="(cat, i) in this.categories" :key="i" @click="emit(cat.id)">
            {{ cat.title }}
        </swiper-slide>

    </swiper>
    <span class=" d-flex align-items-center">
        <!-- <i class="fa fa-arrow-circle-left fa-lg me-2 text-secondary" aria-hidden="true"></i>
        <i class="fa fa-arrow-circle-right fa-lg text-secondary" aria-hidden="true"></i> -->
    </span>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/pagination';

import '../../../public/assets/customStyle/style.css';

// import required modules
import { Pagination } from 'swiper';

export default {
    props: ['categories'],
    components: {
        Swiper,
        SwiperSlide,
    },
    data() {
        return {
            modules: [Pagination],
            cats: this.categories
        };
    },
    computed: {
        setData() {
            return this.cats;
        }
    },
    methods: {
        emit(x) {
            // console.log(x);
            this.$emit('selectByCategory', x)
        }
    },
};
</script>
  