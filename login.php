<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST['username'];
    $password = $_POST['password'];

    // Kullan�c� ad� ve �ifre do�rulama
    if (filter_var($username, FILTER_VALIDATE_EMAIL) && strpos($username, '@sakarya.edu.tr') !== false) {
        $student_id = explode('@', $username)[0];
        if ($password === $student_id) {
            // Giri� ba�ar�l�
            echo "Hoşgeldiniz, " . htmlspecialchars($student_id) . "!";
        } else {
            // Giri� ba�ar�s�z, login sayfas�na y�nlendir
            header("Location: login.html");
            exit();
        }
    } else {
        // Giri� ba�ar�s�z, login sayfas�na y�nlendir
        header("Location: login.html");
        exit();
    }
} else {
    header("Location: login.html");
    exit();
}

