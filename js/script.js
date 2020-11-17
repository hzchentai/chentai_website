//jQuery to collapse the navbar on scroll
var header_height  = $('.navbar').height(),
    intro_height    = $('.intro-section').height(),
    offset_val = intro_height + header_height;
$(window).scroll(function() {
  var scroll_top = $(window).scrollTop();
    if (scroll_top >= offset_val) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
            $(".navbar-fixed-top").removeClass("navbar-transparent");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
      $(".navbar-fixed-top").addClass("navbar-transparent");
    }
});

//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

//初始化地图插件
window.onload = function(){
    var map = new AMap.Map("map-container", {
        mapStyle: 'amap://styles/macaron',
        zoom: 14, //设置地图显示的缩放级别
        center: [120.312482,30.76368] //设置地图中心点坐标
    });

    // 创建一个 Marker 实例：（标记点）
    var marker = new AMap.Marker({
        position: new AMap.LngLat(120.312482,30.76368), // 经纬度对象，也可以是经纬度构成的一维数组[116.39, 39.9]
        title: "湖州辰泰不锈钢有限公司"
    });

    // 将创建的点标记添加到已有的地图实例：
    map.add(marker);

    AMap.plugin([
        'AMap.ToolBar',
        'AMap.Scale',
    ], function(){
        // 在图面添加工具条控件，工具条控件集成了缩放、平移、定位等功能按钮在内的组合控件
        map.addControl(new AMap.ToolBar());
        // 在图面添加比例尺控件，展示地图在当前层级和纬度下的比例尺
        map.addControl(new AMap.Scale());  
    });

    var infoWindow = new AMap.InfoWindow({
        anchor: 'top-center',
        content: '湖州辰泰不锈钢有限公司',
    });

    infoWindow.open(map,[120.312482,30.76368])

}

// //jQuery to collapse the navbar on scroll
// $(window).scroll(function() {
//     if ($(".navbar").offset().top > 100) {
//         $(".navbar-fixed-top").addClass("top-nav-collapse");
//             $(".navbar-fixed-top").removeClass("navbar-transparent");
//     } else {
//         $(".navbar-fixed-top").removeClass("top-nav-collapse");
//       $(".navbar-fixed-top").addClass("navbar-transparent");
//     }
// });
