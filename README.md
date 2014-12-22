npmdatelog
==========

This package leverages npmlog to add a timestamp to each log record

For general usage, see https://github.com/npm/npmlog

==========

#Basic Usage

```
var log = require('npmdatelog')

log.enableDate('YYYY-MM-DD HH:mm:ss') // If you do not specify a format, the ISO format will be used

// additional stuff ---------------------------+
// message ----------+                         |
// prefix ----+      |                         |
// level -+   |      |                         |
//        v   v      v                         v
  log.info('fyi', 'I have a kitty cat: %j', myKittyCat)
```

##Disable Date

```
log.disableDate()
```
