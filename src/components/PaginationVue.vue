<template>
  <div class="mainPaginationContainer">
    <ul class="pagination">
      <li class="pagination-item">
        <button
          type="button"
          @click="onClickFirstPage"
          :disabled="isInFirstPage"
          class="textButton"
        >
          First
        </button>
      </li>

      <li class="pagination-item">
        <button
          type="button"
          @click="onClickPreviousPage"
          :disabled="isInFirstPage"
          class="arrowButton"
        >
          <i class="fa-solid fa-caret-left"></i>
        </button>
      </li>

      <!-- Numbered Buttons Start -->

      <li v-for="page in pages" :key="page.name" class="pagination-item">
        <button
          type="button"
          @click="onClickPage(page.name)"
          :disabled="page.isDisabled"
          class="numberButton"
          :class="{ active: isPageActive(page.name) }"
        >
          {{ page.name }}
        </button>
      </li>

      <!-- Numbered Buttons End -->

      <li class="pagination-item">
        <button
          type="button"
          @click="onClickNextPage"
          :disabled="isInLastPage"
          class="arrowButton"
        >
          <i class="fa-solid fa-caret-right"></i>
        </button>
      </li>

      <li class="pagination-item">
        <button
          type="button"
          @click="onClickLastPage"
          :disabled="isInLastPage"
          class="textButton"
        >
          Last
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    maxVisibleButtons: {
      type: Number,
      required: false,
      default: 3,
    },
    totalPages: {
      type: Number,
      required: true,
    },
    perPage: {
      type: Number,
      required: true,
    },
    currentPage: {
      type: Number,
      required: true,
    },
  },
  computed: {
    startPage() {
      // When on the first page
      if (this.currentPage === 1) {
        return 1;
      }

      // When on the last page
      if (this.currentPage === this.totalPages) {
        return this.totalPages - this.maxVisibleButtons;
      }

      // When in between first and last pages
      return this.currentPage - 1;
    },
    pages() {
      const range = [];

      for (
        let i = this.startPage;
        i <=
        Math.min(this.startPage + this.maxVisibleButtons - 1, this.totalPages);
        i++
      ) {
        range.push({
          name: i,
          isDisabled: i === this.currentPage,
        });
      }

      return range;
    },
    isInFirstPage() {
      return this.currentPage === 1;
    },
    isInLastPage() {
      return this.currentPage === this.totalPages;
    },
  },
  methods: {
    onClickFirstPage() {
      this.$emit("pagechanged", 1);
    },
    onClickPreviousPage() {
      this.$emit("pagechanged", this.currentPage - 1);
    },
    onClickPage(page) {
      this.$emit("pagechanged", page);
    },
    onClickNextPage() {
      this.$emit("pagechanged", this.currentPage + 1);
    },
    onClickLastPage() {
      this.$emit("pagechanged", this.totalPages);
    },
    isPageActive(page) {
      return this.currentPage === page;
    },
  },
};
</script>

<style>
.mainPaginationContainer {
  align-items: center;
  display: flex;
  justify-content: center;
}
.pagination {
  background-color: var(--light-gray);
  border-radius: 20vw;
  list-style-type: none;
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 1vw;
}

.pagination-item {
  display: inline-block;
  margin-left: 5px;
  margin-right: 5px;
}

.numberButton {
  border-radius: 1vw;
  border: none;
  font-size: 1.5vw;
  padding-left: 1.5vw;
  padding-right: 1.5vw;
}

.numberButton:hover:enabled {
  background-color: var(--dark-blue);
  color: white;
  cursor: pointer;
}

.textButton {
  background-color: transparent;
  border-radius: 1vw;
  border: none;
  color: var(--dark-blue);
  font-size: 1.5vw;
  padding-left: 1vw;
  padding-right: 1vw;
}
.textButton:hover:enabled {
  cursor: pointer;
}

.textButton:disabled {
  color: var(--light-blue);
}

.arrowButton {
  background-color: transparent;
  border-radius: 1vw;
  border: none;
  color: var(--dark-blue);
  font-size: 1.5vw;
  padding-left: 1vw;
  padding-right: 1vw;
}

.arrowButton:hover:enabled {
  cursor: pointer;
}

.arrowButton:disabled {
  color: var(--light-blue);
}

.active {
  background-color: var(--dark-blue);
  color: white;
}
</style>
