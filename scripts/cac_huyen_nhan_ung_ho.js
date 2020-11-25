class BaiViet {
    tieuDe;
    ngayDangBai;
    diaPhuong;
    hinhAnh;
    noiDung;
    TacGia;
    hinhAnh1;
    noiDung1;
    constructor(tieuDe, ngayDangBai, diaPhuong, hinhAnh, noiDung, TacGia, hinhAnh1,noiDung1) {
        this.tieuDe = tieuDe;
        this.ngayDangBai = ngayDangBai;
        this.diaPhuong = diaPhuong;
        this.hinhAnh = hinhAnh;
        this.noiDung = noiDung;
        this.TacGia = TacGia;
        this.hinhAnh1 = hinhAnh1;
        this.noiDung1 = noiDung1;
    }
}


function layChiTietTinTuc(chiSo) {
    return danhSachBaiViet[chiSo];
}
function layChiSoTuThanhTrinhDuyet() {
    const urlParams = new URLSearchParams(window.location.search);
    const myParam = urlParams.get('tin');

    return myParam;
}


function hienThiChiTietBaiViet() {
    const chiSo = layChiSoTuThanhTrinhDuyet();

    const tinTuc = layChiTietTinTuc(chiSo);

    document.getElementById("tieude_baiviet").innerHTML = tinTuc.tieuDe;

    document.getElementById('ngay_dang_bai').innerHTML = tinTuc.ngayDangBai;

    document.getElementById('dia_phuong').innerHTML = tinTuc.diaPhuong;

    document.getElementById("noi_dung_tin_tuc").innerHTML = tinTuc.noiDung;

    document.getElementById("image").src = tinTuc.hinhAnh;

    document.getElementById("noi_dung_tin_tuc1").innerHTML = tinTuc.noiDung1;

    document.getElementById("image1").src = tinTuc.hinhAnh1;
    


    document.getElementById("tac_gia_bai_viet").innerHTML = tinTuc.TacGia;
}


var dongHa = new BaiViet()
dongHa.tieuDe = 'Thành Phố Trong Tôi';
dongHa.diaPhuong = 'TP Đông Hà - tỉnh Quảng trị';
dongHa.ngayDangBai = '20/10/2020';
dongHa.hinhAnh = 'https://image.thanhnien.vn/768/uploaded/phucndh/2020_10_08/120852236_2289334954545463_2587970370552746848_n_nrqa.jpg'
dongHa.noiDung = 'Thông tin từ UBND thành phố Đông Hà, tỉnh Quảng Trị cho biết, mưa lớn kéo dài đã gây ngập lụt tại nhiều khu vực, nước lũ dâng cao đã nhấn chìm các khu vực như: phường Đông Thanh, Đông Giang, Đông Lương, Đông Lễ, Phường 2, Phường 3 (TP.Đông Hà, tỉnh Quảng Trị). Hiện tại rất nhiều nhà dân ở TP.Đông Hà, tỉnh Quảng Trị bị ngập sâu trong nước, nhiều tuyến đường bị ách tắc, hư hỏng do mưa lũ kéo dài. Lực lượng chức năng đang tích cực triển khai công tác cứu hộ, cứu nạn, di dời, sơ tán người dân ở những nơi ngập lụt nặng đến nơi an toàn.';
dongHa.hinhAnh1 = 'https://image.thanhnien.vn/768/uploaded/phucndh/2020_10_08/120852236_2289334954545463_2587970370552746848_n_nrqa.jpg'
dongHa.noiDung1 = 'Thông tin từ UBND thành phố Đông Hà, tỉnh Quảng Trị cho biết, mưa lớn kéo dài đã gây ngập lụt tại nhiều khu vực, nước lũ dâng cao đã nhấn chìm các khu vực như: phường Đông Thanh, Đông Giang, Đông Lương, Đông Lễ, Phường 2, Phường 3 (TP.Đông Hà, tỉnh Quảng Trị). Hiện tại rất nhiều nhà dân ở TP.Đông Hà, tỉnh Quảng Trị bị ngập sâu trong nước, nhiều tuyến đường bị ách tắc, hư hỏng do mưa lũ kéo dài. Lực lượng chức năng đang tích cực triển khai công tác cứu hộ, cứu nạn, di dời, sơ tán người dân ở những nơi ngập lụt nặng đến nơi an toàn.';

dongHa.soTienDaNhan = 0;
dongHa.TacGia = 'nguyễn Công Phượng';

var trieuPhong = new BaiViet();
trieuPhong.tieuDe = 'Phía Sau Những Nỗi Đau';
trieuPhong.diaPhuong = 'huyện Triệu Phong - tỉnh Quảng Trị';
trieuPhong.ngayDangBai = '20/10/2020';
trieuPhong.hinhAnh = "https://photo-1-baomoi.zadn.vn/w700_r1/2020_10_17_20_36729373/7980e2241867f139a876.jpg"
trieuPhong.noiDung = `<p>Mưa lớn kéo dài gây lũ lụt đã ảnh hưởng nghiêm trọng đến đời sống người dân Triệu Phong, hàng trăm hecta nuôithuỷ hải sản,toàn bộ gia cầm, gia súc bị lũ cuốn trôi
Huyện Triệu Phong có 5.902 hộ dân bị ngập lụt; 283 hộ ở nơi thấp trũng phải di dời; 193 ha nuôi trồng thủy sản chưa
thu hoạch ở các xã Triệu Phước, Triệu An, Triệu Trung, Triệu Độ… bị nước cuốn trôi 
</p>
`
trieuPhong.hinhAnh1="https://media.doanhnghiepvn.vn/Images/Uploaded/Share/2020/10/10/25a.jpg"
trieuPhong.noiDung1="Theo thống kê hiện nay trên địa bàn huyện Triệu Phong hư hại nhiều công trình, hạ tầng, thiệt hại về hoa màu mọt sốmô hình chăn nuôi đã bị ảnh hưởng rất nặng. Các tuyến đường liên xã đã bị chia cắt, giao thông không thể qua lạiđược. đời sống sinh hoạt của người dân rất khó khăn, phương tiện đi lại duy nhất hiện nay là ghe, xuồng. Toàn huyệnkhoảng 3.600 nhà dân bị ngập sâu, khoảng 250 hộ di dời. Tại xã Triệu Hòa có 1 người dân do nước lũ cuốn trôi chiềucùng ngày lực lượng chức năng đã tìm thấy thi thể giao cho gia đình. Riêng tại xã Triệu Phước có khoảng 38 h diệntích nuôi tôm của người dân chưa thu hoạch đã bị nước cuốn trôi."

trieuPhong.TacGia = 'nguyễn Quang Hải';     


var haiLang = new BaiViet();
haiLang.tieuDe = 'Huyện HẢI LĂNG:Thiệt Hại Nặng Nề Do Lũ Chồng Lũ';
haiLang.diaPhuong = 'huyện Hải Lăng - tỉnh Quảng Trị';
haiLang.ngayDangBai = '20/10/2020';
haiLang.hinhAnh = 'https://vnanet.vn/Data/Articles/2020/10/08/5055985/vna_potal_nhieu_dia_phuong_tai_tinh_quang_tri_bi_co_lap_do_mua_lu_123220095_stand.jpg'
haiLang.noiDung = 'Tại huyện Hải Lăng, nước lũ đã lên cao hơn ngày hôm qua từ 30 -50 cm. Toàn huyện có 2.954 hộ bị ngập, các địa phương đã di dời, sơ tán 991 hộ đến nơi an toàn. Các xã vùng thấp như Hải Sơn, Hải Hòa, Hải Chánh, Hải Phong… nước đã ngập sâu trong khu dân cư. Đặc biệt, do nước thượng nguồn đổ về lớn nên các vùng gò đồi của huyện Hải Lăng cũng bị ngập lụt. Tại hai thôn Mai Đàn và Thượng Nguyên, xã Hải Lâm có khoảng 80 hộ dân bị nước ngập sâu từ 1,5 – trên 2 m. Tuy nhiên, các lực lượng chức năng trên địa bàn huyện Hải Lăng mới di dời được một số hộ dân, số còn lại chưa chịu sơ tán khi được cảnh bảo nên khi nước lên nhanh đã mắc kẹt. Hiện nay, các lực lượng cứu hộ, tìm kiếm cứu nạn huyện Hải Lăng đang tập trung lực lương, khẩn trương tổ chức đưa người dân ra khỏi vùng ngập lụt, nguy hiểm.';
haiLang.hinhAnh1="https://nhandan.com.vn/imgold/media/k2/items/src/3478/a956c12dda4feb530a4c218492a264d9.jpg"
haiLang.noiDung1="Chủ tịch UBND xã Hải Tân Vũ Xuân Giang cho biết, chỉ trong một thời gian ngắn mà địa phương phải hứng chịu ba cơn lũ hoành hành, đời sống của người dân gặp rất nhiều khó khăn. Xã chỉ đạo các địa phương đang ngập lũ thực hiện phương châm “Nước rút đến đâu, khắc phục nhanh, có hiệu quả đến đấy”, tập trung công tác cứu trợ không để người dân thiếu đói, khắc phục thiệt hại do mưa lũ gây ra, nhanh chóng ổn định đời sống người dân.Gần một tháng nay, căn nhà cấp bốn của bà Mai Thị Khuya, ở thôn Hà Lỗ (Hải Tân) liên tục bị ngập sâu trong nước lũ. Tuổi đã cao, gia đình thuộc diện hộ nghèo lại thêm lũ chồng lũ khiến cuộc sống của bà Khuya gặp rất nhiều khó khăn. Hai hôm nay, bà Khuya phải cầm cự qua ngày bằng những gói mì tôm được phân phát từ đợt lũ trước. Mọi sinh hoạt của bà giờ thu lại trên chiếc gác tạm nằm sát mái nhà. Bà cho biết, chưa có năm nào lũ vào ra liên tục như năm nay. Nước lũ làm ngập và ướt hết bếp, củi và gạo nên không nấu ăn được, may nhờ chính quyền địa phương cứu trợ nên bà có mì tôm ăn qua ngày..."

haiLang.soTienDaNhan = 0;
haiLang.TacGia = 'nguyễn Tuấn Anh';



var daKrong = new BaiViet();
daKrong.tieuDe = 'Dakarông: Mưa lũ gây thiệt hại ước tính 380,5 tỷ đồng trên địa bàn';
daKrong.diaPhuong = 'huyện ĐaKrông - tỉnh Quảng Trị';
daKrong.ngayDangBai = '20/10/2020';
daKrong.hinhAnh = "https://file1.dangcongsan.vn/DATA/0/2019/09/quang_hiep___ngap_lut_3-17_40_15_866.jpg"
daKrong.noiDung = 'Theo thống kê, tình hình thiệt hại do mưa lũ từ ngày 07/10 đến ngày 19/10/2020 trên địa bàn toàn huyện là 380,5 tỷ đồng. Trong đó uớc thiệt hại về giao thông là 320 tỷ đồng.Hiện nay, qua thống kê sơ bộ của các địa phương hệ thống giao thông bị thiệt hại rất lớn trên tuyến đường Quốc lộ, Tỉnh lộ, Huyện lộ và đặc biệt là các tuyến đường liên thôn, nội thôn của các xã trên địa bàn huyện. Ngoài ra các công trình nước sinh hoạt của người dân cũng bị hư hỏng nặng ước thiệt hại khoảng 22 tỷ đồng. Ngay sau khi nước sông tạm rút, UBND huyện tiếp tục vận chuyển lương thực, nước uống, xăng dầu,… để hỗ trợ khẩn cấp cho các điểm bị cô lập trong điều kiện đường bộ bị chia cắt không thể di chuyển.Đồng thời, chở bệnh nhân về Đông Hà để chữa trị kịp thời. Chỉ đạo UBND các xã, thị trấn kiểm tra và thực hiện hỗ trợ khẩn cấp, chủ yếu là gạo, mỳ tôm, dầu ăn,… cho nhân dân tại các vùng bị chia cắt, đảm bảo không để nhân dân đói trong những ngày mưa lũ. UBND huyện đã trích ngân sách mua 1 tấn gạo, 800 mì tôm, 50 thùng nước uống; tiếp nhận từ các tổ chức, danh nghiệp nhà hảo tâm trong và ngoài tỉnh 55.725 kg gạo, 6.743 thùng mì tôm, 1.000 thùng nước uống, 3.000 cái chăn và 5.508 xuất quà tổng hợp cùng nhiều mặt hàng nhu yếu phẩm khác để hỗ trợ Nhân dân vượt qua khó khăn trong điều kiện thiếu lương thực do thiên tai gây ra. Với sự hỗ trợ kịp thời nên đời sống của người dân đã dẫn được ổn định.';


daKrong.hinhAnh1="http://dakrong.quangtri.gov.vn/uploads/news/2020_10/nbc_6917.jpg"
daKrong.noiDung1="Ngay sau khi nước sông tạm rút, UBND huyện tiếp tục vận chuyển lương thực, nước uống, xăng dầu,… để hỗ trợ khẩn cấp cho các điểm bị cô lập trong điều kiện đường bộ bị chia cắt không thể di chuyển. Đồng thời, chở bệnh nhân về Đông Hà để chữa trị kịp thời. Chỉ đạo UBND các xã, thị trấn kiểm tra và thực hiện hỗ trợ khẩn cấp, chủ yếu là gạo, mỳ tôm, dầu ăn,… cho nhân dân tại các vùng bị chia cắt, đảm bảo không để nhân dân đói trong những ngày mưa lũ. UBND huyện đã trích ngân sách mua 1 tấn gạo, 800 mì tôm, 50 thùng nước uống; tiếp nhận từ các tổ chức, danh nghiệp nhà hảo tâm trong và ngoài tỉnh 55.725 kg gạo, 6.743 thùng mì tôm, 1.000 thùng nước uống, 3.000 cái chăn và 5.508 xuất quà tổng hợp cùng nhiều mặt hàng nhu yếu phẩm khác để hỗ trợ Nhân dân vượt qua khó khăn trong điều kiện thiếu lương thực do thiên tai gây ra. Với sự hỗ trợ kịp thời nên đời sống của người dân đã dẫn được ổn định."
daKrong.soTienDaNhan = 0;
daKrong.TacGia = 'Lương Xuân Trường';



var huongHoa = new BaiViet();
huongHoa.tieuDe = 'Đau Thương Ở Lại';
huongHoa.diaPhuong = 'huyện Hướng Hóa - tỉnh Quảng Trị';
huongHoa.ngayDangBai = '20/10/2020';
huongHoa.hinhAnh = "https://vtv1.mediacdn.vn/thumb_w/640/2020/10/8/vnapotalnhieudiaphuongtaitinhquangtribicolapdomualu1232062415055990-1602142046715189767858.jpg"
huongHoa.noiDung = 'Đến thời điểm này, trên địa bàn huyện Hướng Hóa, hàng nghìn nhà dân bị ngập lụt; gần 200 hecta lúa bị bồi lấp, sạt trôi; hơn 200 con gia súc, gia cầm bị cuốn trôi; 17hecta ao cá bị vỡ đê; trên 100 hecta hoa màu, 204 hecta xây ăn quả bị ngập úng, hư hại. Mưa lớn liên tục cũng khiến nhiều tuyến đường trên địa bàn huyện bị chia cắt. Nhiều nơi bị cô lập cục bộ do nước dâng cao và sạt lỡ. Trong đó, sạt taluy dương với khối lượng lớn gây tắc đường tại vị trí Km51+00 Quốc lộ 9; sạt lở ta luy gây tắc đường tại vị trí Km 176 và 186, đường Hồ Chí Minh nhánh Tây… Hạt Quản lý đường bộ Hướng Việt đang huy động máy móc để xử lý những điểm thuận lợi, còn những điểm có nguy cơ tiếp tục sạt lở phải đợi đến khi hết mưa mới tổ chức thi công được. Tại xã Tân Lập, mố cầu bản Làng Vây bị xói lở hoàn toàn. Tại xã Tân Hợp, đập hồ thủy lợi thôn Tân Xuyên bị sạt lở khoảng 2m, hiện người dân và chính quyền địa phương đang tập trung khắc phục. Tại xã Hướng Tân, cầu tràn thôn Ruộng – Xa Rường bị xói tấm bê tông và sạt lở chân cầu. Mưa lũ cũng đã làm nhiều nơi trên địa bàn huyện bị mất điện. Cụ thể, tại xã Hướng Lập, Hướng Việt do đường Hồ Chí Minh nhánh Tây bị tắc nên cán bộ của Công ty Điện lực chưa vào được các xã để khắc phục sự cố. Các xã dọc tỉnh lộ ĐT586 do mưa lũ, nước dâng cao nên phải cắt điện để đảm bảo an toàn. Tại thị trấn Lao Bảo bị mất điện cục bộ tại các khóm bị ngập lụt như Tân Kim, Duy Tân. Nước sông Sê Pôn dâng cao gây ngập ở các vị trí cống tràn dẫn đến tắc đường đoạn đi qua các xã Thanh, Thuận, Ba Tầng. Về thiệt hại về người, tại huyện Hướng Hóa hiện 4 người bị nước cuốn trôi mất tích và 1 trường hợp bị đuối nước, trong đó 1 người đã được tìm thấy. Đến 11h30 phút ngày 11 tháng 10, huyện Hướng Hóa đã di dời 1.450 hộ dân với 6.516 nhân khẩu đến nơi an toàn. Theo dự báo, trong thời gian tới, do mưa lớn, lũ trên các sông tiếp tục dâng cao, nguy cơ xảy ra lũ quét, sạt lỡ đất vẫn tiếp tục xảy ra, ban Chỉ huy phòng chống thiên tai và tìm kiếm cứu nạn huyện Hướng Hóa tiếp tục chỉ đạo các địa phương, đơn vị chủ động kiểm tra, rà soát các công trình hồ, đập thủy lợi, bố trí lực lượng, phương tiện, vật tư để chủ động xử lý các sự cố; Sẵn sàng phương án, lực lượng phương tiện cứu hộ, cứu nạn kịp thời triển khai ứng cứu khi có yêu cầu. Cùng với đó, huyện cũng đã tổ chức các đoàn cứu trợ lương thực kịp thời cho các vùng bị ảnh hưởng do lũ lụt với hơn 1.500 thùng mì tôm, 147 két nước lọc và hơn 1.000 suất ăn.';
huongHoa.soTienDaNhan = 0;
huongHoa.TacGia = 'nguyễn Phan Hồng Duy';


var gioLinh = new BaiViet();
gioLinh.tieuDe = 'Một Chút Tình Quê';
gioLinh.diaPhuong = 'huyện Gio Linh - tỉnh Quảng Trị';
gioLinh.ngayDangBai = '20/10/2020';
gioLinh.hinhAnh = "http://quangtritv.vn/Uploaded/Users/lethihaianh/images/Gio%20Linh%201.bmp"
gioLinh.noiDung = 'Ảnh hưởng của áp thấp nhiệt đới đã gây mưa to đến rất to, nước từ sông Hiếu và sông Bến Hải đổ về kết hợp nước từ sông Cánh Hòm dâng lên đã khiến nhiều địa phương như: Gio Việt, Gio Mai, Gio Quang, Trung Hải, Trung Sơn (huyện Gio Linh) bị ngập sâu, nhiều khu dân cư bị nước lũ chia sắt đe dọa đến cuộc sông của người dân.';
gioLinh.hinhAnh1 ="http://quangtritv.vn/Uploaded/Users/lethihaianh/images/Gio%20Linh%202.bmp"
gioLinh.noiDung1 ="Ngay trong sáng ngày 17/10, lãnh đạo huyện Gio Linh đã có mặt tại hiện trường, chỉ đạo lực lượng Công an huyện và lực lượng tại địa phương tổ chức ứng cứu gần 100 hộ dân ở vùng xung yếu, trong đó có nhiều trường hợp người già neo đơn và các cháu nhỏ sơ sinh ở thôn Bách Lộc, xã Trung Hải đến nơi an toàn.<br/>Trên tuyến đường T100 đoạn hạ lưu cầu Tiên An, xã Trung Sơn gio nước trên sông chảy xiết đã xuất hiện sạt lở nghiêm trọng khoảng 50 mét, ăn sâu vào đất liền đe dọa đến nhiều hộ dân ở khu vực này. Cũng trong ngày 17/10, huyện Gio Linh đã kịp thời chỉ đạo địa phương huy động người dân ứng cứu bảo vệ đê hồ thủy lợi nhỏ Tân Hà xã Linh Hải với dung tích 300.000 mét khối, đảm bảo an toàn; ưu tiên trước mắt là tập trung cứu hộ không để mưa lũ đe dọa đến tính mạng người dân.<br/>Mực nước trên các sông đang ở mức cao, trong khi đó một số hồ thủy lợi tiếp tục xả điều tiết nên các xã vùng thấp nguy cơ bị ngập sâu. Chính quyền địa phương và người dân cần nâng cao cảnh giác, tuyệt đối không được chủ quan trước thiên tai lũ lụt xảy ra."
gioLinh.soTienDaNhan = 0;
gioLinh.TacGia = 'Bùi Đình Trọng';


var txQuangTri = new BaiViet();
txQuangTri.tieuDe = 'Thiên Tai Hoành Hành';
txQuangTri.diaPhuong = 'thị xã Quảng Trị - tỉnh Quảng Trị';
txQuangTri.ngayDangBai = '20/10/2020';
txQuangTri.hinhAnh = "https://media.ex-cdn.com/EXP/media.suckhoecongdongonline.vn/files/content/2020/10/20/lu-lon_vwvr-0816.jpg"
txQuangTri.noiDung = 'Theo báo cáo nhanh của BCH PCTT TKCN TXQT, trong ngày 17/10, tổng số hộ bị ngập lụt trên địa bàn là hơn 2400 hộ, trong đó số hộ ngập trên 1m là trên 1400 hộ. Số hộ phải di dời là 158 hộ. Hiện, mực nước ghi nhận được trên sông Thạch Hãn vẫn đang tiếp tục lên nhanh.Theo dự báo, từ trong 6 đến 12 giờ tới, mực nước trên sông Thạch Hãn lên mức 7, 20m trên mức báo động 3 là 1.20m, dưới đỉnh lũ lịch sử năm 1999. Trên địa bàn thị xã đang có mưa rất to. ';
txQuangTri.soTienDaNhan = 0;
txQuangTri.TacGia = 'Duy Mạnh';


var vinhLinh = new BaiViet();
vinhLinh.tieuDe = 'Xin Mưa Thôi Ngừng Rơi';
vinhLinh.diaPhuong = 'huyện Vĩnh Linh - tỉnh Quảng Trị';
vinhLinh.ngayDangBai = '20/10/2020';
vinhLinh.hinhAnh = "https://image.thanhnien.vn/768/uploaded/huydat/2020_10_20/dsc00046_chon.jpg"
vinhLinh.noiDung = 'Trên địa bàn huyện Vĩnh Linh mưa to liên tục trên diện rộng làm nước lên nhanh gây ngập lụt tại nhiều địa phương.Đặc biệt, vùng phía Bắc huyện ghi nhận lượng mưa rất lớn (từ 19 giờ ngày 19/10 đến 8 giờ ngày 20/10 tại trạm Vĩnh Tú 179,8mm, trạm Vĩnh Khê 157,2mm), thêm lượng nước lũ ở huyện Lệ Thủy, Quảng Bình đổ về gây ngập lụt thêm các xã Vĩnh Chấp, Vĩnh Tú, Vĩnh Long.';
vinhLinh.soTienDaNhan = 0;
vinhLinh.TacGia = 'Hà Đức Chinh';

var camLo = new BaiViet()
camLo.tieuDe ='Cam Lộ: Quả Cam Có Lỗ????';
camLo.diaPhuong = ' huyện Cam Lộ - Tỉnh Quảng Trị';
camLo.ngayDangBai = '13/11/2020';
camLo.hinhAnh = 'https://nhandan.com.vn/imgold/media/k2/items/src/3114/fba62c7df8c048f8675ebb8d085a618b.jpg'
camLo.noiDung = 'Lũ lên nhanh, người dân thiệt hại nặng Chi cục trưởng Thủy lợi và Phòng chống bão lụt tỉnh Quảng Trị Lê Đa Sơn cho biết, hai ngày qua, trên địa bàn tỉnh Quảng Trị có mưa to đến rất to trên diện rộng, phổ biến từ 170 - 220 mm. Riêng tại thượng nguồn sông Hiếu lên đến hơn 480 mm (từ 19 giờ ngày 31-10 đến 1 giờ sáng ngày 1-11 đạt 214 mm). Lượng nước từ thượng nguồn đổ về mạnh và lượng mưa trên địa bàn lớn khiến một số địa phương ở tỉnh Quảng Trị bị ngập lũ cục bộ.;Các xã Cam Tuyền, Cam Thủy, Cam Hiếu, Cam Thành và thị trấn Cam Lộ (Cam Lộ) bị ngập nặng nhất, có hơn 2.140 nhà dân bị ngập, trong đó có 860 hộ ngập sâu từ một đến hơn 3m. Nước lũ lên nhanh đã làm ẩm ướt, hư hỏng nhiều lúa, gạo của các hộ gia đình; hàng trăm ha hoa màu bị ngập sâu trong nước lũ.;Lũ lụt ở Cam Lộ cũng đã làm một số công trình thủy lợi, đê điều, hồ chứa, trạm bơm, đường giao thông… bị hư hỏng, thiệt hại lên đến hàng chục tỷ đồng. Chỉ riêng tiểu thương buôn bán ở chợ Phiên, thị trấn Cam Lộ, do nước lũ dâng cao bất ngờ chưa dọn đồ đạc đi được, thiệt hại đã lên đến hàng tỷ đồng.;Do nước lên nhanh nên nhiều hộ dân ở thôn Bắc Bình, An Mỹ (Cam Tuyền), Tam Hiệp, Lâm Lang (Cam Thủy), Bích Giang, Vĩnh Đại (Cam Hiếu) bị mắc kẹt không kịp di dời tránh lũ, trong đó có rất nhiều người già, phụ nữ và trẻ em. Bộ Chỉ huy Quân sự tỉnh đã sử dụng ba ca nô, điều động cán bộ, chiến sĩ và lực lượng dân quân các xã khẩn trương về các địa bàn ứng cứu cho nhân dân. Với tinh thần trách nhiệm cao nhất, các lực lượng làm nhiệm vụ phòng chống lụt bão, tìm kiếm cứu nạn đã tiếp cận, ứng cứu và di dời các hộ dân trong vùng thấp trũng đến các địa điểm cao, đảm bảo an toàn tuyệt đối.';
camLo.soTienDaNhan = 0;
camLo.TacGia = 'Hồ Tấn Tài';


var danhSachBaiViet = [
dongHa,
trieuPhong,
haiLang,
daKrong,
huongHoa,
gioLinh,
txQuangTri,
vinhLinh,
camLo
];

function hienThiDanhSachBaiViet() {

    var noiDung = ``;
    for (let i in danhSachBaiViet) {
        const baiViet = danhSachBaiViet[i];

        noiDung += 
        `<div class="khoi-anh"> 
            <div class="img-wrapper">
                <img src="${baiViet.hinhAnh}" alt="">
            </div>

            <div class="diaphuong">

                <h4> <i class="fa fa-map-marker" aria-hidden="true"></i> ${baiViet.diaPhuong}</h4>
            </div>

            <div class="title">
                <h3><a href="./tintuc.html?tin=${i}">${baiViet.tieuDe}</a></h3>
            </div>

            
        </div>` 
    }

    document.getElementById("ds-carousel").innerHTML = noiDung
}


function hienThiTinTongQuat() {
    var　noiDungCon = ``;
    console.log(danhSachBaiViet)
    for (let i in danhSachBaiViet) {
        const tieuDeNoiDung = danhSachBaiViet[i];
        noiDungCon += 
        `<div class="noi_dung_con">
            <div class="noi_dung_con__hinhanh">
                <img src="${tieuDeNoiDung.hinhAnh} " alt="" width="200" height="130">
            </div>

            <div class="noi_dung_con__tieu-de">
                <a href="./tintuc.html?tin=${i}">${tieuDeNoiDung.tieuDe}</a>
            </div>
        </div>`
    }
    document.getElementById("tinmoi").innerHTML = noiDungCon
    
}
hienThiTinTongQuat();


