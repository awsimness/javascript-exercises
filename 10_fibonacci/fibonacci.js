const fibonacci = function(n) {
    nums=[1,1]
    if(n<0){
        return "OOPS"
    }
    else{
        for(i=0;i<n-1;i++){
            sum=nums[i]+nums[i+1]
            nums.push(sum)
        }
        return nums[n-1]
    }
};

// Do not edit below this line
module.exports = fibonacci;
