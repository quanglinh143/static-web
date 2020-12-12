# static-web
Bài thực hành của em để trong div lớn là container
1)phần thanh nav có class là: poss-father:
  +)trong nav có: logo, 3 tiêu đề mục con, 1 thanh input search
  +)về CSS cho phần này: em có sử dụng icon bởi fontawsome cho trang web. Sử dụng display:flex; để dàn iteams. Bên cạnh đó em có responsive với max-width: 950px thanh nav sẽ thu     nhỏ với 3 thanh xược ngang, người dùng sẽ click vào đó để hiện thị thanh nav theo columns.
  
 2)content-main--head: em để thẻ h2 và h3: CSS sử dụng display: flex; justify-content: center;
 
 3)Tiếp đến là content-main
  +)em chia tỉ lệ (ảnh/nội dung bài viết) =1/2;
  +)thẻ div content-body--img em để position:relative; và poss-content--main có position: absolute; Với mục đích: khi hover vào bức ảnh, tiêu đề chú thích sẽ chạy ngang             transition:0.3s;
  +)Responsive: Khi thu màn hình về max-width:950px; nội dung đc CSS theo hướng dọc giúp người sử dụng điện thoại có thể dễ dàng đọc bài viết hơn và trang sẽ được đẹp và logic.
  
  4)Choose:
  +)Với 4 nút ấn CSS dàn ngang + border: 1px solid red, border-radius để bo góc khung. Tại đây, em kết hợp JAVASCRIPT:
  food-city-beach-nature: Mỗi một nút ấn sẽ có 3 bức hình và tiêu đề tại "tk02.js"
  Em khai báo theo mảng, sau mỗi lần click vào ô nút ấn, hình và tiêu đề sẽ thay đổi theo đề tài trên.
  Tương tự:+)Responsive: Khi thu màn hình về max-width:950px; nội dung đc CSS theo hướng dọc giúp người sử dụng điện thoại có thể dễ dàng đọc bài viết hơn và trang sẽ được đẹp và logic.
  
  5)Galleyry:
  +)CSS thay đổi font chữ và font size;
  +)hình ảnh dàn ngang.  display: flex; justify-content: space-around;
  
  6) Là 1 trang web quảng bá du lịch nên em có sử dụng JAVASCRIPT tại đấy kết hợp sự kiên onload, cập nhật giờ hiện tại VIỆT NAM.
  +)Responsive: max-width:815px;  tại đây sẽ giúp Nội dung thẻ h1 và thời gian tránh xung đột, chữ đè chữ:
  
  7) Cuối cùng là footer:
  
  footer-left: là nội dung và thẻ input
  
  footer-mid: là nội dung của thông điệp và ghi chú
  
  footer-right: là lời chào mừng với quảng bá qua nền tảng mạng xã hội
  
  
