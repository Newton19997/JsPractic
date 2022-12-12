function reachTarget(target)
    {
        // Handling negatives by symmetry
        target = Math.abs(target);
           
        // Keep moving while sum is smaller
        // or difference is odd.
        let sum = 0, step = 0;
           
        while (sum < target || (sum - target) % 2 != 0) {
            step++;
            sum += step;
        }
        return step;
    }
 
// Driver code
 
    let target = 3;
      console.log(reachTarget(target));