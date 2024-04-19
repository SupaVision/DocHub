"use strict";
var e = require("obsidian");
function t(e, t, o, n) {
  return new (o || (o = Promise))(function (i, a) {
    function l(e) {
      try {
        s(n.next(e));
      } catch (e) {
        a(e);
      }
    }
    function r(e) {
      try {
        s(n.throw(e));
      } catch (e) {
        a(e);
      }
    }
    function s(e) {
      var t;
      e.done
        ? i(e.value)
        : ((t = e.value),
          t instanceof o
            ? t
            : new o(function (e) {
                e(t);
              })).then(l, r);
    }
    s((n = n.apply(e, t || [])).next());
  });
}
function o(e) {
  return t(this, void 0, void 0, function* () {
    return new Promise((t) => setTimeout(t, e));
  });
}
function n(e) {
  let t = Date.now().toString(36);
  return (t += Math.random().toString(36).substr(3, e)), t;
}
function i(e, t, o) {
  let n,
    i = { index: -1, subindex: -1 },
    a = e.settings.menuCommands;
  return (
    o
      ? a.forEach((e, o) => {
          if (
            "SubmenuCommands" in e &&
            ((n = e.SubmenuCommands.findIndex((e) => e.id == t.id)), n >= 0)
          )
            return (i = { index: o, subindex: n }), i;
        })
      : ((n = a.findIndex((e) => e.id == t.id)),
        (i = { index: n, subindex: -1 })),
    i
  );
}
const a = [
  "Custom",
  "cMenuToolbar",
  "cMenuToolbarSub",
  "cMenuToolbarAdd",
  "cMenuToolbarDelete",
  "cMenuToolbarReload",
  "codeblock-glyph",
  "underline-glyph",
  "superscript-glyph",
  "subscript-glyph",
  "bot-glyph",
  "header-1",
  "header-2",
  "header-3",
  "header-4",
  "header-5",
  "header-6",
  "header-n",
  "obsidian",
  "accessibility",
  "activity",
  "air-vent",
  "airplay",
  "alarm-check",
  "alarm-clock-off",
  "alarm-clock",
  "alarm-minus",
  "alarm-plus",
  "album",
  "alert-circle",
  "alert-octagon",
  "alert-triangle",
  "align-center-horizontal",
  "align-center-vertical",
  "align-center",
  "align-end-horizontal",
  "align-end-vertical",
  "align-horizontal-distribute-center",
  "align-horizontal-distribute-end",
  "align-horizontal-distribute-start",
  "align-horizontal-justify-center",
  "align-horizontal-justify-end",
  "align-horizontal-justify-start",
  "align-horizontal-space-around",
  "align-horizontal-space-between",
  "align-justify",
  "align-left",
  "align-right",
  "align-start-horizontal",
  "align-start-vertical",
  "align-vertical-distribute-center",
  "align-vertical-distribute-end",
  "align-vertical-distribute-start",
  "align-vertical-justify-center",
  "align-vertical-justify-end",
  "align-vertical-justify-start",
  "align-vertical-space-around",
  "align-vertical-space-between",
  "anchor",
  "angry",
  "annoyed",
  "aperture",
  "apple",
  "archive-restore",
  "archive",
  "armchair",
  "arrow-big-down",
  "arrow-big-left",
  "arrow-big-right",
  "arrow-big-up",
  "arrow-down-circle",
  "arrow-down-left",
  "arrow-down-right",
  "arrow-down",
  "arrow-left-circle",
  "arrow-left-right",
  "arrow-left",
  "arrow-right-circle",
  "arrow-right",
  "arrow-up-circle",
  "arrow-up-left",
  "arrow-up-right",
  "arrow-up",
  "asterisk",
  "at-sign",
  "award",
  "axe",
  "axis-3d",
  "baby",
  "backpack",
  "baggage-claim",
  "banana",
  "banknote",
  "bar-chart-2",
  "bar-chart-3",
  "bar-chart-4",
  "bar-chart-horizontal",
  "bar-chart",
  "baseline",
  "bath",
  "battery-charging",
  "battery-full",
  "battery-low",
  "battery-medium",
  "battery",
  "beaker",
  "bed-double",
  "bed-single",
  "bed",
  "beer",
  "bell-minus",
  "bell-off",
  "bell-plus",
  "bell-ring",
  "bell",
  "bike",
  "binary",
  "bitcoin",
  "bluetooth-connected",
  "bluetooth-off",
  "bluetooth-searching",
  "bluetooth",
  "bold",
  "bomb",
  "bone",
  "book-open",
  "book",
  "bookmark-minus",
  "bookmark-plus",
  "bookmark",
  "bot",
  "box-select",
  "box",
  "boxes",
  "briefcase",
  "brush",
  "bug",
  "building-2",
  "building",
  "bus",
  "cake",
  "calculator",
  "calendar-check-2",
  "calendar-check",
  "calendar-clock",
  "calendar-days",
  "calendar-heart",
  "calendar-minus",
  "calendar-off",
  "calendar-plus",
  "calendar-range",
  "calendar-search",
  "calendar-x2",
  "calendar-x",
  "calendar",
  "camera-off",
  "camera",
  "car",
  "carrot",
  "cast",
  "check-circle-2",
  "check-circle",
  "check-square",
  "check",
  "chef-hat",
  "cherry",
  "chevron-down",
  "chevron-first",
  "chevron-last",
  "chevron-left",
  "chevron-right",
  "chevron-up",
  "chevrons-down-up",
  "chevrons-down",
  "chevrons-left-right",
  "chevrons-left",
  "chevrons-right-left",
  "chevrons-right",
  "chevrons-up-down",
  "chevrons-up",
  "chrome",
  "cigarette-off",
  "cigarette",
  "circle-dot",
  "circle-ellipsis",
  "circle-slashed",
  "circle",
  "citrus",
  "clapperboard",
  "clipboard-check",
  "clipboard-copy",
  "clipboard-edit",
  "clipboard-list",
  "clipboard-signature",
  "clipboard-type",
  "clipboard-x",
  "clipboard",
  "clock-1",
  "clock-10",
  "clock-11",
  "clock-12",
  "clock-2",
  "clock-3",
  "clock-4",
  "clock-5",
  "clock-6",
  "clock-7",
  "clock-8",
  "clock-9",
  "clock",
  "cloud-cog",
  "cloud-drizzle",
  "cloud-fog",
  "cloud-hail",
  "cloud-lightning",
  "cloud-moon-rain",
  "cloud-moon",
  "cloud-off",
  "cloud-rain-wind",
  "cloud-rain",
  "cloud-snow",
  "cloud-sun-rain",
  "cloud-sun",
  "cloud",
  "cloudy",
  "clover",
  "code-2",
  "code",
  "codepen",
  "codesandbox",
  "coffee",
  "cog",
  "coins",
  "columns",
  "command",
  "compass",
  "component",
  "contact",
  "contrast",
  "cookie",
  "copy",
  "copyleft",
  "copyright",
  "corner-down-left",
  "corner-down-right",
  "corner-left-down",
  "corner-left-up",
  "corner-right-down",
  "corner-right-up",
  "corner-up-left",
  "corner-up-right",
  "cpu",
  "credit-card",
  "croissant",
  "crop",
  "cross",
  "crosshair",
  "crown",
  "cup-soda",
  "curly-braces",
  "currency",
  "database",
  "delete",
  "diamond",
  "dice-1",
  "dice-2",
  "dice-3",
  "dice-4",
  "dice-5",
  "dice-6",
  "dices",
  "diff",
  "disc",
  "divide-circle",
  "divide-square",
  "divide",
  "dollar-sign",
  "download-cloud",
  "download",
  "dribbble",
  "droplet",
  "droplets",
  "drumstick",
  "edit-2",
  "edit-3",
  "edit",
  "egg-fried",
  "egg",
  "equal-not",
  "equal",
  "eraser",
  "euro",
  "expand",
  "external-link",
  "eye-off",
  "eye",
  "facebook",
  "factory",
  "fast-forward",
  "feather",
  "figma",
  "file-archive",
  "file-audio-2",
  "file-audio",
  "file-axis-3d",
  "file-badge-2",
  "file-badge",
  "file-bar-chart-2",
  "file-bar-chart",
  "file-box",
  "file-check-2",
  "file-check",
  "file-clock",
  "file-code",
  "file-cog-2",
  "file-cog",
  "file-diff",
  "file-digit",
  "file-down",
  "file-edit",
  "file-heart",
  "file-image",
  "file-input",
  "file-json-2",
  "file-json",
  "file-key-2",
  "file-key",
  "file-line-chart",
  "file-lock-2",
  "file-lock",
  "file-minus-2",
  "file-minus",
  "file-output",
  "file-pie-chart",
  "file-plus-2",
  "file-plus",
  "file-question",
  "file-scan",
  "file-search-2",
  "file-search",
  "file-signature",
  "file-spreadsheet",
  "file-symlink",
  "file-terminal",
  "file-text",
  "file-type-2",
  "file-type",
  "file-up",
  "file-video-2",
  "file-video",
  "file-volume-2",
  "file-volume",
  "file-warning",
  "file-x2",
  "file-x",
  "file",
  "files",
  "film",
  "filter",
  "fingerprint",
  "flag-off",
  "flag-triangle-left",
  "flag-triangle-right",
  "flag",
  "flame",
  "flashlight-off",
  "flashlight",
  "flask-conical",
  "flask-round",
  "flip-horizontal-2",
  "flip-horizontal",
  "flip-vertical-2",
  "flip-vertical",
  "flower-2",
  "flower",
  "focus",
  "folder-archive",
  "folder-check",
  "folder-clock",
  "folder-closed",
  "folder-cog-2",
  "folder-cog",
  "folder-down",
  "folder-edit",
  "folder-heart",
  "folder-input",
  "folder-key",
  "folder-lock",
  "folder-minus",
  "folder-open",
  "folder-output",
  "folder-plus",
  "folder-search-2",
  "folder-search",
  "folder-symlink",
  "folder-tree",
  "folder-up",
  "folder-x",
  "folder",
  "folders",
  "form-input",
  "forward",
  "frame",
  "framer",
  "frown",
  "fuel",
  "function-square",
  "gamepad-2",
  "gamepad",
  "gauge",
  "gavel",
  "gem",
  "ghost",
  "gift",
  "git-branch-plus",
  "git-branch",
  "git-commit",
  "git-compare",
  "git-fork",
  "git-merge",
  "git-pull-request-closed",
  "git-pull-request-draft",
  "git-pull-request",
  "github",
  "gitlab",
  "glass-water",
  "glasses",
  "globe-2",
  "globe",
  "grab",
  "graduation-cap",
  "grape",
  "grid",
  "grip-horizontal",
  "grip-vertical",
  "hammer",
  "hand-metal",
  "hand",
  "hard-drive",
  "hard-hat",
  "hash",
  "haze",
  "headphones",
  "heart-crack",
  "heart-handshake",
  "heart-off",
  "heart-pulse",
  "heart",
  "help-circle",
  "hexagon",
  "highlighter",
  "history",
  "home",
  "hourglass",
  "ice-cream",
  "image-minus",
  "image-off",
  "image-plus",
  "image",
  "import",
  "inbox",
  "indent",
  "indian-rupee",
  "infinity",
  "info",
  "inspect",
  "instagram",
  "italic",
  "japanese-yen",
  "joystick",
  "key",
  "keyboard",
  "lamp-ceiling",
  "lamp-desk",
  "lamp-floor",
  "lamp-wall-down",
  "lamp-wall-up",
  "lamp",
  "landmark",
  "languages",
  "laptop-2",
  "laptop",
  "lasso-select",
  "lasso",
  "laugh",
  "layers",
  "layout-dashboard",
  "layout-grid",
  "layout-list",
  "layout-template",
  "layout",
  "leaf",
  "library",
  "life-buoy",
  "lightbulb-off",
  "lightbulb",
  "line-chart",
  "link-2off",
  "link-2",
  "link",
  "linkedin",
  "list-checks",
  "list-end",
  "list-minus",
  "list-music",
  "list-ordered",
  "list-plus",
  "list-start",
  "list-video",
  "list-x",
  "list",
  "loader-2",
  "loader",
  "locate-fixed",
  "locate-off",
  "locate",
  "lock",
  "log-in",
  "log-out",
  "luggage",
  "magnet",
  "mail-check",
  "mail-minus",
  "mail-open",
  "mail-plus",
  "mail-question",
  "mail-search",
  "mail-warning",
  "mail-x",
  "mail",
  "mails",
  "map-pin-off",
  "map-pin",
  "map",
  "martini",
  "maximize-2",
  "maximize",
  "medal",
  "megaphone-off",
  "megaphone",
  "meh",
  "menu",
  "message-circle",
  "message-square",
  "mic-2",
  "mic-off",
  "mic",
  "microscope",
  "milestone",
  "minimize-2",
  "minimize",
  "minus-circle",
  "minus-square",
  "minus",
  "monitor-off",
  "monitor-speaker",
  "monitor",
  "moon",
  "more-horizontal",
  "more-vertical",
  "mountain-snow",
  "mountain",
  "mouse-pointer-2",
  "mouse-pointer-click",
  "mouse-pointer",
  "mouse",
  "move-3d",
  "move-diagonal-2",
  "move-diagonal",
  "move-horizontal",
  "move-vertical",
  "move",
  "music-2",
  "music-3",
  "music-4",
  "music",
  "navigation-2off",
  "navigation-2",
  "navigation-off",
  "navigation",
  "network",
  "newspaper",
  "octagon",
  "option",
  "outdent",
  "package-2",
  "package-check",
  "package-minus",
  "package-open",
  "package-plus",
  "package-search",
  "package-x",
  "package",
  "paint-bucket",
  "paintbrush-2",
  "paintbrush",
  "palette",
  "palmtree",
  "paperclip",
  "party-popper",
  "pause-circle",
  "pause-octagon",
  "pause",
  "pen-tool",
  "pencil",
  "percent",
  "person-standing",
  "phone-call",
  "phone-forwarded",
  "phone-incoming",
  "phone-missed",
  "phone-off",
  "phone-outgoing",
  "phone",
  "pie-chart",
  "piggy-bank",
  "pin-off",
  "pin",
  "pipette",
  "pizza",
  "plane",
  "play-circle",
  "play",
  "plug-zap",
  "plus-circle",
  "plus-square",
  "plus",
  "pocket",
  "podcast",
  "pointer",
  "pound-sterling",
  "power-off",
  "power",
  "printer",
  "puzzle",
  "qr-code",
  "quote",
  "radio-receiver",
  "radio",
  "recycle",
  "redo-2",
  "redo",
  "refresh-ccw",
  "refresh-cw",
  "regex",
  "repeat-1",
  "repeat",
  "reply-all",
  "reply",
  "rewind",
  "rocket",
  "rocking-chair",
  "rotate-3d",
  "rotate-ccw",
  "rotate-cw",
  "rss",
  "ruler",
  "russian-ruble",
  "save",
  "scale-3d",
  "scale",
  "scaling",
  "scan-face",
  "scan-line",
  "scan",
  "scissors",
  "screen-share-off",
  "screen-share",
  "scroll",
  "search",
  "send",
  "separator-horizontal",
  "separator-vertical",
  "server-cog",
  "server-crash",
  "server-off",
  "server",
  "settings-2",
  "settings",
  "share-2",
  "share",
  "sheet",
  "shield-alert",
  "shield-check",
  "shield-close",
  "shield-off",
  "shield",
  "shirt",
  "shopping-bag",
  "shopping-cart",
  "shovel",
  "shrink",
  "shrub",
  "shuffle",
  "sidebar-close",
  "sidebar-open",
  "sidebar",
  "sigma",
  "signal-high",
  "signal-low",
  "signal-medium",
  "signal-zero",
  "signal",
  "siren",
  "skip-back",
  "skip-forward",
  "skull",
  "slack",
  "slash",
  "slice",
  "sliders-horizontal",
  "sliders",
  "smartphone-charging",
  "smartphone",
  "smile-plus",
  "smile",
  "snowflake",
  "sofa",
  "sort-asc",
  "sort-desc",
  "speaker",
  "sprout",
  "square",
  "star-half",
  "star-off",
  "star",
  "stethoscope",
  "sticker",
  "sticky-note",
  "stop-circle",
  "stretch-horizontal",
  "stretch-vertical",
  "strikethrough",
  "subscript",
  "sun-dim",
  "sun-medium",
  "sun-moon",
  "sun-snow",
  "sun",
  "sunrise",
  "sunset",
  "superscript",
  "swiss-franc",
  "switch-camera",
  "sword",
  "swords",
  "syringe",
  "table-2",
  "table",
  "tablet",
  "tag",
  "tags",
  "target",
  "tent",
  "terminal-square",
  "terminal",
  "text-cursor-input",
  "text-cursor",
  "thermometer-snowflake",
  "thermometer-sun",
  "thermometer",
  "thumbs-down",
  "thumbs-up",
  "ticket",
  "timer-off",
  "timer-reset",
  "timer",
  "toggle-left",
  "toggle-right",
  "tornado",
  "toy-brick",
  "train",
  "trash-2",
  "trash",
  "tree-deciduous",
  "tree-pine",
  "trees",
  "trello",
  "trending-down",
  "trending-up",
  "triangle",
  "trophy",
  "truck",
  "tv-2",
  "tv",
  "twitch",
  "twitter",
  "type",
  "umbrella",
  "underline",
  "undo-2",
  "undo",
  "unlink-2",
  "unlink",
  "unlock",
  "upload-cloud",
  "upload",
  "usb",
  "user-check",
  "user-cog",
  "user-minus",
  "user-plus",
  "user-x",
  "user",
  "users",
  "utensils-crossed",
  "utensils",
  "venetian-mask",
  "verified",
  "vibrate-off",
  "vibrate",
  "video-off",
  "video",
  "view",
  "voicemail",
  "volume-1",
  "volume-2",
  "volume-x",
  "volume",
  "wallet",
  "wand-2",
  "wand",
  "watch",
  "waves",
  "webcam",
  "webhook",
  "wifi-off",
  "wifi",
  "wind",
  "wine",
  "wrap-text",
  "wrench",
  "x-circle",
  "x-octagon",
  "x-square",
  "x",
  "youtube",
  "zap-off",
  "zap",
  "zoom-in",
  "zoom-out",
  "create-new",
  "trash",
  "search",
  "right-triangle",
  "document",
  "folder",
  "pencil",
  "left-arrow",
  "right-arrow",
  "three-horizontal-bars",
  "dot-network",
  "audio-file",
  "image-file",
  "pdf-file",
  "gear",
  "documents",
  "blocks",
  "go-to-file",
  "presentation",
  "cross-in-box",
  "microphone",
  "microphone-filled",
  "two-columns",
  "link",
  "popup-open",
  "checkmark",
  "hashtag",
  "left-arrow-with-tail",
  "right-arrow-with-tail",
  "up-arrow-with-tail",
  "down-arrow-with-tail",
  "lines-of-text",
  "vertical-three-dots",
  "pin",
  "magnifying-glass",
  "info",
  "horizontal-split",
  "vertical-split",
  "calendar-with-checkmark",
  "folder-minus",
  "sheets-in-box",
  "up-and-down-arrows",
  "broken-link",
  "cross",
  "any-key",
  "reset",
  "star",
  "crossed-star",
  "dice",
  "filled-pin",
  "enter",
  "help",
  "vault",
  "open-vault",
  "paper-plane",
  "bullet-list",
  "uppercase-lowercase-a",
  "star-list",
  "expand-vertically",
  "languages",
  "switch",
  "pane-layout",
  "install",
  "sync",
  "check-in-circle",
  "sync-small",
  "check-small",
  "paused",
  "forward-arrow",
  "stacked-levels",
  "bracket-glyph",
  "note-glyph",
  "tag-glyph",
  "price-tag-glyph",
  "heading-glyph",
  "bold-glyph",
  "italic-glyph",
  "strikethrough-glyph",
  "highlight-glyph",
  "code-glyph",
  "quote-glyph",
  "link-glyph",
  "bullet-list-glyph",
  "number-list-glyph",
  "checkbox-glyph",
  "undo-glyph",
  "redo-glyph",
  "up-chevron-glyph",
  "down-chevron-glyph",
  "left-chevron-glyph",
  "right-chevron-glyph",
  "percent-sign-glyph",
  "keyboard-glyph",
  "double-up-arrow-glyph",
  "double-down-arrow-glyph",
  "image-glyph",
  "wrench-screwdriver-glyph",
  "clock",
  "plus-with-circle",
  "minus-with-circle",
  "indent-glyph",
  "unindent-glyph",
  "fullscreen",
  "exit-fullscreen",
  "cloud",
  "run-command",
  "compress-glyph",
  "enlarge-glyph",
  "scissors-glyph",
  "up-curly-arrow-glyph",
  "down-curly-arrow-glyph",
  "plus-minus-glyph",
  "links-going-out",
  "links-coming-in",
  "add-note-glyph",
  "duplicate-glyph",
  "clock-glyph",
  "calendar-glyph",
  "command-glyph",
  "dice-glyph",
  "file-explorer-glyph",
  "graph-glyph",
  "import-glyph",
  "navigate-glyph",
  "open-elsewhere-glyph",
  "presentation-glyph",
  "paper-plane-glyph",
  "question-mark-glyph",
  "restore-file-glyph",
  "search-glyph",
  "star-glyph",
  "play-audio-glyph",
  "stop-audio-glyph",
  "tomorrow-glyph",
  "wand-glyph",
  "workspace-glyph",
  "yesterday-glyph",
  "box-glyph",
  "merge-files-glyph",
  "merge-files",
  "two-blank-pages",
  "scissors",
  "paste",
  "paste-text",
  "split",
  "select-all-text",
  "wand",
  "github-glyph",
  "reading-glasses",
  "user-manual-filled",
  "discord-filled",
  "chat-bubbles-filled",
  "experiment-filled",
  "bracket-glyph",
  "box-glyph",
  "check-small",
  "dice-glyph",
  "dice",
  "discord",
  "right-triangle",
  "heading-glyph",
  "help",
  "keyboard-toggle",
  "broken-link",
  "experiment",
  "left-arrow",
  "link",
  "link-glyph",
  "links-coming-in",
  "links-going-out",
  "open-vault",
  "paused",
  "question-mark-glyph",
  "right-arrow",
  "sidebar-left",
  "sidebar-right",
  "sheets-in-box",
  "star-list",
  "sync-small",
  "tabs",
  "uppercase-lowercase-a",
  "vault",
  "stack-horizontal",
  "stack-vertical",
  "stretch-horizontal",
  "stretch-vertical",
  "distribute-space-horizontal",
  "distribute-space-vertical",
];
let l;
const r = (t) => {
    l = e.requireApiVersion("0.15.0") ? activeWindow.document : window.document;
    let o = l.getElementById("cMenuToolbarModalBar");
    o && (o.style.visibility = 0 == t ? "hidden" : "visible");
  },
  s = (t) => {
    l = e.requireApiVersion("0.15.0") ? activeWindow.document : window.document;
    let o = l.getElementById("cMenuToolbarModalBar");
    o &&
      ("following" != t.positionStyle || (o.style.visibility = "hidden"),
      "fixed" == t.positionStyle &&
        o.setAttribute(
          "style",
          `left: calc(50% - calc(${o.offsetWidth}px / 2)); bottom: ${t.cMenuBottomValue}em; grid-template-columns: ${"1fr ".repeat(t.cMenuNumRows)}`,
        ));
  };
var c = {
  "Editing Toolbar append method": "Editing Toolbar append method",
  "Choose where Editing Toolbar will append upon regeneration. To see the change, hit the refresh button below, or in the status bar menu.":
    "Choose where Editing Toolbar will append upon regeneration. To see the change, hit the refresh button below, or in the status bar menu.",
  "Editing Toolbar aesthetic": "Editing Toolbar aesthetic",
  "Choose between a glass morphism ,tiny and default style for Editing Toolbar. To see the change, hit the refresh button below, or in the status bar menu.":
    "Choose between a glass morphism ,tiny and default style for Editing Toolbar. To see the change, hit the refresh button below, or in the status bar menu.",
  "Editing Toolbar position": "Editing Toolbar position",
  "Choose between fixed position or cursor following mode.":
    "Choose between fixed position , cursor following  or Top mode .",
  "Editing Toolbar columns": "Editing Toolbar columns",
  "Choose the number of columns per row to display on Editing Toolbar. To see the change, hit the refresh button below, or in the status bar menu.":
    "Choose the number of columns per row to display on Editing Toolbar. To see the change, hit the refresh button below, or in the status bar menu.",
  "Editing Toolbar refresh": "Editing Toolbar refresh",
  "Editing Toolbar commands": "Editing Toolbar commands",
  "Add a command onto Editing Toolbar from Obsidian's commands library. To reorder the commands, drag and drop the command items. To delete them, use the delete buttom to the right of the command item. Editing Toolbar will not automaticaly refresh after reordering commands. Use the refresh button above.":
    "Add a command onto Editing Toolbar from Obsidian's commands library. To reorder the commands, drag and drop the command items. To delete them, use the delete buttom to the right of the command item. Editing Toolbar will not automaticaly refresh after reordering commands. Use the refresh button above.",
  "Format Brush Off!": "Format Brush Off!",
  "Hide & Show": "Hide & Show",
  "Editing Toolbar will only refresh automatically after you have either added or deleted a command from it. To see UI changes to cMenuToolbar (above settings changes) use the refresh button. If you forget to refresh in settings, no worries. There is also a refresh button in the cMenuToolbar status bar menu.":
    "Editing Toolbar will only refresh automatically after you have either added or deleted a command from it. To see UI changes to cMenuToolbar (above settings changes) use the refresh button. If you forget to refresh in settings, no worries. There is also a refresh button in the cMenuToolbar status bar menu.",
  "Font-Color formatting brush ON!": "Font-Color formatting brush ON!",
  More: "More",
  "Font Colors": "Font Colors",
  "Format Brush": "Format Brush",
  "Background color": "Background color",
  Refresh: "Refresh",
  Add: "Add",
  Delete: "Delete",
  "Change Command name": "Change Command name",
  "Add submenu": "Add submenu",
  "add hr": "add hr",
  "Enter the icon code, it looks like <svg>.... </svg> format":
    "Enter the icon code, it looks like <svg>.... </svg> format",
  "Please enter a new name：": "Please enter a new name：",
  "Drag the slider to move the position":
    "Drag the slider to move the position",
  "Plugin Settings": "Plugin Settings",
  "Background-color formatting brush ON!":
    "Background-color formatting brush ON!\nClick the  mouse middle or right key to close the formatting-brush",
  "Clear formatting brush ON!": "Clear formatting brush ON!",
  "Clear formatting brush ON!\nClick the  mouse middle or right key to close the formatting-brush":
    "Clear formatting brush ON!\nClick the  mouse middle or right key to close the formatting-brush",
  "The toolbar is displayed when the mouse moves over it, otherwise it is automatically hidden":
    "The toolbar is displayed when the mouse moves over it, otherwise it is automatically hidden",
  "Editing Toolbar Auto-hide": "Editing Toolbar Auto-hide",
  "Custom Backgroud Color": "Custom Backgroud Color",
  "Custom Font Color": "Custom Font Color",
  "🎨 Set custom background": "🎨 Set custom background",
  "🖌️ Set custom font color": "🖌️ Set custom font color",
  "Click on the picker to adjust the colour":
    "Click on the picker to adjust the colour",
  "Mobile enabled or not": "Mobile enabled or not",
  "Whether to enable the plugin for the mobile client, the default is enabled.":
    "Whether to enable the plugin for the mobile client, the default is enabled.",
  "Whether to enable on mobile devices with device width less than 768px, the default is disable.":
    "Whether to enable on mobile devices with device width less than 768px, the default is disable.",
};
const d = {
  ar: {},
  cs: {},
  da: {},
  de: {},
  en: c,
  "en-gb": {},
  es: {},
  fr: {},
  hi: {},
  id: {},
  it: {},
  ja: {},
  ko: {},
  nl: {},
  nn: {},
  pl: {},
  pt: {},
  "pt-br": {},
  ro: {},
  ru: {},
  tr: {},
  "zh-cn": {
    "Editing Toolbar append method": "工具栏的附加方法。",
    "Choose where Editing Toolbar will append upon regeneration. To see the change, hit the refresh button below, or in the status bar menu.":
      "工具栏在Obsidian中的追加的位置，只对固定和跟随模式有效。如果你遇到工具栏显示问题，可以选择body试试。请点击下面或者状态栏菜单中的刷新按钮生效。",
    "Editing Toolbar aesthetic": "工具栏样式",
    "Choose between a glass morphism ,tiny and default style for Editing Toolbar. To see the change, hit the refresh button below, or in the status bar menu.":
      "样式有毛玻璃,简约和默认风格选择。请点击下面或者状态栏菜单中的刷新按钮生效。",
    "Editing Toolbar position": "工具栏位置",
    "Choose between fixed position or cursor following mode.":
      "在固定位置,光标跟随模式或者置顶模式之间进行选择。",
    "Editing Toolbar columns": "工具栏栏目数",
    "Choose the number of columns per row to display on Editing Toolbar. To see the change, hit the refresh button below, or in the status bar menu.":
      "选择在Editing Toolbar上显示的每行的列数。",
    "Editing Toolbar refresh": "刷新工具栏",
    "Editing Toolbar commands": "在工具栏中添加命令",
    "Add a command onto Editing Toolbar from Obsidian's commands library. To reorder the commands, drag and drop the command items. To delete them, use the delete buttom to the right of the command item. Editing Toolbar will not automaticaly refresh after reordering commands. Use the refresh button above.":
      "从Obsidian的命令库中添加一个命令到工具栏。要重新排列命令，可以拖放命令项。要删除它们，请使用命令项右边的删除按钮。图标选择Custom可以自定义图标",
    "Format Brush Off!": "关闭格式刷！",
    "Hide & Show": "隐藏 & 显示",
    "Editing Toolbar will only refresh automatically after you have either added or deleted a command from it. To see UI changes to cMenuToolbar (above settings changes) use the refresh button. If you forget to refresh in settings, no worries. There is also a refresh button in the cMenuToolbar status bar menu.":
      "对外观的更改生效需要使用刷新按钮。如果你忘记在设置中刷新，在状态栏菜单中也有一个刷新按钮。",
    "Font-Color formatting brush ON!":
      "字体颜色格式刷开启\n点击鼠标中键或者右键关闭格式刷",
    More: "更多",
    "Font Colors": "字体颜色",
    "Format Brush": "格式刷",
    "Background color": "背景颜色",
    Refresh: "刷新",
    Add: "添加",
    Delete: "删除",
    "Change Command name": "更改命令名称",
    "Add submenu": "添加子菜单",
    "add hr": "添加分割线",
    "Enter the icon code, it looks like <svg>.... </svg> format":
      "输入图标代码，类似<svg>.... </svg>格式",
    "Please enter a new name：": "请输入新名称：",
    "Drag the slider to move the position": "拖动滑块来移动位置",
    "Plugin Settings": "插件设置",
    "Background-color formatting brush ON!": "开启背景色格式刷",
    "Clear formatting brush ON!": "清除格式刷已开启",
    "Clear formatting brush ON!\nClick the  mouse middle or right key to close the formatting-brush":
      "清除格式刷已开启\n点击鼠标中键或者右键关闭格式刷",
    "The toolbar is displayed when the mouse moves over it, otherwise it is automatically hidden":
      "当鼠标移到工具栏上方时，工具栏显示，否则自动隐藏",
    "Editing Toolbar Auto-hide": "工具栏是否自动隐藏",
    "Custom Backgroud Color": "设置自定义背景色",
    "Custom Font Color": "设置自定义字体颜色",
    "🎨 Set custom background": "🎨 设置自定义背景",
    "🖌️ Set custom font color": "🖌️ 设置自定义字体颜色",
    "Click on the picker to adjust the colour": "点击选取器来调整颜色",
    "Mobile enabled or not": "是否在移动端启用",
    "Whether to enable on mobile devices with device width less than 768px, the default is disable.":
      "是否在设备宽度小于768的移动设备启用。默认不启用",
  },
  "zh-tw": {},
}[e.moment.locale()];
function u(e) {
  return (d && d[e]) || c[e];
}
class h extends e.FuzzySuggestModal {
  constructor(e, t, o = !1) {
    super(e.app),
      (this.plugin = e),
      (this.command = t),
      (this.issub = o),
      this.setPlaceholder("Choose an icon");
  }
  capitalJoin(e) {
    return e
      .split(" ")
      .map((e) => e[0].toUpperCase() + e.substring(1))
      .join(" ");
  }
  getItems() {
    return a;
  }
  getItemText(e) {
    return this.capitalJoin(
      e
        .replace("feather-", "")
        .replace("remix-", "")
        .replace("bx-", "")
        .replace(/([A-Z])/g, " $1")
        .trim()
        .replace(/-/gi, " "),
    );
  }
  renderSuggestion(t, o) {
    const n = createSpan({ cls: "cMenuToolbarIconPick" });
    o.appendChild(n), e.setIcon(n, t.item), super.renderSuggestion(t, o);
  }
  onChooseItem(e) {
    return t(this, void 0, void 0, function* () {
      if ("Custom" === e)
        new g(this.app, this.plugin, this.command, this.issub).open();
      else {
        if (this.command.icon) {
          let t = i(this.plugin, this.command, this.issub);
          this.issub
            ? (this.plugin.settings.menuCommands[t.index].SubmenuCommands[
                t.subindex
              ].icon = e)
            : (this.plugin.settings.menuCommands[t.index].icon = e);
        } else
          (this.command.icon = e),
            this.plugin.settings.menuCommands.push(this.command);
        yield this.plugin.saveSettings(),
          setTimeout(() => {
            dispatchEvent(new Event("cMenuToolbar-NewCommand"));
          }, 100),
          console.log(
            `%cCommand '${this.command.name}' was added to cMenuToolbar`,
            "color: Violet",
          );
      }
    });
  }
}
class p extends e.FuzzySuggestModal {
  constructor(e) {
    super(e.app),
      (this.plugin = e),
      this.app,
      this.setPlaceholder("Choose a command");
  }
  getItems() {
    return app.commands.listCommands();
  }
  getItemText(e) {
    return e.name;
  }
  onChooseItem(o) {
    return t(this, void 0, void 0, function* () {
      this.plugin.settings.menuCommands.findIndex((e) => e.id == o.id) > -1
        ? new e.Notice("The command" + o.name + "already exists", 3e3)
        : o.icon
          ? (this.plugin.settings.menuCommands.push(o),
            yield this.plugin.saveSettings(),
            setTimeout(() => {
              dispatchEvent(new Event("cMenuToolbar-NewCommand"));
            }, 100),
            console.log(
              `%cCommand '${o.name}' was added to cMenuToolbar`,
              "color: Violet",
            ))
          : new h(this.plugin, o, !1).open();
    });
  }
}
class g extends e.Modal {
  constructor(e, t, o, n) {
    super(t.app),
      (this.plugin = t),
      (this.item = o),
      (this.issub = n),
      this.containerEl.addClass("cMenuToolbar-Modal"),
      this.containerEl.addClass("customicon");
  }
  onOpen() {
    var o;
    const { contentEl: n } = this;
    n.createEl("b", {
      text: u("Enter the icon code, it looks like <svg>.... </svg> format"),
    });
    const a = new e.TextAreaComponent(n);
    a.inputEl.classList.add("wideInputPromptInputEl"),
      a
        .setPlaceholder("")
        .setValue(null !== (o = this.item.icon) && void 0 !== o ? o : "")
        .onChange(
          e.debounce(
            (e) =>
              t(this, void 0, void 0, function* () {
                this.item.icon = e;
                let t = i(this.plugin, this.item, this.issub);
                if (this.issub) {
                  let o = t.subindex;
                  -1 === o
                    ? this.plugin.settings.menuCommands[
                        t.index
                      ].SubmenuCommands.push(this.item)
                    : (this.plugin.settings.menuCommands[
                        t.index
                      ].SubmenuCommands[o].icon = e);
                } else {
                  let e = t.index;
                  -1 === e
                    ? this.plugin.settings.menuCommands.push(this.item)
                    : (this.plugin.settings.menuCommands[e].icon =
                        this.item.icon);
                }
                yield this.plugin.saveSettings();
              }),
            100,
            !0,
          ),
        )
        .inputEl.addEventListener("keydown", this.submitEnterCallback);
  }
  onClose() {
    const { contentEl: e } = this;
    e.empty(),
      setTimeout(() => {
        dispatchEvent(new Event("cMenuToolbar-NewCommand"));
      }, 100);
  }
}
class m extends e.Modal {
  constructor(e, t, o, n) {
    super(t.app),
      (this.plugin = t),
      (this.item = o),
      (this.issub = n),
      this.containerEl.addClass("cMenuToolbar-Modal"),
      this.containerEl.addClass("changename");
  }
  onOpen() {
    var o;
    const { contentEl: n } = this;
    n.createEl("b", { text: u("Please enter a new name：") });
    const a = new e.TextComponent(n);
    a.inputEl.classList.add("InputPromptInputEl"),
      a
        .setPlaceholder("")
        .setValue(null !== (o = this.item.name) && void 0 !== o ? o : "")
        .onChange(
          e.debounce(
            (e) =>
              t(this, void 0, void 0, function* () {
                let t = i(this.plugin, this.item, this.issub);
                if (((this.item.name = e), this.issub)) {
                  let o = t.subindex;
                  -1 === o
                    ? this.plugin.settings.menuCommands[
                        t.index
                      ].SubmenuCommands.push(this.item)
                    : (this.plugin.settings.menuCommands[
                        t.index
                      ].SubmenuCommands[o].name = e);
                } else {
                  let e = t.index;
                  -1 === e
                    ? this.plugin.settings.menuCommands.push(this.item)
                    : (this.plugin.settings.menuCommands[e].name =
                        this.item.name);
                }
                yield this.plugin.saveSettings();
              }),
            100,
            !0,
          ),
        )
        .inputEl.addEventListener("keydown", this.submitEnterCallback);
  }
  onClose() {
    const { contentEl: e } = this;
    e.empty(),
      setTimeout(() => {
        dispatchEvent(new Event("cMenuToolbar-NewCommand"));
      }, 100);
  }
}
class f extends e.Modal {
  constructor(e, t) {
    super(t.app),
      (this.plugin = t),
      this.containerEl.addClass("cMenuToolbar-Modal");
  }
  onOpen() {
    const { contentEl: o } = this;
    if (
      (o.createEl("p", { text: u("Drag the slider to move the position") }),
      "top" == this.plugin.settings.positionStyle)
    ) {
      let n = 5 * (this.plugin.settings.cMenuBottomValue - 4.25);
      new e.SliderComponent(o)
        .setLimits(0, 80, 0.5)
        .setValue(n)
        .onChange(
          e.debounce(
            (e) =>
              t(this, void 0, void 0, function* () {
                console.log(`%c${e}px`, "color: Violet"),
                  (this.plugin.settings.cMenuBottomValue = e / 5 + 4.25),
                  s(this.plugin.settings),
                  yield this.plugin.saveSettings(),
                  setTimeout(() => {
                    dispatchEvent(new Event("cMenuToolbar-NewCommand"));
                  }, 100);
              }),
            100,
            !0,
          ),
        )
        .setDynamicTooltip();
    } else
      new e.SliderComponent(o)
        .setLimits(2, 18, 0.25)
        .setValue(this.plugin.settings.cMenuBottomValue)
        .onChange(
          e.debounce(
            (e) =>
              t(this, void 0, void 0, function* () {
                console.log(`%c${e}em`, "color: Violet"),
                  (this.plugin.settings.cMenuBottomValue = e),
                  s(this.plugin.settings),
                  yield this.plugin.saveSettings(),
                  setTimeout(() => {
                    dispatchEvent(new Event("cMenuToolbar-NewCommand"));
                  }, 100);
              }),
            100,
            !0,
          ),
        )
        .setDynamicTooltip();
  }
  onClose() {
    const { contentEl: e } = this;
    e.empty();
  }
}
const b = ["body", "workspace"],
  v = ["glass", "default", "tiny"],
  y = ["fixed", "following", "top"],
  w = {
    aestheticStyle: "default",
    positionStyle: "top",
    menuCommands: [
      {
        id: "editing-toolbar:editor-undo",
        name: "undo editor",
        icon: "undo-glyph",
      },
      {
        id: "editing-toolbar:editor-redo",
        name: "redo editor",
        icon: "redo-glyph",
      },
      {
        id: "editing-toolbar:format-eraser",
        name: "Clear text formatting",
        icon: '<svg width="18" height="18" focusable="false" fill="currentColor"  viewBox="0 0 1024 1024"><g transform="scale(1, -1) translate(0, -896) scale(0.9, 0.9) "><path class="path" d="M889 512 l-211 211 q-26 27 -61 36 q-35 9 -70 0 q-35 -9 -61 -36 l-351 -350 q-26 -27 -35.5 -62 q-9.5 -35 0 -70 q9.5 -35 35.5 -61 l170 -170 q12 -12 29 -12 l215 0 q17 0 29 12 l311 310 q26 26 35.5 61 q9.5 35 0 70 q-9.5 35 -35.5 61 ZM831 453 q15 -15 15.5 -36.5 q0.5 -21.5 -14.5 -37.5 l-300 -298 l-181 0 l-158 158 q-15 15 -15 37 q0 22 15 38 l351 351 q16 16 38 16 q22 0 37 -16 l212 -212 ZM686 217 l-59 -59 l-317 315 l58 59 l318 -315 ZM883 81 q18 0 30.5 -12 q12.5 -12 12.5 -29 q0 -17 -12.5 -29 q-12.5 -12 -29.5 -13 l-456 0 q-17 0 -29.5 12 q-12.5 12 -12.5 29 q0 17 12 29 q12 12 29 13 l456 0 Z"></path></g></svg>',
      },
      {
        id: "editing-toolbar:header2-text",
        name: "Header 2",
        icon: "header-2",
      },
      {
        id: "editing-toolbar:header3-text",
        name: "Header 3",
        icon: "header-3",
      },
      {
        id: "SubmenuCommands-header",
        name: "submenu",
        icon: "header-n",
        SubmenuCommands: [
          {
            id: "editing-toolbar:header1-text",
            name: "Header 1",
            icon: "header-1",
          },
          {
            id: "editing-toolbar:header4-text",
            name: "Header 4",
            icon: "header-4",
          },
          {
            id: "editing-toolbar:header5-text",
            name: "Header 5",
            icon: "header-5",
          },
          {
            id: "editing-toolbar:header6-text",
            name: "Header 6",
            icon: "header-6",
          },
        ],
      },
      {
        id: "editing-toolbar:editor:toggle-bold",
        name: "Toggle bold",
        icon: "bold-glyph",
      },
      {
        id: "editing-toolbar:editor:toggle-italics",
        name: "Toggle italics",
        icon: "italic-glyph",
      },
      {
        id: "editing-toolbar:editor:toggle-strikethrough",
        name: "Toggle strikethrough",
        icon: "strikethrough-glyph",
      },
      {
        id: "editing-toolbar:underline",
        name: "Toggle underline",
        icon: "underline-glyph",
      },
      {
        id: "editor:toggle-highlight",
        name: "==Toggle highlight ==",
        icon: "highlight-glyph",
      },
      {
        id: "SubmenuCommands-lucdf3en5",
        name: "submenu",
        icon: "edit",
        SubmenuCommands: [
          {
            id: "editing-toolbar:editor-copy",
            name: " copy ",
            icon: "lucide-copy",
          },
          {
            id: "editing-toolbar:editor-cut",
            name: " cut ",
            icon: "lucide-scissors",
          },
          {
            id: "editing-toolbar:editor-paste",
            name: "paste ",
            icon: "lucide-clipboard-type",
          },
          {
            id: "editing-toolbar:editor:swap-line-down",
            name: "swap line down",
            icon: "lucide-corner-right-down",
          },
          {
            id: "editing-toolbar:editor:swap-line-up",
            name: "swap line up",
            icon: "lucide-corner-right-up",
          },
        ],
      },
      {
        id: "editing-toolbar:editor:attach-file",
        name: "upload attach file",
        icon: "lucide-paperclip",
      },
      {
        id: "editing-toolbar:editor:insert-table",
        name: "Toggle table",
        icon: "lucide-table",
      },
      {
        id: "editing-toolbar:editor:cycle-list-checklist",
        name: "Toggle cycle list checklist",
        icon: "check-circle",
      },
      {
        id: "SubmenuCommands-luc8efull",
        name: "submenu",
        icon: "message-square",
        SubmenuCommands: [
          {
            id: "editing-toolbar:editor:toggle-blockquote",
            name: "Toggle blockquote",
            icon: "lucide-text-quote",
          },
          {
            id: "editing-toolbar:editor:insert-callout",
            name: "Toggle Callout ",
            icon: "lucide-quote",
          },
        ],
      },
      {
        id: "SubmenuCommands-mdcmder",
        name: "submenu",
        icon: '<svg width="18" height="18" focusable="false" fill="currentColor"  viewBox="0 0 1024 1024"><g transform="scale(1, -1) translate(0, -896) scale(0.9, 0.9) "><path class="path" d="M464 608 l0 -568 q0 -3 -2.5 -5.5 q-2.5 -2.5 -5.5 -2.5 l-80 0 q-3 0 -5.5 2.5 q-2.5 2.5 -2.5 5.5 l0 568 l-232 0 q-3 0 -5.5 2.5 q-2.5 2.5 -2.5 5.5 l0 80 q0 3 2.5 5.5 q2.5 2.5 5.5 2.5 l560 0 q3 0 5.5 -2.5 q2.5 -2.5 2.5 -5.5 l0 -80 q0 -3 -2.5 -5.5 q-2.5 -2.5 -5.5 -2.5 l-232 0 ZM864 696 q17 0 28.5 11.5 q11.5 11.5 11.5 28.5 q0 17 -11.5 28.5 q-11.5 11.5 -28.5 11.5 q-17 0 -28.5 -11.5 q-11.5 -11.5 -11.5 -28.5 q0 -17 11.5 -28.5 q11.5 -11.5 28.5 -11.5 ZM864 640 q-40 0 -68 28 q-28 28 -28 68 q0 40 28 68 q28 28 68 28 q40 0 68 -28 q28 -28 28 -68 q0 -40 -28 -68 q-28 -28 -68 -28 ZM576 322 l0 -63 q0 -3 2 -5 l89 -70 l-89 -70 q-2 -2 -2 -5 l0 -63 q0 -4 3.5 -5.5 q3.5 -1.5 6.5 0.5 l170 133 q4 3 4.5 8.5 q0.5 5.5 -2.5 9.5 l-2 2 l-170 133 q-3 2 -6.5 0.5 q-3.5 -1.5 -3.5 -5.5 ZM256 322 l0 -63 q0 -3 -2 -5 l-89 -70 l89 -70 q2 -2 2 -5 l0 -63 q0 -4 -3.5 -5.5 q-3.5 -1.5 -6.5 0.5 l-170 133 q-4 3 -4.5 8.5 q-0.5 5.5 2.5 9.5 l2 2 l170 133 q3 2 6.5 0.5 q3.5 -1.5 3.5 -5.5 Z"></path></g></svg>',
        SubmenuCommands: [
          {
            id: "editing-toolbar:superscript",
            name: "Toggle superscript",
            icon: "superscript-glyph",
          },
          {
            id: "editing-toolbar:subscript",
            name: "Toggle subscript",
            icon: "subscript-glyph",
          },
          {
            id: "editing-toolbar:editor:toggle-code",
            name: "inline code",
            icon: "code-glyph",
          },
          {
            id: "editing-toolbar:codeblock",
            name: "Toggle codeblock",
            icon: "codeblock-glyph",
          },
          {
            id: "editing-toolbar:editor:insert-wikilink",
            name: "insert wikilink [[]]",
            icon: '<svg width="15" height="15" focusable="false" fill="currentColor"  viewBox="0 0 1024 1024"><g transform="scale(1, -1) translate(0, -896) scale(0.9, 0.9) "><path class="path" d="M306 134 l91 0 q1 0 1 -8 l0 -80 q0 -8 -1 -8 l-91 0 q-1 0 -1 7 q0 -8 -5 -8 l-45 0 q-5 0 -5 8 l0 784 q0 8 5 8 l45 0 q5 0 5 -8 q0 8 1 8 l91 0 q1 0 1 -8 l0 -80 q0 -8 -1 -8 l-91 0 q-1 0 -1 8 l0 -623 q0 8 1 8 ZM139 134 l91 0 q1 0 1 -8 l0 -80 q0 -8 -1 -8 l-91 0 q-1 0 -1 7 q0 -8 -5 -8 l-45 0 q-5 0 -5 8 l0 784 q0 8 5 8 l45 0 q5 0 5 -8 q0 8 1 8 l91 0 q1 0 1 -8 l0 -80 q0 -8 -1 -8 l-91 0 q-1 0 -1 8 l0 -623 q0 8 1 8 ZM711 134 q1 0 1 -8 l0 623 q0 -8 -1 -8 l-91 0 q-1 0 -1 8 l0 80 q0 8 1 8 l91 0 q1 0 1 -8 q0 8 4 8 l46 0 q4 0 4 -8 l0 -784 q0 -8 -4 -8 l-46 0 q-4 0 -4 8 q0 -7 -1 -7 l-91 0 q-1 0 -1 8 l0 80 q0 8 1 8 l91 0 ZM878 134 q1 0 1 -8 l0 623 q0 -8 -1 -8 l-91 0 q-1 0 -1 8 l0 80 q0 8 1 8 l91 0 q1 0 1 -8 q0 8 5 8 l45 0 q4 0 4 -8 l0 -784 q0 -8 -4 -8 l-45 0 q-5 0 -5 8 q0 -7 -1 -7 l-91 0 q-1 0 -1 8 l0 80 q0 8 1 8 l91 0 Z"></path></g></svg>',
          },
          {
            id: "editing-toolbar:editor:insert-embed",
            name: "insert embed ![[]]",
            icon: "note-glyph",
          },
          {
            id: "editing-toolbar:editor:insert-link",
            name: "insert link []()",
            icon: "link-glyph",
          },
          {
            id: "editing-toolbar:hrline",
            name: "Horizontal divider",
            icon: '<svg width="18" height="18" focusable="false" fill="currentColor"  viewBox="0 0 1024 1024"><g transform="scale(1, -1) translate(0, -896) scale(0.9, 0.9) "><path class="path" d="M912 424 l0 -80 q0 -3 -2.5 -5.5 q-2.5 -2.5 -5.5 -2.5 l-784 0 q-3 0 -5.5 2.5 q-2.5 2.5 -2.5 5.5 l0 80 q0 3 2.5 5.5 q2.5 2.5 5.5 2.5 l784 0 q3 0 5.5 -2.5 q2.5 -2.5 2.5 -5.5 Z"></path></g></svg>',
          },
          {
            id: "editing-toolbar:editor:toggle-inline-math",
            name: "Toggle inline math",
            icon: "lucide-sigma",
          },
          {
            id: "editing-toolbar:editor:insert-mathblock",
            name: "Toggle MathBlock",
            icon: "lucide-sigma-square",
          },
        ],
      },
      {
        id: "SubmenuCommands-list",
        name: "submenu-list",
        icon: "bullet-list-glyph",
        SubmenuCommands: [
          {
            id: "editing-toolbar:editor:toggle-checklist-status",
            name: "checklist",
            icon: "checkbox-glyph",
          },
          {
            id: "editor:toggle-numbered-list",
            name: "numbered list",
            icon: '<svg width="18" height="18" focusable="false" fill="currentColor"  viewBox="0 0 1024 1024"><g transform="scale(1, -1) translate(0, -896) scale(0.9, 0.9) "><path class="path" d="M860 424 q17 0 28.5 -11.5 q11.5 -11.5 11.5 -28 q0 -16.5 -11.5 -28.5 q-11.5 -12 -27.5 -12 l-457 0 q-17 0 -28.5 11.5 q-11.5 11.5 -11.5 28 q0 16.5 11.5 28.5 q11.5 12 27.5 12 l457 0 ZM860 756 q17 0 28.5 -11.5 q11.5 -11.5 11.5 -28 q0 -16.5 -11.5 -28.5 q-11.5 -12 -27.5 -12 l-457 0 q-17 0 -28.5 11.5 q-11.5 11.5 -11.5 28 q0 16.5 11.5 28.5 q11.5 12 27.5 12 l457 0 ZM860 92 q17 0 28.5 -11.5 q11.5 -11.5 11.5 -28 q0 -16.5 -11.5 -28.5 q-11.5 -12 -27.5 -12 l-457 0 q-17 0 -28.5 11.5 q-11.5 11.5 -11.5 28 q0 16.5 11.5 28.5 q11.5 12 27.5 12 l457 0 ZM264 136 l-3 -3 l-51 -57 l56 0 q14 0 24.5 -10 q10.5 -10 11.5 -25 l0 -1 q0 -15 -10.5 -25.5 q-10.5 -10.5 -24.5 -10.5 l-137 0 q-15 0 -25 10 q-10 10 -11 24.5 q-1 14.5 9 25.5 l63 70 l49 54 q7 7 7 16.5 q0 9.5 -7.5 16.5 q-7.5 7 -18.5 7 q-11 0 -18.5 -6.5 q-7.5 -6.5 -8.5 -16.5 l0 0 q0 -15 -10.5 -25.5 q-10.5 -10.5 -25.5 -10.5 q-15 0 -25.5 10.5 q-10.5 10.5 -10.5 25.5 q0 26 13.5 47.5 q13.5 21.5 36 34.5 q22.5 13 49 13 q26.5 0 49.5 -13 q23 -13 36 -34.5 q13 -21.5 13 -47.5 q0 -20 -7.5 -37.5 q-7.5 -17.5 -21.5 -30.5 l-1 -1 ZM173 794 q11 11 25 10.5 q14 -0.5 24.5 -10.5 q10.5 -10 10.5 -25 l0 -293 q0 -15 -10 -25.5 q-10 -10.5 -25 -10.5 q-15 0 -25.5 10 q-10.5 10 -11.5 25 l0 211 q-10 -8 -23.5 -7 q-13.5 1 -22.5 11 l-1 0 q-10 11 -9.5 25.5 q0.5 14.5 10.5 24.5 l58 54 Z"></path></g></svg>',
          },
          {
            id: "editor:toggle-bullet-list",
            name: "bullet list",
            icon: '<svg width="18" height="18" focusable="false" fill="currentColor"  viewBox="0 0 1024 1024"><g transform="scale(1, -1) translate(0, -896) scale(0.9, 0.9) "><path class="path" d="M860 424 q17 0 28.5 -11.5 q11.5 -11.5 11.5 -28 q0 -16.5 -11.5 -28.5 q-11.5 -12 -27.5 -12 l-477 0 q-17 0 -28.5 11.5 q-11.5 11.5 -11.5 28 q0 16.5 11.5 28.5 q11.5 12 27.5 12 l477 0 ZM860 756 q17 0 28.5 -11.5 q11.5 -11.5 11.5 -28 q0 -16.5 -11.5 -28.5 q-11.5 -12 -27.5 -12 l-477 0 q-17 0 -28.5 11.5 q-11.5 11.5 -11.5 28 q0 16.5 11.5 28.5 q11.5 12 27.5 12 l477 0 ZM860 92 q17 0 28.5 -11.5 q11.5 -11.5 11.5 -28 q0 -16.5 -11.5 -28.5 q-11.5 -12 -27.5 -12 l-477 0 q-17 0 -28.5 11.5 q-11.5 11.5 -11.5 28 q0 16.5 11.5 28.5 q11.5 12 27.5 12 l477 0 ZM176 716 l0 0 ZM112 716 q0 -27 18.5 -45.5 q18.5 -18.5 45.5 -18.5 q27 0 45.5 18.5 q18.5 18.5 18.5 45.5 q0 27 -18.5 45.5 q-18.5 18.5 -45.5 18.5 q-27 0 -45.5 -18.5 q-18.5 -18.5 -18.5 -45.5 ZM176 384 l0 0 ZM112 384 q0 -27 18.5 -45.5 q18.5 -18.5 45.5 -18.5 q27 0 45.5 18.5 q18.5 18.5 18.5 45.5 q0 27 -18.5 45.5 q-18.5 18.5 -45.5 18.5 q-27 0 -45.5 -18.5 q-18.5 -18.5 -18.5 -45.5 ZM176 52 l0 0 ZM112 52 q0 -27 18.5 -45.5 q18.5 -18.5 45.5 -18.5 q27 0 45.5 18.5 q18.5 18.5 18.5 45.5 q0 27 -18.5 45.5 q-18.5 18.5 -45.5 18.5 q-27 0 -45.5 -18.5 q-18.5 -18.5 -18.5 -45.5 Z"></path></g></svg>',
          },
          {
            id: "editing-toolbar:undent-list",
            name: "unindent-list",
            icon: '<svg width="18" height="18" focusable="false" fill="currentColor"  viewBox="0 0 1024 1024"><g transform="scale(1, -1) translate(0, -896) scale(0.9, 0.9) "><path class="path" d="M872 302 q17 0 28.5 -11.5 q11.5 -11.5 11.5 -28 q0 -16.5 -11.5 -28.5 q-11.5 -12 -27.5 -12 l-429 0 q-17 0 -28.5 11.5 q-11.5 11.5 -11.5 28 q0 16.5 11.5 28.5 q11.5 12 27.5 12 l429 0 ZM872 542 q17 0 28.5 -11.5 q11.5 -11.5 11.5 -28 q0 -16.5 -11.5 -28.5 q-11.5 -12 -27.5 -12 l-429 0 q-17 0 -28.5 11.5 q-11.5 11.5 -11.5 28 q0 16.5 11.5 28.5 q11.5 12 27.5 12 l429 0 ZM872 784 q17 0 28.5 -11.5 q11.5 -11.5 11.5 -28 q0 -16.5 -11.5 -28.5 q-11.5 -12 -27.5 -12 l-721 0 q-17 0 -28.5 11.5 q-11.5 11.5 -11.5 28 q0 16.5 11.5 28.5 q11.5 12 27.5 12 l721 0 ZM872 62 q17 0 28.5 -11.5 q11.5 -11.5 11.5 -28 q0 -16.5 -11.5 -28.5 q-11.5 -12 -27.5 -12 l-721 0 q-17 0 -28.5 11.5 q-11.5 11.5 -11.5 28 q0 16.5 11.5 28.5 q11.5 12 27.5 12 l721 0 ZM244 534 l-123 -122 q-8 -7 -8 -18 q0 -11 8 -18 l123 -122 q8 -7 19 -7 q11 0 18.5 7.5 q7.5 7.5 7.5 18.5 l0 242 q0 11 -7.5 18.5 q-7.5 7.5 -18.5 7.5 q-11 0 -19 -7 Z"></path></g></svg>',
          },
          {
            id: "editing-toolbar:indent-list",
            name: "indent list",
            icon: '<svg width="18" height="18" focusable="false" fill="currentColor"  viewBox="0 0 1024 1024"><g transform="scale(1, -1) translate(0, -896) scale(0.9, 0.9) "><path class="path" d="M872 302 q17 0 28.5 -11.5 q11.5 -11.5 11.5 -28 q0 -16.5 -11.5 -28.5 q-11.5 -12 -27.5 -12 l-429 0 q-17 0 -28.5 11.5 q-11.5 11.5 -11.5 28 q0 16.5 11.5 28.5 q11.5 12 27.5 12 l429 0 ZM872 542 q17 0 28.5 -11.5 q11.5 -11.5 11.5 -28 q0 -16.5 -11.5 -28.5 q-11.5 -12 -27.5 -12 l-429 0 q-17 0 -28.5 11.5 q-11.5 11.5 -11.5 28 q0 16.5 11.5 28.5 q11.5 12 27.5 12 l429 0 ZM872 784 q17 0 28.5 -11.5 q11.5 -11.5 11.5 -28 q0 -16.5 -11.5 -28.5 q-11.5 -12 -27.5 -12 l-721 0 q-17 0 -28.5 11.5 q-11.5 11.5 -11.5 28 q0 16.5 11.5 28.5 q11.5 12 27.5 12 l721 0 ZM872 62 q17 0 28.5 -11.5 q11.5 -11.5 11.5 -28 q0 -16.5 -11.5 -28.5 q-11.5 -12 -27.5 -12 l-721 0 q-17 0 -28.5 11.5 q-11.5 11.5 -11.5 28 q0 16.5 11.5 28.5 q11.5 12 27.5 12 l721 0 ZM158 534 l124 -122 q7 -7 7 -18 q0 -11 -7 -18 l-124 -122 q-7 -7 -18 -7 q-11 0 -19 7.5 q-8 7.5 -8 18.5 l0 242 q0 11 8 18.5 q8 7.5 19 7.5 q11 0 18 -7 Z"></path></g></svg>',
          },
        ],
      },
      {
        id: "SubmenuCommands-aligin",
        name: "submenu-aligin",
        icon: '<svg width="18" height="18" focusable="false" fill="currentColor"  viewBox="0 0 1024 1024"><g transform="scale(1, -1) translate(0, -896) scale(0.9, 0.9) "><path class="path" d="M724 304 q17 0 28.5 -11.5 q11.5 -11.5 11.5 -28 q0 -16.5 -11.5 -28.5 q-11.5 -12 -27.5 -12 l-421 0 q-17 0 -28.5 11.5 q-11.5 11.5 -11.5 28 q0 16.5 11.5 28.5 q11.5 12 27.5 12 l421 0 ZM872 540 q17 0 28.5 -11.5 q11.5 -11.5 11.5 -28 q0 -16.5 -11.5 -28.5 q-11.5 -12 -27.5 -12 l-721 0 q-17 0 -28.5 11.5 q-11.5 11.5 -11.5 28 q0 16.5 11.5 28.5 q11.5 12 27.5 12 l721 0 ZM724 776 q17 0 28.5 -11.5 q11.5 -11.5 11.5 -28 q0 -16.5 -11.5 -28.5 q-11.5 -12 -27.5 -12 l-421 0 q-17 0 -28.5 11.5 q-11.5 11.5 -11.5 28 q0 16.5 11.5 28.5 q11.5 12 27.5 12 l421 0 ZM872 68 q17 0 28.5 -11.5 q11.5 -11.5 11.5 -28 q0 -16.5 -11.5 -28.5 q-11.5 -12 -27.5 -12 l-721 0 q-17 0 -28.5 11.5 q-11.5 11.5 -11.5 28 q0 16.5 11.5 28.5 q11.5 12 27.5 12 l721 0 Z"></path></g></svg>',
        SubmenuCommands: [
          {
            id: "editing-toolbar:justify",
            name: '<p aligin="justify"></p>',
            icon: '<svg width="18" height="18" focusable="false" fill="currentColor"  viewBox="0 0 1024 1024"><g transform="scale(1, -1) translate(0, -896) scale(0.9, 0.9) "><path class="path" d="M112 736 l0 0 ZM120 736 l784 0 q8 0 8 -8 l0 -80 q0 -8 -8 -8 l-784 0 q-8 0 -8 8 l0 80 q0 8 8 8 ZM112 331 l0 0 ZM120 331 l784 0 q8 0 8 -8 l0 -80 q0 -8 -8 -8 l-784 0 q-8 0 -8 8 l0 80 q0 8 8 8 ZM112 128 l0 0 ZM120 128 l784 0 q8 0 8 -8 l0 -80 q0 -8 -8 -8 l-784 0 q-8 0 -8 8 l0 80 q0 8 8 8 ZM112 533 l0 0 ZM120 533 l784 0 q8 0 8 -8 l0 -80 q0 -8 -8 -8 l-784 0 q-8 0 -8 8 l0 80 q0 8 8 8 Z"></path></g></svg>',
          },
          {
            id: "editing-toolbar:left",
            name: '<p aligin="left"></p>',
            icon: '<svg width="18" height="18" focusable="false" fill="currentColor"  viewBox="0 0 1024 1024"><g transform="scale(1, -1) translate(0, -896) scale(0.9, 0.9) "><path class="path" d="M572 304 q17 0 28.5 -11.5 q11.5 -11.5 11.5 -28 q0 -16.5 -11.5 -28.5 q-11.5 -12 -27.5 -12 l-421 0 q-17 0 -28.5 11.5 q-11.5 11.5 -11.5 28 q0 16.5 11.5 28.5 q11.5 12 27.5 12 l421 0 ZM872 540 q17 0 28.5 -11.5 q11.5 -11.5 11.5 -28 q0 -16.5 -11.5 -28.5 q-11.5 -12 -27.5 -12 l-721 0 q-17 0 -28.5 11.5 q-11.5 11.5 -11.5 28 q0 16.5 11.5 28.5 q11.5 12 27.5 12 l721 0 ZM572 776 q17 0 28.5 -11.5 q11.5 -11.5 11.5 -28 q0 -16.5 -11.5 -28.5 q-11.5 -12 -27.5 -12 l-421 0 q-17 0 -28.5 11.5 q-11.5 11.5 -11.5 28 q0 16.5 11.5 28.5 q11.5 12 27.5 12 l421 0 ZM872 68 q17 0 28.5 -11.5 q11.5 -11.5 11.5 -28 q0 -16.5 -11.5 -28.5 q-11.5 -12 -27.5 -12 l-721 0 q-17 0 -28.5 11.5 q-11.5 11.5 -11.5 28 q0 16.5 11.5 28.5 q11.5 12 27.5 12 l721 0 Z"></path></g></svg>',
          },
          {
            id: "editing-toolbar:center",
            name: "<center>",
            icon: '<svg width="18" height="18" focusable="false" fill="currentColor"  viewBox="0 0 1024 1024"><g transform="scale(1, -1) translate(0, -896) scale(0.9, 0.9) "><path class="path" d="M724 304 q17 0 28.5 -11.5 q11.5 -11.5 11.5 -28 q0 -16.5 -11.5 -28.5 q-11.5 -12 -27.5 -12 l-421 0 q-17 0 -28.5 11.5 q-11.5 11.5 -11.5 28 q0 16.5 11.5 28.5 q11.5 12 27.5 12 l421 0 ZM872 540 q17 0 28.5 -11.5 q11.5 -11.5 11.5 -28 q0 -16.5 -11.5 -28.5 q-11.5 -12 -27.5 -12 l-721 0 q-17 0 -28.5 11.5 q-11.5 11.5 -11.5 28 q0 16.5 11.5 28.5 q11.5 12 27.5 12 l721 0 ZM724 776 q17 0 28.5 -11.5 q11.5 -11.5 11.5 -28 q0 -16.5 -11.5 -28.5 q-11.5 -12 -27.5 -12 l-421 0 q-17 0 -28.5 11.5 q-11.5 11.5 -11.5 28 q0 16.5 11.5 28.5 q11.5 12 27.5 12 l421 0 ZM872 68 q17 0 28.5 -11.5 q11.5 -11.5 11.5 -28 q0 -16.5 -11.5 -28.5 q-11.5 -12 -27.5 -12 l-721 0 q-17 0 -28.5 11.5 q-11.5 11.5 -11.5 28 q0 16.5 11.5 28.5 q11.5 12 27.5 12 l721 0 Z"></path></g></svg>',
          },
          {
            id: "editing-toolbar:right",
            name: '<p aligin="right"></p>',
            icon: '<svg width="18" height="18" focusable="false" fill="currentColor"  viewBox="0 0 1024 1024"><g transform="scale(1, -1) translate(0, -896) scale(0.9, 0.9) "><path class="path" d="M872 304 q17 0 28.5 -11.5 q11.5 -11.5 11.5 -28 q0 -16.5 -11.5 -28.5 q-11.5 -12 -27.5 -12 l-421 0 q-17 0 -28.5 11.5 q-11.5 11.5 -11.5 28 q0 16.5 11.5 28.5 q11.5 12 27.5 12 l421 0 ZM872 540 q17 0 28.5 -11.5 q11.5 -11.5 11.5 -28 q0 -16.5 -11.5 -28.5 q-11.5 -12 -27.5 -12 l-721 0 q-17 0 -28.5 11.5 q-11.5 11.5 -11.5 28 q0 16.5 11.5 28.5 q11.5 12 27.5 12 l721 0 ZM872 776 q17 0 28.5 -11.5 q11.5 -11.5 11.5 -28 q0 -16.5 -11.5 -28.5 q-11.5 -12 -27.5 -12 l-421 0 q-17 0 -28.5 11.5 q-11.5 11.5 -11.5 28 q0 16.5 11.5 28.5 q11.5 12 27.5 12 l421 0 ZM872 68 q17 0 28.5 -11.5 q11.5 -11.5 11.5 -28 q0 -16.5 -11.5 -28.5 q-11.5 -12 -27.5 -12 l-721 0 q-17 0 -28.5 11.5 q-11.5 11.5 -11.5 28 q0 16.5 11.5 28.5 q11.5 12 27.5 12 l721 0 Z"></path></g></svg>',
          },
        ],
      },
      {
        id: "editing-toolbar:change-font-color",
        name: "Change font color[html]",
        icon: '<svg width="24" height="24" focusable="false" fill="currentColor"><g fill-rule="evenodd"><path id="change-font-color-icon" d="M3 18h18v3H3z" style="fill:#2DC26B"></path><path d="M8.7 16h-.8a.5.5 0 01-.5-.6l2.7-9c.1-.3.3-.4.5-.4h2.8c.2 0 .4.1.5.4l2.7 9a.5.5 0 01-.5.6h-.8a.5.5 0 01-.4-.4l-.7-2.2c0-.3-.3-.4-.5-.4h-3.4c-.2 0-.4.1-.5.4l-.7 2.2c0 .3-.2.4-.4.4zm2.6-7.6l-.6 2a.5.5 0 00.5.6h1.6a.5.5 0 00.5-.6l-.6-2c0-.3-.3-.4-.5-.4h-.4c-.2 0-.4.1-.5.4z"></path></g></svg>',
      },
      {
        id: "editing-toolbar:change-background-color",
        name: "Change Backgroundcolor[html]",
        icon: '<svg width="18" height="24" viewBox="0 0 256 256" version="1.1" xmlns="http://www.w3.org/2000/svg"><g   stroke="none" stroke-width="1" fill="currentColor" fill-rule="evenodd"><g  ><g fill="currentColor"><g transform="translate(119.502295, 137.878331) rotate(-135.000000) translate(-119.502295, -137.878331) translate(48.002295, 31.757731)" ><path d="M100.946943,60.8084699 L43.7469427,60.8084699 C37.2852111,60.8084699 32.0469427,66.0467383 32.0469427,72.5084699 L32.0469427,118.70847 C32.0469427,125.170201 37.2852111,130.40847 43.7469427,130.40847 L100.946943,130.40847 C107.408674,130.40847 112.646943,125.170201 112.646943,118.70847 L112.646943,72.5084699 C112.646943,66.0467383 107.408674,60.8084699 100.946943,60.8084699 Z M93.646,79.808 L93.646,111.408 L51.046,111.408 L51.046,79.808 L93.646,79.808 Z" fill-rule="nonzero"></path><path d="M87.9366521,16.90916 L87.9194966,68.2000001 C87.9183543,69.4147389 86.9334998,70.399264 85.7187607,70.4 L56.9423078,70.4 C55.7272813,70.4 54.7423078,69.4150264 54.7423078,68.2 L54.7423078,39.4621057 C54.7423078,37.2523513 55.5736632,35.1234748 57.0711706,33.4985176 L76.4832996,12.4342613 C78.9534987,9.75382857 83.1289108,9.5834005 85.8093436,12.0535996 C87.1658473,13.303709 87.9372691,15.0644715 87.9366521,16.90916 Z" fill-rule="evenodd"></path><path d="M131.3,111.241199 L11.7,111.241199 C5.23826843,111.241199 0,116.479467 0,122.941199 L0,200.541199 C0,207.002931 5.23826843,212.241199 11.7,212.241199 L131.3,212.241199 C137.761732,212.241199 143,207.002931 143,200.541199 L143,122.941199 C143,116.479467 137.761732,111.241199 131.3,111.241199 Z M124,130.241 L124,193.241 L19,193.241 L19,130.241 L124,130.241 Z" fill-rule="nonzero"></path></g></g><path d="M51,218 L205,218 C211.075132,218 216,222.924868 216,229 C216,235.075132 211.075132,240 205,240 L51,240 C44.9248678,240 40,235.075132 40,229 C40,222.924868 44.9248678,218 51,218 Z" id="change-background-color-icon" style="fill:#FA541C"></path></g></g></svg>',
      },
      {
        id: "editing-toolbar:fullscreen-focus",
        name: "Fullscreen focus mode",
        icon: "fullscreen",
      },
      {
        id: "editing-toolbar:workplace-fullscreen-focus",
        name: "workplace-Fullscreen ",
        icon: "exit-fullscreen",
      },
    ],
    appendMethod: "workspace",
    shouldShowMenuOnSelect: !1,
    cMenuVisibility: !0,
    cMenuBottomValue: 4.25,
    cMenuNumRows: 12,
    cMenuWidth: 610,
    cMenuFontColor: "#2DC26B",
    cMenuBackgroundColor: "#d3f8b6",
    autohide: !1,
    custom_bg1: "#FFB78B8C",
    custom_bg2: "#CDF4698C",
    custom_bg3: "#A0CCF68C",
    custom_bg4: "#F0A7D88C",
    custom_bg5: "#ADEFEF8C",
    custom_fc1: "#D83931",
    custom_fc2: "#DE7802",
    custom_fc3: "#245BDB",
    custom_fc4: "#6425D0",
    custom_fc5: "#646A73",
    isLoadOnMobile: !1,
  };
let C;
function k() {
  C = e.requireApiVersion("0.15.0") ? activeWindow.document : window.document;
  const t = C.getElementById("cMenuToolbarModalBar");
  t && t.remove();
  const o = (function () {
    const t = [];
    t.push(app.workspace.rootSplit);
    const o = app.workspace.floatingSplit;
    return (
      null == o ||
        o.children.forEach((o) => {
          o instanceof e.WorkspaceWindow && t.push(o);
        }),
      t
    );
  })();
  o &&
    o.forEach((e) => {
      (null == e ? void 0 : e.containerEl) &&
        ((e) => {
          let t = e.querySelectorAll("#cMenuToolbarModalBar"),
            o = e.querySelectorAll("#cMenuToolbarPopoverBar");
          t.forEach((e) => {
            e && (e.firstChild && e.removeChild(e.firstChild), e.remove());
          }),
            o.forEach((e) => {
              e && (e.firstChild && e.removeChild(e.firstChild), e.remove());
            });
        })(null == e ? void 0 : e.containerEl);
    });
}
function q(t, o) {
  var n, i;
  C = e.requireApiVersion("0.15.0") ? activeWindow.document : window.document;
  let a =
    "top" == o.positionStyle
      ? null ===
          (i =
            null === (n = t.workspace.activeLeaf) || void 0 === n
              ? void 0
              : n.view.containerEl) || void 0 === i
        ? void 0
        : i.querySelector("#cMenuToolbarModalBar")
      : C.getElementById("cMenuToolbarModalBar");
  return a || null;
}
const T = (e, t) =>
  t.reduce((e, t) => (e && "undefined" !== e[t] ? e[t] : void 0), e);
function M(e, t) {
  return e && void 0 !== e[1][0]
    ? t + e.flat(2).join("+").replace("Mod", "Ctrl") + t
    : t + "–" + t;
}
function E(e, t, o = !0) {
  let n = e.commands.findCommand(t),
    i = o ? "*" : "";
  if (n) {
    let t = n.hotkeys
        ? [[T(n.hotkeys, [0, "modifiers"])], [T(n.hotkeys, [0, "key"])]]
        : void 0,
      o = e.hotkeyManager.customKeys[n.id];
    var a = o ? [[T(o, [0, "modifiers"])], [T(o, [0, "key"])]] : void 0;
    return a ? M(a, i) : M(t, "");
  }
  return "–";
}
function _(e) {
  const t = e.workspace.activeLeaf;
  if (t) {
    const e = t.view;
    if (e) return "source" === e.getMode();
  }
  return !1;
}
function S(e) {
  return /<[^>]+>/g.test(e);
}
function x(t, o, n) {
  C = e.requireApiVersion("0.15.0") ? activeWindow.document : window.document;
  let i = q(t, o.settings),
    a = null == i ? void 0 : i.querySelector("#" + n);
  if (a) {
    let e = a.rows,
      i = e.length;
    for (let a = 1; a < i; a++) {
      let i = e[a].cells;
      for (let e = 0; e < i.length; e++)
        i[e].onclick = function () {
          let e = this.style.backgroundColor;
          if ("" != e) {
            if (((e = D(e)), "x-color-picker-table" == n)) {
              (o.settings.cMenuFontColor = e),
                B(t, e),
                C.querySelectorAll("#change-font-color-icon").forEach((t) => {
                  t.style.fill = e;
                });
            } else if ("x-backgroundcolor-picker-table" == n) {
              (o.settings.cMenuBackgroundColor = e),
                A(t, e),
                C.querySelectorAll("#change-background-color-icon").forEach(
                  (t) => {
                    t.style.fill = e;
                  },
                );
            }
            o.saveSettings();
          }
        };
    }
  }
}
function B(e, t) {
  var o;
  const n =
    null === (o = e.workspace.activeLeaf.view) || void 0 === o
      ? void 0
      : o.editor;
  let i = n.getSelection(),
    a = /^\<font color=[0-9a-zA-Z#]+[^\<\>]*\>([^\<\>]+)\<\/font\>$/,
    l = '<font color="' + t + '">$1</font>';
  /\<font color=[^\<]*$|^[^\>]*font\>/g.test(i) ||
    (/\<font color=[0-9a-zA-Z#]+[^\<\>]*\>[^\<\>]+\<\/font\>/g.test(i)
      ? a.test(i)
        ? ((i = i.replace(/<font color="[^"]+">|<\/font>/g, "")),
          (i = i.replace(a, l)))
        : (i = i.replace(
            /\<font color=[0-9a-zA-Z#]+[^\<\>]*?\>|\<\/font\>/g,
            "",
          ))
      : ((i = i.replace(/<font color=["'#0-9a-zA-Z]+>[^<]+<\/font>/g, "")),
        (i = i.replace(/^(.+)$/gm, l))),
    n.replaceSelection(i),
    n.exec("goRight"),
    e.commands.executeCommandById("editor:focus"));
}
function A(e, t) {
  var o;
  const n =
    null === (o = e.workspace.activeLeaf.view) || void 0 === o
      ? void 0
      : o.editor;
  let i = n.getSelection(),
    a =
      /^\<span style=[\"'][^\<\>]+:[0-9a-zA-Z#]+[\"'][^\<\>]*\>([^\<\>]+)\<\/span\>$/,
    l = '<span style="background:' + t + '">$1</span>';
  /\<span style=[^\<]*$|^[^\>]*span\>/g.test(i) ||
    ((i =
      /\<span style=[\"'][^\<\>]+:[0-9a-zA-Z#]+[\"'][^\<\>]*\>[^\<\>]+\<\/span\>/g.test(
        i,
      )
        ? a.test(i)
          ? i.replace(a, l)
          : i.replace(
              /\<span style=[\"'][^\<\>]+:[0-9a-zA-Z#]+[\"'][^\<\>]*\>|\<\/span\>/g,
              "",
            )
        : i.replace(/^(.+)$/gm, l)),
    n.replaceSelection(i),
    n.exec("goRight"),
    e.commands.executeCommandById("editor:focus"));
}
const D = function (e) {
  let t = e;
  if (/^(rgb|RGB)/.test(t)) {
    let e = t.replace(/(?:\(|\)|rgb|RGB)*/g, "").split(","),
      o = "#";
    for (let t = 0; t < e.length; t++) {
      let n = Number(e[t]).toString(16);
      "0" === n && (n += n), 1 == n.length && (n = "0" + n), (o += n);
    }
    return 7 !== o.length && (o = t), o;
  }
  if (!/^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/.test(t)) return t;
  {
    let e = t.replace(/#/, "").split("");
    if (6 === e.length) return t;
    if (3 === e.length) {
      let t = "#";
      for (let o = 0; o < e.length; o += 1) t += e[o] + e[o];
      return t;
    }
  }
};
function L(e) {
  e.Temp_Notice && e.Temp_Notice.hide(),
    e.setEN_BG_Format_Brush(!1),
    e.setEN_FontColor_Format_Brush(!1),
    e.setEN_Text_Format_Brush(!1);
}
function N(e) {
  var t;
  const o =
    null === (t = app.workspace.activeLeaf.view) || void 0 === t
      ? void 0
      : t.editor;
  let n,
    i = o.getLine(o.getCursor().line),
    a = "";
  const l = /^(\>*(\[[!\w]+\])?\s*)#+\s/;
  let r;
  const s = i.match(l);
  s && (r = s[0].trim()),
    e == r || "" == e
      ? (n = i.replace(l, "$1"))
      : ((n = i.replace(/^\s*(#*|\>|\-|\d+\.)\s*/m, "")), (n = e + " " + n)),
    (a =
      "" != n
        ? o.getRange(o.getCursor(), { line: o.getCursor().line, ch: i.length })
        : o.getRange(o.getCursor(), { line: o.getCursor().line, ch: 0 })),
    o.setLine(o.getCursor().line, n),
    o.setCursor({ line: o.getCursor().line, ch: Number(n.length - a.length) });
}
function I(t, o) {
  var n;
  const i =
    null === (n = t.workspace.activeLeaf.view) || void 0 === n
      ? void 0
      : n.editor;
  let a = i.getSelection();
  if (null == a || "" == a)
    L(o),
      o.setEN_Text_Format_Brush(!0),
      o.Temp_Notice
        ? o.Temp_Notice.noticeEl.innerText !=
            u(
              "Clear formatting brush ON!\nClick the  mouse middle or right key to close the formatting-brush",
            ) &&
          (o.Temp_Notice = new e.Notice(
            u(
              "Clear formatting brush ON!\nClick the  mouse middle or right key to close the formatting-brush",
            ),
            0,
          ))
        : (o.Temp_Notice = new e.Notice(
            u(
              "Clear formatting brush ON!\nClick the  mouse middle or right key to close the formatting-brush",
            ),
            0,
          ));
  else {
    let e =
      /(^#+\s|^#(?=\s)|^\>|^\- \[( |x)\]|^\+ |\<[^\<\>]+?\>|^1\. |^\s*\- |^\-+$|^\*+$)/gm;
    (a = a.replace(e, "")),
      (a = a.replace(/^[ ]+|[ ]+$/gm, "")),
      (a = a.replace(/\!?\[\[([^\[\]\|]*\|)*([^\(\)\[\]]+)\]\]/g, "$2")),
      (a = a.replace(/\!?\[+([^\[\]\(\)]+)\]+\(([^\(\)]+)\)/g, "$1")),
      (a = a.replace(/`([^`]+)`/g, "$1")),
      (a = a.replace(/_([^_]+)_/g, "$1")),
      (a = a.replace(/==([^=]+)==/g, "$1")),
      (a = a.replace(/\*\*\*([^\*]+)\*\*\*/g, "$1")),
      (a = a.replace(/\*\*?([^\*]+)\*\*?/g, "$1")),
      (a = a.replace(/~~([^~]+)~~/g, "$1")),
      i.replaceSelection(a),
      t.commands.executeCommandById("editor:focus");
  }
}
const O = (e, t) => {
  var o, n, i, a, l;
  let r = q(e, t);
  if (_(e)) {
    if (r) {
      const s =
        null === (o = e.workspace.activeLeaf.view) || void 0 === o
          ? void 0
          : o.editor;
      if (
        ((r.style.visibility = s.somethingSelected() ? "visible" : "hidden"),
        (r.style.height = "tiny" === t.aestheticStyle ? "30px" : "40px"),
        r.addClass("cMenuToolbarFlex"),
        r.removeClass("cMenuToolbarGrid"),
        "visible" === r.style.visibility)
      ) {
        const e = s.containerEl.getBoundingClientRect(),
          t = r.offsetWidth,
          o = r.offsetHeight,
          c = ((e) => {
            var t, o, n;
            let i,
              a = e.getCursor("head");
            if (
              (e.getCursor("head").ch !== e.getCursor("from").ch &&
                (a.ch = Math.max(0, a.ch - 1)),
              e.cursorCoords)
            )
              i = e.cursorCoords(!0, "window");
            else {
              if (!e.coordsAtPos) return;
              {
                const l = e.posToOffset(a);
                i =
                  null !==
                    (n =
                      null === (o = (t = e.cm).coordsAtPos) || void 0 === o
                        ? void 0
                        : o.call(t, l)) && void 0 !== n
                    ? n
                    : e.coordsAtPos(l);
              }
            }
            return i;
          })(s),
          d = s.getCursor("head").ch == s.getCursor("from").ch,
          u = 12,
          h =
            (null !==
              (i =
                null === (n = C.getElementsByClassName("mod-left-split")[0]) ||
                void 0 === n
                  ? void 0
                  : n.clientWidth) && void 0 !== i
              ? i
              : 0) +
            (null !==
              (l =
                null ===
                  (a = C.getElementsByClassName(
                    "side-dock-ribbon mod-left",
                  )[0]) || void 0 === a
                  ? void 0
                  : a.clientWidth) && void 0 !== l
              ? l
              : 0);
        let p = c.left - h;
        p + t + u >= e.right && (p = Math.max(0, e.right - t - h - u));
        let g = 0;
        d
          ? ((g = c.top - o - 10), g <= e.top && (g = e.top + o))
          : ((g = c.top + 25), g >= e.bottom - o && (g = e.bottom - 2 * o)),
          (r.style.left = p + "px"),
          (r.style.top = g + "px");
      }
    }
  } else r.style.visibility = "hidden";
};
function F(t, o) {
  let n = o.settings;
  (C = e.requireApiVersion("0.15.0") ? activeWindow.document : window.document),
    (function () {
      const i = () => {
        var i, a;
        let l = 0,
          r = 0,
          s = createEl("div");
        if (s)
          if ("top" == n.positionStyle) {
            let e = 5 * (n.cMenuBottomValue - 4.25);
            s.setAttribute(
              "style",
              `position: relative; grid-template-columns: repeat(auto-fit, minmax(28px, 1fr));top: ${e}px;`,
            ),
              (s.className += " top"),
              n.autohide && (s.className += " autohide");
          } else
            s.setAttribute(
              "style",
              `left: calc(50% - calc(${s.offsetWidth}px / 2)); bottom: ${n.cMenuBottomValue}em; grid-template-columns: ${"1fr ".repeat(n.cMenuNumRows)}`,
            );
        s.setAttribute("id", "cMenuToolbarModalBar");
        let c = createEl("div");
        if (
          (c.addClass("cMenuToolbarpopover"),
          c.addClass("cMenuToolbarTinyAesthetic"),
          c.setAttribute("id", "cMenuToolbarPopoverBar"),
          (c.style.visibility = "hidden"),
          (c.style.height = "0"),
          "default" == n.aestheticStyle
            ? (s.addClass("cMenuToolbarDefaultAesthetic"),
              s.removeClass("cMenuToolbarTinyAesthetic"),
              s.removeClass("cMenuToolbarGlassAesthetic"))
            : "tiny" == n.aestheticStyle
              ? (s.addClass("cMenuToolbarTinyAesthetic"),
                s.removeClass("cMenuToolbarDefaultAesthetic"),
                s.removeClass("cMenuToolbarGlassAesthetic"))
              : (s.addClass("cMenuToolbarGlassAesthetic"),
                s.removeClass("cMenuToolbarTinyAesthetic"),
                s.removeClass("cMenuToolbarDefaultAesthetic")),
          "top" == n.positionStyle)
        ) {
          let e = t.workspace.activeLeaf.view.containerEl;
          if (
            !(null == e ? void 0 : e.querySelector("#cMenuToolbarPopoverBar"))
          ) {
            const t =
              null == e ? void 0 : e.querySelector(".markdown-source-view");
            if (!t) return;
            t.insertAdjacentElement("afterbegin", c);
          }
          const o =
            null == e ? void 0 : e.querySelector(".markdown-source-view");
          if (!o) return;
          o.insertAdjacentElement("afterbegin", s),
            (r =
              null == e
                ? void 0
                : e.querySelector(".markdown-source-view").offsetWidth);
        } else
          "body" == n.appendMethod
            ? C.body.appendChild(s)
            : "workspace" == n.appendMethod &&
              (null === (i = C.body) ||
                void 0 === i ||
                i
                  .querySelector(".mod-vertical.mod-root")
                  .insertAdjacentElement("afterbegin", s));
        let d =
          null === (a = t.workspace.activeLeaf.view.containerEl) || void 0 === a
            ? void 0
            : a.querySelector("#cMenuToolbarPopoverBar");
        n.menuCommands.forEach((i, a) => {
          let c;
          if ("SubmenuCommands" in i) {
            let u;
            l >= r - 104 && r > 100
              ? (o.setIS_MORE_Button(!0), (u = new e.ButtonComponent(d)))
              : (u = new e.ButtonComponent(s)),
              u.setClass("cMenuToolbarCommandsubItem" + a),
              a >= n.cMenuNumRows
                ? u.setClass("cMenuToolbarSecond")
                : "top" != n.positionStyle &&
                  u.buttonEl.setAttribute("aria-label-position", "top"),
              S(i.icon) ? (u.buttonEl.innerHTML = i.icon) : u.setIcon(i.icon),
              (l += 28);
            let h = (function (e) {
              let t = createEl("div");
              return t.addClass(e), t;
            })("subitem");
            h &&
              i.SubmenuCommands.forEach((o) => {
                let i = E(t, o.id);
                c = "–" == i ? o.name : o.name + "(" + i + ")";
                let l = new e.ButtonComponent(h)
                  .setTooltip(c)
                  .setClass("menu-item")
                  .onClick(() => {
                    t.commands.executeCommandById(o.id),
                      0 == n.cMenuVisibility || "following" == n.positionStyle
                        ? (s.style.visibility = "hidden")
                        : (s.style.visibility = "visible");
                  });
                a < n.cMenuNumRows &&
                  "top" != n.positionStyle &&
                  l.buttonEl.setAttribute("aria-label-position", "top"),
                  "cMenuToolbar-Divider-Line" == o.id &&
                    l.setClass("cMenuToolbar-Divider-Line"),
                  S(o.icon)
                    ? (l.buttonEl.innerHTML = o.icon)
                    : l.setIcon(o.icon),
                  u.buttonEl.insertAdjacentElement("afterbegin", h);
              });
          } else if ("editing-toolbar:change-font-color" == i.id) {
            let a = new e.ButtonComponent(s);
            a
              .setClass("cMenuToolbarCommandsubItem-font-color")
              .setTooltip(u("Font Colors"))
              .onClick(() => {
                t.commands.executeCommandById(i.id),
                  0 == n.cMenuVisibility || "following" == n.positionStyle
                    ? (s.style.visibility = "hidden")
                    : (s.style.visibility = "visible");
              }),
              S(i.icon) ? (a.buttonEl.innerHTML = i.icon) : a.setIcon(i.icon),
              (l += 26);
            let r = createEl("div");
            if ((r.addClass("subitem"), r)) {
              (r.innerHTML = (function (e) {
                return `<div class='x-color-picker-wrapper'>\n<div class='x-color-picker' >\n  <table class="x-color-picker-table" id='x-color-picker-table'>\n    <tbody>\n      <tr>\n        <th colspan="10" class="ui-widget-content">Theme Colors</th>\n      </tr>\n      <tr>\n        <td style="background-color:#ffffff"><span></span></td>\n        <td style="background-color:#000000"><span></span></td>\n        <td style="background-color:#eeece1"><span></span></td>\n        <td style="background-color:#1f497d"><span></span></td>\n        <td style="background-color:#4f81bd"><span></span></td>\n        <td style="background-color:#c0504d"><span></span></td>\n        <td style="background-color:#9bbb59"><span></span></td>\n        <td style="background-color:#8064a2"><span></span></td>\n        <td style="background-color:#4bacc6"><span></span></td>\n        <td style="background-color:#f79646"><span></span></td>\n      </tr>\n      <tr>\n        <th colspan="10"></th>\n      </tr>\n      <tr class="top">\n        <td style="background-color:#f2f2f2"><span></span></td>\n        <td style="background-color:#7f7f7f"><span></span></td>\n        <td style="background-color:#ddd9c3"><span></span></td>\n        <td style="background-color:#c6d9f0"><span></span></td>\n        <td style="background-color:#dbe5f1"><span></span></td>\n        <td style="background-color:#f2dcdb"><span></span></td>\n        <td style="background-color:#ebf1dd"><span></span></td>\n        <td style="background-color:#e5e0ec"><span></span></td>\n        <td style="background-color:#dbeef3"><span></span></td>\n        <td style="background-color:#fdeada"><span></span></td>\n      </tr>\n      <tr class="in">\n        <td style="background-color:#d8d8d8"><span></span></td>\n        <td style="background-color:#595959"><span></span></td>\n        <td style="background-color:#c4bd97"><span></span></td>\n        <td style="background-color:#8db3e2"><span></span></td>\n        <td style="background-color:#b8cce4"><span></span></td>\n        <td style="background-color:#e5b9b7"><span></span></td>\n        <td style="background-color:#d7e3bc"><span></span></td>\n        <td style="background-color:#ccc1d9"><span></span></td>\n        <td style="background-color:#b7dde8"><span></span></td>\n        <td style="background-color:#fbd5b5"><span></span></td>\n      </tr>\n      <tr class="in">\n        <td style="background-color:#bfbfbf"><span></span></td>\n        <td style="background-color:#3f3f3f"><span></span></td>\n        <td style="background-color:#938953"><span></span></td>\n        <td style="background-color:#548dd4"><span></span></td>\n        <td style="background-color:#95b3d7"><span></span></td>\n        <td style="background-color:#d99694"><span></span></td>\n        <td style="background-color:#c3d69b"><span></span></td>\n        <td style="background-color:#b2a2c7"><span></span></td>\n        <td style="background-color:#92cddc"><span></span></td>\n        <td style="background-color:#fac08f"><span></span></td>\n      </tr>\n      <tr class="in">\n        <td style="background-color:#a5a5a5"><span></span></td>\n        <td style="background-color:#262626"><span></span></td>\n        <td style="background-color:#494429"><span></span></td>\n        <td style="background-color:#17365d"><span></span></td>\n        <td style="background-color:#366092"><span></span></td>\n        <td style="background-color:#953734"><span></span></td>\n        <td style="background-color:#76923c"><span></span></td>\n        <td style="background-color:#5f497a"><span></span></td>\n        <td style="background-color:#31859b"><span></span></td>\n        <td style="background-color:#e36c09"><span></span></td>\n      </tr>\n      <tr class="bottom">\n        <td style="background-color:#7f7f7f"><span></span></td>\n        <td style="background-color:#0c0c0c"><span></span></td>\n        <td style="background-color:#1d1b10"><span></span></td>\n        <td style="background-color:#0f243e"><span></span></td>\n        <td style="background-color:#244061"><span></span></td>\n        <td style="background-color:#632423"><span></span></td>\n        <td style="background-color:#4f6128"><span></span></td>\n        <td style="background-color:#3f3151"><span></span></td>\n        <td style="background-color:#205867"><span></span></td>\n        <td style="background-color:#974806"><span></span></td>\n      </tr>\n       <tr>\n        <th colspan="10"></th>\n      </tr>\n      <tr>\n        <th colspan="10" class="ui-widget-content">Standard Colors</th>\n      </tr>\n      <tr>\n        <td style="background-color:#c00000"><span></span></td>\n        <td style="background-color:#ff0000"><span></span></td>\n        <td style="background-color:#ffc000"><span></span></td>\n        <td style="background-color:#ffff00"><span></span></td>\n        <td style="background-color:#92d050"><span></span></td>\n        <td style="background-color:#00b050"><span></span></td>\n        <td style="background-color:#00b0f0"><span></span></td>\n        <td style="background-color:#0070c0"><span></span></td>\n        <td style="background-color:#002060"><span></span></td>\n        <td style="background-color:#7030a0"><span></span></td>\n      </tr>\n      <tr>\n      <th colspan="10" class="ui-widget-content">Custom Font Colors</th>\n    </tr>\n    <tr>\n      <td style="background-color:${e.settings.custom_fc1}"><span></span></td>\n      <td style="background-color:${e.settings.custom_fc2}"><span></span></td>\n      <td style="background-color:${e.settings.custom_fc3}"><span></span></td>\n      <td style="background-color:${e.settings.custom_fc4}"><span></span></td>\n      <td style="background-color:${e.settings.custom_fc5}"><span></span></td>\n    </tr>\n    </tbody>\n  </table>\n</div>\n</div>`;
              })(o)),
                a.buttonEl.insertAdjacentElement("afterbegin", r),
                x(t, o, "x-color-picker-table");
              let n = r.querySelector(".x-color-picker-wrapper");
              new e.ButtonComponent(n)
                .setIcon("paintbrush")
                .setTooltip(u("Format Brush"))
                .onClick(() => {
                  L(o),
                    o.setEN_FontColor_Format_Brush(!0),
                    (o.Temp_Notice = new e.Notice(
                      u("Font-Color formatting brush ON!"),
                      0,
                    ));
                }),
                new e.ButtonComponent(n)
                  .setIcon("palette")
                  .setTooltip(u("Custom Font Color"))
                  .onClick(() => {
                    t.setting.open(),
                      t.setting.openTabById("editing-toolbar"),
                      setTimeout(() => {
                        var e;
                        let o =
                          t.setting.activeTab.containerEl.querySelector(
                            ".custom_font",
                          );
                        o &&
                          (null === (e = o.addClass) ||
                            void 0 === e ||
                            e.call(o, "toolbar-cta"));
                      }, 200);
                  });
            }
          } else if ("editing-toolbar:change-background-color" == i.id) {
            let a = new e.ButtonComponent(s);
            a
              .setClass("cMenuToolbarCommandsubItem-font-color")
              .setTooltip(u("Background color"))
              .onClick(() => {
                t.commands.executeCommandById(i.id),
                  0 == n.cMenuVisibility || "following" == n.positionStyle
                    ? (s.style.visibility = "hidden")
                    : (s.style.visibility = "visible");
              }),
              S(i.icon) ? (a.buttonEl.innerHTML = i.icon) : a.setIcon(i.icon),
              (l += 26);
            let r = createEl("div");
            if ((r.addClass("subitem"), r)) {
              (r.innerHTML = (function (e) {
                return `<div class='x-color-picker-wrapper'>\n<div class='x-color-picker' >\n  <table class="x-color-picker-table" id='x-backgroundcolor-picker-table'>\n    <tbody>\n      <tr>\n        <th colspan="5" class="ui-widget-content">Translucent Colors</th>\n      </tr>\n      <tr class="top">\n        <td style="background-color:rgba(140, 140, 140, 0.12)"><span></span></td>\n        <td style="background-color:rgba(92, 92, 92, 0.2)"><span></span></td>\n        <td style="background-color:rgba(163, 67, 31, 0.2)"><span></span></td>\n        <td style="background-color:rgba(240, 107, 5, 0.2)"><span></span></td>\n        <td style="background-color:rgba(240, 200, 0, 0.2)"><span></span></td>\n        </tr>\n        <tr class="bottom">\n        <td style="background-color:rgba(3, 135, 102, 0.2)"><span></span></td>\n        <td style="background-color:rgba(3, 135, 102, 0.2)"><span></span></td>\n        <td style="background-color:rgba(5, 117, 197, 0.2)"><span></span></td>\n        <td style="background-color:rgba(74, 82, 199, 0.2)"><span></span></td>\n        <td style="background-color:rgba(136, 49, 204, 0.2)"><span></span></td>\n      </tr>\n\n      <tr>\n      <th colspan="5" class="ui-widget-content">Highlighter Colors</th>\n    </tr>\n    \n    <tr class="top">\n      <td style="background-color:rgb(255, 248, 143)"><span></span></td>\n      <td style="background-color:rgb(211, 248, 182)"><span></span></td>\n      <td style="background-color:rgb(175, 250, 209)"><span></span></td>\n      <td style="background-color:rgb(177, 255, 255)"><span></span></td>\n      <td style="background-color:rgb(253, 191, 255)"><span></span></td>\n      </tr>\n      <tr class="bottom">\n      <td style="background-color:rgb(210, 203, 255);"><span></span></td>\n      <td style="background-color:rgb(64, 169, 255);"><span></span></td>\n      <td style="background-color:rgb(255, 77, 79);"><span></span></td>\n      <td style="background-color:rgb(212, 177, 6);"><span></span></td>\n      <td style="background-color:rgb(146, 84, 222);"><span></span></td>\n    </tr>\n    <tr>\n    <th colspan="5" class="ui-widget-content">Custom Colors</th>\n  </tr>\n    <tr class="bottom">\n    <td style="background-color: ${e.settings.custom_bg1};"><span></span></td>\n    <td style="background-color:${e.settings.custom_bg2};"><span></span></td>\n    <td style="background-color:${e.settings.custom_bg3};"><span></span></td>\n    <td style="background-color:${e.settings.custom_bg4};"><span></span></td>\n    <td style="background-color:${e.settings.custom_bg5};"><span></span></td>\n  </tr>\n    </tbody>\n  </table>\n</div>\n</div>`;
              })(o)),
                a.buttonEl.insertAdjacentElement("afterbegin", r),
                x(t, o, "x-backgroundcolor-picker-table");
              let n = r.querySelector(".x-color-picker-wrapper");
              new e.ButtonComponent(n)
                .setIcon("paintbrush")
                .setTooltip(u("Format Brush"))
                .onClick(() => {
                  L(o),
                    o.setEN_BG_Format_Brush(!0),
                    (o.Temp_Notice = new e.Notice(
                      u("Font-Color formatting brush ON!"),
                      0,
                    ));
                }),
                new e.ButtonComponent(n)
                  .setIcon("palette")
                  .setTooltip(u("Custom Backgroud Color"))
                  .onClick(() => {
                    t.setting.open(),
                      t.setting.openTabById("editing-toolbar"),
                      setTimeout(() => {
                        var e;
                        let o =
                          t.setting.activeTab.containerEl.querySelector(
                            ".custom_bg",
                          );
                        o &&
                          (null === (e = o.addClass) ||
                            void 0 === e ||
                            e.call(o, "toolbar-cta"));
                      }, 200);
                  });
            }
          } else {
            let u;
            l >= r - 104 && r > 100
              ? (o.setIS_MORE_Button(!0), (u = new e.ButtonComponent(d)))
              : (u = new e.ButtonComponent(s));
            let h = E(t, i.id);
            (c = "–" == h ? i.name : i.name + "(" + h + ")"),
              u.setTooltip(c).onClick(() => {
                t.commands.executeCommandById(i.id),
                  0 == n.cMenuVisibility || "following" == n.positionStyle
                    ? (s.style.visibility = "hidden")
                    : (s.style.visibility = "visible");
              }),
              u.setClass("cMenuToolbarCommandItem"),
              a >= n.cMenuNumRows
                ? u.setClass("cMenuToolbarSecond")
                : "top" != n.positionStyle &&
                  u.buttonEl.setAttribute("aria-label-position", "top"),
              "cMenuToolbar-Divider-Line" == i.id &&
                u.setClass("cMenuToolbar-Divider-Line"),
              S(i.icon) ? (u.buttonEl.innerHTML = i.icon) : u.setIcon(i.icon),
              (l += 26);
          }
        }),
          (function (t, o, n) {
            const i = t.workspace.getActiveViewOfType(e.ItemView);
            if (
              "markdown" === (null == i ? void 0 : i.getViewType()) ||
              "thino_view" === (null == i ? void 0 : i.getViewType())
            ) {
              let t = i.containerEl.querySelector("#cMenuToolbarPopoverBar");
              if (!o.IS_MORE_Button) return;
              let a = n.createEl("span");
              a.addClass("more-menu");
              let l = new e.ButtonComponent(a);
              l
                .setClass("cMenuToolbarCommandItem")
                .setTooltip(u("More"))
                .onClick(() => {
                  "hidden" == t.style.visibility
                    ? ((t.style.visibility = "visible"),
                      (t.style.height = "32px"))
                    : ((t.style.visibility = "hidden"), (t.style.height = "0"));
                }),
                (l.buttonEl.innerHTML =
                  '<svg  width="14" height="14"  version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" enable-background="new 0 0 1024 1024" xml:space="preserve"><path fill="#666" d="M510.29 14.13 q17.09 -15.07 40.2 -14.07 q23.12 1 39.2 18.08 l334.66 385.92 q25.12 30.15 34.16 66.83 q9.04 36.68 0.5 73.87 q-8.54 37.19 -32.66 67.34 l-335.67 390.94 q-15.07 18.09 -38.69 20.1 q-23.62 2.01 -41.71 -13.07 q-18.08 -15.08 -20.09 -38.19 q-2.01 -23.12 13.06 -41.21 l334.66 -390.94 q11.06 -13.06 11.56 -29.65 q0.5 -16.58 -10.55 -29.64 l-334.67 -386.92 q-15.07 -17.09 -13.56 -40.7 q1.51 -23.62 19.59 -38.7 ZM81.17 14.13 q17.08 -15.07 40.19 -14.07 q23.11 1 39.2 18.08 l334.66 385.92 q25.12 30.15 34.16 66.83 q9.04 36.68 0.5 73.87 q-8.54 37.19 -32.66 67.34 l-335.67 390.94 q-15.07 18.09 -38.69 20.6 q-23.61 2.51 -41.7 -12.57 q-18.09 -15.08 -20.1 -38.69 q-2.01 -23.62 13.06 -41.71 l334.66 -390.94 q11.06 -13.06 11.56 -29.65 q0.5 -16.58 -10.55 -29.64 l-334.66 -386.92 q-15.08 -17.09 -13.57 -40.7 q1.51 -23.62 19.6 -38.7 Z"/></svg>'),
                o.setIS_MORE_Button(!1);
            }
          })(t, o, s),
          Math.abs(o.settings.cMenuWidth - Number(l)) > 30 &&
            ((o.settings.cMenuWidth = Number(l)),
            setTimeout(() => {
              o.saveSettings();
            }, 100));
      };
      if (!o.isLoadMobile()) return;
      const a = t.workspace.getActiveViewOfType(e.ItemView);
      ("markdown" !== (null == a ? void 0 : a.getViewType()) &&
        "thino_view" !== (null == a ? void 0 : a.getViewType())) ||
        q(t, o.settings) ||
        (i(),
        s(n),
        (function (t, o) {
          C = e.requireApiVersion("0.15.0")
            ? activeWindow.document
            : window.document;
          let n = C.querySelectorAll("#change-font-color-icon");
          n &&
            n.forEach((e) => {
              e.style.fill = t;
            });
          let i = C.querySelectorAll("#change-background-color-icon");
          i &&
            i.forEach((e) => {
              e.style.fill = o;
            });
        })(
          /**!
           * Sortable 1.15.0
           * @author	RubaXa   <trash@rubaxa.org>
           * @author	owenm    <owen23355@gmail.com>
           * @license MIT
           */ n.cMenuFontColor,
          n.cMenuBackgroundColor,
        ));
    })();
}
function $(e, t) {
  var o = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      o.push.apply(o, n);
  }
  return o;
}
function z(e) {
  for (var t = 1; t < arguments.length; t++) {
    var o = null != arguments[t] ? arguments[t] : {};
    t % 2
      ? $(Object(o), !0).forEach(function (t) {
          V(e, t, o[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(o))
        : $(Object(o)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(o, t));
          });
  }
  return e;
}
function P(e) {
  return (
    (P =
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e &&
              "function" == typeof Symbol &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? "symbol"
              : typeof e;
          }),
    P(e)
  );
}
function V(e, t, o) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: o,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = o),
    e
  );
}
function H() {
  return (
    (H =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var o = arguments[t];
          for (var n in o)
            Object.prototype.hasOwnProperty.call(o, n) && (e[n] = o[n]);
        }
        return e;
      }),
    H.apply(this, arguments)
  );
}
function R(e, t) {
  if (null == e) return {};
  var o,
    n,
    i = (function (e, t) {
      if (null == e) return {};
      var o,
        n,
        i = {},
        a = Object.keys(e);
      for (n = 0; n < a.length; n++)
        (o = a[n]), t.indexOf(o) >= 0 || (i[o] = e[o]);
      return i;
    })(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (n = 0; n < a.length; n++)
      (o = a[n]),
        t.indexOf(o) >= 0 ||
          (Object.prototype.propertyIsEnumerable.call(e, o) && (i[o] = e[o]));
  }
  return i;
}
function Z(e) {
  if ("undefined" != typeof window && window.navigator)
    return !!navigator.userAgent.match(e);
}
var j = Z(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i),
  W = Z(/Edge/i),
  X = Z(/firefox/i),
  Y = Z(/safari/i) && !Z(/chrome/i) && !Z(/android/i),
  G = Z(/iP(ad|od|hone)/i),
  U = Z(/chrome/i) && Z(/android/i),
  K = { capture: !1, passive: !1 };
function J(e, t, o) {
  e.addEventListener(t, o, !j && K);
}
function Q(e, t, o) {
  e.removeEventListener(t, o, !j && K);
}
function ee(e, t) {
  if (t) {
    if ((">" === t[0] && (t = t.substring(1)), e))
      try {
        if (e.matches) return e.matches(t);
        if (e.msMatchesSelector) return e.msMatchesSelector(t);
        if (e.webkitMatchesSelector) return e.webkitMatchesSelector(t);
      } catch (e) {
        return !1;
      }
    return !1;
  }
}
function te(e) {
  return e.host && e !== document && e.host.nodeType ? e.host : e.parentNode;
}
function oe(e, t, o, n) {
  if (e) {
    o = o || document;
    do {
      if (
        (null != t &&
          (">" === t[0] ? e.parentNode === o && ee(e, t) : ee(e, t))) ||
        (n && e === o)
      )
        return e;
      if (e === o) break;
    } while ((e = te(e)));
  }
  return null;
}
var ne,
  ie = /\s+/g;
function ae(e, t, o) {
  if (e && t)
    if (e.classList) e.classList[o ? "add" : "remove"](t);
    else {
      var n = (" " + e.className + " ")
        .replace(ie, " ")
        .replace(" " + t + " ", " ");
      e.className = (n + (o ? " " + t : "")).replace(ie, " ");
    }
}
function le(e, t, o) {
  var n = e && e.style;
  if (n) {
    if (void 0 === o)
      return (
        document.defaultView && document.defaultView.getComputedStyle
          ? (o = document.defaultView.getComputedStyle(e, ""))
          : e.currentStyle && (o = e.currentStyle),
        void 0 === t ? o : o[t]
      );
    t in n || -1 !== t.indexOf("webkit") || (t = "-webkit-" + t),
      (n[t] = o + ("string" == typeof o ? "" : "px"));
  }
}
function re(e, t) {
  var o = "";
  if ("string" == typeof e) o = e;
  else
    do {
      var n = le(e, "transform");
      n && "none" !== n && (o = n + " " + o);
    } while (!t && (e = e.parentNode));
  var i =
    window.DOMMatrix ||
    window.WebKitCSSMatrix ||
    window.CSSMatrix ||
    window.MSCSSMatrix;
  return i && new i(o);
}
function se(e, t, o) {
  if (e) {
    var n = e.getElementsByTagName(t),
      i = 0,
      a = n.length;
    if (o) for (; i < a; i++) o(n[i], i);
    return n;
  }
  return [];
}
function ce() {
  var e = document.scrollingElement;
  return e || document.documentElement;
}
function de(e, t, o, n, i) {
  if (e.getBoundingClientRect || e === window) {
    var a, l, r, s, c, d, u;
    if (
      (e !== window && e.parentNode && e !== ce()
        ? ((l = (a = e.getBoundingClientRect()).top),
          (r = a.left),
          (s = a.bottom),
          (c = a.right),
          (d = a.height),
          (u = a.width))
        : ((l = 0),
          (r = 0),
          (s = window.innerHeight),
          (c = window.innerWidth),
          (d = window.innerHeight),
          (u = window.innerWidth)),
      (t || o) && e !== window && ((i = i || e.parentNode), !j))
    )
      do {
        if (
          i &&
          i.getBoundingClientRect &&
          ("none" !== le(i, "transform") ||
            (o && "static" !== le(i, "position")))
        ) {
          var h = i.getBoundingClientRect();
          (l -= h.top + parseInt(le(i, "border-top-width"))),
            (r -= h.left + parseInt(le(i, "border-left-width"))),
            (s = l + a.height),
            (c = r + a.width);
          break;
        }
      } while ((i = i.parentNode));
    if (n && e !== window) {
      var p = re(i || e),
        g = p && p.a,
        m = p && p.d;
      p && ((s = (l /= m) + (d /= m)), (c = (r /= g) + (u /= g)));
    }
    return { top: l, left: r, bottom: s, right: c, width: u, height: d };
  }
}
function ue(e, t, o) {
  for (var n = fe(e, !0), i = de(e)[t]; n; ) {
    var a = de(n)[o];
    if (!("top" === o || "left" === o ? i >= a : i <= a)) return n;
    if (n === ce()) break;
    n = fe(n, !1);
  }
  return !1;
}
function he(e, t, o, n) {
  for (var i = 0, a = 0, l = e.children; a < l.length; ) {
    if (
      "none" !== l[a].style.display &&
      l[a] !== yt.ghost &&
      (n || l[a] !== yt.dragged) &&
      oe(l[a], o.draggable, e, !1)
    ) {
      if (i === t) return l[a];
      i++;
    }
    a++;
  }
  return null;
}
function pe(e, t) {
  for (
    var o = e.lastElementChild;
    o && (o === yt.ghost || "none" === le(o, "display") || (t && !ee(o, t)));

  )
    o = o.previousElementSibling;
  return o || null;
}
function ge(e, t) {
  var o = 0;
  if (!e || !e.parentNode) return -1;
  for (; (e = e.previousElementSibling); )
    "TEMPLATE" === e.nodeName.toUpperCase() ||
      e === yt.clone ||
      (t && !ee(e, t)) ||
      o++;
  return o;
}
function me(e) {
  var t = 0,
    o = 0,
    n = ce();
  if (e)
    do {
      var i = re(e),
        a = i.a,
        l = i.d;
      (t += e.scrollLeft * a), (o += e.scrollTop * l);
    } while (e !== n && (e = e.parentNode));
  return [t, o];
}
function fe(e, t) {
  if (!e || !e.getBoundingClientRect) return ce();
  var o = e,
    n = !1;
  do {
    if (o.clientWidth < o.scrollWidth || o.clientHeight < o.scrollHeight) {
      var i = le(o);
      if (
        (o.clientWidth < o.scrollWidth &&
          ("auto" == i.overflowX || "scroll" == i.overflowX)) ||
        (o.clientHeight < o.scrollHeight &&
          ("auto" == i.overflowY || "scroll" == i.overflowY))
      ) {
        if (!o.getBoundingClientRect || o === document.body) return ce();
        if (n || t) return o;
        n = !0;
      }
    }
  } while ((o = o.parentNode));
  return ce();
}
function be(e, t) {
  return (
    Math.round(e.top) === Math.round(t.top) &&
    Math.round(e.left) === Math.round(t.left) &&
    Math.round(e.height) === Math.round(t.height) &&
    Math.round(e.width) === Math.round(t.width)
  );
}
function ve(e, t) {
  return function () {
    if (!ne) {
      var o = arguments,
        n = this;
      1 === o.length ? e.call(n, o[0]) : e.apply(n, o),
        (ne = setTimeout(function () {
          ne = void 0;
        }, t));
    }
  };
}
function ye(e, t, o) {
  (e.scrollLeft += t), (e.scrollTop += o);
}
function we(e) {
  var t = window.Polymer,
    o = window.jQuery || window.Zepto;
  return t && t.dom
    ? t.dom(e).cloneNode(!0)
    : o
      ? o(e).clone(!0)[0]
      : e.cloneNode(!0);
}
var Ce = "Sortable" + new Date().getTime();
function ke() {
  var e,
    t = [];
  return {
    captureAnimationState: function () {
      ((t = []), this.options.animation) &&
        [].slice.call(this.el.children).forEach(function (e) {
          if ("none" !== le(e, "display") && e !== yt.ghost) {
            t.push({ target: e, rect: de(e) });
            var o = z({}, t[t.length - 1].rect);
            if (e.thisAnimationDuration) {
              var n = re(e, !0);
              n && ((o.top -= n.f), (o.left -= n.e));
            }
            e.fromRect = o;
          }
        });
    },
    addAnimationState: function (e) {
      t.push(e);
    },
    removeAnimationState: function (e) {
      t.splice(
        (function (e, t) {
          for (var o in e)
            if (e.hasOwnProperty(o))
              for (var n in t)
                if (t.hasOwnProperty(n) && t[n] === e[o][n]) return Number(o);
          return -1;
        })(t, { target: e }),
        1,
      );
    },
    animateAll: function (o) {
      var n = this;
      if (!this.options.animation)
        return clearTimeout(e), void ("function" == typeof o && o());
      var i = !1,
        a = 0;
      t.forEach(function (e) {
        var t = 0,
          o = e.target,
          l = o.fromRect,
          r = de(o),
          s = o.prevFromRect,
          c = o.prevToRect,
          d = e.rect,
          u = re(o, !0);
        u && ((r.top -= u.f), (r.left -= u.e)),
          (o.toRect = r),
          o.thisAnimationDuration &&
            be(s, r) &&
            !be(l, r) &&
            (d.top - r.top) / (d.left - r.left) ==
              (l.top - r.top) / (l.left - r.left) &&
            (t = (function (e, t, o, n) {
              return (
                (Math.sqrt(
                  Math.pow(t.top - e.top, 2) + Math.pow(t.left - e.left, 2),
                ) /
                  Math.sqrt(
                    Math.pow(t.top - o.top, 2) + Math.pow(t.left - o.left, 2),
                  )) *
                n.animation
              );
            })(d, s, c, n.options)),
          be(r, l) ||
            ((o.prevFromRect = l),
            (o.prevToRect = r),
            t || (t = n.options.animation),
            n.animate(o, d, r, t)),
          t &&
            ((i = !0),
            (a = Math.max(a, t)),
            clearTimeout(o.animationResetTimer),
            (o.animationResetTimer = setTimeout(function () {
              (o.animationTime = 0),
                (o.prevFromRect = null),
                (o.fromRect = null),
                (o.prevToRect = null),
                (o.thisAnimationDuration = null);
            }, t)),
            (o.thisAnimationDuration = t));
      }),
        clearTimeout(e),
        i
          ? (e = setTimeout(function () {
              "function" == typeof o && o();
            }, a))
          : "function" == typeof o && o(),
        (t = []);
    },
    animate: function (e, t, o, n) {
      if (n) {
        le(e, "transition", ""), le(e, "transform", "");
        var i = re(this.el),
          a = i && i.a,
          l = i && i.d,
          r = (t.left - o.left) / (a || 1),
          s = (t.top - o.top) / (l || 1);
        (e.animatingX = !!r),
          (e.animatingY = !!s),
          le(e, "transform", "translate3d(" + r + "px," + s + "px,0)"),
          (this.forRepaintDummy = (function (e) {
            return e.offsetWidth;
          })(e)),
          le(
            e,
            "transition",
            "transform " +
              n +
              "ms" +
              (this.options.easing ? " " + this.options.easing : ""),
          ),
          le(e, "transform", "translate3d(0,0,0)"),
          "number" == typeof e.animated && clearTimeout(e.animated),
          (e.animated = setTimeout(function () {
            le(e, "transition", ""),
              le(e, "transform", ""),
              (e.animated = !1),
              (e.animatingX = !1),
              (e.animatingY = !1);
          }, n));
      }
    },
  };
}
var qe = [],
  Te = { initializeByDefault: !0 },
  Me = {
    mount: function (e) {
      for (var t in Te) Te.hasOwnProperty(t) && !(t in e) && (e[t] = Te[t]);
      qe.forEach(function (t) {
        if (t.pluginName === e.pluginName)
          throw "Sortable: Cannot mount plugin ".concat(
            e.pluginName,
            " more than once",
          );
      }),
        qe.push(e);
    },
    pluginEvent: function (e, t, o) {
      var n = this;
      (this.eventCanceled = !1),
        (o.cancel = function () {
          n.eventCanceled = !0;
        });
      var i = e + "Global";
      qe.forEach(function (n) {
        t[n.pluginName] &&
          (t[n.pluginName][i] && t[n.pluginName][i](z({ sortable: t }, o)),
          t.options[n.pluginName] &&
            t[n.pluginName][e] &&
            t[n.pluginName][e](z({ sortable: t }, o)));
      });
    },
    initializePlugins: function (e, t, o, n) {
      for (var i in (qe.forEach(function (n) {
        var i = n.pluginName;
        if (e.options[i] || n.initializeByDefault) {
          var a = new n(e, t, e.options);
          (a.sortable = e),
            (a.options = e.options),
            (e[i] = a),
            H(o, a.defaults);
        }
      }),
      e.options))
        if (e.options.hasOwnProperty(i)) {
          var a = this.modifyOption(e, i, e.options[i]);
          void 0 !== a && (e.options[i] = a);
        }
    },
    getEventProperties: function (e, t) {
      var o = {};
      return (
        qe.forEach(function (n) {
          "function" == typeof n.eventProperties &&
            H(o, n.eventProperties.call(t[n.pluginName], e));
        }),
        o
      );
    },
    modifyOption: function (e, t, o) {
      var n;
      return (
        qe.forEach(function (i) {
          e[i.pluginName] &&
            i.optionListeners &&
            "function" == typeof i.optionListeners[t] &&
            (n = i.optionListeners[t].call(e[i.pluginName], o));
        }),
        n
      );
    },
  };
var Ee = ["evt"],
  _e = function (e, t) {
    var o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
      n = o.evt,
      i = R(o, Ee);
    Me.pluginEvent.bind(yt)(
      e,
      t,
      z(
        {
          dragEl: xe,
          parentEl: Be,
          ghostEl: Ae,
          rootEl: De,
          nextEl: Le,
          lastDownEl: Ne,
          cloneEl: Ie,
          cloneHidden: Oe,
          dragStarted: Ge,
          putSortable: He,
          activeSortable: yt.active,
          originalEvent: n,
          oldIndex: Fe,
          oldDraggableIndex: ze,
          newIndex: $e,
          newDraggableIndex: Pe,
          hideGhostForTarget: mt,
          unhideGhostForTarget: ft,
          cloneNowHidden: function () {
            Oe = !0;
          },
          cloneNowShown: function () {
            Oe = !1;
          },
          dispatchSortableEvent: function (e) {
            Se({ sortable: t, name: e, originalEvent: n });
          },
        },
        i,
      ),
    );
  };
function Se(e) {
  !(function (e) {
    var t = e.sortable,
      o = e.rootEl,
      n = e.name,
      i = e.targetEl,
      a = e.cloneEl,
      l = e.toEl,
      r = e.fromEl,
      s = e.oldIndex,
      c = e.newIndex,
      d = e.oldDraggableIndex,
      u = e.newDraggableIndex,
      h = e.originalEvent,
      p = e.putSortable,
      g = e.extraEventProperties;
    if ((t = t || (o && o[Ce]))) {
      var m,
        f = t.options,
        b = "on" + n.charAt(0).toUpperCase() + n.substr(1);
      !window.CustomEvent || j || W
        ? (m = document.createEvent("Event")).initEvent(n, !0, !0)
        : (m = new CustomEvent(n, { bubbles: !0, cancelable: !0 })),
        (m.to = l || o),
        (m.from = r || o),
        (m.item = i || o),
        (m.clone = a),
        (m.oldIndex = s),
        (m.newIndex = c),
        (m.oldDraggableIndex = d),
        (m.newDraggableIndex = u),
        (m.originalEvent = h),
        (m.pullMode = p ? p.lastPutMode : void 0);
      var v = z(z({}, g), Me.getEventProperties(n, t));
      for (var y in v) m[y] = v[y];
      o && o.dispatchEvent(m), f[b] && f[b].call(t, m);
    }
  })(
    z(
      {
        putSortable: He,
        cloneEl: Ie,
        targetEl: xe,
        rootEl: De,
        oldIndex: Fe,
        oldDraggableIndex: ze,
        newIndex: $e,
        newDraggableIndex: Pe,
      },
      e,
    ),
  );
}
var xe,
  Be,
  Ae,
  De,
  Le,
  Ne,
  Ie,
  Oe,
  Fe,
  $e,
  ze,
  Pe,
  Ve,
  He,
  Re,
  Ze,
  je,
  We,
  Xe,
  Ye,
  Ge,
  Ue,
  Ke,
  Je,
  Qe,
  et = !1,
  tt = !1,
  ot = [],
  nt = !1,
  it = !1,
  at = [],
  lt = !1,
  rt = [],
  st = "undefined" != typeof document,
  ct = G,
  dt = W || j ? "cssFloat" : "float",
  ut = st && !U && !G && "draggable" in document.createElement("div"),
  ht = (function () {
    if (st) {
      if (j) return !1;
      var e = document.createElement("x");
      return (
        (e.style.cssText = "pointer-events:auto"),
        "auto" === e.style.pointerEvents
      );
    }
  })(),
  pt = function (e, t) {
    var o = le(e),
      n =
        parseInt(o.width) -
        parseInt(o.paddingLeft) -
        parseInt(o.paddingRight) -
        parseInt(o.borderLeftWidth) -
        parseInt(o.borderRightWidth),
      i = he(e, 0, t),
      a = he(e, 1, t),
      l = i && le(i),
      r = a && le(a),
      s = l && parseInt(l.marginLeft) + parseInt(l.marginRight) + de(i).width,
      c = r && parseInt(r.marginLeft) + parseInt(r.marginRight) + de(a).width;
    if ("flex" === o.display)
      return "column" === o.flexDirection ||
        "column-reverse" === o.flexDirection
        ? "vertical"
        : "horizontal";
    if ("grid" === o.display)
      return o.gridTemplateColumns.split(" ").length <= 1
        ? "vertical"
        : "horizontal";
    if (i && l.float && "none" !== l.float) {
      var d = "left" === l.float ? "left" : "right";
      return !a || ("both" !== r.clear && r.clear !== d)
        ? "horizontal"
        : "vertical";
    }
    return i &&
      ("block" === l.display ||
        "flex" === l.display ||
        "table" === l.display ||
        "grid" === l.display ||
        (s >= n && "none" === o[dt]) ||
        (a && "none" === o[dt] && s + c > n))
      ? "vertical"
      : "horizontal";
  },
  gt = function (e) {
    function t(e, o) {
      return function (n, i, a, l) {
        var r =
          n.options.group.name &&
          i.options.group.name &&
          n.options.group.name === i.options.group.name;
        if (null == e && (o || r)) return !0;
        if (null == e || !1 === e) return !1;
        if (o && "clone" === e) return e;
        if ("function" == typeof e) return t(e(n, i, a, l), o)(n, i, a, l);
        var s = (o ? n : i).options.group.name;
        return (
          !0 === e ||
          ("string" == typeof e && e === s) ||
          (e.join && e.indexOf(s) > -1)
        );
      };
    }
    var o = {},
      n = e.group;
    (n && "object" == P(n)) || (n = { name: n }),
      (o.name = n.name),
      (o.checkPull = t(n.pull, !0)),
      (o.checkPut = t(n.put)),
      (o.revertClone = n.revertClone),
      (e.group = o);
  },
  mt = function () {
    !ht && Ae && le(Ae, "display", "none");
  },
  ft = function () {
    !ht && Ae && le(Ae, "display", "");
  };
st &&
  !U &&
  document.addEventListener(
    "click",
    function (e) {
      if (tt)
        return (
          e.preventDefault(),
          e.stopPropagation && e.stopPropagation(),
          e.stopImmediatePropagation && e.stopImmediatePropagation(),
          (tt = !1),
          !1
        );
    },
    !0,
  );
var bt = function (e) {
    if (xe) {
      e = e.touches ? e.touches[0] : e;
      var t =
        ((i = e.clientX),
        (a = e.clientY),
        ot.some(function (e) {
          var t = e[Ce].options.emptyInsertThreshold;
          if (t && !pe(e)) {
            var o = de(e),
              n = i >= o.left - t && i <= o.right + t,
              r = a >= o.top - t && a <= o.bottom + t;
            return n && r ? (l = e) : void 0;
          }
        }),
        l);
      if (t) {
        var o = {};
        for (var n in e) e.hasOwnProperty(n) && (o[n] = e[n]);
        (o.target = o.rootEl = t),
          (o.preventDefault = void 0),
          (o.stopPropagation = void 0),
          t[Ce]._onDragOver(o);
      }
    }
    var i, a, l;
  },
  vt = function (e) {
    xe && xe.parentNode[Ce]._isOutsideThisEl(e.target);
  };
function yt(e, t) {
  if (!e || !e.nodeType || 1 !== e.nodeType)
    throw "Sortable: `el` must be an HTMLElement, not ".concat(
      {}.toString.call(e),
    );
  (this.el = e), (this.options = t = H({}, t)), (e[Ce] = this);
  var o = {
    group: null,
    sort: !0,
    disabled: !1,
    store: null,
    handle: null,
    draggable: /^[uo]l$/i.test(e.nodeName) ? ">li" : ">*",
    swapThreshold: 1,
    invertSwap: !1,
    invertedSwapThreshold: null,
    removeCloneOnHide: !0,
    direction: function () {
      return pt(e, this.options);
    },
    ghostClass: "sortable-ghost",
    chosenClass: "sortable-chosen",
    dragClass: "sortable-drag",
    ignore: "a, img",
    filter: null,
    preventOnFilter: !0,
    animation: 0,
    easing: null,
    setData: function (e, t) {
      e.setData("Text", t.textContent);
    },
    dropBubble: !1,
    dragoverBubble: !1,
    dataIdAttr: "data-id",
    delay: 0,
    delayOnTouchOnly: !1,
    touchStartThreshold:
      (Number.parseInt ? Number : window).parseInt(
        window.devicePixelRatio,
        10,
      ) || 1,
    forceFallback: !1,
    fallbackClass: "sortable-fallback",
    fallbackOnBody: !1,
    fallbackTolerance: 0,
    fallbackOffset: { x: 0, y: 0 },
    supportPointer: !1 !== yt.supportPointer && "PointerEvent" in window && !Y,
    emptyInsertThreshold: 5,
  };
  for (var n in (Me.initializePlugins(this, e, o), o))
    !(n in t) && (t[n] = o[n]);
  for (var i in (gt(t), this))
    "_" === i.charAt(0) &&
      "function" == typeof this[i] &&
      (this[i] = this[i].bind(this));
  (this.nativeDraggable = !t.forceFallback && ut),
    this.nativeDraggable && (this.options.touchStartThreshold = 1),
    t.supportPointer
      ? J(e, "pointerdown", this._onTapStart)
      : (J(e, "mousedown", this._onTapStart),
        J(e, "touchstart", this._onTapStart)),
    this.nativeDraggable && (J(e, "dragover", this), J(e, "dragenter", this)),
    ot.push(this.el),
    t.store && t.store.get && this.sort(t.store.get(this) || []),
    H(this, ke());
}
function wt(e, t, o, n, i, a, l, r) {
  var s,
    c,
    d = e[Ce],
    u = d.options.onMove;
  return (
    !window.CustomEvent || j || W
      ? (s = document.createEvent("Event")).initEvent("move", !0, !0)
      : (s = new CustomEvent("move", { bubbles: !0, cancelable: !0 })),
    (s.to = t),
    (s.from = e),
    (s.dragged = o),
    (s.draggedRect = n),
    (s.related = i || t),
    (s.relatedRect = a || de(t)),
    (s.willInsertAfter = r),
    (s.originalEvent = l),
    e.dispatchEvent(s),
    u && (c = u.call(d, s, l)),
    c
  );
}
function Ct(e) {
  e.draggable = !1;
}
function kt() {
  lt = !1;
}
function qt(e) {
  for (
    var t = e.tagName + e.className + e.src + e.href + e.textContent,
      o = t.length,
      n = 0;
    o--;

  )
    n += t.charCodeAt(o);
  return n.toString(36);
}
function Tt(e) {
  return setTimeout(e, 0);
}
function Mt(e) {
  return clearTimeout(e);
}
(yt.prototype = {
  constructor: yt,
  _isOutsideThisEl: function (e) {
    this.el.contains(e) || e === this.el || (Ue = null);
  },
  _getDirection: function (e, t) {
    return "function" == typeof this.options.direction
      ? this.options.direction.call(this, e, t, xe)
      : this.options.direction;
  },
  _onTapStart: function (e) {
    if (e.cancelable) {
      var t = this,
        o = this.el,
        n = this.options,
        i = n.preventOnFilter,
        a = e.type,
        l =
          (e.touches && e.touches[0]) ||
          (e.pointerType && "touch" === e.pointerType && e),
        r = (l || e).target,
        s =
          (e.target.shadowRoot &&
            ((e.path && e.path[0]) ||
              (e.composedPath && e.composedPath()[0]))) ||
          r,
        c = n.filter;
      if (
        ((function (e) {
          rt.length = 0;
          var t = e.getElementsByTagName("input"),
            o = t.length;
          for (; o--; ) {
            var n = t[o];
            n.checked && rt.push(n);
          }
        })(o),
        !xe &&
          !(
            (/mousedown|pointerdown/.test(a) && 0 !== e.button) ||
            n.disabled
          ) &&
          !s.isContentEditable &&
          (this.nativeDraggable ||
            !Y ||
            !r ||
            "SELECT" !== r.tagName.toUpperCase()) &&
          !(((r = oe(r, n.draggable, o, !1)) && r.animated) || Ne === r))
      ) {
        if (((Fe = ge(r)), (ze = ge(r, n.draggable)), "function" == typeof c)) {
          if (c.call(this, e, r, this))
            return (
              Se({
                sortable: t,
                rootEl: s,
                name: "filter",
                targetEl: r,
                toEl: o,
                fromEl: o,
              }),
              _e("filter", t, { evt: e }),
              void (i && e.cancelable && e.preventDefault())
            );
        } else if (
          c &&
          (c = c.split(",").some(function (n) {
            if ((n = oe(s, n.trim(), o, !1)))
              return (
                Se({
                  sortable: t,
                  rootEl: n,
                  name: "filter",
                  targetEl: r,
                  fromEl: o,
                  toEl: o,
                }),
                _e("filter", t, { evt: e }),
                !0
              );
          }))
        )
          return void (i && e.cancelable && e.preventDefault());
        (n.handle && !oe(s, n.handle, o, !1)) ||
          this._prepareDragStart(e, l, r);
      }
    }
  },
  _prepareDragStart: function (e, t, o) {
    var n,
      i = this,
      a = i.el,
      l = i.options,
      r = a.ownerDocument;
    if (o && !xe && o.parentNode === a) {
      var s = de(o);
      if (
        ((De = a),
        (Be = (xe = o).parentNode),
        (Le = xe.nextSibling),
        (Ne = o),
        (Ve = l.group),
        (yt.dragged = xe),
        (Re = {
          target: xe,
          clientX: (t || e).clientX,
          clientY: (t || e).clientY,
        }),
        (Xe = Re.clientX - s.left),
        (Ye = Re.clientY - s.top),
        (this._lastX = (t || e).clientX),
        (this._lastY = (t || e).clientY),
        (xe.style["will-change"] = "all"),
        (n = function () {
          _e("delayEnded", i, { evt: e }),
            yt.eventCanceled
              ? i._onDrop()
              : (i._disableDelayedDragEvents(),
                !X && i.nativeDraggable && (xe.draggable = !0),
                i._triggerDragStart(e, t),
                Se({ sortable: i, name: "choose", originalEvent: e }),
                ae(xe, l.chosenClass, !0));
        }),
        l.ignore.split(",").forEach(function (e) {
          se(xe, e.trim(), Ct);
        }),
        J(r, "dragover", bt),
        J(r, "mousemove", bt),
        J(r, "touchmove", bt),
        J(r, "mouseup", i._onDrop),
        J(r, "touchend", i._onDrop),
        J(r, "touchcancel", i._onDrop),
        X &&
          this.nativeDraggable &&
          ((this.options.touchStartThreshold = 4), (xe.draggable = !0)),
        _e("delayStart", this, { evt: e }),
        !l.delay ||
          (l.delayOnTouchOnly && !t) ||
          (this.nativeDraggable && (W || j)))
      )
        n();
      else {
        if (yt.eventCanceled) return void this._onDrop();
        J(r, "mouseup", i._disableDelayedDrag),
          J(r, "touchend", i._disableDelayedDrag),
          J(r, "touchcancel", i._disableDelayedDrag),
          J(r, "mousemove", i._delayedDragTouchMoveHandler),
          J(r, "touchmove", i._delayedDragTouchMoveHandler),
          l.supportPointer &&
            J(r, "pointermove", i._delayedDragTouchMoveHandler),
          (i._dragStartTimer = setTimeout(n, l.delay));
      }
    }
  },
  _delayedDragTouchMoveHandler: function (e) {
    var t = e.touches ? e.touches[0] : e;
    Math.max(
      Math.abs(t.clientX - this._lastX),
      Math.abs(t.clientY - this._lastY),
    ) >=
      Math.floor(
        this.options.touchStartThreshold /
          ((this.nativeDraggable && window.devicePixelRatio) || 1),
      ) && this._disableDelayedDrag();
  },
  _disableDelayedDrag: function () {
    xe && Ct(xe),
      clearTimeout(this._dragStartTimer),
      this._disableDelayedDragEvents();
  },
  _disableDelayedDragEvents: function () {
    var e = this.el.ownerDocument;
    Q(e, "mouseup", this._disableDelayedDrag),
      Q(e, "touchend", this._disableDelayedDrag),
      Q(e, "touchcancel", this._disableDelayedDrag),
      Q(e, "mousemove", this._delayedDragTouchMoveHandler),
      Q(e, "touchmove", this._delayedDragTouchMoveHandler),
      Q(e, "pointermove", this._delayedDragTouchMoveHandler);
  },
  _triggerDragStart: function (e, t) {
    (t = t || ("touch" == e.pointerType && e)),
      !this.nativeDraggable || t
        ? this.options.supportPointer
          ? J(document, "pointermove", this._onTouchMove)
          : J(document, t ? "touchmove" : "mousemove", this._onTouchMove)
        : (J(xe, "dragend", this), J(De, "dragstart", this._onDragStart));
    try {
      document.selection
        ? Tt(function () {
            document.selection.empty();
          })
        : window.getSelection().removeAllRanges();
    } catch (e) {}
  },
  _dragStarted: function (e, t) {
    if (((et = !1), De && xe)) {
      _e("dragStarted", this, { evt: t }),
        this.nativeDraggable && J(document, "dragover", vt);
      var o = this.options;
      !e && ae(xe, o.dragClass, !1),
        ae(xe, o.ghostClass, !0),
        (yt.active = this),
        e && this._appendGhost(),
        Se({ sortable: this, name: "start", originalEvent: t });
    } else this._nulling();
  },
  _emulateDragOver: function () {
    if (Ze) {
      (this._lastX = Ze.clientX), (this._lastY = Ze.clientY), mt();
      for (
        var e = document.elementFromPoint(Ze.clientX, Ze.clientY), t = e;
        e &&
        e.shadowRoot &&
        (e = e.shadowRoot.elementFromPoint(Ze.clientX, Ze.clientY)) !== t;

      )
        t = e;
      if ((xe.parentNode[Ce]._isOutsideThisEl(e), t))
        do {
          if (t[Ce]) {
            if (
              t[Ce]._onDragOver({
                clientX: Ze.clientX,
                clientY: Ze.clientY,
                target: e,
                rootEl: t,
              }) &&
              !this.options.dragoverBubble
            )
              break;
          }
          e = t;
        } while ((t = t.parentNode));
      ft();
    }
  },
  _onTouchMove: function (e) {
    if (Re) {
      var t = this.options,
        o = t.fallbackTolerance,
        n = t.fallbackOffset,
        i = e.touches ? e.touches[0] : e,
        a = Ae && re(Ae, !0),
        l = Ae && a && a.a,
        r = Ae && a && a.d,
        s = ct && Qe && me(Qe),
        c =
          (i.clientX - Re.clientX + n.x) / (l || 1) +
          (s ? s[0] - at[0] : 0) / (l || 1),
        d =
          (i.clientY - Re.clientY + n.y) / (r || 1) +
          (s ? s[1] - at[1] : 0) / (r || 1);
      if (!yt.active && !et) {
        if (
          o &&
          Math.max(
            Math.abs(i.clientX - this._lastX),
            Math.abs(i.clientY - this._lastY),
          ) < o
        )
          return;
        this._onDragStart(e, !0);
      }
      if (Ae) {
        a
          ? ((a.e += c - (je || 0)), (a.f += d - (We || 0)))
          : (a = { a: 1, b: 0, c: 0, d: 1, e: c, f: d });
        var u = "matrix("
          .concat(a.a, ",")
          .concat(a.b, ",")
          .concat(a.c, ",")
          .concat(a.d, ",")
          .concat(a.e, ",")
          .concat(a.f, ")");
        le(Ae, "webkitTransform", u),
          le(Ae, "mozTransform", u),
          le(Ae, "msTransform", u),
          le(Ae, "transform", u),
          (je = c),
          (We = d),
          (Ze = i);
      }
      e.cancelable && e.preventDefault();
    }
  },
  _appendGhost: function () {
    if (!Ae) {
      var e = this.options.fallbackOnBody ? document.body : De,
        t = de(xe, !0, ct, !0, e),
        o = this.options;
      if (ct) {
        for (
          Qe = e;
          "static" === le(Qe, "position") &&
          "none" === le(Qe, "transform") &&
          Qe !== document;

        )
          Qe = Qe.parentNode;
        Qe !== document.body && Qe !== document.documentElement
          ? (Qe === document && (Qe = ce()),
            (t.top += Qe.scrollTop),
            (t.left += Qe.scrollLeft))
          : (Qe = ce()),
          (at = me(Qe));
      }
      ae((Ae = xe.cloneNode(!0)), o.ghostClass, !1),
        ae(Ae, o.fallbackClass, !0),
        ae(Ae, o.dragClass, !0),
        le(Ae, "transition", ""),
        le(Ae, "transform", ""),
        le(Ae, "box-sizing", "border-box"),
        le(Ae, "margin", 0),
        le(Ae, "top", t.top),
        le(Ae, "left", t.left),
        le(Ae, "width", t.width),
        le(Ae, "height", t.height),
        le(Ae, "opacity", "0.8"),
        le(Ae, "position", ct ? "absolute" : "fixed"),
        le(Ae, "zIndex", "100000"),
        le(Ae, "pointerEvents", "none"),
        (yt.ghost = Ae),
        e.appendChild(Ae),
        le(
          Ae,
          "transform-origin",
          (Xe / parseInt(Ae.style.width)) * 100 +
            "% " +
            (Ye / parseInt(Ae.style.height)) * 100 +
            "%",
        );
    }
  },
  _onDragStart: function (e, t) {
    var o = this,
      n = e.dataTransfer,
      i = o.options;
    _e("dragStart", this, { evt: e }),
      yt.eventCanceled
        ? this._onDrop()
        : (_e("setupClone", this),
          yt.eventCanceled ||
            ((Ie = we(xe)).removeAttribute("id"),
            (Ie.draggable = !1),
            (Ie.style["will-change"] = ""),
            this._hideClone(),
            ae(Ie, this.options.chosenClass, !1),
            (yt.clone = Ie)),
          (o.cloneId = Tt(function () {
            _e("clone", o),
              yt.eventCanceled ||
                (o.options.removeCloneOnHide || De.insertBefore(Ie, xe),
                o._hideClone(),
                Se({ sortable: o, name: "clone" }));
          })),
          !t && ae(xe, i.dragClass, !0),
          t
            ? ((tt = !0), (o._loopId = setInterval(o._emulateDragOver, 50)))
            : (Q(document, "mouseup", o._onDrop),
              Q(document, "touchend", o._onDrop),
              Q(document, "touchcancel", o._onDrop),
              n &&
                ((n.effectAllowed = "move"),
                i.setData && i.setData.call(o, n, xe)),
              J(document, "drop", o),
              le(xe, "transform", "translateZ(0)")),
          (et = !0),
          (o._dragStartId = Tt(o._dragStarted.bind(o, t, e))),
          J(document, "selectstart", o),
          (Ge = !0),
          Y && le(document.body, "user-select", "none"));
  },
  _onDragOver: function (e) {
    var t,
      o,
      n,
      i,
      a = this.el,
      l = e.target,
      r = this.options,
      s = r.group,
      c = yt.active,
      d = Ve === s,
      u = r.sort,
      h = He || c,
      p = this,
      g = !1;
    if (!lt) {
      if (
        (void 0 !== e.preventDefault && e.cancelable && e.preventDefault(),
        (l = oe(l, r.draggable, a, !0)),
        x("dragOver"),
        yt.eventCanceled)
      )
        return g;
      if (
        xe.contains(e.target) ||
        (l.animated && l.animatingX && l.animatingY) ||
        p._ignoreWhileAnimating === l
      )
        return A(!1);
      if (
        ((tt = !1),
        c &&
          !r.disabled &&
          (d
            ? u || (n = Be !== De)
            : He === this ||
              ((this.lastPutMode = Ve.checkPull(this, c, xe, e)) &&
                s.checkPut(this, c, xe, e))))
      ) {
        if (
          ((i = "vertical" === this._getDirection(e, l)),
          (t = de(xe)),
          x("dragOverValid"),
          yt.eventCanceled)
        )
          return g;
        if (n)
          return (
            (Be = De),
            B(),
            this._hideClone(),
            x("revert"),
            yt.eventCanceled ||
              (Le ? De.insertBefore(xe, Le) : De.appendChild(xe)),
            A(!0)
          );
        var m = pe(a, r.draggable);
        if (
          !m ||
          ((function (e, t, o) {
            var n = de(pe(o.el, o.options.draggable)),
              i = 10;
            return t
              ? e.clientX > n.right + i ||
                  (e.clientX <= n.right &&
                    e.clientY > n.bottom &&
                    e.clientX >= n.left)
              : (e.clientX > n.right && e.clientY > n.top) ||
                  (e.clientX <= n.right && e.clientY > n.bottom + i);
          })(e, i, this) &&
            !m.animated)
        ) {
          if (m === xe) return A(!1);
          if (
            (m && a === e.target && (l = m),
            l && (o = de(l)),
            !1 !== wt(De, a, xe, t, l, o, e, !!l))
          )
            return (
              B(),
              m && m.nextSibling
                ? a.insertBefore(xe, m.nextSibling)
                : a.appendChild(xe),
              (Be = a),
              D(),
              A(!0)
            );
        } else if (
          m &&
          (function (e, t, o) {
            var n = de(he(o.el, 0, o.options, !0)),
              i = 10;
            return t
              ? e.clientX < n.left - i ||
                  (e.clientY < n.top && e.clientX < n.right)
              : e.clientY < n.top - i ||
                  (e.clientY < n.bottom && e.clientX < n.left);
          })(e, i, this)
        ) {
          var f = he(a, 0, r, !0);
          if (f === xe) return A(!1);
          if (((o = de((l = f))), !1 !== wt(De, a, xe, t, l, o, e, !1)))
            return B(), a.insertBefore(xe, f), (Be = a), D(), A(!0);
        } else if (l.parentNode === a) {
          o = de(l);
          var b,
            v,
            y,
            w = xe.parentNode !== a,
            C = !(function (e, t, o) {
              var n = o ? e.left : e.top,
                i = o ? e.right : e.bottom,
                a = o ? e.width : e.height,
                l = o ? t.left : t.top,
                r = o ? t.right : t.bottom,
                s = o ? t.width : t.height;
              return n === l || i === r || n + a / 2 === l + s / 2;
            })(
              (xe.animated && xe.toRect) || t,
              (l.animated && l.toRect) || o,
              i,
            ),
            k = i ? "top" : "left",
            q = ue(l, "top", "top") || ue(xe, "top", "top"),
            T = q ? q.scrollTop : void 0;
          if (
            (Ue !== l &&
              ((v = o[k]), (nt = !1), (it = (!C && r.invertSwap) || w)),
            (b = (function (e, t, o, n, i, a, l, r) {
              var s = n ? e.clientY : e.clientX,
                c = n ? o.height : o.width,
                d = n ? o.top : o.left,
                u = n ? o.bottom : o.right,
                h = !1;
              if (!l)
                if (r && Je < c * i) {
                  if (
                    (!nt &&
                      (1 === Ke ? s > d + (c * a) / 2 : s < u - (c * a) / 2) &&
                      (nt = !0),
                    nt)
                  )
                    h = !0;
                  else if (1 === Ke ? s < d + Je : s > u - Je) return -Ke;
                } else if (
                  s > d + (c * (1 - i)) / 2 &&
                  s < u - (c * (1 - i)) / 2
                )
                  return (function (e) {
                    return ge(xe) < ge(e) ? 1 : -1;
                  })(t);
              if ((h = h || l) && (s < d + (c * a) / 2 || s > u - (c * a) / 2))
                return s > d + c / 2 ? 1 : -1;
              return 0;
            })(
              e,
              l,
              o,
              i,
              C ? 1 : r.swapThreshold,
              null == r.invertedSwapThreshold
                ? r.swapThreshold
                : r.invertedSwapThreshold,
              it,
              Ue === l,
            )),
            0 !== b)
          ) {
            var M = ge(xe);
            do {
              (M -= b), (y = Be.children[M]);
            } while (y && ("none" === le(y, "display") || y === Ae));
          }
          if (0 === b || y === l) return A(!1);
          (Ue = l), (Ke = b);
          var E = l.nextElementSibling,
            _ = !1,
            S = wt(De, a, xe, t, l, o, e, (_ = 1 === b));
          if (!1 !== S)
            return (
              (1 !== S && -1 !== S) || (_ = 1 === S),
              (lt = !0),
              setTimeout(kt, 30),
              B(),
              _ && !E
                ? a.appendChild(xe)
                : l.parentNode.insertBefore(xe, _ ? E : l),
              q && ye(q, 0, T - q.scrollTop),
              (Be = xe.parentNode),
              void 0 === v || it || (Je = Math.abs(v - de(l)[k])),
              D(),
              A(!0)
            );
        }
        if (a.contains(xe)) return A(!1);
      }
      return !1;
    }
    function x(r, s) {
      _e(
        r,
        p,
        z(
          {
            evt: e,
            isOwner: d,
            axis: i ? "vertical" : "horizontal",
            revert: n,
            dragRect: t,
            targetRect: o,
            canSort: u,
            fromSortable: h,
            target: l,
            completed: A,
            onMove: function (o, n) {
              return wt(De, a, xe, t, o, de(o), e, n);
            },
            changed: D,
          },
          s,
        ),
      );
    }
    function B() {
      x("dragOverAnimationCapture"),
        p.captureAnimationState(),
        p !== h && h.captureAnimationState();
    }
    function A(t) {
      return (
        x("dragOverCompleted", { insertion: t }),
        t &&
          (d ? c._hideClone() : c._showClone(p),
          p !== h &&
            (ae(xe, He ? He.options.ghostClass : c.options.ghostClass, !1),
            ae(xe, r.ghostClass, !0)),
          He !== p && p !== yt.active
            ? (He = p)
            : p === yt.active && He && (He = null),
          h === p && (p._ignoreWhileAnimating = l),
          p.animateAll(function () {
            x("dragOverAnimationComplete"), (p._ignoreWhileAnimating = null);
          }),
          p !== h && (h.animateAll(), (h._ignoreWhileAnimating = null))),
        ((l === xe && !xe.animated) || (l === a && !l.animated)) && (Ue = null),
        r.dragoverBubble ||
          e.rootEl ||
          l === document ||
          (xe.parentNode[Ce]._isOutsideThisEl(e.target), !t && bt(e)),
        !r.dragoverBubble && e.stopPropagation && e.stopPropagation(),
        (g = !0)
      );
    }
    function D() {
      ($e = ge(xe)),
        (Pe = ge(xe, r.draggable)),
        Se({
          sortable: p,
          name: "change",
          toEl: a,
          newIndex: $e,
          newDraggableIndex: Pe,
          originalEvent: e,
        });
    }
  },
  _ignoreWhileAnimating: null,
  _offMoveEvents: function () {
    Q(document, "mousemove", this._onTouchMove),
      Q(document, "touchmove", this._onTouchMove),
      Q(document, "pointermove", this._onTouchMove),
      Q(document, "dragover", bt),
      Q(document, "mousemove", bt),
      Q(document, "touchmove", bt);
  },
  _offUpEvents: function () {
    var e = this.el.ownerDocument;
    Q(e, "mouseup", this._onDrop),
      Q(e, "touchend", this._onDrop),
      Q(e, "pointerup", this._onDrop),
      Q(e, "touchcancel", this._onDrop),
      Q(document, "selectstart", this);
  },
  _onDrop: function (e) {
    var t = this.el,
      o = this.options;
    ($e = ge(xe)),
      (Pe = ge(xe, o.draggable)),
      _e("drop", this, { evt: e }),
      (Be = xe && xe.parentNode),
      ($e = ge(xe)),
      (Pe = ge(xe, o.draggable)),
      yt.eventCanceled ||
        ((et = !1),
        (it = !1),
        (nt = !1),
        clearInterval(this._loopId),
        clearTimeout(this._dragStartTimer),
        Mt(this.cloneId),
        Mt(this._dragStartId),
        this.nativeDraggable &&
          (Q(document, "drop", this), Q(t, "dragstart", this._onDragStart)),
        this._offMoveEvents(),
        this._offUpEvents(),
        Y && le(document.body, "user-select", ""),
        le(xe, "transform", ""),
        e &&
          (Ge &&
            (e.cancelable && e.preventDefault(),
            !o.dropBubble && e.stopPropagation()),
          Ae && Ae.parentNode && Ae.parentNode.removeChild(Ae),
          (De === Be || (He && "clone" !== He.lastPutMode)) &&
            Ie &&
            Ie.parentNode &&
            Ie.parentNode.removeChild(Ie),
          xe &&
            (this.nativeDraggable && Q(xe, "dragend", this),
            Ct(xe),
            (xe.style["will-change"] = ""),
            Ge &&
              !et &&
              ae(xe, He ? He.options.ghostClass : this.options.ghostClass, !1),
            ae(xe, this.options.chosenClass, !1),
            Se({
              sortable: this,
              name: "unchoose",
              toEl: Be,
              newIndex: null,
              newDraggableIndex: null,
              originalEvent: e,
            }),
            De !== Be
              ? ($e >= 0 &&
                  (Se({
                    rootEl: Be,
                    name: "add",
                    toEl: Be,
                    fromEl: De,
                    originalEvent: e,
                  }),
                  Se({
                    sortable: this,
                    name: "remove",
                    toEl: Be,
                    originalEvent: e,
                  }),
                  Se({
                    rootEl: Be,
                    name: "sort",
                    toEl: Be,
                    fromEl: De,
                    originalEvent: e,
                  }),
                  Se({
                    sortable: this,
                    name: "sort",
                    toEl: Be,
                    originalEvent: e,
                  })),
                He && He.save())
              : $e !== Fe &&
                $e >= 0 &&
                (Se({
                  sortable: this,
                  name: "update",
                  toEl: Be,
                  originalEvent: e,
                }),
                Se({
                  sortable: this,
                  name: "sort",
                  toEl: Be,
                  originalEvent: e,
                })),
            yt.active &&
              ((null != $e && -1 !== $e) || (($e = Fe), (Pe = ze)),
              Se({ sortable: this, name: "end", toEl: Be, originalEvent: e }),
              this.save())))),
      this._nulling();
  },
  _nulling: function () {
    _e("nulling", this),
      (De =
        xe =
        Be =
        Ae =
        Le =
        Ie =
        Ne =
        Oe =
        Re =
        Ze =
        Ge =
        $e =
        Pe =
        Fe =
        ze =
        Ue =
        Ke =
        He =
        Ve =
        yt.dragged =
        yt.ghost =
        yt.clone =
        yt.active =
          null),
      rt.forEach(function (e) {
        e.checked = !0;
      }),
      (rt.length = je = We = 0);
  },
  handleEvent: function (e) {
    switch (e.type) {
      case "drop":
      case "dragend":
        this._onDrop(e);
        break;
      case "dragenter":
      case "dragover":
        xe &&
          (this._onDragOver(e),
          (function (e) {
            e.dataTransfer && (e.dataTransfer.dropEffect = "move");
            e.cancelable && e.preventDefault();
          })(e));
        break;
      case "selectstart":
        e.preventDefault();
    }
  },
  toArray: function () {
    for (
      var e,
        t = [],
        o = this.el.children,
        n = 0,
        i = o.length,
        a = this.options;
      n < i;
      n++
    )
      oe((e = o[n]), a.draggable, this.el, !1) &&
        t.push(e.getAttribute(a.dataIdAttr) || qt(e));
    return t;
  },
  sort: function (e, t) {
    var o = {},
      n = this.el;
    this.toArray().forEach(function (e, t) {
      var i = n.children[t];
      oe(i, this.options.draggable, n, !1) && (o[e] = i);
    }, this),
      t && this.captureAnimationState(),
      e.forEach(function (e) {
        o[e] && (n.removeChild(o[e]), n.appendChild(o[e]));
      }),
      t && this.animateAll();
  },
  save: function () {
    var e = this.options.store;
    e && e.set && e.set(this);
  },
  closest: function (e, t) {
    return oe(e, t || this.options.draggable, this.el, !1);
  },
  option: function (e, t) {
    var o = this.options;
    if (void 0 === t) return o[e];
    var n = Me.modifyOption(this, e, t);
    (o[e] = void 0 !== n ? n : t), "group" === e && gt(o);
  },
  destroy: function () {
    _e("destroy", this);
    var e = this.el;
    (e[Ce] = null),
      Q(e, "mousedown", this._onTapStart),
      Q(e, "touchstart", this._onTapStart),
      Q(e, "pointerdown", this._onTapStart),
      this.nativeDraggable && (Q(e, "dragover", this), Q(e, "dragenter", this)),
      Array.prototype.forEach.call(
        e.querySelectorAll("[draggable]"),
        function (e) {
          e.removeAttribute("draggable");
        },
      ),
      this._onDrop(),
      this._disableDelayedDragEvents(),
      ot.splice(ot.indexOf(this.el), 1),
      (this.el = e = null);
  },
  _hideClone: function () {
    if (!Oe) {
      if ((_e("hideClone", this), yt.eventCanceled)) return;
      le(Ie, "display", "none"),
        this.options.removeCloneOnHide &&
          Ie.parentNode &&
          Ie.parentNode.removeChild(Ie),
        (Oe = !0);
    }
  },
  _showClone: function (e) {
    if ("clone" === e.lastPutMode) {
      if (Oe) {
        if ((_e("showClone", this), yt.eventCanceled)) return;
        xe.parentNode != De || this.options.group.revertClone
          ? Le
            ? De.insertBefore(Ie, Le)
            : De.appendChild(Ie)
          : De.insertBefore(Ie, xe),
          this.options.group.revertClone && this.animate(xe, Ie),
          le(Ie, "display", ""),
          (Oe = !1);
      }
    } else this._hideClone();
  },
}),
  st &&
    J(document, "touchmove", function (e) {
      (yt.active || et) && e.cancelable && e.preventDefault();
    }),
  (yt.utils = {
    on: J,
    off: Q,
    css: le,
    find: se,
    is: function (e, t) {
      return !!oe(e, t, e, !1);
    },
    extend: function (e, t) {
      if (e && t) for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o]);
      return e;
    },
    throttle: ve,
    closest: oe,
    toggleClass: ae,
    clone: we,
    index: ge,
    nextTick: Tt,
    cancelNextTick: Mt,
    detectDirection: pt,
    getChild: he,
  }),
  (yt.get = function (e) {
    return e[Ce];
  }),
  (yt.mount = function () {
    for (var e = arguments.length, t = new Array(e), o = 0; o < e; o++)
      t[o] = arguments[o];
    t[0].constructor === Array && (t = t[0]),
      t.forEach(function (e) {
        if (!e.prototype || !e.prototype.constructor)
          throw "Sortable: Mounted plugin must be a constructor function, not ".concat(
            {}.toString.call(e),
          );
        e.utils && (yt.utils = z(z({}, yt.utils), e.utils)), Me.mount(e);
      });
  }),
  (yt.create = function (e, t) {
    return new yt(e, t);
  }),
  (yt.version = "1.15.0");
var Et,
  _t,
  St,
  xt,
  Bt,
  At,
  Dt = [],
  Lt = !1;
function Nt() {
  Dt.forEach(function (e) {
    clearInterval(e.pid);
  }),
    (Dt = []);
}
function It() {
  clearInterval(At);
}
var Ot = ve(function (e, t, o, n) {
    if (t.scroll) {
      var i,
        a = (e.touches ? e.touches[0] : e).clientX,
        l = (e.touches ? e.touches[0] : e).clientY,
        r = t.scrollSensitivity,
        s = t.scrollSpeed,
        c = ce(),
        d = !1;
      _t !== o &&
        ((_t = o),
        Nt(),
        (Et = t.scroll),
        (i = t.scrollFn),
        !0 === Et && (Et = fe(o, !0)));
      var u = 0,
        h = Et;
      do {
        var p = h,
          g = de(p),
          m = g.top,
          f = g.bottom,
          b = g.left,
          v = g.right,
          y = g.width,
          w = g.height,
          C = void 0,
          k = void 0,
          q = p.scrollWidth,
          T = p.scrollHeight,
          M = le(p),
          E = p.scrollLeft,
          _ = p.scrollTop;
        p === c
          ? ((C =
              y < q &&
              ("auto" === M.overflowX ||
                "scroll" === M.overflowX ||
                "visible" === M.overflowX)),
            (k =
              w < T &&
              ("auto" === M.overflowY ||
                "scroll" === M.overflowY ||
                "visible" === M.overflowY)))
          : ((C =
              y < q && ("auto" === M.overflowX || "scroll" === M.overflowX)),
            (k =
              w < T && ("auto" === M.overflowY || "scroll" === M.overflowY)));
        var S =
            C &&
            (Math.abs(v - a) <= r && E + y < q) - (Math.abs(b - a) <= r && !!E),
          x =
            k &&
            (Math.abs(f - l) <= r && _ + w < T) - (Math.abs(m - l) <= r && !!_);
        if (!Dt[u]) for (var B = 0; B <= u; B++) Dt[B] || (Dt[B] = {});
        (Dt[u].vx == S && Dt[u].vy == x && Dt[u].el === p) ||
          ((Dt[u].el = p),
          (Dt[u].vx = S),
          (Dt[u].vy = x),
          clearInterval(Dt[u].pid),
          (0 == S && 0 == x) ||
            ((d = !0),
            (Dt[u].pid = setInterval(
              function () {
                n && 0 === this.layer && yt.active._onTouchMove(Bt);
                var t = Dt[this.layer].vy ? Dt[this.layer].vy * s : 0,
                  o = Dt[this.layer].vx ? Dt[this.layer].vx * s : 0;
                ("function" == typeof i &&
                  "continue" !==
                    i.call(
                      yt.dragged.parentNode[Ce],
                      o,
                      t,
                      e,
                      Bt,
                      Dt[this.layer].el,
                    )) ||
                  ye(Dt[this.layer].el, o, t);
              }.bind({ layer: u }),
              24,
            )))),
          u++;
      } while (t.bubbleScroll && h !== c && (h = fe(h, !1)));
      Lt = d;
    }
  }, 30),
  Ft = function (e) {
    var t = e.originalEvent,
      o = e.putSortable,
      n = e.dragEl,
      i = e.activeSortable,
      a = e.dispatchSortableEvent,
      l = e.hideGhostForTarget,
      r = e.unhideGhostForTarget;
    if (t) {
      var s = o || i;
      l();
      var c =
          t.changedTouches && t.changedTouches.length ? t.changedTouches[0] : t,
        d = document.elementFromPoint(c.clientX, c.clientY);
      r(),
        s &&
          !s.el.contains(d) &&
          (a("spill"), this.onSpill({ dragEl: n, putSortable: o }));
    }
  };
function $t() {}
function zt() {}
function Pt(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
($t.prototype = {
  startIndex: null,
  dragStart: function (e) {
    var t = e.oldDraggableIndex;
    this.startIndex = t;
  },
  onSpill: function (e) {
    var t = e.dragEl,
      o = e.putSortable;
    this.sortable.captureAnimationState(), o && o.captureAnimationState();
    var n = he(this.sortable.el, this.startIndex, this.options);
    n ? this.sortable.el.insertBefore(t, n) : this.sortable.el.appendChild(t),
      this.sortable.animateAll(),
      o && o.animateAll();
  },
  drop: Ft,
}),
  H($t, { pluginName: "revertOnSpill" }),
  (zt.prototype = {
    onSpill: function (e) {
      var t = e.dragEl,
        o = e.putSortable || this.sortable;
      o.captureAnimationState(),
        t.parentNode && t.parentNode.removeChild(t),
        o.animateAll();
    },
    drop: Ft,
  }),
  H(zt, { pluginName: "removeOnSpill" }),
  yt.mount(
    new (function () {
      function e() {
        for (var e in ((this.defaults = {
          scroll: !0,
          forceAutoScrollFallback: !1,
          scrollSensitivity: 30,
          scrollSpeed: 10,
          bubbleScroll: !0,
        }),
        this))
          "_" === e.charAt(0) &&
            "function" == typeof this[e] &&
            (this[e] = this[e].bind(this));
      }
      return (
        (e.prototype = {
          dragStarted: function (e) {
            var t = e.originalEvent;
            this.sortable.nativeDraggable
              ? J(document, "dragover", this._handleAutoScroll)
              : this.options.supportPointer
                ? J(document, "pointermove", this._handleFallbackAutoScroll)
                : t.touches
                  ? J(document, "touchmove", this._handleFallbackAutoScroll)
                  : J(document, "mousemove", this._handleFallbackAutoScroll);
          },
          dragOverCompleted: function (e) {
            var t = e.originalEvent;
            this.options.dragOverBubble ||
              t.rootEl ||
              this._handleAutoScroll(t);
          },
          drop: function () {
            this.sortable.nativeDraggable
              ? Q(document, "dragover", this._handleAutoScroll)
              : (Q(document, "pointermove", this._handleFallbackAutoScroll),
                Q(document, "touchmove", this._handleFallbackAutoScroll),
                Q(document, "mousemove", this._handleFallbackAutoScroll)),
              It(),
              Nt(),
              clearTimeout(ne),
              (ne = void 0);
          },
          nulling: function () {
            (Bt = _t = Et = Lt = At = St = xt = null), (Dt.length = 0);
          },
          _handleFallbackAutoScroll: function (e) {
            this._handleAutoScroll(e, !0);
          },
          _handleAutoScroll: function (e, t) {
            var o = this,
              n = (e.touches ? e.touches[0] : e).clientX,
              i = (e.touches ? e.touches[0] : e).clientY,
              a = document.elementFromPoint(n, i);
            if (
              ((Bt = e),
              t || this.options.forceAutoScrollFallback || W || j || Y)
            ) {
              Ot(e, this.options, a, t);
              var l = fe(a, !0);
              !Lt ||
                (At && n === St && i === xt) ||
                (At && It(),
                (At = setInterval(function () {
                  var a = fe(document.elementFromPoint(n, i), !0);
                  a !== l && ((l = a), Nt()), Ot(e, o.options, a, t);
                }, 10)),
                (St = n),
                (xt = i));
            } else {
              if (!this.options.bubbleScroll || fe(a, !0) === ce())
                return void Nt();
              Ot(e, this.options, fe(a, !1), !1);
            }
          },
        }),
        H(e, { pluginName: "scroll", initializeByDefault: !0 })
      );
    })(),
  ),
  yt.mount(zt, $t);
/*! Pickr 1.8.2 MIT | https://github.com/Simonwep/pickr */
var Vt = (function (e) {
    var t = { exports: {} };
    return e(t, t.exports), t.exports;
  })(function (e, t) {
    self,
      (e.exports = (() => {
        var e = {
            d: (t, o) => {
              for (var n in o)
                e.o(o, n) &&
                  !e.o(t, n) &&
                  Object.defineProperty(t, n, { enumerable: !0, get: o[n] });
            },
            o: (e, t) => Object.prototype.hasOwnProperty.call(e, t),
            r: (e) => {
              "undefined" != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(e, Symbol.toStringTag, {
                  value: "Module",
                }),
                Object.defineProperty(e, "__esModule", { value: !0 });
            },
          },
          t = {};
        e.d(t, { default: () => x });
        var o = {};
        function n(e, t, o, n, i = {}) {
          t instanceof HTMLCollection || t instanceof NodeList
            ? (t = Array.from(t))
            : Array.isArray(t) || (t = [t]),
            Array.isArray(o) || (o = [o]);
          for (const a of t)
            for (const t of o) a[e](t, n, { capture: !1, ...i });
          return Array.prototype.slice.call(arguments, 1);
        }
        e.r(o),
          e.d(o, {
            adjustableInputNumbers: () => d,
            createElementFromString: () => l,
            createFromTemplate: () => r,
            eventPath: () => s,
            off: () => a,
            on: () => i,
            resolveElement: () => c,
          });
        const i = n.bind(null, "addEventListener"),
          a = n.bind(null, "removeEventListener");
        function l(e) {
          const t = document.createElement("div");
          return (t.innerHTML = e.trim()), t.firstElementChild;
        }
        function r(e) {
          const t = (e, t) => {
              const o = e.getAttribute(t);
              return e.removeAttribute(t), o;
            },
            o = (e, n = {}) => {
              const i = t(e, ":obj"),
                a = t(e, ":ref"),
                l = i ? (n[i] = {}) : n;
              a && (n[a] = e);
              for (const n of Array.from(e.children)) {
                const e = t(n, ":arr"),
                  i = o(n, e ? {} : l);
                e && (l[e] || (l[e] = [])).push(Object.keys(i).length ? i : n);
              }
              return n;
            };
          return o(l(e));
        }
        function s(e) {
          let t = e.path || (e.composedPath && e.composedPath());
          if (t) return t;
          let o = e.target.parentElement;
          for (t = [e.target, o]; (o = o.parentElement); ) t.push(o);
          return t.push(document, window), t;
        }
        function c(e) {
          return e instanceof Element
            ? e
            : "string" == typeof e
              ? e
                  .split(/>>/g)
                  .reduce(
                    (e, t, o, n) => (
                      (e = e.querySelector(t)),
                      o < n.length - 1 ? e.shadowRoot : e
                    ),
                    document,
                  )
              : null;
        }
        function d(e, t = (e) => e) {
          function o(o) {
            const n =
              [0.001, 0.01, 0.1][Number(o.shiftKey || 2 * o.ctrlKey)] *
              (o.deltaY < 0 ? 1 : -1);
            let i = 0,
              a = e.selectionStart;
            (e.value = e.value.replace(/[\d.]+/g, (e, o) =>
              o <= a && o + e.length >= a
                ? ((a = o), t(Number(e), n, i))
                : (i++, e),
            )),
              e.focus(),
              e.setSelectionRange(a, a),
              o.preventDefault(),
              e.dispatchEvent(new Event("input"));
          }
          i(e, "focus", () => i(window, "wheel", o, { passive: !1 })),
            i(e, "blur", () => a(window, "wheel", o));
        }
        const { min: u, max: h, floor: p, round: g } = Math;
        function m(e, t, o) {
          (t /= 100), (o /= 100);
          const n = p((e = (e / 360) * 6)),
            i = e - n,
            a = o * (1 - t),
            l = o * (1 - i * t),
            r = o * (1 - (1 - i) * t),
            s = n % 6;
          return [
            255 * [o, l, a, a, r, o][s],
            255 * [r, o, o, l, a, a][s],
            255 * [a, a, r, o, o, l][s],
          ];
        }
        function f(e, t, o) {
          const n = ((2 - (t /= 100)) * (o /= 100)) / 2;
          return (
            0 !== n &&
              (t =
                1 === n
                  ? 0
                  : n < 0.5
                    ? (t * o) / (2 * n)
                    : (t * o) / (2 - 2 * n)),
            [e, 100 * t, 100 * n]
          );
        }
        function b(e, t, o) {
          const n = u((e /= 255), (t /= 255), (o /= 255)),
            i = h(e, t, o),
            a = i - n;
          let l, r;
          if (0 === a) l = r = 0;
          else {
            r = a / i;
            const n = ((i - e) / 6 + a / 2) / a,
              s = ((i - t) / 6 + a / 2) / a,
              c = ((i - o) / 6 + a / 2) / a;
            e === i
              ? (l = c - s)
              : t === i
                ? (l = 1 / 3 + n - c)
                : o === i && (l = 2 / 3 + s - n),
              l < 0 ? (l += 1) : l > 1 && (l -= 1);
          }
          return [360 * l, 100 * r, 100 * i];
        }
        function v(e, t, o, n) {
          return (
            (t /= 100),
            (o /= 100),
            [
              ...b(
                255 * (1 - u(1, (e /= 100) * (1 - (n /= 100)) + n)),
                255 * (1 - u(1, t * (1 - n) + n)),
                255 * (1 - u(1, o * (1 - n) + n)),
              ),
            ]
          );
        }
        function y(e, t, o) {
          t /= 100;
          const n = ((2 * (t *= (o /= 100) < 0.5 ? o : 1 - o)) / (o + t)) * 100,
            i = 100 * (o + t);
          return [e, isNaN(n) ? 0 : n, i];
        }
        function w(e) {
          return b(...e.match(/.{2}/g).map((e) => parseInt(e, 16)));
        }
        function C(e) {
          e = e.match(/^[a-zA-Z]+$/)
            ? (function (e) {
                if ("black" === e.toLowerCase()) return "#000";
                const t = document.createElement("canvas").getContext("2d");
                return (
                  (t.fillStyle = e), "#000" === t.fillStyle ? null : t.fillStyle
                );
              })(e)
            : e;
          const t = {
              cmyk: /^cmyk[\D]+([\d.]+)[\D]+([\d.]+)[\D]+([\d.]+)[\D]+([\d.]+)/i,
              rgba: /^((rgba)|rgb)[\D]+([\d.]+)[\D]+([\d.]+)[\D]+([\d.]+)[\D]*?([\d.]+|$)/i,
              hsla: /^((hsla)|hsl)[\D]+([\d.]+)[\D]+([\d.]+)[\D]+([\d.]+)[\D]*?([\d.]+|$)/i,
              hsva: /^((hsva)|hsv)[\D]+([\d.]+)[\D]+([\d.]+)[\D]+([\d.]+)[\D]*?([\d.]+|$)/i,
              hexa: /^#?(([\dA-Fa-f]{3,4})|([\dA-Fa-f]{6})|([\dA-Fa-f]{8}))$/i,
            },
            o = (e) =>
              e.map((e) => (/^(|\d+)\.\d+|\d+$/.test(e) ? Number(e) : void 0));
          let n;
          e: for (const i in t) {
            if (!(n = t[i].exec(e))) continue;
            const a = (e) => !!n[2] == ("number" == typeof e);
            switch (i) {
              case "cmyk": {
                const [, e, t, a, l] = o(n);
                if (e > 100 || t > 100 || a > 100 || l > 100) break e;
                return { values: v(e, t, a, l), type: i };
              }
              case "rgba": {
                const [, , , e, t, l, r] = o(n);
                if (e > 255 || t > 255 || l > 255 || r < 0 || r > 1 || !a(r))
                  break e;
                return { values: [...b(e, t, l), r], a: r, type: i };
              }
              case "hexa": {
                let [, e] = n;
                (4 !== e.length && 3 !== e.length) ||
                  (e = e
                    .split("")
                    .map((e) => e + e)
                    .join(""));
                const t = e.substring(0, 6);
                let o = e.substring(6);
                return (
                  (o = o ? parseInt(o, 16) / 255 : void 0),
                  { values: [...w(t), o], a: o, type: i }
                );
              }
              case "hsla": {
                const [, , , e, t, l, r] = o(n);
                if (e > 360 || t > 100 || l > 100 || r < 0 || r > 1 || !a(r))
                  break e;
                return { values: [...y(e, t, l), r], a: r, type: i };
              }
              case "hsva": {
                const [, , , e, t, l, r] = o(n);
                if (e > 360 || t > 100 || l > 100 || r < 0 || r > 1 || !a(r))
                  break e;
                return { values: [e, t, l, r], a: r, type: i };
              }
            }
          }
          return { values: null, type: null };
        }
        function k(e = 0, t = 0, o = 0, n = 1) {
          const i =
              (e, t) =>
              (o = -1) =>
                t(~o ? e.map((e) => Number(e.toFixed(o))) : e),
            a = {
              h: e,
              s: t,
              v: o,
              a: n,
              toHSVA() {
                const e = [a.h, a.s, a.v, a.a];
                return (
                  (e.toString = i(
                    e,
                    (e) => `hsva(${e[0]}, ${e[1]}%, ${e[2]}%, ${a.a})`,
                  )),
                  e
                );
              },
              toHSLA() {
                const e = [...f(a.h, a.s, a.v), a.a];
                return (
                  (e.toString = i(
                    e,
                    (e) => `hsla(${e[0]}, ${e[1]}%, ${e[2]}%, ${a.a})`,
                  )),
                  e
                );
              },
              toRGBA() {
                const e = [...m(a.h, a.s, a.v), a.a];
                return (
                  (e.toString = i(
                    e,
                    (e) => `rgba(${e[0]}, ${e[1]}, ${e[2]}, ${a.a})`,
                  )),
                  e
                );
              },
              toCMYK() {
                const e = (function (e, t, o) {
                  const n = m(e, t, o),
                    i = n[0] / 255,
                    a = n[1] / 255,
                    l = n[2] / 255,
                    r = u(1 - i, 1 - a, 1 - l);
                  return [
                    100 * (1 === r ? 0 : (1 - i - r) / (1 - r)),
                    100 * (1 === r ? 0 : (1 - a - r) / (1 - r)),
                    100 * (1 === r ? 0 : (1 - l - r) / (1 - r)),
                    100 * r,
                  ];
                })(a.h, a.s, a.v);
                return (
                  (e.toString = i(
                    e,
                    (e) => `cmyk(${e[0]}%, ${e[1]}%, ${e[2]}%, ${e[3]}%)`,
                  )),
                  e
                );
              },
              toHEXA() {
                const e = (function (e, t, o) {
                    return m(e, t, o).map((e) =>
                      g(e).toString(16).padStart(2, "0"),
                    );
                  })(a.h, a.s, a.v),
                  t =
                    a.a >= 1
                      ? ""
                      : Number((255 * a.a).toFixed(0))
                          .toString(16)
                          .toUpperCase()
                          .padStart(2, "0");
                return (
                  t && e.push(t),
                  (e.toString = () => `#${e.join("").toUpperCase()}`),
                  e
                );
              },
              clone: () => k(a.h, a.s, a.v, a.a),
            };
          return a;
        }
        const q = (e) => Math.max(Math.min(e, 1), 0);
        function T(e) {
          const t = {
              options: Object.assign(
                { lock: null, onchange: () => 0, onstop: () => 0 },
                e,
              ),
              _keyboard(e) {
                const { options: o } = t,
                  { type: n, key: i } = e;
                if (document.activeElement === o.wrapper) {
                  const { lock: o } = t.options,
                    a = "ArrowUp" === i,
                    l = "ArrowRight" === i,
                    r = "ArrowDown" === i,
                    s = "ArrowLeft" === i;
                  if ("keydown" === n && (a || l || r || s)) {
                    let n = 0,
                      i = 0;
                    "v" === o
                      ? (n = a || l ? 1 : -1)
                      : "h" === o
                        ? (n = a || l ? -1 : 1)
                        : ((i = a ? -1 : r ? 1 : 0), (n = s ? -1 : l ? 1 : 0)),
                      t.update(
                        q(t.cache.x + 0.01 * n),
                        q(t.cache.y + 0.01 * i),
                      ),
                      e.preventDefault();
                  } else
                    i.startsWith("Arrow") &&
                      (t.options.onstop(), e.preventDefault());
                }
              },
              _tapstart(e) {
                i(document, ["mouseup", "touchend", "touchcancel"], t._tapstop),
                  i(document, ["mousemove", "touchmove"], t._tapmove),
                  e.cancelable && e.preventDefault(),
                  t._tapmove(e);
              },
              _tapmove(e) {
                const { options: o, cache: n } = t,
                  { lock: i, element: a, wrapper: l } = o,
                  r = l.getBoundingClientRect();
                let s = 0,
                  c = 0;
                if (e) {
                  const t = e && e.touches && e.touches[0];
                  (s = e ? (t || e).clientX : 0),
                    (c = e ? (t || e).clientY : 0),
                    s < r.left
                      ? (s = r.left)
                      : s > r.left + r.width && (s = r.left + r.width),
                    c < r.top
                      ? (c = r.top)
                      : c > r.top + r.height && (c = r.top + r.height),
                    (s -= r.left),
                    (c -= r.top);
                } else n && ((s = n.x * r.width), (c = n.y * r.height));
                "h" !== i &&
                  (a.style.left = `calc(${(s / r.width) * 100}% - ${a.offsetWidth / 2}px)`),
                  "v" !== i &&
                    (a.style.top = `calc(${(c / r.height) * 100}% - ${a.offsetHeight / 2}px)`),
                  (t.cache = { x: s / r.width, y: c / r.height });
                const d = q(s / r.width),
                  u = q(c / r.height);
                switch (i) {
                  case "v":
                    return o.onchange(d);
                  case "h":
                    return o.onchange(u);
                  default:
                    return o.onchange(d, u);
                }
              },
              _tapstop() {
                t.options.onstop(),
                  a(
                    document,
                    ["mouseup", "touchend", "touchcancel"],
                    t._tapstop,
                  ),
                  a(document, ["mousemove", "touchmove"], t._tapmove);
              },
              trigger() {
                t._tapmove();
              },
              update(e = 0, o = 0) {
                const {
                  left: n,
                  top: i,
                  width: a,
                  height: l,
                } = t.options.wrapper.getBoundingClientRect();
                "h" === t.options.lock && (o = e),
                  t._tapmove({ clientX: n + a * e, clientY: i + l * o });
              },
              destroy() {
                const { options: e, _tapstart: o, _keyboard: n } = t;
                a(document, ["keydown", "keyup"], n),
                  a([e.wrapper, e.element], "mousedown", o),
                  a([e.wrapper, e.element], "touchstart", o, { passive: !1 });
              },
            },
            { options: o, _tapstart: n, _keyboard: l } = t;
          return (
            i([o.wrapper, o.element], "mousedown", n),
            i([o.wrapper, o.element], "touchstart", n, { passive: !1 }),
            i(document, ["keydown", "keyup"], l),
            t
          );
        }
        function M(e = {}) {
          e = Object.assign(
            { onchange: () => 0, className: "", elements: [] },
            e,
          );
          const t = i(e.elements, "click", (t) => {
            e.elements.forEach((o) =>
              o.classList[t.target === o ? "add" : "remove"](e.className),
            ),
              e.onchange(t),
              t.stopPropagation();
          });
          return { destroy: () => a(...t) };
        }
        const E = {
            variantFlipOrder: { start: "sme", middle: "mse", end: "ems" },
            positionFlipOrder: {
              top: "tbrl",
              right: "rltb",
              bottom: "btrl",
              left: "lrbt",
            },
            position: "bottom",
            margin: 8,
          },
          _ = (e, t, o) => {
            const {
                container: n,
                margin: i,
                position: a,
                variantFlipOrder: l,
                positionFlipOrder: r,
              } = {
                container: document.documentElement.getBoundingClientRect(),
                ...E,
                ...o,
              },
              { left: s, top: c } = t.style;
            (t.style.left = "0"), (t.style.top = "0");
            const d = e.getBoundingClientRect(),
              u = t.getBoundingClientRect(),
              h = {
                t: d.top - u.height - i,
                b: d.bottom + i,
                r: d.right + i,
                l: d.left - u.width - i,
              },
              p = {
                vs: d.left,
                vm: d.left + d.width / 2 + -u.width / 2,
                ve: d.left + d.width - u.width,
                hs: d.top,
                hm: d.bottom - d.height / 2 - u.height / 2,
                he: d.bottom - u.height,
              },
              [g, m = "middle"] = a.split("-"),
              f = r[g],
              b = l[m],
              { top: v, left: y, bottom: w, right: C } = n;
            for (const e of f) {
              const o = "t" === e || "b" === e,
                n = h[e],
                [i, a] = o ? ["top", "left"] : ["left", "top"],
                [l, r] = o ? [u.height, u.width] : [u.width, u.height],
                [s, c] = o ? [w, C] : [C, w],
                [d, g] = o ? [v, y] : [y, v];
              if (!(n < d || n + l > s))
                for (const l of b) {
                  const s = p[(o ? "v" : "h") + l];
                  if (!(s < g || s + r > c))
                    return (
                      (t.style[a] = s - u[a] + "px"),
                      (t.style[i] = n - u[i] + "px"),
                      e + l
                    );
                }
            }
            return (t.style.left = s), (t.style.top = c), null;
          };
        function S(e, t, o) {
          return (
            t in e
              ? Object.defineProperty(e, t, {
                  value: o,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (e[t] = o),
            e
          );
        }
        class x {
          constructor(e) {
            S(this, "_initializingActive", !0),
              S(this, "_recalc", !0),
              S(this, "_nanopop", null),
              S(this, "_root", null),
              S(this, "_color", k()),
              S(this, "_lastColor", k()),
              S(this, "_swatchColors", []),
              S(this, "_setupAnimationFrame", null),
              S(this, "_eventListener", {
                init: [],
                save: [],
                hide: [],
                show: [],
                clear: [],
                change: [],
                changestop: [],
                cancel: [],
                swatchselect: [],
              }),
              (this.options = e = Object.assign({ ...x.DEFAULT_OPTIONS }, e));
            const {
              swatches: t,
              components: o,
              theme: n,
              sliders: i,
              lockOpacity: a,
              padding: l,
            } = e;
            ["nano", "monolith"].includes(n) && !i && (e.sliders = "h"),
              o.interaction || (o.interaction = {});
            const { preview: r, opacity: s, hue: c, palette: d } = o;
            (o.opacity = !a && s),
              (o.palette = d || r || s || c),
              this._preBuild(),
              this._buildComponents(),
              this._bindEvents(),
              this._finalBuild(),
              t && t.length && t.forEach((e) => this.addSwatch(e));
            const { button: u, app: h } = this._root;
            (this._nanopop = ((e, t, o) => {
              const n =
                "object" != typeof e || e instanceof HTMLElement
                  ? { reference: e, popper: t, ...o }
                  : e;
              return {
                update(e = n) {
                  const { reference: t, popper: o } = Object.assign(n, e);
                  if (!o || !t)
                    throw new Error("Popper- or reference-element missing.");
                  return _(t, o, n);
                },
              };
            })(u, h, { margin: l })),
              u.setAttribute("role", "button"),
              u.setAttribute("aria-label", this._t("btn:toggle"));
            const p = this;
            this._setupAnimationFrame = requestAnimationFrame(function t() {
              if (!h.offsetWidth) return requestAnimationFrame(t);
              p.setColor(e.default),
                p._rePositioningPicker(),
                e.defaultRepresentation &&
                  ((p._representation = e.defaultRepresentation),
                  p.setColorRepresentation(p._representation)),
                e.showAlways && p.show(),
                (p._initializingActive = !1),
                p._emit("init");
            });
          }
          _preBuild() {
            const { options: e } = this;
            for (const t of ["el", "container"]) e[t] = c(e[t]);
            (this._root = ((e) => {
              const {
                  components: t,
                  useAsButton: o,
                  inline: n,
                  appClass: i,
                  theme: a,
                  lockOpacity: l,
                } = e.options,
                s = (e) => (e ? "" : 'style="display:none" hidden'),
                c = (t) => e._t(t),
                d = r(
                  `\n      <div :ref="root" class="pickr">\n\n        ${o ? "" : '<button type="button" :ref="button" class="pcr-button"></button>'}\n\n        <div :ref="app" class="pcr-app ${i || ""}" data-theme="${a}" ${n ? 'style="position: unset"' : ""} aria-label="${c("ui:dialog")}" role="window">\n          <div class="pcr-selection" ${s(t.palette)}>\n            <div :obj="preview" class="pcr-color-preview" ${s(t.preview)}>\n              <button type="button" :ref="lastColor" class="pcr-last-color" aria-label="${c("btn:last-color")}"></button>\n              <div :ref="currentColor" class="pcr-current-color"></div>\n            </div>\n\n            <div :obj="palette" class="pcr-color-palette">\n              <div :ref="picker" class="pcr-picker"></div>\n              <div :ref="palette" class="pcr-palette" tabindex="0" aria-label="${c("aria:palette")}" role="listbox"></div>\n            </div>\n\n            <div :obj="hue" class="pcr-color-chooser" ${s(t.hue)}>\n              <div :ref="picker" class="pcr-picker"></div>\n              <div :ref="slider" class="pcr-hue pcr-slider" tabindex="0" aria-label="${c("aria:hue")}" role="slider"></div>\n            </div>\n\n            <div :obj="opacity" class="pcr-color-opacity" ${s(t.opacity)}>\n              <div :ref="picker" class="pcr-picker"></div>\n              <div :ref="slider" class="pcr-opacity pcr-slider" tabindex="0" aria-label="${c("aria:opacity")}" role="slider"></div>\n            </div>\n          </div>\n\n          <div class="pcr-swatches ${t.palette ? "" : "pcr-last"}" :ref="swatches"></div>\n\n          <div :obj="interaction" class="pcr-interaction" ${s(Object.keys(t.interaction).length)}>\n            <input :ref="result" class="pcr-result" type="text" spellcheck="false" ${s(t.interaction.input)} aria-label="${c("aria:input")}">\n\n            <input :arr="options" class="pcr-type" data-type="HEXA" value="${l ? "HEX" : "HEXA"}" type="button" ${s(t.interaction.hex)}>\n            <input :arr="options" class="pcr-type" data-type="RGBA" value="${l ? "RGB" : "RGBA"}" type="button" ${s(t.interaction.rgba)}>\n            <input :arr="options" class="pcr-type" data-type="HSLA" value="${l ? "HSL" : "HSLA"}" type="button" ${s(t.interaction.hsla)}>\n            <input :arr="options" class="pcr-type" data-type="HSVA" value="${l ? "HSV" : "HSVA"}" type="button" ${s(t.interaction.hsva)}>\n            <input :arr="options" class="pcr-type" data-type="CMYK" value="CMYK" type="button" ${s(t.interaction.cmyk)}>\n\n            <input :ref="save" class="pcr-save" value="${c("btn:save")}" type="button" ${s(t.interaction.save)} aria-label="${c("aria:btn:save")}">\n            <input :ref="cancel" class="pcr-cancel" value="${c("btn:cancel")}" type="button" ${s(t.interaction.cancel)} aria-label="${c("aria:btn:cancel")}">\n            <input :ref="clear" class="pcr-clear" value="${c("btn:clear")}" type="button" ${s(t.interaction.clear)} aria-label="${c("aria:btn:clear")}">\n          </div>\n        </div>\n      </div>\n    `,
                ),
                u = d.interaction;
              return (
                u.options.find((e) => !e.hidden && !e.classList.add("active")),
                (u.type = () =>
                  u.options.find((e) => e.classList.contains("active"))),
                d
              );
            })(this)),
              e.useAsButton && (this._root.button = e.el),
              e.container.appendChild(this._root.root);
          }
          _finalBuild() {
            const e = this.options,
              t = this._root;
            if ((e.container.removeChild(t.root), e.inline)) {
              const o = e.el.parentElement;
              e.el.nextSibling
                ? o.insertBefore(t.app, e.el.nextSibling)
                : o.appendChild(t.app);
            } else e.container.appendChild(t.app);
            e.useAsButton
              ? e.inline && e.el.remove()
              : e.el.parentNode.replaceChild(t.root, e.el),
              e.disabled && this.disable(),
              e.comparison ||
                ((t.button.style.transition = "none"),
                e.useAsButton ||
                  (t.preview.lastColor.style.transition = "none")),
              this.hide();
          }
          _buildComponents() {
            const e = this,
              t = this.options.components,
              o = (e.options.sliders || "v").repeat(2),
              [n, i] = o.match(/^[vh]+$/g) ? o : [],
              a = () => this._color || (this._color = this._lastColor.clone()),
              l = {
                palette: T({
                  element: e._root.palette.picker,
                  wrapper: e._root.palette.palette,
                  onstop: () => e._emit("changestop", "slider", e),
                  onchange(o, n) {
                    if (!t.palette) return;
                    const i = a(),
                      { _root: l, options: r } = e,
                      { lastColor: s, currentColor: c } = l.preview;
                    e._recalc &&
                      ((i.s = 100 * o),
                      (i.v = 100 - 100 * n),
                      i.v < 0 && (i.v = 0),
                      e._updateOutput("slider"));
                    const d = i.toRGBA().toString(0);
                    (this.element.style.background = d),
                      (this.wrapper.style.background = `\n                        linear-gradient(to top, rgba(0, 0, 0, ${i.a}), transparent),\n                        linear-gradient(to left, hsla(${i.h}, 100%, 50%, ${i.a}), rgba(255, 255, 255, ${i.a}))\n                    `),
                      r.comparison
                        ? r.useAsButton ||
                          e._lastColor ||
                          s.style.setProperty("--pcr-color", d)
                        : (l.button.style.setProperty("--pcr-color", d),
                          l.button.classList.remove("clear"));
                    const u = i.toHEXA().toString();
                    for (const { el: t, color: o } of e._swatchColors)
                      t.classList[
                        u === o.toHEXA().toString() ? "add" : "remove"
                      ]("pcr-active");
                    c.style.setProperty("--pcr-color", d);
                  },
                }),
                hue: T({
                  lock: "v" === i ? "h" : "v",
                  element: e._root.hue.picker,
                  wrapper: e._root.hue.slider,
                  onstop: () => e._emit("changestop", "slider", e),
                  onchange(o) {
                    if (!t.hue || !t.palette) return;
                    const n = a();
                    e._recalc && (n.h = 360 * o),
                      (this.element.style.backgroundColor = `hsl(${n.h}, 100%, 50%)`),
                      l.palette.trigger();
                  },
                }),
                opacity: T({
                  lock: "v" === n ? "h" : "v",
                  element: e._root.opacity.picker,
                  wrapper: e._root.opacity.slider,
                  onstop: () => e._emit("changestop", "slider", e),
                  onchange(o) {
                    if (!t.opacity || !t.palette) return;
                    const n = a();
                    e._recalc && (n.a = Math.round(100 * o) / 100),
                      (this.element.style.background = `rgba(0, 0, 0, ${n.a})`),
                      l.palette.trigger();
                  },
                }),
                selectable: M({
                  elements: e._root.interaction.options,
                  className: "active",
                  onchange(t) {
                    (e._representation = t.target
                      .getAttribute("data-type")
                      .toUpperCase()),
                      e._recalc && e._updateOutput("swatch");
                  },
                }),
              };
            this._components = l;
          }
          _bindEvents() {
            const { _root: e, options: t } = this,
              o = [
                i(e.interaction.clear, "click", () => this._clearColor()),
                i([e.interaction.cancel, e.preview.lastColor], "click", () => {
                  this.setHSVA(
                    ...(this._lastColor || this._color).toHSVA(),
                    !0,
                  ),
                    this._emit("cancel");
                }),
                i(e.interaction.save, "click", () => {
                  !this.applyColor() && !t.showAlways && this.hide();
                }),
                i(e.interaction.result, ["keyup", "input"], (e) => {
                  this.setColor(e.target.value, !0) &&
                    !this._initializingActive &&
                    (this._emit("change", this._color, "input", this),
                    this._emit("changestop", "input", this)),
                    e.stopImmediatePropagation();
                }),
                i(e.interaction.result, ["focus", "blur"], (e) => {
                  (this._recalc = "blur" === e.type),
                    this._recalc && this._updateOutput(null);
                }),
                i(
                  [
                    e.palette.palette,
                    e.palette.picker,
                    e.hue.slider,
                    e.hue.picker,
                    e.opacity.slider,
                    e.opacity.picker,
                  ],
                  ["mousedown", "touchstart"],
                  () => (this._recalc = !0),
                  { passive: !0 },
                ),
              ];
            if (!t.showAlways) {
              const n = t.closeWithKey;
              o.push(
                i(e.button, "click", () =>
                  this.isOpen() ? this.hide() : this.show(),
                ),
                i(
                  document,
                  "keyup",
                  (e) =>
                    this.isOpen() &&
                    (e.key === n || e.code === n) &&
                    this.hide(),
                ),
                i(
                  document,
                  ["touchstart", "mousedown"],
                  (t) => {
                    this.isOpen() &&
                      !s(t).some((t) => t === e.app || t === e.button) &&
                      this.hide();
                  },
                  { capture: !0 },
                ),
              );
            }
            if (t.adjustableNumbers) {
              const t = {
                rgba: [255, 255, 255, 1],
                hsva: [360, 100, 100, 1],
                hsla: [360, 100, 100, 1],
                cmyk: [100, 100, 100, 100],
              };
              d(e.interaction.result, (e, o, n) => {
                const i = t[this.getColorRepresentation().toLowerCase()];
                if (i) {
                  const t = i[n],
                    a = e + (t >= 100 ? 1e3 * o : o);
                  return a <= 0 ? 0 : Number((a < t ? a : t).toPrecision(3));
                }
                return e;
              });
            }
            if (t.autoReposition && !t.inline) {
              let e = null;
              const n = this;
              o.push(
                i(
                  window,
                  ["scroll", "resize"],
                  () => {
                    n.isOpen() &&
                      (t.closeOnScroll && n.hide(),
                      null === e
                        ? ((e = setTimeout(() => (e = null), 100)),
                          requestAnimationFrame(function t() {
                            n._rePositioningPicker(),
                              null !== e && requestAnimationFrame(t);
                          }))
                        : (clearTimeout(e),
                          (e = setTimeout(() => (e = null), 100))));
                  },
                  { capture: !0 },
                ),
              );
            }
            this._eventBindings = o;
          }
          _rePositioningPicker() {
            const { options: e } = this;
            if (
              !e.inline &&
              !this._nanopop.update({
                container: document.body.getBoundingClientRect(),
                position: e.position,
              })
            ) {
              const e = this._root.app,
                t = e.getBoundingClientRect();
              (e.style.top = (window.innerHeight - t.height) / 2 + "px"),
                (e.style.left = (window.innerWidth - t.width) / 2 + "px");
            }
          }
          _updateOutput(e) {
            const { _root: t, _color: o, options: n } = this;
            if (t.interaction.type()) {
              const e = `to${t.interaction.type().getAttribute("data-type")}`;
              t.interaction.result.value =
                "function" == typeof o[e]
                  ? o[e]().toString(n.outputPrecision)
                  : "";
            }
            !this._initializingActive &&
              this._recalc &&
              this._emit("change", o, e, this);
          }
          _clearColor(e = !1) {
            const { _root: t, options: o } = this;
            o.useAsButton ||
              t.button.style.setProperty("--pcr-color", "rgba(0, 0, 0, 0.15)"),
              t.button.classList.add("clear"),
              o.showAlways || this.hide(),
              (this._lastColor = null),
              this._initializingActive ||
                e ||
                (this._emit("save", null), this._emit("clear"));
          }
          _parseLocalColor(e) {
            const { values: t, type: o, a: n } = C(e),
              { lockOpacity: i } = this.options,
              a = void 0 !== n && 1 !== n;
            return (
              t && 3 === t.length && (t[3] = void 0),
              { values: !t || (i && a) ? null : t, type: o }
            );
          }
          _t(e) {
            return this.options.i18n[e] || x.I18N_DEFAULTS[e];
          }
          _emit(e, ...t) {
            this._eventListener[e].forEach((e) => e(...t, this));
          }
          on(e, t) {
            return this._eventListener[e].push(t), this;
          }
          off(e, t) {
            const o = this._eventListener[e] || [],
              n = o.indexOf(t);
            return ~n && o.splice(n, 1), this;
          }
          addSwatch(e) {
            const { values: t } = this._parseLocalColor(e);
            if (t) {
              const { _swatchColors: e, _root: o } = this,
                n = k(...t),
                a = l(
                  `<button type="button" style="--pcr-color: ${n.toRGBA().toString(0)}" aria-label="${this._t("btn:swatch")}"/>`,
                );
              return (
                o.swatches.appendChild(a),
                e.push({ el: a, color: n }),
                this._eventBindings.push(
                  i(a, "click", () => {
                    this.setHSVA(...n.toHSVA(), !0),
                      this._emit("swatchselect", n),
                      this._emit("change", n, "swatch", this);
                  }),
                ),
                !0
              );
            }
            return !1;
          }
          removeSwatch(e) {
            const t = this._swatchColors[e];
            if (t) {
              const { el: o } = t;
              return (
                this._root.swatches.removeChild(o),
                this._swatchColors.splice(e, 1),
                !0
              );
            }
            return !1;
          }
          applyColor(e = !1) {
            const { preview: t, button: o } = this._root,
              n = this._color.toRGBA().toString(0);
            return (
              t.lastColor.style.setProperty("--pcr-color", n),
              this.options.useAsButton || o.style.setProperty("--pcr-color", n),
              o.classList.remove("clear"),
              (this._lastColor = this._color.clone()),
              this._initializingActive || e || this._emit("save", this._color),
              this
            );
          }
          destroy() {
            cancelAnimationFrame(this._setupAnimationFrame),
              this._eventBindings.forEach((e) => a(...e)),
              Object.keys(this._components).forEach((e) =>
                this._components[e].destroy(),
              );
          }
          destroyAndRemove() {
            this.destroy();
            const { root: e, app: t } = this._root;
            e.parentElement && e.parentElement.removeChild(e),
              t.parentElement.removeChild(t),
              Object.keys(this).forEach((e) => (this[e] = null));
          }
          hide() {
            return (
              !!this.isOpen() &&
              (this._root.app.classList.remove("visible"),
              this._emit("hide"),
              !0)
            );
          }
          show() {
            return (
              !this.options.disabled &&
              !this.isOpen() &&
              (this._root.app.classList.add("visible"),
              this._rePositioningPicker(),
              this._emit("show", this._color),
              this)
            );
          }
          isOpen() {
            return this._root.app.classList.contains("visible");
          }
          setHSVA(e = 360, t = 0, o = 0, n = 1, i = !1) {
            const a = this._recalc;
            if (
              ((this._recalc = !1),
              e < 0 ||
                e > 360 ||
                t < 0 ||
                t > 100 ||
                o < 0 ||
                o > 100 ||
                n < 0 ||
                n > 1)
            )
              return !1;
            this._color = k(e, t, o, n);
            const { hue: l, opacity: r, palette: s } = this._components;
            return (
              l.update(e / 360),
              r.update(n),
              s.update(t / 100, 1 - o / 100),
              i || this.applyColor(),
              a && this._updateOutput(),
              (this._recalc = a),
              !0
            );
          }
          setColor(e, t = !1) {
            if (null === e) return this._clearColor(t), !0;
            const { values: o, type: n } = this._parseLocalColor(e);
            if (o) {
              const e = n.toUpperCase(),
                { options: i } = this._root.interaction,
                a = i.find((t) => t.getAttribute("data-type") === e);
              if (a && !a.hidden)
                for (const e of i)
                  e.classList[e === a ? "add" : "remove"]("active");
              return !!this.setHSVA(...o, t) && this.setColorRepresentation(e);
            }
            return !1;
          }
          setColorRepresentation(e) {
            return (
              (e = e.toUpperCase()),
              !!this._root.interaction.options.find(
                (t) => t.getAttribute("data-type").startsWith(e) && !t.click(),
              )
            );
          }
          getColorRepresentation() {
            return this._representation;
          }
          getColor() {
            return this._color;
          }
          getSelectedColor() {
            return this._lastColor;
          }
          getRoot() {
            return this._root;
          }
          disable() {
            return (
              this.hide(),
              (this.options.disabled = !0),
              this._root.button.classList.add("disabled"),
              this
            );
          }
          enable() {
            return (
              (this.options.disabled = !1),
              this._root.button.classList.remove("disabled"),
              this
            );
          }
        }
        return (
          S(x, "utils", o),
          S(x, "version", "1.8.2"),
          S(x, "I18N_DEFAULTS", {
            "ui:dialog": "color picker dialog",
            "btn:toggle": "toggle color picker dialog",
            "btn:swatch": "color swatch",
            "btn:last-color": "use previous color",
            "btn:save": "Save",
            "btn:cancel": "Cancel",
            "btn:clear": "Clear",
            "aria:btn:save": "save and close",
            "aria:btn:cancel": "cancel and close",
            "aria:btn:clear": "clear and close",
            "aria:input": "color input field",
            "aria:palette": "color selection area",
            "aria:hue": "hue selection slider",
            "aria:opacity": "selection slider",
          }),
          S(x, "DEFAULT_OPTIONS", {
            appClass: null,
            theme: "classic",
            useAsButton: !1,
            padding: 8,
            disabled: !1,
            comparison: !0,
            closeOnScroll: !1,
            outputPrecision: 0,
            lockOpacity: !1,
            autoReposition: !0,
            container: "body",
            components: { interaction: {} },
            i18n: {},
            swatches: null,
            inline: !1,
            sliders: null,
            default: "#42445a",
            defaultRepresentation: null,
            position: "bottom-middle",
            adjustableNumbers: !0,
            showAlways: !1,
            closeWithKey: "Escape",
          }),
          S(x, "create", (e) => new x(e)),
          t.default
        );
      })());
  }),
  Ht = Pt(Vt);
function Rt(e) {
  const {
    el: t,
    isView: o,
    containerEl: n,
    swatches: i,
    opacity: a,
    defaultColor: l,
  } = e;
  return {
    el: t,
    container: o ? document.body : n,
    theme: "nano",
    appClass: "toolbar-pickr",
    swatches: i,
    lockOpacity: !a,
    default: l,
    position: "left-middle",
    components: {
      preview: !0,
      hue: !0,
      opacity: !!a,
      interaction: {
        hex: !0,
        rgba: !0,
        hsla: !0,
        input: !0,
        cancel: !0,
        save: !0,
      },
    },
  };
}
function Zt(e) {
  e.hide();
}
function jt(e, t) {
  let o;
  return (
    t.forEach((t, n) => {
      t.id === e && (o = n);
    }),
    o
  );
}
class Wt extends e.PluginSettingTab {
  constructor(e, t) {
    super(e, t),
      (this.plugin = t),
      addEventListener("cMenuToolbar-NewCommand", () => {
        k(), F(e, this.plugin), this.display();
      });
  }
  display() {
    const { containerEl: o } = this;
    let i;
    o.empty(),
      o.createEl("h1", { text: "Obsidian Editing Toolbar" }),
      o
        .createEl("span", { text: "     作者： " })
        .createEl("a", { text: "Cuman ✨", href: "https://github.com/cumany" }),
      o.createEl("span", { text: "     教程： " }).createEl("a", {
        text: "pkmer.cn",
        href: "https://pkmer.cn/show/20230329145815",
      }),
      o.createEl("h2", { text: u("Plugin Settings") }),
      new e.Setting(o)
        .setName(u("Editing Toolbar append method"))
        .setDesc(
          u(
            "Choose where Editing Toolbar will append upon regeneration. To see the change, hit the refresh button below, or in the status bar menu.",
          ),
        )
        .addDropdown((e) => {
          let t = {};
          b.map((e) => (t[e] = e)),
            e.addOptions(t),
            e.setValue(this.plugin.settings.appendMethod).onChange((e) => {
              (this.plugin.settings.appendMethod = e),
                this.plugin.saveSettings();
            });
        }),
      new e.Setting(o)
        .setName(u("Editing Toolbar aesthetic"))
        .setDesc(
          u(
            "Choose between a glass morphism ,tiny and default style for Editing Toolbar. To see the change, hit the refresh button below, or in the status bar menu.",
          ),
        )
        .addDropdown((e) => {
          let t = {};
          v.map((e) => (t[e] = e)),
            e.addOptions(t),
            e.setValue(this.plugin.settings.aestheticStyle).onChange((e) => {
              (this.plugin.settings.aestheticStyle = e),
                this.plugin.saveSettings(),
                setTimeout(() => {
                  dispatchEvent(new Event("cMenuToolbar-NewCommand"));
                }, 100);
            });
        }),
      new e.Setting(o)
        .setName(u("Editing Toolbar position"))
        .setDesc(u("Choose between fixed position or cursor following mode."))
        .addDropdown((e) => {
          let t = {};
          y.map((e) => (t[e] = e)),
            e.addOptions(t),
            e.setValue(this.plugin.settings.positionStyle).onChange((e) => {
              (this.plugin.settings.positionStyle = e),
                this.plugin.saveSettings(),
                dispatchEvent(new Event("cMenuToolbar-NewCommand"));
            });
        }),
      "top" == this.plugin.settings.positionStyle &&
        new e.Setting(o)
          .setName(u("Editing Toolbar Auto-hide"))
          .setDesc(
            u(
              "The toolbar is displayed when the mouse moves over it, otherwise it is automatically hidden",
            ),
          )
          .addToggle((e) => {
            var t;
            return e
              .setValue(
                null === (t = this.plugin.settings) || void 0 === t
                  ? void 0
                  : t.autohide,
              )
              .onChange((e) => {
                (this.plugin.settings.autohide = e),
                  this.plugin.saveSettings(),
                  setTimeout(() => {
                    this.display(),
                      dispatchEvent(new Event("cMenuToolbar-NewCommand"));
                  }, 100);
              });
          }),
      "fixed" == this.plugin.settings.positionStyle &&
        new e.Setting(o)
          .setName(u("Editing Toolbar columns"))
          .setDesc(
            u(
              "Choose the number of columns per row to display on Editing Toolbar. To see the change, hit the refresh button below, or in the status bar menu.",
            ),
          )
          .addSlider((o) => {
            o.setLimits(1, 32, 1)
              .setValue(this.plugin.settings.cMenuNumRows)
              .onChange(
                e.debounce(
                  (e) =>
                    t(this, void 0, void 0, function* () {
                      (this.plugin.settings.cMenuNumRows = e),
                        yield this.plugin.saveSettings();
                    }),
                  100,
                  !0,
                ),
              )
              .setDynamicTooltip();
          }),
      new e.Setting(o)
        .setName(u("Mobile enabled or not"))
        .setDesc(
          u(
            "Whether to enable on mobile devices with device width less than 768px, the default is disable.",
          ),
        )
        .addToggle((e) => {
          var t, o;
          return e
            .setValue(
              null !==
                (o =
                  null === (t = this.plugin.settings) || void 0 === t
                    ? void 0
                    : t.isLoadOnMobile) &&
                void 0 !== o &&
                o,
            )
            .onChange((e) => {
              (this.plugin.settings.isLoadOnMobile = e),
                this.plugin.saveSettings(),
                setTimeout(() => {
                  dispatchEvent(new Event("cMenuToolbar-NewCommand"));
                }, 100);
            });
        }),
      new e.Setting(o)
        .setName(u("Editing Toolbar refresh"))
        .setDesc(
          u(
            "Editing Toolbar will only refresh automatically after you have either added or deleted a command from it. To see UI changes to cMenuToolbar (above settings changes) use the refresh button. If you forget to refresh in settings, no worries. There is also a refresh button in the cMenuToolbar status bar menu.",
          ),
        )
        .addButton((e) => {
          e.setIcon("cMenuToolbarReload")
            .setClass("cMenuToolbarSettingsButton")
            .setClass("cMenuToolbarSettingsButtonRefresh")
            .setTooltip(u("Refresh"))
            .onClick(() => {
              setTimeout(() => {
                dispatchEvent(new Event("cMenuToolbar-NewCommand"));
              }, 100),
                console.log("%ccMenuToolbar refreshed", "color: Violet");
            });
        }),
      new e.Setting(o)
        .setName(u("🎨 Set custom background"))
        .setDesc(u("Click on the picker to adjust the colour"))
        .setClass("custom_bg")
        .then((e) => {
          for (let n = 0; n < 5; n++)
            this.pickr = Ht.create(
              Rt({
                isView: i,
                el: e.controlEl.createDiv({ cls: "picker" }),
                containerEl: o,
                swatches: null,
                opacity: !0,
                defaultColor: this.plugin.settings[`custom_bg${n + 1}`],
              }),
            )
              .on("save", (e, o) =>
                t(this, void 0, void 0, function* () {
                  e &&
                    ((this.plugin.settings[`custom_bg${n + 1}`] = e
                      .toHEXA()
                      .toString()),
                    yield this.plugin.saveSettings(),
                    o.hide(),
                    o.addSwatch(e.toHEXA().toString()));
                }),
              )
              .on("show", () => {
                const { result: e } = this.pickr.getRoot().interaction;
                requestAnimationFrame(() =>
                  requestAnimationFrame(() => e.select()),
                );
              })
              .on("cancel", Zt);
        }),
      new e.Setting(o)
        .setName(u("🖌️ Set custom font color"))
        .setDesc(u("Click on the picker to adjust the colour"))
        .setClass("custom_font")
        .then((e) => {
          for (let n = 0; n < 5; n++)
            this.pickr = Ht.create(
              Rt({
                isView: i,
                el: e.controlEl.createDiv({ cls: "picker" }),
                containerEl: o,
                swatches: null,
                opacity: !0,
                defaultColor: this.plugin.settings[`custom_fc${n + 1}`],
              }),
            )
              .on("save", (e, o) =>
                t(this, void 0, void 0, function* () {
                  e &&
                    ((this.plugin.settings[`custom_fc${n + 1}`] = e
                      .toHEXA()
                      .toString()),
                    yield this.plugin.saveSettings(),
                    o.hide(),
                    o.addSwatch(e.toHEXA().toString()));
                }),
              )
              .on("show", () => {
                const { result: e } = this.pickr.getRoot().interaction;
                requestAnimationFrame(() =>
                  requestAnimationFrame(() => e.select()),
                );
              })
              .on("cancel", Zt);
        }),
      new e.Setting(o)
        .setName(u("Editing Toolbar commands"))
        .setDesc(
          u(
            "Add a command onto Editing Toolbar from Obsidian's commands library. To reorder the commands, drag and drop the command items. To delete them, use the delete buttom to the right of the command item. Editing Toolbar will not automaticaly refresh after reordering commands. Use the refresh button above.",
          ),
        )
        .addButton((e) => {
          e.setIcon("cMenuToolbarAdd")
            .setTooltip(u("Add"))
            .setClass("cMenuToolbarSettingsButton")
            .setClass("cMenuToolbarSettingsButtonAdd")
            .onClick(() => {
              new p(this.plugin).open(),
                setTimeout(() => {
                  dispatchEvent(new Event("cMenuToolbar-NewCommand"));
                }, 100);
            });
        });
    const a = o.createEl("div", { cls: "cMenuToolbarSettingsTabsContainer" });
    let l = "";
    yt.create(a, {
      group: "item",
      animation: 500,
      draggable: ".setting-item",
      ghostClass: "sortable-ghost",
      chosenClass: "sortable-chosen",
      dragClass: "sortable-drag",
      dragoverBubble: !1,
      forceFallback: !0,
      fallbackOnBody: !0,
      swapThreshold: 0.7,
      fallbackClass: "sortable-fallback",
      easing: "cubic-bezier(1, 0, 0, 1)",
      onSort: (e) => {
        if (e.from.className === e.to.className) {
          const t = this.plugin.settings.menuCommands,
            [o] = t.splice(e.oldIndex, 1);
          t.splice(e.newIndex, 0, o), this.plugin.saveSettings();
        }
        setTimeout(() => {
          dispatchEvent(new Event("cMenuToolbar-NewCommand"));
        }, 300);
      },
      onStart: function (e) {
        l = e.item.className;
      },
    }),
      this.plugin.settings.menuCommands.forEach((o, i) => {
        const r = new e.Setting(a);
        if ("SubmenuCommands" in o) {
          if (
            (r.settingEl.setAttribute("data-id", o.id),
            r
              .setClass("cMenuToolbarCommandItem")
              .setClass("cMenuToolbarCommandsubItem")
              .setName(o.name)
              .addButton((e) => {
                e.setClass("cMenuToolbarSettingsIcon").onClick(() =>
                  t(this, void 0, void 0, function* () {
                    new h(this.plugin, o, !1).open();
                  }),
                ),
                  S(o.icon)
                    ? (e.buttonEl.innerHTML = o.icon)
                    : e.setIcon(o.icon);
              })
              .addButton((e) => {
                e.setIcon("cMenuToolbarDelete")
                  .setTooltip(u("Delete"))
                  .setClass("cMenuToolbarSettingsButton")
                  .setClass("cMenuToolbarSettingsButtonDelete")
                  .onClick(() =>
                    t(this, void 0, void 0, function* () {
                      this.plugin.settings.menuCommands.remove(o),
                        yield this.plugin.saveSettings(),
                        this.display(),
                        setTimeout(() => {
                          dispatchEvent(new Event("cMenuToolbar-NewCommand"));
                        }, 100),
                        console.log(
                          `%cCommand '${o.name}' was removed from cMenuToolbar`,
                          "color: #989cab",
                        );
                    }),
                  );
              }),
            "cMenuToolbar-plugin:change-font-color" == o.id)
          )
            return;
          if ("cMenuToolbar-plugin:change-background-color" == o.id) return;
          const n = r.settingEl.createEl("div", {
            cls: "cMenuToolbarSettingsTabsContainer_sub",
          });
          yt.create(n, {
            group: {
              name: "item",
              pull: !0,
              put: function () {
                return !l.includes("cMenuToolbarCommandsubItem");
              },
            },
            draggable: ".setting-item",
            animation: 150,
            ghostClass: "sortable-ghost",
            chosenClass: "sortable-chosen",
            dragClass: "sortable-drag",
            dragoverBubble: !1,
            fallbackOnBody: !0,
            swapThreshold: 0.7,
            forceFallback: !0,
            fallbackClass: "sortable-fallback",
            easing: "cubic-bezier(1, 0, 0, 1)",
            onStart: function () {},
            onSort: (e) => {
              var t, o, n;
              if (e.from.className === e.to.className) {
                const o =
                  null === (t = this.plugin.settings.menuCommands[i]) ||
                  void 0 === t
                    ? void 0
                    : t.SubmenuCommands;
                if (o) {
                  const [t] = o.splice(e.oldIndex, 1);
                  o.splice(e.newIndex, 0, t), this.plugin.saveSettings();
                }
              } else if (
                "cMenuToolbarSettingsTabsContainer" === e.to.className
              ) {
                const t = this.plugin.settings.menuCommands;
                const n =
                  null === (o = t[jt(e.target.parentElement.dataset.id, t)]) ||
                  void 0 === o
                    ? void 0
                    : o.SubmenuCommands;
                if (n) {
                  const [o] = n.splice(e.oldIndex, 1);
                  t.splice(e.newIndex, 0, o), this.plugin.saveSettings();
                } else console.error("Subresult is undefined.");
              } else if (
                "cMenuToolbarSettingsTabsContainer" === e.from.className
              ) {
                const t = this.plugin.settings.menuCommands,
                  o =
                    null ===
                      (n = t[jt(e.target.parentElement.dataset.id, t)]) ||
                    void 0 === n
                      ? void 0
                      : n.SubmenuCommands;
                if (o) {
                  const [n] = t.splice(e.oldIndex, 1);
                  o.splice(e.newIndex, 0, n), this.plugin.saveSettings();
                } else console.error("Subresult is undefined.");
              }
              setTimeout(() => {
                dispatchEvent(new Event("cMenuToolbar-NewCommand"));
              }, 300);
            },
          }),
            o.SubmenuCommands.forEach((i) => {
              const a = new e.Setting(n);
              a
                .setClass("cMenuToolbarCommandItem")
                .addButton((e) => {
                  e.setClass("cMenuToolbarSettingsIcon").onClick(() =>
                    t(this, void 0, void 0, function* () {
                      new h(this.plugin, i, !0).open();
                    }),
                  ),
                    S(null == i ? void 0 : i.icon)
                      ? (e.buttonEl.innerHTML = i.icon)
                      : e.setIcon(i.icon);
                })
                .setName(i.name)
                .addButton((e) => {
                  e.setIcon("pencil")
                    .setTooltip(u("Change Command name"))
                    .setClass("cMenuToolbarSettingsButton")
                    .onClick(() =>
                      t(this, void 0, void 0, function* () {
                        new m(this.app, this.plugin, i, !0).open();
                      }),
                    );
                })
                .addButton((e) => {
                  e.setIcon("cMenuToolbarDelete")
                    .setTooltip(u("Delete"))
                    .setClass("cMenuToolbarSettingsButton")
                    .setClass("cMenuToolbarSettingsButtonDelete")
                    .onClick(() =>
                      t(this, void 0, void 0, function* () {
                        o.SubmenuCommands.remove(i),
                          yield this.plugin.saveSettings(),
                          this.display(),
                          setTimeout(() => {
                            dispatchEvent(new Event("cMenuToolbar-NewCommand"));
                          }, 100),
                          console.log(
                            `%cCommand '${o.name}' was removed from cMenuToolbar`,
                            "color: #989cab",
                          );
                      }),
                    );
                }),
                a.nameEl;
            });
        } else
          r.addButton((e) => {
            e.setClass("cMenuToolbarSettingsIcon").onClick(() =>
              t(this, void 0, void 0, function* () {
                new h(this.plugin, o, !1).open();
              }),
            ),
              S(o.icon) ? (e.buttonEl.innerHTML = o.icon) : e.setIcon(o.icon);
          }),
            "cMenuToolbar-Divider-Line" == o.id &&
              r.setClass("cMenuToolbar-Divider-Line"),
            r
              .setClass("cMenuToolbarCommandItem")
              .setName(o.name)
              .addButton((e) => {
                e.setIcon("pencil")
                  .setTooltip(u("Change Command name"))
                  .setClass("cMenuToolbarSettingsButton")
                  .onClick(() =>
                    t(this, void 0, void 0, function* () {
                      new m(this.app, this.plugin, o, !1).open();
                    }),
                  );
              })
              .addButton((e) => {
                e.setIcon("cMenuToolbarSub")
                  .setTooltip(u("Add submenu"))
                  .setClass("cMenuToolbarSettingsButton")
                  .setClass("cMenuToolbarSettingsButtonaddsub")
                  .onClick(() =>
                    t(this, void 0, void 0, function* () {
                      const e = {
                        id: "SubmenuCommands-" + n(1),
                        name: "submenu",
                        icon: "remix-Filter3Line",
                        SubmenuCommands: [],
                      };
                      this.plugin.settings.menuCommands.splice(i + 1, 0, e),
                        yield this.plugin.saveSettings(),
                        this.display(),
                        setTimeout(() => {
                          dispatchEvent(new Event("cMenuToolbar-NewCommand"));
                        }, 100),
                        console.log(
                          `%cCommand '${e.id}' add `,
                          "color: #989cab",
                        );
                    }),
                  );
              })
              .addButton((e) => {
                e.setIcon("vertical-split")
                  .setTooltip(u("add hr"))
                  .setClass("cMenuToolbarSettingsButton")
                  .setClass("cMenuToolbarSettingsButtonaddsub")
                  .onClick(() =>
                    t(this, void 0, void 0, function* () {
                      this.plugin.settings.menuCommands.splice(i + 1, 0, {
                        id: "cMenuToolbar-Divider-Line",
                        name: "HR",
                        icon: "vertical-split",
                      }),
                        yield this.plugin.saveSettings(),
                        this.display(),
                        setTimeout(() => {
                          dispatchEvent(new Event("cMenuToolbar-NewCommand"));
                        }, 100);
                    }),
                  );
              })
              .addButton((e) => {
                e.setIcon("cMenuToolbarDelete")
                  .setTooltip(u("Delete"))
                  .setClass("cMenuToolbarSettingsButton")
                  .setClass("cMenuToolbarSettingsButtonDelete")
                  .onClick(() =>
                    t(this, void 0, void 0, function* () {
                      this.plugin.settings.menuCommands.remove(o),
                        yield this.plugin.saveSettings(),
                        this.display(),
                        setTimeout(() => {
                          dispatchEvent(new Event("cMenuToolbar-NewCommand"));
                        }, 100),
                        console.log(
                          `%cCommand '${o.name}' was removed from cMenuToolbar`,
                          "color: #989cab",
                        );
                    }),
                  );
              });
      });
  }
  hide() {
    setTimeout(() => {
      dispatchEvent(new Event("cMenuToolbar-NewCommand"));
    }, 100),
      this.pickr.destroyAndRemove();
  }
}
const Xt = {
  cMenuToolbar:
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="0" stroke-linecap="round" stroke-linejoin="round"><path d="M19 10H5c-1.103 0-2 .897-2 2v8c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2v-8c0-1.103-.897-2-2-2zM5 20v-8h14l.002 8H5zM5 6h14v2H5zm2-4h10v2H7z" fill="currentColor"/></svg>',
  cMenuToolbarSub:
    '<svg t="1661526346488" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="16880"  ><path d="M597.333333 85.333333h-341.333333C187.733333 85.333333 128 140.8 128 213.333333v597.333334c0 72.533333 59.733333 128 128 128h426.666667c72.533333 0 128-55.466667 128-128V298.666667l-213.333334-213.333334z m170.666667 725.333334c0 46.933333-38.4 85.333333-85.333333 85.333333H256c-46.933333 0-85.333333-38.4-85.333333-85.333333V213.333333c0-46.933333 38.4-85.333333 85.333333-85.333333h298.666667v213.333333h213.333333v469.333334z m-320-234.666667h128c12.8 0 21.333333 8.533333 21.333333 21.333333s-8.533333 21.333333-21.333333 21.333334h-128v128c0 12.8-8.533333 21.333333-21.333333 21.333333s-21.333333-8.533333-21.333334-21.333333v-128h-128c-12.8 0-21.333333-8.533333-21.333333-21.333334s8.533333-21.333333 21.333333-21.333333h128v-128c0-12.8 8.533333-21.333333 21.333334-21.333333s21.333333 8.533333 21.333333 21.333333v128z" fill="#8a8a8a" p-id="16881"></path></svg>',
  cMenuToolbarAdd:
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="white" stroke-width="0" stroke-linecap="round" stroke-linejoin="round"><path d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4z" fill="white"/><path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10s10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8s8 3.589 8 8s-3.589 8-8 8z" fill="white"/></svg>',
  cMenuToolbarDelete:
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="white" stroke-width="0" stroke-linecap="round" stroke-linejoin="round"><path d="M5 20a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8h2V6h-4V4a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v2H3v2h2zM9 4h6v2H9zM8 8h9v12H7V8z" fill="white"/><path d="M9 10h2v8H9zm4 0h2v8h-2z" fill="white"/></svg>',
  cMenuToolbarReload:
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="white" stroke-width="0" stroke-linecap="round" stroke-linejoin="round"><path d="M19 10H5c-1.103 0-2 .897-2 2v8c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2v-8c0-1.103-.897-2-2-2zM5 20v-8h14l.002 8H5zM5 6h14v2H5zm2-4h10v2H7z" fill="white"/></svg>',
  "codeblock-glyph":
    '<svg xmlns="http://www.w3.org/2000/svg" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path fill="currentColor" d="M20 3H4c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2zM4 19V7h16l.002 12H4z" fill="currentColor"/><path d="M9.293 9.293L5.586 13l3.707 3.707l1.414-1.414L8.414 13l2.293-2.293zm5.414 0l-1.414 1.414L15.586 13l-2.293 2.293l1.414 1.414L18.414 13z"/></svg>',
  "underline-glyph":
    '<svg xmlns="http://www.w3.org/2000/svg" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 1024 1024"><path fill="currentColor" d="M824 804H200c-4.4 0-8 3.4-8 7.6v60.8c0 4.2 3.6 7.6 8 7.6h624c4.4 0 8-3.4 8-7.6v-60.8c0-4.2-3.6-7.6-8-7.6zm-312-76c69.4 0 134.6-27.1 183.8-76.2C745 602.7 772 537.4 772 468V156c0-6.6-5.4-12-12-12h-60c-6.6 0-12 5.4-12 12v312c0 97-79 176-176 176s-176-79-176-176V156c0-6.6-5.4-12-12-12h-60c-6.6 0-12 5.4-12 12v312c0 69.4 27.1 134.6 76.2 183.8C377.3 701 442.6 728 512 728z"/></svg>',
  "superscript-glyph":
    '<svg xmlns="http://www.w3.org/2000/svg" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path fill="currentColor"d="M16 7.41L11.41 12L16 16.59L14.59 18L10 13.41L5.41 18L4 16.59L8.59 12L4 7.41L5.41 6L10 10.59L14.59 6L16 7.41M21.85 9h-4.88V8l.89-.82c.76-.64 1.32-1.18 1.7-1.63c.37-.44.56-.85.57-1.23a.884.884 0 0 0-.27-.7c-.18-.19-.47-.28-.86-.29c-.31.01-.58.07-.84.17l-.66.39l-.45-1.17c.27-.22.59-.39.98-.53S18.85 2 19.32 2c.78 0 1.38.2 1.78.61c.4.39.62.93.62 1.57c-.01.56-.19 1.08-.54 1.55c-.34.48-.76.93-1.27 1.36l-.64.52v.02h2.58V9z"/></svg>',
  "subscript-glyph":
    '<svg xmlns="http://www.w3.org/2000/svg" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path fill="currentColor" d="M16 7.41L11.41 12L16 16.59L14.59 18L10 13.41L5.41 18L4 16.59L8.59 12L4 7.41L5.41 6L10 10.59L14.59 6L16 7.41m5.85 13.62h-4.88v-1l.89-.8c.76-.65 1.32-1.19 1.7-1.63c.37-.44.56-.85.57-1.24a.898.898 0 0 0-.27-.7c-.18-.16-.47-.28-.86-.28c-.31 0-.58.06-.84.18l-.66.38l-.45-1.17c.27-.21.59-.39.98-.53s.82-.24 1.29-.24c.78.04 1.38.25 1.78.66c.4.41.62.93.62 1.57c-.01.56-.19 1.08-.54 1.55c-.34.47-.76.92-1.27 1.36l-.64.52v.02h2.58v1.35z"/></svg>',
  "bot-glyph":
    '<svg xmlns="http://www.w3.org/2000/svg" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path fill="currentColor" d="M21.928 11.607c-.202-.488-.635-.605-.928-.633V8c0-1.103-.897-2-2-2h-6V4.61c.305-.274.5-.668.5-1.11a1.5 1.5 0 0 0-3 0c0 .442.195.836.5 1.11V6H5c-1.103 0-2 .897-2 2v2.997l-.082.006A1 1 0 0 0 1.99 12v2a1 1 0 0 0 1 1H3v5c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2v-5a1 1 0 0 0 1-1v-1.938a1.006 1.006 0 0 0-.072-.455zM5 20V8h14l.001 3.996L19 12v2l.001.005l.001 5.995H5z" fill="currentColor"/><ellipse cx="8.5" cy="12" rx="1.5" ry="2" fill="currentColor"/><ellipse cx="15.5" cy="12" rx="1.5" ry="2" fill="currentColor"/><path d="M8 16h8v2H8z" fill="currentColor"/></svg>',
  "header-1":
    '<svg class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path fill="currentColor"  d="M835.626667 349.397333A42.666667 42.666667 0 0 1 853.333333 384v426.666667a42.666667 42.666667 0 0 1-85.333333 0v-367.488l-71.850667 23.978666a42.666667 42.666667 0 0 1-26.965333-80.981333l128-42.666667a42.666667 42.666667 0 0 1 38.4 5.888zM128 170.666667a42.666667 42.666667 0 0 1 42.666667 42.666666v256h256V213.333333a42.666667 42.666667 0 1 1 85.333333 0v597.333334a42.666667 42.666667 0 1 1-85.333333 0v-256H170.666667v256a42.666667 42.666667 0 1 1-85.333334 0V213.333333a42.666667 42.666667 0 0 1 42.666667-42.666666z" p-id="1635"></path></svg>',
  "header-2":
    '<svg class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M768 426.666667a85.333333 85.333333 0 0 0-85.333333 85.333333v21.333333a42.666667 42.666667 0 1 1-85.333334 0V512a170.666667 170.666667 0 0 1 170.666667-170.666667h7.338667a163.328 163.328 0 0 1 115.498666 278.869334L742.997333 768H896a42.666667 42.666667 0 1 1 0 85.333333h-256a42.666667 42.666667 0 0 1-30.165333-72.832l220.672-220.672A77.994667 77.994667 0 0 0 775.338667 426.666667H768zM128 170.666667a42.666667 42.666667 0 0 1 42.666667 42.666666v256h256V213.333333a42.666667 42.666667 0 1 1 85.333333 0v597.333334a42.666667 42.666667 0 1 1-85.333333 0v-256H170.666667v256a42.666667 42.666667 0 1 1-85.333334 0V213.333333a42.666667 42.666667 0 0 1 42.666667-42.666666z" p-id="1791"></path></svg>',
  "header-3":
    '<svg class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M597.333333 384a42.666667 42.666667 0 0 1 42.666667-42.666667h256a42.666667 42.666667 0 0 1 30.165333 72.832l-105.941333 105.984A170.752 170.752 0 0 1 768 853.333333a170.666667 170.666667 0 0 1-160.938667-113.877333 42.666667 42.666667 0 0 1 80.469334-28.373333A85.333333 85.333333 0 1 0 768 597.333333h-42.666667a42.666667 42.666667 0 0 1-30.165333-72.832L793.002667 426.666667H640a42.666667 42.666667 0 0 1-42.666667-42.666667zM128 170.666667a42.666667 42.666667 0 0 1 42.666667 42.666666v256h256V213.333333a42.666667 42.666667 0 1 1 85.333333 0v597.333334a42.666667 42.666667 0 1 1-85.333333 0v-256H170.666667v256a42.666667 42.666667 0 1 1-85.333334 0V213.333333a42.666667 42.666667 0 0 1 42.666667-42.666666z" p-id="1949"></path></svg>',
  "header-4":
    '<svg class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M780.714667 343.296a42.666667 42.666667 0 0 1 28.032 53.418667L719.36 682.666667H896a42.666667 42.666667 0 1 1 0 85.333333h-234.666667a42.666667 42.666667 0 0 1-40.704-55.381333l106.666667-341.333334a42.666667 42.666667 0 0 1 53.418667-27.989333z" p-id="2107"></path><path d="M853.333333 554.666667a42.666667 42.666667 0 0 1 42.666667 42.666666v213.333334a42.666667 42.666667 0 1 1-85.333333 0v-213.333334a42.666667 42.666667 0 0 1 42.666666-42.666666zM128 170.666667a42.666667 42.666667 0 0 1 42.666667 42.666666v256h256V213.333333a42.666667 42.666667 0 1 1 85.333333 0v597.333334a42.666667 42.666667 0 1 1-85.333333 0v-256H170.666667v256a42.666667 42.666667 0 1 1-85.333334 0V213.333333a42.666667 42.666667 0 0 1 42.666667-42.666666z" p-id="2108"></path></svg>',
  "header-5":
    '\n  <svg class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M683.946667 373.674667A42.666667 42.666667 0 0 1 725.333333 341.333333h170.666667a42.666667 42.666667 0 1 1 0 85.333334h-137.301333l-22.016 88.234666A170.666667 170.666667 0 1 1 640 795.562667a42.666667 42.666667 0 1 1 64-56.448 85.333333 85.333333 0 1 0 0-112.896 42.666667 42.666667 0 0 1-73.386667-38.528l53.333334-214.016zM128 170.666667a42.666667 42.666667 0 0 1 42.666667 42.666666v256h256V213.333333a42.666667 42.666667 0 1 1 85.333333 0v597.333334a42.666667 42.666667 0 1 1-85.333333 0v-256H170.666667v256a42.666667 42.666667 0 1 1-85.333334 0V213.333333a42.666667 42.666667 0 0 1 42.666667-42.666666z" p-id="2264"></path></svg>',
  "header-6":
    '<svg class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M831.274667 303.957333a42.666667 42.666667 0 0 1 16.725333 57.984l-83.498667 151.466667a170.453333 170.453333 0 0 1 88.746667 22.741333 169.557333 169.557333 0 0 1 62.506667 232.277334 171.093333 171.093333 0 0 1-232.96 62.165333 169.557333 169.557333 0 0 1-62.805334-231.850667l153.301334-278.016a42.666667 42.666667 0 0 1 57.984-16.768z m-20.48 306.176a85.76 85.76 0 0 0-116.736 31.018667 84.224 84.224 0 0 0 31.189333 115.456 85.76 85.76 0 0 0 116.736-31.018667 84.224 84.224 0 0 0-31.232-115.456zM128 170.666667a42.666667 42.666667 0 0 1 42.666667 42.666666v256h256V213.333333a42.666667 42.666667 0 1 1 85.333333 0v597.333334a42.666667 42.666667 0 1 1-85.333333 0v-256H170.666667v256a42.666667 42.666667 0 1 1-85.333334 0V213.333333a42.666667 42.666667 0 0 1 42.666667-42.666666z" p-id="2422"></path></svg>',
  "header-n":
    '<svg  viewBox="0 0 24 24" ><path d="M2 3a1 1 0 0 0-1 1v16a1 1 0 1 0 2 0v-7h9v7a1 1 0 1 0 2 0V4a1 1 0 1 0-2 0v7H3V4a1 1 0 0 0-1-1Zm14 9a1 1 0 0 1 1.984-.177 4.099 4.099 0 0 1 1.757-.576 3.447 3.447 0 0 1 3.759 3.432V20a1 1 0 1 1-2 0v-5.32c0-.851-.73-1.519-1.578-1.442A2.114 2.114 0 0 0 18 15.344V20a1 1 0 1 1-2 0v-8Z" fill="currentColor"></path></svg>',
  obsidian:
    '<svg viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" class="logo-wireframe"><path d="M 30.91 17.52 L 34.43 35.7 M 61.44 14.41 L 62.61 0 M 34.43 35.7 L 37.57 90.47 M 81 26.39 L 61.44 14.41 L 34.43 35.7 L 65.35 100 M 62.61 0 L 30.91 17.52 L 18 45.45 L 37.57 90.47 L 65.35 100 L 70.44 89.8 L 81 26.39 L 62.61 0 Z"></path></svg>',
};
function Yt() {
  Object.keys(Xt).forEach((t) => {
    e.addIcon(t, Xt[t]);
  });
}
let Gt, Ut;
class Kt extends e.Plugin {
  constructor() {
    super(...arguments),
      (this.modCommands = [
        { id: "editor:insert-embed", name: "Add embed", icon: "note-glyph" },
        {
          id: "editor:insert-link",
          name: "Insert markdown link",
          icon: "link-glyph",
        },
        { id: "editor:insert-tag", name: "Add tag", icon: "price-tag-glyph" },
        {
          id: "editor:insert-wikilink",
          name: "Add internal link",
          icon: "bracket-glyph",
        },
        { id: "editor:toggle-bold", name: "Toggle bold", icon: "bold-glyph" },
        {
          id: "editor:toggle-italics",
          name: "Toggle italics",
          icon: "italic-glyph",
        },
        {
          id: "editor:toggle-strikethrough",
          name: "Toggle strikethrough",
          icon: "strikethrough-glyph",
        },
        { id: "editor:toggle-code", name: "Toggle code", icon: "code-glyph" },
        {
          id: "editor:toggle-blockquote",
          name: "Toggle blockquote",
          icon: "lucide-text-quote",
        },
        {
          id: "editor:toggle-bullet-list",
          name: "Toggle bullet",
          icon: "bullet-list-glyph",
        },
        {
          id: "editor:toggle-checklist-status",
          name: "Toggle checklist status",
          icon: "checkbox-glyph",
        },
        {
          id: "editor:toggle-comments",
          name: "Toggle comment",
          icon: "percent-sign-glyph",
        },
        {
          id: "editor:toggle-highlight",
          name: "Toggle highlight",
          icon: "highlight-glyph",
        },
        {
          id: "editor:toggle-numbered-list",
          name: "Toggle numbered list",
          icon: "number-list-glyph",
        },
        {
          id: "editor:insert-callout",
          name: "Toggle Callout ",
          icon: "lucide-quote",
        },
        {
          id: "editor:insert-mathblock",
          name: "Toggle MathBlock",
          icon: "lucide-sigma-square",
        },
        {
          id: "editor:toggle-inline-math",
          name: "Toggle inline math",
          icon: "lucide-sigma",
        },
        {
          id: "editor:insert-table",
          name: "Toggle table",
          icon: "lucide-table",
        },
        {
          id: "editor:swap-line-up",
          name: "Toggle swap line up",
          icon: "lucide-corner-right-up",
        },
        {
          id: "editor:swap-line-down",
          name: "Toggle swap line down",
          icon: "lucide-corner-right-down",
        },
        {
          id: "editor:attach-file",
          name: "Toggle upload attach file",
          icon: "lucide-paperclip",
        },
        {
          id: "editor:clear-formatting",
          name: "Toggle clear formatting",
          icon: "lucide-eraser",
        },
        {
          id: "editor:cycle-list-checklist",
          name: "Toggle cycle list checklist",
          icon: "lucide-check-square",
        },
      ]),
      (this.handlecMenuToolbar = () => {
        if (1 == this.settings.cMenuVisibility) {
          let e = q(this.app, this.settings);
          if (e)
            if ("following" != this.settings.positionStyle)
              try {
                e.style.visibility = "visible";
              } catch (t) {
                console.log(e, "toolbar_error");
              }
            else
              try {
                e.style.visibility = "hidden";
              } catch (t) {
                console.log(e, "toolbar_error");
              }
          else
            setTimeout(() => {
              F(this.app, this);
            }, 100);
        }
      }),
      (this.handlecMenuToolbar_layout = () => {
        if (1 != this.settings.cMenuVisibility) return !1;
        {
          let e = q(this.app, this.settings),
            t = !0;
          _(app) && t
            ? _(app) &&
              (e
                ? "following" == this.settings.positionStyle
                  ? (e.style.visibility = "hidden")
                  : (e.style.visibility = "visible")
                : setTimeout(() => {
                    F(this.app, this);
                  }, 100))
            : e && (e.style.visibility = "hidden");
        }
      }),
      (this.handlecMenuToolbar_resize = () => {
        var t;
        if (
          1 != this.settings.cMenuVisibility ||
          "top" != this.settings.positionStyle
        )
          return !1;
        if (_(app)) {
          let o =
            null !== (t = this.app.workspace.activeLeaf.view.leaf.width) &&
            void 0 !== t
              ? t
              : 0;
          if (this.Leaf_Width == o) return !1;
          if (o > 0 && ((this.Leaf_Width = o), this.settings.cMenuWidth && o)) {
            if (
              o - this.settings.cMenuWidth < 78 &&
              o > this.settings.cMenuWidth
            )
              return;
            setTimeout(() => {
              (function () {
                C = e.requireApiVersion("0.15.0")
                  ? activeWindow.document
                  : window.document;
                let t = C,
                  o = t.querySelectorAll("#cMenuToolbarModalBar"),
                  n = t.querySelectorAll("#cMenuToolbarPopoverBar");
                o.forEach((e) => {
                  e &&
                    (e.firstChild && e.removeChild(e.firstChild), e.remove());
                }),
                  n.forEach((e) => {
                    e &&
                      (e.firstChild && e.removeChild(e.firstChild), e.remove());
                  });
              })(),
                F(app, this);
            }, 200);
          }
        }
      });
  }
  onload() {
    return t(this, void 0, void 0, function* () {
      console.log("cMenuToolbar v" + this.manifest.version + " loaded"),
        (Ut = e.requireApiVersion("0.15.0")
          ? activeWindow.document
          : window.document),
        yield this.loadSettings(),
        this.addSettingTab(new Wt(this.app, this)),
        Yt(),
        this.generateCommands(),
        this.app.workspace.onLayoutReady(() => {
          setTimeout(() => {
            this.setupStatusBar();
          });
        }),
        this.init_evt(Ut),
        e.requireApiVersion("0.15.0") &&
          this.app.workspace.on("window-open", (e) => {
            this.init_evt(e.doc);
          });
      app.plugins.enabledPlugins.has("obsidian-memos") &&
        this.registerEvent(
          this.app.workspace.on(
            "thino-editor-created",
            this.handlecMenuToolbar,
          ),
        ),
        this.registerEvent(
          this.app.workspace.on("active-leaf-change", this.handlecMenuToolbar),
        ),
        this.registerEvent(
          this.app.workspace.on(
            "layout-change",
            this.handlecMenuToolbar_layout,
          ),
        ),
        this.registerEvent(
          this.app.workspace.on("resize", this.handlecMenuToolbar_resize),
        ),
        1 == this.settings.cMenuVisibility &&
          setTimeout(() => {
            dispatchEvent(new Event("cMenuToolbar-NewCommand"));
          }, 100);
    });
  }
  isLoadMobile() {
    var t;
    let o = window.innerWidth > 0 ? window.innerWidth : screen.width,
      n =
        !!(null === (t = this.settings) || void 0 === t
          ? void 0
          : t.isLoadOnMobile) && this.settings.isLoadOnMobile;
    return (
      !(e.Platform.isMobileApp && !n && o <= 768) ||
      (console.log("editing toolbar disable loading on mobile"), !1)
    );
  }
  init_evt(e) {
    (this.EN_FontColor_Format_Brush = !1),
      (this.EN_BG_Format_Brush = !1),
      (this.EN_Text_Format_Brush = !1),
      this.registerDomEvent(e, "mouseup", (e) =>
        t(this, void 0, void 0, function* () {
          var t;
          if (
            (e.button &&
              (this.EN_FontColor_Format_Brush ||
                this.EN_BG_Format_Brush ||
                this.EN_Text_Format_Brush) &&
              L(this),
            !this.isView())
          )
            return;
          let o =
            null === (t = app.workspace.activeLeaf.view) || void 0 === t
              ? void 0
              : t.editor;
          if (o.hasFocus()) {
            let e = q(this.app, this.settings);
            if (null == o.getSelection() || "" == o.getSelection())
              return void (
                e &&
                "following" == this.settings.positionStyle &&
                (e.style.visibility = "hidden")
              );
            this.EN_FontColor_Format_Brush
              ? B(this.app, this.settings.cMenuFontColor)
              : this.EN_BG_Format_Brush
                ? A(this.app, this.settings.cMenuBackgroundColor)
                : this.EN_Text_Format_Brush
                  ? I(this.app, this)
                  : "following" == this.settings.positionStyle &&
                    O(this.app, this.settings);
          } else
            (this.EN_FontColor_Format_Brush ||
              this.EN_BG_Format_Brush ||
              this.EN_Text_Format_Brush) &&
              L(this);
        }),
      ),
      this.registerDomEvent(Ut, "keydown", (e) => {
        if ("following" !== this.settings.positionStyle) return;
        const t = q(this.app, this.settings);
        !e.shiftKey && t && (t.style.visibility = "hidden");
      }),
      this.registerDomEvent(Ut, "wheel", () => {
        if ("following" !== this.settings.positionStyle) return;
        const e = q(this.app, this.settings);
        e && (e.style.visibility = "hidden");
      });
  }
  generateCommands() {
    this.addCommand({
      id: "hide-show-menu",
      name: "Hide/show ",
      icon: "cMenuToolbar",
      callback: () =>
        t(this, void 0, void 0, function* () {
          (this.settings.cMenuVisibility = !this.settings.cMenuVisibility),
            1 == this.settings.cMenuVisibility
              ? setTimeout(() => {
                  dispatchEvent(new Event("cMenuToolbar-NewCommand"));
                }, 100)
              : r(this.settings.cMenuVisibility),
            k(),
            yield this.saveSettings();
        }),
    }),
      this.addCommand({
        id: "format-eraser",
        name: "Format Eraser",
        callback: () => I(this.app, this),
        icon: '<svg width="18" height="18" focusable="false" fill="currentColor"  viewBox="0 0 1024 1024"><g transform="scale(1, -1) translate(0, -896) scale(0.9, 0.9) "><path class="path" d="M889 512 l-211 211 q-26 27 -61 36 q-35 9 -70 0 q-35 -9 -61 -36 l-351 -350 q-26 -27 -35.5 -62 q-9.5 -35 0 -70 q9.5 -35 35.5 -61 l170 -170 q12 -12 29 -12 l215 0 q17 0 29 12 l311 310 q26 26 35.5 61 q9.5 35 0 70 q-9.5 35 -35.5 61 ZM831 453 q15 -15 15.5 -36.5 q0.5 -21.5 -14.5 -37.5 l-300 -298 l-181 0 l-158 158 q-15 15 -15 37 q0 22 15 38 l351 351 q16 16 38 16 q22 0 37 -16 l212 -212 ZM686 217 l-59 -59 l-317 315 l58 59 l318 -315 ZM883 81 q18 0 30.5 -12 q12.5 -12 12.5 -29 q0 -17 -12.5 -29 q-12.5 -12 -29.5 -13 l-456 0 q-17 0 -29.5 12 q-12.5 12 -12.5 29 q0 17 12 29 q12 12 29 13 l456 0 Z"></path></g></svg>',
      }),
      this.addCommand({
        id: "off-Format-Brush",
        name: "OFF Format Brush",
        callback: () => L(this),
      }),
      this.addCommand({
        id: "change-font-color",
        name: "Change font color[html]",
        callback: () => {
          var e;
          return B(
            app,
            null !== (e = this.settings.cMenuFontColor) && void 0 !== e
              ? e
              : "#2DC26B",
          );
        },
        icon: '<svg width="24" height="24" focusable="false" fill="currentColor"><g fill-rule="evenodd"><path id="change-font-color-icon" d="M3 18h18v3H3z" style="fill:#2DC26B"></path><path d="M8.7 16h-.8a.5.5 0 01-.5-.6l2.7-9c.1-.3.3-.4.5-.4h2.8c.2 0 .4.1.5.4l2.7 9a.5.5 0 01-.5.6h-.8a.5.5 0 01-.4-.4l-.7-2.2c0-.3-.3-.4-.5-.4h-3.4c-.2 0-.4.1-.5.4l-.7 2.2c0 .3-.2.4-.4.4zm2.6-7.6l-.6 2a.5.5 0 00.5.6h1.6a.5.5 0 00.5-.6l-.6-2c0-.3-.3-.4-.5-.4h-.4c-.2 0-.4.1-.5.4z"></path></g></svg>',
      }),
      this.addCommand({
        id: "change-background-color",
        name: "Change Backgroundcolor[html]",
        callback: () => {
          var e;
          return A(
            app,
            null !== (e = this.settings.cMenuBackgroundColor) && void 0 !== e
              ? e
              : "#FA541C",
          );
        },
        icon: '<svg width="18" height="24" viewBox="0 0 256 256" version="1.1" xmlns="http://www.w3.org/2000/svg"><g   stroke="none" stroke-width="1" fill="currentColor" fill-rule="evenodd"><g  ><g fill="currentColor"><g transform="translate(119.502295, 137.878331) rotate(-135.000000) translate(-119.502295, -137.878331) translate(48.002295, 31.757731)" ><path d="M100.946943,60.8084699 L43.7469427,60.8084699 C37.2852111,60.8084699 32.0469427,66.0467383 32.0469427,72.5084699 L32.0469427,118.70847 C32.0469427,125.170201 37.2852111,130.40847 43.7469427,130.40847 L100.946943,130.40847 C107.408674,130.40847 112.646943,125.170201 112.646943,118.70847 L112.646943,72.5084699 C112.646943,66.0467383 107.408674,60.8084699 100.946943,60.8084699 Z M93.646,79.808 L93.646,111.408 L51.046,111.408 L51.046,79.808 L93.646,79.808 Z" fill-rule="nonzero"></path><path d="M87.9366521,16.90916 L87.9194966,68.2000001 C87.9183543,69.4147389 86.9334998,70.399264 85.7187607,70.4 L56.9423078,70.4 C55.7272813,70.4 54.7423078,69.4150264 54.7423078,68.2 L54.7423078,39.4621057 C54.7423078,37.2523513 55.5736632,35.1234748 57.0711706,33.4985176 L76.4832996,12.4342613 C78.9534987,9.75382857 83.1289108,9.5834005 85.8093436,12.0535996 C87.1658473,13.303709 87.9372691,15.0644715 87.9366521,16.90916 Z" fill-rule="evenodd"></path><path d="M131.3,111.241199 L11.7,111.241199 C5.23826843,111.241199 0,116.479467 0,122.941199 L0,200.541199 C0,207.002931 5.23826843,212.241199 11.7,212.241199 L131.3,212.241199 C137.761732,212.241199 143,207.002931 143,200.541199 L143,122.941199 C143,116.479467 137.761732,111.241199 131.3,111.241199 Z M124,130.241 L124,193.241 L19,193.241 L19,130.241 L124,130.241 Z" fill-rule="nonzero"></path></g></g><path d="M51,218 L205,218 C211.075132,218 216,222.924868 216,229 C216,235.075132 211.075132,240 205,240 L51,240 C44.9248678,240 40,235.075132 40,229 C40,222.924868 44.9248678,218 51,218 Z" id="change-background-color-icon" style="fill:#FA541C"></path></g></g></svg>',
      }),
      this.addCommand({
        id: "indent-list",
        name: "indent list",
        callback: () => {
          var e;
          return (
            null === (e = app.workspace.activeLeaf.view) || void 0 === e
              ? void 0
              : e.editor
          ).indentList();
        },
        icon: "indent-glyph",
      }),
      this.addCommand({
        id: "undent-list",
        name: "unindent-list",
        callback: () => {
          var e;
          return (
            null === (e = app.workspace.activeLeaf.view) || void 0 === e
              ? void 0
              : e.editor
          ).unindentList();
        },
        icon: "unindent-glyph",
      }),
      this.addCommand({
        id: "editor-undo",
        name: "undo editor",
        callback: () => {
          var e;
          return (
            null === (e = app.workspace.activeLeaf.view) || void 0 === e
              ? void 0
              : e.editor
          ).undo();
        },
        icon: "undo-glyph",
      }),
      this.addCommand({
        id: "editor-redo",
        name: "redo editor",
        callback: () => {
          var e;
          return (
            null === (e = app.workspace.activeLeaf.view) || void 0 === e
              ? void 0
              : e.editor
          ).redo();
        },
        icon: "redo-glyph",
      }),
      this.addCommand({
        id: "editor-copy",
        name: "copy editor",
        callback: () =>
          t(this, void 0, void 0, function* () {
            var e;
            const t =
              null === (e = app.workspace.activeLeaf.view) || void 0 === e
                ? void 0
                : e.editor;
            try {
              yield window.navigator.clipboard.writeText(t.getSelection()),
                app.commands.executeCommandById("editor:focus");
            } catch (e) {
              console.error("Copy failed:", e);
            }
          }),
        icon: "lucide-copy",
      }),
      this.addCommand({
        id: "editor-paste",
        name: "paste editor",
        callback: () =>
          t(this, void 0, void 0, function* () {
            var e;
            const t =
              null === (e = app.workspace.activeLeaf.view) || void 0 === e
                ? void 0
                : e.editor;
            try {
              var o = t.replaceSelection,
                n = yield window.navigator.clipboard.readText();
              n && o.apply(t, [n]),
                app.commands.executeCommandById("editor:focus");
            } catch (e) {
              console.error("Paste failed:", e);
            }
          }),
        icon: "lucide-clipboard-type",
      }),
      this.addCommand({
        id: "editor-cut",
        name: "cut editor",
        callback: () =>
          t(this, void 0, void 0, function* () {
            var e;
            const t =
              null === (e = app.workspace.activeLeaf.view) || void 0 === e
                ? void 0
                : e.editor;
            try {
              yield window.navigator.clipboard.writeText(t.getSelection()),
                t.replaceSelection(""),
                app.commands.executeCommandById("editor:focus");
            } catch (e) {
              console.error("Cut failed:", e);
            }
          }),
        icon: "lucide-scissors",
      }),
      this.addCommand({
        id: "fullscreen-focus",
        name: "Fullscreen focus mode",
        hotkeys: [{ modifiers: ["Mod", "Shift"], key: "F11" }],
        callback: () =>
          (function (t) {
            var o;
            Object.defineProperty(exports, "__esModule", { value: !0 }),
              (exports.toggleFull =
                exports.isFull =
                exports.exitFull =
                exports.beFull =
                  void 0);
            let n = document.documentElement,
              i = n.querySelector("head"),
              a = document.createElement("style"),
              l = "requestFullscreen",
              r = "exitFullscreen",
              s = "fullscreenElement";
            "webkitRequestFullScreen" in n
              ? ((l = "webkitRequestFullScreen"),
                (r = "webkitExitFullscreen"),
                (s = "webkitFullscreenElement"))
              : "msRequestFullscreen" in n
                ? ((l = "msRequestFullscreen"),
                  (r = "msExitFullscreen"),
                  (s = "msFullscreenElement"))
                : "mozRequestFullScreen" in n
                  ? ((l = "mozRequestFullScreen"),
                    (r = "mozCancelFullScreen"),
                    (s = "mozFullScreenElement"))
                  : "requestFullscreen" in n ||
                    console.log("当前浏览器不支持Fullscreen API !");
            const c = t.workspace.getActiveViewOfType(e.MarkdownView);
            if (!c) return;
            let d,
              u = c.containerEl,
              h =
                null === (o = document.body) || void 0 === o
                  ? void 0
                  : o.querySelector(
                      ".mod-vertical.mod-root .workspace-tab-container",
                    );
            function p(e) {
              return e instanceof HTMLElement ? e : n;
            }
            function g(e) {
              return p(e)[l]();
            }
            function m() {
              return (
                n.contains(a) && (null == i || i.removeChild(a)), document[r]()
              );
            }
            function f(e) {
              return p(e) === document[s];
            }
            (d = new MutationObserver(function (e) {
              e.forEach(function (e) {
                e.addedNodes.forEach(function (e) {
                  if (f(h))
                    try {
                      document.body.removeChild(e), u.appendChild(e);
                    } catch (e) {
                      console.log(e.message);
                    }
                });
              });
            })),
              h.addEventListener("fullscreenchange", function () {
                f(h) || d.disconnect();
              }),
              f(h)
                ? (d.disconnect(), m())
                : (g(h), d.observe(document.body, { childList: !0 })),
              (exports.beFull = g),
              (exports.exitFull = m),
              (exports.isFull = f),
              (exports.toggleFull = function (e) {
                return f(e) ? (m(), !1) : (g(e), !0);
              });
          })(app),
        icon: "fullscreen",
      }),
      this.addCommand({
        id: "workplace-fullscreen-focus",
        name: "workplace-Fullscreen ",
        callback: () =>
          (function (t) {
            Gt = e.requireApiVersion("0.15.0")
              ? activeWindow.document
              : window.document;
            let o = Gt;
            t.workspace.leftSplit.collapsed && t.workspace.rightSplit.collapsed
              ? (t.commands.executeCommandById("app:toggle-right-sidebar"),
                t.commands.executeCommandById("app:toggle-left-sidebar"),
                t.workspace.leftRibbon.show(),
                o.body.classList.contains("auto-hide-header") &&
                  o.body.classList.remove("auto-hide-header"))
              : (o.body.classList.contains("auto-hide-header") ||
                  o.body.classList.add("auto-hide-header"),
                t.workspace.leftRibbon.hide(),
                t.workspace.leftSplit.collapsed ||
                  t.commands.executeCommandById("app:toggle-left-sidebar"),
                t.workspace.rightSplit.collapsed ||
                  t.commands.executeCommandById("app:toggle-right-sidebar"));
          })(app),
        hotkeys: [{ modifiers: ["Mod"], key: "F11" }],
        icon: "remix-SplitCellsHorizontal",
      }),
      this.addCommand({
        id: "header0-text",
        name: "Remove header level",
        callback: () => N(""),
        hotkeys: [{ modifiers: ["Mod"], key: "`" }],
        icon: "heading-glyph",
      }),
      this.addCommand({
        id: "header1-text",
        name: "Header 1",
        callback: () => N("#"),
        icon: "header-1",
      }),
      this.addCommand({
        id: "header2-text",
        name: "Header 2",
        callback: () => N("##"),
        icon: "header-2",
      }),
      this.addCommand({
        id: "header3-text",
        name: "Header 3",
        callback: () => N("###"),
        icon: "header-3",
      }),
      this.addCommand({
        id: "header4-text",
        name: "Header 4",
        callback: () => N("####"),
        icon: "header-4",
      }),
      this.addCommand({
        id: "header5-text",
        name: "Header 5",
        callback: () => N("#####"),
        icon: "header-5",
      }),
      this.addCommand({
        id: "header6-text",
        name: "Header 6",
        callback: () => N("######"),
        icon: "header-6",
      });
    const n = {
      hrline: {
        char: 5,
        line: 1,
        prefix: "\n---",
        suffix: "\n",
        islinehead: !0,
      },
      justify: {
        char: 17,
        line: 0,
        prefix: '<p align="justify">',
        suffix: "</p>",
        islinehead: !1,
      },
      left: {
        char: 17,
        line: 0,
        prefix: '<p align="left">',
        suffix: "</p>",
        islinehead: !1,
      },
      right: {
        char: 17,
        line: 0,
        prefix: '<p align="right">',
        suffix: "</p>",
        islinehead: !1,
      },
      center: {
        char: 8,
        line: 0,
        prefix: "<center>",
        suffix: "</center>",
        islinehead: !1,
      },
      underline: {
        char: 3,
        line: 0,
        prefix: "<u>",
        suffix: "</u>",
        islinehead: !1,
      },
      superscript: {
        char: 5,
        line: 0,
        prefix: "<sup>",
        suffix: "</sup>",
        islinehead: !1,
      },
      subscript: {
        char: 5,
        line: 0,
        prefix: "<sub>",
        suffix: "</sub>",
        islinehead: !1,
      },
      codeblock: {
        char: 4,
        line: 0,
        prefix: "\n```\n",
        suffix: "\n```\n",
        islinehead: !1,
      },
    };
    Object.keys(n).forEach((e) => {
      this.addCommand({
        id: `${e}`,
        name: `Toggle ${e}`,
        icon: `${e}-glyph`,
        callback: () =>
          t(this, void 0, void 0, function* () {
            var t;
            const i =
              null === (t = app.workspace.activeLeaf.view) || void 0 === t
                ? void 0
                : t.editor;
            ((e, t) => {
              const o = t.getSelection(),
                n = t.getCursor("from"),
                i = t.getCursor("to");
              let a = e.prefix;
              e.islinehead && n.ch > 0 && (a = "\n" + a);
              const l = e.suffix || a,
                r = (o) => {
                  t.setCursor(n.line + e.line * o, i.ch + e.char * o);
                },
                s = { line: n.line - e.line, ch: n.ch - a.length };
              if (t.getRange(s, n) == a.trimStart()) {
                const a = { line: n.line + e.line, ch: i.ch + l.length };
                if (t.getRange(i, a) == l.trimEnd())
                  return t.replaceRange(o, s, a), r(-1);
              }
              t.replaceSelection(`${a}${o}${l}`), r(1);
            })(n[e], i),
              yield o(10),
              app.commands.executeCommandById("editor:focus");
          }),
      });
    }),
      this.modCommands.forEach((e) => {
        this.addCommand({
          id: `${e.id}`,
          name: `${e.name}`,
          icon: `${e.icon}`,
          callback: () =>
            t(this, void 0, void 0, function* () {
              var t;
              const n =
                null === (t = app.workspace.activeLeaf.view) || void 0 === t
                  ? void 0
                  : t.editor;
              n.getCursor("from");
              const i = n.getCursor("to");
              let a;
              (a =
                "editor:insert-embed" == `${e.id}`
                  ? 3
                  : "editor:insert-link" == `${e.id}` ||
                      "editor:insert-tag" == `${e.id}`
                    ? 1
                    : "editor:insert-wikilink" == `${e.id}` ||
                        "editor:toggle-bold" == `${e.id}`
                      ? 2
                      : "editor:toggle-italics" == `${e.id}`
                        ? 1
                        : "editor:toggle-strikethrough" == `${e.id}`
                          ? 2
                          : "editor:toggle-code" == `${e.id}`
                            ? 1
                            : "editor:toggle-blockquote" == `${e.id}` ||
                                "editor:toggle-bullet-list" == `${e.id}`
                              ? 2
                              : "editor:toggle-checklist-status" == `${e.id}`
                                ? 4
                                : "editor:toggle-comments" == `${e.id}` ||
                                    "editor:toggle-highlight" == `${e.id}`
                                  ? 2
                                  : "editor:toggle-numbered-list" == `${e.id}`
                                    ? 3
                                    : 2),
                app.commands.executeCommandById(`${e.id}`),
                "editor:insert-link" !== e.id && n.setCursor(i.line, i.ch + a),
                yield o(10),
                app.commands.executeCommandById("editor:focus");
            }),
        });
      });
  }
  setupStatusBar() {
    Yt(),
      (this.statusBarIcon = this.addStatusBarItem()),
      this.statusBarIcon.addClass("cMenuToolbar-statusbar-button"),
      e.setIcon(this.statusBarIcon, "cMenuToolbar"),
      this.registerDomEvent(this.statusBarIcon, "click", () => {
        const o = this.statusBarIcon.parentElement.getBoundingClientRect(),
          n = this.statusBarIcon.getBoundingClientRect(),
          i = new e.Menu().addItem((o) => {
            o.setTitle(u("Hide & Show")),
              !e.requireApiVersion("0.15.0") || o.setSection("settings");
            const n = o.dom,
              i = new e.ToggleComponent(n)
                .setValue(this.settings.cMenuVisibility)
                .setDisabled(!0),
              a = () =>
                t(this, void 0, void 0, function* () {
                  (this.settings.cMenuVisibility =
                    !this.settings.cMenuVisibility),
                    i.setValue(this.settings.cMenuVisibility),
                    1 == this.settings.cMenuVisibility
                      ? setTimeout(() => {
                          dispatchEvent(new Event("cMenuToolbar-NewCommand"));
                        }, 100)
                      : r(this.settings.cMenuVisibility),
                    k(),
                    yield this.saveSettings();
                });
            o.onClick((e) => {
              e.preventDefault(), e.stopImmediatePropagation(), a();
            });
          });
        i.dom.addClass("cMenuToolbar-statusbar-menu"),
          i.addItem((t) => {
            t.setIcon("cMenuToolbarAdd"),
              !e.requireApiVersion("0.15.0") || t.setSection("ButtonAdd"),
              t.onClick(() => {
                new p(this).open();
              });
          }),
          i.addItem((t) => {
            t.setIcon("cMenuToolbarReload"),
              !e.requireApiVersion("0.15.0") || t.setSection("ButtonAdd"),
              t.onClick(() => {
                setTimeout(() => {
                  dispatchEvent(new Event("cMenuToolbar-NewCommand"));
                }, 100),
                  console.log("%ccMenuToolbar refreshed", "color: Violet");
              });
          }),
          i.addItem((t) => {
            t.setIcon("sliders"),
              !e.requireApiVersion("0.15.0") || t.setSection("ButtonAdd"),
              t.onClick(() => {
                new f(this.app, this).open();
              });
          }),
          i.showAtPosition({ x: n.right + 5, y: o.top - 5 });
      });
  }
  onunload() {
    k(),
      console.log("cMenuToolbar unloaded"),
      this.app.workspace.off("active-leaf-change", this.handlecMenuToolbar),
      this.app.workspace.off("layout-change", this.handlecMenuToolbar_layout),
      this.app.workspace.off("resize", this.handlecMenuToolbar_resize);
  }
  isView() {
    const t = app.workspace.getActiveViewOfType(e.ItemView);
    return (
      "markdown" === (null == t ? void 0 : t.getViewType()) ||
      "thino_view" === (null == t ? void 0 : t.getViewType())
    );
  }
  setIS_MORE_Button(e) {
    this.IS_MORE_Button = e;
  }
  setEN_BG_Format_Brush(e) {
    this.EN_BG_Format_Brush = e;
  }
  setEN_FontColor_Format_Brush(e) {
    this.EN_FontColor_Format_Brush = e;
  }
  setEN_Text_Format_Brush(e) {
    this.EN_Text_Format_Brush = e;
  }
  setTemp_Notice(e) {
    this.Temp_Notice = e;
  }
  loadSettings() {
    return t(this, void 0, void 0, function* () {
      this.settings = Object.assign({}, w, yield this.loadData());
    });
  }
  saveSettings() {
    return t(this, void 0, void 0, function* () {
      yield this.saveData(this.settings);
    });
  }
}
module.exports = Kt;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXMiOlsiLi4vbm9kZV9tb2R1bGVzL3RzbGliL3RzbGliLmVzNi5qcyIsIi4uL3NyYy91dGlsL3V0aWwudHMiLCIuLi9zcmMvaWNvbnMvYXBwSWNvbnMudHMiLCIuLi9zcmMvdXRpbC9zdGF0dXNCYXJDb25zdGFudHMudHMiLCIuLi9zcmMvdHJhbnNsYXRpb25zL2xvY2FsZS9hci50cyIsIi4uL3NyYy90cmFuc2xhdGlvbnMvbG9jYWxlL2VuLnRzIiwiLi4vc3JjL3RyYW5zbGF0aW9ucy9oZWxwZXIudHMiLCIuLi9zcmMvdHJhbnNsYXRpb25zL2xvY2FsZS9jei50cyIsIi4uL3NyYy90cmFuc2xhdGlvbnMvbG9jYWxlL2RhLnRzIiwiLi4vc3JjL3RyYW5zbGF0aW9ucy9sb2NhbGUvZGUudHMiLCIuLi9zcmMvdHJhbnNsYXRpb25zL2xvY2FsZS9lbi1nYi50cyIsIi4uL3NyYy90cmFuc2xhdGlvbnMvbG9jYWxlL2VzLnRzIiwiLi4vc3JjL3RyYW5zbGF0aW9ucy9sb2NhbGUvZnIudHMiLCIuLi9zcmMvdHJhbnNsYXRpb25zL2xvY2FsZS9oaS50cyIsIi4uL3NyYy90cmFuc2xhdGlvbnMvbG9jYWxlL2lkLnRzIiwiLi4vc3JjL3RyYW5zbGF0aW9ucy9sb2NhbGUvaXQudHMiLCIuLi9zcmMvdHJhbnNsYXRpb25zL2xvY2FsZS9qYS50cyIsIi4uL3NyYy90cmFuc2xhdGlvbnMvbG9jYWxlL2tvLnRzIiwiLi4vc3JjL3RyYW5zbGF0aW9ucy9sb2NhbGUvbmwudHMiLCIuLi9zcmMvdHJhbnNsYXRpb25zL2xvY2FsZS9uby50cyIsIi4uL3NyYy90cmFuc2xhdGlvbnMvbG9jYWxlL3BsLnRzIiwiLi4vc3JjL3RyYW5zbGF0aW9ucy9sb2NhbGUvcHQudHMiLCIuLi9zcmMvdHJhbnNsYXRpb25zL2xvY2FsZS9wdC1ici50cyIsIi4uL3NyYy90cmFuc2xhdGlvbnMvbG9jYWxlL3JvLnRzIiwiLi4vc3JjL3RyYW5zbGF0aW9ucy9sb2NhbGUvcnUudHMiLCIuLi9zcmMvdHJhbnNsYXRpb25zL2xvY2FsZS90ci50cyIsIi4uL3NyYy90cmFuc2xhdGlvbnMvbG9jYWxlL3poLWNuLnRzIiwiLi4vc3JjL3RyYW5zbGF0aW9ucy9sb2NhbGUvemgtdHcudHMiLCIuLi9zcmMvbW9kYWxzL3N1Z2dlc3Rlck1vZGFscy50cyIsIi4uL3NyYy9zZXR0aW5ncy9zZXR0aW5nc0RhdGEudHMiLCIuLi9zcmMvbW9kYWxzL2NNZW51VG9vbGJhck1vZGFsLnRzIiwiLi4vbm9kZV9tb2R1bGVzL3NvcnRhYmxlanMvbW9kdWxhci9zb3J0YWJsZS5lc20uanMiLCIuLi9ub2RlX21vZHVsZXMvQHNpbW9ud2VwL3BpY2tyL2Rpc3QvcGlja3IubWluLmpzIiwiLi4vc3JjL3NldHRpbmdzL3NldHRpbmdzVGFiLnRzIiwiLi4vc3JjL2ljb25zL2N1c3RvbUljb25zLnRzIiwiLi4vc3JjL3V0aWwvZnVsbHNjcmVlbi50cyIsIi4uL3NyYy9wbHVnaW4vbWFpbi50cyJdLCJzb3VyY2VzQ29udGVudCI6bnVsbCwibmFtZXMiOlsiX19hd2FpdGVyIiwidGhpc0FyZyIsIl9hcmd1bWVudHMiLCJQIiwiZ2VuZXJhdG9yIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJmdWxmaWxsZWQiLCJ2YWx1ZSIsInN0ZXAiLCJuZXh0IiwiZSIsInJlamVjdGVkIiwicmVzdWx0IiwiZG9uZSIsInRoZW4iLCJhcHBseSIsIndhaXQiLCJkZWxheSIsInNldFRpbWVvdXQiLCJHZW5Ob25EdXBsaWNhdGVJRCIsInJhbmRvbUxlbmd0aCIsImlkU3RyIiwiRGF0ZSIsIm5vdyIsInRvU3RyaW5nIiwiTWF0aCIsInJhbmRvbSIsInN1YnN0ciIsImZpbmRtZW51SUQiLCJwbHVnaW4iLCJjb21tYW5kIiwiaXNzdWIiLCJpbmRleCIsInJlcyIsInN1YmluZGV4IiwibWVudWNtZCIsInNldHRpbmdzIiwibWVudUNvbW1hbmRzIiwiZm9yRWFjaCIsIml0ZW0iLCJpZHgiLCJTdWJtZW51Q29tbWFuZHMiLCJmaW5kSW5kZXgiLCJ2IiwiaWQiLCJhcHBJY29ucyIsImFjdGl2ZURvY3VtZW50Iiwic2V0TWVudVZpc2liaWxpdHkiLCJjTWVudVZpc2liaWxpdHkiLCJyZXF1aXJlQXBpVmVyc2lvbiIsImFjdGl2ZVdpbmRvdyIsImRvY3VtZW50Iiwid2luZG93IiwiY01lbnVUb29sYmFyTW9kYWxCYXIiLCJnZXRFbGVtZW50QnlJZCIsInN0eWxlIiwidmlzaWJpbGl0eSIsInNldEJvdHRvbVZhbHVlIiwicG9zaXRpb25TdHlsZSIsInNldEF0dHJpYnV0ZSIsIm9mZnNldFdpZHRoIiwiY01lbnVCb3R0b21WYWx1ZSIsInJlcGVhdCIsImNNZW51TnVtUm93cyIsImVuIiwiTW9yZSIsIlJlZnJlc2giLCJBZGQiLCJEZWxldGUiLCJsb2NhbGUiLCJhciIsImNzIiwiZGEiLCJkZSIsImVzIiwiZnIiLCJoaSIsIml0IiwiamEiLCJrbyIsIm5sIiwibm4iLCJwbCIsInB0Iiwicm8iLCJydSIsInRyIiwibW9tZW50IiwidCIsInN0ciIsIkNob29zZUZyb21JY29uTGlzdCIsIkZ1enp5U3VnZ2VzdE1vZGFsIiwiY29uc3RydWN0b3IiLCJzdXBlciIsImFwcCIsInRoaXMiLCJzZXRQbGFjZWhvbGRlciIsImNhcGl0YWxKb2luIiwic3RyaW5nIiwic3BsaXQiLCJtYXAiLCJpY29uIiwidG9VcHBlckNhc2UiLCJzdWJzdHJpbmciLCJqb2luIiwiZ2V0SXRlbXMiLCJnZXRJdGVtVGV4dCIsInJlcGxhY2UiLCJ0cmltIiwicmVuZGVyU3VnZ2VzdGlvbiIsImljb25JdGVtIiwic3BhbiIsImNyZWF0ZVNwYW4iLCJjbHMiLCJhcHBlbmRDaGlsZCIsInNldEljb24iLCJvbkNob29zZUl0ZW0iLCJDdXN0b21JY29uIiwib3BlbiIsIm1lbnVJRCIsInB1c2giLCJzYXZlU2V0dGluZ3MiLCJkaXNwYXRjaEV2ZW50IiwiRXZlbnQiLCJjb25zb2xlIiwibG9nIiwibmFtZSIsIkNvbW1hbmRQaWNrZXIiLCJjb21tYW5kcyIsImxpc3RDb21tYW5kcyIsIk5vdGljZSIsIk1vZGFsIiwiY29udGFpbmVyRWwiLCJhZGRDbGFzcyIsIm9uT3BlbiIsImNvbnRlbnRFbCIsImNyZWF0ZUVsIiwidGV4dCIsInRleHRDb21wb25lbnQiLCJUZXh0QXJlYUNvbXBvbmVudCIsImlucHV0RWwiLCJjbGFzc0xpc3QiLCJhZGQiLCJzZXRWYWx1ZSIsIl9hIiwib25DaGFuZ2UiLCJkZWJvdW5jZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJzdWJtaXRFbnRlckNhbGxiYWNrIiwib25DbG9zZSIsImVtcHR5IiwiQ2hhbmdlQ21kbmFtZSIsIlRleHRDb21wb25lbnQiLCJvcGVuU2xpZGVyIiwidG9wZW0iLCJTbGlkZXJDb21wb25lbnQiLCJzZXRMaW1pdHMiLCJzZXREeW5hbWljVG9vbHRpcCIsIkFQUEVORF9NRVRIT0RTIiwiQUVTVEhFVElDX1NUWUxFUyIsIlBPU0lUSU9OX1NUWUxFUyIsIkRFRkFVTFRfU0VUVElOR1MiLCJhZXN0aGV0aWNTdHlsZSIsImFwcGVuZE1ldGhvZCIsInNob3VsZFNob3dNZW51T25TZWxlY3QiLCJjTWVudVdpZHRoIiwiY01lbnVGb250Q29sb3IiLCJjTWVudUJhY2tncm91bmRDb2xvciIsImF1dG9oaWRlIiwiY3VzdG9tX2JnMSIsImN1c3RvbV9iZzIiLCJjdXN0b21fYmczIiwiY3VzdG9tX2JnNCIsImN1c3RvbV9iZzUiLCJjdXN0b21fZmMxIiwiY3VzdG9tX2ZjMiIsImN1c3RvbV9mYzMiLCJjdXN0b21fZmM0IiwiY3VzdG9tX2ZjNSIsImlzTG9hZE9uTW9iaWxlIiwic2VsZkRlc3RydWN0IiwidG9vbEJhckVsZW1lbnQiLCJyZW1vdmUiLCJyb290U3BsaXRzIiwid29ya3NwYWNlIiwicm9vdFNwbGl0IiwiZmxvYXRpbmdTcGxpdCIsImNoaWxkcmVuIiwiY2hpbGQiLCJXb3Jrc3BhY2VXaW5kb3ciLCJnZXRSb290U3BsaXRzIiwibGVhZiIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJjTWVudVRvb2xiYXJQb3BvdmVyQmFyIiwiZWxlbWVudCIsImZpcnN0Q2hpbGQiLCJyZW1vdmVDaGlsZCIsImNsZWFyVG9vbGJhciIsImlzRXhpc3Rvb2xiYXIiLCJjb250YWluZXIiLCJfYiIsImFjdGl2ZUxlYWYiLCJ2aWV3IiwicXVlcnlTZWxlY3RvciIsImdldE5lc3RlZE9iamVjdCIsIm5lc3RlZE9iaiIsInBhdGhBcnIiLCJyZWR1Y2UiLCJvYmoiLCJrZXkiLCJ1bmRlZmluZWQiLCJzZXRIaWxpdGUiLCJrZXlzIiwiaG93IiwiZmxhdCIsImdldEhvdGtleSIsImNtZGlkIiwiaGlnaGxpZ2h0IiwiYXJyIiwiZmluZENvbW1hbmQiLCJkZWZrZXlzIiwiaG90a2V5cyIsImNrIiwiaG90a2V5TWFuYWdlciIsImN1c3RvbUtleXMiLCJpc1NvdXJjZSIsImFjdGl2ZVZpZXciLCJnZXRNb2RlIiwiY2hlY2tIdG1sIiwiaHRtbFN0ciIsInRlc3QiLCJjcmVhdGVUYWJsZWNlbGwiLCJlbCIsInRhYiIsInJvd3MiLCJybGVuIiwibGVuZ3RoIiwiaSIsImNlbGxzIiwiaiIsIm9uY2xpY2siLCJiYWNrY29sb3IiLCJiYWNrZ3JvdW5kQ29sb3IiLCJzZXRjb2xvckhleCIsInNldEZvbnRjb2xvciIsImZpbGwiLCJzZXRCYWNrZ3JvdW5kY29sb3IiLCJjb2xvciIsImVkaXRvciIsInNlbGVjdFRleHQiLCJnZXRTZWxlY3Rpb24iLCJfaHRtbDEiLCJfaHRtbDIiLCJyZXBsYWNlU2VsZWN0aW9uIiwiZXhlYyIsImV4ZWN1dGVDb21tYW5kQnlJZCIsInRoYXQiLCJhQ29sb3IiLCJzdHJIZXgiLCJoZXgiLCJOdW1iZXIiLCJhTnVtIiwibnVtSGV4IiwicXVpdGVGb3JtYXRicnVzaGVzIiwiVGVtcF9Ob3RpY2UiLCJoaWRlIiwic2V0RU5fQkdfRm9ybWF0X0JydXNoIiwic2V0RU5fRm9udENvbG9yX0Zvcm1hdF9CcnVzaCIsInNldEVOX1RleHRfRm9ybWF0X0JydXNoIiwic2V0SGVhZGVyIiwiX3N0ciIsIm5ld3N0ciIsImxpbmV0ZXh0IiwiZ2V0TGluZSIsImdldEN1cnNvciIsImxpbmUiLCJsaW5lbmQiLCJyZWdleCIsIm1hdGNoc3RyIiwibWF0Y2giLCJnZXRSYW5nZSIsImNoIiwic2V0TGluZSIsInNldEN1cnNvciIsInNldEZvcm1hdGVyYXNlciIsIm5vdGljZUVsIiwiaW5uZXJUZXh0IiwibWRUZXh0IiwiY3JlYXRlRm9sbG93aW5nYmFyIiwic29tZXRoaW5nU2VsZWN0ZWQiLCJoZWlnaHQiLCJyZW1vdmVDbGFzcyIsImVkaXRvclJlY3QiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ0b29sYmFyV2lkdGgiLCJ0b29sYmFySGVpZ2h0Iiwib2Zmc2V0SGVpZ2h0IiwiY29vcmRzIiwiY3Vyc29yRnJvbSIsIm1heCIsImN1cnNvckNvb3JkcyIsImNvb3Jkc0F0UG9zIiwib2Zmc2V0IiwicG9zVG9PZmZzZXQiLCJfYyIsImNtIiwiZ2V0Q29vcmRzIiwiaXNTZWxlY3Rpb25Gcm9tQm90dG9tVG9Ub3AiLCJyaWdodE1hcmdpbiIsImxlZnRTaWRlRG9ja1dpZHRoIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsImNsaWVudFdpZHRoIiwiX2UiLCJfZCIsImxlZnRQb3NpdGlvbiIsImxlZnQiLCJyaWdodCIsInRvcFBvc2l0aW9uIiwidG9wIiwiYm90dG9tIiwiY01lbnVUb29sYmFyUG9wb3ZlciIsImdlbmVyYXRlTWVudSIsImJ0bndpZHRoIiwibGVhZndpZHRoIiwiY01lbnVUb29sYmFyIiwiY2xhc3NOYW1lIiwiUG9wb3Zlck1lbnUiLCJjdXJyZW50bGVhZiIsIm1hcmtkb3duRG9tIiwiaW5zZXJ0QWRqYWNlbnRFbGVtZW50IiwibWFya2Rvd25Eb20yIiwiYm9keSIsInRpcCIsIl9idG4iLCJzZXRJU19NT1JFX0J1dHRvbiIsIkJ1dHRvbkNvbXBvbmVudCIsInNldENsYXNzIiwiYnV0dG9uRWwiLCJpbm5lckhUTUwiLCJzdWJtZW51Iiwic2VsZWN0b3IiLCJkaXYiLCJjcmVhdGVEaXYiLCJzdWJpdGVtIiwiaG90a2V5Iiwic3ViX2J0biIsInNldFRvb2x0aXAiLCJvbkNsaWNrIiwiYnV0dG9uMiIsInN1Ym1lbnUyIiwiY29sb3JwaWNrZXIiLCJzZXR0aW5nIiwib3BlblRhYkJ5SWQiLCJzZXR0aW5nRUkiLCJhY3RpdmVUYWIiLCJjYWxsIiwiYmFja2NvbG9ycGlja2VyIiwiYnV0dG9uIiwiZ2V0QWN0aXZlVmlld09mVHlwZSIsIkl0ZW1WaWV3IiwiZ2V0Vmlld1R5cGUiLCJNb3JlY29udGFpbmVyIiwiSVNfTU9SRV9CdXR0b24iLCJjTW9yZU1lbnUiLCJtb3JlYnV0dG9uIiwiY3JlYXRlTW9yZW1lbnUiLCJhYnMiLCJpc0xvYWRNb2JpbGUiLCJmb250Y29sb3IiLCJiZ2NvbG9yIiwiZm9udF9jb2xvdXJfZG9tIiwiYmFja2dyb3VuZF9jb2xvdXJfZG9tIiwic2V0c3ZnQ29sb3IiLCJjcmVhdGVNZW51Iiwib3duS2V5cyIsIm9iamVjdCIsImVudW1lcmFibGVPbmx5IiwiT2JqZWN0IiwiZ2V0T3duUHJvcGVydHlTeW1ib2xzIiwic3ltYm9scyIsImZpbHRlciIsInN5bSIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsImVudW1lcmFibGUiLCJfb2JqZWN0U3ByZWFkMiIsInRhcmdldCIsImFyZ3VtZW50cyIsInNvdXJjZSIsIl9kZWZpbmVQcm9wZXJ0eSIsImdldE93blByb3BlcnR5RGVzY3JpcHRvcnMiLCJkZWZpbmVQcm9wZXJ0aWVzIiwiZGVmaW5lUHJvcGVydHkiLCJfdHlwZW9mIiwiU3ltYm9sIiwiaXRlcmF0b3IiLCJwcm90b3R5cGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsIl9leHRlbmRzIiwiYXNzaWduIiwiaGFzT3duUHJvcGVydHkiLCJfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMiLCJleGNsdWRlZCIsInNvdXJjZUtleXMiLCJpbmRleE9mIiwiX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UiLCJzb3VyY2VTeW1ib2xLZXlzIiwicHJvcGVydHlJc0VudW1lcmFibGUiLCJ1c2VyQWdlbnQiLCJwYXR0ZXJuIiwibmF2aWdhdG9yIiwiSUUxMU9yTGVzcyIsIkVkZ2UiLCJGaXJlRm94IiwiU2FmYXJpIiwiSU9TIiwiQ2hyb21lRm9yQW5kcm9pZCIsImNhcHR1cmVNb2RlIiwiY2FwdHVyZSIsInBhc3NpdmUiLCJvbiIsImV2ZW50IiwiZm4iLCJvZmYiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwibWF0Y2hlcyIsIm1zTWF0Y2hlc1NlbGVjdG9yIiwid2Via2l0TWF0Y2hlc1NlbGVjdG9yIiwiXyIsImdldFBhcmVudE9ySG9zdCIsImhvc3QiLCJub2RlVHlwZSIsInBhcmVudE5vZGUiLCJjbG9zZXN0IiwiY3R4IiwiaW5jbHVkZUNUWCIsIl90aHJvdHRsZVRpbWVvdXQiLCJSX1NQQUNFIiwidG9nZ2xlQ2xhc3MiLCJzdGF0ZSIsImNzcyIsInByb3AiLCJ2YWwiLCJkZWZhdWx0VmlldyIsImdldENvbXB1dGVkU3R5bGUiLCJjdXJyZW50U3R5bGUiLCJtYXRyaXgiLCJzZWxmT25seSIsImFwcGxpZWRUcmFuc2Zvcm1zIiwidHJhbnNmb3JtIiwibWF0cml4Rm4iLCJET01NYXRyaXgiLCJXZWJLaXRDU1NNYXRyaXgiLCJDU1NNYXRyaXgiLCJNU0NTU01hdHJpeCIsImZpbmQiLCJ0YWdOYW1lIiwibGlzdCIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwibiIsImdldFdpbmRvd1Njcm9sbGluZ0VsZW1lbnQiLCJzY3JvbGxpbmdFbGVtZW50IiwiZG9jdW1lbnRFbGVtZW50IiwiZ2V0UmVjdCIsInJlbGF0aXZlVG9Db250YWluaW5nQmxvY2siLCJyZWxhdGl2ZVRvTm9uU3RhdGljUGFyZW50IiwidW5kb1NjYWxlIiwiZWxSZWN0Iiwid2lkdGgiLCJpbm5lckhlaWdodCIsImlubmVyV2lkdGgiLCJjb250YWluZXJSZWN0IiwicGFyc2VJbnQiLCJlbE1hdHJpeCIsInNjYWxlWCIsImEiLCJzY2FsZVkiLCJkIiwiaXNTY3JvbGxlZFBhc3QiLCJlbFNpZGUiLCJwYXJlbnRTaWRlIiwicGFyZW50IiwiZ2V0UGFyZW50QXV0b1Njcm9sbEVsZW1lbnQiLCJlbFNpZGVWYWwiLCJwYXJlbnRTaWRlVmFsIiwiZ2V0Q2hpbGQiLCJjaGlsZE51bSIsIm9wdGlvbnMiLCJpbmNsdWRlRHJhZ0VsIiwiY3VycmVudENoaWxkIiwiZGlzcGxheSIsIlNvcnRhYmxlIiwiZ2hvc3QiLCJkcmFnZ2VkIiwiZHJhZ2dhYmxlIiwibGFzdENoaWxkIiwibGFzdCIsImxhc3RFbGVtZW50Q2hpbGQiLCJwcmV2aW91c0VsZW1lbnRTaWJsaW5nIiwibm9kZU5hbWUiLCJjbG9uZSIsImdldFJlbGF0aXZlU2Nyb2xsT2Zmc2V0Iiwib2Zmc2V0TGVmdCIsIm9mZnNldFRvcCIsIndpblNjcm9sbGVyIiwic2Nyb2xsTGVmdCIsInNjcm9sbFRvcCIsImluY2x1ZGVTZWxmIiwiZWxlbSIsImdvdFNlbGYiLCJzY3JvbGxXaWR0aCIsImNsaWVudEhlaWdodCIsInNjcm9sbEhlaWdodCIsImVsZW1DU1MiLCJvdmVyZmxvd1giLCJvdmVyZmxvd1kiLCJpc1JlY3RFcXVhbCIsInJlY3QxIiwicmVjdDIiLCJyb3VuZCIsInRocm90dGxlIiwiY2FsbGJhY2siLCJtcyIsImFyZ3MiLCJfdGhpcyIsInNjcm9sbEJ5IiwieCIsInkiLCJQb2x5bWVyIiwiJCIsImpRdWVyeSIsIlplcHRvIiwiZG9tIiwiY2xvbmVOb2RlIiwiZXhwYW5kbyIsImdldFRpbWUiLCJBbmltYXRpb25TdGF0ZU1hbmFnZXIiLCJhbmltYXRpb25DYWxsYmFja0lkIiwiYW5pbWF0aW9uU3RhdGVzIiwiY2FwdHVyZUFuaW1hdGlvblN0YXRlIiwiYW5pbWF0aW9uIiwic2xpY2UiLCJyZWN0IiwiZnJvbVJlY3QiLCJ0aGlzQW5pbWF0aW9uRHVyYXRpb24iLCJjaGlsZE1hdHJpeCIsImYiLCJhZGRBbmltYXRpb25TdGF0ZSIsInJlbW92ZUFuaW1hdGlvblN0YXRlIiwic3BsaWNlIiwiaW5kZXhPZk9iamVjdCIsImFuaW1hdGVBbGwiLCJjbGVhclRpbWVvdXQiLCJhbmltYXRpbmciLCJhbmltYXRpb25UaW1lIiwidGltZSIsInRvUmVjdCIsInByZXZGcm9tUmVjdCIsInByZXZUb1JlY3QiLCJhbmltYXRpbmdSZWN0IiwidGFyZ2V0TWF0cml4Iiwic3FydCIsInBvdyIsImNhbGN1bGF0ZVJlYWxUaW1lIiwiYW5pbWF0ZSIsImFuaW1hdGlvblJlc2V0VGltZXIiLCJjdXJyZW50UmVjdCIsImR1cmF0aW9uIiwidHJhbnNsYXRlWCIsInRyYW5zbGF0ZVkiLCJhbmltYXRpbmdYIiwiYW5pbWF0aW5nWSIsImZvclJlcGFpbnREdW1teSIsInJlcGFpbnQiLCJlYXNpbmciLCJhbmltYXRlZCIsInBsdWdpbnMiLCJkZWZhdWx0cyIsImluaXRpYWxpemVCeURlZmF1bHQiLCJQbHVnaW5NYW5hZ2VyIiwibW91bnQiLCJvcHRpb24iLCJwIiwicGx1Z2luTmFtZSIsImNvbmNhdCIsInBsdWdpbkV2ZW50IiwiZXZlbnROYW1lIiwic29ydGFibGUiLCJldnQiLCJldmVudENhbmNlbGVkIiwiY2FuY2VsIiwiZXZlbnROYW1lR2xvYmFsIiwiaW5pdGlhbGl6ZVBsdWdpbnMiLCJpbml0aWFsaXplZCIsIm1vZGlmaWVkIiwibW9kaWZ5T3B0aW9uIiwiZ2V0RXZlbnRQcm9wZXJ0aWVzIiwiZXZlbnRQcm9wZXJ0aWVzIiwibW9kaWZpZWRWYWx1ZSIsIm9wdGlvbkxpc3RlbmVycyIsIl9leGNsdWRlZCIsIl9yZWYiLCJvcmlnaW5hbEV2ZW50IiwiZGF0YSIsImJpbmQiLCJkcmFnRWwiLCJwYXJlbnRFbCIsImdob3N0RWwiLCJyb290RWwiLCJuZXh0RWwiLCJsYXN0RG93bkVsIiwiY2xvbmVFbCIsImNsb25lSGlkZGVuIiwiZHJhZ1N0YXJ0ZWQiLCJtb3ZlZCIsInB1dFNvcnRhYmxlIiwiYWN0aXZlU29ydGFibGUiLCJhY3RpdmUiLCJvbGRJbmRleCIsIm9sZERyYWdnYWJsZUluZGV4IiwibmV3SW5kZXgiLCJuZXdEcmFnZ2FibGVJbmRleCIsImhpZGVHaG9zdEZvclRhcmdldCIsIl9oaWRlR2hvc3RGb3JUYXJnZXQiLCJ1bmhpZGVHaG9zdEZvclRhcmdldCIsIl91bmhpZGVHaG9zdEZvclRhcmdldCIsImNsb25lTm93SGlkZGVuIiwiY2xvbmVOb3dTaG93biIsImRpc3BhdGNoU29ydGFibGVFdmVudCIsIl9kaXNwYXRjaEV2ZW50IiwiaW5mbyIsInRhcmdldEVsIiwidG9FbCIsImZyb21FbCIsImV4dHJhRXZlbnRQcm9wZXJ0aWVzIiwib25OYW1lIiwiY2hhckF0IiwiQ3VzdG9tRXZlbnQiLCJjcmVhdGVFdmVudCIsImluaXRFdmVudCIsImJ1YmJsZXMiLCJjYW5jZWxhYmxlIiwidG8iLCJmcm9tIiwicHVsbE1vZGUiLCJsYXN0UHV0TW9kZSIsImFsbEV2ZW50UHJvcGVydGllcyIsImFjdGl2ZUdyb3VwIiwidGFwRXZ0IiwidG91Y2hFdnQiLCJsYXN0RHgiLCJsYXN0RHkiLCJ0YXBEaXN0YW5jZUxlZnQiLCJ0YXBEaXN0YW5jZVRvcCIsImxhc3RUYXJnZXQiLCJsYXN0RGlyZWN0aW9uIiwidGFyZ2V0TW92ZURpc3RhbmNlIiwiZ2hvc3RSZWxhdGl2ZVBhcmVudCIsImF3YWl0aW5nRHJhZ1N0YXJ0ZWQiLCJpZ25vcmVOZXh0Q2xpY2siLCJzb3J0YWJsZXMiLCJwYXN0Rmlyc3RJbnZlcnRUaHJlc2giLCJpc0NpcmN1bXN0YW50aWFsSW52ZXJ0IiwiZ2hvc3RSZWxhdGl2ZVBhcmVudEluaXRpYWxTY3JvbGwiLCJfc2lsZW50Iiwic2F2ZWRJbnB1dENoZWNrZWQiLCJkb2N1bWVudEV4aXN0cyIsIlBvc2l0aW9uR2hvc3RBYnNvbHV0ZWx5IiwiQ1NTRmxvYXRQcm9wZXJ0eSIsInN1cHBvcnREcmFnZ2FibGUiLCJjcmVhdGVFbGVtZW50Iiwic3VwcG9ydENzc1BvaW50ZXJFdmVudHMiLCJjc3NUZXh0IiwicG9pbnRlckV2ZW50cyIsIl9kZXRlY3REaXJlY3Rpb24iLCJlbENTUyIsImVsV2lkdGgiLCJwYWRkaW5nTGVmdCIsInBhZGRpbmdSaWdodCIsImJvcmRlckxlZnRXaWR0aCIsImJvcmRlclJpZ2h0V2lkdGgiLCJjaGlsZDEiLCJjaGlsZDIiLCJmaXJzdENoaWxkQ1NTIiwic2Vjb25kQ2hpbGRDU1MiLCJmaXJzdENoaWxkV2lkdGgiLCJtYXJnaW5MZWZ0IiwibWFyZ2luUmlnaHQiLCJzZWNvbmRDaGlsZFdpZHRoIiwiZmxleERpcmVjdGlvbiIsImdyaWRUZW1wbGF0ZUNvbHVtbnMiLCJ0b3VjaGluZ1NpZGVDaGlsZDIiLCJjbGVhciIsIl9wcmVwYXJlR3JvdXAiLCJ0b0ZuIiwicHVsbCIsInNhbWVHcm91cCIsImdyb3VwIiwib3RoZXJHcm91cCIsIm9yaWdpbmFsR3JvdXAiLCJjaGVja1B1bGwiLCJjaGVja1B1dCIsInB1dCIsInJldmVydENsb25lIiwicHJldmVudERlZmF1bHQiLCJzdG9wUHJvcGFnYXRpb24iLCJzdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24iLCJuZWFyZXN0RW1wdHlJbnNlcnREZXRlY3RFdmVudCIsInRvdWNoZXMiLCJuZWFyZXN0IiwiY2xpZW50WCIsImNsaWVudFkiLCJzb21lIiwidGhyZXNob2xkIiwiZW1wdHlJbnNlcnRUaHJlc2hvbGQiLCJpbnNpZGVIb3Jpem9udGFsbHkiLCJpbnNpZGVWZXJ0aWNhbGx5IiwicmV0IiwiX29uRHJhZ092ZXIiLCJfY2hlY2tPdXRzaWRlVGFyZ2V0RWwiLCJfaXNPdXRzaWRlVGhpc0VsIiwic29ydCIsImRpc2FibGVkIiwic3RvcmUiLCJoYW5kbGUiLCJzd2FwVGhyZXNob2xkIiwiaW52ZXJ0U3dhcCIsImludmVydGVkU3dhcFRocmVzaG9sZCIsInJlbW92ZUNsb25lT25IaWRlIiwiZGlyZWN0aW9uIiwiZ2hvc3RDbGFzcyIsImNob3NlbkNsYXNzIiwiZHJhZ0NsYXNzIiwiaWdub3JlIiwicHJldmVudE9uRmlsdGVyIiwic2V0RGF0YSIsImRhdGFUcmFuc2ZlciIsInRleHRDb250ZW50IiwiZHJvcEJ1YmJsZSIsImRyYWdvdmVyQnViYmxlIiwiZGF0YUlkQXR0ciIsImRlbGF5T25Ub3VjaE9ubHkiLCJ0b3VjaFN0YXJ0VGhyZXNob2xkIiwiZGV2aWNlUGl4ZWxSYXRpbyIsImZvcmNlRmFsbGJhY2siLCJmYWxsYmFja0NsYXNzIiwiZmFsbGJhY2tPbkJvZHkiLCJmYWxsYmFja1RvbGVyYW5jZSIsImZhbGxiYWNrT2Zmc2V0Iiwic3VwcG9ydFBvaW50ZXIiLCJuYXRpdmVEcmFnZ2FibGUiLCJfb25UYXBTdGFydCIsImdldCIsIl9vbk1vdmUiLCJkcmFnUmVjdCIsInRhcmdldFJlY3QiLCJ3aWxsSW5zZXJ0QWZ0ZXIiLCJyZXRWYWwiLCJvbk1vdmVGbiIsIm9uTW92ZSIsImRyYWdnZWRSZWN0IiwicmVsYXRlZCIsInJlbGF0ZWRSZWN0IiwiX2Rpc2FibGVEcmFnZ2FibGUiLCJfdW5zaWxlbnQiLCJfZ2VuZXJhdGVJZCIsInNyYyIsImhyZWYiLCJzdW0iLCJjaGFyQ29kZUF0IiwiX25leHRUaWNrIiwiX2NhbmNlbE5leHRUaWNrIiwiY29udGFpbnMiLCJfZ2V0RGlyZWN0aW9uIiwidHlwZSIsInRvdWNoIiwicG9pbnRlclR5cGUiLCJvcmlnaW5hbFRhcmdldCIsInNoYWRvd1Jvb3QiLCJwYXRoIiwiY29tcG9zZWRQYXRoIiwicm9vdCIsImlucHV0cyIsImNoZWNrZWQiLCJfc2F2ZUlucHV0Q2hlY2tlZFN0YXRlIiwiaXNDb250ZW50RWRpdGFibGUiLCJjcml0ZXJpYSIsIl9wcmVwYXJlRHJhZ1N0YXJ0IiwiZHJhZ1N0YXJ0Rm4iLCJvd25lckRvY3VtZW50IiwibmV4dFNpYmxpbmciLCJfbGFzdFgiLCJfbGFzdFkiLCJfb25Ecm9wIiwiX2Rpc2FibGVEZWxheWVkRHJhZ0V2ZW50cyIsIl90cmlnZ2VyRHJhZ1N0YXJ0IiwiX2Rpc2FibGVEZWxheWVkRHJhZyIsIl9kZWxheWVkRHJhZ1RvdWNoTW92ZUhhbmRsZXIiLCJfZHJhZ1N0YXJ0VGltZXIiLCJmbG9vciIsIl9vblRvdWNoTW92ZSIsIl9vbkRyYWdTdGFydCIsInNlbGVjdGlvbiIsInJlbW92ZUFsbFJhbmdlcyIsImVyciIsIl9kcmFnU3RhcnRlZCIsImZhbGxiYWNrIiwiX2FwcGVuZEdob3N0IiwiX251bGxpbmciLCJfZW11bGF0ZURyYWdPdmVyIiwiZWxlbWVudEZyb21Qb2ludCIsImdob3N0TWF0cml4IiwicmVsYXRpdmVTY3JvbGxPZmZzZXQiLCJkeCIsImR5IiwiYiIsImMiLCJjc3NNYXRyaXgiLCJyZW1vdmVBdHRyaWJ1dGUiLCJfaGlkZUNsb25lIiwiY2xvbmVJZCIsImluc2VydEJlZm9yZSIsIl9sb29wSWQiLCJzZXRJbnRlcnZhbCIsImVmZmVjdEFsbG93ZWQiLCJfZHJhZ1N0YXJ0SWQiLCJyZXZlcnQiLCJ2ZXJ0aWNhbCIsImlzT3duZXIiLCJjYW5Tb3J0IiwiZnJvbVNvcnRhYmxlIiwiY29tcGxldGVkRmlyZWQiLCJkcmFnT3ZlckV2ZW50IiwiX2lnbm9yZVdoaWxlQW5pbWF0aW5nIiwiY29tcGxldGVkIiwiZWxMYXN0Q2hpbGQiLCJzcGFjZXIiLCJfZ2hvc3RJc0xhc3QiLCJjaGFuZ2VkIiwiX2dob3N0SXNGaXJzdCIsInRhcmdldEJlZm9yZUZpcnN0U3dhcCIsInNpYmxpbmciLCJkaWZmZXJlbnRMZXZlbCIsImRpZmZlcmVudFJvd0NvbCIsImRyYWdFbFMxT3BwIiwiZHJhZ0VsUzJPcHAiLCJkcmFnRWxPcHBMZW5ndGgiLCJ0YXJnZXRTMU9wcCIsInRhcmdldFMyT3BwIiwidGFyZ2V0T3BwTGVuZ3RoIiwiX2RyYWdFbEluUm93Q29sdW1uIiwic2lkZTEiLCJzY3JvbGxlZFBhc3RUb3AiLCJzY3JvbGxCZWZvcmUiLCJpc0xhc3RUYXJnZXQiLCJtb3VzZU9uQXhpcyIsInRhcmdldExlbmd0aCIsInRhcmdldFMxIiwidGFyZ2V0UzIiLCJpbnZlcnQiLCJfZ2V0SW5zZXJ0RGlyZWN0aW9uIiwiX2dldFN3YXBEaXJlY3Rpb24iLCJkcmFnSW5kZXgiLCJuZXh0RWxlbWVudFNpYmxpbmciLCJhZnRlciIsIm1vdmVWZWN0b3IiLCJleHRyYSIsImF4aXMiLCJpbnNlcnRpb24iLCJfc2hvd0Nsb25lIiwiX29mZk1vdmVFdmVudHMiLCJfb2ZmVXBFdmVudHMiLCJjbGVhckludGVydmFsIiwic2F2ZSIsImhhbmRsZUV2ZW50IiwiZHJvcEVmZmVjdCIsIl9nbG9iYWxEcmFnT3ZlciIsInRvQXJyYXkiLCJvcmRlciIsImdldEF0dHJpYnV0ZSIsInVzZUFuaW1hdGlvbiIsIml0ZW1zIiwic2V0IiwiZGVzdHJveSIsIkFycmF5IiwidXRpbHMiLCJpcyIsImV4dGVuZCIsImRzdCIsIm5leHRUaWNrIiwiY2FuY2VsTmV4dFRpY2siLCJkZXRlY3REaXJlY3Rpb24iLCJfbGVuIiwiX2tleSIsImNyZWF0ZSIsInZlcnNpb24iLCJzY3JvbGxFbCIsInNjcm9sbFJvb3RFbCIsImxhc3RBdXRvU2Nyb2xsWCIsImxhc3RBdXRvU2Nyb2xsWSIsInRvdWNoRXZ0JDEiLCJwb2ludGVyRWxlbUNoYW5nZWRJbnRlcnZhbCIsImF1dG9TY3JvbGxzIiwic2Nyb2xsaW5nIiwiY2xlYXJBdXRvU2Nyb2xscyIsImF1dG9TY3JvbGwiLCJwaWQiLCJjbGVhclBvaW50ZXJFbGVtQ2hhbmdlZEludGVydmFsIiwiaXNGYWxsYmFjayIsInNjcm9sbCIsInNjcm9sbEN1c3RvbUZuIiwic2VucyIsInNjcm9sbFNlbnNpdGl2aXR5Iiwic3BlZWQiLCJzY3JvbGxTcGVlZCIsInNjcm9sbFRoaXNJbnN0YW5jZSIsInNjcm9sbEZuIiwibGF5ZXJzT3V0IiwiY3VycmVudFBhcmVudCIsImNhblNjcm9sbFgiLCJjYW5TY3JvbGxZIiwic2Nyb2xsUG9zWCIsInNjcm9sbFBvc1kiLCJ2eCIsInZ5IiwibGF5ZXIiLCJzY3JvbGxPZmZzZXRZIiwic2Nyb2xsT2Zmc2V0WCIsImJ1YmJsZVNjcm9sbCIsImRyb3AiLCJ0b1NvcnRhYmxlIiwiY2hhbmdlZFRvdWNoZXMiLCJvblNwaWxsIiwiUmV2ZXJ0IiwiUmVtb3ZlIiwic3RhcnRJbmRleCIsImRyYWdTdGFydCIsIl9yZWYyIiwiX3JlZjMiLCJfcmVmNCIsInBhcmVudFNvcnRhYmxlIiwiQXV0b1Njcm9sbCIsImZvcmNlQXV0b1Njcm9sbEZhbGxiYWNrIiwiX2hhbmRsZUF1dG9TY3JvbGwiLCJfaGFuZGxlRmFsbGJhY2tBdXRvU2Nyb2xsIiwiZHJhZ092ZXJDb21wbGV0ZWQiLCJkcmFnT3ZlckJ1YmJsZSIsIm51bGxpbmciLCJvZ0VsZW1TY3JvbGxlciIsIm5ld0VsZW0iLCJzZWxmIiwibW9kdWxlIiwiZXhwb3J0cyIsIm8iLCJyIiwidG9TdHJpbmdUYWciLCJkZWZhdWx0IiwiTCIsIkhUTUxDb2xsZWN0aW9uIiwiTm9kZUxpc3QiLCJpc0FycmF5IiwicyIsImFkanVzdGFibGVJbnB1dE51bWJlcnMiLCJjcmVhdGVFbGVtZW50RnJvbVN0cmluZyIsImNyZWF0ZUZyb21UZW1wbGF0ZSIsImV2ZW50UGF0aCIsImwiLCJyZXNvbHZlRWxlbWVudCIsImZpcnN0RWxlbWVudENoaWxkIiwicGFyZW50RWxlbWVudCIsIkVsZW1lbnQiLCJzaGlmdEtleSIsImN0cmxLZXkiLCJkZWx0YVkiLCJzZWxlY3Rpb25TdGFydCIsImZvY3VzIiwic2V0U2VsZWN0aW9uUmFuZ2UiLCJtaW4iLCJ1IiwiaCIsIm0iLCJnIiwiaXNOYU4iLCJ3IiwidG9Mb3dlckNhc2UiLCJnZXRDb250ZXh0IiwiZmlsbFN0eWxlIiwiY215ayIsInJnYmEiLCJoc2xhIiwiaHN2YSIsImhleGEiLCJ2YWx1ZXMiLCJBIiwidG9GaXhlZCIsInRvSFNWQSIsInRvSFNMQSIsInRvUkdCQSIsInRvQ01ZSyIsInRvSEVYQSIsInBhZFN0YXJ0IiwiQyIsImxvY2siLCJvbmNoYW5nZSIsIm9uc3RvcCIsIl9rZXlib2FyZCIsImFjdGl2ZUVsZW1lbnQiLCJ3cmFwcGVyIiwidXBkYXRlIiwiY2FjaGUiLCJzdGFydHNXaXRoIiwiX3RhcHN0YXJ0IiwiX3RhcHN0b3AiLCJfdGFwbW92ZSIsInRyaWdnZXIiLCJrIiwiZWxlbWVudHMiLCJTIiwidmFyaWFudEZsaXBPcmRlciIsInN0YXJ0IiwibWlkZGxlIiwiZW5kIiwicG9zaXRpb25GbGlwT3JkZXIiLCJwb3NpdGlvbiIsIm1hcmdpbiIsIk8iLCJ2cyIsInZtIiwidmUiLCJocyIsImhtIiwiaGUiLCJFIiwiaW5pdCIsInNob3ciLCJjaGFuZ2UiLCJjaGFuZ2VzdG9wIiwic3dhdGNoc2VsZWN0IiwiREVGQVVMVF9PUFRJT05TIiwic3dhdGNoZXMiLCJjb21wb25lbnRzIiwidGhlbWUiLCJzbGlkZXJzIiwibG9ja09wYWNpdHkiLCJwYWRkaW5nIiwiaW5jbHVkZXMiLCJpbnRlcmFjdGlvbiIsInByZXZpZXciLCJvcGFjaXR5IiwiaHVlIiwicGFsZXR0ZSIsIl9wcmVCdWlsZCIsIl9idWlsZENvbXBvbmVudHMiLCJfYmluZEV2ZW50cyIsIl9maW5hbEJ1aWxkIiwiYWRkU3dhdGNoIiwiX3Jvb3QiLCJfbmFub3BvcCIsIkhUTUxFbGVtZW50IiwicmVmZXJlbmNlIiwicG9wcGVyIiwiRXJyb3IiLCJfdCIsIl9zZXR1cEFuaW1hdGlvbkZyYW1lIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwic2V0Q29sb3IiLCJfcmVQb3NpdGlvbmluZ1BpY2tlciIsImRlZmF1bHRSZXByZXNlbnRhdGlvbiIsIl9yZXByZXNlbnRhdGlvbiIsInNldENvbG9yUmVwcmVzZW50YXRpb24iLCJzaG93QWx3YXlzIiwiX2luaXRpYWxpemluZ0FjdGl2ZSIsIl9lbWl0IiwidXNlQXNCdXR0b24iLCJpbmxpbmUiLCJhcHBDbGFzcyIsImlucHV0IiwiaGlkZGVuIiwicmVwbGFjZUNoaWxkIiwiZGlzYWJsZSIsImNvbXBhcmlzb24iLCJ0cmFuc2l0aW9uIiwibGFzdENvbG9yIiwiX2NvbG9yIiwiX2xhc3RDb2xvciIsInBpY2tlciIsImN1cnJlbnRDb2xvciIsIl9yZWNhbGMiLCJfdXBkYXRlT3V0cHV0IiwiYmFja2dyb3VuZCIsInNldFByb3BlcnR5IiwiX3N3YXRjaENvbG9ycyIsInNsaWRlciIsInNlbGVjdGFibGUiLCJfY29tcG9uZW50cyIsIl9jbGVhckNvbG9yIiwic2V0SFNWQSIsImFwcGx5Q29sb3IiLCJjbG9zZVdpdGhLZXkiLCJpc09wZW4iLCJjb2RlIiwiYWRqdXN0YWJsZU51bWJlcnMiLCJnZXRDb2xvclJlcHJlc2VudGF0aW9uIiwidG9QcmVjaXNpb24iLCJhdXRvUmVwb3NpdGlvbiIsImNsb3NlT25TY3JvbGwiLCJfZXZlbnRCaW5kaW5ncyIsIm91dHB1dFByZWNpc2lvbiIsIl9wYXJzZUxvY2FsQ29sb3IiLCJpMThuIiwiSTE4Tl9ERUZBVUxUUyIsIl9ldmVudExpc3RlbmVyIiwicmVtb3ZlU3dhdGNoIiwiY2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJkZXN0cm95QW5kUmVtb3ZlIiwiY2xpY2siLCJnZXRDb2xvciIsImdldFNlbGVjdGVkQ29sb3IiLCJnZXRSb290IiwiZW5hYmxlIiwiZ2V0UGlja3JTZXR0aW5ncyIsIm9wdHMiLCJpc1ZpZXciLCJkZWZhdWx0Q29sb3IiLCJvblBpY2tyQ2FuY2VsIiwiaW5zdGFuY2UiLCJnZXRDb21hbmRpbmRleCIsImNNZW51VG9vbGJhclNldHRpbmdUYWIiLCJQbHVnaW5TZXR0aW5nVGFiIiwiU2V0dGluZyIsInNldE5hbWUiLCJzZXREZXNjIiwiYWRkRHJvcGRvd24iLCJkcm9wZG93biIsIm1ldGhvZHMiLCJtZXRob2QiLCJhZGRPcHRpb25zIiwiYWVzdGhldGljcyIsImFlc3RoZXRpYyIsInBvc290aW9ucyIsInBvc290aW9uIiwiYWRkVG9nZ2xlIiwidG9nZ2xlIiwiYWRkU2xpZGVyIiwiYWRkQnV0dG9uIiwicmVsb2FkQnV0dG9uIiwicGlja3IiLCJQaWNrciIsImNvbnRyb2xFbCIsInNlbGVjdCIsImNNZW51VG9vbGJhckNvbW1hbmRzQ29udGFpbmVyIiwiZHJhZ2VsZSIsIm9uU29ydCIsImFycmF5UmVzdWx0IiwicmVtb3ZlZCIsIm9uU3RhcnQiLCJuZXdDb21tYW5kIiwic2V0dGluZ0VsIiwiYWRkaWNvbiIsImRlbGV0ZUJ1dHRvbiIsImNNZW51VG9vbGJhckNvbW1hbmRzQ29udGFpbmVyX3N1YiIsInN1YnJlc3VsdCIsImRhdGFzZXQiLCJlcnJvciIsInN1YkNvbW1hbmQiLCJzdWJzZXR0aW5nIiwiY2hhbmdlbmFtZSIsIm5hbWVFbCIsImFkZHN1YkJ1dHRvbiIsImljb25zIiwiY01lbnVUb29sYmFyU3ViIiwiY01lbnVUb29sYmFyQWRkIiwiY01lbnVUb29sYmFyRGVsZXRlIiwiY01lbnVUb29sYmFyUmVsb2FkIiwib2JzaWRpYW4iLCJhZGRJY29ucyIsImFkZEljb24iLCJjTWVudVRvb2xiYXJQbHVnaW4iLCJQbHVnaW4iLCJtb2RDb21tYW5kcyIsImhhbmRsZWNNZW51VG9vbGJhciIsInRvb2xiYXIiLCJoYW5kbGVjTWVudVRvb2xiYXJfbGF5b3V0IiwiaGFuZGxlY01lbnVUb29sYmFyX3Jlc2l6ZSIsIkxlYWZfV2lkdGgiLCJyZXNldFRvb2xiYXIiLCJvbmxvYWQiLCJtYW5pZmVzdCIsImxvYWRTZXR0aW5ncyIsImFkZFNldHRpbmdUYWIiLCJnZW5lcmF0ZUNvbW1hbmRzIiwib25MYXlvdXRSZWFkeSIsInNldHVwU3RhdHVzQmFyIiwiaW5pdF9ldnQiLCJkb2MiLCJlbmFibGVkUGx1Z2lucyIsImhhcyIsInJlZ2lzdGVyRXZlbnQiLCJzY3JlZW5XaWR0aCIsInNjcmVlbiIsIlBsYXRmb3JtIiwiaXNNb2JpbGVBcHAiLCJFTl9Gb250Q29sb3JfRm9ybWF0X0JydXNoIiwiRU5fQkdfRm9ybWF0X0JydXNoIiwiRU5fVGV4dF9Gb3JtYXRfQnJ1c2giLCJyZWdpc3RlckRvbUV2ZW50IiwiY21FZGl0b3IiLCJoYXNGb2N1cyIsImFkZENvbW1hbmQiLCJpbmRlbnRMaXN0IiwidW5pbmRlbnRMaXN0IiwidW5kbyIsInJlZG8iLCJjbGlwYm9hcmQiLCJ3cml0ZVRleHQiLCJyZWFkVGV4dCIsIm1vZGlmaWVycyIsInRvZ2dsZUZ1bGwiLCJpc0Z1bGwiLCJleGl0RnVsbCIsImJlRnVsbCIsIkRPQ19FTCIsImhlYWRFbCIsInN0eWxlRWwiLCJUWVBFX1JFUVVFU1RfRlVMTF9TQ1JFRU4iLCJUWVBFX0VYSVRfRlVMTF9TQ1JFRU4iLCJUWVBFX0ZVTExfU0NSRUVOX0VMRU1FTlQiLCJNYXJrZG93blZpZXciLCJmdWxsc2NyZWVuTXV0YXRpb25PYnNlcnZlciIsIm1vZHJvb3QiLCJnZXRDdXJyZW50RWxlbWVudCIsIk11dGF0aW9uT2JzZXJ2ZXIiLCJtdXRhdGlvblJlY29yZHMiLCJtdXRhdGlvblJlY29yZCIsImFkZGVkTm9kZXMiLCJub2RlIiwibWVzc2FnZSIsImRpc2Nvbm5lY3QiLCJvYnNlcnZlIiwiY2hpbGRMaXN0IiwiZnVsbHNjcmVlbk1vZGUiLCJsZWZ0U3BsaXQiLCJjb2xsYXBzZWQiLCJyaWdodFNwbGl0IiwibGVmdFJpYmJvbiIsIndvcmtwbGFjZWZ1bGxzY3JlZW5Nb2RlIiwiY29tbWFuZHNNYXAiLCJocmxpbmUiLCJjaGFyIiwicHJlZml4Iiwic3VmZml4IiwiaXNsaW5laGVhZCIsImp1c3RpZnkiLCJjZW50ZXIiLCJ1bmRlcmxpbmUiLCJzdXBlcnNjcmlwdCIsInN1YnNjcmlwdCIsImNvZGVibG9jayIsInNlbGVjdGVkVGV4dCIsImN1cnNlclN0YXJ0IiwiY3Vyc2VyRW5kIiwibW9kZSIsInByZVN0YXJ0IiwidHJpbVN0YXJ0Iiwic3VmRW5kIiwidHJpbUVuZCIsInJlcGxhY2VSYW5nZSIsImFwcGx5Q29tbWFuZCIsInN0YXR1c0Jhckljb24iLCJhZGRTdGF0dXNCYXJJdGVtIiwic3RhdHVzQmFyUmVjdCIsInN0YXR1c0Jhckljb25SZWN0IiwibWVudSIsIk1lbnUiLCJhZGRJdGVtIiwic2V0VGl0bGUiLCJzZXRTZWN0aW9uIiwiaXRlbURvbSIsInRvZ2dsZUNvbXBvbmVudCIsIlRvZ2dsZUNvbXBvbmVudCIsInNldERpc2FibGVkIiwic2hvd0F0UG9zaXRpb24iLCJvbnVubG9hZCIsInN0YXR1cyIsInNldFRlbXBfTm90aWNlIiwiY29udGVudCIsImxvYWREYXRhIiwic2F2ZURhdGEiXSwibWFwcGluZ3MiOiJ1Q0FxRU8sU0FBU0EsRUFBVUMsRUFBU0MsRUFBWUMsRUFBR0MsR0FFOUMsT0FBTyxJQUFLRCxJQUFNQSxFQUFJRSxXQUFVLFNBQVVDLEVBQVNDLEdBQy9DLFNBQVNDLEVBQVVDLEdBQVMsSUFBTUMsRUFBS04sRUFBVU8sS0FBS0YsSUFBVyxNQUFPRyxHQUFLTCxFQUFPSyxHQUFPLENBQzNGLFNBQVNDLEVBQVNKLEdBQVMsSUFBTUMsRUFBS04sRUFBaUIsTUFBRUssSUFBVyxNQUFPRyxH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QUNBLGdCQUNBLFlBQ0EsYUFDQSxrQkFDQSxpQkFDQSxTQUNBLFNBQ0EsZUFDQSxrQkFDQSxpQkFDQSxpQkFDQSxpQkFDQSxzQkFDQSxpQkFDQSxjQUNBLFlBQ0EsVUFDQSxXQUNBLFdBQ0EsV0FDQSxVQUNBLFVBQ0EsVUFDQSxVQUNBLFVBQ0EsVUFDQSxVQUNBLFVBQ0EsUUFDQSxZQUNBLGdCQUNBLFlBQ0EsYUFDQSxrQkFDQSxrQkFDQSxhQUNBLFlBQ0Esa0JBQ0EsYUFDQSxhQUNBLGlCQUNBLFlBQ0EsUUFDQSxTQUNBLFNBQ0EsU0FDQSxPQUNBLFVBQ0EsY0FDQSxTQUNBLE1BQ0EsUUFDQSxVQUNBLFVBQ0EsVUFDQSxZQUNBLFVBQ0EsV0FDQSxTQUNBLE9BQ0EsV0FDQSxZQUNBLG1CQUNBLG9CQUNBLG1CQUNBLGlCQUNBLG9CQUNBLGtCQUNBLGlCQUNBLGtCQUNBLE1BQ0EsY0FDQSxZQUNBLE9BQ0EsUUFDQSxZQUNBLFFBQ0EsV0FDQSxlQUNBLFdBQ0EsV0FDQSxTQUNBLFVBQ0EsU0FDQSxTQUNBLFNBQ0EsU0FDQSxTQUNBLFNBQ0EsUUFDQSxPQUNBLE9BQ0EsZ0JBQ0EsZ0JBQ0EsU0FDQSxjQUNBLGlCQUNBLFdBQ0EsV0FDQSxVQUNBLFdBQ0EsWUFDQSxTQUNBLFNBQ0EsT0FDQSxZQUNBLE1BQ0EsWUFDQSxRQUNBLFNBQ0EsT0FDQSxTQUNBLGdCQUNBLFVBQ0EsTUFDQSxXQUNBLFVBQ0EsZUFDQSxVQUNBLFFBQ0EsZUFDQSxlQUNBLGFBQ0EsZUFDQSxlQUNBLGFBQ0EsbUJBQ0EsaUJBQ0EsV0FDQSxlQUNBLGFBQ0EsYUFDQSxZQUNBLGFBQ0EsV0FDQSxZQUNBLGFBQ0EsWUFDQSxZQUNBLGFBQ0EsYUFDQSxhQUNBLGNBQ0EsWUFDQSxhQUNBLFdBQ0Esa0JBQ0EsY0FDQSxZQUNBLGVBQ0EsYUFDQSxjQUNBLGlCQUNBLGNBQ0EsWUFDQSxnQkFDQSxZQUNBLGdCQUNBLGNBQ0EsaUJBQ0EsbUJBQ0EsZUFDQSxnQkFDQSxZQUNBLGNBQ0EsWUFDQSxVQUNBLGVBQ0EsYUFDQSxnQkFDQSxjQUNBLGVBQ0EsVUFDQSxTQUNBLE9BQ0EsUUFDQSxPQUNBLFNBQ0EsY0FDQSxXQUNBLHFCQUNBLHNCQUNBLE9BQ0EsUUFDQSxpQkFDQSxhQUNBLGdCQUNBLGNBQ0Esb0JBQ0Esa0JBQ0Esa0JBQ0EsZ0JBQ0EsV0FDQSxTQUNBLFFBQ0EsaUJBQ0EsZUFDQSxlQUNBLGdCQUNBLGVBQ0EsYUFDQSxjQUNBLGNBQ0EsZUFDQSxlQUNBLGFBQ0EsY0FDQSxlQUNBLGNBQ0EsZ0JBQ0EsY0FDQSxrQkFDQSxnQkFDQSxpQkFDQSxjQUNBLFlBQ0EsV0FDQSxTQUNBLFVBQ0EsYUFDQSxVQUNBLFFBQ0EsU0FDQSxRQUNBLE9BQ0Esa0JBQ0EsWUFDQSxVQUNBLFFBQ0EsUUFDQSxNQUNBLFFBQ0EsT0FDQSxrQkFDQSxhQUNBLGFBQ0EsY0FDQSxXQUNBLFlBQ0EsMEJBQ0EseUJBQ0EsbUJBQ0EsU0FDQSxTQUNBLGNBQ0EsVUFDQSxVQUNBLFFBQ0EsT0FDQSxpQkFDQSxRQUNBLE9BQ0Esa0JBQ0EsZ0JBQ0EsU0FDQSxhQUNBLE9BQ0EsYUFDQSxXQUNBLE9BQ0EsT0FDQSxhQUNBLGNBQ0Esa0JBQ0EsWUFDQSxjQUNBLFFBQ0EsY0FDQSxVQUNBLGNBQ0EsVUFDQSxPQUNBLFlBQ0EsWUFDQSxjQUNBLFlBQ0EsYUFDQSxRQUNBLFNBQ0EsUUFDQSxTQUNBLGVBQ0EsV0FDQSxPQUNBLFVBQ0EsWUFDQSxTQUNBLGVBQ0EsV0FDQSxNQUNBLFdBQ0EsZUFDQSxZQUNBLGFBQ0EsaUJBQ0EsZUFDQSxPQUNBLFdBQ0EsWUFDQSxXQUNBLFNBQ0EsZUFDQSxRQUNBLFFBQ0EsU0FDQSxtQkFDQSxjQUNBLGNBQ0Esa0JBQ0EsU0FDQSxPQUNBLFVBQ0EsWUFDQSxnQkFDQSxZQUNBLGFBQ0EsWUFDQSxTQUNBLE9BQ0EsV0FDQSxjQUNBLFdBQ0EsYUFDQSxhQUNBLGVBQ0EsWUFDQSxhQUNBLGFBQ0EsU0FDQSxPQUNBLFdBQ0EsU0FDQSxlQUNBLGFBQ0EsU0FDQSxPQUNBLFNBQ0EsVUFDQSxVQUNBLFNBQ0EsYUFDQSxhQUNBLFlBQ0EsWUFDQSxnQkFDQSxjQUNBLGVBQ0EsU0FDQSxPQUNBLFFBQ0EsY0FDQSxVQUNBLE1BQ0EsVUFDQSxhQUNBLFdBQ0EsUUFDQSxnQkFDQSxZQUNBLE1BQ0EsT0FDQSxpQkFDQSxpQkFDQSxRQUNBLFVBQ0EsTUFDQSxhQUNBLFlBQ0EsYUFDQSxXQUNBLGVBQ0EsZUFDQSxRQUNBLGNBQ0Esa0JBQ0EsVUFDQSxPQUNBLGtCQUNBLGdCQUNBLGdCQUNBLFdBQ0Esa0JBQ0Esc0JBQ0EsZ0JBQ0EsUUFDQSxVQUNBLGtCQUNBLGdCQUNBLGtCQUNBLGdCQUNBLE9BQ0EsVUFDQSxVQUNBLFVBQ0EsUUFDQSxrQkFDQSxlQUNBLGlCQUNBLGFBQ0EsVUFDQSxZQUNBLFVBQ0EsU0FDQSxVQUNBLFlBQ0EsZ0JBQ0EsZ0JBQ0EsZUFDQSxlQUNBLGlCQUNBLFlBQ0EsVUFDQSxlQUNBLGVBQ0EsYUFDQSxVQUNBLFdBQ0EsWUFDQSxlQUNBLGVBQ0EsZ0JBQ0EsUUFDQSxXQUNBLFNBQ0EsVUFDQSxrQkFDQSxhQUNBLGtCQUNBLGlCQUNBLGVBQ0EsWUFDQSxpQkFDQSxRQUNBLFlBQ0EsYUFDQSxVQUNBLE1BQ0EsVUFDQSxRQUNBLFFBQ0EsY0FDQSxPQUNBLFdBQ0EsY0FDQSxjQUNBLE9BQ0EsU0FDQSxVQUNBLFVBQ0EsaUJBQ0EsWUFDQSxRQUNBLFVBQ0EsU0FDQSxVQUNBLFFBQ0EsaUJBQ0EsUUFDQSxVQUNBLFNBQ0EsT0FDQSxjQUNBLGFBQ0EsUUFDQSxXQUNBLFNBQ0EsWUFDQSxRQUNBLFNBQ0EsU0FDQSxnQkFDQSxZQUNBLGFBQ0EsWUFDQSxNQUNBLFFBQ0EsZ0JBQ0EsT0FDQSxXQUNBLFFBQ0EsVUFDQSxZQUNBLFlBQ0EsT0FDQSxXQUNBLG1CQUNBLGVBQ0EsU0FDQSxTQUNBLE9BQ0EsdUJBQ0EscUJBQ0EsYUFDQSxlQUNBLGFBQ0EsU0FDQSxhQUNBLFdBQ0EsVUFDQSxRQUNBLFFBQ0EsZUFDQSxlQUNBLGVBQ0EsYUFDQSxTQUNBLFFBQ0EsZUFDQSxnQkFDQSxTQUNBLFNBQ0EsUUFDQSxVQUNBLGdCQUNBLGVBQ0EsVUFDQSxRQUNBLGNBQ0EsYUFDQSxnQkFDQSxjQUNBLFNBQ0EsUUFDQSxZQUNBLGVBQ0EsUUFDQSxRQUNBLFFBQ0EsUUFDQSxxQkFDQSxVQUNBLHNCQUNBLGFBQ0EsYUFDQSxRQUNBLFlBQ0EsT0FDQSxXQUNBLFlBQ0EsVUFDQSxTQUNBLFNBQ0EsWUFDQSxXQUNBLE9BQ0EsY0FDQSxVQUNBLGNBQ0EsY0FDQSxxQkFDQSxtQkFDQSxnQkFDQSxZQUNBLFVBQ0EsYUFDQSxXQUNBLFdBQ0EsTUFDQSxVQUNBLFNBQ0EsY0FDQSxjQUNBLGdCQUNBLFFBQ0EsU0FDQSxVQUNBLFVBQ0EsUUFDQSxTQUNBLE1BQ0EsT0FDQSxTQUNBLE9BQ0Esa0JBQ0EsV0FDQSxvQkFDQSxjQUNBLHdCQUNBLGtCQUNBLGNBQ0EsY0FDQSxZQUNBLFNBQ0EsWUFDQSxjQUNBLFFBQ0EsY0FDQSxlQUNBLFVBQ0EsWUFDQSxRQUNBLFVBQ0EsUUFDQSxpQkFDQSxZQUNBLFFBQ0EsU0FDQSxnQkFDQSxjQUNBLFdBQ0EsU0FDQSxRQUNBLE9BQ0EsS0FDQSxTQUNBLFVBQ0EsT0FDQSxXQUNBLFlBQ0EsU0FDQSxPQUNBLFdBQ0EsU0FDQSxTQUNBLGVBQ0EsU0FDQSxNQUNBLGFBQ0EsV0FDQSxhQUNBLFlBQ0EsU0FDQSxPQUNBLFFBQ0EsbUJBQ0EsV0FDQSxnQkFDQSxXQUNBLGNBQ0EsVUFDQSxZQUNBLFFBQ0EsT0FDQSxZQUNBLFdBQ0EsV0FDQSxXQUNBLFNBQ0EsU0FDQSxTQUNBLE9BQ0EsUUFDQSxRQUNBLFNBQ0EsVUFDQSxXQUNBLE9BQ0EsT0FDQSxPQUNBLFlBQ0EsU0FDQSxXQUNBLFlBQ0EsV0FDQSxJQUNBLFVBQ0EsVUFDQSxNQUNBLFVBQ0EsV0FDQSxhQUNBLFFBQ0EsU0FDQSxpQkFDQSxXQUNBLFNBQ0EsU0FDQSxhQUNBLGNBQ0Esd0JBQ0EsY0FDQSxhQUNBLGFBQ0EsV0FDQSxPQUNBLFlBQ0EsU0FDQSxhQUNBLGVBQ0EsZUFDQSxhQUNBLG9CQUNBLGNBQ0EsT0FDQSxhQUNBLFlBQ0EsVUFDQSx1QkFDQSx3QkFDQSxxQkFDQSx1QkFDQSxnQkFDQSxzQkFDQSxNQUNBLG1CQUNB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
