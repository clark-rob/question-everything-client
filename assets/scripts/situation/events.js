import api from './api.js'
import ui from './ui.js'

const onIndexSituation = (event) => {
    // prevent window refresh on load
    event.preventDefault()
    // all situations are shown from the api INDEX call
    api.indexSituation()
        .then(ui.indexSituationSuccess)
        // .then($('.situations-view').show())
}

module.exports = {
    onIndexSituation
}