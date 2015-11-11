define([
  "../wedo-constants"
  , "../../wedo-names"
  , "../../../../blockly/block-utils"
  , "../../../../lang"

],function(constants, names, blockUtils, lang){

  var blockDefs = window.Blockly.Blocks;

  var TYPES = constants.types;
  var comps = constants.comparisons;

  function getChar(index) {
    return String.fromCharCode(65+index);
  }

  var sensorList = [];
  for (var i = 0; i < 26; i++) {
    var ch = getChar(i);
    sensorList.push([ch, ch]);
  }

  blockDefs["wedo_if"] = {
    init: function() {
      this.appendDummyInput()
          .appendField(lang.blocks.get("IF"));
      this.appendValueInput("input")
          .setCheck([TYPES.NUMBER, TYPES.SENSOR]);
      this.appendDummyInput()
          .appendField(new Blockly.FieldDropdown(comps), "comp");
      this.appendValueInput("value")
          .setCheck([TYPES.NUMBER, TYPES.VARIABLE]);
      this.appendStatementInput("block");
      this.setColour(constants.colors.flow);
      this.setInputsInline(true);
      this.setPreviousStatement(true);
      this.setNextStatement(true);
      blockUtils.setupBlock(this);
    }
  };


  blockDefs["wedo_if_else"] = {
    init: function() {
      this.appendDummyInput()
          .appendField(lang.blocks.get("IF"));
      this.appendValueInput("input")
          .setCheck([TYPES.NUMBER, TYPES.SENSOR]);
      this.appendDummyInput()
          .appendField(new Blockly.FieldDropdown(comps), "comp");
      this.appendValueInput("value")
          .setCheck([TYPES.NUMBER, TYPES.VARIABLE]);
      this.appendStatementInput("trueblock");
      this.appendDummyInput()
          .appendField(lang.blocks.get("ELSE"));
      this.appendStatementInput("falseblock");
      this.setColour(constants.colors.flow);
      this.setInputsInline(true);
      this.setPreviousStatement(true);
      this.setNextStatement(true);
      blockUtils.setupBlock(this);
    }
  };

  var sensors = constants.sensors;

  blockDefs['sensor'] = {
    init: function() {
      this.appendDummyInput()
          .appendField(lang.blocks.get("SENSOR"))
          .appendField(new Blockly.FieldDropdown(sensorList), "sensor");
      this.setOutput(true, TYPES.SENSOR);
      this.setColour(constants.colors.input);
    }
  };

});
