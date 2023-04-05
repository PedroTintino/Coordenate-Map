<?php

function csv_to_json($csv_file_path) {
  // Abre o arquivo CSV e lê seus dados
  if (($handle = fopen($csv_file_path, "r")) !== false) {
    $header = null;
    $data = array();
    while (($row = fgetcsv($handle, 1000, ",")) !== false) {
      if (!$header) {
        $header = $row;
      } else {
        $data[] = array_combine($header, $row);
      }
    }
    fclose($handle);
    // Converte os dados em JSON
    $json_data = json_encode($data);
    // Retorna os dados JSON
    return $json_data;
  } else {
    return false;
  }
}

if (isset($_POST['submit'])) {
  // Obtém o arquivo CSV enviado pelo formulário
  $csv_file = $_FILES['csv_file']['tmp_name'];
  // Converte o arquivo CSV em JSON
  $json_data = csv_to_json($csv_file);
  if ($json_data) {
    // Exibe os dados JSON
    echo "<pre>" . $json_data . "</pre>";
  } else {
    echo "Erro ao ler arquivo CSV.";
  }
}

?>

<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>Converter CSV para JSON</title>
  </head>
  <body>
    <h1>Converter CSV para JSON</h1>
    <form action="<?php echo $_SERVER['PHP_SELF']; ?>" method="post" enctype="multipart/form-data">
      <label for="csv_file">Selecione um arquivo CSV:</label><br>
      <input type="file" name="csv_file" id="csv_file"><br>
      <br>
      <input type="submit" name="submit" value="Converter">
    </form>
    <?php if (isset($json_data)): ?>
  <br>
  <a href="download.php?file=<?php echo urlencode($json_data); ?>">Download JSON</a>
<?php endif; ?>

  </body>
</html>
