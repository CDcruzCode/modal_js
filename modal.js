class Modal {
  popup(title="", body="", ok=true, cancel=false, close=true) {
    document.body.style.overflow = "hidden";

    console.log("popupped");
    let modal = document.createElement("modal");

    let modal_style = document.createElement('style');
    modal_style.innerHTML = `
      modal {
        position: absolute;
        top: 0px;
        left: 0px;
        width: 100vw;
        height: 100vh;
        background: rgba(0,0,0,0.4);
        overflow: hidden;
        display: flex;
      }

      .modaljs_close {
        position: relative;
        /*right: 32px;
        top: 32px;*/
        width: 32px;
        height: 32px;
        opacity: 0.5;
        background: none;
        border: 0px;
        cursor: pointer;
      }
      .modaljs_close:hover {
        opacity: 1;
      }
      .modaljs_close:before, .modaljs_close:after {
        position: absolute;
        top: 0px;
        left: 13px;
        content: ' ';
        height: 33px;
        width: 2px;
        background-color: #fff;
      }
      .modaljs_close:before {
        transform: rotate(45deg);
      }
      .modaljs_close:after {
        transform: rotate(-45deg);
      }


      .modaljs {
        display: flex;
        flex-direction: column;

        margin: auto;
        background: rgba(230,230,230,100);
        width: 90%;
        max-width: 1000px;
        height: auto;
        border-radius: 20px;
        padding: 0px;
        max-height: calc(100vh - 170px);
      }

      .modaljs_title {
        text-align: center;
        margin: 0px;
        background: rgba(200,200,200,100);
        border-radius: 20px 20px 0px 0px;
        padding:  5px;

        display: flex;
        justify-content: space-between;
      }

      .modaljs_title > h2 {
        margin: 0px 10px;
        width: 100%;
      }

      .modaljs_body {
        padding: 10px;
        overflow: auto;
      }

      .modaljs_buttons_box {
        margin: 10px;
        width: 100%;
        display: flex;
        justify-content: center;
      }

      .modaljs_buttons {
        margin: 0px 10px;
        border-radius: 5px;
        border: 3px solid grey;
        padding: 5px;
        cursor: pointer;
      }
    `;

    let close_button = document.createElement("button");
    close_button.classList.add("modaljs_close");

    let title_space = document.createElement("button");
    title_space.style.visibility = "hidden";
    title_space.classList.add("modaljs_close");

    let modal_box = document.createElement("section");
    modal_box.classList.add("modaljs");

    if(title!="") {
      let modaljs_title = document.createElement("div");
      modaljs_title.classList.add("modaljs_title");
      let modal_h2 = document.createElement("h2");
      modal_h2.innerHTML = title;
      modaljs_title.appendChild(title_space);
      modaljs_title.appendChild( modal_h2 );
      modaljs_title.appendChild(close_button);
      modal_box.appendChild(modaljs_title);
    }

    if(body!="") {
      let modal_body = document.createElement("div");
      modal_body.classList.add("modaljs_body");
      //let modal_body_text = document.createElement("div");
      modal_body.innerHTML = body;
      //modal_body.appendChild(modal_body_text);
      modal_box.appendChild(modal_body);
    }

    if(ok || cancel) {
      let modal_buttons = document.createElement("div");
      modal_buttons.classList.add("modaljs_buttons_box");
      if(ok) {
        let modal_ok = document.createElement("button");
        modal_ok.innerHTML = "OK";
        modal_ok.classList.add("modaljs_buttons");
        modal_buttons.appendChild(modal_ok);
      }

      if(cancel) {
        let modal_cancel = document.createElement("button");
        modal_cancel.innerHTML = "Cancel";
        modal_cancel.classList.add("modaljs_buttons");
        modal_buttons.appendChild(modal_cancel);
      }

      modal_box.appendChild(modal_buttons);
    }

    close_button.onclick = function(){ this.parentNode.parentNode.parentNode.remove(); document.body.style.overflow = "auto";  };

    modal.appendChild(modal_style);

    modal.appendChild(modal_box);

    Object.assign(modal.style, modal_style);
    document.body.appendChild(modal);



  }

}
