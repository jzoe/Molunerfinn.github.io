$(function(){var t=!1;$("a.social-icon.search").on("click",function(){var e;$("body").css("width","100%"),$("body").css("overflow-y","scroll"),$("body").css("position","fixed"),$(".search-dialog").velocity("stop").velocity("transition.expandIn",{duration:300,complete:function(){$("#local-search-input input").focus()}}),$(".search-mask").velocity("stop").velocity("transition.fadeIn",{duration:300}),t||(e=GLOBAL_CONFIG.localSearch.path,$.ajax({url:"/"+e,dataType:"xml",success:function(t){var e=$("entry",t).map(function(){return{title:$("title",this).text(),content:$("content",this).text(),url:$("url",this).text()}}).get(),i=$("#local-search-input input")[0],a=$("#local-hits")[0];i.addEventListener("input",function(){var t='<div class="search-result-list">',i=this.value.trim().toLowerCase().split(/[\s]+/);if(a.innerHTML="",this.value.trim().length<=0)$(".local-search-stats__hr").hide();else{var s=0;e.forEach(function(e){var a=!0,o=e.title.trim().toLowerCase(),c=e.content.trim().replace(/<[^>]+>/g,"").toLowerCase(),l=e.url,n=-1,r=-1;""!==o&&""!==c&&i.forEach(function(t,e){n=o.indexOf(t),r=c.indexOf(t),n<0&&r<0?a=!1:r<0&&(r=0)}),a&&(t+='<div class="local-search__hit-item"><a href="'+l+'" class="search-result-title" target="_blank">'+o+"</a></div>",s+=1,$(".local-search-stats__hr").show())}),0===s&&(t+='<div id="local-search__hits-empty">'+GLOBAL_CONFIG.localSearch.labels.hits_empty.replace(/\$\{query}/,this.value.trim())+"</div>"),a.innerHTML=t}})}}),t=!0)}),$(".search-mask, .search-close-button").on("click",function(){$("body").css("position","absolute"),$(".search-dialog").velocity("stop").velocity("transition.expandOut",{duration:300}),$(".search-mask").velocity("stop").velocity("transition.fadeOut",{duration:300})})});