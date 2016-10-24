
    window.onload = function() {

Jumper = function (index, game, player) {

  this.input ={
    left:false,
    right:false,
    up:false
  }

  var x = 550
  var y = 50
  var id

  player = game.add.sprite(100, 200, 'player');


  game.physics.arcade.enable(player);

  player.body.collideWorldBounds = true;
  player.body.gravity.y = 500;
};

Jumper.prototype.update = function() {

          game.physics.arcade.collide(player, platforms);
          player.body.velocity.x = 0;

          if(cursors.left.isDown){
            player.body.velocity.x = -250;
          }
          else if(cursors.right.isDown){
            player.body.velocity.x = 250;
          }
          if(cursors.up.isDown && (player.body.onFloor() || player.body.touching.down)){
            player.body.velocity.y = -400;
          }
};

Jumper.prototype.kill = function() {
          this.player.kill();
};

        //  Note that this html file is set to pull down Phaser 2.5.0 from the JS Delivr CDN.
        //  Although it will work fine with this tutorial, it's almost certainly not the most current version.
        //  Be sure to replace it with an updated version before you start experimenting with adding your own code.

        var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update});
        var player;
        var playforms;
        var cursors;
        var w;
        var a;
        var d;



        function preload () {
          game.stage.backgroundColor = '#85b5e1';

          game.load.image('player', 'phaser-dude.png');
          game.load.image('platform', 'platform.png');

        }

        function create () {

          player = game.add.sprite(100, 200, 'player');
          //player2 = game.add.sprite(150, 200, 'player');

          game.physics.arcade.enable(player);
          //game.physics.arcade.enable(player2);

          player.body.collideWorldBounds = true;
          player.body.gravity.y = 500;

          //wplayer2.body.collideWorldBounds = true;
          //player2.body.gravity.y = 500;

          platforms = game.add.physicsGroup();

          platforms.create(500, 200, 'platform');
          platforms.create(-200, 350, 'platform');
          platforms.create(400, 500, 'platform');
          platforms.create(100, 50, 'platform');

          platforms.setAll('body.immovable', true);

          cursors = game.input.keyboard.createCursorKeys();
         // w = game.input.keyboard.addkey(Phaser.Keyboad.W);
         // a = game.input.keyboard.addkey(Phaser.Keyboad.A);
         // d = game.input.keyboard.addkey(Phaser.Keyboad.D);
        }

        function update(){
          game.physics.arcade.collide(player, platforms);
          //game.physics.arcade.collide(player2, platforms);
          //game.physics.arcade.collide(player, player2);

              player.body.velocity.x = 0;

          if(cursors.left.isDown){
            player.body.velocity.x = -250;
          }
          else if(cursors.right.isDown){
            player.body.velocity.x = 250;
          }
          if(cursors.up.isDown && (player.body.onFloor() || player.body.touching.down)){
            player.body.velocity.y = -400;
          }

          //player2.body.velocity.x = 0;
        }
    };
