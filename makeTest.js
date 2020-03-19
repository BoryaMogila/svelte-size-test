const fs = require('fs');
const config = require('config');
const makeComponent = require('./makeTestComponent');
const makeDir = require('./makeTestDir');

makeDir();
const imports = [];
const views = [];
for(let i = 1; i < (config.componentsCount + 1); i++){
  const component = makeComponent(i);
  fs.writeFileSync(`./src/test/component_${i}.svelte`, component, () => 1);
  imports.push(`import Component_${i} from './test/component_${i}.svelte'`)
  views.push(`<Component_${i} />`)
}

fs.writeFileSync(`./src/App.svelte`, `<script>
  ${imports.join('\n')}
</script>
${views.join('\n')}
`, () => 1);
