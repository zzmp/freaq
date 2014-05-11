define(['Model/Context', 'Model/UX', 'View/Mirror'],
       function (Context, UX, Mirror) {
  console.log('freaq out!');

  var context = new Context(document.querySelector('video'));
  var ux = new UX(context);

  var freaq = new Mirror(context, ux);
  window.freaq = freaq;

  freaq.checkMeOut = function() {
    console.log('Hungry for more?');
    console.log('Check out the source at github.com/zzmp/freaq');
  };
});
