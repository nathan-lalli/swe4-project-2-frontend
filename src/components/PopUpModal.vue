<template>
  <div class="popupBackdrop">
    <div class="mainPopupContainer">
      <div class="popupHeaderContainer">
        <div class="headerTextContainer">
          <slot name="headerText">POPUP MODAL</slot>
        </div>
        <div class="headerButtonContainer">
          <button>
            <i class="fa-solid fa-circle-xmark" @click="close"></i>
          </button>
        </div>
      </div>
      <div class="popupBodyContainer">
        <slot name="body">
          <div class="slotDefaultBodyContent">*content goes here*</div>
        </slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PopUpModal",
  methods: {
    close() {
      this.$emit("close");
    },
  },
};
</script>

<style>
.slotDefaultBodyContent {
  width: 50vw;
  height: 60vh;
}

.popupBackdrop {
  align-items: center;
  background-color: rgba(0, 0, 0, 0.3);
  bottom: 0;
  display: flex;
  justify-content: center;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
}

.mainPopupContainer {
  background-color: var(--light-gray);
  box-shadow: 2px 2px 60px 6px gray;
  border-radius: 3vw;
}

.popupHeaderContainer {
  background-color: var(--light-gray);
  border-radius: 3vw 3vw 0 0;
  display: flex;
  flex-flow: row;
}

.headerTextContainer {
  align-items: center;
  background-color: var(--dark-blue);
  color: white;
  border-radius: 3vw 0 3vw 0;
  display: flex;
  font-size: 2vw;
  font-weight: 500;
  flex-flow: column-wrap;
  justify-content: center;
  width: 50%;
  padding: 1vw 0;
  letter-spacing: 0.3vw;
}

.headerButtonContainer {
  align-items: center;
  display: flex;
  flex-flow: column-wrap;
  justify-content: right;
  padding: 1vw 2vw 0 0;
  width: 50%;
}

.headerButtonContainer button {
  border: none;
  color: var(--light-blue);
  font-size: 3vw;
  text-decoration: none;
}

.headerButtonContainer button:hover {
  color: var(--dark-blue);
  cursor: pointer;
}

.popupBodyContainer {
  color: var(--dark-blue);
  padding: 1vw;
}
</style>
