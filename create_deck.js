const pptxgen = require("pptxgenjs");

const pres = new pptxgen();
pres.layout = "LAYOUT_WIDE"; // 13.33" x 7.5"

const NAVY = "1E2761";
const ICE = "CADCFC";
const WHITE = "FFFFFF";
const TEAL = "028090";
const SOFT = "2F3C7E";

// ---- Slide 1: dark title slide ----
const s1 = pres.addSlide();
s1.background = { color: NAVY };

// decorative soft circles (motif)
s1.addShape("ellipse", { x: 8.6, y: -2.3, w: 6.2, h: 6.2, fill: { color: SOFT, transparency: 0 }, line: { type: "none" } });
s1.addShape("ellipse", { x: -1.6, y: 4.4, w: 4.4, h: 4.4, fill: { color: SOFT, transparency: 0 }, line: { type: "none" } });
s1.addShape("ellipse", { x: 10.9, y: 5.2, w: 1.7, h: 1.7, fill: { color: ICE, transparency: 55 }, line: { type: "none" } });
s1.addShape("ellipse", { x: 0.6, y: 0.9, w: 1.2, h: 1.2, fill: { color: ICE, transparency: 65 }, line: { type: "none" } });

s1.addText("Pi Agent实践作业", {
  x: 0.8, y: 2.5, w: 11.73, h: 1.2,
  fontSize: 52, bold: true, color: WHITE, fontFace: "Arial",
  align: "center", margin: 0,
});
s1.addText("PPT Skill测试", {
  x: 0.8, y: 3.85, w: 11.73, h: 0.7,
  fontSize: 26, color: ICE, fontFace: "Arial",
  align: "center", margin: 0,
});

// ---- Slide 2: light content slide ----
const s2 = pres.addSlide();
s2.background = { color: "F4F6FB" };

s2.addText("页面2", {
  x: 0.8, y: 0.55, w: 11.73, h: 0.9,
  fontSize: 40, bold: true, color: NAVY, fontFace: "Arial",
  margin: 0,
});

// success card
s2.addShape("roundRect", {
  x: 2.2, y: 2.15, w: 8.93, h: 3.3, rectRadius: 0.12,
  fill: { color: WHITE },
  line: { type: "none" },
  shadow: { type: "outer", color: "1E2761", opacity: 0.18, blur: 12, offset: 4, angle: 90 },
});

// check icon circle
s2.addText("\u2713", {
  shape: "ellipse",
  x: 6.22, y: 2.55, w: 0.9, h: 0.9,
  fill: { color: TEAL }, line: { type: "none" },
  color: WHITE, fontSize: 30, bold: true,
  align: "center", valign: "middle", margin: 0,
});

s2.addText("测试成功", {
  x: 2.2, y: 3.75, w: 8.93, h: 1.0,
  fontSize: 42, bold: true, color: NAVY, fontFace: "Arial",
  align: "center", margin: 0,
});

pres.writeFile({ fileName: "output.pptx" }).then(() => {
  console.log("Wrote output.pptx");
});
