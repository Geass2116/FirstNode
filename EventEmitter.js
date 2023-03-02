const EventEmitter = require('events');

const customEmitter = new EventEmitter();

customEmitter.on('response', (name,id) => {
    console.log('data of user :'+name+'id is:'+id);
})
customEmitter.on('response', () => {
    console.log('data');
})

customEmitter.emit('response','john',34);
customEmitter.emit('response');
