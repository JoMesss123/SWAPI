<template>
    <div class="modal-overlay" @click="close">
      <div class="modal">
        <span class="close-button" @click="close">&times;</span>
        <slot></slot>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      close() {
        this.$emit("close");
      }
    }
  };
  </script>
  
  <style scoped>

@import url('https://fonts.googleapis.com/css2?family=Cinzel&family=Miltonian&display=swap');
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    color:#F6E00C;
    font-family: 'Miltonian', serif;
    font-size: x-large;
  }
  
  .modal {
    background-image: url("../assets/img/0ab2594de60ab1a81cbccbf70f33d876.gif");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  
    
    width: 80%;
    max-width: 800px;
    height: 50%;

    border-radius: 5px;
    padding: 20px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  }
  
  .close-button {
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
    font-size: 24px;
    color: #aaa;
  }
  </style>
  