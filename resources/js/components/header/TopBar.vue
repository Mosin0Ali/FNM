
<template>
  <div class="top-section">
      <div class="container">
        <div class="row">
          <ul>
            <li><a href="#">Need It Today ?</a></li>
            <li><a :href="'tel:' + $optional('data.helpline')">Call Us @ {{ $optional("data.helpline") }}</a></li>
            <li class="login-register" v-if="!isAuthenticated">
                <router-link :to="{ name: 'Registration' }"><i class="far fa-user"></i> {{
                                    $t("Register") }}</router-link> <span>|</span> <router-link :to="{ name: 'Login' }" >{{ $t("login")
                                }}</router-link>  
            </li>
            <li class="login-register" v-else>
                <router-link :to="{ name: 'DashBoard' }"><i class="far fa-cog"></i> {{
                                    $t("dashboard") }}</router-link> <span>|</span> <a href="#logout" @click.stop="logout" >{{ $t("logout")
                                }}</a>  
            </li>
          </ul>
        </div>
      </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
    props: {
        loading: { type: Boolean, required: true, default: true },
        data: {
            type: Object,
            default: {},
        },
    },
    data: () => ({
        topBannerVisible: false,
        topBanner: {
            image: Vue.helpers.asset("/uploads/img/topbar.jpg"),
            link: "",
        },
        currencies: [
            {
                name: "U.S. Dollar",
                sysmbol: "$",
                code: "USD",
            },
            {
                name: "Taka",
                sysmbol: "Tk",
                code: "BDT",
            },
        ],
        cselectedCurrency: {
            name: "U.S. Dollar",
            sysmbol: "$",
            code: "USD",
        },
        menuCloseOnClick: true,
    }),
    computed: {
        ...mapGetters("wishlist", ["getTotalWishlisted"]),
        ...mapGetters("app", ["userLanguageObj", "allLanguages", "allCurrencies"]),
    },
    methods: {
        ...mapActions("app", ["fetchProductQuerries"]),
        ...mapActions("wishlist", ["fetchWislistProducts"]),
        ...mapActions("app", ["setLanguage"]),
        switchLanguage(locale) {
            if (this.$i18n.locale !== locale) {
                this.setLanguage(locale);
                window.location.reload();
            }
        },
        closeTopBanner() {
            this.topBannerVisible = false;
            this.setSession("shopTopBanner", "hidden");
        },
    },
    created() {
        if (this.checkSession("shopTopBanner") != "hidden") {
            this.topBannerVisible = true;
        }
        this.fetchWislistProducts();
        this.fetchProductQuerries();
        setInterval(() => {
            this.fetchProductQuerries();
        }, 8000);            
    },
};
</script>
<style scoped>

</style>
