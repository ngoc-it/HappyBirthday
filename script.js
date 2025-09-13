document.addEventListener('DOMContentLoaded', () => {
    const page1 = document.querySelector('.page-1');
    const page2 = document.querySelector('.page-2');
    const instruction = document.getElementById('instruction');
    const typedTextElement = document.getElementById('typed-text');
    const beakerContainer = document.querySelector('.beaker-container');
    const confettiContainer = document.querySelector('.confetti-container');

    beakerContainer.innerHTML = `
        <div class="beaker">
            <div class="liquid"></div>
        </div>
    `;

    const beaker = document.querySelector('.beaker');
    
    const message = `Thân gửi cô giáo iu dấu!!!,

Nhân ngày sinh nhật, gửi đến cô những lời chúc tốt đẹp nhất.
Chúc cô luôn dồi dào sức khỏe, tràn đầy niềm vui, và gặt hái được nhiều thành công hơn nữa trên con đường sự nghiệp trồng người.
Mong rằng sau này dù con có thay đổi ra sao trưởng thành như thế nào thì trong mắt cô con vẫn luôn là con nhóc 16 - 17 tuổi của năm đó vô tư và ... rất thích kiếm chuyện với cô hihi!!

Xin chút cô tuổi mới thật hạnh phúc và bình an!`;

    // Hiệu ứng tuần tự
    setTimeout(() => {
        instruction.textContent = "Hãy cùng thực hiện một phản ứng đặc biệt dành tặng cô!";
        setTimeout(() => {
            // Nổ bình
            beaker.classList.add('explode');
            
            // Bắn pháo giấy ngay sau khi bình nổ
            createConfetti();

            setTimeout(() => {
                beakerContainer.style.display = 'none';
                instruction.style.display = 'none'; // Ẩn dòng chữ hướng dẫn
                
                // Chuyển sang trang lời chúc
                page1.classList.remove('active-page');
                page2.classList.add('active-page');
                typeMessage(message);

            }, 800); // Đợi 0.8 giây sau khi bình nổ để chuyển trang
        }, 5000); // Đợi 5 giây để bắt đầu phản ứng
    }, 2000); // Hiển thị dòng chữ sau 2 giây

    // Hàm tạo hiệu ứng gõ chữ
    function typeMessage(text) {
        let i = 0;
        typedTextElement.textContent = '';
        const typingInterval = setInterval(() => {
            if (i < text.length) {
                typedTextElement.textContent += text.charAt(i);
                i++;
            } else {
                clearInterval(typingInterval);
            }
        }, 80); 
    }

    // Hàm tạo hiệu ứng pháo giấy
    function createConfetti() {
        const colors = ['#f39c12', '#e91e63', '#3498db', '#f1c40f', '#2ecc71'];
        for (let i = 0; i < 100; i++) { 
            const confetti = document.createElement('div');
            confetti.classList.add('confetti');
            confetti.style.left = `${Math.random() * 100}vw`;
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.animationDelay = `${Math.random() * 0.5}s`;
            confettiContainer.appendChild(confetti);
        }
    }
});