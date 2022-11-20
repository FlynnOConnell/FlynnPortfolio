<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import { ref } from "vue";
import LinksComponent from "./components/LinksComponent.vue";
import Icon from "./components/SVGComponent.vue";
import "@/assets/css/main.css"

const navref = ref<any>(null);

const handleNavToggle = () => {  
	if (navref != null) {
		navref.value.dataset.transitionable = "true";
		navref.dataset.toggled = navref.dataset.toggled === "true" ? "false" : "true";
	}
	else {
		console.log("nav is null")
	}
}

window.matchMedia("(max-width: 800px)").onchange = e => {
	if (navref != null) {
		navref.dataset.transitionable = "true";
		navref.dataset.toggled = navref.dataset.toggled === "true" ? "false" : "true";
	}
	else {
		console.log("nav is null")
	}
};

</script>

<template>
  <header>
    <nav ref="navref" data-toggled="false" data-transitionable="false">
      <div id="nav-logo-section" class="nav-section">
        <a href="#">
          <div class="flex justify-center align-center items-center">
            <Icon name="signature_black" id="svg-signature" />
          </div>
        </a>
      </div>
      <div id="nav-mobile-section">
        <div id="nav-link-section" class="nav-section">
          <a href="#">HOME</a>
          <a href="#">ABOUT</a>
          <a href="#">PROJECTS</a>
        </div>
        <div id="nav-social-section" class="nav-section">
          <LinksComponent />
        </div>
        <div id="nav-contact-section" class="nav-section">
          <a href="#">
            GET IN TOUCH
          </a>
        </div>
      </div>
      <button id="nav-toggle-button" type="button" @click="handleNavToggle()">
        <span>Menu</span>
        <i class="fa-solid fa-bars"></i>
      </button>
    </nav>
  </header>
  <RouterView />
</template>

<style scoped>
@import "@/assets/css/main.css";

* {
  box-sizing: border-box;
}

nav {
  display: flex;
  flex-direction: row;
  width: 100%;
  border-bottom: 1px solid var(--background-color);
}

nav :deep(.nav-section)  {
  padding: 3rem 2rem;
  display: flex;
  gap: 1rem;
  border-left: 1px solid var(--background-color);
  align-items: center;
  justify-content: center;
}

#nav-logo-section {
  justify-content: flex-start;
}

#nav-links-section > a > i {
  font-size: 2.5rem;
}

#nav-links-section {
  gap: 6rem;
}

#nav-social-section {
  gap: 3rem;
  flex-grow: 1;
}

#nav-logo-section,
#nav-links-section {
  flex-basis: calc(100% / 3);
}

#nav-contacts-sectioin {
  flex-grow: 1;
}

#svg-signature {
	filter: brightness(0) invert(1);
}

#svg-signature:hover {
  filter: invert(41%) sepia(69%) saturate(927%) hue-rotate(227deg)
		brightness(80%) contrast(86%);
}


</style>
