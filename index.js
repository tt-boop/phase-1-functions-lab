function distanceFromHqInBlocks(numOfBlocks) {
    if (numOfBlocks > 42) {
      return numOfBlocks - 42;
    } else {
      return 42 - numOfBlocks;
    }
  }
  
  function distanceFromHqInFeet(numOfBlocks) {
    let distanceInBlocks = distanceFromHqInBlocks(numOfBlocks);
    let distanceInFeet = distanceInBlocks * 264;
    return distanceInFeet;
  }
  function distanceTravelledInFeet(start, destination) {
    let blocksTravelled = Math.abs(destination - start);
    let feetTravelled = blocksTravelled * 264;
    return feetTravelled;
  }

  function calculatesFarePrice(start, destination) {
    let distance = distanceTravelledInFeet(start, destination);
  
    if (distance <= 400) {
      return 0;
    } else if (distance > 400 && distance <= 2000) {
      return (distance - 400) * 0.02;
    } else if (distance > 2000 && distance <= 2500) {
      return 25;
    } else {
      return 'cannot travel that far';
    }
  }
  
  
  