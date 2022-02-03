// INSERT JS HERE"use strict";

function callApi() {
    let info = document.getElementById("info")
    info.innerHTML = "Calculating..."

    // alert(input);
    fetch("https://freegeoip.app/json/")
        .then(response => {
            return response.json();
        })
        .then((data) => {
            console.log(data);
            let ip = data["ip"]
            , country = data["country_name"]
            , region = data["region_name"]
            , city = data["city"];
            let innerHtml=`
            <div>
                <label class="titletext"><b> IP Address </b></label>
                <div> `+ip+` </div>
                <label class="titletext"><b> Country </b></label>
                <div> `+country+` </div>
                <label class="titletext"><b> Region </b></label>
                <div> `+region+` </div>
                <label class="titletext"><b> City </b></label>
                <div> `+city+` </div>
            </div>
            `

            info.innerHTML=innerHtml;
            
        });

}

// SOCIAL PANEL JS
const floating_btn = document.querySelector('.floating-btn');
const close_btn = document.querySelector('.close-btn');
const social_panel_container = document.querySelector('.social-panel-container');

floating_btn.addEventListener('click', () => {
	social_panel_container.classList.toggle('visible')
});

close_btn.addEventListener('click', () => {
	social_panel_container.classList.remove('visible')
});