const targetDate = new Date(Date.UTC(2025, 1, 20, 8, 0, 0)).getTime();
const image = document.querySelector(".image"); // Lấy ảnh để áp dụng hiệu ứng

function updateCountdown() {
    const now = new Date().getTime();
    const timeLeft = targetDate - now;

    if (timeLeft < 0) {
        document.getElementById("countdown").innerHTML = "Sự kiện đã bắt đầu!";
        return;
    }

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;

    // Kích hoạt hiệu ứng phồng/thu nhỏ ảnh mỗi giây
    image.style.animation = "pulse 1s ease-in-out";
    setTimeout(() => {
        image.style.animation = "";
    }, 900); // Đặt lại animation sau 0.9s để giữ hiệu ứng liên tục
}

setInterval(updateCountdown, 1000);
updateCountdown();
