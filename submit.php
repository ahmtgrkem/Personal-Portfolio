<!DOCTYPE html>
<html lang="tr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Website</title>
    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">
    <!-- Custom CSS -->
    <link rel="stylesheet" href="styles/style.css">
</head>
<body>
    <div class="container mt-5">
        <h2 class="mb-4">Gönderilen Form Bilgileri</h2>
        <div class="row">
            <div class="col-md-6">
                <p><strong>Adınız:</strong> <?php echo $_POST['name']; ?></p>
                <p><strong>E-posta Adresiniz:</strong> <?php echo $_POST['email']; ?></p>
                <p><strong>Konu:</strong> <?php echo $_POST['subject']; ?></p>
                <p><strong>Mesajınız:</strong> <?php echo $_POST['message']; ?></p>
            </div>
        </div>
    </div>
</body>
</html>
