/*

DESCRIPTION:
A child is playing with a ball on the nth floor of a tall building. The height of this floor above ground level, h, is known.

He drops the ball out of the window. The ball bounces (for example), to two-thirds of its height (a bounce of 0.66).

His mother looks out of a window 1.5 meters from the ground.

How many times will the mother see the ball pass in front of her window (including when it's falling and bouncing)?

Three conditions must be met for a valid experiment:
Float parameter "h" in meters must be greater than 0
Float parameter "bounce" must be greater than 0 and less than 1
Float parameter "window" must be less than h.
If all three conditions above are fulfilled, return a positive integer, otherwise return -1.

Note:
The ball can only be seen if the height of the rebounding ball is strictly greater than the window parameter.

Examples:
- h = 3, bounce = 0.66, window = 1.5, result is 3

- h = 3, bounce = 1, window = 1.5, result is -1 

(Condition 2) not fulfilled).

*/

// My Solution:

function bouncingBall(h, bounce, window) {
  let ballSeen = -1;
  const findBallHeight = function (h, bounce) {
    return h * bounce;
  };
  while (h > window) {
    if (bounce > 0 && bounce < 1) {
      h = findBallHeight(h, bounce);
      ballSeen += 2;
    } else return -1;
  }
  return ballSeen;
}

//----------------------------------------------------------------------------------------------

// Other Solutions:

function bouncingBall(h, bounce, window) {
  var rebounds = -1;
  if (bounce > 0 && bounce < 1)
    while (h > window) (rebounds += 2), (h *= bounce);
  return rebounds;
}

//-----------------------------------------------------------------------------------------------

function bouncingBall(h, bounce, window) {
  if (h <= 0 || bounce >= 1 || bounce <= 0 || window >= h) return -1;
  let seen = 0;

  while (h > window) {
    seen += 1;
    h *= bounce;
    if (h > window) seen += 1;
  }

  return seen;
}

//------------------------------------------------------------------------------------------------

// Solution uses recursive function
function bouncingBall(h, bounce, window) {
  if (h <= 0 || bounce <= 0 || bounce >= 1 || window >= h) {
    return -1;
  }

  var newHeight = h * bounce;
  return bouncingBall(newHeight, bounce, window) + 2;
}

//------------------------------------------------------------------------------------------------

function bouncingBall(h, bounce, window) {
  // your code here
  const isHeightValid = h > 0;
  const isBounceValid = bounce > 0 && bounce < 1;
  const isWindowValid = window < h;

  if (isHeightValid && isBounceValid && isWindowValid) {
    let currentHeight = h;
    let sightings = 0;
    const calculateCurrentHeight = (height, bounce) => {
      const newHeight = height * bounce;
      return newHeight;
    };

    while (currentHeight > window) {
      // before bounce sighting
      sightings += 1;

      currentHeight = calculateCurrentHeight(currentHeight, bounce);

      if (currentHeight > window) {
        sightings += 1;
      }
    }

    return sightings;
  } else {
    return -1;
  }
}
