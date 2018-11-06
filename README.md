# LOG3000 : Labo 5

## Objectifs

L'objectif de ce labo est de mettre en place un déploiement blue-green avec docker et ansible.

## Utilisation

Il faut tout d'abord créer un réseau docker auquel vont se connecter dans un premier temps le conteneur ansible, puis tous les autres conteneurs de l'application déployée. Nous avons été obligé d'utiliser un réseau externe pour pouvoir séparer les docker-compose.yml du conteneur ansible et des autres conteneurs.
```
docker network create bluegreen_network
```

Ensuite dans le dossier blue-green, on peut construire et lancer le conteneur ansible
```
docker-compose build
docker-compose up -d
```

Pour exécuter le playbook ansible il faut maintenant faire la commande
```
docker exec -it bluegreen_ansible_1 ansible-playbook playbook.yml
```

Vous pourrez par la suite arrête le conteneur ansible en exécutant la commande depuis le dossier blue-green
```
docker-compose down
```

Vous pouvez aussi supprimer le réseau docker externe avec la commande
```
docker network remove bluegreen_network
```
