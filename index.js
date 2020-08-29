const speedEnum = ['slow', 'average', 'fast'];
const wordsPerMinutes = {
    slow: 100,
    average: 130,
    fast: 160
};
function formatResult(result) {
    if (result < 0.001) {
        return result.toFixed(4);
    }
    else if (result < 0.01) {
        return result.toFixed(3);
    }
    if (result < 0.1) {
        return result.toFixed(2);
    }
    return result.toFixed(1);
}
function wordsToMinutes(text, speed) {
    speed = speedEnum.includes(speed) ? speed : 'average';
    const regex = /[A-Za-z\']+/mg;
    const matches = [...text.matchAll(regex)];
    const result = (matches.length / wordsPerMinutes[speed]);

    return formatResult(result);
}

function wordsToSeconds(text, speed) {
    const minutes = wordsToMinutes(text, speed);
    return minutes * 60;
}

function wordsToHours(text, speed) {
    const minutes = wordsToMinutes(text, speed);
    return formatResult(minutes / 60);
}
module.exports = {
    wordsToSeconds, wordsToMinutes, wordsToHours
};