const cfonts = require('cfonts')
const banner3 = cfonts.render((`MINI BOT`), {
font: 'tiny',             
align: 'center',           
background: 'transparent',  
letterSpacing: 1,           
lineHeight: 1,            
space: true,               
maxLength: '0',            
gradrient: [`red`,`red`],     
independentGradient: true, 
transitionGradient: true, 
env: 'node'
});  
const banner2 = cfonts.render(('https://youtube.com/@guedelinnovation'), {
font: 'console',
align: 'center',
colors: [`green`,`green`,`green`],
lineHeight: 1
});

module.exports = { banner2 , banner3 }