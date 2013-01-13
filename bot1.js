
//whiskers75's FightCode Robot
//Licenced under the GPLv2 or higher
//Forks of this may not battle this robot.
//With whiskers75's Lock-On Tech (c)

var cannonStick = false;
var lastSighting = 60;
var Robot = function(robot) {
  robot.log("whiskers75's robot initialized");

};

Robot.prototype.onHitByBullet = function(ev) {
    var robot;
    robot = ev.robot;
    robot.turn(90 - ev.bulletBearing);
    robot.rotateCannon(90 - ev.bulletBearing);
    robot.fire();
  robot.fire();
  robot.fire();
  robot.ahead(100)
  robot.rotateCannon(180)
    cannonStick = true;
};
Robot.prototype.onIdle = function(ev) {
    var robot = ev.robot;
    robot.rotateCannon(lastSighting / 6);
  robot.ahead(5);

   robot.log("Idle...");
  
};

Robot.prototype.onScannedRobot = function(ev) {
    var robot = ev.robot;
    robot.fire();
  robot.log("Found Robot");
  robot.rotateCannon(lastSighting / 6 - lastSighting /6 * 3.15);
};
Robot.prototype.onWallCollision = function(ev) {
    var robot = ev.robot; // turn enought to be in a straight
                            // angle with the wall.
};
