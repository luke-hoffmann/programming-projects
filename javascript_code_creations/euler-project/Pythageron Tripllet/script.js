// a**2 + b**2 = c**2

// a+b+c = 1000
// determine a*b*c
function DetermineIfTriplet(a,b,c) {
    let leftSideArgument = (a**2) + (b**2);
    let rightSideArgument = c**2;
    if (leftSideArgument == rightSideArgument) return true;
    return false;
}
function DetermineIfSumTo(d,e,f,n) {
    return d+e+f == n;
}
function GetTriplets(upperLimitOfFinding) {

    for ( let i =0; i < upperLimitOfFinding/2; i++) {
        for ( let j =0 ; j < upperLimitOfFinding/2; j++){
            for (let k = 0; k < upperLimitOfFinding;k++) {
                if (!DetermineIfTriplet(i,j,k)) continue;

                if(DetermineIfSumTo(i,j,k,upperLimitOfFinding)) return i*j*k;
                    
                
            }
        }
    }
}