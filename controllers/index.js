


document.getElementById("btnThemSV").onclick = function() {themSinhVien()};
var arr=[];
// getStorage();

function renderData() {
    var content ="";
    //khi chúng ta gọi dữ liệu từ localStorage lên và sử dụng, các object bên trong mảng arr đẫ bị mất đi các phương thức 
    //idea là sẽ tạo ra một đối tượng mới từ lớp đối tượng sinh viên đang có và gán giá trị cho đối tượng đó tất cả các thuộc tính của từng object bên trong arr sau khi gọi getStorage
    for (let i = 0; i < arr.length; i++) {
        var sinhVien = new SinhVien();
        console.log(sinhVien)
        var sinhVienItem = arr[i];
        console.log(sinhVienItem)
        Object.assign(sinhVien,sinhVienItem)
        // const sinhVien = arr[i];
        var diemTrungBinh = sinhVien.tinhDiemTrungBinh();
        console.log(diemTrungBinh)
        var xepLoaiHS = sinhVien.xepLoai(diemTrungBinh);
        content += 
        `<tr>
            <td id="toCheck">${sinhVien.maSV}</td>
            <td>${sinhVien.hoTenSV}</td>
            <td>${sinhVien.email}</td>
            <td>${sinhVien.ngaySinh}</td>
            <td>${sinhVien.khoaHoc}</td>
            <td>${diemTrungBinh.toFixed(2)}</td>
            <td>${xepLoaiHS}</td>
            <td>
                <button class="btn btn-danger" onclick="xoaSinhVien('${sinhVien.maSV}')"><i class="fa-solid fa-trash-can"></i></button>
                <button class="btn btn-warning" onclick="suaSinhVien('${sinhVien.maSV}')"><i class="fa-solid fa-pen-to-square"></i></button>
            </td>
        </tr>`
    }
    document.getElementById("tbodySinhVien").innerHTML = content;
}
   
function themSinhVien() {
    var sinhVien = layGiaTriInput();
    //sẽ check nếu như sinh viên bị undifined sẽ chặn hết dữ liệu bên dưới
    if(sinhVien){
        console.log(sinhVien)
        arr.push(sinhVien)
        saveStorage(arr)
        // console.log(arr)
        renderData()
        //reset input khi người dùng thêm sinh viên thành công
        ganGiaTriChoInput("","","","","","","","","");
    }
    
}

//Xoá SV khỏi mảng
function xoaSinhVien(maSinhVien){
    document.getElementById("btnCapNhatSV").style.display = "none";
    var index = timViTriSinhVien(maSinhVien);
    if(index != -1){
        arr.splice(index,1);
        renderData();
    }
    console.log(arr)
}

//Sửa SV trong mảng

function suaSinhVien(maSinhVien){
    document.getElementById("btnCapNhatSV").style.display = "inline-block";
    var index = timViTriSinhVien(maSinhVien);
    var sinhVien = arr[index];
    ganGiaTriChoInput(
        sinhVien.maSV,
        sinhVien.hoTenSV,
        sinhVien.email,
        sinhVien.pass,
        sinhVien.ngaySinh,
        sinhVien.khoaHoc,
        sinhVien.diemToan,
        sinhVien.diemLy,
        sinhVien.diemHoa
    );
    document.getElementById("txtMaSV").readOnly = true;
}

function btnCapNhatSV() {
    var sinhVienDaChinhSua = layGiaTriInput();
    var index = timViTriSinhVien(sinhVienDaChinhSua.maSV)
    // var capNhatSinhVien = ganGiaTriChoInput(sinhVien2.maSV,"","","","","","","","")
    console.log(index)
    arr[index] = sinhVienDaChinhSua;
    console.log(arr)
    renderData()
    ganGiaTriChoInput("","","","","","","","","");
    document.getElementById("btnCapNhatSV").style.display = "none";
    document.getElementById("txtMaSV").readOnly = false;
    // console.log(capNhatSinhVien)
}

//Thêm mảng vào local storage
//LocalStorage được lưu trữ theo dạng key value
localStorage.setItem("tenSinhVien","Nguyễn Đình Sang");
var sinhVienChamChi = {
    hoTen:"Nam",
    xepLoai:"Khá"
}
//Lưu trữ 1 Object vào Local Storage
//Đổi Object sang String dùng JSON.stringify
//localStorage.setItem("sinhVienNam",JSON.stringify(sinhVienChamChi))

//Phương thức Get
var hoTenSinhVien = localStorage.getItem("sinhVienNam");
//Đổi kiểu String sang Object dùng JSON.parse
console.log(JSON.parse(hoTenSinhVien))
//Phương thức remove
localStorage.removeItem("tenSinhVien")