import config from '../config.js';

// Situations Index = GET
const indexSituation = () => {
    return $.ajax({
        url: config.apiUrl + '/situations',
        method: 'GET'
    })
}

module.exports = {
    indexSituation
}