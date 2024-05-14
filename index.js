/**
 * Debugging Guide
 * 1. Make the code more readable
 * 2. Pick up calculation errors
 * 3. Make these calculations robust such that the calculation does not give an incorrect result, it throws an error to the user if something has gone wrong (parameter used with an incorrect unit of measurement, etc)
 */

// Function to calculate new velocity based on acceleration
const calcNewVel = ({ vel, acc, time }) => { 
  if (typeof vel !== 'number' || typeof acc !== 'number' || typeof time !== 'number') {
      throw new Error('Invalid input. All parameters must be numbers.');
  }
  // Convert velocity from km/h to m/s
  const vel_mps = vel * (1000 / 3600); // converting km/h to m/s

  // Calculate new velocity
  const newVel_mps = vel_mps + (acc * time);

  // Convert back to km/h
  const newVel_kmph = newVel_mps * (3600 / 1000); // converting m/s to km/h

  return newVel_kmph;
}

// Given Parameters
const initialParams = {
  vel: 10000, // velocity (km/h)
  acc: 3, // acceleration (m/s^2)
  time: 3600, // seconds (1 hour)
  d: 0, // distance (km)
  fuel: 5000, // remaining fuel (kg)
  fbr: 0.5 // fuel burn rate (kg/s)
};

try {
  // Calculate new velocity
  const vel2 = calcNewVel(initialParams);

  // Calculate new distance
  const d2 = initialParams.d + (initialParams.vel * (initialParams.time / 3600));

  // Calculate remaining fuel
  const rf = initialParams.fuel - (initialParams.fbr * initialParams.time);

  // Output corrected results
  console.log(`Corrected New Velocity: ${vel2.toFixed(2)} km/h`);
  console.log(`Corrected New Distance: ${d2.toFixed(2)} km`);
  console.log(`Corrected Remaining Fuel: ${rf.toFixed(2)} kg`);
} catch (error) {
  console.error("An error occurred:", error.message);
}
