
      const message = "Hãy mở nhạc trước khi bắt đầu nhé ❤️";
      const textEl = document.getElementById("typing-text");
      const sound = document.getElementById("type-sound");
      const music = document.getElementById("audios");
      const musicToggleBtn = document.getElementById("music-toggle");
      const startScreen = document.getElementById("start-screen");

      let i = 0;
      function typeNextChar() {
        if (i < message.length) {
          textEl.textContent += message[i];
          if (message[i] !== " ") {
            sound.currentTime = 0;
            sound.play();
          }
          i++;
          setTimeout(typeNextChar, 80);
        }
      }

      window.addEventListener("DOMContentLoaded", () => {
        setTimeout(typeNextChar, 500);
      });

      // Blocks animation
      const blk_pitn = {
        block1: [
          [0, 1],
          [0, 0],
          [-1, 0],
          [-1, -1],
        ],
        block2: [
          [0, 1],
          [0, 0],
          [-1, 0],
          [0, -1],
        ],
        block3: [
          [-1, 1],
          [0, 0],
          [-1, 0],
          [-1, -1],
        ],
        block4: [
          [0, 1],
          [0, 0],
          [-1, 0],
          [-1, -1],
        ],
        block5: [
          [-1, 1],
          [0, 0],
          [-1, 0],
          [0, -1],
        ],
        block6: [
          [0, -1],
          [0, 0],
          [-1, 0],
          [1, -1],
        ],
        block7: [
          [-1, -1],
          [0, 0],
          [-1, 0],
          [1, 0],
        ],
        block8: [
          [-1, 1],
          [0, 0],
          [-1, 0],
          [-1, -1],
        ],
        block9: [
          [0, -1],
          [0, 0],
          [-1, 0],
          [1, 0],
        ],
        block10: [
          [-1, 1],
          [0, 0],
          [-1, 0],
          [1, 0],
        ],
        block11: [
          [2, 0],
          [0, 0],
          [-1, 0],
          [1, 0],
        ],
        block12: [
          [0, 1],
          [0, 0],
          [-1, 0],
          [0, -1],
        ],
        block13: [
          [0, 1],
          [0, 0],
          [-1, 0],
          [-1, -1],
        ],
        block14: [
          [1, 1],
          [0, 0],
          [-1, 0],
          [1, 0],
        ],
        block15: [
          [1, -1],
          [0, 0],
          [-1, 0],
          [1, 0],
        ],
        block16: [
          [-1, -1],
          [0, 0],
          [-1, 0],
          [1, 0],
        ],
        block17: [
          [0, 1],
          [0, 0],
          [-1, 0],
          [0, -1],
        ],
        block18: [
          [0, 1],
          [0, 0],
          [-1, 0],
          [-1, -1],
        ],
        block19: [
          [0, -1],
          [0, 0],
          [-1, 0],
          [1, 0],
        ],
        block20: [
          [1, -1],
          [0, 0],
          [-1, 0],
          [1, 0],
        ],
        block21: [
          [0, 1],
          [0, 0],
          [-1, 0],
          [-1, -1],
        ],
        block22: [
          [1, 1],
          [0, 0],
          [-1, 0],
          [1, 0],
        ],
        block23: [
          [0, 2],
          [0, 0],
          [0, -1],
          [0, 1],
        ],
      };
      const offset_pitn = {
        block1: [5, 3],
        block2: [5, 1],
        block3: [3, 4],
        block4: [3, 2],
        block5: [3, -1],
        block6: [2, 5],
        block7: [2, 1],
        block8: [1, -1],
        block9: [1, -3],
        block10: [1, 2],
        block11: [0, 3],
        block12: [0, 0],
        block13: [-1, -4],
        block14: [0, -2],
        block15: [-2, 4],
        block16: [-2, 2],
        block17: [-2, 0],
        block18: [-3, -2],
        block19: [-4, 0],
        block20: [-3, 5],
        block21: [-5, 3],
        block22: [-4, 1],
        block23: [-6, 1],
      };

      let blocks,
        block,
        love,
        timer = null,
        index = 0,
        clone_block;

      const heartImages = [
        "1.jpg",
        "2.jpeg",
        "3.jpg",
        "4.jpg",
        "5.jpg",
        "6.jpg",
        "7.JPG",
        "8.jpg",
        "9.JPG",
        "11.JPG",
        "12.jpg",
        "13.JPG",
        "14.JPG",
        "15.JPG",
        "16.JPG",
        "17.JPG",
        "18.JPG",
        "19.JPG",
        "IMG_7470.JPG",
        "21.JPG",
        "22.JPG",
      ];

      function Next() {
        if (index >= heartImages.length) {
          clearInterval(timer);
          Rise();
          return;
        }

        const img = document.createElement("img");
        img.src = `images/heart_blocks/${heartImages[index]}`;
        img.style.position = "absolute";
        img.style.width = "80px"; // tùy chỉnh lại kích thước lớn hơn
        img.style.height = "80px";
        img.style.borderRadius = "12px";
        img.style.boxShadow = "0 4px 8px rgba(0,0,0,0.2)";
        img.style.transition = "transform 0.6s ease, opacity 0.6s ease";
        img.style.opacity = "0";
        img.style.transform = "scale(0.5)";

        // Toạ độ trái tim đơn giản (tối ưu lại cho 10 ảnh)
        const heartLayout = [
          [-2, -3],
          [2, -3],
          [-3, -2],
          [-1, -2],
          [1, -2],
          [3, -2],
          [-4, -1],
          [-2, -1],
          [0, -1],
          [2, -1],
          [4, -1],
          [-3, 0],
          [-1, 0],
          [1, 0],
          [3, 0],
          [-2, 1],
          [0, 1],
          [2, 1],
          [-1, 2],
          [1, 2],
          [0, 3],
        ];
        img.style.width = "120px";
        img.style.aspectRatio = "1 / 1"; // Đảm bảo ảnh luôn vuông
        img.style.objectFit = "cover";
        img.style.objectPosition = "center";
        img.style.borderRadius = "12px";
        img.style.boxShadow = "0 4px 8px rgba(0,0,0,0.2)";
        img.style.transition = "transform 0.6s ease, opacity 0.6s ease";
        img.style.opacity = "0";
        img.style.transform = "scale(0.5)";

        const x = heartLayout[index][0] * 80;
        const y = heartLayout[index][1] * 90;

        img.style.left = `calc(50% + ${x}px)`;
        img.style.top = `calc(45% + ${y}px)`;

        setTimeout(() => {
          img.style.opacity = "1";
          img.style.transform = "scale(1)";
        }, 100);

        document.querySelector(".body_center.love").appendChild(img);
        index++;
      }

      function Rise() {
        let distance = 0;
        const target = 120,
          speed = 1;
        const love_top = parseFloat(
          window.getComputedStyle(love, null).top.slice(0, -2)
        );
        const timer2 = setInterval(() => {
          distance += speed;
          if (distance >= target) {
            clearInterval(timer2);
            typeEndingMessage(); // Gọi hiệu ứng gõ sau khi lên trời
          }
          love.style.top = love_top - distance + "px";
        }, 22);
      }

      function typeEndingMessage() {
        const message =
          "Vợ à, anh biết là chúng ta hay cãi nhau về nhiều thứ,\nnhưng mong vợ hãy nhớ là anh luôn luôn yêu thương vợ\nvà sẽ ở bên vợ mãi thôi.\nEm là bầu trời của anh mà.\nCảm ơn em vì đã luôn bên anh! \n Thương em ❤️";
        const endingEl = document.getElementById("ending-message");
        const typingSound = new Audio(
          "https://cdn.pixabay.com/download/audio/2022/03/15/audio_7ed2941f6c.mp3"
        ); // gõ máy
        let i = 0;
        endingEl.style.opacity = 1;

        function typeChar() {
          if (i < message.length) {
            endingEl.textContent += message[i];
            if (message[i] !== " ") {
              typingSound.currentTime = 0;
              typingSound.play();
            }
            i++;
            setTimeout(typeChar, 80);
          }
        }

        setTimeout(typeChar, 500);
      }

      musicToggleBtn.onclick = () => {
        music.play().then(() => {
          startScreen.style.display = "none";

          document
            .querySelectorAll(".container, .footer, .footer-message")
            .forEach((el) => {
              el.classList.remove("hidden");
              el.classList.add("visible");
            });

          blocks = document.getElementsByClassName("block");
          block = blocks[0];
          love = document.getElementsByClassName("love")[0];

          block.style.top = "50%";
          block.style.left = "50%";
          block.style.margin = "-20px 0 0 -20px";

          block_left = parseFloat(window.getComputedStyle(block).left);
          block_top = parseFloat(window.getComputedStyle(block).top);

          setTimeout(() => {
            timer = setInterval(() => {
              Next();
            }, 600);
          }, 10000);
        });
      };