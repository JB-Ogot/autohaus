<template>
    <div>
        <header class="nav-opt-sprite nav-locate-us nav-lang-en nav-ssl nav-unrec">
            <div class="container-fluid desktop-nav">
                <div class="row">

                    <!-- Logo AREA -->
                    <div class="col-sm-2">
                        <div class="logo-area">
                            <a href="/">
                                <img src="/img/logo1.png" alt="logo" class="img-fluid">
                            </a>
                        </div>
                    </div>

                    <!-- search bar -->
                    <div class="col-sm-6 pt-0">
                        <Search />
                    </div>

                    <div class="col-sm-4">
                    </div>    
                </div>
                <div class="row">
                    <div class="col-xl-2 col-md-2 col-lg-2 col-sm-2 pl-2">
                        <div class="nav-global-location">
                            <nuxt-link to="/address" class="nav-a nav-a-2">
                            <div class="nav-sprite" id="nav-packard-glow-loc-icon"></div>
                            <div class="glow-ingress-block">
                                <span class="nav-line-1" id="glow-ingress-line1">Deliver to</span>
                                <span class="nav-line-2" id="glow-ingress-line2">Kisumu</span>
                            </div>
                            </nuxt-link>
                        </div>
                    </div>

                    <!-- shopping -->
                    <div class="col-xl-6 col-md-5 col-lg-4 col-sm-6 pl-0">
                        <div class="nav-fill">
                            <div class="nav-shop">
                                <nuxt-link to="/" class="nav-a nav-a-2 nav-single-row-link">
                                <span class="nav-line-2">Home
                                    <span class="nav-icon nav-arrow" style="visibility: visible"></span>
                                </span>

                                </nuxt-link>
                            </div>

                            <div class="nav-xshop-container">
                                <div class="nav-xshop">
                                    <a href="#" class="nav-a">Vehicles</a>
                                    <a href="#" class="nav-a">Brand</a>
                                    <a href="#" class="nav-a">Group</a>
                                    <a href="#" class="nav-a">Body Kit</a>
                                    <a href="#" class="nav-a">Inquiry</a>
                                    <a href="#" class="nav-a">Offers</a>
                                    <a href="#" class="nav-a">Contact Us</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- accounts details -->
                    <div class="col-xl-4 col-md-5 col-lg-6 col-sm-4 pl-0">
                        <div class="nav-tools">
                            <a href="#" id="icp-nav-flyout" class="nav-a nav-a-2 icp-link-style-2">
                                <span class="icp-nav-link-inner">
                                    <span class="nav-line-1">
                                        <span class=" icp-nav-globe-img-2"></span>
                                        <span class=" icp-nav-language">EN</span>
                                    </span>
                                    <span class=" nav-line-2">
                                        &nbsp;
                                        <span class="nav-icon nav-arrow" style="visibility: visible"></span>
                                    </span>
                                </span>
                            </a>
                            <span class=" icp-nav-link-border"></span>
                            <nuxt-link to="/login" class=" nav-a nav-a-2" id=" nav-link-accountList" tabindex="0">
                                <span class=" nav-line-1">Hello, Sign In</span>
                                <span class="nav-line-2">
                                    Account &amp; Lists
                                    <span class=" nav-icon nav-arrow" style="visibility: visible"></span>
                                </span> 

                            </nuxt-link>
                            <nuxt-link to="/orders" class="nav-a nav-a-2 nav-single-row-link">
                               <span class=" nav-line-1"></span>
                               <span class=" nav-line-1">Orders</span>

                            </nuxt-link>

                            <nuxt-link to="/cart" class="nav-a nav-a-2" id="nav-cart">
                                <span aria-hidden="true" class=" nav-line-1"></span>
                                <span aria-hidden="true" class=" nav-line-2">Cart</span>
                                <span class=" nav-cart-icon nav-sprite"></span>
                                <span id=" nav-cart-count" aria-hidden="true" class="nav-cart-count nav-cart-0">0</span>
                            </nuxt-link>
                        </div>

                    </div>
                </div>
            </div>
        </header>

    </div>
</template>

<script>
import Search from "~/components/Search";
export default {
  components:{
      Search
  }  
};
</script>