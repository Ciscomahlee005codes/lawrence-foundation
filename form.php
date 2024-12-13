<?php
// Include Composer's autoloader to load PHPMailer
require 'vendor/autoload.php';

// Create a new PHPMailer instance
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

$mail = new PHPMailer(true); // Pass true to enable exceptions

try {
    // Enable SMTP debugging (2 = detailed debug output)
    $mail->SMTPDebug = 2; // Enable detailed debug output

    // Server settings
    $mail->isSMTP(); // Use SMTP
    $mail->Host = 'smtp.gmail.com'; // Set the SMTP server to Gmail
    $mail->SMTPAuth = true; // Enable SMTP authentication
    $mail->Username = 'ciscomahlee@gmail.com'; // Your Gmail email address
    $mail->Password = 'your-app-password'; // Use the app password if you have 2FA enabled
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS; // Use STARTTLS for port 587
    $mail->Port = 587; // Port 587 is for TLS

    // Recipients
    $mail->setFrom('ciscomahlee@gmail.com', 'Your Name'); // Sender's email
    $mail->addAddress('recipient@example.com', 'Recipient Name'); // Recipient's email address

    // Content
    $mail->isHTML(true); // Set email format to HTML
    $mail->Subject = 'New Message from Your Contact Form';
    $mail->Body    = 'This is the message body in HTML format. <b>Bold text!</b>';
    $mail->AltBody = 'This is the plain-text message body for non-HTML mail clients';

    // Send the email
    if ($mail->send()) {
        echo 'Message has been sent';
    } else {
        echo 'Message could not be sent. Mailer Error: ' . $mail->ErrorInfo;
    }

} catch (Exception $e) {
    echo 'Message could not be sent. Mailer Error: ' . $mail->ErrorInfo;
}
?>