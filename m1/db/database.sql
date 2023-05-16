CREATE schema 'plataforma_jogos';
USE 'plataforma_jogos';

CREATE TABLE 'users' (
  'id' INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  'email' VARCHAR(255) NOT NULL,
  'password' VARCHAR(255) NOT NULL
);


CREATE TABLE 'jogadores' (
  'id' INT AUTO_INCREMENT PRIMARY KEY,
  'nome' VARCHAR(50) NOT NULL,
  'email' VARCHAR(50) NOT NULL,
  'senha' VARCHAR(50) NOT NULL,
  'data_registro' TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE 'partidas' (
  'id' INT AUTO_INCREMENT PRIMARY KEY,
  'jogador1_id' INT NOT NULL,
  'jogador2_id' INT NOT NULL,
  'tabuleiro' VARCHAR(9) NOT NULL,
  'vencedor_id' INT,
  'data_criacao' TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY ('jogador1_id') REFERENCES 'jogadores'('id'),
  FOREIGN KEY ('jogador2_id') REFERENCES 'jogadores'('id'),
  FOREIGN KEY ('vencedor_id') REFERENCES 'jogadores'('id')
);

CREATE TABLE 'resultados' (
  'id' INT AUTO_INCREMENT PRIMARY KEY,
  'jogador_id' INT NOT NULL,
  'vitorias' INT DEFAULT 0,
  'derrotas' INT DEFAULT 0,
  'empates' INT DEFAULT 0,
  FOREIGN KEY ('jogador_id') REFERENCES 'jogadores'('id')
);


INSERT INTO 'users' ('id', 'name', 'email', 'password')
VALUES
    (1, 'João', 'joao@example.com', 'senha1'),
    (2, 'Maria', 'maria@example.com', 'senha2'),
    (3, 'Pedro', 'pedro@example.com', 'senha3'),
    (4, 'Ana', 'ana@example.com', 'senha4'),
    (5, 'Carlos', 'carlos@example.com', 'senha5'),
    (6, 'Mariana', 'mariana@example.com', 'senha6'),
    (7, 'José', 'jose@example.com', 'senha7'),
    (8, 'Laura', 'laura@example.com', 'senha8'),
    (9, 'Fernando', 'fernando@example.com', 'senha9'),
    (10, 'Patrícia', 'patricia@example.com', 'senha10'),
    (11, 'Ricardo', 'ricardo@example.com', 'senha11'),
    (12, 'Sofia', 'sofia@example.com', 'senha12'),
    (13, 'Gustavo', 'gustavo@example.com', 'senha13'),
    (14, 'Camila', 'camila@example.com', 'senha14'),
    (15, 'Paulo', 'paulo@example.com', 'senha15'),
    (16, 'Mariano', 'mariano@example.com', 'senha16'),
    (17, 'Isabela', 'isabela@example.com', 'senha17'),
    (18, 'Gabriel', 'gabriel@example.com', 'senha18'),
    (19, 'Eduarda', 'eduarda@example.com', 'senha19'),
    (20, 'Lucas', 'lucas@example.com', 'senha20'),
    (21, 'Raquel', 'raquel@example.com', 'senha21'),
    (22, 'Alexandre', 'alexandre@example.com', 'senha22'),
    (23, 'Carolina', 'carolina@example.com', 'senha23'),
    (24, 'Tiago', 'tiago@example.com', 'senha24'),
    (25, 'Vitória', 'vitoria@example.com', 'senha25'),
    (26, 'Marcelo', 'marcelo@example.com', 'senha26'),
    (27, 'Natália', 'natalia@example.com', 'senha27'),
    (28, 'André', 'andre@example.com', 'senha28'),
    (29, 'Renata', 'renata@example.com', 'senha29'),
    (30, 'Luis', 'luis@example.com', 'senha30');

INSERT INTO 'jogadores' ('id','nome', 'email', 'senha', 'data_registo')
VALUES
    (1, 'Carlos', 'carlos@example.com', 'senha31', '2023-05-01'),
    (2, 'Ana', 'ana@example.com', 'senha32', '2023-05-02'),
    (3, 'Mariana', 'mariana@example.com', 'senha33', '2023-05-03'),
    (4, 'José', 'jose@example.com', 'senha34', '2023-05-04'),
    (5, 'Laura', 'laura@example.com', 'senha35', '2023-05-05'),
    (6, 'Fernando', 'fernando@example.com', 'senha36', '2023-05-06'),
    (7, 'Patrícia', 'patricia@example.com', 'senha37', '2023-05-07'),
    (8, 'Ricardo', 'ricardo@example.com', 'senha38', '2023-05-08'),
    (9, 'Sofia', 'sofia@example.com', 'senha39', '2023-05-09'),
    (10, 'Gustavo', 'gustavo@example.com', 'senha40', '2023-05-10'),
    (11, 'Camila', 'camila@example.com', 'senha41', '2023-05-11'),
    (12, 'Paulo', 'paulo@example.com', 'senha42', '2023-05-12'),
    (13, 'Mariano', 'mariano@example.com', 'senha43', '2023-05-13'),
    (14, 'Isabela', 'isabela@example.com', 'senha44', '2023-05-14'),
    (15, 'Gabriel', 'gabriel@example.com', 'senha45', '2023-05-15'),
    (16, 'Eduarda', 'eduarda@example.com', 'senha46', '2023-05-16'),
    (17, 'Lucas', 'lucas@example.com', 'senha47', '2023-05-17'),
    (18, 'Raquel', 'raquel@example.com', 'senha48', '2023-05-18'),
    (19, 'Alexandre', 'alexandre@example.com', 'senha49', '2023-05-19'),
    (20, 'Carolina', 'carolina@example.com', 'senha50', '2023-05-20'),
    (21, 'Tiago', 'tiago@example.com', 'senha51', '2023-05-21'),
    (22, 'Vitória', 'vitoria@example.com', 'senha52', '2023-05-22'),
    (23, 'Marcelo', 'marcelo@example.com', 'senha53', '2023-05-23'),
    (24, 'Natália', 'natalia@example.com', 'senha54', '2023-05-24'),
    (25, 'André', 'andre@example.com', 'senha55', '2023-05-25'),
    (26, 'Renata', 'renata@example.com', 'senha56', '2023-05-26'),
    (27, 'Luis', 'luis@example.com', 'senha57', '2023-05-27'),
    (28, 'Alexandre', 'alexandre@example.com', 'senha55', '2017-04-22'),
    (29, 'Marco', 'marco@example.com', 'senha56', '2021-05-10'),
    (30, 'Dario', 'dario@example.com', 'senha57', '2001-01-29'); 

INSERT INTO 'resultados' ('id', 'jogador_id', 'vitorias', 'derrotas', 'empates')
VALUES
    (1, 1, 5, 2, 3),
    (2, 2, 3, 4, 1),
    (3, 3, 7, 1, 2),
    (4, 4, 2, 6, 2),
    (5, 5, 4, 3, 3),
    (6, 6, 6, 2, 1),
    (7, 7, 3, 4, 2),
    (8, 8, 4, 2, 4),
    (9, 9, 2, 5, 3),
    (10, 10, 5, 3, 2),
    (11, 11, 1, 6, 3),
    (12, 12, 7, 1, 2),
    (13, 13, 3, 4, 3),
    (14, 14, 2, 6, 2),
    (15, 15, 4, 3, 3),
    (16, 16, 6, 2, 2),
    (17, 17, 3, 4, 3),
    (18, 18, 4, 2, 4),
    (19, 19, 2, 5, 3),
    (20, 20, 5, 3, 2),
    (21, 21, 1, 6, 3),
    (22, 22, 7, 1, 2),
    (23, 23, 3, 4, 3),
    (24, 24, 2, 6, 2),
    (25, 25, 4, 3, 3),
    (26, 26, 6, 2, 2),
    (27, 27, 3, 4, 3),
    (28, 28, 4, 2, 4),
    (29, 29, 2, 5, 3),
    (30, 30, 5, 3, 2);


INSERT INTO 'partidas' ('jogador1_id', 'jogador2_id', 'tabuleiro', 'vencedor_id', 'data_criacao')
VALUES
    (1, 2, 'tabuleiro1', 1, CURRENT_TIMESTAMP),
    (3, 4, 'tabuleiro2', 4, CURRENT_TIMESTAMP),
    (5, 6, 'tabuleiro3', 5, CURRENT_TIMESTAMP),
    (7, 8, 'tabuleiro4', 7, CURRENT_TIMESTAMP),
    (9, 10, 'tabuleiro5', 10, CURRENT_TIMESTAMP),
    (11, 12, 'tabuleiro6', 12, CURRENT_TIMESTAMP),
    (13, 14, 'tabuleiro7', 13, CURRENT_TIMESTAMP),
    (15, 16, 'tabuleiro8', 15, CURRENT_TIMESTAMP),
    (17, 18, 'tabuleiro9', 17, CURRENT_TIMESTAMP),
    (19, 20, 'tabuleiro10', 19, CURRENT_TIMESTAMP),
    (21, 22, 'tabuleiro11', 21, CURRENT_TIMESTAMP),
    (23, 24, 'tabuleiro12', 23, CURRENT_TIMESTAMP),
    (25, 26, 'tabuleiro13', 25, CURRENT_TIMESTAMP),
    (27, 28, 'tabuleiro14', 27, CURRENT_TIMESTAMP),
    (29, 30, 'tabuleiro15', 29, CURRENT_TIMESTAMP),
    (1, 3, 'tabuleiro16', 1, CURRENT_TIMESTAMP),
    (2, 4, 'tabuleiro17', 2, CURRENT_TIMESTAMP),
    (5, 7, 'tabuleiro18', 5, CURRENT_TIMESTAMP),
    (6, 8, 'tabuleiro19', 6, CURRENT_TIMESTAMP),
    (9, 11, 'tabuleiro20', 11, CURRENT_TIMESTAMP),
    (10, 12, 'tabuleiro21', 10, CURRENT_TIMESTAMP),
    (13, 15, 'tabuleiro22', 15, CURRENT_TIMESTAMP),
    (14, 16, 'tabuleiro23', 16, CURRENT_TIMESTAMP),
    (17, 19, 'tabuleiro24', 17, CURRENT_TIMESTAMP),
    (18, 20, 'tabuleiro25', 20, CURRENT_TIMESTAMP),
    (21, 23, 'tabuleiro26', 21, CURRENT_TIMESTAMP),
    (22, 24, 'tabuleiro27', 24, CURRENT_TIMESTAMP),
    (25, 27, 'tabuleiro28', 25, CURRENT_TIMESTAMP),
    (26, 28, 'tabuleiro29', 26, CURRENT_TIMESTAMP),
    (29, 1, 'tabuleiro30', 29, CURRENT_TIMESTAMP);


GRANT ALL PRIVILEGES ON *.* TO 'root'@'%' IDENTIFIED BY '12345678'