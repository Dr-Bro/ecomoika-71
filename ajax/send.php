<?
require_once($_SERVER['DOCUMENT_ROOT'] .'/ajax/swiftmailer-5.x/lib/swift_required.php');
// echo $_SERVER['DOCUMENT_ROOT'];
//mail("paportes@rambler.ru", "My Subject", "Line 1\nLine 2\nLine 3");
$name = $_POST['inputName'];
$phone = $_POST['inputPhone'];

$transport = Swift_SmtpTransport::newInstance('smtp.mail.ru', 465, 'ssl')
    ->setUsername('manipulyator.71@mail.ru')
    ->setPassword('qfg7ns4i16');

$mailer = Swift_Mailer::newInstance($transport);

$to = array('paportes@rambler.ru');

$from = 'manipulyator.71@mail.ru';
 


 $mailText='Name: test<br><br>Phone: 159753'; 
    
    $message = Swift_Message::newInstance('Вас приветствует компания JustSpace')
        ->setFrom('info@just-space.ru')
        ->setTo($to)
        ->setBody($mailText,'text/html','utf-8')
      	->attach(Swift_Attachment::fromPath("".$_SERVER['DOCUMENT_ROOT']."/include/email/Kommercheskoe_predlozhenie.pdf"));

    $mailer->send($message);
?>