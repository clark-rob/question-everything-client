import indexSituationBar from '../templates/index-situation.handlebars'


const indexSituationSuccess = data => {
    const situations = data.situations
    // situations.forEach(situation => {
    //     console.log(situation.name)
    //     $('.situation-view').html(situation.name)
    // })
    const allSituations = indexSituationBar({ situations:data.situations })
    $('.situation-view').html(allSituations)
}

const createSituationSuccess = data => {
    console.log(data.situation.name)
    $('.situation-create-message').html(`What questions do you have on ${data.situation.name}?`)
}

module.exports = {
    indexSituationSuccess,
    createSituationSuccess
}