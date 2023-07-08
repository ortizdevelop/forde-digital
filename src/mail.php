<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $mail = $_POST["mail"];
    $text = $_POST["text"];

    $to = "info@forgedigital.ru, OrtizDevelop@yandex.ru";
    $subject = "Запись на консультацию";
    $message = "Имя: $name\nПочта: $mail\nТекст из формы: $text";
    $headers = "From: no-reply@forgedigital.ru\r\n" .
               "Reply-To: no-reply@forgedigital.ru\r\n" .
               "X-Mailer: PHP/" . phpversion();

    if (mail($to, $subject, $message, $headers)) {
        $response = array("success" => true);
    } else {
        $response = array("error" => "Error sending email.");
    }

    echo json_encode($response);
}
?>