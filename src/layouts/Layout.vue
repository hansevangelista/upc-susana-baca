<template>
  <div class="auth">
    <slot></slot>

    <audio autoplay loop volume=0.2>
    <source src="../assets/intro/music.mp3" type="audio/mpeg"> <!-- Added background audio -->
      Your browser does not support the audio element.
    </audio>

  </div>
</template>
