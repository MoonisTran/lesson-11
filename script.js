const btnAdd = document.getElementById("add-btn");
// btnAdd.onclick = add();
const btnRemoveAll = document.getElementById("remove-btn")
const list = document.getElementById("list-wrapper")

const new_status_color_code = "cyan";
const done_status_color_code = "green";
const processing_status_color_code = "red";


//Nút Đổi trạng thái => Mới => đang làm, đang làm => mới

//Nút hoàn tất , Mới || đang làm => Done, Done => Mới.

let counter = 0;

function add() {
    counter++;
    const div = document.createElement("li")

    const itemLabel = document.createElement("span")
    itemLabel.innerHTML = "Task " + counter;
    itemLabel.style.color = new_status_color_code;
    div.dataset.status = "new";
    const doneBtn = document.createElement("button")
    doneBtn.innerHTML = "Done";

    const changeStatusBtn = document.createElement("button")
    changeStatusBtn.innerHTML = "Status";

    div.appendChild(itemLabel)
    div.appendChild(changeStatusBtn)
    div.appendChild(doneBtn)
    doneBtn.onclick = function () {
        // if (["new","process"].includes(this.parentNode.dataset.status)) { Tham khảo
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

    list.appendChild(div)
}

function removeAll() {
    list.innerHTML = "";
    counter = 0;
}
