function ParseLinkHeader(e){var t=e.split(","),a={};for(var i in t){var n=t[i],s={};s.name=n.match(/rel="([^"]*)/)[1],s.url=n.match(/<([^>]*)/)[1],s.page=n.match(/page=(\d+).*$/)[1],a[s.name]=s}return a}function ShowCommentsEdit(e,t,a){var i="https://api.github.com/repos/"+e+"/issues/"+t+"/comments?page="+a;$.ajax(i,{headers:{Accept:"application/vnd.github.v3.html+json"},dataType:"json",success:function(i,n,s){if(1==a){var o="https://github.com/"+e+"/issues/"+t+"#new_comment_field";$("#gh-comments-edit-list").append("<div class='ui basic center aligned segment'><a class='noelink' href='"+o+"' target='_blank'> <div class='ui animated mini basic primary button' tabindex='0'><div class='visible content'><i class='far fa-comment'></i>&nbsp; Post a Comment</div><div class='hidden content'>on GitHub</div></div></a></div>")}($.each(i,function(e,t){var a=new Date(t.created_at),i="<div class='ui comments'>";i+="<div class='comment'>",i+="<a class='avatar'>",i+="<img src='"+t.user.avatar_url+"'>",i+="</a>",i+="<div class='content'>",i+="<a class='author noelink noul' href='"+t.user.html_url+"'>"+t.user.login+"</a>",i+="<div class='metadata'>",i+="<div class='date'>"+a.toUTCString()+"</div>",i+="</div>",i+="<div class='text'>",i+=t.body_html,i+="</div>",i+="</div>",i+="</div>",$("#gh-comments-edit-list").append(i)}),s.getResponseHeader("Link"))&&("next"in ParseLinkHeader(s.getResponseHeader("Link"))&&ShowCommentsEdit(e,t,a+1))},error:function(){$("#gh-comments-edit-list").append("Comments are not open for this post yet.")}})}function DoGithubCommentsEdit(e,t){$(document).ready(function(){ShowCommentsEdit(e,t,1)})}