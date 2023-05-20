function kiemTraRong(checkInput,idThongBao) {
    //check input đó được nhập hay không, nếu có thì true ngược lại thì false
    if(checkInput){
        document.getElementById(idThongBao).innerHTML ="";
        return true;
    }else{
        document.getElementById(idThongBao).innerHTML ="Vui lòng nhập trường dữ liệu này";
        return false;
    }
}
function kiemTraEmail(checkInput,idThongBao) {
    //kiểm tra email bằng regex
    var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    //sử dụng phương thức test để xem email nhập vào có phù hợp hay không, khi dùng test sẽ trả về true ỏ false
    var hopLe = regex.test(checkInput);
    if (hopLe) {
        document.getElementById(idThongBao).innerHTML ="";
        return true;
    }
    else{
        document.getElementById(idThongBao).innerHTML ="Vui lòng nhập đúng email";
        return false;
    }
}