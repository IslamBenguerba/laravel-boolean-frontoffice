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
    <h2 class="mb-3">Ecco come contattarci!</h2>

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

      <div class="w-100 text-end">
        <button type="submit" class="btn btn-primary">Invia</button>
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
  background-color: $color-text-light;
}

</style>