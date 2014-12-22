var log = require('npmlog'),
  extend = require('extend'),
  moment = require('moment')

var npmdatelog = {
  dateEnabled: false,
  dateFormat: undefined,
  enableDate: function(format) {
    this.dateEnabled = true
    if(format) {
      this.dateFormat = format
    }
  },
  disableDate: function() {
    this.dateEnabled = false
  },
  emitLog: function (m) {
    if (this._paused) {
      this._buffer.push(m)
      return
    }

    var l = log.levels[m.level]
    if (l === undefined) return
    if (l < this.levels[this.level]) return
    if (l > 0 && !isFinite(l)) return

    var style = this.style[m.level]
    var disp = this.disp[m.level] || m.level
    m.message.split(/\r?\n/).forEach(function (line) {
      if (this.heading) {
        this.write(this.heading, this.headingStyle)
        this.write(' ')
      }
      
      if(this.dateEnabled) {
        this.write('[' + moment().format(this.dateFormat) + '] ')
      }
      this.write(disp, log.style[m.level])
      var p = m.prefix || ''
      if (p) this.write(' ')
      log.write(p, this.prefixStyle)
      log.write(' ' + line + '\n')
    }, this)
  }
};

module.exports = extend(true, log, npmdatelog)
