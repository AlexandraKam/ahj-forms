(()=>{"use strict";const t=new class{constructor(){this.widget=document.querySelector(".widget"),this.inputText=document.querySelector(".input"),this.form=document.querySelector(".form"),this.button=document.querySelector(".button_popover"),this.popover=document.querySelector(".popover"),this.popoverTitle=this.popover.querySelector("h3"),this.popoverText=document.querySelector(".popover_text")}drawUi(){this.popoverText.innerHTML="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}},e=new class{constructor(t){this.gui=t,this.hidePopover=this.hidePopover.bind(this),this.showPopover=this.showPopover.bind(this)}init(){this.gui.drawUi(),this.gui.form.addEventListener("click",this.showPopover),this.gui.widget.addEventListener("click",this.hidePopover)}hidePopover(t){t.preventDefault(),t.target!==this.gui.inputText&&t.target!==this.gui.button&&this.gui.popover.classList.add("hidden")}showPopover(t){t.preventDefault();const e=t.target.getBoundingClientRect();this.gui.popover.classList.remove("hidden");const i=t.target.offsetWidth;t.target===this.gui.inputText&&(this.gui.popoverTitle.innerHTML="Input",this.gui.popover.style.left=`${(e.left+i/2-125).toFixed()}px`,this.gui.popover.style.top=`${(e.top-this.gui.popover.offsetHeight-5).toFixed()}px`),t.target===this.gui.button&&(this.gui.popoverTitle.innerHTML="Button",this.gui.popover.style.left=`${(e.left+i/2-125).toFixed()}px`,this.gui.popover.style.top=`${(e.top-this.gui.popover.offsetHeight-5).toFixed()}px`)}}(t);e.init()})();