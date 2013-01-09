fightcodebots
=============

My FightCode bots.

Bot Number 1:


//whiskers75's FightCode Robot
//Licenced under the GPLv2 or higher
//Forks of this may not battle this robot.
var Robot = function(robot) {
  robot.log("whiskers75's robot initialized");
};

Robot.prototype.onIdle = function(ev) {
    var robot = ev.robot;
    robot.ahead(100);
   robot.rotateCannon(45 - robot.life);
    robot.turn(90 - robot.life);
   robot.log("Idle...");
  
  
};

Robot.prototype.onScannedRobot = function(ev) {
    var robot = ev.robot;
    robot.fire();
  robot.log("Found Robot");

};
Robot.prototype.onWallCollision = function(ev) {
    var robot = ev.robot;
    robot.turn(180); // turn enought to be in a straight
                            // angle with the wall.
};
