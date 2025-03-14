const express = require('express');  // Import Express
const app = express();  // Tạo ứng dụng Express
const port = process.env.PORT || 3000;  // Chạy trên cổng được cung cấp bởi môi trường hoặc 3000

app.use(express.json());  // Middleware để đọc dữ liệu JSON

// Route mặc định
app.get('/', (req, res) => {
    res.send('Hello, welcome to my API!');
});

// API giả lập dữ liệu nhịp tim, nhiệt độ, mồ hôi
app.get('/sensor-data', (req, res) => {
    const sensorData = {
        heartRate: Math.floor(Math.random() * (100 - 60) + 60), // Giả lập nhịp tim (60-100 bpm)
        temperature: (Math.random() * (37.5 - 36) + 36).toFixed(2), // Giả lập nhiệt độ (36-37.5°C)
        sweatLevel: Math.floor(Math.random() * 100) // Giả lập mức độ mồ hôi (0-100)
    };
    res.json(sensorData);
});

// Khởi động server và lắng nghe trên tất cả các interface (0.0.0.0)
app.listen(port, '0.0.0.0', () => {
    console.log(`Server is running at http://localhost:${port}`);
});
