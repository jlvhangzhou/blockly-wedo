define(["../wedo-names"], function(names) {

  function getChar(index) {
    return String.fromCharCode(65+index);
  }

  var directions = [];
  directions.push(["this way", names.THIS_WAY]);
  directions.push(["that way", names.THAT_WAY]);
  directions.push(["other way", names.OTHER_WAY]);

  var letterList = [];
  var sensorList = [];
  for (var i = 0; i < 10; i++) {
    var ch = getChar(i);
    letterList.push(["motor " + ch, ch]);
    sensorList.push([ch, ch]);
  }
  letterList.push(["everything", "all"]);
    
  var wedoList = [];
  for (var i = 1; i < 6; i++) {
    wedoList.push([i.toString(), i.toString()]);
  }

  var octaves = [];
  for (var i = 0; i < 6; i++) {
    octaves.push([i.toString(), i.toString()]);
  }
  
  return {
    directions: directions,
    letterList: letterList,
    sensorList: sensorList,
    wedoList: wedoList,
    types: {
      SENSOR: "Sensor",
      NUMBER: "Number",
      STRING: "String",
      VARIABLE: "Variable",
      EXPRESSION: "Expression",
      TILT: "Tilt"
    },
    comparisons: [["=", "=="], [">", ">"], ["<", "<"], [">=", ">="], ["<=", "<="], ["not =", "!="]],
    tilts: [["this way", "== 2"], ["that way", "== 4"], ["up", "== 3"], ["down", "== 1"], ["none", "== 0"], ["any way", "> 0"]],
    ledColors: [["off", "0"], ["pink", "1"], ["purple", "2"], ["blue", "3"], ["sky blue", "4"], ["teal", "5"], ["green", "6"], ["yellow", "7"], ["orange", "8"], ["red", "9"], ["white","10"]],
	notes: [["C", "1"], ["C#", "2"], ["D", "3"], ["D#", "4"], ["E", "5"], ["F", "6"], ["F#", "7"], ["G", "8"], ["G#", "9"], ["A", "10"], ["A#", "11"], ["B", "12"]],
    octaves: octaves,
	colors: {
      default: "#bbbbbb",
      start: "#007a29",
      output: "#5ba5a5",
      delays: "#49a6d4",
      variables: "#d05f2d",
      input: "#cc0000",
      flow: "#cc0000",
      loops: "#77ab41",
      computer: "#505049",
      procedures: "#7c5385",
      comment: "#fffacd"
    }
  }



});
