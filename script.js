const btnAdd = document.getElementById("add-btn");
const btnRemoveAll = document.getElementById("remove-btn");
const list = document.getElementById("listTodo");

const new_status_color_code = "green";
const done_status_color_code = "darkblue";
const processing_status_color_code = "orange";

let counter = 0;

function add() {
    let name = prompt ("Nhập tên subject")
    let deadline = prompt ("Deadline date")
    let nguoiLam = prompt ("Người thực hiện")
    const div = document.createElement("li");
    const itemLabel = document.createElement("span");
    itemLabel.innerHTML = `Sub: ${name} | Deadline: ${deadline} | Người làm: ${nguoiLam}`
    itemLabel.style.color = new_status_color_code;
    div.dataset.status = "new";
    const doneBtn = document.createElement("button");
    doneBtn.innerHTML = "Done";
    const changeStatusBtn = document.createElement("button");
    changeStatusBtn.innerHTML = "Status";
    const removetd = document.createElement("button");
    removetd.innerHTML = "Delete";
    const detail = document.createElement("button");
    detail.innerHTML = "Details";
    
    div.appendChild(itemLabel)
    div.appendChild(detail)
    div.appendChild(changeStatusBtn)
    div.appendChild(doneBtn)
    div.appendChild(removetd)

    doneBtn.onclick = function () {
        if (this.parentNode.dataset.status === "new" || this.parentNode.dataset.status === "process") {
            itemLabel.style.color = done_status_color_code;
            this.parentNode.dataset.status = "done";
        } else {
            itemLabel.style.color = new_status_color_code;
            this.parentNode.dataset.status = "new";
        }
    }
    changeStatusBtn.onclick = function () {
        if (this.parentNode.dataset.status === "new") {
            itemLabel.style.color = processing_status_color_code;
            this.parentNode.dataset.status = "process";
        } else {
            itemLabel.style.color = new_status_color_code;
            this.parentNode.dataset.status = "new";
        }
    }

    detail.onclick = function(){
        counter++;
        let putInDetail = prompt ("Nhập chi tiết:")
        const paraDetail = document.createElement("p");
        paraDetail.innerHTML = `Details ${counter}: ${putInDetail}`
        div.appendChild(paraDetail)
    }   
    list.appendChild(div)
    removetd.onclick = function(){
        list.removeChild(div);
    }
    counter = 0;
}
function remove() {
    list.innerHTML = "";
}
