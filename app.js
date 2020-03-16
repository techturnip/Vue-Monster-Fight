new Vue({
  el: '#app',
  data: {
    playerHealth: 100,
    monsterHealth: 100,
    gameIsRunning: false
  },
  methods: {
    startGame: function () {
      // Set boolean to true
      this.gameIsRunning = true;
      // Reset health for fresh game
      this.playerHealth = 100;
      this.monsterHealth = 100;
    },
    attack: function () {},
    specialAttack: function () {},
    heal: function () {},
    giveUp: function () {}
  }
})