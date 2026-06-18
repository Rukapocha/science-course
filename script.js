/* ★★★ CodePenの「JS」欄にこのファイルをすべて貼り付けてください ★★★
*/

// 1. スマホのメニュー開閉ボタン
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    const icon = menuToggle.querySelector('i');
    if(navLinks.classList.contains('active')) {
        icon.className = 'fa-solid fa-xmark';
    } else {
        icon.className = 'fa-solid fa-bars';
    }
});

// メニューを選んだら自動で閉じる設定
navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        menuToggle.querySelector('i').className = 'fa-solid fa-bars';
    });
});

// 2. カリキュラムのタブ切り替え
const tabButtons = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        tabButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        const targetTab = button.getAttribute('data-tab');
        tabContents.forEach(content => {
            if (content.id === targetTab) {
                content.classList.add('active');
            } else {
                content.classList.remove('active');
            }
        });
    });
});

// 3. 在校生の声スライドショー
const slides = document.querySelectorAll('.voice-slide');
const prevBtn = document.getElementById('prevVoice');
const nextBtn = document.getElementById('nextVoice');
let currentSlide = 0;

function showSlide(index) {
    slides.forEach((slide, i) => {
        if (i === index) {
            slide.classList.add('active');
        } else {
            slide.classList.remove('active');
        }
    });
}

prevBtn.addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
});

nextBtn.addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
});

// 4. FAQ アコーディオン（質問を押したら答えがひらく）
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');

    question.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        
        // 他のひらいているアコーディオンを一度閉じる
        faqItems.forEach(el => {
            el.classList.remove('active');
            el.querySelector('.faq-answer').style.maxHeight = null;
        });

        if (!isActive) {
            item.classList.add('active');
            answer.style.maxHeight = answer.scrollHeight + "px";
        }
    });
});

// 5. 可愛いお知らせウインドウ（ポップアップ表示）
const noticeModal = document.getElementById('noticeModal');
const noticeText = document.getElementById('noticeText');

function showNotice(text) {
    noticeText.textContent = text;
    noticeModal.style.display = 'flex';
}

function closeNotice() {
    noticeModal.style.display = 'none';
}

// 6. 画面をスクロールしたときのヘッダーの色の変化
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
        header.style.boxShadow = '0 10px 30px rgba(163, 216, 244, 0.2)';
    } else {
        header.style.backgroundColor = 'rgba(255, 255, 255, 0.85)';
        header.style.boxShadow = '0 4px 20px rgba(163, 216, 244, 0.1)';
    }
});