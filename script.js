document.addEventListener("DOMContentLoaded", () => {
    const bg = document.getElementById("bg");
    const uploadIcon = document.getElementById('upload_icon');
    const loaderSec = document.getElementById('loader-sec');
    const umbrellaImage = document.getElementById("umbrella-image");
    const buttons = document.getElementById("buttons");
    const imageLoader = document.getElementById("imageLoader");
    const pinkButton = document.getElementById("pink");
    const blueButton = document.getElementById("blue");
    const yellowButton = document.getElementById("yellow");
    const fileInput = document.getElementById('fileInput');
    const cancelButton = document.getElementById('cancelButton');
    const buttonLoader = document.getElementById('buttonLoader');
    const logo = document.getElementById('logo');
    const fileNameDisplay = document.getElementById('fileNameDisplay');
    
    const loader = document.querySelector(".loader");
    
    const showLoader = () => { loader.style.display = "block"; };
    const hideLoader = () => { loader.style.display = "none"; };

    function changeUmbrellaColor(imageUrl, buttonBackground, backgroundColor, activeButton) {
        umbrellaImage.style.opacity = "0%";
        buttons.style.backgroundColor = buttonBackground;
        bg.style.backgroundColor = backgroundColor;
        showLoader();
        uploadIcon.style.display = "none";
        loaderSec.style.display = "block";
        
        setTimeout(() => {
            umbrellaImage.style.backgroundImage = `url('${imageUrl}')`;
            hideLoader();
            umbrellaImage.style.opacity = "100%";
            uploadIcon.style.display = "block";
            loaderSec.style.display = "none";
        }, 2500);
        
        pinkButton.classList.toggle("active", activeButton === pinkButton);
        blueButton.classList.toggle("active", activeButton === blueButton);
        yellowButton.classList.toggle("active", activeButton === yellowButton);
    }

    pinkButton.addEventListener("click", () => changeUmbrellaColor("./Pinkumbrella.png", "var(--pink)", "var(--pink-super-light)", pinkButton));
    blueButton.addEventListener("click", () => changeUmbrellaColor("./Blueumbrella.png", "var(--blue)", "var(--blue-super-light)", blueButton));
    yellowButton.addEventListener("click", () => changeUmbrellaColor("./Yelloumbrella.png", "var(--yellow)", "var(--yellow-super-light)", yellowButton));

    fileInput.addEventListener('change', function(event) {
        const file = event.target.files[0];
        
        if (file && (file.type === 'image/png' || file.type === 'image/jpeg') && file.size <= 5 * 1024 * 1024) {
            const reader = new FileReader();
            reader.onload = function(e) {
                logo.style.backgroundImage = `url(${e.target.result})`;
                cancelButton.style.display = 'flex';
                hideLoader(buttonLoader);
                const slicedFileName = file.name.slice(0, 6);
                fileNameDisplay.textContent = slicedFileName.length < file.name.length ? slicedFileName + '...' : slicedFileName;
            };
            showLoader(buttonLoader);
            reader.readAsDataURL(file);
        } else {
            alert('Check file type or file size.');
        }
    });

    cancelButton.addEventListener("click", () => {
        logo.style.backgroundImage = '';
        cancelButton.style.display = 'none';
        fileNameDisplay.textContent = 'Upload Logo';
    });
});
