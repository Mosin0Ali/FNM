<template>
    <div class="mb-5 mt-5">
        <h2 class="text-center ribbon-title--b">{{ $t('recent_purchases') }}</h2>

        <v-container class="py-0">
            <h2 class="mb-4 crimsonred">{{ title }}</h2>
            <div v-if="loading">
                <swiper ref="c1" class="" :options="carouselOption" >
                    <swiper-slide v-for="(i) in 8" :key="i"  class="">
                        <v-skeleton-loader type="image" height="186" ></v-skeleton-loader>
                    </swiper-slide>
                </swiper>
            </div>
            <div class="productviewwrapper" v-else>
                <swiper ref="c2" :options="carouselOption" class="">
                    <swiper-slide v-for="(product, i) in products" :key="i" class="">
                        <product-box :product-details="product" :is-loading="loading" />
                    </swiper-slide>
                </swiper>
            </div>
        </v-container>
    </div>
</template>

<script>
export default {
    data: () => ({
        loading: true ,
        title: '' ,
        products: [],
        carouselOption: {
            slidesPerView: 6,
            spaceBetween: 20,
            breakpoints: {
                0: {
                    slidesPerView: 2,
                    spaceBetween: 12
                },
                // when window width is >= 320px
                599: {
                    slidesPerView: 4,
                    spaceBetween: 16
                },
                // when window width is >= 480px
                960: {
                    slidesPerView: 4,
                    spaceBetween: 20
                },
                // when window width is >= 640px
                1264: {
                    slidesPerView: 5,
                    spaceBetween: 20
                },
                1904: {
                    slidesPerView: 6,
                    spaceBetween: 20
                },
            }
        },
    }),
    async created(){
        const res = await this.call_api("get", "setting/home/product_section_one");
        if (res.data.success) {
            this.title = res.data.data.title
            this.products = res.data.data.products.data
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
  margin-top: 70px !important;
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

.crimsonred{
    color: #851928;
}

.productviewwrapper{
    padding: 10px;
    background: rgb(245, 241, 242);
}
</style>