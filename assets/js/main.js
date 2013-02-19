$(document).ready(function(){
  var $titles = $('h2');

  $titles.first().fitText(0.738, { maxFontSize: '130px' });
  $titles.find('strong').fitText(0.8, { maxFontSize: '120px' });
  $titles.find('span').fitText(1.2, { maxFontSize: '80px' });
})