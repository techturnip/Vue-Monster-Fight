new Vue({
  el: '#app',
  data: {
    playerHealth: 100,
    monsterHealth: 100,
    gameIsRunning: false,
    turns: []
  },
  methods: {
    startGame: function() {
      // Set boolean to true
      this.gameIsRunning = true;
      // Reset health for fresh game
      this.playerHealth = 100;
      this.monsterHealth = 100;
    },
    attack: function() {
      // store dmg variable so it can be used in log
      let dmg = this.calculateDamage(3, 10);

      // decrement monsterHealth by the damage inflicted
      this.monsterHealth -= dmg;

      // add action to log
      this.turns.unshift({
        isPlayer: true,
        text: 'Player hits Monster for ' + dmg
      });

      // check if won
      if (this.checkWin()) {
        // return from attack method
        return;
      }

      // monster attack
      this.monsterAttacks();
    },
    specialAttack: function() {
      // store dmg variable so it can be used in log
      let dmg = this.calculateDamage(10, 20);

      // decrement monsterHealth by the damage inflicted
      this.monsterHealth -= dmg;

      // add action to log
      this.turns.unshift({
        isPlayer: true,
        text: 'Player hits Monster hard for ' + dmg
      });

      // check if won
      if (this.checkWin()) {
        // return from attack method
        return;
      }

      // monster attack
      this.monsterAttacks();
    },
    heal: function() {
      if (this.playerHealth <= 90) {
        // increase player health by 10
        this.playerHealth += 10;
      } else {
        // set player health to 100, (no over-healing)
        this.playerHealth = 100;
      }

      // add action to log
      this.turns.unshift({
        isPlayer: true,
        text: 'Player heals for 10'
      });

      // monster attacks
      this.monsterAttacks();
    },
    giveUp: function() {
      this.gameIsRunning = false;
    },
    monsterAttacks: function() {
      // store dmg in variable for log access
      let dmg = this.calculateDamage(5, 12);

      // Monster damage to player
      this.playerHealth -= dmg;

      // add action to log
      this.turns.unshift({
        isPlayer: false,
        text: 'Monster hits Player for ' + dmg
      });

      // check for win
      // no need for if
      // no additional code after checkWin
      this.checkWin();
    },
    calculateDamage: function(min, max) {
      return Math.max(Math.floor(Math.random() * max) + 1, min);
    },
    checkWin: function() {
      // if monster health <= 0 then you win
      if (this.monsterHealth <= 0) {
        // setup confirm dialog
        if (confirm('You won! New Game?')) {
          this.startGame();
        } else {
          this.gameIsRunning = false;
        }
        return true;
      } else if (this.playerHealth <= 0) {
        // setup confirm dialog
        if (confirm('You lost... New Game?')) {
          this.startGame();
        } else {
          this.gameIsRunning = false;
        }
        return true;
      }
      // game will continue
      return false;
    }
  }
});
