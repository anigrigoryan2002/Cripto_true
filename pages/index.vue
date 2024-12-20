<template>
  <div>
    <myHeader />
    <div class="card-section">
      <div class="cards-section-container">
        <myMain />
        <myMain2 />
      </div>
    </div>

    <myFooter />
  </div>
</template>

<script setup></script>

<style scoped>
@media screen and (max-width: 1300px) {
  .cards-section-container {
    flex-direction: column !important;
  }
}
body {
  margin: 0 !important;
  padding: 0 !important;
  font-family: Golos Text, sans-serif;
}
.light .card-section {
  background: #fff;
}
.card-section {
  color: aliceblue;
  background: radial-gradient(
      50.31% 45.06% at 10.16% 91.73%,
      rgba(251, 21, 96, 0.08) 0,
      transparent 100%
    ),
    radial-gradient(
      59.34% 35.83% at 93.49% 46.73%,
      rgba(111, 17, 237, 0.2) 25.5%,
      transparent 100%
    ),
    linear-gradient(98deg, #16141f 19.74%, #100f16);
  scrollbar-width: none;
}
.cards-section-container {
  align-items: flex-start;
  display: flex;
  flex-direction: row;
  padding: 80px 89px 15px 111px;
  gap: 107px;
}
</style>
