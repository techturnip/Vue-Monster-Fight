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
      this.gameIsRunning = true
      // Reset health for fresh game
      this.playerHealth = 100
      this.monsterHealth = 100
    },
    attack: function () {
      // set damage to be a random amount between 3 and 10
      let damage = this.calculateDamage(3, 10)

      // decrement monsterHealth by the damage inflicted
      this.monsterHealth -= damage

      // check if won
      if (this.checkWin()) {
        // return from attack method
        return
      }

      // Monster damage to player
      // TODO: refactor to be more DRY
      damage = this.calculateDamage(5, 12)
      this.playerHealth -= damage

      // check for win
      // no need for if
      // no additional code after checkWin
      this.checkWin()
    },
    specialAttack: function () {},
    heal: function () {},
    giveUp: function () {},
    calculateDamage: function (min, max) {
      return Math.max(Math.floor(Math.random() * max) + 1, min)
    },
    checkWin: function () {
      // if monster health <= 0 then you win
      if (this.monsterHealth <= 0) {
        // setup confirm dialog
        if (confirm('You won! New Game?')) {
          this.startGame()
        } else {
          this.gameIsRunning = false;
        }
        return true
      } else if (this.playerHealth <= 0) {
        // setup confirm dialog
        if (confirm('You lost... New Game?')) {
          this.startGame()
        } else {
          this.gameIsRunning = false;
        }
        return true
      }
      // game will continue
      return false
    }
  }
})