<template>
    <div class="mb-5">
        <v-container class="py-0 pe-0 pe-md-3 ps-3">
            <div class="d-flex justify-space-between align-center mb-4 pe-3 pe-md-0">
                <h2 class="text-center ribbon-title--b">{{ $t('popular_categories') }}</h2>
                <!-- <router-link :to="{ name: 'AllCategories' }" class="py-2 primary--text lh-1 d-inline-block">
                    {{ $t('view_all') }}
                    <i class="las la-angle-right"></i>
                </router-link> -->
            </div>
            <div v-if="loading">
                <swiper class="" :options="carouselOption" >
                    <swiper-slide v-for="(i) in 8" :key="i"  class="">
                        <v-skeleton-loader type="image" height="186" ></v-skeleton-loader>
                    </swiper-slide>
                </swiper>
            </div>
            <div v-else>
                <swiper :options="carouselOption" class="">
                    <swiper-slide v-for="(category, i) in categories" :key="i" class="">
                        <router-link class="rounded  border text-center d-block text-reset" :to="{ name: 'Category', params: {categorySlug: category.slug}}">
                            <img :src="category.banner" :alt="category.name" @error="imageFallback($event)" class="img-fluid">
                            <div class="pophigh fs-13 opacity-80 text-truncate d-none d-md-block mt-3">{{ category.name }}</div>
                        </router-link>
                    </swiper-slide>
                </swiper>
            </div>
        </v-container>
    </div>
</template>

<script>
export default {
    data: () => ({
        loading: true,
        categories: [],
        carouselOption: {
            slidesPerView: 4,
            spaceBetween: 20,
            // autoplay: {
            //     delay: 2500,
            //     disableOnInteraction: false
            // },
            autoplay:false,
            breakpoints: {
                0: {
                    slidesPerView: 2,
                    spaceBetween: 12
                },
                // when window width is >= 320px
                599: {
                    slidesPerView: 2,
                    spaceBetween: 16
                },
                // when window width is >= 480px
                960: {
                    slidesPerView: 3,
                    spaceBetween: 20
                },
                // when window width is >= 640px
                1264: {
                    slidesPerView: 4,
                    spaceBetween: 20
                },
                1904: {
                    slidesPerView: 4,
                    spaceBetween: 20
                },
            }
        },
    }),
    async created(){
        const res = await this.call_api("get", "setting/home/popular_categories");
        if (res.data.success) {
            this.categories = res.data.data.data
            this.loading = false
        }
    }
}
</script>
<style scoped>
    h2{
        font-size: 16px;
    }
    @media (min-width: 960px) {
        h2{
            font-size: 24px;
        }
    }

    .ribbon-title--b {
  background-color: var(--primary);
  color: #8b8241;
  display: block;
  filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.5));
  font-size: 25px;
  line-height: 1.05;
  margin: 20px auto;
  max-width: 70%;
  padding: 5px 0;
  position: relative;
  text-align: center;
  text-decoration: none;
  width: 496px;
  transition: all 300ms;
  font-weight: 400;
}
.ribbon-title--b::before, .ribbon-title--b::after {
  content: "";
  position: absolute;
  top: 0;
  border: 19px solid var(--primary);
  z-index: -1;
}
.ribbon-title--b::before {
  left: -30px;
  border-left: 30px solid transparent;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}
.ribbon-title--b::after {
  right: -30px;
  border-right: 30px solid transparent;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
.img-fluid{
    height: 100% !important;
    width: 100% !important;
    object-fit: cover;
}
.v-application a{
    height: 100% !important;
    width: 100% !important;

}
.swiper-slide{
    height: auto;
}
.pophigh{
    bottom: 0;
    position: absolute;
    width: 100%;
    color: #000000;
    background: rgba(255, 255, 255, 0.7);
    /* overflow: hidden; */
    width: 90%;
    left: 50%;
    transform: translate(-50%,-50%);
    padding: 5px;
    font-size: 16px !important;
}
</style>