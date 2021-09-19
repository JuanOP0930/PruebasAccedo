<?php
    session_start();

    require "DB.php";

    if(isset($_SESSION["usuarios_id"])){
        $records = $conn->prepare("SELECT id, name, email, password FROM usuarios WHERE id=:id");
        $records->bindParam(":id", $_SESSION["usuarios_id"]);
        $records->execute();
        $results = $records->fetch(PDO::FETCH_ASSOC);

        $user = null;

        if(!empty($results) && count($results) > 0){
            $user = $results;
        }
    }
?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../css/indexStyles.css">
    <title>Welcome</title>
</head>
<body>
    
    <?php if(!empty($user)): ?>
        <div class="container">
            <div class="container__welcome">
                <h3>Welcome <?= $user["name"];?></h3>
                <p>You are already loged</p>
                <p>you can see the Pokedex here: <a href="Pokedex.php">Pokedex</a></p>
            </div>
            <div class="container__footer">
                <p>Made By <a href="http://portafoliojuanobando.000webhostapp.com/html/index.html">Juan Jose Obando P.</a></p>
            </div>
        </div>
    <?php else : ?>
        <div class="container">
            <div class="container__welcome">
                <h3>Welcome to Pokedex</h3>
                <p>Do you have account?, <a href="logIn.php">Login</a></p>
                <p>or SignUp <a href="SignUp.php">SignUp</a></p>
            </div>
            <div class="container__footer">
                <p>Made By <a href="http://portafoliojuanobando.000webhostapp.com/html/index.html">Juan Jose Obando P.</a></p>
            </div>
        </div>
    <?php endif; ?>
</body>
</html>