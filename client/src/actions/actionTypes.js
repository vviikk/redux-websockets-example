import { getObjectFromArray } from '../../../common/utils';

const actionTypes = getObjectFromArray(
  ['typingStarted', 'typingStopped', 'messageSendRequested'],
);

module.exports = actionTypes;

