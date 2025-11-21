// Lấy tham chiếu đến div lớn (main-display)
const mainDisplay = document.getElementById('main-display');

// Lấy tham chiếu đến tất cả các div nhỏ (thumbnail)
const thumbnails = document.querySelectorAll('.thumbnail');

// Hàm để đặt hình ảnh mặc định ban đầu
function setDefaultDisplay() {
    mainDisplay.style.backgroundImage = 'none'; // Xóa hình nền
    mainDisplay.style.color = '#333';
    mainDisplay.style.backgroundColor = '#ccc';
    mainDisplay.style.width = '400px';
    mainDisplay.style.height = '400px';
    mainDisplay.style.backgroundSize = 'cover';
}

// Đặt hiển thị mặc định khi tải trang
setDefaultDisplay();

// Lặp qua từng div nhỏ để gán sự kiện
thumbnails.forEach(thumbnail => {
    // Sự kiện khi di chuột vào (mouseenter)
    thumbnail.addEventListener('mouseenter', () => {
        // Lấy đường dẫn hình ảnh từ thuộc tính data-image
        const imageUrl = thumbnail.getAttribute('data-image');
        // Lấy văn bản mô tả từ thuộc tính data-text

        // Cập nhật div lớn:
        // 1. Thay đổi hình nền
        mainDisplay.style.backgroundImage = `url('${imageUrl}')`;
        // 2. Xóa văn bản mặc định và hiển thị mô tả hình ảnh
        mainDisplay.innerHTML = `<p style="background: rgba(0,0,0,0.5); padding: 5px 10px; border-radius: 4px; color: white;">${imageText}</p>`;
        mainDisplay.style.backgroundColor = 'transparent';
        mainDisplay.style.color = 'white';
    });

    // Sự kiện khi di chuột ra (mouseleave)
    thumbnail.addEventListener('mouseleave', () => {
        // Quay lại trạng thái hiển thị mặc định
        setDefaultDisplay();
    });
});