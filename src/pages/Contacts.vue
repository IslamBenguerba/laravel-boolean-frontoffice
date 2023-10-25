<script>

export default {

  data(){
    return{
      formData: {
        name: "",
        email: "",
        message: "",
        attachment: "",
      },
    }
  }

}
</script>

<template>
  <h1 class="mb-5">CONTATTI</h1>

  <div class="container">
    <h2 class="mb-3">Inviaci un messaggio, <span class="fs-6">non risponderemo!</span></h2>

    <div class="form-style">
      <form>
      <div class="mb-3">
        <label class="mb-2">Inserisci il Nome</label>
        <input type="text" class="form-control" v-model="formData.name" />
      </div>

      <div class="mb-3">
        <label class="mb-2">Inserisci l'email</label>
        <input type="text" class="form-control" v-model="formData.email" />
      </div>

      <div class="mb-3">
        <label class="mb-2">Scrivi il tuo messaggio</label>
        <textarea class="form-control" v-model="formData.message"></textarea>
      </div>

      <div class="w-100 text-end mt-5">
        <button type="submit" class="btn btn-primary my-btn">Invia</button>
      </div>
    </form>

    </div>



  </div>
</template>

<style lang="scss" scoped>
@import "../../scss/partials/variables";

label, h1, h2{
  color: $color-text-light;
}


h1 {
  text-align: center;
}


input, textarea{
  color: black;
  background-color: $color-text-light;
}

.my-btn{
  color: black;
  background-color: rgb(193, 168, 138);
  padding: 10px 30px;
}

</style>