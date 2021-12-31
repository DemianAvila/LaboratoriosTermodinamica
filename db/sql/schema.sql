

CREATE DATABASE IF NOT EXISTS laboratorio_termodinamica;

USE laboratorio_termodinamica;

CREATE TABLE IF NOT EXISTS usuarios (
  numero_cuenta VARCHAR(30) NOT NULL,
  apellido_paterno VARCHAR(100) NOT NULL,
  apellido_materno VARCHAR(100) NOT NULL,
  nombre_s VARCHAR(100) NOT NULL,
  contrasena CHAR (64) NOT NULL,
  rango INT NOT NULL,
  fch_registro DATETIME DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (numero_cuenta)
);

CREATE TABLE IF NOT EXISTS practicas (
  id INT NOT NULL AUTO_INCREMENT,
  nombre VARCHAR(200) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS semestres (
  semestre VARCHAR(100) NOT NULL ,
  PRIMARY KEY (semestre)
);

CREATE TABLE IF NOT EXISTS recursos_remotos (
  id  INT NOT NULL AUTO_INCREMENT,
  url VARCHAR(2048) NOT NULL,
  nombre VARCHAR(100) NOT NULL ,
  PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS tipos_recurso (
  id  INT NOT NULL AUTO_INCREMENT,
  nombre VARCHAR(100) NOT NULL ,
  PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS practicas_calificacion (
  usuario_id VARCHAR(30) NOT NULL,
  practica_id INT NOT NULL,
  semestre_id VARCHAR(100) NOT NULL,
  calificacion INT NOT NULL,
  inicio DATETIME NOT NULL,
  final DATETIME NOT NULL,
  CONSTRAINT fk_practicas_calificacion_usuarios 
    FOREIGN KEY (usuario_id) 
    REFERENCES usuarios(numero_cuenta)
    ON DELETE CASCADE
    ON UPDATE RESTRICT,
  CONSTRAINT fk_practicas_calificacion_practicas 
    FOREIGN KEY (practica_id) 
    REFERENCES practicas(id)
    ON DELETE CASCADE
    ON UPDATE RESTRICT,
  CONSTRAINT fk_practicas_calificacion_semestres 
    FOREIGN KEY (semestre_id) 
    REFERENCES semestres(semestre)
    ON DELETE CASCADE
    ON UPDATE RESTRICT
);

CREATE TABLE IF NOT EXISTS practicas_recursos (
  practica_id INT NOT NULL,
  recurso_id INT NOT NULL,
  tipo_id INT NOT NULL,


  CONSTRAINT fk_practicas_recursos_practicas
    FOREIGN KEY (practica_id) 
    REFERENCES practicas(id)
    ON DELETE CASCADE
    ON UPDATE RESTRICT,
  CONSTRAINT fk_practicas_recursos_recursos
    FOREIGN KEY (recurso_id) 
    REFERENCES recursos_remotos(id)
    ON DELETE CASCADE
    ON UPDATE RESTRICT,
  CONSTRAINT fk_practicas_recursos_tipos
    FOREIGN KEY (tipo_id) 
    REFERENCES tipos_recurso(id)
    ON DELETE CASCADE
    ON UPDATE RESTRICT
);

