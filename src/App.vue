<template>
  <div class="container">
    <div class="left">
      <div class="header">
        <img class="logo" alt="Commica logo" src="./assets/comnica-logo.png">
      </div>
      <div class="content">
        <h1>Comnica Signature</h1>
        <span class="subheader">Digitális aláíró szolgáltatás a Comnicától</span>
        <img alt="Photo object" src="./assets/photos_object.svg">
      </div>
    </div>
    <div class="right">
      <div class="content">
        <h2>Üdvözöljük a Comnica Signature-ben!</h2>
        <div>
          A következőkben végigvezetjük a dokumentumai elfogadásán és aláírásán. A folyamat több percet is igénybe vehet,
          ezért kérjük, csak akkor kezdje el, ha készen áll rá.
        </div>
        <CButton @click="()=>{console.log('Button is clicked')}" msg="Kezdhetjük"/>
      </div>
    </div>
  </div>
</template>

<script>
import CButton from './components/CButton.vue'

export default {
  name: 'App',
  components: {
    CButton
  }
}

</script>

<style lang="scss">
body {
  margin: 0;
  font-family: Roboto,serif;
  background-image: url("./assets/background-wave.svg");
  background-color: #cccccc;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100vh;
  color: #31363c;
  font-weight: 800;
}

.container {
  display: flex;
  height: 100vh;
  .header {
    display: flex;
    justify-content: left;
    align-items: center;
    color: white;
    height: 10vh;
    .logo {
      margin-left: 20px;
      height: 4rem;
      width: 8rem;
    }
  }
  .left {
    flex: 6;
    h1 {
      font-size: 2em;
      color: #186553;
    }
    .content {
      padding: 3rem 6rem;
    }
    img {
      float: right;
      margin-right: 6rem;
      width: 300px;
    }
  }
  .right {
    flex: 3;
    padding: 3rem 6rem;
    background: rgba(41, 169, 139, 0.13);
    h2 {
      color: #682c5d;
    }
    .content {
      margin-top: 10vh;
      button {
        margin-top: 2rem;
      }
    }
  }
}

</style>
