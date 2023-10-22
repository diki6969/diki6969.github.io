const video = document.getElementById("video");
const captureButton = document.getElementById("capture-button");
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// Mengakses kamera depan pengguna
navigator.mediaDevices
    .getUserMedia({ video: { facingMode: "user" } })
    .then(stream => {
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    })
    .catch(error => {
        console.error("Error accessing the camera: ", error);
    });

// Mengambil gambar dari kamera dan menampilkannya di canvas
captureButton.addEventListener("click", () => {
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    canvas.style.display = "block";
    video.style.display = "none";
    captureButton.style.display = "none";
});

// Optional: Simpan gambar ke file jika diperlukan
// canvas.toBlob((blob) => {
//     const url = URL.createObjectURL(blob);
//     const a = document.createElement('a');
//     a.href = url;
//     a.download = 'gambar-kamera.jpg';
//     a.click();
//     URL.revokeObjectURL(url);
// });
