module.exports = function makeComponent (number) {
  return `
  <script type="module">
    let number = ${number};
    function onClick(){
      number += 1;
    }
  </script>
  <style>
    button {
      border-radius: 30px;
    }
  </style>
  <div>{number} <button on:click={onClick}>Додати 1</button></div>
  `
}
