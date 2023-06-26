var nums = [];
var n = 100000;
for (let i = 0; i < n; i++) {
    nums.push(i);
}
function myfun(nums, target) {
    let i = 0;
    let j = nums.length - 1;
    while (i < j)
    {
        const sum = nums[i] + nums[j];
        if (sum === target)
        {
            return [nums[i], nums[j]];
        } else if (sum < target) {
            i++;
        }
        else
        {
            j--;
        }
    }
    return [];
}
console.log(myfun(nums, 150900));
