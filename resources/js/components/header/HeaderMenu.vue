<template>
  <div>
    <v-container class="py-0">
      <div class="d-flex align-center justify-center py-2">
        <template v-if="loading">
          <v-skeleton-loader
            type="text"
            class="w-100px px-3 mt-2"
          ></v-skeleton-loader>
          <v-skeleton-loader
            type="text"
            class="w-100px px-3 mt-2"
          ></v-skeleton-loader>
          <v-skeleton-loader
            type="text"
            class="w-100px px-3 mt-2"
          ></v-skeleton-loader>
          <v-skeleton-loader
            type="text"
            class="w-100px px-3 mt-2"
          ></v-skeleton-loader>
          <v-skeleton-loader
            type="text"
            class="w-100px px-3 mt-2"
          ></v-skeleton-loader>
        </template>
        <template v-else>
          <div class="menu-section" id="navbar_top">
            <div class="container">
              <nav class="navbar navbar-expand-lg navbar-light">
                <button
                  class="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div
                  class="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                      <router-link :to="{ name: 'Home' }" class="nav-link">
                        {{ $t("home") }}
                      </router-link>
                    </li>
                    <li class="nav-item">
                      <router-link :to="{ name: 'AllCategories' }" class="nav-link">
                        {{ $t("all_categories") }}
                      </router-link>
                    </li>
                    <li class="nav-item">
                      <router-link :to="{ name: 'AllBrands' }" class="nav-link">
                        {{ $t("all_brands") }}
                      </router-link>
                    </li>
                    <li class="nav-item">
                      <router-link :to="{ name: 'AllShops' }" class="nav-link">
                        {{ $t("all_shops") }}
                      </router-link>
                    </li>
                    <li class="nav-item">
                      <router-link :to="{ name: 'AllOffers' }" class="nav-link">
                        {{ $t("offers") }}
                      </router-link>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </template>
      </div>
      <v-divider class=""></v-divider>
    </v-container>
  </div>
</template>

<script>
export default {
  props: {
    loading: { type: Boolean, required: true, default: true },
    data: {
      type: Object,
      default: {},
    },
  },
};
</script>
