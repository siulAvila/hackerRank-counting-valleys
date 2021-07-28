function countValleys(paths, steps) {
    let valleys = 0;
    let depth = 0;
    if (steps % 0) {
        throw Error('Invalid path')
    }
    for (const path of paths) {
        if (depth === -1 && path === 'U') {
            valleys++;
        }
        path === 'U' ? depth++ : depth--
    }
    return valleys

}

module.exports = countValleys;