//get all required elements
const inputBox = document.getElementById("input-box");
const ul = document.getElementById("list");
const arr = []; // tạo mảng rỗng

// Hàm thêm 
function Add() {
    if (inputBox.value === '') {
        alert("Bạn chưa nhập gì!");
    } 
    else {
       //Thêm giá trị đầu vào
        arr.push(inputBox.value);

        //tạo phần tử li để hiển thị mục mới
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        
        //tạo nút xóa
        let deleteButton = document.createElement("button");
        deleteButton.textContent = "Xóa";
        deleteButton.addEventListener("click", () => {
            deleteItem(li);
        });

        //tạo nút chỉnh sửa
        let editButton = document.createElement("button");
        editButton.textContent = "Sửa";
        editButton.addEventListener("click", () => {
            editItem(li);
        });

        //Nối các nút vào phần tử li
        li.appendChild(deleteButton);
        li.appendChild(editButton);

        // nối phần tử li vào phần tử ul để hiển thị
        ul.appendChild(li);

        //xóa ô nhập liệu cho lần nhập tiếp theo
        inputBox.value = "";
    }
}

// hiển thị các mục danh sách 
function renderList() {
    ul.innerHTML = '';
    //lặp qua từng mục trong mảng arr
    for (let i = 0; i < arr.length; i++) {
    let li = document.createElement("li");

    //tạo 1 phần tử li mới cho mỗi mục let
    li.innerHTML = 
    `
    ${arr[i]}
    <button onclick="deleteItem(${i})">Xóa</button>
    <button onclick="editItem(${i})">Sửa</button>`;
    ul.appendChild(li);
    }
}
/* Hàm xóa */
function deleteItem(listItem) {
    arr.splice(listItem, 1); //xóa phần tử khỏi mảng
    renderList(); //cập nhật dannh sách hiển thị sau khi gỡ bỏ
}

// Hàm sửa 
function editItem(listItem) {
    let edit = prompt("Nội dung cần sửa!", arr[listItem]); 
    if (edit !== null){
        arr[listItem] = edit; //cập nhật mảng arr với văn bản đã chỉnh sửa
        renderList(); //  cập nhật danh sách hiển thị sau khi chỉnh sửa
    }

}
