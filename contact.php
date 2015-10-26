<?php

define( "RECIPIENT_EMAIL", "your-mail@site.com" ); // Insert the email address you want the form sent to
define( "EMAIL_SUBJECT", "Site Name" ); // Insert the site name here, it will appear in the subject of your email

$success = false;

$name = isset( $_POST['name'] ) ? preg_replace( "/[^\.\-\' a-zA-Z0-9]/", "", $_POST['name'] ) : "";
$email = isset( $_POST['email'] ) ? preg_replace( "/[^\.\-\_\@a-zA-Z0-9]/", "", $_POST['email'] ) : "";
$message = isset( $_POST['message'] ) ? preg_replace( "/(From:|To:|BCC:|CC:|Subject:|Content-Type:)/", "", $_POST['message'] ) : "";

if ( $name && $email && $message ) {
    $recipient = "<" . RECIPIENT_EMAIL . ">";
    $headers = "From: " . $name . " <" . $email . ">";
    $success = mail( $recipient, EMAIL_SUBJECT, $message, $headers );
}

if ( isset($_GET["ajax"]) ) {
    echo $success ? "success" : "error";
} else {
    //add html for javascript off user
}
?>