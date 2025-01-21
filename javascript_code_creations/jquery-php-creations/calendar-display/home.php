

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>

        #topper {
            padding:5px;
            background-color: rgb(230,230,230);
            width:100%;
            height:10vh;
            text-align:center;
            font-size:25px;
        }
        table {
            width:80%;
            height:50vh;


        }
        th {
            width: calc(100%/7);
            height:15px;
        }
        table, th {
            border:1px solid black;
            padding:3px;
            text-align:center;
        }
        td {
            height:25px;
            border:0.1px solid black;
        }
        #center {
            width:100%;
            display:flex;
            justify-content:center;
        }
        #calendar {
            width:auto;
            
        }
    </style>
</head>
<body>
    <div id='topper'><a href='sign_out.php'>Sign Out</a> <?php session_start();?><div> Welcome, <?php session_start();if (isset($_SESSION['first'])) echo $_SESSION["first"]; ?> </div></div>
    
    <div id="center">
        <form>
        <select id='month'>


        </select>

    </form>
    <div id="calendar">
        




    </div>
    </div>
    
    
    
    <script src="../jquery.js"></script>
    <script src="home.js"></script>
</body>
</html>