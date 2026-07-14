// --- Constants & Data ---
const SUITS = {
    WEST_FRONTIER: { id: 'WEST_FRONTIER', name: 'Western Frontier', symbol: '<svg class="suit-icon" viewBox="0 0 100 100"><path d="M 45 22 L 45 35 Q 45 45 35 45 L 22 45 L 22 55 L 35 55 Q 45 55 45 65 L 45 78 L 55 78 L 55 65 Q 55 55 65 55 L 78 55 L 78 45 L 65 45 Q 55 45 55 35 L 55 22 Z"/><circle cx="50" cy="14" r="12"/><circle cx="39" cy="23" r="9"/><circle cx="61" cy="23" r="9"/><circle cx="50" cy="86" r="12"/><circle cx="39" cy="77" r="9"/><circle cx="61" cy="77" r="9"/><circle cx="14" cy="50" r="12"/><circle cx="23" cy="39" r="9"/><circle cx="23" cy="61" r="9"/><circle cx="86" cy="50" r="12"/><circle cx="77" cy="39" r="9"/><circle cx="77" cy="61" r="9"/></svg>', color: 'var(--west-frontier-text)', bg: 'var(--west-frontier-bg)', border: 'var(--west-frontier-border)', align: 'Union' },
    INDUST_EAST: { id: 'INDUST_EAST', name: 'Indust. East', symbol: '<svg class="suit-icon" viewBox="0 0 100 100"><path d="M 50 50 C 48 48, 35 40, 35 28 C 35 15, 45 10, 50 5 C 55 10, 65 15, 65 28 C 65 40, 52 48, 50 50 C 52 48, 60 35, 72 35 C 85 35, 90 45, 95 50 C 90 55, 85 65, 72 65 C 60 65, 52 52, 50 50 C 52 52, 65 60, 65 72 C 65 85, 55 90, 50 95 C 45 90, 35 85, 35 72 C 35 60, 48 52, 50 50 C 48 52, 40 65, 28 65 C 15 65, 10 55, 5 50 C 10 45, 15 35, 28 35 C 40 35, 48 48, 50 50 Z" fill="currentColor"/></svg>', color: 'var(--indust-east-text)', bg: 'var(--indust-east-bg)', border: 'var(--indust-east-border)', align: 'Union' },
    DEEP_SOUTH: { id: 'DEEP_SOUTH', name: 'Deep South', symbol: '<svg class="suit-icon" viewBox="0 0 100 100"><path d="M 50 18 C 60 8, 78 10, 78 25 C 78 40, 54 35, 54 50 C 54 65, 78 60, 78 75 C 78 90, 60 92, 50 82 C 40 92, 22 90, 22 75 C 22 60, 46 65, 46 50 C 46 35, 22 40, 22 25 C 22 10, 40 8, 50 18 Z" fill="currentColor"/></svg>', color: 'var(--deep-south-text)', bg: 'var(--deep-south-bg)', border: 'var(--deep-south-border)', align: 'Confederacy' },
    UPPER_SOUTH: { id: 'UPPER_SOUTH', name: 'Upper/Western South', symbol: '<svg class="suit-icon" viewBox="0 0 100 100"><path d="M 50 8 A 120 120 0 0 0 78 50 A 120 120 0 0 0 50 92 A 120 120 0 0 0 22 50 A 120 120 0 0 0 50 8 Z" fill="currentColor"/></svg>', color: 'var(--upper-south-text)', bg: 'var(--upper-south-bg)', border: 'var(--upper-south-border)', align: 'Confederacy' },
    BORDER: { id: 'BORDER', name: 'Border States', symbol: '<svg class="suit-icon" viewBox="0 0 100 100"><path d="M 50 12 L 61 31 L 83 31 L 72 50 L 83 69 L 61 69 L 50 88 L 39 69 L 17 69 L 28 50 L 17 31 L 39 31 Z" fill="currentColor"/><circle cx="50" cy="12" r="6" fill="currentColor"/><circle cx="83" cy="31" r="6" fill="currentColor"/><circle cx="83" cy="69" r="6" fill="currentColor"/><circle cx="50" cy="88" r="6" fill="currentColor"/><circle cx="17" cy="69" r="6" fill="currentColor"/><circle cx="17" cy="31" r="6" fill="currentColor"/></svg>', color: 'var(--border-text)', bg: 'var(--border-bg)', border: 'var(--border-border)', align: 'Neutral' }
};

const STATES = {
    ATLANTIC_CORRIDOR: [
        "Maine", "Vermont", "New Hampshire", "Massachusetts", "Rhode Island",
        "Connecticut", "New York", "New Jersey", "Delaware", "Maryland"
    ],
    PACIFIC_SUN: [
        "California", "Oregon", "Washington", "Hawaii", "Illinois",
        "Minnesota", "Colorado", "New Mexico", "Virginia", "Nevada"
    ],
    SOUTHERN_HEART: [
        "South Carolina", "Alabama", "Mississippi", "Louisiana", "Arkansas",
        "Tennessee", "Kentucky", "West Virginia", "Oklahoma", "Texas"
    ],
    GREAT_FRONTIER: [
        "Kansas", "Nebraska", "South Dakota", "North Dakota", "Montana",
        "Wyoming", "Idaho", "Utah", "Missouri", "Indiana"
    ],
    WILD_SWINGS: [
        "Pennsylvania", "Florida", "Ohio", "Michigan", "Wisconsin",
        "Georgia", "Arizona", "North Carolina", "Iowa", "Alaska"
    ]
};

const PRESIDENTS = {
    BLACK: [
        "washington", "adams-john", "jefferson", "madison", "monroe",
        "adams-quincy", "harrison-william", "tyler", "taylor", "fillmore"
    ],
    BLUE: [
        "jackson", "van-buren", "polk", "pierce", "buchanan",
        "johnson-andrew", "cleveland-1", "wilson", "roosevelt-franklin", "truman",
        "kennedy", "johnson-lyndon", "carter", "clinton", "obama", "biden"
    ],
    RED: [
        "lincoln", "grant", "hayes", "garfield", "arthur",
        "harrison-benjamin", "mckinley", "roosevelt-theodore", "taft", "harding",
        "coolidge", "hoover", "eisenhower", "nixon", "ford",
        "reagan", "bush-herbert", "bush-walker", "trump"
    ]
};

const BASE_BET_UNIT = 1;

// Circle bisected by a vertical line — represents both 0 (circle) and 1 (line)
const CYPHER_SVG = `<svg class="cypher-svg" viewBox="0 0 20 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Cypher"><line x1="10" y1="0" x2="10" y2="32" stroke="currentColor" stroke-width="3.5" stroke-linecap="round"/><circle cx="10" cy="16" r="8" stroke="currentColor" stroke-width="3.5"/></svg>`;

function cardDisplayVal(val) {
    if (val === 10) return CYPHER_SVG;
    if (val === 1)  return 'I';
    return val;
}

const CARD_IMG_SUIT_ORDER = ['INDUST_EAST', 'WEST_FRONTIER', 'DEEP_SOUTH', 'UPPER_SOUTH', 'BORDER'];
const CARD_IMG_SUIT_NAMES = { INDUST_EAST: 'Clubs', WEST_FRONTIER: 'Spades', DEEP_SOUTH: 'Hearts', UPPER_SOUTH: 'Diamonds', BORDER: 'Stars' };
function getCardImageUrl(suitId, val) {
    const fileNum = (CARD_IMG_SUIT_ORDER.indexOf(suitId) * 10) + val;
    const valStr = val === 10 ? 'Cypher' : String(val);
    return `resources/cards/${String(fileNum).padStart(2, '0')}_${CARD_IMG_SUIT_NAMES[suitId]}_${valStr}.png`;
}

// --- Helper Functions ---
function createDeck(edition = 'STANDARD') {
    let newDeck = [];
    Object.keys(SUITS).forEach(suitKey => {
        const suit = SUITS[suitKey];
        for (let val = 1; val <= 10; val++) {
            let presidentId = null;
            let stateName = null;
            if (edition === 'PRESIDENT') {
                if (suitKey === 'BORDER') {
                    presidentId = PRESIDENTS.BLACK[val - 1] || null;
                } else if (suitKey === 'WEST_FRONTIER') { // Spades (Row 1)
                    presidentId = PRESIDENTS.BLUE[val - 1] || null;
                } else if (suitKey === 'INDUST_EAST') { // Clubs (Row 4)
                    presidentId = PRESIDENTS.BLUE[10 + val - 1] || null;
                } else if (suitKey === 'DEEP_SOUTH') { // Hearts (Row 2)
                    presidentId = PRESIDENTS.RED[val - 1] || null;
                } else if (suitKey === 'UPPER_SOUTH') { // Diamonds (Row 3)
                    presidentId = PRESIDENTS.RED[10 + val - 1] || null;
                }
            } else if (edition === 'STATE') {
                if (suitKey === 'INDUST_EAST') {
                    stateName = STATES.ATLANTIC_CORRIDOR[val - 1] || null;
                } else if (suitKey === 'WEST_FRONTIER') {
                    stateName = STATES.PACIFIC_SUN[val - 1] || null;
                } else if (suitKey === 'DEEP_SOUTH') {
                    stateName = STATES.SOUTHERN_HEART[val - 1] || null;
                } else if (suitKey === 'UPPER_SOUTH') {
                    stateName = STATES.GREAT_FRONTIER[val - 1] || null;
                } else if (suitKey === 'BORDER') {
                    stateName = STATES.WILD_SWINGS[val - 1] || null;
                }
            }

            const president = presidentId ? presidentsData.find(p => p.id === presidentId) : null;
            const state = stateName ? getStateByName(stateName) : null;

            newDeck.push({
                id: `${suitKey}-${val}`,
                suit: suit,
                name: val === 10 ? 'Cypher' : `Rank ${val}`,
                val: val,
                isCypher: val === 10,
                president: president ? president.name : null,
                state: stateName,
                portraitUrl: president ? president.portraitUrl : null,
                flagUrl: state ? state.flagUrl : null
            });
        }
    });

    // Shuffle
    for (let i = newDeck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newDeck[i], newDeck[j]] = [newDeck[j], newDeck[i]];
    }
    return newDeck;
}

function evaluateHand(cards) {
    if (!cards || cards.length === 0) return { name: "Fold", score: 0, style: "color: #78716c;", displayValue: "0", type: 'FOLD' };

    const n = cards.length;
    const sortedCards = [...cards].sort((a, b) => a.val - b.val);

    // --- Symbol / Side analysis ---
    const isSymbol = cards.every(c => c.suit.id === cards[0].suit.id); // exact same suit (e.g. all Spades)
    const isPureFlush = isSymbol; // kept for skirmish flavor below
    const pureUnion = cards.every(c => c.suit.align === 'Union');
    const pureConfed = cards.every(c => c.suit.align === 'Confederacy');
    const isPureSide = pureUnion || pureConfed; // one side, zero neutral cards
    const isConfederate = cards.every(c => c.suit.align === 'Confederacy' || c.suit.align === 'Neutral');
    const isUnion = cards.every(c => c.suit.align === 'Union' || c.suit.align === 'Neutral');
    const hasAllegiance = isConfederate || isUnion; // one side, neutral tolerated
    const isAllianceSide = hasAllegiance && !isPureSide; // one side + neutral mixed in
    const isMixedSides = !hasAllegiance; // both Union and Confederacy present

    // Purity Tiebreaker / Skirmish Flavor Tag
    let purityBonus = 0;
    let purityTag = "";
    if (n > 1) {
        if (isPureFlush) {
            purityBonus = 40;
            purityTag = " [Pure]";
        } else if (isPureSide || cards.every(c => c.suit.align === 'Neutral')) {
            purityBonus = 30;
            purityTag = " [Strict]";
        } else if (hasAllegiance) {
            purityBonus = 20;
            purityTag = " [Border]";
        } else {
            purityBonus = 10;
            purityTag = " [Divided]";
        }
    }

    // --- Run detection (linear or wrapping through the Cypher/1 circle) ---
    let isRun = false;
    if (n > 1) {
        let maxRun = 1, currentRun = 1;
        for (let i = 0; i < sortedCards.length - 1; i++) {
            if (sortedCards[i + 1].val === sortedCards[i].val + 1) currentRun++;
            else if (sortedCards[i + 1].val !== sortedCards[i].val) currentRun = 1;
            maxRun = Math.max(maxRun, currentRun);
        }
        let linearRun = maxRun === n;

        if (linearRun) {
            isRun = true;
        } else {
            // Circular check: must span 1 and 10 (Cypher) with exactly one gap
            const values = sortedCards.map(c => c.val);
            if (values.includes(1) && values.includes(10)) {
                let breaks = 0;
                for (let i = 0; i < values.length - 1; i++) {
                    if (values[i + 1] !== values[i] + 1) breaks++;
                }
                if (breaks === 1 && values[0] === 1 && values[values.length - 1] === 10) {
                    isRun = true;
                }
            }
        }
    }

    const valCounts = {};
    cards.forEach(c => valCounts[c.val] = (valCounts[c.val] || 0) + 1);
    const maxValCount = Math.max(...Object.values(valCounts));
    const dominantVal = parseInt(Object.keys(valCounts).find(k => valCounts[k] === maxValCount));
    const isKind = n > 1 && maxValCount === n; // ALL cards share the same value (e.g. a pair, or three of a kind)

    // Gleichstand / tiebreak: total sum of card values, Cypher = 10 (see rulebook Section 5)
    const valueSum = cards.reduce((acc, c) => acc + c.val, 0);

    // --- Category (Hierarchy Tier 1-9, per the rulebook) ---
    let stufe = 9, categoryLabel = "Chaos";
    if (n > 1) {
        if (isRun && isSymbol) { stufe = 1; categoryLabel = "Run + Symbol"; }
        else if (isKind) { stufe = 2; categoryLabel = "Same Value"; }
        else if (isRun && isPureSide) { stufe = 3; categoryLabel = "Run + Pure Color"; }
        else if (isRun && isAllianceSide) { stufe = 4; categoryLabel = "Run + Color Alliance"; }
        else if (isRun && isMixedSides) { stufe = 5; categoryLabel = "Mixed Run"; }
        else if (isSymbol) { stufe = 6; categoryLabel = "Symbol"; }
        else if (isPureSide) { stufe = 7; categoryLabel = "Pure Color"; }
        else if (isAllianceSide) { stufe = 8; categoryLabel = "Color Alliance"; }
    }

    // --- Scoring Hierarchy: card count first, then Tier (category), then value sum ---
    if (n >= 2 && stufe < 9) {
        const countBase = { 5: 5000000000, 4: 4000000000, 3: 3000000000, 2: 2000000000 }[n];
        const stufeBonus = (9 - stufe) * 10000000;
        const styles = {
            1: "color: #e879f9; font-weight: 900;",
            2: "color: #c084fc; font-weight: bold;",
            3: "color: #fbbf24; font-weight: 900;",
            4: "color: #fb923c; font-weight: bold;",
            5: "color: #60a5fa; font-weight: bold;",
            6: "color: #34d399;",
            7: "color: #6ee7b7;",
            8: "color: #a3e635;",
        };
        const name = stufe === 2
            ? `${n} of Rank ${dominantVal}`
            : `${n}-Card ${categoryLabel}${purityTag}`;
        return {
            name,
            score: countBase + stufeBonus + (valueSum * 100) + purityBonus,
            style: styles[stufe],
            tier: `Tier ${stufe}`,
            stufe,
            count: n
        };
    }

    // --- Raw Skirmish Power (Chaos hands, and single cards) ---
    let skirmishScore = 0;
    let skirmishName = "";
    let style = "color: #a8a29e;";

    // Rank 1 Imitation: 1 imitates the highest card in the skirmish
    const maxVal = Math.max(...cards.map(c => c.val));
    const effectiveValues = cards.map(c => c.val === 1 ? maxVal : c.val);
    const hasOne = cards.some(c => c.val === 1 && maxVal > 1);

    if (n === 1) {
        skirmishScore = cards[0].val;
        skirmishName = `Solo Force: Rank ${cards[0].val}`;
    } else if (isPureFlush) {
        skirmishScore = effectiveValues.reduce((acc, val) => acc * val, 1) * 2;
        skirmishName = `Pure Skirmish (${n})${hasOne ? ' [Imitation]' : ''}`;
        style = "color: #10b981; font-weight: bold;";
    } else if (hasAllegiance) {
        skirmishScore = effectiveValues.reduce((acc, val) => acc * val, 1);
        skirmishName = `Coalition Skirmish (${n})${purityTag}${hasOne ? ' [Imitation]' : ''}`;
        style = "color: #84cc16; font-weight: bold;";
    } else {
        skirmishScore = effectiveValues.reduce((acc, val) => acc + val, 0);
        skirmishName = `Divided Skirmish (${n})${hasOne ? ' [Imitation]' : ''}`;
        style = "color: #f87171; font-weight: bold;";
    }

    return {
        name: skirmishName,
        score: (skirmishScore * 100) + purityBonus,
        style: style,
        tier: 'Tier 9',
        stufe: 9,
        count: n,
        power: skirmishScore.toLocaleString()
    };
}

// --- Main Game Class ---
class FrontierGame {
    constructor() {
        this.deck = [];
        this.discardPile = [];
        this.pot = 0;
        this.players = [];
        this.allGlobalPlayers = [];

        this.currentRoundNum = 1;
        this.roundActivePlayers = [];
        this.roundPlays = [];
        this.roundBet = 0;
        this.activePlayerId = 0; // index in this.players
        this.gameHistory = [];

        this.selectedCardIndices = [];
        this.marketCard = null;
        this.marketCardSelected = false;
        this.headsUpFinalTurn = false;
        this.phase = 'SETUP'; // SETUP, TRANSITION, PLAYING, ROUND_OVER, GAME_OVER
        this.currentGame = 'FRONTIER';

        // DOM Elements
        this.els = {
            cardsContainer: document.getElementById('cards-container'),
            controlsArea: document.getElementById('controls-area'),
            mainHud: document.getElementById('main-hud'),
            playerStatusGrid: document.getElementById('player-status-grid'),
            overlay: document.getElementById('overlay'),
            overlayTitle: document.getElementById('overlay-title'),
            overlayDesc: document.getElementById('overlay-desc'),
            rulesModal: document.getElementById('rules-modal'),
            msgArea: document.getElementById('message-area'),
            historyPanel: document.getElementById('history-panel'),
            historyContent: document.getElementById('history-content'),
            mulliganBtn: document.getElementById('mulligan-btn'),
            menuDropdown: document.getElementById('frontier-menu-dropdown'),
            allCardsModal: document.getElementById('all-cards-modal'),
            allCardsGrid: document.getElementById('all-cards-grid'),
            rulesInnerWrapper: document.getElementById('rules-inner-content-wrapper')
        };

        this.edition = 'STANDARD'; // 'STANDARD' or 'PRESIDENT'
        this.currentGame = 'FRONTIER'; // 'FRONTIER', 'STATE_QUIZ', 'PRESIDENT_QUIZ'

        // this.loadGlobalPlayers(); // Removed as we now use showSetup()

        // window.addEventListener('keydown', (e) => { ... }) // Removed to consolidate in app.js


        window.addEventListener('click', (e) => {
            // Close modals if backdrop (the .modal shell) is clicked
            if (e.target.classList.contains('modal')) {
                this.closeAllModals();
            }

            // Close menu dropdown if clicking outside
            if (this.els.menuDropdown.classList.contains('active')) {
                const isMenuBtn = document.getElementById('frontier-menu-btn').contains(e.target);
                const isInsideMenu = this.els.menuDropdown.contains(e.target);
                if (!isMenuBtn && !isInsideMenu) {
                    this.els.menuDropdown.classList.remove('active');
                }
            }
        });

        window.addEventListener('keydown', (e) => {
            if (e.key === ' ' || e.code === 'Space') {
                if (this.phase === 'TRANSITION') {
                    const overlayBtn = document.getElementById('overlay-main-btn');
                    if (overlayBtn && overlayBtn.style.display !== 'none') {
                        e.preventDefault();
                        this.startTurn();
                    }
                } else if (this.phase === 'PLAYING' && (this.edition === 'PRESIDENT' || this.edition === 'STATE')) {
                    e.preventDefault();
                    this.toggleProfilePanel();
                }
            }
        });
    }

    closeAllModals() {
        this.els.rulesModal.classList.remove('visible');
        this.els.allCardsModal.classList.remove('visible');
        this.els.menuDropdown.classList.remove('active');
    }

    /* loadGlobalPlayers & saveGlobalPlayers removed (absorbed into initGame) */

    toggleRules() {
        this.updateRulesContent();
        this.els.rulesModal.classList.toggle('visible');
        this.els.menuDropdown.classList.remove('active');
    }

    updateRulesContent() {
        if (!this.els.rulesInnerWrapper) return;
        
        if (this.currentGame === 'PRESIDENT_QUIZ') {
            this.els.rulesInnerWrapper.innerHTML = `
                <button class="modal-close" onclick="frontierGame.toggleRules()">&times;</button>
                <h2 style="font-size: 2rem; color: var(--gold); margin-bottom: 20px;">President Quiz Rulebook</h2>
                <div id="rules-inner-content" style="text-align: left; max-width: 800px; margin: 0 auto; line-height: 1.6; color: #ccc;">
                    <h3 style="color: var(--gold-bright); margin-top: 2rem;">1. Objective</h3>
                    <p>Identify the years during which each President served in office.</p>
                    
                    <h3 style="color: var(--gold-bright); margin-top: 2rem;">2. The Deck (50 Cards)</h3>
                    <p>The game uses the <strong>President Edition</strong> of American Playing Cards, featuring the Presidents of the United States.</p>

                    <h3 style="color: var(--gold-bright); margin-top: 2rem;">3. Round Structure</h3>
                    <p>The game lasts <strong>5 Rounds</strong>. Each round follows this sequence:</p>
                    <ol>
                        <li><strong>Ante:</strong> Every player contributes $2 to the Pot at the start of the round.</li>
                        <li><strong>Reveal:</strong> A President card is revealed to all players.</li>
                        <li><strong>Guessing:</strong> Players use the keypad to log their guess (a specific year).</li>
                        <li><strong>Confidentiality:</strong> To ensure fair play, your guess is hidden after entry.</li>
                    </ol>

                    <h3 style="color: var(--gold-bright); margin-top: 2rem;">4. Scoring & Victory</h3>
                    <p>After all players have guessed, the President's tenure is revealed.</p>
                    <ul style="list-style: none; padding: 0;">
                        <li><strong>Correct Year:</strong> Any year that falls within the President's actual tenure is considered a direct hit!</li>
                        <li><strong>Distance:</strong> If no one guesses a year within the tenure, the player(s) closest to the tenure (either before start or after end) win.</li>
                    </ul>
                    <p>The player(s) with the <strong>best guess</strong> win the entire Pot. If multiple players are equally close or correct, the Pot is split.</p>
                    <p>The ultimate winner is the player with the <strong>most wins</strong> after 5 rounds.</p>
                    
                    <p style="text-align: center; margin-top: 3rem; font-size: 0.7rem; opacity: 0.5; letter-spacing: 2px;">DESIGN: SIMON ALLMER</p>
                </div>
            `;
        } else if (this.currentGame === 'STATE_QUIZ') {
            this.els.rulesInnerWrapper.innerHTML = `
                <button class="modal-close" onclick="frontierGame.toggleRules()">&times;</button>
                <h2 style="font-size: 2rem; color: var(--gold); margin-bottom: 20px;">The State Quiz Rulebook</h2>
                <div id="rules-inner-content" style="text-align: left; max-width: 800px; margin: 0 auto; line-height: 1.6; color: #ccc;">
                    <h3 style="color: var(--gold-bright); margin-top: 2rem;">1. Objective</h3>
                    <p>Test your knowledge of the Union by identifying the location of each state on the US map.</p>
                    
                    <h3 style="color: var(--gold-bright); margin-top: 2rem;">2. The Deck (50 Cards)</h3>
                    <p>The game uses the <strong>State Edition</strong> of American Playing Cards, featuring all 50 states of the Union.</p>

                    <h3 style="color: var(--gold-bright); margin-top: 2rem;">3. Round Structure</h3>
                    <p>The game lasts <strong>5 Rounds</strong>. Each round follows this sequence:</p>
                    <ol>
                        <li><strong>Ante:</strong> Every player contributes $2 to the Pot at the start of the round.</li>
                        <li><strong>Reveal:</strong> A target state is revealed to all players.</li>
                        <li><strong>Guessing:</strong> Players take turns clicking on the map to place their pin.</li>
                        <li><strong>Blind Mechanic:</strong> To ensure fair play in local multiplayer, each player's pin is visible for only <strong>2 seconds</strong> before disappearing.</li>
                    </ol>

                    <h3 style="color: var(--gold-bright); margin-top: 2rem;">4. Scoring & Victory</h3>
                    <p>After all players have guessed, the true location is revealed.</p>
                    <ul style="list-style: none; padding: 0;">
                        <li><strong>Distance 0:</strong> Perfect guess! You are on the target state.</li>
                        <li><strong>Distance 1:</strong> You clicked a state that borders the target.</li>
                        <li><strong>Distance 2+:</strong> You are multiple borders away from the target.</li>
                    </ul>
                    <p>The player(s) with the <strong>closest guess</strong> (minimum distance) win the entire Pot. If multiple players are equally close, the Pot is split.</p>
                    <p>The ultimate winner is the player with the <strong>most wins</strong> after 5 rounds.</p>
                    
                    <p style="text-align: center; margin-top: 3rem; font-size: 0.7rem; opacity: 0.5; letter-spacing: 2px;">DESIGN: SIMON ALLMER</p>
                </div>
            `;
        } else {
            this.els.rulesInnerWrapper.innerHTML = `
                <button class="modal-close" onclick="frontierGame.toggleRules()">&times;</button>
                <h2 style="font-size: 2rem; color: var(--gold); margin-bottom: 20px;">The Frontier Rulebook</h2>
                <div id="rules-inner-content" style="text-align: left; max-width: 800px; margin: 0 auto; line-height: 1.6; color: #ccc;">
                    <h3 style="color: var(--gold-bright); margin-top: 2rem;">1. The Deck (50 Cards)</h3>
                    <p>There are 5 categories, each containing 10 cards numbered 1 through 9, plus the <strong>Cypher (⊘)</strong>:</p>
                    <ul style="list-style: none; padding: 0;">
                        <li><span style="color: var(--deep-south-border)"><svg class="suit-icon" viewBox="0 0 100 100"><path d="M 50 95 Q 5 65 5 40 A 25 25 0 0 1 50 25 A 25 25 0 0 1 95 40 Q 95 65 50 95 Z" fill="currentColor"/></svg></span> & <span style="color: var(--upper-south-border)"><svg class="suit-icon" viewBox="0 0 100 100"><path d="M 50 5 A 60 60 0 0 0 95 50 A 60 60 0 0 0 50 95 A 60 60 0 0 0 5 50 A 60 60 0 0 0 50 5 Z" fill="currentColor"/></svg></span> (Red Alliance)</li>
                        <li><span style="color: var(--indust-east-border)"><svg class="suit-icon" viewBox="0 0 100 100"><path d="M 50 95 C 40 80, 2 50, 10 25 A 30 30 0 0 0 50 8 A 30 30 0 0 0 90 25 C 98 50, 60 80, 50 95 Z" fill="currentColor"/></svg></span> & <span style="color: var(--west-frontier-border)"><svg class="suit-icon" viewBox="0 0 100 100"><path d="M 45 22 L 45 35 Q 45 45 35 45 L 22 45 L 22 55 L 35 55 Q 45 55 45 65 L 45 78 L 55 78 L 55 65 Q 55 55 65 55 L 78 55 L 78 45 L 65 45 Q 55 45 55 35 L 55 22 Z"/><circle cx="50" cy="14" r="12"/><circle cx="39" cy="23" r="9"/><circle cx="61" cy="23" r="9"/><circle cx="50" cy="86" r="12"/><circle cx="39" cy="77" r="9"/><circle cx="61" cy="77" r="9"/><circle cx="14" cy="50" r="12"/><circle cx="23" cy="39" r="9"/><circle cx="23" cy="61" r="9"/><circle cx="86" cy="50" r="12"/><circle cx="77" cy="39" r="9"/><circle cx="77" cy="61" r="9"/></svg></span> (Blue Alliance)</li>
                        <li><span style="color: var(--border-border)"><svg class="suit-icon" viewBox="0 0 100 100"><path d="M 50 12 L 61 31 L 83 31 L 72 50 L 83 69 L 61 69 L 50 88 L 39 69 L 17 69 L 28 50 L 17 31 L 39 31 Z" fill="currentColor"/><circle cx="50" cy="12" r="8" fill="currentColor"/><circle cx="83" cy="31" r="8" fill="currentColor"/><circle cx="83" cy="69" r="8" fill="currentColor"/><circle cx="50" cy="88" r="8" fill="currentColor"/><circle cx="17" cy="69" r="8" fill="currentColor"/><circle cx="17" cy="31" r="8" fill="currentColor"/></svg></span> (Wildcards)</li>
                    </ul>
                    <p style="margin-top: 10px;"><strong>The Cypher (⊘):</strong> Worth 10 by default. It acts as a connector between high (9) and low (1) cards, allowing series like 8-9-⊘-I or ⊘-I-2.</p>

                    <h3 style="color: var(--gold-bright); margin-top: 2rem;">2. Round Structure</h3>
                    <p>The game lasts <strong>5 Rounds</strong>. Hand capacity scales up by 1 card each round.</p>
                    <ol>
                        <li><strong>Turns:</strong> Players TAKE TURNS to bet. You must CALL (match), RAISE (increase), or FOLD.</li>
                        <li><strong>Resolution:</strong> After the last turn, the best hand takes the Pot.</li>
                        <li><strong>Discard & Draw:</strong> After each round, played cards are discarded. You keep your unplayed hand and draw cards to reach your capacity.</li>
                    </ol>

                    <h3 style="color: var(--gold-bright); margin-top: 2rem;">3. Victory & Tie-Breakers</h3>
                    <p>The winner is the player with the <strong>Most Cash</strong> at the end of Round 5!</p>
                    <p><strong>Split Pots:</strong> If two or more commanders deploy hands of identical strength, the Pot is divided equally. Any remaining coin ($1) is awarded to the first tied commander in the turn order.</p>
                    
                    <p><strong>Hierarchy:</strong> More cards always beats fewer cards. Only when two commanders deploy the <strong>same number of cards</strong> does the Tier (category) below decide between them.</p>
                    <ul style="background: rgba(255,255,255,0.03); padding: 20px; border: 1px solid #333; list-style: none; font-size: 0.85rem;">
                        <li><strong style="color: #e879f9;">Tier 1 — Run + Symbol:</strong> A Sequence, all one Symbol (e.g. Spades)</li>
                        <li><strong style="color: #c084fc;">Tier 2 — Same Value:</strong> All cards share a Rank (e.g. a pair)</li>
                        <li><strong style="color: #fbbf24;">Tier 3 — Run + Pure Color:</strong> A Sequence, one Alliance, no Wildcards</li>
                        <li><strong style="color: #fb923c;">Tier 4 — Run + Color Alliance:</strong> A Sequence, one Alliance mixed with Wildcards</li>
                        <li><strong style="color: #60a5fa;">Tier 5 — Mixed Run:</strong> A Sequence spanning both Alliances</li>
                        <li><strong style="color: #34d399;">Tier 6 — Symbol:</strong> All one Symbol, no Sequence</li>
                        <li><strong style="color: #6ee7b7;">Tier 7 — Pure Color:</strong> One Alliance, no Wildcards, no Sequence</li>
                        <li><strong style="color: #a3e635;">Tier 8 — Color Alliance:</strong> One Alliance mixed with Wildcards, no Sequence</li>
                        <li><strong style="color: #a8a29e;">Tier 9 — Chaos (Skirmish):</strong> None of the above. Resolved by raw Power: Pure (Product x 2), Coalition (Product), Divided (Sum). <strong>Rank I</strong> imitates the highest card. <strong>Cypher</strong> is worth 10.</li>
                    </ul>
                    <p><strong>Twin Special Case:</strong> 2 cards of equal Rank can never be "Symbol" (each Symbol has every Rank only once) — they're judged as Same Value (Tier 2) instead.</p>
                    <p><strong>Ties within a Tier:</strong> The total sum of card values decides (Cypher = 10).</p>
                    <p style="text-align: center; margin-top: 3rem; font-size: 0.7rem; opacity: 0.5; letter-spacing: 2px;">DESIGN: SIMON ALLMER</p>
                </div>
            `;
        }
    }

    getOrdinalSuffix(n) {
        const s = ["th", "st", "nd", "rd"];
        const v = n % 100;
        return s[(v - 20) % 10] || s[v] || s[0];
    }

    toggleMenu() {
        this.els.menuDropdown.classList.toggle('active');
    }

    showRules() {
        this.toggleRules();
    }

    showAllCards() {
        this.els.menuDropdown.classList.remove('active');
        this.els.allCardsGrid.innerHTML = '';
        
        // Generate all 50 cards
        Object.keys(SUITS).forEach(suitKey => {
            const suit = SUITS[suitKey];
            for (let val = 1; val <= 10; val++) {
                let presidentId = null;
                let stateName = null;
                if (this.edition === 'PRESIDENT') {
                    if (suitKey === 'BORDER') {
                        presidentId = PRESIDENTS.BLACK[val - 1] || null;
                    } else if (suitKey === 'WEST_FRONTIER') { // Spades
                        presidentId = PRESIDENTS.BLUE[val - 1] || null;
                    } else if (suitKey === 'INDUST_EAST') { // Clubs
                        presidentId = PRESIDENTS.BLUE[10 + val - 1] || null;
                    } else if (suitKey === 'DEEP_SOUTH') { // Hearts
                        presidentId = PRESIDENTS.RED[val - 1] || null;
                    } else if (suitKey === 'UPPER_SOUTH') { // Diamonds
                        presidentId = PRESIDENTS.RED[10 + val - 1] || null;
                    }
                } else if (this.edition === 'STATE') {
                    if (suitKey === 'INDUST_EAST') {
                        stateName = STATES.ATLANTIC_CORRIDOR[val - 1] || null;
                    } else if (suitKey === 'WEST_FRONTIER') {
                        stateName = STATES.PACIFIC_SUN[val - 1] || null;
                    } else if (suitKey === 'DEEP_SOUTH') {
                        stateName = STATES.SOUTHERN_HEART[val - 1] || null;
                    } else if (suitKey === 'UPPER_SOUTH') {
                        stateName = STATES.GREAT_FRONTIER[val - 1] || null;
                    } else if (suitKey === 'BORDER') {
                        stateName = STATES.WILD_SWINGS[val - 1] || null;
                    }
                }

                const president = presidentId ? presidentsData.find(p => p.id === presidentId) : null;
                const state = stateName ? getStateByName(stateName) : null;
                const card = { suit, val, president: president ? president.name : "?", state: stateName, portraitUrl: president ? president.portraitUrl : null, flagUrl: state ? state.flagUrl : null };
                const div = document.createElement('div');
                div.className = `card suit-${card.suit.id}`;
if (this.edition === 'PRESIDENT' || this.edition === 'STATE') div.classList.add('is-president-edition');
            if (this.edition === 'STATE') div.classList.add('is-state-edition');
            div.style.width = "90px";
            div.style.height = "135px";
            div.style.fontSize = "0.7rem";
            div.style.cursor = "default";
            
            if (this.edition === 'PRESIDENT' || this.edition === 'STATE') {
                    const dispText = this.edition === 'PRESIDENT' ? (card.president || "") : (card.state || "");
                    const imageUrl = this.edition === 'PRESIDENT' ? card.portraitUrl : card.flagUrl;
                    div.innerHTML = `
                        <div class="card-corner ${card.val === 10 ? 'is-cypher' : card.val === 1 ? 'is-one' : ''}">
                            <div class="corner-val">${cardDisplayVal(card.val)}</div>
                            <div class="corner-suit">${card.suit.symbol}</div>
                        </div>
                        <div class="card-center">
                            <div class="card-portrait-container">
                                ${imageUrl ? `<img src="${imageUrl}" class="card-portrait" alt="${dispText}">` : ''}
                            </div>
                            <div class="card-president-name">${dispText}</div>
                        </div>
                        <div class="card-corner bottom ${card.val === 10 ? 'is-cypher' : card.val === 1 ? 'is-one' : ''}">
                            <div class="corner-val">${cardDisplayVal(card.val)}</div>
                            <div class="corner-suit">${card.suit.symbol}</div>
                        </div>
                    `;
                } else {
                    div.style.width = "90px";
                    div.style.height = "124px";
                    div.classList.add('has-design');
                    div.innerHTML = `<img src="${getCardImageUrl(card.suit.id, card.val)}" alt="${card.suit.id} ${card.val}" style="width:100%;height:100%;display:block;object-fit:fill;">`;
                }
                this.els.allCardsGrid.appendChild(div);
            }
        });
        
        this.els.allCardsModal.classList.add('visible');
    }

    hideAllCards() {
        this.els.allCardsModal.classList.remove('visible');
    }

    setMessage(msg) {
        this.els.msgArea.innerHTML = msg;
    }

    showSetup() {
        const gameMenuBtn = document.getElementById('frontier-game-menu-btn');
        if (gameMenuBtn) gameMenuBtn.style.display = 'none';
        this.els.mainHud.style.display = 'none';
        this.els.playerStatusGrid.innerHTML = '';
        this.els.cardsContainer.innerHTML = '';
        this.els.controlsArea.innerHTML = '';
        this.els.mulliganBtn.style.display = 'none';

        // Close and clear profile panel if open
        const panel = document.getElementById('president-profile-panel');
        if (panel) {
            panel.classList.remove('visible');
            const panelContent = document.getElementById('profile-content');
            if (panelContent) panelContent.innerHTML = '<div class="profile-placeholder">Select a Card to view Profile</div>';
            
            const svgs = panel.querySelectorAll('.panel-close svg');
            svgs.forEach(svg => svg.style.stroke = 'var(--gold-dim)');
            
            const fab = document.querySelector('.panel-toggle-fab');
            if (fab) fab.style.display = 'none'; // Only show fab when game starts
        }

        this.els.overlayTitle.innerText = "AMERICAN PLAYING CARDS";
        this.els.overlayTitle.style.color = "var(--gold-bright)";
        this.els.overlayDesc.innerHTML = "A New System for the Frontier.";

        const actions = document.getElementById('overlay-actions');
        actions.innerHTML = '';
        
        const wrapper = document.createElement('div');
        wrapper.id = "setup-wrapper";
        wrapper.style.display = 'flex';
        wrapper.style.flexDirection = 'column';
        wrapper.style.alignItems = 'center';
        wrapper.style.gap = '20px';
        
        const gameRow = document.createElement('div');
        gameRow.style.display = 'flex';
        gameRow.style.flexDirection = 'column';
        gameRow.style.alignItems = 'center';
        gameRow.style.gap = '10px';
        gameRow.style.marginBottom = '20px';

        const gameLabel = document.createElement('div');
        gameLabel.innerText = "GAME";
        gameLabel.style.fontSize = "0.7rem";
        gameLabel.style.color = "var(--gold-dim)";
        gameLabel.style.letterSpacing = "2px";
        gameRow.appendChild(gameLabel);

        const gameToggle = document.createElement('div');
        gameToggle.className = 'toggle-container';
        gameToggle.style.width = '100%';
        gameToggle.style.maxWidth = '600px';

        const frontierBtn = document.createElement('button');
        frontierBtn.className = `toggle-btn ${this.currentGame === 'FRONTIER' ? 'active' : ''}`;
        frontierBtn.innerText = 'Frontier';

        const quizBtn = document.createElement('button');
        quizBtn.className = `toggle-btn ${this.currentGame === 'STATE_QUIZ' ? 'active' : ''}`;
        quizBtn.innerText = 'State Quiz';

        const presQuizBtn = document.createElement('button');
        presQuizBtn.className = `toggle-btn ${this.currentGame === 'PRESIDENT_QUIZ' ? 'active' : ''}`;
        presQuizBtn.innerText = 'President Quiz';

        const duelBtn = document.createElement('button');
        duelBtn.className = `toggle-btn ${this.currentGame === 'DUEL' ? 'active' : ''}`;
        duelBtn.innerText = 'Duel';

        frontierBtn.onclick = () => {
            this.currentGame = 'FRONTIER';
            frontierBtn.classList.add('active');
            quizBtn.classList.remove('active');
            presQuizBtn.classList.remove('active');
            duelBtn.classList.remove('active');
            editionRow.style.display = 'flex';
            stdBtn.disabled = false;
            presBtn.disabled = false;
            stateBtn.disabled = false;
            stdBtn.style.opacity = '1';
            presBtn.style.opacity = '1';
            stateBtn.style.opacity = '1';
        };

        quizBtn.onclick = () => {
            this.currentGame = 'STATE_QUIZ';
            quizBtn.classList.add('active');
            frontierBtn.classList.remove('active');
            presQuizBtn.classList.remove('active');
            duelBtn.classList.remove('active');
            editionRow.style.display = 'flex';
            stateBtn.disabled = false;
            stateBtn.style.opacity = '1';
            this.edition = 'STATE';
            stateBtn.click();
            stdBtn.disabled = true;
            presBtn.disabled = true;
            stdBtn.style.opacity = '0.5';
            presBtn.style.opacity = '0.5';
        };

        presQuizBtn.onclick = () => {
            this.currentGame = 'PRESIDENT_QUIZ';
            presQuizBtn.classList.add('active');
            frontierBtn.classList.remove('active');
            quizBtn.classList.remove('active');
            duelBtn.classList.remove('active');
            editionRow.style.display = 'flex';
            presBtn.disabled = false;
            presBtn.style.opacity = '1';
            this.edition = 'PRESIDENT';
            presBtn.click();
            stdBtn.disabled = true;
            stateBtn.disabled = true;
            stdBtn.style.opacity = '0.5';
            stateBtn.style.opacity = '0.5';
        };

        duelBtn.onclick = () => {
            this.currentGame = 'DUEL';
            duelBtn.classList.add('active');
            frontierBtn.classList.remove('active');
            quizBtn.classList.remove('active');
            presQuizBtn.classList.remove('active');
            // Duel has no editions — hide the edition selector.
            editionRow.style.display = 'none';
        };

        gameToggle.appendChild(frontierBtn);
        gameToggle.appendChild(duelBtn);
        gameToggle.appendChild(presQuizBtn);
        gameToggle.appendChild(quizBtn);
        gameRow.appendChild(gameToggle);

        const editionRow = document.createElement('div');
        editionRow.style.display = 'flex';
        editionRow.style.flexDirection = 'column';
        editionRow.style.alignItems = 'center';
        editionRow.style.gap = '10px';
        editionRow.style.marginBottom = '20px';

        const editionLabel = document.createElement('div');
        editionLabel.innerText = "EDITION";
        editionLabel.style.fontSize = "0.7rem";
        editionLabel.style.color = "var(--gold-dim)";
        editionLabel.style.letterSpacing = "2px";
        editionRow.appendChild(editionLabel);

        const editionToggle = document.createElement('div');
        editionToggle.className = 'toggle-container';
        editionToggle.style.width = '100%';
        editionToggle.style.maxWidth = '450px';

        const stdBtn = document.createElement('button');
        stdBtn.className = `toggle-btn ${this.edition === 'STANDARD' ? 'active' : ''}`;
        stdBtn.innerText = 'Standard';
        
        const presBtn = document.createElement('button');
        presBtn.className = `toggle-btn ${this.edition === 'PRESIDENT' ? 'active' : ''}`;
        presBtn.innerText = 'President';
        
        const stateBtn = document.createElement('button');
        stateBtn.className = `toggle-btn ${this.edition === 'STATE' ? 'active' : ''}`;
        stateBtn.innerText = 'State';

        stdBtn.onclick = () => {
            this.edition = 'STANDARD';
            stdBtn.classList.add('active');
            presBtn.classList.remove('active');
            stateBtn.classList.remove('active');
        };

        presBtn.onclick = () => {
            this.edition = 'PRESIDENT';
            presBtn.classList.add('active');
            stdBtn.classList.remove('active');
            stateBtn.classList.remove('active');
        };

        stateBtn.onclick = () => {
            this.edition = 'STATE';
            stateBtn.classList.add('active');
            stdBtn.classList.remove('active');
            presBtn.classList.remove('active');
        };

        editionToggle.appendChild(stdBtn);
        editionToggle.appendChild(presBtn);
        editionToggle.appendChild(stateBtn);
        editionRow.appendChild(editionToggle);

        // Duel has no editions — hide the edition selector when it's active.
        if (this.currentGame === 'DUEL') editionRow.style.display = 'none';

        const countLabel = document.createElement('div');
        countLabel.innerText = "PLAYER COUNT";
        countLabel.style.fontSize = "0.7rem";
        countLabel.style.color = "var(--gold-dim)";
        countLabel.style.letterSpacing = "2px";
        countLabel.style.marginTop = "10px";

        const countRow = document.createElement('div');
        countRow.id = 'count-row';
        countRow.style.display = 'flex';
        countRow.style.gap = '10px';
        countRow.style.flexWrap = 'wrap';
        countRow.style.justifyContent = 'center';
        
        [2, 3, 4, 5, 6].forEach(count => {
            const btn = document.createElement('button');
            btn.className = "primary-btn count-btn";
            btn.style.padding = "10px 20px";
            btn.style.minWidth = "60px";
            btn.innerText = count;
            btn.onclick = () => {
                document.querySelectorAll('.count-btn').forEach(b => b.style.background = 'transparent');
                btn.style.background = 'rgba(255,255,255,0.2)';
                this.preparePlayerNames(count);
            };
            countRow.appendChild(btn);
        });
        
        const namesWrapper = document.createElement('div');
        namesWrapper.id = "names-wrapper";
        namesWrapper.style.width = '100%';
        namesWrapper.style.display = 'flex';
        namesWrapper.style.flexDirection = 'column';
        namesWrapper.style.alignItems = 'center';
        namesWrapper.style.marginTop = '10px';

        const beginBtnWrapper = document.createElement('div');
        beginBtnWrapper.id = "begin-btn-wrapper";
        beginBtnWrapper.style.width = '100%';
        beginBtnWrapper.style.display = 'flex';
        beginBtnWrapper.style.justifyContent = 'center';
        
        const rulesBtn = document.createElement('div');
        rulesBtn.innerText = "RULES";
        rulesBtn.style.color = "var(--gold)";
        rulesBtn.style.letterSpacing = "4px";
        rulesBtn.style.fontSize = "0.9rem";
        rulesBtn.style.cursor = "pointer";
        rulesBtn.style.marginTop = "20px";
        rulesBtn.style.borderBottom = "1px solid rgba(212, 175, 55, 0.3)";
        rulesBtn.style.paddingBottom = "5px";
        rulesBtn.style.transition = "color 0.3s";
        rulesBtn.onmouseover = () => rulesBtn.style.color = "var(--gold-bright)";
        rulesBtn.onmouseout = () => rulesBtn.style.color = "var(--gold)";
        rulesBtn.onclick = () => {
            if (this.currentGame === 'DUEL') {
                navigateTo('duel');
                duelGame.showRules();
            } else {
                this.showRules();
            }
        };

        const credit = document.createElement('div');
        credit.innerText = "GAME DESIGN: SIMON ALLMER";
        credit.style.color = "var(--text-color)";
        credit.style.fontSize = "0.6rem";
        credit.style.opacity = "0.4";
        credit.style.letterSpacing = "2px";
        credit.style.marginTop = "30px";
        
        wrapper.appendChild(gameRow);
        wrapper.appendChild(editionRow);
        wrapper.appendChild(countLabel);
        wrapper.appendChild(countRow);
        wrapper.appendChild(namesWrapper);
        wrapper.appendChild(beginBtnWrapper);
        wrapper.appendChild(rulesBtn);
        wrapper.appendChild(credit);
        actions.appendChild(wrapper);

        this.els.overlay.classList.add('visible');
        document.getElementById('overlay-main-btn').style.display = 'none';
        
        // Default to 2 players
        setTimeout(() => {
            if (countRow.children[0]) countRow.children[0].click();
        }, 10);
    }

    preparePlayerNames(count) {
        // No longer change the overlayDesc because the title is static above
        const namesWrapper = document.getElementById('names-wrapper');
        if (!namesWrapper) return;
        namesWrapper.innerHTML = '';
        
        const namesContainer = document.createElement('div');
        namesContainer.style.display = 'flex';
        namesContainer.style.flexDirection = 'column';
        namesContainer.style.gap = '20px';
        namesContainer.style.width = '90%';
        namesContainer.style.maxWidth = '300px';

        const colors = ['#3b82f6', '#ef4444', '#10b981', '#8b5cf6', '#f59e0b', '#06b6d4'];
        const playerConfigs = [];

        for (let i = 0; i < count; i++) {
            const playerGroup = document.createElement('div');
            playerGroup.style.display = 'flex';
            playerGroup.style.flexDirection = 'column';
            playerGroup.style.gap = '6px';
            
            const input = document.createElement('input');
            input.type = 'text';
            input.className = 'frontier-input is-default';
            const defaultName = `Player ${i + 1}`;
            input.value = defaultName;
            input.dataset.isDefault = 'true';
            input.style.borderLeft = `4px solid ${colors[i]}`;
            
            const config = { isAI: false, input: input };
            playerConfigs.push(config);

            input.onfocus = () => {
                if (input.dataset.isDefault === 'true') {
                    setTimeout(() => input.setSelectionRange(0, 0), 0);
                }
            };

            input.onkeydown = (e) => {
                if (input.dataset.isDefault === 'true' && e.key.length === 1 && !e.ctrlKey && !e.metaKey && !e.altKey) {
                    input.value = '';
                    input.dataset.isDefault = 'false';
                    input.classList.remove('is-default');
                }
            };

            input.onblur = () => {
                if (input.value.trim() === '') {
                    this.updateAIPresence(playerConfigs);
                }
            };

            playerGroup.appendChild(input);

            // AI Toggle for players 2+
            if (i > 0) {
                const toggle = document.createElement('div');
                toggle.className = 'toggle-container';
                
                const humanBtn = document.createElement('button');
                humanBtn.className = 'toggle-btn active';
                humanBtn.innerText = 'Human';
                
                const aiBtn = document.createElement('button');
                aiBtn.className = 'toggle-btn';
                aiBtn.innerText = 'Computer';
                
                humanBtn.onclick = () => {
                    config.isAI = false;
                    humanBtn.classList.add('active');
                    aiBtn.classList.remove('active');
                    this.updateAIPresence(playerConfigs);
                };
                
                aiBtn.onclick = () => {
                    config.isAI = true;
                    aiBtn.classList.add('active');
                    humanBtn.classList.remove('active');
                    this.updateAIPresence(playerConfigs);
                };
                
                toggle.appendChild(humanBtn);
                toggle.appendChild(aiBtn);
                playerGroup.appendChild(toggle);
            }

            namesContainer.appendChild(playerGroup);
        }

        namesWrapper.appendChild(namesContainer);

        const beginBtnWrapper = document.getElementById('begin-btn-wrapper');
        if (!beginBtnWrapper) return;
        beginBtnWrapper.innerHTML = '';

        const beginBtn = document.createElement('button');
        beginBtn.className = "primary-btn";
        beginBtn.style.marginTop = "20px";
        beginBtn.style.padding = "15px 40px";
        beginBtn.innerText = "BEGIN GAME";
            beginBtn.onclick = () => {
                const finalPlayers = playerConfigs.map(c => ({
                    name: c.input.value.trim(),
                    isAI: c.isAI
                }));
                if (this.currentGame === 'DUEL') {
                    this.els.overlay.classList.remove('visible');
                    navigateTo('duel');
                    duelGame.startWithPlayers(finalPlayers);
                } else if (this.currentGame === 'STATE_QUIZ') {
                    this.els.overlay.classList.remove('visible');
                    location.hash = '#state-quiz';
                    stateQuiz.initGame(finalPlayers);
                } else if (this.currentGame === 'PRESIDENT_QUIZ') {
                    this.els.overlay.classList.remove('visible');
                    location.hash = '#president-quiz';
                    presidentQuiz.initGame(finalPlayers);
                } else {
                    this.initGame(count, finalPlayers);
                }
            };
        beginBtnWrapper.appendChild(beginBtn);
    }

    updateAIPresence(configs) {
        let aiCount = 0;
        configs.forEach((c, idx) => {
            const currentVal = c.input.value.trim();
            // A name is "default" if it's empty, "Player X", or "Computer X"
            const isDefault = currentVal === '' || currentVal === `Player ${idx + 1}` || /^Computer \d+$/.test(currentVal);
            
            if (c.isAI) {
                aiCount++;
                if (isDefault) {
                    c.input.value = `Computer ${aiCount}`;
                    c.input.dataset.isDefault = 'false';
                    c.input.classList.remove('is-default');
                }
            } else {
                // If it was an auto-generated Computer name, revert to Player default
                if (/^Computer \d+$/.test(currentVal) || currentVal === '') {
                    c.input.value = `Player ${idx + 1}`;
                    c.input.dataset.isDefault = 'true';
                    c.input.classList.add('is-default');
                }
            }
        });
    }

    initGame(playerCount, customPlayerConfigs) {
        if (playerCount === undefined) {
            playerCount = this.lastPlayerCount || 2;
        }
        this.lastPlayerCount = playerCount;

        const mainBtn = document.getElementById('overlay-main-btn');
        if (mainBtn) mainBtn.style.display = 'block';
        
        const actions = document.getElementById('overlay-actions');
        if (actions) actions.innerHTML = '';
        
        this.els.overlay.classList.remove('visible');

        const gameMenuBtn = document.getElementById('frontier-game-menu-btn');
        if (gameMenuBtn) gameMenuBtn.style.display = 'block';

        const colors = ['#3b82f6', '#ef4444', '#10b981', '#8b5cf6', '#f59e0b', '#06b6d4'];

        this.players = [];
        for (let i = 0; i < playerCount; i++) {
            const config = (customPlayerConfigs && customPlayerConfigs[i]) ? customPlayerConfigs[i] : { name: `Player ${i+1}`, isAI: false };
            this.players.push({
                globalId: i + 1,
                name: config.name,
                isAI: config.isAI,
                cash: 10,
                color: { hex: colors[i] },
                hand: [],
                canMulligan: true,
                status: 'ACTIVE'
            });
        }

        if (this.players.length < 2) {
            alert("Need at least 2 players to play Frontier!");
            return;
        }

        this.deck = createDeck(this.edition);
        this.discardPile = [];
        this.pot = 0;
        this.currentRoundNum = 1;
        this.gameHistory = [];

        // Initial Draw (Round 1 = 1 card)
        this.players.forEach(p => {
            p.hand = this.deck.splice(0, 1);
        });

        // Market Card: top of the draw pile, revealed before the first bet, usable by any player.
        this.marketCard = this.deck.length > 0 ? this.deck.shift() : null;
        this.marketCardSelected = false;

        this.roundActivePlayers = this.players
            .map((p, i) => (p.status === 'ACTIVE' ? i : -1))
            .filter(idx => idx !== -1);
        this.roundPlays = [];
        this.roundBet = 0;
        this.headsUpFinalTurn = false;

        // Ensure starting player is not bankrupt
        this.activePlayerId = 0;
        while (this.players[this.activePlayerId].status === 'BANKRUPT') {
            this.activePlayerId = (this.activePlayerId + 1) % this.players.length;
        }

        this.els.mainHud.style.display = 'flex';
        this.phase = 'TRANSITION';

        // Removed obsolete save call
        this.renderTransition();
    }

    renderTransition() {
        if (this.players[this.activePlayerId].status === 'BANKRUPT') {
            this.advanceRound();
            return;
        }
        const player = this.players[this.activePlayerId];
        this.updateHUD();
        this.updatePlayerPods();

        this.els.cardsContainer.innerHTML = '';
        this.els.controlsArea.innerHTML = '';
        this.els.controlsArea.style.display = 'none';
        this.els.historyPanel.style.display = 'none';
        this.els.mulliganBtn.style.display = 'none';

        if (player.isAI) {
            this.executeAITurn();
            return;
        }

        this.els.overlayTitle.innerText = `PASS TO ${player.name.toUpperCase()}`;
        this.els.overlayTitle.style.color = player.color.hex || 'var(--gold)';
        this.els.overlayDesc.innerText = this.headsUpFinalTurn
            ? `Your opponent raised. Click below to see the final call.`
            : `When ready, click below to reveal Round ${this.currentRoundNum} hand.`;

        const btn = document.getElementById('overlay-main-btn');
        btn.style.display = 'block';
        btn.innerText = this.headsUpFinalTurn ? "CONTINUE" : "REVEAL CARDS";
        btn.onclick = () => this.startTurn();

        this.els.overlay.classList.add('visible');
        this.setMessage("");
    }

    executeAITurn() {
        const player = this.players[this.activePlayerId];
        this.els.overlayTitle.innerText = `${player.name.toUpperCase()} IS THINKING...`;
        this.els.overlayTitle.style.color = player.color.hex;
        this.els.overlayDesc.innerText = "Analyzing current tactical landscape...";
        this.els.overlay.classList.add('visible');
        document.getElementById('overlay-main-btn').style.display = 'none';

        if (this.headsUpFinalTurn) {
            this.executeAIHeadsUpFinalTurn(player);
            return;
        }

        // Phase 1: Analyzing Hand
        setTimeout(() => {
            this.els.overlayDesc.innerText = "Evaluating hand strength and alliance potential...";
            
            setTimeout(() => {
                // Phase 2: Selecting Cards
                const bestSelection = this.getAISelection(player);
                this.selectedCardIndices = bestSelection.indices;
                this.marketCardSelected = bestSelection.useMarket;
                const totalCards = bestSelection.indices.length + (bestSelection.useMarket ? 1 : 0);
                this.els.overlayDesc.innerText = `Selecting ${totalCards} card${totalCards > 1 ? 's' : ''} for the engagement...`;

                setTimeout(() => {
                    // Phase 3: Deciding Action
                    const isFirstPlayer = this.roundPlays.length === 0;
                    const decision = this.getAIBettingDecision(player, bestSelection.eval);
                    
                    let actionMsg = "";
                    let type = "";
                    if (decision.action === 'FOLD') {
                        actionMsg = "Decided to retreat from the current round.";
                        type = "Folds";
                    } else {
                        type = isFirstPlayer ? 'Bets' : (decision.action === 'RAISE' ? 'Raises to' : 'Calls');
                        actionMsg = `${type} $${decision.amount} with ${bestSelection.eval.tier}.`;
                    }
                    this.els.overlayDesc.innerText = actionMsg;

                    setTimeout(() => {
                        this.els.overlay.classList.remove('visible');
                        if (decision.action === 'FOLD') {
                            this.executeFold();
                        } else {
                            this.executePlay(decision.amount);
                        }
                        
                        // Show a quick announcement message in the main UI
                        this.setMessage(`<div style="color: ${player.color.hex}; font-weight: bold;">${player.name} ${type} $${decision.amount || 0}.</div>`);
                    }, 800);
                }, 1000);
            }, 1000);
        }, 1000);
    }

    // Heads-up (2-player) only: AI's final call-or-fold response to a raise — no card
    // selection (already committed) and no further raising.
    executeAIHeadsUpFinalTurn(player) {
        this.els.overlayDesc.innerText = "Weighing the final call...";

        setTimeout(() => {
            const myPlay = this.roundPlays.find(p => p.playerId === this.activePlayerId);
            const otherPlay = this.roundPlays.find(p => p.playerId !== this.activePlayerId);
            const diff = Math.max(0, Math.min(player.cash, otherPlay.amount - myPlay.amount));
            const handEval = evaluateHand(myPlay.cards);
            const decision = this.getAIBettingDecision(player, handEval);
            const willFold = decision.action === 'FOLD';

            this.els.overlayDesc.innerText = willFold
                ? "Decided to retreat from the current round."
                : `Calls the raise for $${diff}.`;

            setTimeout(() => {
                this.els.overlay.classList.remove('visible');
                if (willFold) {
                    this.executeHeadsUpFinalFold();
                } else {
                    this.executeHeadsUpFinalCall();
                }
                this.setMessage(`<div style="color: ${player.color.hex}; font-weight: bold;">${player.name} ${willFold ? 'folds' : `calls $${diff}`}.</div>`);
            }, 800);
        }, 1000);
    }

    getAISelection(player) {
        // Simple logic: return all cards if they form a good hand,
        // or find the subset with highest score.
        // For AI, we'll just check the full hand first, then pairs.
        const fullEval = evaluateHand(player.hand);
        let bestIndices = player.hand.map((_, i) => i);
        let bestEval = fullEval;
        let useMarket = false;

        // Consider adding the Market Card to the full hand, if one is available.
        if (this.marketCard) {
            const withMarketEval = evaluateHand([...player.hand, this.marketCard]);
            if (withMarketEval.score > bestEval.score) {
                bestEval = withMarketEval;
                useMarket = true;
            }
        }

        // For simplicity in this 'average' AI, it plays its whole hand if it's better than Chaos (Tier 9)
        // Otherwise it plays its highest card.
        if (bestEval.tier === 'Tier 9') {
            const highCardIdx = player.hand.reduce((maxIdx, card, idx, arr) =>
                card.val > arr[maxIdx].val ? idx : maxIdx, 0);
            bestIndices = [highCardIdx];
            bestEval = evaluateHand([player.hand[highCardIdx]]);
            useMarket = false;
        }

        return { indices: bestIndices, eval: bestEval, useMarket };
    }

    getAIBettingDecision(player, handEval) {
        const isFirstPlayer = this.roundPlays.length === 0;
        
        const otherActiveIds = this.roundActivePlayers.filter(idx => idx !== this.activePlayerId);
        const maxOtherCash = otherActiveIds.length > 0 
            ? Math.max(...otherActiveIds.map(idx => this.players[idx].cash)) 
            : 0;
        const maxBetAllowed = Math.min(5, maxOtherCash);

        // Confidence based on Tier (category) and card count, per the Section 5 hierarchy
        const stufe = handEval.stufe || 9;
        const count = handEval.count || 1;
        let confidence;
        if (stufe === 9) {
            confidence = 0.1;
        } else {
            const countConfidence = { 5: 1.0, 4: 0.85, 3: 0.65, 2: 0.45 }[count] || 0.3;
            confidence = Math.min(1, countConfidence + (9 - stufe) * 0.01);
        }

        // Average risk-averse logic
        if (isFirstPlayer) {
            if (confidence > 0.8) {
                return { action: 'BET', amount: Math.min(player.cash, 3) };
            }
            return { action: 'BET', amount: Math.min(player.cash, 1) };
        } else {
            const callAmount = Math.min(player.cash, this.roundBet);

            // Decision
            if (confidence > 0.8) {
                // High confidence: Call and maybe Raise
                if (this.roundBet < maxBetAllowed && Math.random() > 0.5) {
                    return { action: 'RAISE', amount: Math.min(player.cash, this.roundBet + 1) };
                }
                return { action: 'CALL', amount: callAmount };
            } else if (confidence > 0.3) {
                // Medium confidence: Call small bets
                if (this.roundBet <= 2) return { action: 'CALL', amount: callAmount };
                return { action: 'FOLD' };
            } else {
                // Low confidence: Fold unless it's cheap
                if (this.roundBet <= 1) return { action: 'CALL', amount: callAmount };
                return { action: 'FOLD' };
            }
        }
    }

    startTurn() {
        this.els.overlay.classList.remove('visible');
        if (this.headsUpFinalTurn) {
            this.phase = 'HEADS_UP_CALL';
            this.renderHeadsUpFinalCall();
            return;
        }
        this.phase = 'PLAYING';
        this.selectedCardIndices = [];
        this.marketCardSelected = false;
        this.renderPlaying();
    }

    // Heads-up (2-player) only: the last player raised, so the opener gets one final
    // call-or-fold turn — no further raising — before the showdown.
    renderHeadsUpFinalCall() {
        const player = this.players[this.activePlayerId];
        const myPlay = this.roundPlays.find(p => p.playerId === this.activePlayerId);
        const otherPlay = this.roundPlays.find(p => p.playerId !== this.activePlayerId);
        const opponent = this.players[otherPlay.playerId];
        const diff = Math.max(0, Math.min(player.cash, otherPlay.amount - myPlay.amount));

        this.updateHUD();
        this.updatePlayerPods();
        this.els.mulliganBtn.style.display = 'none';
        this.renderCards(player.hand, false);
        this.els.controlsArea.style.display = 'flex';

        this.setMessage(`${opponent.name} raised to $${otherPlay.amount}. Call or fold — no further raises.`);

        let controlsHTML = `<button class="action-btn call-btn" onclick="frontierGame.executeHeadsUpFinalCall()">CALL $${diff}</button>`;
        controlsHTML += `<button class="danger-btn" onclick="frontierGame.executeHeadsUpFinalFold()">FOLD</button>`;
        this.els.controlsArea.innerHTML = controlsHTML;
    }

    executeHeadsUpFinalCall() {
        const player = this.players[this.activePlayerId];
        const myPlay = this.roundPlays.find(p => p.playerId === this.activePlayerId);
        const otherPlay = this.roundPlays.find(p => p.playerId !== this.activePlayerId);
        const diff = Math.max(0, Math.min(player.cash, otherPlay.amount - myPlay.amount));

        player.cash -= diff;
        this.pot += diff;
        myPlay.amount += diff;
        this.roundBet = Math.max(this.roundBet, myPlay.amount);

        this.headsUpFinalTurn = false;
        this.advanceRound();
    }

    executeHeadsUpFinalFold() {
        this.roundActivePlayers = this.roundActivePlayers.filter(idx => idx !== this.activePlayerId);
        this.headsUpFinalTurn = false;
        this.advanceRound();
    }

    toggleMarketCard() {
        if (this.phase !== 'PLAYING' || !this.marketCard) return;
        const player = this.players[this.activePlayerId];
        if (player.isAI) return;
        this.marketCardSelected = !this.marketCardSelected;
        this.renderPlaying();
    }

    renderCards(cards, isClickable = false, hideSelected = false) {
        this.els.cardsContainer.innerHTML = '';
        cards.forEach((card, idx) => {
            if (hideSelected && this.selectedCardIndices.includes(idx)) return;

            const div = document.createElement('div');
            div.className = `card suit-${card.suit.id}`;
            if (this.edition === 'PRESIDENT' || this.edition === 'STATE') div.classList.add('is-president-edition');
            if (this.edition === 'STATE') div.classList.add('is-state-edition');
            if (this.selectedCardIndices.includes(idx)) div.classList.add('selected');

            if (this.edition === 'PRESIDENT' || this.edition === 'STATE') {
                const dispText = this.edition === 'PRESIDENT' ? (card.president || "") : (card.state || "");
                const imageUrl = this.edition === 'PRESIDENT' ? (card.portraitUrl || (card.president ? (presidentsData.find(p => p.name === card.president)?.portraitUrl || null) : null)) : (card.flagUrl || null);
                div.innerHTML = `
                    <div class="card-corner ${card.val === 10 ? 'is-cypher' : card.val === 1 ? 'is-one' : ''}">
                        <div class="corner-val">${cardDisplayVal(card.val)}</div>
                        <div class="corner-suit">${card.suit.symbol}</div>
                    </div>
                    <div class="card-center">
                        <div class="card-portrait-container">
                            ${imageUrl ? `<img src="${imageUrl}" class="card-portrait" alt="${dispText}">` : ''}
                        </div>
                        <div class="card-president-name">${dispText}</div>
                    </div>
                    <div class="card-corner bottom ${card.val === 10 ? 'is-cypher' : card.val === 1 ? 'is-one' : ''}">
                        <div class="corner-val">${cardDisplayVal(card.val)}</div>
                        <div class="corner-suit">${card.suit.symbol}</div>
                    </div>
                `;
            } else {
                div.classList.add('has-design');
                div.innerHTML = `<img src="${getCardImageUrl(card.suit.id, card.val)}" alt="${card.suit.id} ${card.val}" style="width:100%;height:100%;display:block;object-fit:fill;">`;
            }

            if (isClickable) {
                div.onclick = () => {
                    if (this.selectedCardIndices.includes(idx)) {
                        this.selectedCardIndices = this.selectedCardIndices.filter(i => i !== idx);
                    } else {
                        this.selectedCardIndices.push(idx);
                    }
                    if (this.edition === 'PRESIDENT' || this.edition === 'STATE') {
                        this.updateProfilePanel();
                    }
                    this.renderPlaying();
                };
            }
            this.els.cardsContainer.appendChild(div);
        });
    }

    renderPlaying() {
        const player = this.players[this.activePlayerId];
        const currentHandSize = this.currentRoundNum;

        this.updateHUD();
        this.updatePlayerPods();
        this.renderCards(player.hand, true);

        // Mulligan Option
        this.els.mulliganBtn.style.display = 'block';
        this.els.mulliganBtn.disabled = !player.canMulligan;

        this.els.controlsArea.style.display = 'flex';

        const isFirstPlayer = this.roundPlays.length === 0;
        const isLastPlayer = this.roundPlays.length === this.roundActivePlayers.length - 1;
        
        // LIMITATION: Cannot bet more than the richest other active player has (Standard Table Stakes)
        const otherActiveIds = this.roundActivePlayers.filter(idx => idx !== this.activePlayerId);
        const maxOtherCash = otherActiveIds.length > 0 
            ? Math.max(...otherActiveIds.map(idx => this.players[idx].cash)) 
            : 0;
        const maxBetAllowed = Math.min(5, maxOtherCash);

        // Evaluate Selection (including the Market Card, if the player has chosen to use it)
        const ownSelectedCards = this.selectedCardIndices.map(i => player.hand[i]);
        const selectedCards = (this.marketCardSelected && this.marketCard) ? [...ownSelectedCards, this.marketCard] : ownSelectedCards;
        let handEval = null;
        if (selectedCards.length > 0) {
            handEval = evaluateHand(selectedCards);
        }

        let controlsHTML = '';

        if (isFirstPlayer) {
            if (handEval) {
                const details = handEval.tier === 'Tier 9' ? `Power: ${handEval.power}` : handEval.name;
                this.setMessage(`<div style="font-size: 1.8rem; font-weight: bold; color: var(--gold-bright);">${handEval.tier}</div><div style="font-size: 1rem; opacity: 0.8;">${details}</div>`);
            } else {
                this.setMessage(`Select cards to play and set the bet.`);
            }
            
            for (let b = 1; b <= maxBetAllowed; b++) {
                const disabledStr = (this.selectedCardIndices.length === 0 || player.cash < b) ? 'disabled' : '';
                controlsHTML += `<button class="action-btn" ${disabledStr} onclick="frontierGame.executePlay(${b})">BET $${b}</button>`;
            }
            controlsHTML += `<button class="danger-btn" onclick="frontierGame.executeFold()">FOLD</button>`;
        } else {
            if (handEval) {
                const details = handEval.tier === 'Tier 9' ? `Power: ${handEval.power}` : handEval.name;
                this.setMessage(`<div style="font-size: 1.8rem; font-weight: bold; color: var(--gold-bright);">${handEval.tier}</div><div style="font-size: 1rem; opacity: 0.8;">${details}</div>`);
            } else {
                this.setMessage(`Match the bet, raise, or retreat.`);
            }
            
            // Can always call up to your own cash or the round bet
            const callAmount = Math.min(player.cash, this.roundBet);
            const callDisabled = (this.selectedCardIndices.length === 0 || player.cash < callAmount) ? 'disabled' : '';
            controlsHTML += `<button class="action-btn call-btn" ${callDisabled} onclick="frontierGame.executePlay(${callAmount})">CALL $${callAmount}</button>`;

            // In heads-up (2-player) games, the last player may still raise once — the opener
            // then gets a final call-or-fold turn (see the heads-up final-call flow below).
            if (!isLastPlayer || this.players.length === 2) {
                for (let b = this.roundBet + 1; b <= maxBetAllowed; b++) {
                    const raiseDisabled = (this.selectedCardIndices.length === 0 || player.cash < b) ? 'disabled' : '';
                    controlsHTML += `<button class="action-btn raise-btn" ${raiseDisabled} onclick="frontierGame.executePlay(${b})">RAISE $${b}</button>`;
                }
            }
            controlsHTML += `<button class="danger-btn" onclick="frontierGame.executeFold()">FOLD</button>`;
        }

        if (this.edition === 'PRESIDENT' || this.edition === 'STATE') {
            const profileLabel = this.edition === 'STATE' ? 'PROFILE' : 'PROFILE';
            const panel = document.getElementById('president-profile-panel');
            const isActive = panel && panel.classList.contains('visible');
            const activeStyle = isActive ? 'style="color: var(--gold-bright); border-color: var(--gold-bright); background: rgba(255, 215, 0, 0.1);"' : '';
            controlsHTML += `<button class="action-btn" ${activeStyle} onclick="frontierGame.toggleProfilePanel()">${profileLabel}</button>`;
        }

        this.els.controlsArea.innerHTML = controlsHTML;
    }

    useMulligan() {
        const player = this.players[this.activePlayerId];
        if (!player.canMulligan) return;

        const oldHand = [...player.hand];
        // Combine current deck, discard pile, and the player's old hand
        const combinedDeck = [...this.deck, ...this.discardPile, ...oldHand];

        // Shuffle everything
        for (let i = combinedDeck.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [combinedDeck[i], combinedDeck[j]] = [combinedDeck[j], combinedDeck[i]];
        }

        // Draw new hand of same size
        player.hand = combinedDeck.splice(0, oldHand.length);
        this.deck = combinedDeck;
        this.discardPile = [];

        player.canMulligan = false;
        this.selectedCardIndices = [];
        this.renderPlaying();
    }

    executePlay(amount) {
        if (this.selectedCardIndices.length === 0) return;
        const player = this.players[this.activePlayerId];

        if (player.cash < amount) return;

        const ownCards = this.selectedCardIndices.map(i => player.hand[i]);
        const usedMarketCard = !!(this.marketCardSelected && this.marketCard);
        // The Market Card is shared and stays in play for other players this round —
        // only the player's own cards get discarded here (see advanceToNextRound).
        const cardsToPlay = usedMarketCard ? [...ownCards, this.marketCard] : ownCards;
        const remainingHand = player.hand.filter((_, i) => !this.selectedCardIndices.includes(i));

        this.discardPile.push(...ownCards);

        player.hand = remainingHand;
        player.cash -= amount;
        this.pot += amount;

        this.roundPlays.push({ playerId: this.activePlayerId, cards: cardsToPlay, amount, usedMarketCard });
        this.roundBet = Math.max(this.roundBet, amount);
        this.marketCardSelected = false;
        // Removed obsolete save call

        this.advanceRound();
    }

    executeFold() {
        this.roundActivePlayers = this.roundActivePlayers.filter(idx => idx !== this.activePlayerId);
        this.advanceRound();
    }

    advanceRound() {
        // Heads-up (2-player) only: if the last player just raised, the opener gets one
        // final call-or-fold turn before the showdown — no further raising.
        if (this.players.length === 2 && !this.headsUpFinalTurn && this.roundActivePlayers.length === 2 && this.roundPlays.length === 2) {
            const [firstPlay, secondPlay] = this.roundPlays;
            if (secondPlay.amount > firstPlay.amount) {
                this.headsUpFinalTurn = true;
                this.activePlayerId = firstPlay.playerId;
                this.phase = 'TRANSITION';
                this.renderTransition();
                return;
            }
        }

        if (this.roundActivePlayers.length <= 1 || this.roundPlays.length === this.roundActivePlayers.length) {
            // Showdown
            let evaluatedPlays = this.roundPlays.map(p => ({ ...p, result: evaluateHand(p.cards) }));
            let winners = [];
            let isDefault = false;

            if (this.roundActivePlayers.length <= 1) {
                const winnerId = this.roundActivePlayers.length === 1 ? this.roundActivePlayers[0] : (this.roundPlays[0] ? this.roundPlays[0].playerId : 0);
                winners = [winnerId];
                isDefault = true;
            } else {
                evaluatedPlays.sort((a, b) => b.result.score - a.result.score);
                const topScore = evaluatedPlays[0].result.score;
                winners = evaluatedPlays
                    .filter(p => p.result.score === topScore)
                    .map(p => p.playerId);
            }
            this.concludeRound(winners, evaluatedPlays, isDefault);
        } else {
            // Next Player
            let nextIndexObj = -1;
            for (let i = 1; i <= this.players.length; i++) {
                const checkId = (this.activePlayerId + i) % this.players.length;
                if (this.roundActivePlayers.includes(checkId) && this.players[checkId].status === 'ACTIVE') {
                    nextIndexObj = checkId;
                    break;
                }
            }
            this.activePlayerId = nextIndexObj;
            this.phase = 'TRANSITION';
            this.renderTransition();
        }
    }

    concludeRound(winnerIds, finalPlays, isDefault) {
        const finalPot = this.pot;
        const share = Math.floor(finalPot / winnerIds.length);
        const remainder = finalPot % winnerIds.length;

        winnerIds.forEach((id, idx) => {
            const winner = this.players[id];
            winner.cash += share + (idx === 0 ? remainder : 0);
        });

        const roundResult = {
            roundNum: this.currentRoundNum,
            winnerIds,
            isDefault,
            plays: finalPlays,
            potWon: finalPot
        };
        this.gameHistory.push(roundResult);

        this.phase = 'ROUND_OVER';
        this.renderRoundOver();
    }

    renderRoundOver() {
        this.els.cardsContainer.innerHTML = '';
        this.els.controlsArea.innerHTML = '';
        this.els.mulliganBtn.style.display = 'none';
        this.updateHUD();
        this.updatePlayerPods();

        const roundResult = this.gameHistory[this.gameHistory.length - 1];
        const winnerNames = roundResult.winnerIds.map(id => this.players[id].name).join(' & ');
        const isFinal = this.currentRoundNum === 5;

        this.setMessage(`${winnerNames} win${roundResult.winnerIds.length === 1 ? 's' : ''} Round ${this.currentRoundNum}! (Pot: $${roundResult.potWon})`);

        // Build History Panel
        this.els.historyContent.innerHTML = '';
        if (roundResult.isDefault) {
            this.els.historyContent.innerHTML = `<div style="text-align:center; padding: 20px;">All opposing commanders retreated.</div>`;
        } else {
            roundResult.plays.forEach(p => {
                const pObj = this.players[p.playerId];
                const res = p.result;
                const isWinner = roundResult.winnerIds.includes(p.playerId);

                let cardsHtml = p.cards.map(c => `<div class="card-mini suit-${c.suit.id}"><span class="card-val ${c.val === 10 ? 'is-cypher' : ''}" style="color:${c.suit.color}">${cardDisplayVal(c.val)}</span><span class="card-mini-suit-icon" style="color:${c.suit.color}">${c.suit.symbol}</span></div>`).join('');

                const details = res.tier === 'Tier 9' ? `Power: ${res.power}` : res.name;

                let html = `
                    <div class="history-item" style="${isWinner ? 'background: rgba(212,175,55,0.1); border-left: 3px solid var(--gold); border-radius: 5px;' : ''}">
                        <div class="history-player" style="color: ${pObj.color.hex}">${pObj.name}</div>
                        <div class="history-play">
                            <div style="text-align: right; line-height: 1.2;">
                                <div style="${res.style}; font-size: 0.95rem; font-weight: bold;">${res.tier}</div>
                                <div style="font-size: 0.7rem; color: #888;">${details}</div>
                            </div>
                            <div class="history-cards">${cardsHtml}</div>
                        </div>
                    </div>
                `;
                this.els.historyContent.innerHTML += html;
            });
        }
        this.els.historyPanel.style.display = 'block';
        this.els.controlsArea.style.display = 'flex';

        const btnText = isFinal ? "PROCEED TO STANDINGS" : `BEGIN ROUND ${this.currentRoundNum + 1}`;
        this.els.controlsArea.innerHTML = `<button class="primary-btn" onclick="frontierGame.advanceToNextRound()">${btnText}</button>`;
    }

    advanceToNextRound() {
        if (this.currentRoundNum === 5) {
            this.phase = 'GAME_OVER';
            this.renderShowdown();
            return;
        }

        const nextRound = this.currentRoundNum + 1;
        const targetHandSize = nextRound;

        // The outgoing Market Card (used or not) is discarded along with played cards.
        if (this.marketCard) this.discardPile.push(this.marketCard);
        this.marketCard = null;
        this.marketCardSelected = false;

        let allAvailableCards = [...this.deck, ...this.discardPile];
        for (let i = allAvailableCards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [allAvailableCards[i], allAvailableCards[j]] = [allAvailableCards[j], allAvailableCards[i]];
        }

        this.players.forEach(p => {
            if (p.cash <= 0) p.status = 'BANKRUPT';

            if (p.status === 'ACTIVE') {
                let need = targetHandSize - p.hand.length;
                let drawn = [];
                while (need > 0 && allAvailableCards.length > 0) {
                    drawn.push(allAvailableCards.shift());
                    need--;
                }
                p.hand = [...p.hand, ...drawn];
            } else {
                // Return cards to deck if they go bankrupt
                allAvailableCards.push(...p.hand);
                p.hand = [];
            }
        });

        // Reveal a new Market Card for the upcoming round.
        this.marketCard = allAvailableCards.length > 0 ? allAvailableCards.shift() : null;

        this.currentRoundNum = nextRound;
        this.roundActivePlayers = this.players
            .map((p, i) => (p.status === 'ACTIVE' ? i : -1))
            .filter(idx => idx !== -1);

        // Ensure starting player is not bankrupt
        this.activePlayerId = this.players.findIndex(p => p.status === 'ACTIVE');
        if (this.activePlayerId === -1) this.activePlayerId = 0;

        this.roundPlays = [];
        this.roundBet = 0;
        this.headsUpFinalTurn = false;
        this.pot = 0;
        this.deck = allAvailableCards;
        this.discardPile = [];

        // Rotate dealer, but skip bankrupt players
        let dealerCandidate = (this.currentRoundNum - 1) % this.players.length;
        while (this.players[dealerCandidate].status === 'BANKRUPT') {
            dealerCandidate = (dealerCandidate + 1) % this.players.length;
        }
        this.activePlayerId = dealerCandidate;

        this.phase = 'TRANSITION';
        this.renderTransition();
    }

    renderShowdown() {
        this.els.overlay.classList.remove('visible');
        this.els.cardsContainer.innerHTML = '';
        this.els.controlsArea.innerHTML = '';
        this.els.historyPanel.style.display = 'none';
        this.els.mainHud.style.display = 'none';
        this.els.mulliganBtn.style.display = 'none';
        this.els.controlsArea.style.display = 'none';

        const sortedPlayers = [...this.players].sort((a, b) => b.cash - a.cash);
        const topCash = sortedPlayers[0].cash;
        const winners = sortedPlayers.filter(p => p.cash === topCash);

        let msg = winners.length > 1
            ? `DRAW! ${winners.map(w => w.name).join(' & ')} tied with $${topCash}.`
            : `${winners[0].name.toUpperCase()} WINS THE FRONTIER WITH $${topCash}!`;

        this.setMessage(msg);

        let html = `
            <div style="background: rgba(0,0,0,0.6); padding: 30px; border-radius: 15px; border: 1px solid var(--gold-dim); width: 80%; display: flex; flex-direction: column; align-items: center; gap: 20px;">
                <h2 style="color: var(--gold-bright); font-size: 2.5rem; margin: 0; text-shadow: 0 0 20px rgba(255,215,0,0.5);">FINAL STANDINGS</h2>
                <div style="display: flex; gap: 30px; border-top: 1px solid #333; padding-top: 20px;">
        `;

        sortedPlayers.forEach((p, idx) => {
            const isWinner = p.cash === topCash && p.cash > 0;
            const isBankrupt = p.status === 'BANKRUPT';
            html += `
                <div style="display: flex; flex-direction: column; align-items: center; ${isWinner ? 'transform: scale(1.1); color: var(--gold-bright);' : (isBankrupt ? 'opacity: 0.2; filter: grayscale(1);' : 'opacity: 0.6;')}">
                    <span style="font-size: 0.8rem; font-family: 'Playfair Display', serif;">#${idx + 1}</span>
                    <strong style="font-size: 1.5rem;">${p.name}</strong>
                    <span style="font-size: 2rem; font-family: 'Cinzel', serif;">$${p.cash}</span>
                    ${isBankrupt ? '<span style="font-size: 0.6rem; color: #f87171;">BANKRUPT</span>' : ''}
                </div>
            `;
        });

        html += `
                </div>
                <div style="display: flex; gap: 20px; margin-top: 20px;">
                    <button class="primary-btn" onclick="frontierGame.initGame()">PLAY AGAIN</button>
                    <a href="#games" style="text-decoration: none;"><button class="secondary-btn" style="background: rgba(40, 40, 40, 0.8); border: 1px solid var(--gold-dim); color: var(--gold); padding: 15px 30px; font-family: 'Cinzel', serif; font-size: 1rem; letter-spacing: 2px; cursor: pointer; border-radius: 4px; transition: all 0.3s;">BACK TO MENU</button></a>
                </div>
            </div>
        `;
        this.els.cardsContainer.innerHTML = html;
        this.els.playerStatusGrid.innerHTML = '';
    }

    updateHUD() {
        document.getElementById('round-display').innerText = this.currentRoundNum;
        document.getElementById('pot-display').innerText = `$${this.pot}`;
        document.getElementById('current-bet-display').innerText = `$${this.roundBet}`;
        document.getElementById('deck-display').innerText = this.deck.length;

        const marketHud = document.getElementById('market-card-hud');
        const marketDisplay = document.getElementById('market-card-display');
        if (marketHud && marketDisplay) {
            if (this.marketCard && this.currentGame === 'FRONTIER') {
                marketHud.style.display = 'flex';
                const activePlayer = this.players[this.activePlayerId];
                const isInteractive = this.phase === 'PLAYING' && activePlayer && !activePlayer.isAI;
                const c = this.marketCard;
                const selectedStyle = this.marketCardSelected
                    ? 'outline: 2px solid var(--gold-bright); border-radius: 4px;'
                    : '';
                marketDisplay.innerHTML = `<div class="card-mini suit-${c.suit.id}" style="cursor:${isInteractive ? 'pointer' : 'default'}; ${selectedStyle}" title="${isInteractive ? 'Click to include in your combination' : 'Market Card'}"><span class="card-val ${c.val === 10 ? 'is-cypher' : ''}" style="color:${c.suit.color}">${cardDisplayVal(c.val)}</span><span class="card-mini-suit-icon" style="color:${c.suit.color}">${c.suit.symbol}</span></div>`;
                marketDisplay.onclick = isInteractive ? () => this.toggleMarketCard() : null;
            } else {
                marketHud.style.display = 'none';
                marketDisplay.innerHTML = '';
                marketDisplay.onclick = null;
            }
        }
    }

    updatePlayerPods() {
        this.els.playerStatusGrid.innerHTML = '';
        this.players.forEach((p, idx) => {
            const isBankrupt = p.status === 'BANKRUPT';
            const isActiveTurn = this.phase === 'PLAYING' && idx === this.activePlayerId && !isBankrupt;
            const isFolded = this.phase === 'PLAYING' && !this.roundActivePlayers.includes(idx) && !isBankrupt;

            let actionStr = '';
            if (isBankrupt) {
                actionStr = 'Bankrupt';
            } else if (this.phase === 'PLAYING') {
                const play = this.roundPlays.find(play => play.playerId === idx);
                if (play) {
                    actionStr = `Played $${play.amount}`;
                } else if (isFolded) {
                    actionStr = 'Folded';
                } else if (isActiveTurn) {
                    actionStr = 'Thinking...';
                }
            }

            const div = document.createElement('div');
            div.className = `player-status-pod ${isActiveTurn ? 'active-turn' : ''} ${isFolded || isBankrupt ? 'folded' : ''}`;
            if (isBankrupt) div.style.opacity = "0.3";

            div.innerHTML = `
                <div class="pod-name" style="color: ${p.color.hex}">${p.name}${p.isAI ? '<span class="ai-tag">AI</span>' : ''}</div>
                <div class="pod-cash">$${p.cash}</div>
                <div class="pod-action">${actionStr}</div>
            `;
            this.els.playerStatusGrid.appendChild(div);
        });
    }

    toggleProfilePanel() {
        const panel = document.getElementById('president-profile-panel');
        if (panel) {
            panel.classList.toggle('visible');
            panel.dataset.edition = this.edition;
            
            const isOpen = panel.classList.contains('visible');
            
            // Side panel button - grey when closed, gold when open
            const svgs = panel.querySelectorAll('.panel-close svg');
            svgs.forEach(svg => {
                svg.style.stroke = isOpen ? 'var(--gold-bright)' : 'var(--gold-dim)';
            });
            
            // FAB - always grey, hides when open
            const fab = document.querySelector('.panel-toggle-fab');
            if (fab) {
                fab.style.display = isOpen ? 'none' : 'flex';
            }
        }
        this.updateControls();
    }

    updateProfilePanel() {
        const panel = document.getElementById('president-profile-panel');
        if (panel) {
            panel.dataset.edition = this.edition;
        }
        
        const panelContent = document.getElementById('profile-content');
        if (!panelContent) return;

        if (this.edition === 'PRESIDENT') {
            if (this.selectedCardIndices.length === 0) {
                panelContent.innerHTML = '<div class="profile-placeholder">Select a President Card to view Profile</div>';
                return;
            }

            const lastSelectedIdx = this.selectedCardIndices[this.selectedCardIndices.length - 1];
            const player = this.players[this.activePlayerId];
            if (!player || !player.hand[lastSelectedIdx]) return;

            const card = player.hand[lastSelectedIdx];
            const pName = card.president;
            if (!pName) {
                panelContent.innerHTML = '<div class="profile-placeholder">This card does not feature a President.</div>';
                return;
            }

            const p = presidentsData.find(pres => pres.name === pName);
            if (!p) {
                panelContent.innerHTML = `<div class="profile-placeholder">Profile not found for ${pName}</div>`;
                return;
            }

            const partyColorHex = p.partyColor === 'red' ? '#ff4d4d' : p.partyColor === 'blue' ? '#0077ff' : '#fff';
            const portraitUrl = card.portraitUrl || p.portraitUrl;

            panelContent.innerHTML = `
                <div class="profile-header">
                    <div class="profile-portrait-large">
                        <img src="${portraitUrl}" alt="${p.name}">
                    </div>
                    <div class="profile-name">${p.name}</div>
                    <div class="profile-years">${p.years}</div>
                </div>
                <div class="profile-meta-grid">
                    <div class="meta-box">
                        <label>Lifespan</label>
                        <span>${p.lifespan}</span>
                    </div>
                    <div class="meta-box">
                        <label>Political Party</label>
                        <span style="color: ${partyColorHex}">${p.party}</span>
                    </div>
                </div>
                <div class="profile-summary">${p.summary}</div>
                <div class="profile-events">
                    <h4>Notable Events</h4>
                    <ul>
                        ${p.events.map(e => `<li>${e}</li>`).join('')}
                    </ul>
                </div>
                <div style="margin-top: 20px; text-align: center;">
                    <button class="action-btn" style="border-color: var(--gold); color: var(--gold); padding: 8px 16px; font-size: 0.85rem;" onclick="window.open('index.html#chronicle-view', '_blank')">AMERICAN CHRONICLE</button>
                    <div style="font-size: 0.7rem; color: #888; margin-top: 5px; font-style: italic;">(It will open in new tab)</div>
                </div>
            `;
        } else if (this.edition === 'STATE') {
            if (this.selectedCardIndices.length === 0) {
                panelContent.innerHTML = '<div class="profile-placeholder">Select a State Card to view Info</div>';
                return;
            }

            const lastSelectedIdx = this.selectedCardIndices[this.selectedCardIndices.length - 1];
            const player = this.players[this.activePlayerId];
            if (!player || !player.hand[lastSelectedIdx]) return;

            const card = player.hand[lastSelectedIdx];
            const stateName = card.state;
            if (!stateName) {
                panelContent.innerHTML = '<div class="profile-placeholder">This card does not feature a State.</div>';
                return;
            }

            const state = getStateByName(stateName);
            if (!state) {
                panelContent.innerHTML = `<div class="profile-placeholder">State info not found for ${stateName}</div>`;
                return;
            }

            panelContent.innerHTML = `
                <div class="profile-header">
                    <div class="profile-portrait-large" style="${this.edition === 'STATE' ? 'width:140px;height:90px;border-radius:4px;' : ''}">
                        <img src="${state.flagUrl}" alt="${state.name}">
                    </div>
                    <div class="profile-name">${state.name}</div>
                    <div class="profile-years">${state.nickname}</div>
                </div>
                <div class="profile-meta-grid">
                    <div class="meta-box">
                        <label>Capital</label>
                        <span>${state.capital}</span>
                    </div>
                    <div class="meta-box">
                        <label>Largest City</label>
                        <span>${state.largestCity}</span>
                    </div>
                    <div class="meta-box">
                        <label>Joined Union</label>
                        <span>${state.year}</span>
                    </div>
                    <div class="meta-box">
                        <label>Order</label>
                        <span>${state.order}${this.getOrdinalSuffix(state.order)}</span>
                    </div>
                </div>
                <div class="chronicle-text" style="font-size:0.95rem; line-height:1.7; margin-top:15px; color:#ccc;">
                    <p>${state.summary}</p>
                </div>
                <div style="margin-top: 20px; text-align: center;">
                    <button class="action-btn" style="border-color: var(--gold); color: var(--gold); padding: 8px 16px; font-size: 0.85rem;" onclick="window.open('index.html#chronicle-view', '_blank')">AMERICAN CHRONICLE</button>
                    <div style="font-size: 0.7rem; color: #888; margin-top: 5px; font-style: italic;">(Opens in new tab)</div>
                </div>
            `;
        }
    }
}

// Init
const frontierGame = new FrontierGame();
