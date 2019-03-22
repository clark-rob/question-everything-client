
const indexSituationSuccess = data => {
    console.log(data.situations[0])
    // const eachSituation = data.forEach(situation => {
    //     console.log(situation.name)
    // });
    // console.log(eachSituation)
    $('.situation-view').html(data.situations[0].name)
}

module.exports = {
    indexSituationSuccess
}