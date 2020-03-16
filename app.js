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
      // decrement monsterHealth by the damage inflicted
      this.monsterHealth -= this.calculateDamage(3, 10)

      // check if won
      if (this.checkWin()) {
        // return from attack method
        return
      }

      // monster attack
      this.monsterAttacks()
    },
    specialAttack: function () {
      // decrement monsterHealth by the damage inflicted
      this.monsterHealth -= this.calculateDamage(10, 20)

      // check if won
      if (this.checkWin()) {
        // return from attack method
        return
      }

      // monster attack
      this.monsterAttacks()
    },
    heal: function () {
      if (this.playerHealth <= 90) {
        // increase player health by 10
        this.playerHealth += 10
      } else {
        // set player health to 100, (no over-healing)
        this.playerHealth = 100
      }

      // monster attacks
      this.monsterAttacks();
    },
    giveUp: function () {
      this.gameIsRunning = false;
    },
    monsterAttacks: function () {
      // Monster damage to player
      this.playerHealth -= this.calculateDamage(5, 12)

      // check for win
      // no need for if
      // no additional code after checkWin
      this.checkWin()
    },
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