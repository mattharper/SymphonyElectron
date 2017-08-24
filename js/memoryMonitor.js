'use strict';

const log = require('./log.js');
const logLevels = require('./enums/logLevels.js');

// once a minute
setInterval(gatherMemory, 1000 * 60);

function gatherMemory() {
    let memory = process.getProcessMemoryInfo();
    let details =
        'workingSetSize: ' + memory.workingSetSize +
        ' peakWorkingSetSize: ' + memory.peakWorkingSetSize +
        ' privatesBytes: ' + memory.privatesBytes +
        ' sharedBytes: ' + memory.sharedBytes;
    log.send(logLevels.INFO, details);
}
