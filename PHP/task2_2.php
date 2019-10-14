<?php
$inputSeconds=$_GET['sec'];
if(is_numeric($inputSeconds)){
$secondsInAMinute = 60;
$secondsInAnHour  = 60 * $secondsInAMinute;
$secondsInADay    = 24 * $secondsInAnHour;

// extract days
$days = floor($inputSeconds / $secondsInADay);

// extract hours
$hourSeconds = $inputSeconds % $secondsInADay;
$hours = floor($hourSeconds / $secondsInAnHour);

// extract minutes
$minuteSeconds = $hourSeconds % $secondsInAnHour;
$minutes = floor($minuteSeconds / $secondsInAMinute);

// extract the remaining seconds
$remainingSeconds = $minuteSeconds % $secondsInAMinute;
$seconds = ceil($remainingSeconds);}
else{
    $days="Ошибка, должно было быть введено число";
}
?>
<!doctype html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
<div style="text-align: center;border: 1px solid; padding-bottom: 10px;">
    <h2>Перевод периода</h2>
    <p>Длинна периода в секундах: <?php echo ($inputSeconds); ?></p>
    <p>Дней: <?php echo ($days); ?></p>
    <p>Часов: <?php echo ($hours); ?></p>
    <p>Минут: <?php echo ($minutes); ?></p>
    <p>Секунд: <?php echo ($seconds); ?></p>
<a href="task2_1.html"><button value="Back">Back</button> </a>
</div>
</body>
</html>
