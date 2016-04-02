import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('view-academicprogramcodes', 'Integration | Component | view academicprogramcodes', {
  integration: true
});

test('it renders', function(assert) {
  
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });" + EOL + EOL +

  this.render(hbs`{{view-academicprogramcodes}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:" + EOL +
  this.render(hbs`
    {{#view-academicprogramcodes}}
      template block text
    {{/view-academicprogramcodes}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
