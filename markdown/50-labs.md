# Cloud Labs

<!-- Note -->

Open edX ist sehr gut geeignet, um praticamente jede Art von Informationstechnologie beizubringen, indem interaktive Labs integriert werden.

Die Art und Weise, wie wir das machen, ist mit OpenStack, wo wir beliebig komplexe Lab-Farmen für Lernende bereitstellen.


## Interaktion mit OpenStack <!-- .element class="hidden" -->

![Interaktion mit OpenStack (via Celery und Heat)](images/celery-heat-openstack.svg)

<!-- Note -->

Hier definieren wir eine beliebig komplexe, in sich geschlossene Umgebung mittels einer OpenStack Heat-Vorlage.

Wir können virtuelle Netzwerke, Server, Volumes, Router,... alles Mögliche definieren.

Wir verwenden dann asynchrone Aufgabenverarbeitung via Celery, um einen solchen Stack hochzufahren, und lassen die Lernenden über Apache Guacamole direkt aus ihrem Browser heraus darauf zugreifen.


## Get Interactive!

(DjangoCon US 2021)

![Get interactive! Putting a shell or a desktop in your Django app](images/get-interactive.svg)

<https://youtu.be/kbrHW--ZLUc>

<!-- Note -->
Wie das im Detail funktioniert, haben meine Kolleg:innen und ich in mehreren Konferenzvorträgen behandelt; <https://youtu.be/kbrHW--ZLUc> (von DjangoCon US 2021) ist einer davon.
