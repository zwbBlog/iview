const comJS = {
    asideClick: function() {
        $('.one').on('click', function() {
            $(this).children('.two').slideToggle().end().siblings('.one').children('.two').slideUp().end().find('i').attr({
                class: 'el-icon-arrow-right'
            });
            if ($(this).children('i').attr('class') == 'el-icon-arrow-right') {
                $(this).children('i').attr({
                    'class': 'el-icon-arrow-down'
                })
            } else {
                $(this).children('i').attr({
                    'class': 'el-icon-arrow-right'
                })
            }
        });
        $('.two>li').on('click', function(event) {
            event.stopPropagation();
            $(this).addClass('curBg').siblings('li').removeClass('curBg');
            $(this).parents('.one').siblings('.one').find('li').removeClass('curBg');
        });
        $('.one>i').attr({
            class: 'el-icon-arrow-right'
        });
    }
};



export default comJS;