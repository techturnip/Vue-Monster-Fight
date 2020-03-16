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
    attack: function () {
      // set max damage amount
      let max = 10;
      // set min damage amount
      let min = 3;
      // set damage to be a random amount between 3 and 10
      let damage = Math.max(Math.floor(Math.random() * max) + 1, min)

      // decrement monsterHealth by the damage inflicted
      this.monsterHealth -= damage;
    },
    specialAttack: function () {},
    heal: function () {},
    giveUp: function () {}
  }
})