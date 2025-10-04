import Drag from "./drag.js";

export default class Note extends Drag {
  constructor() {
    super();
    console.log("Ciao dal costruttore della classe Note");
  }
}
