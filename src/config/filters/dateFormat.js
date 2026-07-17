const { DateTime } = require("luxon");

/**
 * Format a JS date using a Luxon format token.
 * Usage: {{ post.date | dateFormat("LLL") }} -> "Feb"
 *        {{ post.date | dateFormat("d") }}   -> "24"
 */
module.exports = function (dateObj, format) {
    return DateTime.fromJSDate(dateObj).toFormat(format);
};
