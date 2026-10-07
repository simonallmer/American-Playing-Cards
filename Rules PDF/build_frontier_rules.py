"""Builds the Frontier rules PDFs (English, German, French).  Run:  python3 build_frontier_rules.py"""
import os
from reportlab.lib.pagesizes import A4
from reportlab.lib import colors
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.units import mm
from reportlab.lib.enums import TA_CENTER
from reportlab.platypus import (BaseDocTemplate, PageTemplate, Frame, Paragraph, Spacer, Table, TableStyle,
                                KeepTogether)

from frontier_rules_text import TEXT

VERSION = "V4"
HERE = os.path.dirname(os.path.abspath(__file__))

NAVY, GOLD, INK, GREY = (colors.HexColor(c) for c in ("#1f2b40", "#a5821f", "#1c1c1c", "#6f6f6f"))
TINT, LINE = colors.HexColor("#f7f3e8"), colors.HexColor("#ddd6c3")
RED, BLUE, BLACK = "#b3261e", "#1f4e9a", "#1c1c1c"

PAGE_W, PAGE_H = A4
MARGIN = 22 * mm
W = PAGE_W - 2 * MARGIN
IW = W - 20  # inside the Hand Strength panel

body = ParagraphStyle("body", fontName="Helvetica", fontSize=9.6, leading=13, textColor=INK, spaceAfter=5)
tight = ParagraphStyle("tight", parent=body, spaceAfter=1.5)
cell = ParagraphStyle("cell", parent=body, fontSize=9.4, leading=12, spaceAfter=0)
head = ParagraphStyle("head", parent=cell, fontName="Helvetica-Bold", textColor=colors.white)
center = ParagraphStyle("center", parent=cell, alignment=TA_CENTER)
fine = ParagraphStyle("fine", parent=body, fontName="Helvetica-Oblique", fontSize=8.6, leading=11.5, textColor=GREY)
sec = ParagraphStyle("sec", parent=body, fontName="Helvetica-Bold", fontSize=13.5, leading=17, textColor=NAVY,
                     spaceBefore=8, spaceAfter=4)
sub = ParagraphStyle("sub", parent=body, fontName="Helvetica-Bold", fontSize=10.2, textColor=GOLD,
                     spaceBefore=4, spaceAfter=3)

SUITS = {"H": ("♥", RED), "D": ("♦", RED), "S": ("♠", BLUE), "C": ("♣", BLUE),
         "X": ("★", BLACK)}


def sym(s):
    g, c = SUITS[s]
    return f'<font name="ZapfDingbats" color="{c}">{g}</font>'


def cards(spec):
    """'7H 7S 0X' -> 7♥ 7♠ Ø★  (0 = Cypher)."""
    out = []
    for t in spec.split():
        v, s = t[:-1], t[-1]
        out.append(f'<b>{"Ø" if v == "0" else v}</b>{sym(s)}')
    return "&nbsp;&nbsp;".join(out)


def P(t, s=body):
    return Paragraph(t, s)


def section(n, title):
    return P(f'<font color="#a5821f">{n}</font>&nbsp;&nbsp;{title}', sec)


def grid(rows, widths, header=True, zebra=True):
    data = [[c if not isinstance(c, str) else P(c, head if (header and i == 0) else cell) for c in r]
            for i, r in enumerate(rows)]
    t = Table(data, colWidths=widths)
    st = [("VALIGN", (0, 0), (-1, -1), "MIDDLE"), ("TOPPADDING", (0, 0), (-1, -1), 3),
          ("BOTTOMPADDING", (0, 0), (-1, -1), 3), ("LINEBELOW", (0, 0), (-1, -1), 0.4, LINE)]
    if header:
        st.append(("BACKGROUND", (0, 0), (-1, 0), NAVY))
    if zebra:
        st.append(("ROWBACKGROUNDS", (0, 1 if header else 0), (-1, -1), [TINT, colors.white]))
    t.setStyle(TableStyle(st))
    return t


def on_page(c, doc):
    c.saveState()
    if doc.page == 1:
        band = 46 * mm
        c.setFillColor(NAVY)
        c.rect(0, PAGE_H - band, PAGE_W, band, stroke=0, fill=1)
        c.setFillColor(GOLD)
        c.rect(0, PAGE_H - band - 1.6, PAGE_W, 1.6, stroke=0, fill=1)
        c.setFillColor(colors.white)
        c.setFont("Helvetica-Bold", 40)
        c.drawCentredString(PAGE_W / 2, PAGE_H - 25 * mm, "FRONTIER")
        c.setFont("Helvetica-Oblique", 10.5)
        c.setFillColor(colors.HexColor("#d9c48a"))
        c.drawCentredString(PAGE_W / 2, PAGE_H - 33 * mm, doc.T["subtitle"])
        c.setFont("ZapfDingbats", 11)
        x = PAGE_W / 2 - 2 * 16
        for g, col in (SUITS[k] for k in "HDSCX"):
            c.setFillColor(colors.white if col == BLACK else colors.HexColor(col))
            c.drawCentredString(x, PAGE_H - 40.5 * mm, g)
            x += 16
    c.setFont("Helvetica", 7.2)
    c.setFillColor(GREY)
    c.drawCentredString(PAGE_W / 2, 12 * mm, doc.T["footer"].format(v=VERSION, p=doc.page))
    c.restoreState()




def bullet_list(items):
    return [P(f"&nbsp;&nbsp;•&nbsp;<b>{k}</b> — {v}", tight) for k, v in items]


def build(lang):
    T = TEXT[lang]
    out = os.path.join(HERE, T["file"].format(v=VERSION))
    doc = BaseDocTemplate(out, pagesize=A4, title=T["file"].format(v=VERSION)[:-4].replace(" - ", " — "),
                          author="Simon Allmer, Laurin Grumiller", lang=lang)
    doc.T = T
    first = Frame(MARGIN, 20 * mm, W, PAGE_H - 20 * mm - 46 * mm - 8 * mm, id="first")
    later = Frame(MARGIN, 20 * mm, W, PAGE_H - 20 * mm - 16 * mm, id="later")
    doc.addPageTemplates([PageTemplate("first", [first], onPage=on_page, autoNextPageTemplate="later"),
                          PageTemplate("later", [later], onPage=on_page)])
    s = []

    # Spec strip
    lab = ParagraphStyle("lab", parent=center, fontSize=7.2, textColor=GREY)
    val = ParagraphStyle("val", parent=center, fontName="Helvetica-Bold", fontSize=10.5)
    strip = Table([[P(k.upper(), lab) for k, _ in T["spec"]], [P(v, val) for _, v in T["spec"]]],
                  colWidths=[W / 5] * 5)
    strip.setStyle(TableStyle([("LINEBELOW", (0, -1), (-1, -1), 0.6, LINE),
                               ("LINEABOVE", (0, 0), (-1, 0), 0.6, LINE), ("VALIGN", (0, 0), (-1, -1), "BOTTOM"),
                               ("TOPPADDING", (0, 0), (-1, -1), 2), ("BOTTOMPADDING", (0, 0), (-1, -1), 3)]))
    s += [strip]

    # 1 Objective
    s += [section(1, T["s1"]), P(T["objective"])]

    # 2 The Cards
    red, blue, black = T["colors"]
    hh, dd, ss, cc, xx = T["symbols"]
    s += [section(2, T["s2"]), P(T["cards_intro"]),
          grid([[red, f"{sym('H')} {hh}&nbsp;&nbsp;&nbsp;{sym('D')} {dd}"],
                [blue, f"{sym('S')} {ss}&nbsp;&nbsp;&nbsp;{sym('C')} {cc}"],
                [black, f"{sym('X')} {xx}"]], [W * 0.18, W * 0.82], header=False),
          Spacer(1, 5), P(T["circle"].format(run=cards("8C 9D 0H 1S")))]

    # 3 Setup
    s += [section(3, T["s3"]), P(T["setup"])]

    # 4 A Round
    r_round, r_own, r_table = T["round_rows"]
    rounds = grid([[r_round, "1", "2", "3", "4", "5"], [r_own, "1", "2", "3", "4", "5"],
                   [r_table, "5", "4", "3", "2", "1"]], [W * 0.25] + [W * 0.15] * 5)
    s += [section(4, T["s4"]), P(T["round_intro"]), rounds, Spacer(1, 7),
          P(T["deal"]), P(T["betting"], tight)] + bullet_list(T["moves"]) + [
          Spacer(1, 3), P(T["betting_end"]), P(T["showdown"]), P(T["refill"])]

    # 5 Hand Strength
    ch = T["combo_head"]
    combos = grid([ch] + [[f"<b>{n}</b>", trait, cards(ex)] for n, trait, ex in T["combos"]],
                  [IW * 0.25, IW * 0.43, IW * 0.32])
    step_rows = [[P(f'<font color="#a5821f"><b>{i + 1}</b></font>', cell), P(f"<b>{k}</b>", cell), P(v, cell)]
                 for i, (k, v) in enumerate(T["steps"])]
    step_tbl = Table(step_rows, colWidths=[IW * 0.05, IW * 0.13, IW * 0.82])
    step_tbl.setStyle(TableStyle([("VALIGN", (0, 0), (-1, -1), "TOP"), ("TOPPADDING", (0, 0), (-1, -1), 2),
                                  ("BOTTOMPADDING", (0, 0), (-1, -1), 2), ("LEFTPADDING", (0, 0), (-1, -1), 2)]))
    beats = ParagraphStyle("beats", parent=center, textColor=GREY)
    ex_tbl = grid([[P(cards(a), cell), P(T["beats"], beats), P(cards(b), cell), P(why, cell)]
                   for a, b, why in T["examples"]],
                  [IW * 0.19, IW * 0.11, IW * 0.19, IW * 0.51], header=False, zebra=False)
    panel = [section(5, T["s5"]), P(T["hand"]),
             Spacer(1, 4), P(T["what_combo_h"], sub), P(T["what_combo"]), combos,
             Spacer(1, 7), P(T["which_h"], sub), P(T["which"], tight), step_tbl, Spacer(1, 3),
             P(T["one_color"]),
             Spacer(1, 4), P(T["examples_h"], sub), ex_tbl]
    box = Table([[x] for x in panel], colWidths=[W])
    box.setStyle(TableStyle([("BOX", (0, 0), (-1, -1), 1.1, GOLD),
                             ("LEFTPADDING", (0, 0), (-1, -1), 10), ("RIGHTPADDING", (0, 0), (-1, -1), 10),
                             ("TOPPADDING", (0, 0), (-1, -1), 2), ("BOTTOMPADDING", (0, 0), (-1, -1), 2),
                             ("BOTTOMPADDING", (0, -1), (-1, -1), 10)]))
    s += [Spacer(1, 4), KeepTogether(box)]

    # 6 End
    s += [section(6, T["s6"]), P(T["end"]), Spacer(1, 8), P(T["freedom"], fine)]

    doc.build(s)
    return out


if __name__ == "__main__":
    for lang in TEXT:
        print(build(lang))
