// JavaScript Document
$(function(){
	$(".ul li").each(function(){
          if($(this).children("a").hasClass("xz"))
          {
              $(this).hover(function(){
                                        $(this).children(".xl").stop(true,false).slideDown()
                                     },function(){
                                         $(this).children(".xl").stop(true,false).slideUp()
                                     })
              }
             else{
                 $(this).hover(function(){
                                        $(this).children("a").addClass("xz");
                                        $(this).children(".xl").stop(true,false).slideDown()
                                     },function(){
                                        $(this).children("a").removeClass("xz");
                                        $(this).children(".xl").stop(true,false).slideUp()
                                     })
                 }
          }) 

  $(window).resize(function(){
      var ww=$(window).width();
      if(ww>991){
        $('.index_nav').css({'right':'0','opacity':'1'}).removeClass('on');
        $('.hsbtm').fadeOut();
      }
      else{
        $('.index_nav').css({'right':'-150px','opacity':'0'});
      //  $('.index_nav').css({'right':'0px','opacity':'1'});
      }
    })
    $(window).resize();
    $('.menu').click(function(){
      if(!$('.index_nav').hasClass('on')){
        $('.index_nav').animate({'right':'0','opacity':'1'},500);
        $('.index_nav').addClass('on');
        $('.hsbtm').fadeIn();
      }
      else{
        $('.index_nav').animate({'right':'-150px','opacity':'0'},500);
        $('.index_nav').removeClass('on');
        $('.hsbtm').fadeOut();

      }
    })
    $('.menu_close,.hsbtm').click(function(){
        $('.index_nav').animate({'right':'-150px','opacity':'0'},500);
        $('.index_nav').removeClass('on');
        $('.hsbtm').fadeOut();
    })
    $('.index_nav ul li').hover(function(){
		$(this).find('.db').addClass('on').siblings('.sub').fadeIn();
    },function(){
    	$(this).find('.db').removeClass('on').siblings('.sub').fadeOut();
    }
    )

    $('.index_main1 a.fl').hover(function(){
      if($(window).width()>768){
        $(this).children('span.abs').stop(true,false).fadeToggle();
      }
    })
    $('.backtop').click(function(){
      $('html,body').animate({'scrollTop':'0'},300);
    })
    $('.xuanfu a').hover(function(){
      if($(this).children('span.xf_cl').size()!=0){
        $(this).find('span.xf_cl').stop(true,false).fadeToggle();
      }
    })
    $('.ejmr_div_cont a.fl').hover(function(){
      $(this).children('span.abs').fadeToggle();
    })

$('.about_contact .about').eq(0).show();

    $('.about_contact .men li').click(function(){
    	var i=$(this).index();
    $(this).addClass('cur').siblings().removeClass('cur');
    $('.about_contact .fr').children('.about').eq(i).stop(true,false).fadeIn().siblings().hide();    	
     if(i==1){setTimeout("map()",500)}
    })

    xxk('.index_m_cont_xxk','.index_m_cont_qh');
    xxk('.index_m_cont_xxk3','.index_m_cont_qh2');
    xxk('.index_m_cont_xxk4','.index_m_cont_qh4');
    xxk('.index_m_cont_xxk2','.index_m_cont_qh3');
    xxk('.index_m3_xxk','.index_m3_xxkqh')
}) 

function xxk(obj1,obj2,obj3){
  $(obj1).children('.xxk1').eq(0).addClass('on');
  $(obj2).children('.xxkqh1').eq(0).show();
  if(obj3){
    $(obj3).children('a').eq(0).show();
  }
  $(obj1).children('.xxk1').hover(function(){
    var i=$(this).index();
    $(this).addClass('on').siblings().removeClass('on');
    $(obj2).children('.xxkqh1').eq(i).stop(true,false).fadeIn().siblings().hide();
    if(obj3){
      $(obj3).children('a').eq(i).stop(true,false).fadeIn().siblings().hide();
    }
  })
}

	// 百度地图API功能	
	function map(){
			map = new BMap.Map("allmap");
	map.centerAndZoom(new BMap.Point(116.412222,39.921988), 15);
	var data_info = [[116.417854,39.921988,"地址：北京市东城区王府井大街88号乐天银泰百货八层"],
					 [116.406605,39.921585,"地址：北京市东城区东华门大街"],
					 [116.412222,39.912345,"地址：北京市东城区正义路甲5号"]
					];
	var opts = {
				width : 250,     // 信息窗口宽度
				height: 80,     // 信息窗口高度
				title : "" , // 信息窗口标题
				enableMessage:true//设置允许信息窗发送短息
			   };
	for(var i=0;i<data_info.length;i++){
		var marker = new BMap.Marker(new BMap.Point(data_info[i][0],data_info[i][1]));  // 创建标注
		var content = data_info[i][2];
		map.addOverlay(marker);               // 将标注添加到地图中
		addClickHandler(content,marker);
	}
	function addClickHandler(content,marker){
		marker.addEventListener("click",function(e){
			openInfo(content,e)}
		);
	}
	function openInfo(content,e){
		var p = e.target;
		var point = new BMap.Point(p.getPosition().lng, p.getPosition().lat);
		var infoWindow = new BMap.InfoWindow(content,opts);  // 创建信息窗口对象 
		map.openInfoWindow(infoWindow,point); //开启信息窗口
	}
	}









