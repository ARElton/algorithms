// Given a sorted array nums, remove the duplicates in-place 
// such that each element appears only once and returns the new length.

// Input: nums = [1,1,2]
// Output: 2, nums = [1,2]

var removeDuplicates = function(nums) {
    if (nums.length == 0) return 0
    let i = 0
    for (let j = 1; j < nums.length; j++) {
        if (nums[j] != nums[i]) {
            i++
            nums[i] = nums[j]
        }
    }
    return i + 1 
    
};