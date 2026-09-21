# Was enthält ein Open edX-Kurs?

Kurze Antwort: fast alles. <!-- .element class="fragment" -->

<!-- Note -->
Sprechen wir also darüber, was du als Lernende:r typischerweise in einem Open edX-Kurs finden kannst und was du als Kursautor:in *einschließen* kannst.

Open edX hat ein universelles Kursbeschreibungsmarkup-Format namens OLX ("Open Learning XML"), das Kursautor:innen mittels einer Kurs-Autorisierungs-App (Open edX Studio) ausfüllen können.

OLX erlaubt Kursautor:innen, verschiedene Formate in Open edX-Kursen einzuschließen:


## Text/HTML/Markdown

<!-- Note -->
Die einfachsten und direktesten Elemente sind solche, die einfachen Fließtext enthalten, den Kursautor:innen in einem WYSIWYG-Editor (am häufigsten), in purem HTML oder via Markdown schreiben können.


## Video

<!-- Note -->
Dann gibt es Videoinhalte, die entweder direkt in der Plattform gehostet werden können oder auf YouTube.

Unabhängig von der Hosting-Methode kann Video mit vollständigen Transkripten gespeichert werden.


## Assets

<!-- Note -->
Du kannst auch extern verwaltete Assets einfügen, wie PDF-Lehrbücher, Folienpräsentationen oder Google Docs-Ressourcen, sowie die Möglichkeit, fast alles über externe iframes einzubinden.


## Übungsaufgaben

<!-- Note -->
Dann gibt es eine ganze Reihe von Dingen, die Open edX als "Aufgaben" bezeichnet — von einfachen Multiple-Choice-Quiz oder Freitext-Eingaben bis hin zu chemischen Gleichungen, Matheaufgaben, Coding-Aufgaben (in Sandboxes), bis hin zu Open-Response-Assessments (ORAs), die eine Methode zur kooperativen Bewertung von Essays-ähnlichen Antworten sind.


... und natürlich

## LTI
## SCORM

<!-- Note -->
Und natürlich hast du auch die Option, Inhalte, die in *anderen* Content-Autorisierungssystemen erstellt wurden, über [Learning Tools Interoperability](https://en.wikipedia.org/wiki/Learning_Tools_Interoperability) (LTI) und [Sharable Content Object Reference Model](https://en.wikipedia.org/wiki/Sharable_Content_Object_Reference_Model) (SCORM) einzuschließen.


## XBlocks

<!-- Note -->
Ich sollte erwähnen, dass nicht all diese Funktionalität vom Open edX-Core-Plattform selbst bereitgestellt werden muss.

Stattdessen unterstützt Open edX eine Plugin-Schnittstelle — XBlocks — mit einer [öffentlichen API](https://docs.openedx.org/projects/xblock/en/latest/index.html), und jede:r kann eine Erweiterung für Open edX in Python schreiben, die diese API implementiert.
(Wir kommen gleich auf XBlocks zurück.)

Es sei angemerkt, dass die XBlock-API ursprünglich nicht auf Open edX beschränkt war.
Das ist auch der Grund, warum sie (im Gegensatz zum AGPL-lizenzierten Open edX-Core) eine permissive, nicht-Copyleft Apache-Lizenz verwendet.
Ein weiterer Konsument der XBlock-API war Google Course Builder, ein von Google releasedes LMS mit Apache-Lizenz aus dem Jahr 2012 (aber bereits seit Langem eingestellt).
