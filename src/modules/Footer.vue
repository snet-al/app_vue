<template>
  <div class="footer">
    <div class="s-center">
      <a href="#" class="footer-back ">
        Back To Top
        <i class="fa fa-arrow-up"></i>
      </a>
    </div>
    <div class="footer-socialmedia s-center">
      <span class="footer-socialmediaText">Follow Us SocialMedia</span>
      <a target="_blank" href="https://www.facebook.com">
        <span class="sr-only"
          >Follow us on Facebook, Opens in a new window</span
        >
        <i class="iconww-Facebook footer-socialmediaIcon"></i>
      </a>
      <span class="sr-only">Follow us on Facebook, Opens in a new window</span>
      <i class="icon-Facebook footer-socialmediaIcon"></i>
    </div>
    <div class="footer-links s-center">
      <div class="footer-col">
        <div class="footer-colPanel">
          <h4 class="footer-heading">Rreth TopSeller.al</h4>
          <div class="footer-linkContainer">
            <div class="footer-linkItems">
              Adresa: <br /><span style="font-size: 12px; margin:0 0 9px 2px;"
                >Rruga "Joklin Persi", Unaze e Re, Tiranë.</span
              >
              <i class="iconww-ArrowRight"></i>
            </div>
            <div class="footer-linkItems">
              Telefoni: <br /><span style="font-size: 12px; margin:0 0 9px 2px;"
                >067 60 66 665</span
              >
              <i class="iconww-ArrowRight"></i>
            </div>
            <div class="footer-linkItems">
              E-mail: <br /><span
                ><a
                  style="font-size: 12px; margin:0 0 9px 2px;"
                  href="mailto:info1topseller@gmail.com"
                  >info1topseller@gmail.com</a
                ></span
              >
              <i class="iconww-ArrowRight"></i>
            </div>
            <div class="footer-linkItems">
              Social: <br /><span></span>
              <i class="iconww-ArrowRight"></i>
            </div>
          </div>
        </div>
      </div>
      <div class="footer-col">
        <div class="footer-colPanel">
          <h4 class="footer-heading">Shop Groceries Online</h4>
          <div class="footer-linkContainer">
            <a class="footer-linkItems">
              Track My Order
              <i class="iconww-ArrowRight"></i>
            </a>
            <a class="footer-linkItems">
              View My Account
              <i class="iconww-ArrowRight"></i>
            </a>
            <a class="footer-linkItems">
              Pick up
              <i class="iconww-ArrowRight"></i>
            </a>
            <a class="footer-linkItems">
              Delivery
              <i class="iconww-ArrowRight"></i>
            </a>
            <a class="footer-linkItems">
              Express Delivery
              <i class="iconww-ArrowRight"></i>
            </a>
            <a class="footer-linkItems">
              Delivery Saver Pass
              <i class="iconww-ArrowRight"></i>
            </a>
            <a class="footer-linkItems">
              New to Online Shopping?
              <i class="iconww-ArrowRight"></i>
            </a>
            <a class="footer-linkItems">
              Shop for your Business
              <i class="iconww-ArrowRight"></i>
            </a>
          </div>
        </div>
      </div>
      <div class="footer-col">
        <div class="footer-colPanel">
          <h4 class="footer-heading">Useful Links</h4>
          <div class="footer-linkContainer">
            <a class="footer-linkItems">
              Store Locations &amp; Trading Hours
              <i class="iconww-ArrowRight"></i>
            </a>
            <a class="footer-linkItems">
              Woolworths Rewards
              <i class="iconww-ArrowRight"></i>
            </a>
            <a class="footer-linkItems">
              Recipes &amp; Easy Dinner Ideas
              <i class="iconww-ArrowRight"></i>
            </a>
            <a class="footer-linkItems">
              Woolworths Catalogue
              <i class="iconww-ArrowRight"></i>
            </a>
            <a class="footer-linkItems">
              Woolworths Fresh Magazine
              <i class="iconww-ArrowRight"></i>
            </a>
            <a class="footer-linkItems">
              Woolworths Apps
              <i class="iconww-ArrowRight"></i>
            </a>
            <a class="footer-linkItems">
              Flowers Online
              <i class="iconww-ArrowRight"></i>
            </a>
          </div>
        </div>
      </div>
      <div class="footer-col">
        <div class="footer-colPanel">
          <h4 class="footer-heading">About TopSeller</h4>
          <div class="footer-linkContainer">
            <a class="footer-linkItems">
              Careers
              <i class="iconww-ArrowRight"></i>
            </a>
            <a class="footer-linkItems">
              Why Pick Woolies?
              <i class="iconww-ArrowRight"></i>
            </a>
            <a ng-href="/shop/discover/our-brands" class="footer-linkItems">
              Our Brands
              <i class="iconww-ArrowRight"></i>
            </a>
            <a class="footer-linkItems">
              Community Donations
              <i class="iconww-ArrowRight"></i>
            </a>
            <a class="footer-linkItems">
              Suppliers
              <i class="iconww-ArrowRight"></i>
            </a>
            <a class="footer-linkItems">
              Become an Affiliate
              <i class="iconww-ArrowRight"></i>
            </a>
            <a class="footer-linkItems">
              Corporate Responsibility
              <i class="iconww-ArrowRight"></i>
            </a>
          </div>
        </div>
      </div>
    </div>

    <div
      class="footer-copyright s-center"
      wow-html-setting=""
      setting-group="Copyright"
      setting-name="OnesiteCopyrightFooterHtml"
    >
      <span> © Nana Ltd 1997-2017 - All Rights Reserved</span>
      |
      <a
        href="/Shop/Discover/about-us/privacy-policy"
        class="a-color"
        target="_blank"
        >Privacy Policy</a
      >
      |
      <a
        href="/Shop/Discover/about-us/collection-notice"
        class="a-color"
        target="_blank"
        >Collection Notice</a
      >
      |
      <a
        href="/Shop/Discover/about-us/cookies-statement"
        class="a-color"
        target="_blank"
        >Cookies Statement</a
      >
      |
      <a
        href="/Shop/Discover/about-us/terms-and-conditions"
        class="a-color"
        target="_blank"
        >Terms &amp; Conditions</a
      >
      |
      <a href="/shop/support/accessibility" class="a-color" target="_blank"
        >Accessibility</a
      >
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
@Component
export default class Footer extends Vue {
  data() {
    return {
      test: 'test',
    }
  }
}
</script>

<style scoped></style>
