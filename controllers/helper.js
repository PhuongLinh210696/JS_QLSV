function ganGiaTriChoInput(maSV,hoTenSV,email,pass,ngaySinh,khoaHoc,diemToan,diemLy,diemHoa) {
    document.getElementById("txtMaSV").value = maSV;
    document.getElementById("txtTenSV").value = hoTenSV;
    document.getElementById("txtEmail").value = email;
    document.getElementById("txtPass").value = pass;
    document.getElementById("txtNgaySinh").value = ngaySinh;
    document.getElementById("khSV").value = khoaHoc;
    document.getElementById("txtDiemToan").value = diemToan;
    document.getElementById("txtDiemLy").value = diemLy;
    document.getElementById("txtDiemHoa").value = diemHoa;
}

function layGiaTriInput() {
    var maSV = document.getElementById("txtMaSV").value;
    var hoTenSV = document.getElementById("txtTenSV").value;
    var email = document.getElementById("txtEmail").value;
    var matKhau = document.getElementById("txtPass").value;
    var ngaySinh = document.getElementById("txtNgaySinh").value;
    var khoaHoc = document.getElementById("khSV").value;
    var diemToan = document.getElementById("txtDiemToan").value * 1;
    var diemLy = document.getElementById("txtDiemLy").value * 1;
    var diemHoa = document.getElementById("txtDiemHoa").value * 1;

    var valid = true;
    valid = kiemTraRong(maSV,"tbMaSinhVien")
            &kiemTraRong(hoTenSV,"tbTenSinhVien")
            &kiemTraRong(email,"tbEmail")
            &kiemTraRong(matKhau,"tbMatKhau")
            &kiemTraRong(ngaySinh,"tbNgaySinh")
            &kiemTraRong(khoaHoc,"tbKhoaHoc")
            &kiemTraRong(diemToan,"tbDiemToan")
            &kiemTraRong(diemLy,"tbDiemLy")
            &kiemTraRong(diemHoa,"tbDiemHoa")
    valid &= kiemTraEmail(email,"tbEmail")
    //Ở đây kiểm tra biến valid nếu valid false thì sẽ return không chạy những đoạn lệnh bên dưới
    if(!valid){
        return;
    }

    var sinhVien = new SinhVien(
        maSV,
        hoTenSV,
        email,
        matKhau,
        ngaySinh,
        khoaHoc,
        diemToan,
        diemLy,
        diemHoa)
    return sinhVien;
    
}

function timViTriSinhVien(maSinhVien) {
    //Nên kiểm tra dữ liệu ở phía BE và FE
    var viTri = -1;
    arr.forEach(function (item,index) {
        if(item.maSV == maSinhVien){
            viTri = index;
        }
    });
    return viTri;
}

//Hàm lưu dữ liệu xuống local
function saveStorage(arrSV) {
    localStorage.setItem("arrSinhVien",JSON.stringify(arrSV))
}
//Lấy dữ liệu từ local lên
function getStorage() {
    // check điều kiện nếu như key không có dưới local
    var arrSinhVienLocal = localStorage.getItem("arr")
    if(arrSinhVienLocal != null){
        //nếu như arrSinhVienLocal có giá trị sẽ lấy giá trị đó gán mới vào cho mảng arrSinhVien đang có
        arrSinhVien = arrSinhVienLocal
    }
}