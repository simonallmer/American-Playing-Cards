"""All wording of the Frontier rules, per language. Layout lives in build_frontier_rules.py.
Card codes in examples: value + symbol (H Hearts, D Diamonds, S Spades, C Clubs, X Stars), 0 = Cypher."""

TEXT = {
    # ─────────────────────────────────────────────────────────────────── English
    "en": {
        "file": "Frontier - Rules (English) {v}.pdf",
        "subtitle": "A combination and betting game of nerve, alliances, and the last dollar",
        "footer": "FRONTIER  ·  GAME DESIGN: SIMON ALLMER, LAURIN GRUMILLER  ·  RULES {v}  ·  PAGE {p}",
        "spec": [("Decks", "1×"), ("Cards Excluded", "None"), ("Players", "2–6"), ("Duration", "20–30 min"),
                 ("Complexity", "Medium")],
        "s1": "Objective",
        "objective": "Five rounds. Each round, build the strongest hand from your own cards and the shared Table "
                     "Cards, and bet on it. Leave the table with more money than you brought.",
        "s2": "The Cards",
        "cards_intro": "50 cards in five <b>Symbols</b> of ten: <b>1–9</b> and the <b>Cypher Ø</b>, worth 10. "
                       "The Symbols belong to three <b>Colors</b>:",
        "colors": ("Red", "Blue", "Black"),
        "symbols": ("Hearts", "Diamonds", "Spades", "Clubs", "Stars"),
        "circle": "<b>The Circle.</b> In a Run, Ø links 9 and 1: {run} is a Run. Ø still counts 10, and 1 counts 1.",
        "s3": "Setup",
        "setup": "All money is counted in <b>units</b> — the smallest piece on the table: a chip, a coin, a $5 note. "
                 "Each player brings a stake of <b>at least 10 units</b>, in whole units. For an even game, everyone "
                 "brings the same stake; stakes may also differ. The minimum bet is 1 unit. Shuffle the deck and "
                 "choose the dealer at random.",
        "s4": "A Round",
        "round_intro": "Six cards are always in reach: your own, plus the face-up Table Cards everyone shares.",
        "round_rows": ("Round", "Your cards", "Table Cards"),
        "deal": "<b>Deal.</b> The dealer lays out the Table Cards, then deals every player up to the round’s hand "
                "size. Keep your cards hidden until the showdown.",
        "betting": "<b>Betting.</b> The player left of the dealer opens, then play goes clockwise:",
        "moves": [("Open", "the first player bets at least 1 unit."),
                  ("Call", "match the highest bet."),
                  ("Raise", "match the highest bet and add at least 1 unit."),
                  ("Fold", "leave the round. If you haven’t bet yet, pay 1 unit first.")],
        "betting_end": "Betting continues until everyone still in has put in the same amount. <b>Limit:</b> no "
                       "one’s bet may exceed what the poorest player at the table held when the round began.",
        "showdown": "<b>Showdown.</b> Reveal the own cards you play — if any — and name the Table Cards you add. "
                    "The strongest hand (Section 5) takes the pot. A tie splits it; an odd unit goes to the tied "
                    "player nearest the dealer’s left.",
        "refill": "<b>Refill.</b> Played cards and Table Cards go to the discard pile; unplayed cards stay in your "
                  "hand. Then, clockwise from the dealer’s left, each player may discard any number of hand cards "
                  "<b>face up</b>. Shuffle the discard pile into the deck. Anyone left with nothing is out for the "
                  "rest of the game — the Limit now follows the poorest player still at the table. The deal passes "
                  "one seat clockwise.",
        "s5": "Hand Strength",
        "hand": "Your <b>hand</b> is the cards you play: any of your own plus any Table Cards — Table Cards alone "
                "are allowed. A Table Card serves every player at once.",
        "what_combo_h": "What is a Combination?",
        "what_combo": "Two or more cards that share a trait. A hand holds <b>one</b> combination or none — a card "
                      "that doesn’t fit breaks it, so play only what fits and keep the rest.",
        "combo_head": ["Combination", "Shared trait", "Example"],
        "combos": [("Symbol Run", "consecutive values, one Symbol", "4H 5H 6H"),
                   ("Same Value", "equal value", "7H 7S 7X"),
                   ("Same Symbol", "one Symbol", "2H 5H 9H"),
                   ("Run", "consecutive values", "9C 0D 1H")],
        "which_h": "Which hand wins?",
        "which": "Compare top-down; the first difference decides.",
        "steps": [("Size", "Combination with more cards › Combination with fewer cards › No Combination."),
                  ("Type", "Symbol Run › Same Value › Same Symbol › Run."),
                  ("Color", "One Color › One Color + Black › Red + Blue."),
                  ("Total", "Higher sum of values wins (Ø = 10). Still equal: split the pot.")],
        "one_color": "<b>One Color</b> = all Red, all Blue, or all Black. Without a combination, size and type "
                     "don’t count: go straight to Color. A single card counts only its value.",
        "examples_h": "Examples",
        "beats": "beats",
        "examples": [("2H 5H 9H", "7S 7D", "3 cards beat 2."),
                     ("4H 5H 6H", "2H 5H 9H", "Same size: Symbol Run beats Same Symbol."),
                     ("7H 7S", "2H 5H", "Same size: Same Value beats Same Symbol."),
                     ("4H 5D 6H", "4S 5X 6S", "Equal Runs: One Color beats One Color + Black."),
                     ("8C 9D 0H", "9C 0D 1H", "Equal Runs, both Red + Blue: 27 beats 20.")],
        "s6": "End of the Game",
        "end": "After round 5, everyone holding more than their stake has won the difference. The biggest gain "
               "takes the table.",
        "freedom": "<b>The Freedom of Cards.</b> American Playing Cards was introduced by Simon Allmer on the USA’s "
                   "250th Independence Day. Frontier is one of many games built for this 5-suit system. Learn more "
                   "at simonallmer.com/americanplayingcards.",
    },
    # ─────────────────────────────────────────────────────────────────── Deutsch
    "de": {
        "file": "Frontier - Regeln (Deutsch) {v}.pdf",
        "subtitle": "Ein Kombinations- und Setzspiel um Mut, Allianzen und den letzten Dollar",
        "footer": "FRONTIER  ·  SPIELDESIGN: SIMON ALLMER, LAURIN GRUMILLER  ·  REGELN {v}  ·  SEITE {p}",
        "spec": [("Decks", "1×"), ("Ausgeschl. Karten", "Keine"), ("Spieler", "2–6"), ("Dauer", "20–30 Min."),
                 ("Komplexität", "Mittel")],
        "s1": "Ziel",
        "objective": "Fünf Runden. Bilde jede Runde aus deinen eigenen Karten und den gemeinsamen Tischkarten die "
                     "stärkste Hand und setze darauf. Verlasse den Tisch mit mehr Geld, als du mitgebracht hast.",
        "s2": "Die Karten",
        "cards_intro": "50 Karten in fünf <b>Symbolen</b> zu je zehn: <b>1–9</b> und der <b>Cypher Ø</b> mit dem "
                       "Wert 10. Die Symbole gehören zu drei <b>Farben</b>:",
        "colors": ("Rot", "Blau", "Schwarz"),
        "symbols": ("Herz", "Karo", "Pik", "Kreuz", "Stern"),
        "circle": "<b>Der Kreis.</b> In einer Reihe verbindet Ø die 9 mit der 1: {run} ist eine Reihe. Ø zählt "
                  "weiterhin 10, die 1 zählt 1.",
        "s3": "Vorbereitung",
        "setup": "Gezählt wird in <b>Einheiten</b> — dem kleinsten Stück Geld am Tisch: ein Chip, eine Münze, ein "
                 "5-$-Schein. Jeder bringt ein Startkapital von <b>mindestens 10 Einheiten</b> mit, in ganzen "
                 "Einheiten. Für ein ausgeglichenes Spiel bringen alle gleich viel mit; die Beträge dürfen aber auch "
                 "abweichen. Der Mindesteinsatz ist 1 Einheit. Mische das Deck und bestimme den Geber zufällig.",
        "s4": "Eine Runde",
        "round_intro": "Sechs Karten sind immer in Reichweite: deine eigenen plus die offenen Tischkarten, die alle "
                       "teilen.",
        "round_rows": ("Runde", "Deine Karten", "Tischkarten"),
        "deal": "<b>Geben.</b> Der Geber legt die Tischkarten offen aus und gibt dann jedem bis zur Handgröße der "
                "Runde auf. Halte deine Karten bis zum Showdown verdeckt.",
        "betting": "<b>Setzen.</b> Der Spieler links vom Geber eröffnet, dann geht es im Uhrzeigersinn weiter:",
        "moves": [("Eröffnen", "der erste Spieler setzt mindestens 1 Einheit."),
                  ("Mitgehen", "den höchsten Einsatz ausgleichen."),
                  ("Erhöhen", "den höchsten Einsatz ausgleichen und mindestens 1 Einheit drauflegen."),
                  ("Aussteigen", "die Runde verlassen. Wer noch nichts gesetzt hat, zahlt vorher 1 Einheit.")],
        "betting_end": "Gesetzt wird, bis alle Verbliebenen gleich viel eingezahlt haben. <b>Limit:</b> Kein "
                       "Einsatz darf höher sein als das, was der ärmste Spieler am Tisch zu Rundenbeginn besaß.",
        "showdown": "<b>Showdown.</b> Decke die eigenen Karten auf, die du spielst — falls welche — und nenne die "
                    "Tischkarten, die du dazunimmst. Die stärkste Hand (Abschnitt 5) gewinnt den Pot. Bei "
                    "Gleichstand wird geteilt; eine übrige Einheit geht an den gleichauf liegenden "
                    "Spieler, der links vom Geber am nächsten sitzt.",
        "refill": "<b>Nachfüllen.</b> Gespielte Karten und Tischkarten kommen auf den Ablagestapel; ungespielte "
                  "Karten bleiben auf der Hand. Dann darf jeder, links vom Geber beginnend im Uhrzeigersinn, "
                  "beliebig viele Handkarten <b>offen</b> abwerfen. Mische den Ablagestapel ins Deck. Wer nichts mehr "
                  "hat, scheidet für den Rest des Spiels aus — das Limit richtet sich dann nach dem ärmsten "
                  "verbliebenen Spieler. Der Geber rückt einen Platz im Uhrzeigersinn weiter.",
        "s5": "Handstärke",
        "hand": "Deine <b>Hand</b> sind die Karten, die du spielst: beliebig viele eigene plus beliebige "
                "Tischkarten — auch nur Tischkarten sind erlaubt. Eine Tischkarte dient allen Spielern zugleich.",
        "what_combo_h": "Was ist eine Kombination?",
        "what_combo": "Zwei oder mehr Karten mit einem gemeinsamen Merkmal. Eine Hand enthält <b>eine</b> "
                      "Kombination oder keine — eine Karte, die nicht passt, bricht sie. Spiele also nur, was passt, "
                      "und behalte den Rest.",
        "combo_head": ["Kombination", "Gemeinsames Merkmal", "Beispiel"],
        "combos": [("Symbol-Reihe", "aufeinanderfolgende Werte, ein Symbol", "4H 5H 6H"),
                   ("Gleicher Wert", "gleicher Wert", "7H 7S 7X"),
                   ("Gleiches Symbol", "ein Symbol", "2H 5H 9H"),
                   ("Reihe", "aufeinanderfolgende Werte", "9C 0D 1H")],
        "which_h": "Welche Hand gewinnt?",
        "which": "Von oben nach unten vergleichen; der erste Unterschied entscheidet.",
        "steps": [("Größe", "Kombination mit mehr Karten › Kombination mit weniger Karten › Keine Kombination."),
                  ("Art", "Symbol-Reihe › Gleicher Wert › Gleiches Symbol › Reihe."),
                  ("Farbe", "Eine Farbe › Eine Farbe + Schwarz › Rot + Blau."),
                  ("Summe", "Die höhere Summe der Werte gewinnt (Ø = 10). Immer noch gleich: Pot teilen.")],
        "one_color": "<b>Eine Farbe</b> = alles Rot, alles Blau oder alles Schwarz. Ohne Kombination zählen Größe "
                     "und Art nicht: direkt weiter zur Farbe. Eine einzelne Karte zählt nur ihren Wert.",
        "examples_h": "Beispiele",
        "beats": "schlägt",
        "examples": [("2H 5H 9H", "7S 7D", "3 Karten schlagen 2."),
                     ("4H 5H 6H", "2H 5H 9H", "Gleiche Größe: Symbol-Reihe schlägt Gleiches Symbol."),
                     ("7H 7S", "2H 5H", "Gleiche Größe: Gleicher Wert schlägt Gleiches Symbol."),
                     ("4H 5D 6H", "4S 5X 6S", "Gleiche Reihen: Eine Farbe schlägt Eine Farbe + Schwarz."),
                     ("8C 9D 0H", "9C 0D 1H", "Gleiche Reihen, beide Rot + Blau: 27 schlägt 20.")],
        "s6": "Spielende",
        "end": "Nach Runde 5 hat jeder, der mehr als sein Startkapital besitzt, die Differenz gewonnen. Wer den "
               "größten Gewinn hat, gewinnt den Tisch.",
        "freedom": "<b>The Freedom of Cards.</b> American Playing Cards wurde von Simon Allmer am 250. "
                   "Unabhängigkeitstag der USA vorgestellt. Frontier ist eines von vielen Spielen für dieses "
                   "System mit fünf Symbolen. Mehr unter simonallmer.com/americanplayingcards.",
    },
    # ─────────────────────────────────────────────────────────────────── Français
    "fr": {
        "file": "Frontier - Règles (Français) {v}.pdf",
        "subtitle": "Un jeu de combinaisons et de mises — de sang-froid, d’alliances et du dernier dollar",
        "footer": "FRONTIER  ·  CONCEPTION : SIMON ALLMER, LAURIN GRUMILLER  ·  RÈGLES {v}  ·  PAGE {p}",
        "spec": [("Jeux", "1×"), ("Cartes exclues", "Aucune"), ("Joueurs", "2–6"), ("Durée", "20–30 min"),
                 ("Complexité", "Moyenne")],
        "s1": "Objectif",
        "objective": "Cinq manches. À chaque manche, formez la main la plus forte avec vos propres cartes et les "
                     "cartes de table communes, et misez dessus. Quittez la table avec plus d’argent qu’à votre "
                     "arrivée.",
        "s2": "Les cartes",
        "cards_intro": "50 cartes en cinq <b>symboles</b> de dix : <b>1–9</b> et le <b>Chiffre Ø</b>, qui vaut 10. "
                       "Les symboles appartiennent à trois <b>couleurs</b> :",
        "colors": ("Rouge", "Bleu", "Noir"),
        "symbols": ("Cœur", "Carreau", "Pique", "Trèfle", "Étoile"),
        "circle": "<b>Le Cercle.</b> Dans une suite, Ø relie le 9 et le 1 : {run} est une suite. Ø vaut toujours "
                  "10, et le 1 vaut 1.",
        "s3": "Mise en place",
        "setup": "Tout l’argent se compte en <b>unités</b> — la plus petite pièce sur la table : un jeton, une "
                 "pièce, un billet de 5 $. Chaque joueur apporte une cave d’<b>au moins 10 unités</b>, en unités "
                 "entières. Pour une partie équilibrée, chacun apporte la même cave ; les caves peuvent aussi "
                 "différer. La mise minimale est de 1 unité. Mélangez le jeu et tirez le donneur au sort.",
        "s4": "Une manche",
        "round_intro": "Six cartes sont toujours à portée : les vôtres, plus les cartes de table visibles que tout "
                       "le monde partage.",
        "round_rows": ("Manche", "Vos cartes", "Cartes de table"),
        "deal": "<b>Donne.</b> Le donneur étale les cartes de table face visible, puis complète la main de chaque "
                "joueur jusqu’à la taille de la manche. Gardez vos cartes cachées jusqu’à l’abattage.",
        "betting": "<b>Mises.</b> Le joueur à gauche du donneur ouvre, puis le jeu tourne dans le sens horaire :",
        "moves": [("Ouvrir", "le premier joueur mise au moins 1 unité."),
                  ("Suivre", "égaler la mise la plus haute."),
                  ("Relancer", "égaler la mise la plus haute et ajouter au moins 1 unité."),
                  ("Se coucher", "quitter la manche. Si vous n’avez pas encore misé, payez d’abord 1 unité.")],
        "betting_end": "Les mises continuent jusqu’à ce que tous les joueurs encore en jeu aient misé le même "
                       "montant. <b>Limite :</b> aucune mise ne peut dépasser ce que possédait le joueur le plus "
                       "pauvre de la table au début de la manche.",
        "showdown": "<b>Abattage.</b> Révélez les cartes que vous jouez — s’il y en a — et nommez les cartes de "
                    "table que vous ajoutez. La main la plus forte (section 5) remporte le pot. En cas d’égalité, "
                    "il est partagé ; une unité restante va au joueur à égalité le plus proche de la gauche du "
                    "donneur.",
        "refill": "<b>Recharge.</b> Les cartes jouées et les cartes de table vont à la défausse ; les cartes non "
                  "jouées restent en main. Puis, dans le sens horaire à partir de la gauche du donneur, chacun peut "
                  "défausser autant de cartes de sa main qu’il le souhaite, <b>face visible</b>. Mélangez la défausse "
                  "dans le jeu. Quiconque n’a plus rien est éliminé pour le reste de la partie — la limite suit "
                  "alors le joueur le plus pauvre encore à table. La donne passe d’un siège dans le sens horaire.",
        "s5": "Force de la main",
        "hand": "Votre <b>main</b>, ce sont les cartes que vous jouez : autant des vôtres que vous voulez, plus "
                "n’importe quelles cartes de table — les cartes de table seules sont permises. Une carte de table "
                "sert à tous les joueurs à la fois.",
        "what_combo_h": "Qu’est-ce qu’une combinaison ?",
        "what_combo": "Deux cartes ou plus partageant un trait. Une main contient <b>une</b> combinaison ou "
                      "aucune — une carte qui ne convient pas la brise : ne jouez que ce qui convient et gardez le "
                      "reste.",
        "combo_head": ["Combinaison", "Trait commun", "Exemple"],
        "combos": [("Suite de symbole", "valeurs consécutives, un seul symbole", "4H 5H 6H"),
                   ("Valeur identique", "même valeur", "7H 7S 7X"),
                   ("Symbole identique", "un seul symbole", "2H 5H 9H"),
                   ("Suite", "valeurs consécutives", "9C 0D 1H")],
        "which_h": "Quelle main l’emporte ?",
        "which": "Comparez de haut en bas ; la première différence tranche.",
        "steps": [("Taille", "Combinaison avec plus de cartes › combinaison avec moins de cartes › aucune "
                             "combinaison."),
                  ("Type", "Suite de symbole › Valeur identique › Symbole identique › Suite."),
                  ("Couleur", "Une couleur › Une couleur + noir › Rouge + bleu."),
                  ("Total", "La somme des valeurs la plus haute gagne (Ø = 10). Toujours égal : partagez le pot.")],
        "one_color": "<b>Une couleur</b> = tout rouge, tout bleu ou tout noir. Sans combinaison, taille et type ne "
                     "comptent pas : passez directement à la couleur. Une carte seule ne compte que sa valeur.",
        "examples_h": "Exemples",
        "beats": "bat",
        "examples": [("2H 5H 9H", "7S 7D", "3 cartes battent 2."),
                     ("4H 5H 6H", "2H 5H 9H", "Même taille : Suite de symbole bat Symbole identique."),
                     ("7H 7S", "2H 5H", "Même taille : Valeur identique bat Symbole identique."),
                     ("4H 5D 6H", "4S 5X 6S", "Suites égales : Une couleur bat Une couleur + noir."),
                     ("8C 9D 0H", "9C 0D 1H", "Suites égales, toutes deux rouge + bleu : 27 bat 20.")],
        "s6": "Fin de la partie",
        "end": "Après la manche 5, chaque joueur qui possède plus que sa cave a gagné la différence. Le plus gros "
               "gain remporte la table.",
        "freedom": "<b>The Freedom of Cards.</b> American Playing Cards a été présenté par Simon Allmer pour le "
                   "250e anniversaire de l’indépendance des États-Unis. Frontier est l’un des nombreux jeux conçus "
                   "pour ce système à cinq symboles. Plus d’informations sur simonallmer.com/americanplayingcards.",
    },
}
