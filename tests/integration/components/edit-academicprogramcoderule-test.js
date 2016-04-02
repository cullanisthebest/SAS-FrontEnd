import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('edit-academicprogramcoderule', 'Integration | Component | edit academicprogramcoderule', {
  integration: true
});

test('it renders', function(assert) {
  
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });" + EOL + EOL +

  this.render(hbs`{{edit-academicprogramcoderule}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:" + EOL +
  this.render(hbs`
    {{#edit-academicprogramcoderule}}
      template block text
    {{/edit-academicprogramcoderule}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
