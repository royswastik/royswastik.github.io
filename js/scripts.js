/*!
    Title: Swastik Roy |  Portfolio
    Version: 1.0.0
    Author: Swastik Roy
*/


function loadJQuery(){
  $('html').removeClass('no-js');

  // Animate to section when nav is clicked
  $('header a').click(function(e) {

      // Treat as normal link if no-scroll class
      if ($(this).hasClass('no-scroll')) return;

      e.preventDefault();
      var heading = $(this).attr('href');
      var scrollDistance = $(heading).offset().top;

      $('html, body').animate({
          scrollTop: scrollDistance + 'px'
      }, Math.abs(window.pageYOffset - $(heading).offset().top) / 3);

      // Hide the menu once clicked if mobile
      if ($('header').hasClass('active')) {
          $('header, body').removeClass('active');
      }
  });

  // Scroll to top
  $('#to-top').click(function() {
      $('html, body').animate({
          scrollTop: 0
      }, 500);
  });

  // Scroll to first element
  $('#lead-down span').click(function() {
      var scrollDistance = $('#lead').next().offset().top;
      $('html, body').animate({
          scrollTop: scrollDistance + 'px'
      }, 500);
  });

  // Create timeline
  $('#experience-timeline').each(function() {

      // $this = $(this); // Store reference to this
      // $userContent = $this.children('div'); // user content
      //
      // // Create each timeline block
      // $userContent.each(function() {
      //     $(this).addClass('vtimeline-content').wrap('<div class="vtimeline-point"><div class="vtimeline-block"></div></div>');
      // });
      //
      // // Add icons to each block
      // $this.find('.vtimeline-point').each(function() {
      //     $(this).prepend('<div class="vtimeline-icon"><i class="fa fa-map-marker"></i></div>');
      // });



      // Add dates to the timeline if exists
      // $this.find('.vtimeline-content').each(function() {
      //     var date = $(this).data('date');
      //     if (date) { // Prepend if exists
      //         $(this).parent().prepend('<span class="vtimeline-date">'+date+'</span>');
      //     }
      // });

  });

  // Open mobile menu
  $('#mobile-menu-open').click(function() {
      $('header, body').addClass('active');
  });

  // Close mobile menu
  $('#mobile-menu-close').click(function() {
      $('header, body').removeClass('active');
  });

  // Load additional projects
  $('#view-more-projects').click(function(e){
      e.preventDefault();
      $(this).fadeOut(300, function() {
          $('#more-projects').fadeIn(300);
      });
  });


  $('#attribute-ticker').vTicker();

}
//
// (function($) {
//
//     // Remove no-js class
//
//
// })(jQuery);



var app4 = new Vue({
  el: '#vue-app',
  data: data,
  filters: {
    titleCase: function (str) {
      if ((str===null) || (str===''))
         return false;
    else
      str = str.toString();
    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
    }
    ,imgPath: function(str){
        return 'images' + replace(/^\s*|\s*$/g,'').toLowerCase()+'.png';
    }
  },
  mounted:function(){
    $('#experience-timeline').each(function() {

        $this = $(this); // Store reference to this

        $this = $(this); // Store reference to this
        $userContent = $this.children('div'); // user content

        // Create each timeline block
        $userContent.each(function() {
            $(this).addClass('vtimeline-content').wrap('<div class="vtimeline-point"><div class="vtimeline-block"></div></div>');
        });

        // Add icons to each block
        $this.find('.vtimeline-point').each(function() {
            $(this).prepend('<div class="vtimeline-icon"><i class="fa fa-map-marker"></i></div>');
        });


        $this.find('.vtimeline-content').each(function() {
            var date = $(this).find('span.data-date').html();
            if (date) { // Prepend if exists
                $(this).parent().prepend('<span class="vtimeline-date">'+date+'</span>');
            }
        });

        $("#pre-loader").hide();

    });

    loadJQuery();
  }
});


particlesJS("lead-overlay", {"particles":{"number":{"value":115,"density":{"enable":true,"value_area":540}},"color":{"value":"#ffffff"},"shape":{"type":"circle","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":4},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":0.352750653390415,"random":false,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},"size":{"value":3,"random":true,"anim":{"enable":false,"speed":40,"size_min":0.1,"sync":false}},"line_linked":{"enable":true,"distance":192.40944730386272,"color":"#ffffff","opacity":0.32068241217310456,"width":1.122388442605866},"move":{"enable":true,"speed":6.413648243462092,"direction":"none","random":false,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":1200}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":true,"mode":"repulse"},"onclick":{"enable":true,"mode":"push"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":400,"size":40,"duration":2,"opacity":8,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true});var count_particles, stats, update; stats = new Stats; stats.setMode(0); stats.domElement.style.position = 'absolute'; stats.domElement.style.left = '0px'; stats.domElement.style.top = '0px'; 
// document.body.appendChild(stats.domElement); 
count_particles = document.querySelector('.js-count-particles'); update = function() { stats.begin(); stats.end(); if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) { count_particles.innerText = window.pJSDom[0].pJS.particles.array.length; } requestAnimationFrame(update); }; requestAnimationFrame(update);;