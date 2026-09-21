# Systemarchitektur <!-- .element class="hidden" -->

![Cluster-Übersicht](images/cluster.svg)

<!-- Note -->
Das benötigst du, um eine Open edX-Plattform zu betreiben:

* Ein Datenbank-Backend mit MySQL und MongoDB
* Eine serverseitige Django-App, die den Großteil ihrer Funktionalität über das Django REST Framework (DRF) bereitstellt
* Eine Reihe von statischen Microfrontends (MFEs), die größtenteils auf react.js basieren
* Ein Frontend-Load-Balancer (Caddy), der auch HTTPS-Terminierung und ACME-Zertifikatsverwaltung durchführt
* Einen Kubernetes-Cluster zur Orchestrierung von allem


## Tutor <!-- .element class="hidden" -->

![Tutor-Logo](images/tutor-logo.svg)

<!-- Note -->
Die empfohlene und von der Community unterstützte Methode zur Bereitstellung von Open edX ist ein Container-Orchestrator namens **Tutor**.

Tutor kann sowohl Single-Node-Konfigurationen mit lokalem Docker (oder zumindest prinzipiell Podman) verwalten, oder es kann mit einem Kubernetes-Cluster kommunizieren und einen Produktions-Cluster auf diese Weise verwalten.

Im Kubernetes-Orchestrierungsmodus (mit dem `tutor k8s`-Befehl) generiert es Kubernetes-Manifests mit Kustomization, anstatt Helm-Charts zu verwenden.
(Das ist eine gute Sache™.)

Tutor — der auch die Automatisierung von Container-Image-Anpassungen enthält — kann sehr gut aus einer CI-Pipeline gesteuert werden.
Er funktioniert auch gut mit lokalen Container-Registries, falls die Notwendigkeit besteht, Open edX in einem air-gapped Modus in einem internen Netzwerk bereitzustellen.

Es gab verschiedene Vorschläge für andere Methoden zur Bereitstellung von containerisiertem Open edX von mehreren Akteuren in der Open edX-Community.
Meiner bescheidenen Meinung nach sind sie alle *anders* als Tutor, jedoch nicht *besser.*


## Tutor-Plugins

<!-- Note -->
Genau wie Open edX mit seinen XBlocks ist Tutor modular und erweiterbar durch Third-Party-*Plugins*.

Auf diese Weise können Open edX-Seitenbetreiber Tutor verwenden, um Dinge wie Backups, externe Speichintegration und vieles mehr zu automatisieren.

Wie Open edX ist Tutor unter der AGPL lizenziert, und dies erstreckt sich auch auf Tutor-Plugins.
Mit anderen Worten, Tutor-Plugin-Entwicklung nutzt im Allgemeinen die gesamte Open edX-Community, nicht nur die Plugin-Entwickler:innen.
