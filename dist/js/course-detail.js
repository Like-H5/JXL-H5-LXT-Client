
// 容器组件选项卡切换效果
// 0. 通过变量, 记录当前选中的索引值
let currentIndex = 0;

// 1. 获取到所有的选项卡和面板元素
let tabs = document.querySelectorAll(".tabs>li");
let panes = document.querySelectorAll(".panes>li");

// 2. 每一个选项卡, 监听对应的鼠标单击事件
for (let i = 0, len=tabs.length; i < len; i++) {
    let tab = tabs[i];
    tab.onclick = function () {
        // 2.1 切换选项卡的选中状态
        tabs[currentIndex].className = "";
        tabs[i].className = "current";

        // 2. 切换面板的显示(联动)
        panes[currentIndex].className = "";
        panes[i].className = "current";
        currentIndex = i;


    }
}


let score = 5;
// 1. 星星评分效果
let star = document.querySelector(".comment-pane .star");
let y_star = document.querySelector(".comment-pane .y_star");
star.onclick = function (event) {
    // 鼠标点击的位置
    // console.log(event.offsetX)

    // 2.3 3 2.1 3
    score = Math.ceil(event.offsetX / star.offsetWidth * 5)
    y_star.style.width = score / 5 * 100 + "%";
}


// 2. 点击评论按钮之后, 获取到用户的评价信息(分数, 评价内容)
let submit = document.getElementsByClassName("submit")[0];
let content = document.getElementsByClassName("comment-content")[0];
submit.onclick = function () {
    // 获取分数, 以及评论内容
    console.log("分数:", score);
    let content_v = content.value
    console.log("评论内容: ", content_v)

    // 借助网络请求, 调用对应的接口, 就可以把评论信息, 传递给服务器

}
