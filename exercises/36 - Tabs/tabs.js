// 1st grab the tabs secopnd grab the buttons 

const tabs  = document.querySelector(".tabs");
const tabButtons = tabs.querySelectorAll('[role="tab"]');
const tabPanels = tabs.querySelectorAll('[role="tabpanel"]');


function handleTabClick(event){
    // hide all tab panels when someone clicks 
    tabPanels.forEach(panel => {
        panel.hidden = true;
    });
    //mark all tabs as unselected
    tabButtons.forEach(tab => {
        //tab.ariaSelected = false;
        tab.setAttribute('aria-selected', false);
    });
    // mark the clicked tab as selected
event.currentTarget.setAttribute("aria-selected", true);


    // find the associated tab panel and show it 
    console.log(event.currentTarget);
}

tabButtons.forEach(button => button.addEventListener("click", handleTabClick));