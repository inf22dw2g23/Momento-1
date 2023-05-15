CREATE TABLE Partidas (
  id INT PRIMARY KEY AUTO_INCREMENT,
  nome VARCHAR(255) NOT NULL,
  jogador_id INT,
  FOREIGN KEY (jogador_id) REFERENCES Jogadores(id)
);
