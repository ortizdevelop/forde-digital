<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = $_POST["name"];
  $email = $_POST["email"];
  $text = $_POST["text"];
  $checkbox = $_POST["checkbox"];

  $to = "info@forgedigital.ru, contact@forgedigital.ru";
  $subject = "Новое сообщение с сайта";
  $message = "Имя: " . $name . "\n\n" . "Email: " . $email . "\n\n" . "Сообщение: " . $text . "\n\n" . "Согласие на обработку персональных данных: " . $checkbox;

  $headers = "From: no-reply@forgedigital.ru\r\n";
  $headers .= "Reply-To: no-reply@forgedigital.ru\r\n";
  $headers .= "Content-type: text/plain; charset=UTF-8\r\n";

  if (mail($to, $subject, $message, $headers)) {
    $response_array['success'] = true;
    echo json_encode($response_array);
  } else {
    $response_array['error'] = 'Ошибка отправки сообщения';
    echo json_encode($response_array);
  }
}
?>