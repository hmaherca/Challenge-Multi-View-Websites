
$(document).ready(function() {
    $(".btn").click(function(){        
        addCommentElement();
        scrollToBottom();
    });

    $("img").hover(reduceOpacityAnimation,increaseOpacityAnimation);
});

function addCommentElement(){
        var fullName = $("#firstName").val() +" "+ $("#lastName").val();
        var commentText = $("#textbox").val().replace(/\n/g, '<br />');
        var commentDateElement = "<div class'align-top'>" + new Date().toLocaleDateString() + "</div>";
        var commentNameElement = "<div>" + fullName + ":" + "</div>";
        var commentBubble = "<div class='padding thin-border'>" + commentText + "</div>"; 
        var commentContainer = "<div>" + commentNameElement + commentBubble + "</div>";

        var rowEntry = "<tr>" +
                            "<td>" + commentDateElement +"</td>" +
                            "<td>" + commentContainer +"</td>" +
                       "</tr>" +
                       "<tr class='spacer'> </tr>"; // cant tr element not affected by margin/padding
        $("#comment-list").append(rowEntry);
};

function scrollToBottom () {
   $("html, body").animate({ scrollTop: $(document).height() }, 1000);
}


function reduceOpacityAnimation(){
    $("img").animate({
        opacity: "-=0.30"
    });
};

function increaseOpacityAnimation(){
    $("img").animate({
        opacity: 1

    });
};

