const EventEmitter = require('events');

class School extends EventEmitter {
    startPeriod() {
        console.log('Class Started');
        // raise event when bellRing start
        // raise an Event
        setTimeout(() => {
            this.emit('bellRing', {
                period: 'first',
                text: ' period ended',
            });
        }, 2000);
    }
}
module.exports = School;
