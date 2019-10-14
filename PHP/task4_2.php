<?php
$begin=$_GET['beg'];
if(!is_numeric($begin)){$begin=0;}
$end=$_GET['end'];
if(!is_numeric($end)){$end=0;}
$tick=$_GET['tick'];
if(!is_numeric($tick)){$tick=0;}

?>
<style type="text/css">
    table {
        border-collapse: collapse;
    }
    table th,
    table td {
        padding: 0 5px;
        border: 1px solid #000;
        text-align: center;
    }
</style>

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
    <h2>Таблица синусов</h2>
    <table align="center" style="border: 1px solid;">
        <tr><td>X</td><td> X<sup>2</sup></td></tr>
        <?php
        for ($i = $begin; $i <= $end; $i+=$tick) {
            echo "<tr><td>$i</td><td>$i*$i</td><tr>";
        }
        ?>
    </table>
</div>
</body>
</html>