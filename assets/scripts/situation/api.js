import config from '../config.js';

// Situations Index = GET
const indexSituation = () => {
    return $.ajax({
        url: config.apiUrl + '/situations',
        method: 'GET'
    })
}

// Situation Create = POST
const createSituation = (data) => {
    return $.ajax({
        url: config.apiUrl + '/situations',
        method: 'POST',
        data
    })
}

module.exports = {
    indexSituation,
    createSituation
}