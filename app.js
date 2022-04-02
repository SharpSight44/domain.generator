let pronoun1 = ['the', 'our'];
let adj1 = ['great','final', 'big'];
let noun1 = ['wedding', 'fight','king'];
let dom1 = ['.com','.org','.uk'];

  function generateDom(pro,adj,noun,dom) {

for(let word of pro)
for(let letter of adj)
for(let char of noun)
  for(let end of dom)
console.log(word + letter + char + end);
    }
generateDom(pronoun1,adj1,noun1,dom1);
