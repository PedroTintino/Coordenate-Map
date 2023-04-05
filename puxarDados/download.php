<?php
if (isset($_GET['file'])) {
  $json_data = $_GET['file'];
  header('Content-Type: application/json');
  header('Content-Disposition: attachment; filename="data.json"');
  echo $json_data;
} else {
  echo "Erro ao fazer download do arquivo.";
}
?>
