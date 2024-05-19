<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST['username'];
    $password = $_POST['password'];

    // Kullanýcý adý ve þifre doðrulama
    if (filter_var($username, FILTER_VALIDATE_EMAIL) && strpos($username, '@sakarya.edu.tr') !== false) {
        $student_id = explode('@', $username)[0];
        if ($password === $student_id) {
            // Giriþ baþarýlý
            echo "Hoþgeldiniz, " . htmlspecialchars($student_id) . "!";
        } else {
            // Giriþ baþarýsýz, login sayfasýna yönlendir
            header("Location: login.html");
            exit();
        }
    } else {
        // Giriþ baþarýsýz, login sayfasýna yönlendir
        header("Location: login.html");
        exit();
    }
} else {
    header("Location: login.html");
    exit();
}

