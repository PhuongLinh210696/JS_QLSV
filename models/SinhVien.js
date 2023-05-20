function SinhVien(_maSV, _hoTenSV, _email, _matKhau, _ngaySinh, _khoaHoc, _diemToan, _diemLy, _diemHoa) {
    this.maSV = _maSV;
    this.hoTenSV = _hoTenSV;
    this.email = _email;
    this.ngaySinh = _ngaySinh;
    this.khoaHoc = _khoaHoc
    this.diemToan = _diemToan;
    this.diemLy = _diemLy;
    this.diemHoa = _diemHoa;
    this.tinhDiemTrungBinh = function () {
        return (this.diemToan + this.diemLy + this.diemHoa)/3
    }

    this.xepLoai = function(diemTrungBinh){
        if(diemTrungBinh >= 8){
            return "Giỏi";
        }else{
            if(diemTrungBinh >=5 && diemTrungBinh<8){
                return "Khá";
            }else{
                return "Kém";
            }
        }
    }
}