const fs = require('fs');
const makeComponent = require('./makeTestComponent');
const makeDir = require('./makeTestDir');

makeDir();
const imports = [];
for(let i = 1; i < 501; i++){
  const component = makeComponent(i);
  fs.writeFile(`./src/test/component_${i}.svelte`, component, () => 1);
  imports.push(`import('./test/component_${i}.svelte').then(({default: Component}) => components = components.concat(Component))`)
}

fs.writeFile(`./src/App.svelte`, `<script>
let components = [];
  
  ${imports.join('\n')}
</script>
<div>
{#if components.length}
  {#each components as cmp}
    <svelte:component this={cmp} />
  {/each}
{/if}
</div>
`, () => 1)
