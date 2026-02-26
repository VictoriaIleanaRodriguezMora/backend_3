const fs = require("fs");

class Tareas {
  constructor() {
    this.tareas = [];
  }

  list() {
    return this.tareas;
  }
}

module.exports = { Tareas };
