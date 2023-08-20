<template>
  <div class="logo-search-section">
    <div class="container">
      <div class="row">
        <div class="col-md-2">
          <div class="logo">
            <router-link :to="{ name: 'Home' }">
              <img :src="appLogo" :alt="appName" loading="lazy" />
            </router-link>
          </div>
        </div>
        <div class="col-md-8 search-box">
          <div class="row">
            <div class="col-md-8">
              <div :class="['search search-box', { open: openSearch }]">
                <input
                  :placeholder="$t('search_for_products_brands_and_more')"
                  v-model="searchKeyword"
                  @keyup="ajaxSearch"
                />
                <button>
                  <i class="fas fa-search" aria-hidden="true"></i>
                </button>
              </div>
              <div
                class="white shadow-lg position-absolute search_content_box"
                v-if="showSuggestionContainer"
              >
                <div class="text-center py-4" v-if="loadingSuggestion">
                  <v-progress-circular
                    indeterminate
                    :width="3"
                    color="primary"
                  ></v-progress-circular>
                </div>
                <div v-else>
                  <div v-if="suggestionNotFound" class="text-center ma-8 fs-16">
                    {{ $t("sorry_nothing_found") }}
                  </div>
                  <div class="search_content" v-else>
                    <!-- Tags -->
                    <div class="" v-if="keywords.length">
                      <div
                        class="px-2 py-1 text-uppercase fs-10 text-right grey lighten-3"
                      >
                        {{ $t("popular_suggestions") }}
                      </div>
                      <ul class="list-unstyled px-5 py-2 fs-13">
                        <li
                          v-for="(keyword, i) in keywords"
                          :key="i"
                          class="py-1 text-capitalize"
                          @click="popularSuggesation(keyword)"
                        >
                          {{ keyword }}
                        </li>
                      </ul>
                    </div>

                    <!-- Product Suggesations -->
                    <div class="" v-if="products.length">
                      <div
                        class="px-2 py-1 text-uppercase fs-10 text-right grey lighten-3"
                      >
                        {{ $t("products") }}
                      </div>
                      <ul class="list-unstyled px-5 py-2 fs-13">
                        <li
                          v-for="(product, i) in products"
                          :key="i"
                          class="py-1 d-flex align-center"
                        >
                          <img
                            :src="product.thumbnail_image"
                            :alt="product.name"
                            @error="imageFallback($event)"
                            class="img-fit size-50px"
                          />
                          <div class="ml-2">
                            <h5
                              class="opacity-60 mb-1 fs-13"
                              @click="hideSearchContainer"
                            >
                              <router-link
                                :to="{
                                  name: 'ProductDetails',
                                  params: { slug: product.slug },
                                }"
                                class="text-reset"
                              >
                                {{ product.name }}
                              </router-link>
                            </h5>
                            <div class="order-2 fs-14 lh-1">
                              <template
                                v-if="
                                  product.base_price >
                                  product.base_discounted_price
                                "
                              >
                                <del class="opacity-40">{{
                                  format_price(product.base_price)
                                }}</del>
                                <span class="fw-700 red--text">{{
                                  format_price(product.base_discounted_price)
                                }}</span>
                              </template>
                              <template v-else>
                                <span class="fw-700 red--text">{{
                                  format_price(product.base_discounted_price)
                                }}</span>
                              </template>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>

                    <!-- category Suggesations -->
                    <div class="" v-if="categories.length">
                      <div
                        class="px-2 py-1 text-uppercase fs-10 text-right grey lighten-3"
                      >
                        {{ $t("category_suggestions") }}
                      </div>
                      <ul class="list-unstyled px-5 fs-13">
                        <li
                          v-for="(category, i) in categories"
                          :key="i"
                          class="py-1"
                          @click="hideSearchContainer"
                        >
                          <router-link
                            :to="{
                              name: 'Category',
                              params: { categorySlug: category.slug },
                            }"
                            class="text-reset text-capitalize"
                            >{{ category.name }}</router-link
                          >
                        </li>
                      </ul>
                    </div>

                    <!-- Brand Suggesations -->
                    <div class="" v-if="brands.length">
                      <div
                        class="px-2 py-1 text-uppercase fs-10 text-right grey lighten-3"
                      >
                        {{ $t("brands") }}
                      </div>
                      <ul class="list-unstyled px-5 fs-13">
                        <li
                          v-for="(brand, i) in brands"
                          :key="i"
                          class="py-1"
                          @click="hideSearchContainer"
                        >
                          <router-link
                            :to="{
                              name: 'Brand',
                              params: { brandId: brand.id },
                            }"
                            class="text-reset text-capitalize"
                            >{{ brand.name }}</router-link
                          >
                        </li>
                      </ul>
                    </div>

                    <!-- Shop Suggesations -->
                    <div class="" v-if="shops.length">
                      <div
                        class="px-2 py-1 text-uppercase fs-10 text-right grey lighten-3"
                      >
                        {{ $t("Shops") }}
                      </div>
                      <ul class="list-unstyled px-5 py-2 fs-13">
                        <li
                          v-for="(shop, i) in shops"
                          :key="i"
                          class="py-1 d-flex align-center"
                        >
                          <img
                            :src="shop.logo"
                            :alt="shop.name"
                            @error="imageFallback($event)"
                            class="img-fit size-30px"
                          />
                          <div class="ml-3">
                            <h5
                              class="opacity-60 mb-1 fs-13"
                              @click="hideSearchContainer"
                            >
                              <router-link
                                :to="{
                                  name: 'ShopDetails',
                                  params: { slug: shop.slug },
                                }"
                                class="text-reset"
                              >
                                {{ shop.name }}
                              </router-link>
                            </h5>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="location">
                <a href="#" class="btn"
                  >Select Delivery Location <i data-feather="map-pin"></i
                ></a>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-2 right-box">
          <ul>
            <li>
              <div class="cart">
                <i data-feather="shopping-cart"></i>
                <span>{{ getCartCount? getCartCount:0 }}</span>
                <p>Cart</p>
              </div>
            </li>
            <li>
              <div class="user">
                <div class="icon">
                  <i data-feather="user"></i>
                  <p>Dipesh</p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Mixin from "./../../utils/mixin";
export default {
  props: {
    loading: { type: Boolean, required: true, default: true },
    data: {
      type: Object,
      default: {},
    },
  },
  data: () => ({
    openSearch: false,
    searchKeyword: "",
    loadingSuggestion: false,
    showSuggestionContainer: false,
    suggestionNotFound: false,
    keywords: [],
    categories: [],
    brands: [],
    products: [],
    shops: [],
    cities: [],
    selectedCity: null,
  }),
  mounted() {
    this.fetchCities();
    this.retrieveDeliveryLocation();
  },
  computed: {
    ...mapGetters("app", ["appLogo", "appName"]),
    ...mapGetters("auth", ["isAuthenticated"]),
  },
  methods: {
    ...mapActions(["auth/logout"]),
    ...mapActions("cart", ["resetCart"]),
    ...mapActions("wishlist", ["resetWishlist"]),

    fetchCities() {
      Mixin.methods
        .call_api("get", "cities/2566", {})
        .then((res) => {
          if (res) {
            this.cities = res.data.data.map((item) => ({
              city_name: item.name,
              value: item.id,
            }));
          }
        })
        .catch((error) => {
          console.error("API call error:", error);
        });
    },

    setDeliveryLocation() {
      if (this.selectedCity) {
        sessionStorage.setItem("deliverCityValue", this.selectedCity);
      }
    },

    retrieveDeliveryLocation() {
      const cityValue = sessionStorage.getItem("deliverCityValue");
      if (cityValue) {
        this.selectedCity = parseInt(cityValue);
      }
    },

    search() {
      this.showSuggestionContainer = false;
      this.$router
        .push({
          name: "Search",
          params:
            this.searchKeyword.length > 0
              ? { keyword: this.searchKeyword }
              : {},
          query: {
            page: 1,
          },
        })
        .catch(() => {});
    },

    hideSearchContainer() {
      this.showSuggestionContainer = false;
    },

    popularSuggesation(tag) {
      this.showSuggestionContainer = false;
      this.searchKeyword = tag;
      this.search();
    },

    async ajaxSearch(event) {
      this.loadingSuggestion = true;
      this.showSuggestionContainer = false;
      const searchKey = event.target.value;

      if (searchKey.length > 0) {
        this.showSuggestionContainer = true;
        const res = await this.call_api("get", `search.ajax/${searchKey}`);

        if (res.data.success) {
          this.loadingSuggestion = false;
          this.keywords = res.data.keywords;
          this.categories = res.data.categories;
          this.brands = res.data.brands;
          this.products = res.data.products.data;
          this.shops = res.data.shops.data;
        } else {
          this.loadingSuggestion = false;
          this.suggestionNotFound = true;
        }
      }
    },

    async logout() {
      const res = await this.call_api("get", "auth/logout");
      this["auth/logout"]();
      this.resetCart();
      this.resetWishlist();
      this.$router.push({ name: "Home" }).catch(() => {});
    },
    toggleSearch(status) {
      this.openSearch = status;
    },
  },
};
</script>
<style scoped>
</style>
