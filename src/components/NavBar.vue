<template>
  <nav class="mainNav">
    <div class="mainNavLogoArea">
      <img src="../assets/OC_LOGO_WHITE.svg" alt="OC Logo in white." />
      <div class="mainNavLogoText">COURSE CATALOG</div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
  props: {},
};
</script>

<style scoped>
.mainNav {
  background-color: #627985;
  display: flex;
  flex-flow: row;
  padding: 0 4vw 0 4vw;
}

.mainNavLogoArea {
  align-items: center;
  display: flex;
  flex-flow: row;
  padding: 2.5vh 0 2.5vh 0;
  width: 100%;
}

.mainNavLogoText {
  align-items: center;
  color: #ffffff;
  font-size: 1.5vw;
  font-weight: 200;
  letter-spacing: 0.4vw;
  padding: 0 0 0 2vw;
}
</style>
