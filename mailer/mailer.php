<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

//Load Composer's autoloader
require 'vendor/autoload.php';
    if(isset($_POST['name']) && $_POST['name'] != '' && isset($_POST['mail']) && $_POST['mail']!='' && isset($_POST['tel']) && $_POST['tel']!='' && isset($_POST['text']) && $_POST['text']!='' )
    {
        check();
        sendmail();
    }
    else {
       print_r($_POST);
    }
    function check()
    {

    }
    function sendmail()
    {
        $mail = new PHPMailer(true);                              // Passing `true` enables exceptions
        try {
            //Server settings
           // $mail->SMTPDebug = 2;
           // Enable verbose debug output
            $mail->isSMTP();                                      // Set mailer to use SMTP
            $mail->Host = 'smtp.yandex.ru';  // Specify main and backup SMTP servers
            $mail->SMTPAuth = true;                               // Enable SMTP authentication
            $mail->Username = '';                 // SMTP username
            $mail->Password = '';                           // SMTP password
            $mail->SMTPSecure = 'tls';                            // Enable TLS encryption, `ssl` also accepted
            $mail->Port = 25;                                    // TCP port to connect to

            //Recipients
            $mail->setFrom('nekweber@yandex.ru', 'Mailer');
            $mail->addAddress('nekweber@gmail.com', 'Nikita .');     // Add a recipient
            $mail->addReplyTo('no-reply@nek-web.ru ', 'noreply');
            //$mail->addCC('cc@example.com');
            //$mail->addBCC('bcc@example.com');

            //Attachments
          //  $mail->addAttachment('/var/tmp/file.tar.gz');
          //  $mail->addAttachment('/tmp/image.jpg', 'new.jpg');

            //Content
            $mail->isHTML(true);                                  // Set email format to HTML
            $mail->Subject = 'New Message';
            $mail->Body    = "Name: ".$_POST['name'].", Tel: ".$_POST['tel'].", Mail: ".$_POST['mail'].", Text: ".$_POST['text'];
            $mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

            $mail->send();
            echo 'Message has been sent';
        } catch (Exception $e) {
            echo $e;
        }
    }
