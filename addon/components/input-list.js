import Ember from 'ember';
import layout from '../templates/components/input-list';

export default Ember.Component.extend({
  layout

  emptyText: null,
  selectAllEnabled: true,
  type: 'checkbox',

  objects: null,  //list of Ember.Objects
  //selectedObject: null,
  selectedObjects: null,
  validObjects: null,
  invalidObjects: null,
  canDisable: false,
  useCheckboxes: computed.equal('type', 'checkbox'),
  useRadioButtons: computed.equal('type', 'radio'),
  numberOfColumns: 2, //default 2 columns

  columnClass: computed('numberOfColumns', function columnClass() {
    return `col-sm-${parseInt(12 / this.get('numberOfColumns'), 10)}`;
  }),


  actions: {
    selectObject(object) {
      this.sendAction('selectObject', object);
    },

    toggleObject(object, isSelected) {
      let action = isSelected ? 'addObject' : 'removeObject';
      this.sendAction(action, object);
    },

    selectAll() {
      this.sendAction('selectAll');
    },

    deselectAll() {
      this.sendAction('deselectAll');
    }
  }
});
