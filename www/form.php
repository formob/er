<?php
if($_POST)
    {
    $to  = "slonru37@gmail.com" . ", " ;
    $to .= "t.vakhturova@abbyy-ls.com" . ", " ;
    $to .= "i.aronova@abbyy-ls.com";
    $from = 'admin@abbyy-ls.ru'; // от кого
    $subject = "Проверка почты"; //тема
    $message = 'Имя: '.$_POST['email'].';';
    $headers = "Content-type: text/plain; charset=utf-8 \r\n";
    $headers .= "From: <почта@mail.ru>\r\n";
    $result = mail($to, $subject, $message, $headers);
 
    if ($result){
        echo "<p>Cообщение успешно отправленно. Пожалуйста, оставайтесь на связи</p>";
    }
    }
?>