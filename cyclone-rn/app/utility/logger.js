import Bugsnag from '@bugsnag/expo';

const log = (error) => Bugsnag.notify(error);
const start = () => Bugsnag.start();

// API key: 2c377321be6fdda886eca04a7fcbda71
export default { log, start };

// logger.start();
// logger.log(new Error('Error in app'));

