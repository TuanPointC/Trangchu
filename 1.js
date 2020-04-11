function bar(){
    var khoi_right = document.getElementById("right");
    var noidung_anh=document.getElementById("noidung");
    if (khoi_right.style.display == "none") {
        khoi_right.style.display="block";
        noidung_anh.style.width ="1032px";
    }
    else{
         khoi_right.style.display="none";
        noidung_anh.style.width = "100%";
    }
}