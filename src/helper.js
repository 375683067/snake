export const range = function(num, from, to) {
    num = Math.max(num, from);
    num = Math.min(num, to);
    return num;
};