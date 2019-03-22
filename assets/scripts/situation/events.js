import api from './api.js'
import ui from './ui.js'
import getFormFields from '../../../lib/get-form-fields'

const onIndexSituation = (event) => {
    // prevent window refresh on load
    event.preventDefault()
    // all situations are shown from the api INDEX call
    api.indexSituation()
        .then(ui.indexSituationSuccess)
        // .then($('.situations-view').show())
}

const onCreateSituation = (event) => {
    event.preventDefault()
    // retrieve input value of new situation
    const data = getFormFields(event.target)
    // send data to api CREATE call
    api.createSituation(data)
        .then(ui.createSituationSuccess)
}

module.exports = {
    onIndexSituation,
    onCreateSituation
}