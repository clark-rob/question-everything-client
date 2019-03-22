'use strict'

import situationEvents from './situation/events.js'

$(() => {
  $('.situation-btn').on('click', situationEvents.onIndexSituation),
  $('.situation-form').on('submit', situationEvents.onCreateSituation)
})
