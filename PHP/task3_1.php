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
        <tr><td colspan="2">Угол</td><td rowspan="2"> Синус</td></tr>
        <tr><td>В градусах</td><td> В радианах</td></tr>

        <?php
        define("pi",3.14159);
        for ($i = 0; $i <= 90; $i+=5) {
            $rad=(pi*$i)/180;
            echo "<tr><td>$i</td><td>";
            printf ("%5.3f",$rad);
            echo "</td><td>";
            printf ("%5.3f",sin($rad));
            echo "</td></tr>";
        }
        ?>
    </table>
</div>
</body>
</html>