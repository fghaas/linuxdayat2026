# Open edX <!-- .element class="hidden" -->

![Open edX Logo](images/open-edx-logo.svg)

<!-- Note -->
Und genau hier kommt Open edX ins Spiel!

Open edX ist eine kostenlose und offene Lernplattform, die es seit mehr als einem Jahrzehnt gibt, eine lebendige globale Community hat und eine massive Nutzerbasis besitzt.


## MIT, Harvard, Stanford, edX <!-- .element class="hidden" -->

![MIT-Siegel](images/mit.svg)

<!-- Note -->
> Bildquelle: https://en.wikipedia.org/wiki/File:MIT_Seal.svg

Die Wurzeln von dem, was heute Open edX ist, liegen beim [Massachusetts Institute of Technology (MIT)](https://mit.edu), in einem Programm, das Ende 2011 als [MITx](https://mitxonline.mit.edu/) gestartet wurde.


## Harvard <!-- .element class="hidden" -->

![Harvard University Wappen](images/harvard.svg)

<!-- Note -->
> Bildquelle: https://commons.wikimedia.org/wiki/File:Harvard_University_coat_of_arms.svg

MIT ging 2012 im Mai zuerst eine Partnerschaft mit seinen Freund:innen flussabwärts ein ([Harvard University](https://www.harvard.edu/)),


## Stanford <!-- .element class="hidden" -->

![Stanford University Siegel](images/stanford.svg)

<!-- Note -->
> Bildquelle: https://commons.wikimedia.org/wiki/File:Seal_of_Leland_Stanford_Junior_University.svg

... und 2013 im April mit seinen Freund:innen im ganzen Land ([Stanford University](https://www.stanford.edu)) ...


## edX <!-- .element class="hidden" -->

![Originales edX-Logo (aus 2013)](images/edx-original-logo.svg)

<!-- Note -->
> Bildquelle: https://commons.wikimedia.org/wiki/File:EdX.svg

... zu einem Konsortium namens [edX](https://www.edx.org/), in einer offensichtlichen Erweiterung des "MITx"-Themas.

Dieses Konsortium erweiterte sich schnell außerhalb des Bereichs der Hochschulbildung, in dem es entstanden war, hin zur beruflichen Bildung in der Industrie.
(Ein damals untypischer früher Adopter und Unterstützer von Open edX war Microsoft.)

Und im Juni 2013 gab das Konsortium seinen gesamten Software-Stack unter einer Copyleft-Lizenz frei — und wurde damit ...


## Open edX <!-- .element class="hidden" -->

![Open edX Logo](images/open-edx-logo.svg)

<!-- Note -->
... Open edX im eigentlichen Sinne.

Wenn ich sage "gab seinen gesamten Software-Stack frei", dann meine ich nicht nur das LMS selbst, sondern *alles*, was damit zusammenhängt.
Dies umfasst vor allem alle Bereitstellungsautomatisierung — was für eine komplexe Plattform wie diese von entscheidender Bedeutung ist.

(Nebenanmerkung: Was aus dem edX-Konsortium und seiner Beziehung zu Open edX geworden ist, ist ein interessantes Thema, auf das ich hier nicht eingehen werde.
Wir lassen es einfach dabei bewenden, dass die Open edX Codebasis *immer noch* von einer gemeinnützigen Organisation besessen wird, die einige Zyklen des Umbenennens und Neustrukturierungs durchlaufen hat und jetzt *Axim Collaborative* heißt, mit ihrer Website unter [www.axim.org](https://www.axim.org).)


## Python <!-- .element class="hidden" -->

![Python-Logo](images/python.svg)

![Django-Logo](images/django.svg) <!-- .element class="fragment" -->

<!-- Note -->
Und von Anfang an war dieser Stack stark Python-zentriert.

Das ursprüngliche Open edX war im Wesentlichen eine sehr klassische, monolithische Django Model-View-Controller (MVC) Webplattform.
Die Bereitstellungsautomatisierung wurde mit Ansible abgedeckt, was den Stack aus dieser Perspektive sogar noch stärker Python-zentriert machte.

Seitdem hat er sich etwas weiterentwickelt zu einem moderneren Stack, der viel schwere Arbeit mit dem [Django REST Framework](https://www.django-rest-framework.org/) und JavaScript-lastigen Frontends leistet.
Auch die Bereitstellung hat sich hin zu Containerisierung verschoben, wobei die Plattform jetzt als Array von [Kubernetes](https://kubernetes.io/)-Pods verwaltet wird.

Diese gesamte Entwicklung ist eine völlig separate Geschichte, über die ich einen ganzen Vortrag füllen könnte, aber darauf werde ich heute nicht eingehen. Es stellt sich jedoch heraus, dass ich **bereits** einen ganzen Vortrag zu diesem Thema gehalten habe — auf der PyCon Italia — und wenn du interessiert bist, hier ist der YouTube-Link dafür:


## Quit Simplifying!

(PyCon Italia 2024)

![Quit Simplifying!](images/quit-simplifying.svg)

<https://youtu.be/KlE-VyUYLts>


## AGPL

<!-- Note -->
Aber es gibt noch etwas anderes, das ich im Vergleich zu der anderen LMS, die ich in der Einleitung erwähnt habe — also Moodle — für signifikant halte:

* Moodle ist eine *GNU General Public License version 3* ([GPLv3](https://www.gnu.org/licenses/gpl-3.0.html)) Codebasis.
* Open edX ist eine *GNU Affero General Public License version 3* ([AGPLv3](https://www.gnu.org/licenses/agpl-3.0.html)) Codebasis.

Und das halte ich für ziemlich signifikant für einen Stack, der sich natürlich fürs Hosten und Bereitstellen eines Dienstes anbietet:
Wie du sicher weißt, wenn du *nur eine Plattform* betreibst, die GPL-Code ausführt, kannst du den Code nach Belieben patchen und musst deine Änderungen niemals mit jemandem teilen.
Das liegt daran, dass du deine Software nicht *verbreitest*, und genau die Verbreitung ist der Punkt, an dem die Code-Teiling-Pflichten der GPL greifen.

Die AGPL, insbesondere ihr [Abschnitt 13](https://www.gnu.org/licenses/agpl-3.0.html#section13), verpflichtet dich zusätzlich, deine Änderungen mit Nutzer:innen zu teilen, die "remotisch über ein Computernetzwerk damit interagieren".
Also: Wenn du Open edX hostest, musst du alle Änderungen, die du vornimmst, teilen.

... was in der Realität natürlich dazu führt, dass *jede*r nach upstream beiträgt.
