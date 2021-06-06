
// axios 全局配置, baseURL
const baseURL = "http://localhost:5000";
axios.defaults.baseURL = baseURL;


function getNavData() {
    axios.get("/home/nav").then(({data})=>{
        // console.log(data)
        if (data.code === 0) {
            let menus = data.data;
            // menusUL
            let menusUL = document.querySelector("#nav-bar .bottom .menus");
            menusUL.innerHTML = menus.map(item=>`<li><a href=${item.route}>${item.title}</a></li>`).join("")
        }else {
            console.warn("当前数据存在一些问题!")
        }
    })
}
getNavData();

function getWebConfigData() {
    axios.get("/home/web_config").then(({data})=>{
        // console.log(data)
        if (data.code === 0) {
            // app: "/images/ad/mini_pro.jpg"
            // mini_program: "/images/ad/mini_pro.jpg"
            // tel: "15300647210"
            // wb_qrcode: "/images/ad/weibo.png"
            // wechat_qrcode: "/images/ad/wechat.jpg"
            let {app, mini_program, tel, wb_qrcode, wechat_qrcode} = data.data;
            // console.log(app, mini_program, tel, wb_qrcode, wechat_qrcode)

            let wechatDOM = document.querySelector(".wechat .ewm");
            wechatDOM.src = baseURL + wechat_qrcode;

            let miniProgramDOM = document.querySelector(".mini_programe .ewm");
            miniProgramDOM.src = baseURL + mini_program;

            let appDOM = document.querySelector(".app .app_qrcode");
            appDOM.src = baseURL + app;

            let wbDOM = document.querySelector(".footer .ad-image .left-ad .wb");
            wbDOM.src = baseURL + wb_qrcode;

            let wxDOM = document.querySelector(".footer .ad-image .right-ad .wx");
            wxDOM.src = baseURL + wechat_qrcode;

            let telDOM = document.querySelector(".footer .tel");
            telDOM.innerText = tel;




        }
    })
}
getWebConfigData();

function getFocusImagesData() {
    axios.get("/home/focus_img").then(({data})=>{
        if (data.code === 0) {
            let focusData = data.data;
            // console.log(focusData)

            let imagesUL = document.querySelector(".like-lb .images");
            imagesUL.innerHTML = focusData.map((item, index) => {
                return `<li class=${index===0?"current": ""}><a class="lb-bgc" href="/course_detail/${item.course_id}"><img crossorigin="anonymous" src=${baseURL + item.ad_url} alt=""></a></li>`
            }).join("")

            let titlesUL = document.querySelector(".like-lb .titles");
            titlesUL.innerHTML = focusData.map((item, index) => {
                return `<li class=${index===0?"current": ""}><a href="/course_detail/${item.course_id}">${item.title}</a></li>`
            }).join("")

            lunbotu();
        }
    })
}
getFocusImagesData();