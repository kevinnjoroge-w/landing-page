// This is a scientific calculation function
function calculateScientific(value) {
    // Example scientific calculations
    return {
        square: value * value,
        squareRoot: Math.sqrt(value),
        cube: value * value * value,
        cubeRoot: Math.cbrt(value),
        logarithm: Math.log(value),
        exponential: Math.exp(value)
    };
}

// Example usage
console.log(calculateScientific(4));
