// 容器组件选项卡切换效果
// 0. 通过变量, 记录当前选中的索引值
let currentIndex = 0;

// 1. 获取到所有的选项卡和面板元素
let tabs = document.querySelectorAll(".tabs>li");
let panes = document.querySelectorAll(".panes>li");

// 2. 每一个选项卡, 监听对应的鼠标单击事件
for (let i = 0, len = tabs.length; i < len; i++) {
    let tab = tabs[i];
    tab.onclick = function () {
        // 2.1 切换选项卡的选中状态
        tabs[currentIndex].classList.remove("current");
        tabs[i].classList.add("current");

        // 2. 切换面板的显示(联动)
        panes[currentIndex].classList.remove("current");
        panes[i].classList.add("current");
        currentIndex = i;


    }
}
