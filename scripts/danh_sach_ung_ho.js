    function quanLyDanhSach(mang) {
        var bang = '';
        var tongTien = 0;

        for (let i in mang.reverse()) {

            bang += `<tr>
            <td>${+i + 1}</td>
            <td>${mang[i].ten}</td>
            <td>${mang[i].sotk}</td>
            <td>${mang[i].sodt}</td>
            <td>${mang[i].diachi}</td>
            <td>${mang[i].sotien.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</td>
            </tr>`
            tongTien += +mang[i].sotien;
        }
        document.getElementById('bang').innerHTML = bang;
        document.getElementById('tong').innerHTML = tongTien.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })
    }
    function hienDanhSach(mang) {
        console.log("Log", mang)
        var tongTien = 0;
        var danhSachUngHo = ``;

        for (let i in mang.reverse()) {
           
            danhSachUngHo += `
            <h4>${+i + 1}. ${mang[i].ten}</h4>
            <h5>Số điện thoại:${mang[i].sodt}</h5>
            <p>Số tiền: ${mang[i].sotien.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</p>
            <hr/>
            <br/>
            `

            tongTien += +mang[i].sotien;
        }
        console.log(tongTien)
        document.getElementById("tongtien").innerHTML = tongTien.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
        document.getElementById("ketqua").innerHTML = danhSachUngHo;
    }

    const DONATE_API = "https://ung-ho-mien-trung-db.herokuapp.com/donates"

    function getData1() {
        fetch(DONATE_API)
        .then(res => res.json())
            // .then(res => quanLyDanhSach(res))
            .then(res => {
                console.log(res, "here")
                hienDanhSach(res)
            })
            .catch(er => console.log("error", er))
        }

        function getData2() {
            fetch(DONATE_API)
            .then(res => res.json())
            .then(res => quanLyDanhSach(res))
        //.then(res => hienDanhSach(res))
    }


    function postData(ten, diachi, sodienthoai, sotien, sotaikhoan) {

        var thongTinUngHo = {
            ten: ten,
            diachi: diachi,
            sodt: sodienthoai,
            sotien: sotien,
            sotk: sotaikhoan
        }
        if (!(ten)) {
            document.getElementById('kiemtraten').innerHTML = " *Vui lòng nhập họ tên";
            
        }else{
              document.getElementById('kiemtraten').innerHTML = "";
          }
        if (!(sotaikhoan)) {
            document.getElementById('kiemtrasotk').innerHTML = " *Vui lòng nhập số tài khoản";
            
        }else{
              document.getElementById('kiemtrasotk').innerHTML = "";
          }

        if (!(sodienthoai)) {
            document.getElementById('kiemtrasodt').innerHTML = " *Vui lòng nhập số điện thoại";
            
        }else{
              document.getElementById('kiemtrasodt').innerHTML = "";
          }

        if (!(diachi)) {
            document.getElementById('kiemtradiachi').innerHTML = " *Vui lòng nhập tỉnh thành";
            
        }else{
              document.getElementById('kiemtradiachi').innerHTML = "";
          }

        if (!(sotien)) {
            document.getElementById('kiemtrasotien').innerHTML = " *Vui lòng nhập số tiền";
            
        }else{
              document.getElementById('kiemtrasotien').innerHTML = "";
          }

        if ((ten) && (diachi) && (sodienthoai) && (sotien) && (sotaikhoan)) {
            tienUngHo = +thongTinUngHo.sotien;
            fetch(DONATE_API, {
                method: 'post',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(thongTinUngHo)
            }).then(
            res => {
                window.location.href = `./formcamon.html?sotien=${sotien.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}&ten=${ten}`
                getData();
            }
            );
        }
    }

    function trangChu() {
        window.location.href = "../index.html";
    }
    
    function laySoTienUngHo() {
        const urlParams = new URLSearchParams(window.location.search);
        const myParam = urlParams.get("sotien");

        return myParam;
    }

    function layTenNguoiUngHo() {
        const urlParams = new URLSearchParams(window.location.search);
        const myParam = urlParams.get("ten");

        return myParam;
    }
    function inCamOn() {
        document.getElementById('camon').innerHTML = laySoTienUngHo();
        document.getElementById('tenNguoiUngHo').innerHTML = layTenNguoiUngHo();

    }
    getData1();


