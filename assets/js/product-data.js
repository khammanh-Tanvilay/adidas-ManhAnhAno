// ==========================================================
// ==      CƠ SỞ DỮ LIỆU SẢN PHẨM CHO TOÀN BỘ WEBSITE      ==
// ==========================================================
// File này chứa thông tin của tất cả sản phẩm để phục vụ chức năng tìm kiếm.
// KHI THÊM SẢN PHẨM MỚI, HÃY CẬP NHẬT TỆP NÀY.

const allProducts = [

    // === SẢN PHẨM TỪ TRANG INDEX.HTML ===
    {
        name: "Man Utd 25/26 Home Kit",
        category: "Nam Quần áo Bóng đá",
        price: 2500000,
        image: "assets/img/h4.jpg",
        url: "Man.html"
    },
    {
        name: "FC Bayern 25/26 Home Kit",
        category: "Nam Quần áo Bóng đá",
        price: 2500000,
        image: "assets/img/h5.jpg",
        url: "Man.html"
    },
    {
        name: "Real Madrid 25/26 Home Kit",
        category: "Nam Quần áo Bóng đá",
        price: 2500000,
        image: "assets/img/h6.jpg",
        url: "Man.html"
    },
    {
        name: "Arsenal 25/26 Home Kit",
        category: "Nam Quần áo Bóng đá",
        price: 2500000,
        image: "assets/img/h7.jpg",
        url: "Man.html"
    },
    {
        name: "YOU GOT THIS",
        category: "Nữ Quần áo",
        price: 1800000,
        image: "assets/img/h8.jpg",
        url: "Women.html"
    },
    {
        name: "Sống trong Soft Lux",
        category: "Nữ Quần áo",
        price: 1950000,
        image: "assets/img/h9.jpg",
        url: "Women.html"
    },
    {
        name: "Lightblaze",
        category: "Giày Chạy bộ",
        price: 2100000,
        image: "assets/img/h10.jpg",
        url: "Shoes.html"
    },
    {
        name: "Dame X",
        category: "Nam Giày Bóng rổ",
        price: 2800000,
        image: "assets/img/h11.jpg",
        url: "Shoes.html"
    },

    // === SẢN PHẨM TỪ TRANG SHOES.HTML ===
    {
        name: "Samba OG Shoes",
        category: "Giày Originals",
        price: 2700000,
        image: "assets/img/h40.jpg",
        url: "Shoes.html"
    },
    {
        name: "Gazelle Indoor Shoes",
        category: "Giày Originals",
        price: 2900000,
        image: "assets/img/h41.jpg",
        url: "Shoes.html"
    },
    {
        name: "Handball Spezial Shoes",
        category: "Giày Originals",
        price: 2500000,
        image: "assets/img/h42.jpg",
        url: "Shoes.html"
    },
    {
        name: "Superstar II Shoes",
        category: "Giày Originals",
        price: 2600000,
        image: "assets/img/h43.jpg",
        url: "Shoes.html"
    },
    {
        name: "Stan Smith Shoes",
        category: "Giày Originals",
        price: 2600000,
        image: "assets/img/h44.jpg",
        url: "Shoes.html"
    },
    {
        name: "Campus 2.0 Shoes",
        category: "Giày Originals",
        price: 2250000,
        image: "assets/img/h45.jpg",
        url: "Shoes.html"
    },
    {
        name: "Taekwondo Lace Shoes",
        category: "Giày Originals",
        price: 2400000,
        image: "assets/img/h46.jpg",
        url: "Shoes.html"
    },
    {
        name: "SL 72 RS Shoes",
        category: "Giày Originals",
        price: 2400000,
        image: "assets/img/h47.jpg",
        url: "Shoes.html"
    },
    {
        name: "Japan Shoes",
        category: "Giày Originals",
        price: 2900000,
        image: "assets/img/h48.jpg",
        url: "Shoes.html"
    },

    // === SẢN PHẨM TỪ TRANG MAN.HTML ===
    {
        name: "MER TM POLO BM",
        category: "Nam Motorsport Quần áo",
        price: 2300000,
        image: "assets/img/h12.jpg",
        url: "Man.html"
    },
    {
        name: "Áo Arsenal US Pack",
        category: "Nam Bóng đá Quần áo",
        price: 1800000,
        image: "assets/img/h13.jpg",
        url: "Man.html"
    },
    {
        name: "Áo đấu sân nhà Manchester",
        category: "Nam Bóng đá Quần áo",
        price: 2200000,
        image: "assets/img/h14.jpg",
        url: "Man.html"
    },
    {
        name: "Áo shooting bóng rổ",
        category: "Nam Originals Quần áo",
        price: 2300000,
        image: "assets/img/h15.jpg",
        url: "Man.html"
    },
    {
        name: "Túi Bowling Mini",
        category: "Phụ kiện Túi Originals",
        price: 1800000,
        image: "assets/img/h16.jpg",
        url: "Man.html"
    },
    {
        name: "Dép Adilette 25",
        category: "Nam Dép Originals",
        price: 2200000,
        image: "assets/img/h17.jpg",
        url: "Man.html"
    },
    {
        name: "Mũ Bóng Chày Wash Bạc",
        category: "Phụ kiện Mũ Originals",
        price: 2300000,
        image: "assets/img/h18.jpg",
        url: "Man.html"
    },
    {
        name: "Giày Đá Bóng Turf F50 Pro",
        category: "Nam Giày Bóng đá",
        price: 1800000,
        image: "assets/img/h19.jpg",
        url: "Man.html"
    },
    {
        name: "Áo Polo Họa Tiết",
        category: "Nam Đánh gôn Quần áo",
        price: 2200000,
        image: "assets/img/h20.jpg",
        url: "Man.html"
    },

    // === SẢN PHẨM TỪ TRANG WOMEN.HTML ===
    {
        name: "ADIZERO BOSTON 13",
        category: "Nữ Giày Chạy bộ",
        price: 3200000,
        image: "assets/img/h26.jpg",
        url: "Women.html"
    },
    {
        name: "Giày Samba Jane",
        category: "Nữ Giày Originals",
        price: 2400000,
        image: "assets/img/h30.jpg",
        url: "Women.html"
    },
    {
        name: "Giày Taekwondo Mei",
        category: "Nữ Giày Originals",
        price: 2400000,
        image: "assets/img/h31.jpg",
        url: "Women.html"
    },
    // Chú ý: 2 sản phẩm h32, h33 có cùng tên "Giày Samba Jane", có thể là lỗi. Tạm giữ nguyên.
    {
        name: "Giày Samba Jane (mẫu 2)",
        category: "Nữ Giày Originals",
        price: 2400000,
        image: "assets/img/h32.jpg",
        url: "Women.html"
    },
    {
        name: "Giày Samba Jane (mẫu 3)",
        category: "Nữ Giày Originals",
        price: 2400000,
        image: "assets/img/h33.jpg",
        url: "Women.html"
    },

    // === SẢN PHẨM TỪ TRANG NOIBATNAM.HTML (QUẦN ÁO NAM) ===
    {
        name: "Classics 3-Stripes Tee",
        category: "Nam Quần áo Originals",
        price: 950000,
        image: "assets/img/h49.jpg",
        url: "NoiBatNam.html"
    },
    {
        name: "Knit Half-Zip Polo",
        category: "Nam Quần áo Originals",
        price: 1050000,
        image: "assets/img/h50.jpg",
        url: "NoiBatNam.html"
    },
    {
        name: "Short Sleeve Polo Shirts",
        category: "Nam Quần áo Originals",
        price: 1900000,
        image: "assets/img/h51.jpg",
        url: "NoiBatNam.html"
    },
    {
        name: "Full-Zip Hooded Jacket",
        category: "Nam Quần áo Originals",
        price: 2400000,
        image: "assets/img/h52.jpg",
        url: "NoiBatNam.html"
    },
    {
        name: "Own The Run Tank Top",
        category: "Nam Quần áo Chạy bộ",
        price: 750000,
        image: "assets/img/h53.jpg",
        url: "NoiBatNam.html"
    },
    {
        name: "Squadra Cotton Polo Shirt",
        category: "Nam Quần áo Originals",
        price: 800000,
        image: "assets/img/h54.jpg",
        url: "NoiBatNam.html"
    },
    {
        name: "Adi365 Running Love Tee",
        category: "Nam Quần áo Chạy bộ",
        price: 800000,
        image: "assets/img/h55.jpg",
        url: "NoiBatNam.html"
    },
    {
        name: "Tennnis Pro Tank Top",
        category: "Nam Quần áo Quần vợt",
        price: 1700000,
        image: "assets/img/h56.jpg",
        url: "NoiBatNam.html"
    },
    {
        name: "Core Full-Zip Jacket",
        category: "Nam Quần áo",
        price: 2900000,
        image: "assets/img/h57.jpg",
        url: "NoiBatNam.html"
    },

    // === SẢN PHẨM TỪ TRANG NOIBATNU.HTML (QUẦN ÁO NỮ) ===
    {
        name: "Classics 3-Stripes Tee",
        category: "Nữ Quần áo Originals",
        price: 950000,
        image: "assets/img/h58.jpg",
        url: "NoiBatNu.html"
    },
    {
        name: "Adi365 Running Love Tee",
        category: "Nữ Quần áo Chạy bộ",
        price: 800000,
        image: "assets/img/h59.jpg",
        url: "NoiBatNu.html"
    },
    {
        name: "Adi365 Crop Top",
        category: "Nữ Quần áo",
        price: 1300000,
        image: "assets/img/h60.jpg",
        url: "NoiBatNu.html"
    },
    {
        name: "Adi365 Running Love Short",
        category: "Nữ Quần áo Chạy bộ",
        price: 800000,
        image: "assets/img/h61.jpg",
        url: "NoiBatNu.html"
    },
    {
        name: "Adidas Z.N.E. Baby Tee",
        category: "Nữ Quần áo",
        price: 1050000,
        image: "assets/img/h62.jpg",
        url: "NoiBatNu.html"
    },
    {
        name: "SST Short Sleeve Polo",
        category: "Nữ Quần áo Originals",
        price: 1300000,
        image: "assets/img/h63.jpg",
        url: "NoiBatNu.html"
    },
    {
        name: "Adicolor Sleeve T-Shirt",
        category: "Nữ Quần áo Originals",
        price: 960000,
        image: "assets/img/h64.jpg",
        url: "NoiBatNu.html"
    },
    {
        name: "Tennis Pro Pleated Skirt",
        category: "Nữ Quần áo Quần vợt",
        price: 1700000,
        image: "assets/img/h65.jpg",
        url: "NoiBatNu.html"
    },
    {
        name: "Adidas Crop Polo",
        category: "Nữ Quần áo Originals",
        price: 1100000,
        image: "assets/img/h66.jpg",
        url: "NoiBatNu.html"
    },
    
    // === SẢN PHẨM TỪ TRANG PHUKIEN.HTML ===
    {
        name: "Adicolor Baseball Cap",
        category: "Phụ kiện Mũ Originals",
        price: 500000,
        image: "assets/img/h67.jpg",
        url: "PhuKien.html"
    },
    {
        name: "Túi Adicolor",
        category: "Phụ kiện Túi Originals",
        price: 1450000,
        image: "assets/img/h68.jpg",
        url: "PhuKien.html"
    },
    {
        name: "Adicolor Classic Backpack",
        category: "Phụ kiện Balo Originals",
        price: 850000,
        image: "assets/img/h69.jpg",
        url: "PhuKien.html"
    },
    {
        name: "Tất Adi365",
        category: "Phụ kiện Tất",
        price: 450000,
        image: "assets/img/h70.jpg",
        url: "PhuKien.html"
    },
    {
        name: "Camo Backpack",
        category: "Phụ kiện Balo Originals",
        price: 1000000,
        image: "assets/img/h71.jpg",
        url: "PhuKien.html"
    },
    {
        name: "Adidas Golf Tote Bag",
        category: "Phụ kiện Túi Đánh gôn",
        price: 1200000,
        image: "assets/img/h72.jpg",
        url: "PhuKien.html"
    },
    {
        name: "Performance Bottle 750 ML",
        category: "Phụ kiện Bình nước",
        price: 200000,
        image: "assets/img/h75.jpg",
        url: "PhuKien.html"
    },
    {
        name: "Túi đeo chéo Tennis",
        category: "Phụ kiện Túi Quần vợt",
        price: 700000,
        image: "assets/img/h73.jpg",
        url: "PhuKien.html"
    },
    {
        name: "Túi trống thể thao",
        category: "Phụ kiện Túi Gym",
        price: 1000000,
        image: "assets/img/h74.jpg",
        url: "PhuKien.html"
    }
];