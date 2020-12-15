# API

/!\ Written in french
/!\ Ce projet a été créer pour but de démonstration, il n'est pas sécurisé,
ne l'utilisé pas en production

## Description

C'est une API REST simple avec accès au méthode GET et POST sur une collection
de livre.

## Organisation

Pour une question d'organisation et de clareté les routes sont dans le dossier
associé et les modèles sont dans leur propre dossier. Ici il n'y a qu'une route
et qu'un modèle mais dans le cas où vous voudriez faire évoluer cette API vous
pouvez vous référer à cette organisation.

## Modules

Les modules utilisé ici sont simple :

* Express : Afin de rendre les informations sous formes d'API
* BodyParser : Afin de parse les info en JSON
* CORS : Pour gérér le CROSS-ORIGIN
* Mongoose : Pour la connection à la BDD MongoDB

## Index

Ici on définit notre APP, gère le parsing, les cors et on fait appel à nos
routers

## Routes

Ici on récupère le modèle qui nous convient et on définit les méthodes HTTP que
nous souhaitons donner (pour l'exemple GET et POST)

## Modèles

C'est ici que le lien entre la BDD et l'API est fait.
