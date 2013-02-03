
//whiskers75's FightCode Robot
//Licenced under the GPLv2 or higher
//Forks of this may not battle this robot.
//With whiskers75's Lock-On Tech (c)

var lastSighting = 60.123456789;
var lockonMultiplier = 2.123456789;
var magicNumber = 1.212121212121212121212121219;
var Robot = function(robot) {
  robot.ahead(12);
  robot.rotateCannon(2);
  robot.fire();
};

Robot.prototype.onHitByBullet = function(ev) {
    var robot;
    robot = ev.robot;
    robot.turn(90 + ev.bulletBearing);
    robot.rotateCannon(90 - ev.bulletBearing);
    robot.ahead(100);
    robot.rotateCannon(180);
    robot.back(magicNumber * lockonMultiplier);
};
Robot.prototype.onIdle = function(ev) {
    var robot = ev.robot;
    robot.rotateCannon(lastSighting / magicNumber);
    robot.ahead(5);
    robot.turn(lastSighting * magicNumber);
    robot.fire();
};

Robot.prototype.onScannedRobot = function(ev) {
    var robot = ev.robot;
    robot.fire();
    robot.rotateCannon(lastSighting / 6 - lastSighting /6 * lockonMultiplier);
    robot.rotateCannon(lastSighting / 6 - lastSighting /6 / lockonMultiplier);
    robot.rotateCannon(lastSighting / 6 - lastSighting /6 * lockonMultiplier);
    robot.rotateCannon(lastSighting / 6 - lastSighting /6 / lockonMultiplier);
};
