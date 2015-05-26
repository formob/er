<?php
if($_POST)
    {
    $to .= "slonru37@gmail.com";
    $from = 'admin@abbyy-ls.ru'; // от кого
    $subject = "Проверка почты"; //тема
    $message = 'e-mail: '.$_POST['email3'].';''Имя: '.$_POST['name3'].';''Телефон: '.$_POST['phone3'].';';
    $headers = "Content-type: text/plain; charset=utf-8 \r\n";
    $headers .= "From: <почта@mail.ru>\r\n";
    $result = mail($to, $subject, $message, $headers);
 
    if ($result){
        echo "<p>Cообщение успешно отправленно. Пожалуйста, оставайтесь на связи</p>";
    }
    }
?>