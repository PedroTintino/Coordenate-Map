<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "mapBanc";

// cria conexão com o banco de dados
$conn = new mysqli($servername, $username, $password, $dbname);

// verifica se a conexão ocorreu com sucesso
if ($conn->connect_error) {
  die("Conexão falhou: " . $conn->connect_error);
}

// verifica se o formulário de cadastro foi enviado
if (isset($_POST["registrar"])) {
  // obtém os dados do formulário de registro
  $email = $_POST["email"];
  $senha = $_POST["senha"];

  // verifica se o e-mail já está registrado
  $sql = "SELECT * FROM LoginCredentials WHERE email='$email'";
  $result = $conn->query($sql);

  if ($result->num_rows > 0) {
    echo "Este e-mail já está registrado.";
  } else {
    // insere os dados no banco de dados
    $sql = "INSERT INTO LoginCredentials (email, senha) VALUES ('$email', '$senha')";

    if ($conn->query($sql) === TRUE) {
      echo "Cadastro realizado com sucesso.";
    } else {
      echo "Erro ao inserir os dados: " . $conn->error;
    }
  }
} elseif (isset($_POST["entrar"])) {
  // obtém os dados do formulário de login
  $email = $_POST["email"];
  $senha = $_POST["senha"];

  // verifica se as credenciais são válidas
  $sql = "SELECT * FROM LoginCredentials WHERE email='$email' AND senha='$senha'";
  $result = $conn->query($sql);

  if ($result->num_rows > 0) {
    $usuario = $result->fetch_assoc();

    $email = $usuario['email'];
    $nome = $usuario['nome'];

    $_SESSION['email'] = $email; // Inicia a sessão do usuário com o e-mail fornecido
    $_SESSION['nome'] = $nome; // Inicia a sessão do usuário com o e-mail fornecido

    echo "<script>alert('Login realizado com sucesso.');</script>";
    header("Location: index.html");
  } else {
    echo "<script>alert('E-mail ou senha incorretos.');</script>";
  }
}

// fecha a conexão com o banco de dados
$conn->close();
?>


<!DOCTYPE html>
<html lang="pt-br">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="loginstyle.css">
  <title>Login Credentials</title>
</head>

<body>
  <section class="login-container">
    <h2>Digite suas credenciais</h2>
    <form method="post">
      <label for="login">Login: </label>
      <input type="email" name="email">
      <label for="senha">Chave de acesso:</label>
      <input type="password" name="senha">
      <button type="submit" name="entrar"><a href="index.html">Entrar</a></button>
      <!-- Se voce quiser fazer uma pagina para registrar so copiar o formulario e trocar a variavel name="entrar" do botão submit para name="registrar" -->
    </form>

  </section>

</body>

</html>