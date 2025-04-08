<template>
  <div class="contact" id="contact">
      <h3>{{$translate('聯絡我','Contact me')}}</h3>
          <form method="POST" action="https://formspree.io/chantszching1109@gmail.com">
            <div><input type="text" name="Your Name" :placeholder="$translate('姓名','Name')" required=""></div>
            <div><input type="email" name="Your Email" :placeholder="$translate('電郵','Email')" required=""></div>
            <div><textarea name="message" :placeholder="$translate('訊息','Message')" required=""></textarea></div>
            <div><button class="submitBtn" type="submit">{{$translate('確定','Submit')}}</button></div>
          </form>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    
})
</script>

<style>
.contact {
    padding-top: 2%;
    background-color: #ecb731;
}

form {
    background: #ecb731;    
    padding: 5%;
}
form div {
    margin-bottom: 3%;
    width: 100%;
}
input, textarea {
    width: 100%;
    background: transparent;
    color: #fff;
    outline: none;
    border: none;
    border-bottom: 1px solid #fff;
    font-size: 14px;
}
textarea {
    min-height: 100px;
}
::placeholder {
  color: white;
}
.submitBtn {
    display: block;
    background: #171717;
    border: none;
    color: #FFF;
    padding: 1%;
    font-size: 1em;
    transition: .5s ease-in-out;
    -webkit-transition: .5s ease-in-out;
}
.submitBtn:hover {
    background: #ffffff;
    color: #000;
    transition: .5s ease-in-out;
    -webkit-transition: .5s ease-in-out;
    cursor: pointer;
}
</style>