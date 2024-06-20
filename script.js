const bg = document.getElementById("bg");
function showLoader() {
    const loader = document.querySelector(".loader");
    loader.style.display = "block";
}

function hideLoader() {
    const loader = document.querySelector(".loader");
    loader.style.display = "none";
}
function changeUmbrellaColor(elementId, buttonId, loaderId, imageUrl, buttonBackground,backgroundColor) {
    const element = document.getElementById(elementId);
    const button = document.getElementById(buttonId);
    const loader = document.getElementById(loaderId);
    element.style.opacity = "0%";
    button.style.backgroundColor = buttonBackground;
    bg.style.backgroundColor = backgroundColor;
    showLoader(loader);
    setTimeout(() => {
        element.style.backgroundImage = `url('${imageUrl}')`;
        hideLoader(loader);
        element.style.opacity = "100%";
    }, 2500);
}

function pink() {
    changeUmbrellaColor("umbrella-image", "buttons", "imageLoader", "./Pinkumbrella.png", "var(--pink)","var(--pink-super-light)");
    document.getElementById("pink").classList.add("active");
    document.getElementById("blue").classList.remove("active");
    document.getElementById("yellow").classList.remove("active");
}

function blue() {
    changeUmbrellaColor("umbrella-image", "buttons", "imageLoader", "./Blueumbrella.png", "var(--blue)","var(--blue-super-light)");
    document.getElementById("pink").classList.remove("active");
    document.getElementById("blue").classList.add("active");
    document.getElementById("yellow").classList.remove("active");
}

function yellow() {
    changeUmbrellaColor("umbrella-image", "buttons", "imageLoader", "./Yelloumbrella.png", "var(--yellow)","var(--yellow-super-light)");
    document.getElementById("pink").classList.remove("active");
    document.getElementById("blue").classList.remove("active");
    document.getElementById("yellow").classList.add("active");
}


// handle file submit
document.getElementById('fileInput').addEventListener('change', function(event) {
    const file = event.target.files[0];
    const cancelButton = document.getElementById('cancelButton');
    const buttonLoader = document.getElementById('buttonLoader');
    const logo = document.getElementById('logo');
    const fileNameDisplay = document.getElementById('fileNameDisplay'); // Add this line

    if (file && (file.type === 'image/png' || file.type === 'image/jpeg') && file.size <= 5 * 1024 * 1024) {
        const reader = new FileReader();
        reader.onload = function(e) {
            logo.style.backgroundImage = `url(${e.target.result})`;
            cancelButton.style.display = 'flex';
            hideLoader(buttonLoader);
            // Display the file name
            const slicedFileName = file.name.split('').slice(0, 6).join(' ');
            fileNameDisplay.textContent = slicedFileName.length < file.name.length ? slicedFileName + '...' : slicedFileName;
        }
        showLoader(buttonLoader);
        reader.readAsDataURL(file);
    } else {
        alert('Check file type or file size.');
    }
});
function removeLogo() {
    document.getElementById('logo').style.backgroundImage = '';
    document.getElementById('cancelButton').style.display = 'none';
    document.getElementById('fileNameDisplay').textContent = 'Upload Logo';
}