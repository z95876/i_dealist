(function ($) {
    "use strict";

    var carousel = function() {
		$('.carousel-testimony').owlCarousel({
			center: true,
			loop: true,
			items: 1,
			margin: 30,
			stagePadding: 0,
			nav: true,
			navText: ['<span class="fa fa-angle-left">', '<span class="fa fa-angle-right">'],
			responsive: {
				0: {
					items: 1
				},
				600: {
					items: 2
				},
				1000: {
					items: 3
				}
			}
		});

	};
    carousel();	

    var fullHeight = function () {

        $('.js-fullheight').css('height', $(window).height());
        $(window).resize(function () {
            $('.js-fullheight').css('height', $(window).height());
        });

    };
    // 调用函数，执行设置操作
    fullHeight();

    var counter = function () {
        // 滚动监听
        $('#section-counter').waypoint(function (direction) {
            // 如果向下滚动，并且元素属于ca-animated类别，再开始执行数字滚动效果
            if (direction === 'down' && !$(this.element).hasClass('ca-animated')) {

                var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',')
                $('.number').each(function () {
                    var $this = $(this),
                        num = $this.data('number');
                    console.log(num);
                    $this.animateNumber(
                        {
                            number: num,
                            numberStep: comma_separator_number_step
                        }, 1500
                    );
                });

            }

        }, { offset: '95%' })

    }
    //调用动态数字函数
    counter();

})(jQuery);