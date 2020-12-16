window.addEventListener("load", function(){
    Grade(document.querySelectorAll('.lb-bgc'))
})

function hideMask() {
    let lr_mask = document.getElementsByClassName("lr-mask")[0];
    lr_mask.className = "lr-mask"
}
function showMask() {
    let lr_mask = document.getElementsByClassName("lr-mask")[0];
    lr_mask.className = "lr-mask show"
}

function lunbotu() {
    let currentIndex = 0;

    // 轮播图切换联动效果
    // 1. 获取所有的标题  以及  所有的 图片
    let titles = document.querySelectorAll(".like-lb>.titles>li");
    let images = document.querySelectorAll(".like-lb>.images>li")

    // let xx = document.getElementById("xx");


    titles.forEach((title, index)=>{
        title.onmouseover = function () {
            titles[currentIndex].className = ""
            images[currentIndex].className = ""

            title.className = "current"
            images[index].className = "current"

            currentIndex = index
        }
    })

}

function login_register() {
    let currentIndex = 0;

    let tabs = document.querySelectorAll(".lr-pane .tabs li");
    let panes = document.querySelectorAll(".lr-pane .panes li");


    for (let i = 0, len = tabs.length; i < len; i++) {
        let tab = tabs[i];
        tab.onclick = function () {
            tabs[currentIndex].className = "";
            tab.className = "current";

            panes[currentIndex].className = "";
            panes[i].className = "current";

            currentIndex = i;
        }
    }

}

lunbotu()

login_register()