/**
 * Return the first `count` items of an array.
 * Usage: {% for post in collections.post | reverse | limit(3) %}
 */
module.exports = function (array, count) {
    return array.slice(0, count);
};
