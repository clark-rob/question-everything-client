import indexSituationBar from '../templates/index-situation.handlebars'


const indexSituationSuccess = data => {
    const situations = data.situations
    console.log(situations)
    // situations.forEach(situation => {
    //     console.log(situation.name)
    //     $('.situation-view').html(situation.name)
    // })
    const allSituations = indexSituationBar({ situations:data.situations })
    $('.situation-view').html(allSituations)
}

module.exports = {
    indexSituationSuccess
}