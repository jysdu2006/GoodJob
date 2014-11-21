<?php

echo "string";
error_reporting(0);
 
  if($_GET["name"]=="kitty")
{
     
    $name= "you are the lucky";
}
else
$name=$_GET["name"];
$age=$_GET["age"];
echo "<div>   ".$name."   ".$age."</div>";

?>