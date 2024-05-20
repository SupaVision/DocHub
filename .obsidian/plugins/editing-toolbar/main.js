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
"function" == typeof SuppressedError && SuppressedError;
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
function _(t) {
  const o = t.workspace.getActiveViewOfType(e.ItemView);
  if (
    "markdown" === (null == o ? void 0 : o.getViewType()) ||
    "thino_view" === (null == o ? void 0 : o.getViewType())
  ) {
    const e = t.workspace.activeLeaf;
    if (e) {
      const t = e.view;
      if (t) return "source" === t.getMode();
    }
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
           * Sortable 1.15.2
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
          P(e, t, o[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(o))
        : $(Object(o)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(o, t));
          });
  }
  return e;
}
function V(e) {
  return (
    (V =
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
    V(e)
  );
}
function P(e, t, o) {
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
      l[a] !== wt.ghost &&
      (n || l[a] !== wt.dragged) &&
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
    o && (o === wt.ghost || "none" === le(o, "display") || (t && !ee(o, t)));

  )
    o = o.previousElementSibling;
  return o || null;
}
function ge(e, t) {
  var o = 0;
  if (!e || !e.parentNode) return -1;
  for (; (e = e.previousElementSibling); )
    "TEMPLATE" === e.nodeName.toUpperCase() ||
      e === wt.clone ||
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
function Ce(e, t, o) {
  var n = {};
  return (
    Array.from(e.children).forEach(function (i) {
      var a, l, r, s;
      if (oe(i, t.draggable, e, !1) && !i.animated && i !== o) {
        var c = de(i);
        (n.left = Math.min(
          null !== (a = n.left) && void 0 !== a ? a : 1 / 0,
          c.left,
        )),
          (n.top = Math.min(
            null !== (l = n.top) && void 0 !== l ? l : 1 / 0,
            c.top,
          )),
          (n.right = Math.max(
            null !== (r = n.right) && void 0 !== r ? r : -1 / 0,
            c.right,
          )),
          (n.bottom = Math.max(
            null !== (s = n.bottom) && void 0 !== s ? s : -1 / 0,
            c.bottom,
          ));
      }
    }),
    (n.width = n.right - n.left),
    (n.height = n.bottom - n.top),
    (n.x = n.left),
    (n.y = n.top),
    n
  );
}
var ke = "Sortable" + new Date().getTime();
function qe() {
  var e,
    t = [];
  return {
    captureAnimationState: function () {
      ((t = []), this.options.animation) &&
        [].slice.call(this.el.children).forEach(function (e) {
          if ("none" !== le(e, "display") && e !== wt.ghost) {
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
var Te = [],
  Me = { initializeByDefault: !0 },
  Ee = {
    mount: function (e) {
      for (var t in Me) Me.hasOwnProperty(t) && !(t in e) && (e[t] = Me[t]);
      Te.forEach(function (t) {
        if (t.pluginName === e.pluginName)
          throw "Sortable: Cannot mount plugin ".concat(
            e.pluginName,
            " more than once",
          );
      }),
        Te.push(e);
    },
    pluginEvent: function (e, t, o) {
      var n = this;
      (this.eventCanceled = !1),
        (o.cancel = function () {
          n.eventCanceled = !0;
        });
      var i = e + "Global";
      Te.forEach(function (n) {
        t[n.pluginName] &&
          (t[n.pluginName][i] && t[n.pluginName][i](z({ sortable: t }, o)),
          t.options[n.pluginName] &&
            t[n.pluginName][e] &&
            t[n.pluginName][e](z({ sortable: t }, o)));
      });
    },
    initializePlugins: function (e, t, o, n) {
      for (var i in (Te.forEach(function (n) {
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
        Te.forEach(function (n) {
          "function" == typeof n.eventProperties &&
            H(o, n.eventProperties.call(t[n.pluginName], e));
        }),
        o
      );
    },
    modifyOption: function (e, t, o) {
      var n;
      return (
        Te.forEach(function (i) {
          e[i.pluginName] &&
            i.optionListeners &&
            "function" == typeof i.optionListeners[t] &&
            (n = i.optionListeners[t].call(e[i.pluginName], o));
        }),
        n
      );
    },
  };
var _e = ["evt"],
  Se = function (e, t) {
    var o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
      n = o.evt,
      i = R(o, _e);
    Ee.pluginEvent.bind(wt)(
      e,
      t,
      z(
        {
          dragEl: Be,
          parentEl: Ae,
          ghostEl: De,
          rootEl: Le,
          nextEl: Ne,
          lastDownEl: Ie,
          cloneEl: Oe,
          cloneHidden: Fe,
          dragStarted: Ue,
          putSortable: Re,
          activeSortable: wt.active,
          originalEvent: n,
          oldIndex: $e,
          oldDraggableIndex: Ve,
          newIndex: ze,
          newDraggableIndex: Pe,
          hideGhostForTarget: ft,
          unhideGhostForTarget: bt,
          cloneNowHidden: function () {
            Fe = !0;
          },
          cloneNowShown: function () {
            Fe = !1;
          },
          dispatchSortableEvent: function (e) {
            xe({ sortable: t, name: e, originalEvent: n });
          },
        },
        i,
      ),
    );
  };
function xe(e) {
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
    if ((t = t || (o && o[ke]))) {
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
      var v = z(z({}, g), Ee.getEventProperties(n, t));
      for (var y in v) m[y] = v[y];
      o && o.dispatchEvent(m), f[b] && f[b].call(t, m);
    }
  })(
    z(
      {
        putSortable: Re,
        cloneEl: Oe,
        targetEl: Be,
        rootEl: Le,
        oldIndex: $e,
        oldDraggableIndex: Ve,
        newIndex: ze,
        newDraggableIndex: Pe,
      },
      e,
    ),
  );
}
var Be,
  Ae,
  De,
  Le,
  Ne,
  Ie,
  Oe,
  Fe,
  $e,
  ze,
  Ve,
  Pe,
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
  et,
  tt = !1,
  ot = !1,
  nt = [],
  it = !1,
  at = !1,
  lt = [],
  rt = !1,
  st = [],
  ct = "undefined" != typeof document,
  dt = G,
  ut = W || j ? "cssFloat" : "float",
  ht = ct && !U && !G && "draggable" in document.createElement("div"),
  pt = (function () {
    if (ct) {
      if (j) return !1;
      var e = document.createElement("x");
      return (
        (e.style.cssText = "pointer-events:auto"),
        "auto" === e.style.pointerEvents
      );
    }
  })(),
  gt = function (e, t) {
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
        (s >= n && "none" === o[ut]) ||
        (a && "none" === o[ut] && s + c > n))
      ? "vertical"
      : "horizontal";
  },
  mt = function (e) {
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
    (n && "object" == V(n)) || (n = { name: n }),
      (o.name = n.name),
      (o.checkPull = t(n.pull, !0)),
      (o.checkPut = t(n.put)),
      (o.revertClone = n.revertClone),
      (e.group = o);
  },
  ft = function () {
    !pt && De && le(De, "display", "none");
  },
  bt = function () {
    !pt && De && le(De, "display", "");
  };
ct &&
  !U &&
  document.addEventListener(
    "click",
    function (e) {
      if (ot)
        return (
          e.preventDefault(),
          e.stopPropagation && e.stopPropagation(),
          e.stopImmediatePropagation && e.stopImmediatePropagation(),
          (ot = !1),
          !1
        );
    },
    !0,
  );
var vt = function (e) {
    if (Be) {
      e = e.touches ? e.touches[0] : e;
      var t =
        ((i = e.clientX),
        (a = e.clientY),
        nt.some(function (e) {
          var t = e[ke].options.emptyInsertThreshold;
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
          t[ke]._onDragOver(o);
      }
    }
    var i, a, l;
  },
  yt = function (e) {
    Be && Be.parentNode[ke]._isOutsideThisEl(e.target);
  };
function wt(e, t) {
  if (!e || !e.nodeType || 1 !== e.nodeType)
    throw "Sortable: `el` must be an HTMLElement, not ".concat(
      {}.toString.call(e),
    );
  (this.el = e), (this.options = t = H({}, t)), (e[ke] = this);
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
      return gt(e, this.options);
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
    supportPointer: !1 !== wt.supportPointer && "PointerEvent" in window && !Y,
    emptyInsertThreshold: 5,
  };
  for (var n in (Ee.initializePlugins(this, e, o), o))
    !(n in t) && (t[n] = o[n]);
  for (var i in (mt(t), this))
    "_" === i.charAt(0) &&
      "function" == typeof this[i] &&
      (this[i] = this[i].bind(this));
  (this.nativeDraggable = !t.forceFallback && ht),
    this.nativeDraggable && (this.options.touchStartThreshold = 1),
    t.supportPointer
      ? J(e, "pointerdown", this._onTapStart)
      : (J(e, "mousedown", this._onTapStart),
        J(e, "touchstart", this._onTapStart)),
    this.nativeDraggable && (J(e, "dragover", this), J(e, "dragenter", this)),
    nt.push(this.el),
    t.store && t.store.get && this.sort(t.store.get(this) || []),
    H(this, qe());
}
function Ct(e, t, o, n, i, a, l, r) {
  var s,
    c,
    d = e[ke],
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
function kt(e) {
  e.draggable = !1;
}
function qt() {
  rt = !1;
}
function Tt(e) {
  for (
    var t = e.tagName + e.className + e.src + e.href + e.textContent,
      o = t.length,
      n = 0;
    o--;

  )
    n += t.charCodeAt(o);
  return n.toString(36);
}
function Mt(e) {
  return setTimeout(e, 0);
}
function Et(e) {
  return clearTimeout(e);
}
(wt.prototype = {
  constructor: wt,
  _isOutsideThisEl: function (e) {
    this.el.contains(e) || e === this.el || (Ke = null);
  },
  _getDirection: function (e, t) {
    return "function" == typeof this.options.direction
      ? this.options.direction.call(this, e, t, Be)
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
          st.length = 0;
          var t = e.getElementsByTagName("input"),
            o = t.length;
          for (; o--; ) {
            var n = t[o];
            n.checked && st.push(n);
          }
        })(o),
        !Be &&
          !(
            (/mousedown|pointerdown/.test(a) && 0 !== e.button) ||
            n.disabled
          ) &&
          !s.isContentEditable &&
          (this.nativeDraggable ||
            !Y ||
            !r ||
            "SELECT" !== r.tagName.toUpperCase()) &&
          !(((r = oe(r, n.draggable, o, !1)) && r.animated) || Ie === r))
      ) {
        if ((($e = ge(r)), (Ve = ge(r, n.draggable)), "function" == typeof c)) {
          if (c.call(this, e, r, this))
            return (
              xe({
                sortable: t,
                rootEl: s,
                name: "filter",
                targetEl: r,
                toEl: o,
                fromEl: o,
              }),
              Se("filter", t, { evt: e }),
              void (i && e.cancelable && e.preventDefault())
            );
        } else if (
          c &&
          (c = c.split(",").some(function (n) {
            if ((n = oe(s, n.trim(), o, !1)))
              return (
                xe({
                  sortable: t,
                  rootEl: n,
                  name: "filter",
                  targetEl: r,
                  fromEl: o,
                  toEl: o,
                }),
                Se("filter", t, { evt: e }),
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
    if (o && !Be && o.parentNode === a) {
      var s = de(o);
      if (
        ((Le = a),
        (Ae = (Be = o).parentNode),
        (Ne = Be.nextSibling),
        (Ie = o),
        (He = l.group),
        (wt.dragged = Be),
        (Ze = {
          target: Be,
          clientX: (t || e).clientX,
          clientY: (t || e).clientY,
        }),
        (Ye = Ze.clientX - s.left),
        (Ge = Ze.clientY - s.top),
        (this._lastX = (t || e).clientX),
        (this._lastY = (t || e).clientY),
        (Be.style["will-change"] = "all"),
        (n = function () {
          Se("delayEnded", i, { evt: e }),
            wt.eventCanceled
              ? i._onDrop()
              : (i._disableDelayedDragEvents(),
                !X && i.nativeDraggable && (Be.draggable = !0),
                i._triggerDragStart(e, t),
                xe({ sortable: i, name: "choose", originalEvent: e }),
                ae(Be, l.chosenClass, !0));
        }),
        l.ignore.split(",").forEach(function (e) {
          se(Be, e.trim(), kt);
        }),
        J(r, "dragover", vt),
        J(r, "mousemove", vt),
        J(r, "touchmove", vt),
        J(r, "mouseup", i._onDrop),
        J(r, "touchend", i._onDrop),
        J(r, "touchcancel", i._onDrop),
        X &&
          this.nativeDraggable &&
          ((this.options.touchStartThreshold = 4), (Be.draggable = !0)),
        Se("delayStart", this, { evt: e }),
        !l.delay ||
          (l.delayOnTouchOnly && !t) ||
          (this.nativeDraggable && (W || j)))
      )
        n();
      else {
        if (wt.eventCanceled) return void this._onDrop();
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
    Be && kt(Be),
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
        : (J(Be, "dragend", this), J(Le, "dragstart", this._onDragStart));
    try {
      document.selection
        ? Mt(function () {
            document.selection.empty();
          })
        : window.getSelection().removeAllRanges();
    } catch (e) {}
  },
  _dragStarted: function (e, t) {
    if (((tt = !1), Le && Be)) {
      Se("dragStarted", this, { evt: t }),
        this.nativeDraggable && J(document, "dragover", yt);
      var o = this.options;
      !e && ae(Be, o.dragClass, !1),
        ae(Be, o.ghostClass, !0),
        (wt.active = this),
        e && this._appendGhost(),
        xe({ sortable: this, name: "start", originalEvent: t });
    } else this._nulling();
  },
  _emulateDragOver: function () {
    if (je) {
      (this._lastX = je.clientX), (this._lastY = je.clientY), ft();
      for (
        var e = document.elementFromPoint(je.clientX, je.clientY), t = e;
        e &&
        e.shadowRoot &&
        (e = e.shadowRoot.elementFromPoint(je.clientX, je.clientY)) !== t;

      )
        t = e;
      if ((Be.parentNode[ke]._isOutsideThisEl(e), t))
        do {
          if (t[ke]) {
            if (
              t[ke]._onDragOver({
                clientX: je.clientX,
                clientY: je.clientY,
                target: e,
                rootEl: t,
              }) &&
              !this.options.dragoverBubble
            )
              break;
          }
          e = t;
        } while ((t = t.parentNode));
      bt();
    }
  },
  _onTouchMove: function (e) {
    if (Ze) {
      var t = this.options,
        o = t.fallbackTolerance,
        n = t.fallbackOffset,
        i = e.touches ? e.touches[0] : e,
        a = De && re(De, !0),
        l = De && a && a.a,
        r = De && a && a.d,
        s = dt && et && me(et),
        c =
          (i.clientX - Ze.clientX + n.x) / (l || 1) +
          (s ? s[0] - lt[0] : 0) / (l || 1),
        d =
          (i.clientY - Ze.clientY + n.y) / (r || 1) +
          (s ? s[1] - lt[1] : 0) / (r || 1);
      if (!wt.active && !tt) {
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
      if (De) {
        a
          ? ((a.e += c - (We || 0)), (a.f += d - (Xe || 0)))
          : (a = { a: 1, b: 0, c: 0, d: 1, e: c, f: d });
        var u = "matrix("
          .concat(a.a, ",")
          .concat(a.b, ",")
          .concat(a.c, ",")
          .concat(a.d, ",")
          .concat(a.e, ",")
          .concat(a.f, ")");
        le(De, "webkitTransform", u),
          le(De, "mozTransform", u),
          le(De, "msTransform", u),
          le(De, "transform", u),
          (We = c),
          (Xe = d),
          (je = i);
      }
      e.cancelable && e.preventDefault();
    }
  },
  _appendGhost: function () {
    if (!De) {
      var e = this.options.fallbackOnBody ? document.body : Le,
        t = de(Be, !0, dt, !0, e),
        o = this.options;
      if (dt) {
        for (
          et = e;
          "static" === le(et, "position") &&
          "none" === le(et, "transform") &&
          et !== document;

        )
          et = et.parentNode;
        et !== document.body && et !== document.documentElement
          ? (et === document && (et = ce()),
            (t.top += et.scrollTop),
            (t.left += et.scrollLeft))
          : (et = ce()),
          (lt = me(et));
      }
      ae((De = Be.cloneNode(!0)), o.ghostClass, !1),
        ae(De, o.fallbackClass, !0),
        ae(De, o.dragClass, !0),
        le(De, "transition", ""),
        le(De, "transform", ""),
        le(De, "box-sizing", "border-box"),
        le(De, "margin", 0),
        le(De, "top", t.top),
        le(De, "left", t.left),
        le(De, "width", t.width),
        le(De, "height", t.height),
        le(De, "opacity", "0.8"),
        le(De, "position", dt ? "absolute" : "fixed"),
        le(De, "zIndex", "100000"),
        le(De, "pointerEvents", "none"),
        (wt.ghost = De),
        e.appendChild(De),
        le(
          De,
          "transform-origin",
          (Ye / parseInt(De.style.width)) * 100 +
            "% " +
            (Ge / parseInt(De.style.height)) * 100 +
            "%",
        );
    }
  },
  _onDragStart: function (e, t) {
    var o = this,
      n = e.dataTransfer,
      i = o.options;
    Se("dragStart", this, { evt: e }),
      wt.eventCanceled
        ? this._onDrop()
        : (Se("setupClone", this),
          wt.eventCanceled ||
            ((Oe = we(Be)).removeAttribute("id"),
            (Oe.draggable = !1),
            (Oe.style["will-change"] = ""),
            this._hideClone(),
            ae(Oe, this.options.chosenClass, !1),
            (wt.clone = Oe)),
          (o.cloneId = Mt(function () {
            Se("clone", o),
              wt.eventCanceled ||
                (o.options.removeCloneOnHide || Le.insertBefore(Oe, Be),
                o._hideClone(),
                xe({ sortable: o, name: "clone" }));
          })),
          !t && ae(Be, i.dragClass, !0),
          t
            ? ((ot = !0), (o._loopId = setInterval(o._emulateDragOver, 50)))
            : (Q(document, "mouseup", o._onDrop),
              Q(document, "touchend", o._onDrop),
              Q(document, "touchcancel", o._onDrop),
              n &&
                ((n.effectAllowed = "move"),
                i.setData && i.setData.call(o, n, Be)),
              J(document, "drop", o),
              le(Be, "transform", "translateZ(0)")),
          (tt = !0),
          (o._dragStartId = Mt(o._dragStarted.bind(o, t, e))),
          J(document, "selectstart", o),
          (Ue = !0),
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
      c = wt.active,
      d = He === s,
      u = r.sort,
      h = Re || c,
      p = this,
      g = !1;
    if (!rt) {
      if (
        (void 0 !== e.preventDefault && e.cancelable && e.preventDefault(),
        (l = oe(l, r.draggable, a, !0)),
        x("dragOver"),
        wt.eventCanceled)
      )
        return g;
      if (
        Be.contains(e.target) ||
        (l.animated && l.animatingX && l.animatingY) ||
        p._ignoreWhileAnimating === l
      )
        return A(!1);
      if (
        ((ot = !1),
        c &&
          !r.disabled &&
          (d
            ? u || (n = Ae !== Le)
            : Re === this ||
              ((this.lastPutMode = He.checkPull(this, c, Be, e)) &&
                s.checkPut(this, c, Be, e))))
      ) {
        if (
          ((i = "vertical" === this._getDirection(e, l)),
          (t = de(Be)),
          x("dragOverValid"),
          wt.eventCanceled)
        )
          return g;
        if (n)
          return (
            (Ae = Le),
            B(),
            this._hideClone(),
            x("revert"),
            wt.eventCanceled ||
              (Ne ? Le.insertBefore(Be, Ne) : Le.appendChild(Be)),
            A(!0)
          );
        var m = pe(a, r.draggable);
        if (
          !m ||
          ((function (e, t, o) {
            var n = de(pe(o.el, o.options.draggable)),
              i = Ce(o.el, o.options, De),
              a = 10;
            return t
              ? e.clientX > i.right + a ||
                  (e.clientY > n.bottom && e.clientX > n.left)
              : e.clientY > i.bottom + a ||
                  (e.clientX > n.right && e.clientY > n.top);
          })(e, i, this) &&
            !m.animated)
        ) {
          if (m === Be) return A(!1);
          if (
            (m && a === e.target && (l = m),
            l && (o = de(l)),
            !1 !== Ct(Le, a, Be, t, l, o, e, !!l))
          )
            return (
              B(),
              m && m.nextSibling
                ? a.insertBefore(Be, m.nextSibling)
                : a.appendChild(Be),
              (Ae = a),
              D(),
              A(!0)
            );
        } else if (
          m &&
          (function (e, t, o) {
            var n = de(he(o.el, 0, o.options, !0)),
              i = Ce(o.el, o.options, De),
              a = 10;
            return t
              ? e.clientX < i.left - a ||
                  (e.clientY < n.top && e.clientX < n.right)
              : e.clientY < i.top - a ||
                  (e.clientY < n.bottom && e.clientX < n.left);
          })(e, i, this)
        ) {
          var f = he(a, 0, r, !0);
          if (f === Be) return A(!1);
          if (((o = de((l = f))), !1 !== Ct(Le, a, Be, t, l, o, e, !1)))
            return B(), a.insertBefore(Be, f), (Ae = a), D(), A(!0);
        } else if (l.parentNode === a) {
          o = de(l);
          var b,
            v,
            y,
            w = Be.parentNode !== a,
            C = !(function (e, t, o) {
              var n = o ? e.left : e.top,
                i = o ? e.right : e.bottom,
                a = o ? e.width : e.height,
                l = o ? t.left : t.top,
                r = o ? t.right : t.bottom,
                s = o ? t.width : t.height;
              return n === l || i === r || n + a / 2 === l + s / 2;
            })(
              (Be.animated && Be.toRect) || t,
              (l.animated && l.toRect) || o,
              i,
            ),
            k = i ? "top" : "left",
            q = ue(l, "top", "top") || ue(Be, "top", "top"),
            T = q ? q.scrollTop : void 0;
          if (
            (Ke !== l &&
              ((v = o[k]), (it = !1), (at = (!C && r.invertSwap) || w)),
            (b = (function (e, t, o, n, i, a, l, r) {
              var s = n ? e.clientY : e.clientX,
                c = n ? o.height : o.width,
                d = n ? o.top : o.left,
                u = n ? o.bottom : o.right,
                h = !1;
              if (!l)
                if (r && Qe < c * i) {
                  if (
                    (!it &&
                      (1 === Je ? s > d + (c * a) / 2 : s < u - (c * a) / 2) &&
                      (it = !0),
                    it)
                  )
                    h = !0;
                  else if (1 === Je ? s < d + Qe : s > u - Qe) return -Je;
                } else if (
                  s > d + (c * (1 - i)) / 2 &&
                  s < u - (c * (1 - i)) / 2
                )
                  return (function (e) {
                    return ge(Be) < ge(e) ? 1 : -1;
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
              at,
              Ke === l,
            )),
            0 !== b)
          ) {
            var M = ge(Be);
            do {
              (M -= b), (y = Ae.children[M]);
            } while (y && ("none" === le(y, "display") || y === De));
          }
          if (0 === b || y === l) return A(!1);
          (Ke = l), (Je = b);
          var E = l.nextElementSibling,
            _ = !1,
            S = Ct(Le, a, Be, t, l, o, e, (_ = 1 === b));
          if (!1 !== S)
            return (
              (1 !== S && -1 !== S) || (_ = 1 === S),
              (rt = !0),
              setTimeout(qt, 30),
              B(),
              _ && !E
                ? a.appendChild(Be)
                : l.parentNode.insertBefore(Be, _ ? E : l),
              q && ye(q, 0, T - q.scrollTop),
              (Ae = Be.parentNode),
              void 0 === v || at || (Qe = Math.abs(v - de(l)[k])),
              D(),
              A(!0)
            );
        }
        if (a.contains(Be)) return A(!1);
      }
      return !1;
    }
    function x(r, s) {
      Se(
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
              return Ct(Le, a, Be, t, o, de(o), e, n);
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
            (ae(Be, Re ? Re.options.ghostClass : c.options.ghostClass, !1),
            ae(Be, r.ghostClass, !0)),
          Re !== p && p !== wt.active
            ? (Re = p)
            : p === wt.active && Re && (Re = null),
          h === p && (p._ignoreWhileAnimating = l),
          p.animateAll(function () {
            x("dragOverAnimationComplete"), (p._ignoreWhileAnimating = null);
          }),
          p !== h && (h.animateAll(), (h._ignoreWhileAnimating = null))),
        ((l === Be && !Be.animated) || (l === a && !l.animated)) && (Ke = null),
        r.dragoverBubble ||
          e.rootEl ||
          l === document ||
          (Be.parentNode[ke]._isOutsideThisEl(e.target), !t && vt(e)),
        !r.dragoverBubble && e.stopPropagation && e.stopPropagation(),
        (g = !0)
      );
    }
    function D() {
      (ze = ge(Be)),
        (Pe = ge(Be, r.draggable)),
        xe({
          sortable: p,
          name: "change",
          toEl: a,
          newIndex: ze,
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
      Q(document, "dragover", vt),
      Q(document, "mousemove", vt),
      Q(document, "touchmove", vt);
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
    (ze = ge(Be)),
      (Pe = ge(Be, o.draggable)),
      Se("drop", this, { evt: e }),
      (Ae = Be && Be.parentNode),
      (ze = ge(Be)),
      (Pe = ge(Be, o.draggable)),
      wt.eventCanceled ||
        ((tt = !1),
        (at = !1),
        (it = !1),
        clearInterval(this._loopId),
        clearTimeout(this._dragStartTimer),
        Et(this.cloneId),
        Et(this._dragStartId),
        this.nativeDraggable &&
          (Q(document, "drop", this), Q(t, "dragstart", this._onDragStart)),
        this._offMoveEvents(),
        this._offUpEvents(),
        Y && le(document.body, "user-select", ""),
        le(Be, "transform", ""),
        e &&
          (Ue &&
            (e.cancelable && e.preventDefault(),
            !o.dropBubble && e.stopPropagation()),
          De && De.parentNode && De.parentNode.removeChild(De),
          (Le === Ae || (Re && "clone" !== Re.lastPutMode)) &&
            Oe &&
            Oe.parentNode &&
            Oe.parentNode.removeChild(Oe),
          Be &&
            (this.nativeDraggable && Q(Be, "dragend", this),
            kt(Be),
            (Be.style["will-change"] = ""),
            Ue &&
              !tt &&
              ae(Be, Re ? Re.options.ghostClass : this.options.ghostClass, !1),
            ae(Be, this.options.chosenClass, !1),
            xe({
              sortable: this,
              name: "unchoose",
              toEl: Ae,
              newIndex: null,
              newDraggableIndex: null,
              originalEvent: e,
            }),
            Le !== Ae
              ? (ze >= 0 &&
                  (xe({
                    rootEl: Ae,
                    name: "add",
                    toEl: Ae,
                    fromEl: Le,
                    originalEvent: e,
                  }),
                  xe({
                    sortable: this,
                    name: "remove",
                    toEl: Ae,
                    originalEvent: e,
                  }),
                  xe({
                    rootEl: Ae,
                    name: "sort",
                    toEl: Ae,
                    fromEl: Le,
                    originalEvent: e,
                  }),
                  xe({
                    sortable: this,
                    name: "sort",
                    toEl: Ae,
                    originalEvent: e,
                  })),
                Re && Re.save())
              : ze !== $e &&
                ze >= 0 &&
                (xe({
                  sortable: this,
                  name: "update",
                  toEl: Ae,
                  originalEvent: e,
                }),
                xe({
                  sortable: this,
                  name: "sort",
                  toEl: Ae,
                  originalEvent: e,
                })),
            wt.active &&
              ((null != ze && -1 !== ze) || ((ze = $e), (Pe = Ve)),
              xe({ sortable: this, name: "end", toEl: Ae, originalEvent: e }),
              this.save())))),
      this._nulling();
  },
  _nulling: function () {
    Se("nulling", this),
      (Le =
        Be =
        Ae =
        De =
        Ne =
        Oe =
        Ie =
        Fe =
        Ze =
        je =
        Ue =
        ze =
        Pe =
        $e =
        Ve =
        Ke =
        Je =
        Re =
        He =
        wt.dragged =
        wt.ghost =
        wt.clone =
        wt.active =
          null),
      st.forEach(function (e) {
        e.checked = !0;
      }),
      (st.length = We = Xe = 0);
  },
  handleEvent: function (e) {
    switch (e.type) {
      case "drop":
      case "dragend":
        this._onDrop(e);
        break;
      case "dragenter":
      case "dragover":
        Be &&
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
        t.push(e.getAttribute(a.dataIdAttr) || Tt(e));
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
    var n = Ee.modifyOption(this, e, t);
    (o[e] = void 0 !== n ? n : t), "group" === e && mt(o);
  },
  destroy: function () {
    Se("destroy", this);
    var e = this.el;
    (e[ke] = null),
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
      nt.splice(nt.indexOf(this.el), 1),
      (this.el = e = null);
  },
  _hideClone: function () {
    if (!Fe) {
      if ((Se("hideClone", this), wt.eventCanceled)) return;
      le(Oe, "display", "none"),
        this.options.removeCloneOnHide &&
          Oe.parentNode &&
          Oe.parentNode.removeChild(Oe),
        (Fe = !0);
    }
  },
  _showClone: function (e) {
    if ("clone" === e.lastPutMode) {
      if (Fe) {
        if ((Se("showClone", this), wt.eventCanceled)) return;
        Be.parentNode != Le || this.options.group.revertClone
          ? Ne
            ? Le.insertBefore(Oe, Ne)
            : Le.appendChild(Oe)
          : Le.insertBefore(Oe, Be),
          this.options.group.revertClone && this.animate(Be, Oe),
          le(Oe, "display", ""),
          (Fe = !1);
      }
    } else this._hideClone();
  },
}),
  ct &&
    J(document, "touchmove", function (e) {
      (wt.active || tt) && e.cancelable && e.preventDefault();
    }),
  (wt.utils = {
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
    nextTick: Mt,
    cancelNextTick: Et,
    detectDirection: gt,
    getChild: he,
  }),
  (wt.get = function (e) {
    return e[ke];
  }),
  (wt.mount = function () {
    for (var e = arguments.length, t = new Array(e), o = 0; o < e; o++)
      t[o] = arguments[o];
    t[0].constructor === Array && (t = t[0]),
      t.forEach(function (e) {
        if (!e.prototype || !e.prototype.constructor)
          throw "Sortable: Mounted plugin must be a constructor function, not ".concat(
            {}.toString.call(e),
          );
        e.utils && (wt.utils = z(z({}, wt.utils), e.utils)), Ee.mount(e);
      });
  }),
  (wt.create = function (e, t) {
    return new wt(e, t);
  }),
  (wt.version = "1.15.2");
var _t,
  St,
  xt,
  Bt,
  At,
  Dt,
  Lt = [],
  Nt = !1;
function It() {
  Lt.forEach(function (e) {
    clearInterval(e.pid);
  }),
    (Lt = []);
}
function Ot() {
  clearInterval(Dt);
}
var Ft = ve(function (e, t, o, n) {
    if (t.scroll) {
      var i,
        a = (e.touches ? e.touches[0] : e).clientX,
        l = (e.touches ? e.touches[0] : e).clientY,
        r = t.scrollSensitivity,
        s = t.scrollSpeed,
        c = ce(),
        d = !1;
      St !== o &&
        ((St = o),
        It(),
        (_t = t.scroll),
        (i = t.scrollFn),
        !0 === _t && (_t = fe(o, !0)));
      var u = 0,
        h = _t;
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
        if (!Lt[u]) for (var B = 0; B <= u; B++) Lt[B] || (Lt[B] = {});
        (Lt[u].vx == S && Lt[u].vy == x && Lt[u].el === p) ||
          ((Lt[u].el = p),
          (Lt[u].vx = S),
          (Lt[u].vy = x),
          clearInterval(Lt[u].pid),
          (0 == S && 0 == x) ||
            ((d = !0),
            (Lt[u].pid = setInterval(
              function () {
                n && 0 === this.layer && wt.active._onTouchMove(At);
                var t = Lt[this.layer].vy ? Lt[this.layer].vy * s : 0,
                  o = Lt[this.layer].vx ? Lt[this.layer].vx * s : 0;
                ("function" == typeof i &&
                  "continue" !==
                    i.call(
                      wt.dragged.parentNode[ke],
                      o,
                      t,
                      e,
                      At,
                      Lt[this.layer].el,
                    )) ||
                  ye(Lt[this.layer].el, o, t);
              }.bind({ layer: u }),
              24,
            )))),
          u++;
      } while (t.bubbleScroll && h !== c && (h = fe(h, !1)));
      Nt = d;
    }
  }, 30),
  $t = function (e) {
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
function zt() {}
function Vt() {}
function Pt(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
(zt.prototype = {
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
  drop: $t,
}),
  H(zt, { pluginName: "revertOnSpill" }),
  (Vt.prototype = {
    onSpill: function (e) {
      var t = e.dragEl,
        o = e.putSortable || this.sortable;
      o.captureAnimationState(),
        t.parentNode && t.parentNode.removeChild(t),
        o.animateAll();
    },
    drop: $t,
  }),
  H(Vt, { pluginName: "removeOnSpill" }),
  wt.mount(
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
              Ot(),
              It(),
              clearTimeout(ne),
              (ne = void 0);
          },
          nulling: function () {
            (At = St = _t = Nt = Dt = xt = Bt = null), (Lt.length = 0);
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
              ((At = e),
              t || this.options.forceAutoScrollFallback || W || j || Y)
            ) {
              Ft(e, this.options, a, t);
              var l = fe(a, !0);
              !Nt ||
                (Dt && n === xt && i === Bt) ||
                (Dt && Ot(),
                (Dt = setInterval(function () {
                  var a = fe(document.elementFromPoint(n, i), !0);
                  a !== l && ((l = a), It()), Ft(e, o.options, a, t);
                }, 10)),
                (xt = n),
                (Bt = i));
            } else {
              if (!this.options.bubbleScroll || fe(a, !0) === ce())
                return void It();
              Ft(e, this.options, fe(a, !1), !1);
            }
          },
        }),
        H(e, { pluginName: "scroll", initializeByDefault: !0 })
      );
    })(),
  ),
  wt.mount(Vt, zt);
/*! Pickr 1.9.0 MIT | https://github.com/Simonwep/pickr */
var Ht = (function (e) {
    var t = { exports: {} };
    return e(t, t.exports), t.exports;
  })(function (e, t) {
    var o;
    self,
      (o = () =>
        (() => {
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
          e.d(t, { default: () => E });
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
                  e &&
                    (l[e] || (l[e] = [])).push(Object.keys(i).length ? i : n);
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
            const n =
                ((2 * (t *= (o /= 100) < 0.5 ? o : 1 - o)) / (o + t)) * 100,
              i = 100 * (o + t);
            return [e, isNaN(n) ? 0 : n, i];
          }
          function w(e) {
            return b(...e.match(/.{2}/g).map((e) => parseInt(e, 16)));
          }
          function C(e = 0, t = 0, o = 0, n = 1) {
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
                clone: () => C(a.h, a.s, a.v, a.a),
              };
            return a;
          }
          const k = (e) => Math.max(Math.min(e, 1), 0);
          function q(e) {
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
                          : ((i = a ? -1 : r ? 1 : 0),
                            (n = s ? -1 : l ? 1 : 0)),
                        t.update(
                          k(t.cache.x + 0.01 * n),
                          k(t.cache.y + 0.01 * i),
                        ),
                        e.preventDefault();
                    } else
                      i.startsWith("Arrow") &&
                        (t.options.onstop(), e.preventDefault());
                  }
                },
                _tapstart(e) {
                  i(
                    document,
                    ["mouseup", "touchend", "touchcancel"],
                    t._tapstop,
                  ),
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
                  const d = k(s / r.width),
                    u = k(c / r.height);
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
          function T(e = {}) {
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
          const M = {
            variantFlipOrder: { start: "sme", middle: "mse", end: "ems" },
            positionFlipOrder: {
              top: "tbrl",
              right: "rltb",
              bottom: "btrl",
              left: "lrbt",
            },
            position: "bottom",
            margin: 8,
            padding: 0,
          };
          class E {
            static utils = o;
            static version = "1.9.0";
            static I18N_DEFAULTS = {
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
            };
            static DEFAULT_OPTIONS = {
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
            };
            _initializingActive = !0;
            _recalc = !0;
            _nanopop = null;
            _root = null;
            _color = C();
            _lastColor = C();
            _swatchColors = [];
            _setupAnimationFrame = null;
            _eventListener = {
              init: [],
              save: [],
              hide: [],
              show: [],
              clear: [],
              change: [],
              changestop: [],
              cancel: [],
              swatchselect: [],
            };
            constructor(e) {
              this.options = e = Object.assign({ ...E.DEFAULT_OPTIONS }, e);
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
                    return ((e, t, o) => {
                      const {
                          container: n,
                          arrow: i,
                          margin: a,
                          padding: l,
                          position: r,
                          variantFlipOrder: s,
                          positionFlipOrder: c,
                        } = {
                          container:
                            document.documentElement.getBoundingClientRect(),
                          ...M,
                          ...o,
                        },
                        { left: d, top: u } = t.style;
                      (t.style.left = "0"), (t.style.top = "0");
                      const h = e.getBoundingClientRect(),
                        p = t.getBoundingClientRect(),
                        g = {
                          t: h.top - p.height - a,
                          b: h.bottom + a,
                          r: h.right + a,
                          l: h.left - p.width - a,
                        },
                        m = {
                          vs: h.left,
                          vm: h.left + h.width / 2 - p.width / 2,
                          ve: h.left + h.width - p.width,
                          hs: h.top,
                          hm: h.bottom - h.height / 2 - p.height / 2,
                          he: h.bottom - p.height,
                        },
                        [f, b = "middle"] = r.split("-"),
                        v = c[f],
                        y = s[b],
                        { top: w, left: C, bottom: k, right: q } = n;
                      for (const e of v) {
                        const o = "t" === e || "b" === e;
                        let n = g[e];
                        const [a, r] = o ? ["top", "left"] : ["left", "top"],
                          [s, c] = o
                            ? [p.height, p.width]
                            : [p.width, p.height],
                          [d, u] = o ? [k, q] : [q, k],
                          [f, b] = o ? [w, C] : [C, w];
                        if (!(n < f || n + s + l > d))
                          for (const d of y) {
                            let g = m[(o ? "v" : "h") + d];
                            if (!(g < b || g + c + l > u)) {
                              if (
                                ((g -= p[r]),
                                (n -= p[a]),
                                (t.style[r] = `${g}px`),
                                (t.style[a] = `${n}px`),
                                i)
                              ) {
                                const e = o ? h.width / 2 : h.height / 2,
                                  t = 2 * e < c ? h[r] + e : g + c / 2;
                                n < h[a] && (n += s),
                                  (i.style[r] = `${t}px`),
                                  (i.style[a] = `${n}px`);
                              }
                              return e + d;
                            }
                          }
                      }
                      return (t.style.left = d), (t.style.top = u), null;
                    })(t, o, n);
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
            static create = (e) => new E(e);
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
                  u.options.find(
                    (e) => !e.hidden && !e.classList.add("active"),
                  ),
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
                a = () =>
                  this._color || (this._color = this._lastColor.clone()),
                l = {
                  palette: q({
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
                  hue: q({
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
                  opacity: q({
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
                  selectable: T({
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
                  i(
                    [e.interaction.cancel, e.preview.lastColor],
                    "click",
                    () => {
                      this.setHSVA(
                        ...(this._lastColor || this._color).toHSVA(),
                        !0,
                      ),
                        this._emit("cancel");
                    },
                  ),
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
                t.button.style.setProperty(
                  "--pcr-color",
                  "rgba(0, 0, 0, 0.15)",
                ),
                t.button.classList.add("clear"),
                o.showAlways || this.hide(),
                (this._lastColor = null),
                this._initializingActive ||
                  e ||
                  (this._emit("save", null), this._emit("clear"));
            }
            _parseLocalColor(e) {
              const {
                  values: t,
                  type: o,
                  a: n,
                } = (function (e) {
                  e = e.match(/^[a-zA-Z]+$/)
                    ? (function (e) {
                        if ("black" === e.toLowerCase()) return "#000";
                        const t = document
                          .createElement("canvas")
                          .getContext("2d");
                        return (
                          (t.fillStyle = e),
                          "#000" === t.fillStyle ? null : t.fillStyle
                        );
                      })(e)
                    : e;
                  const t = {
                      cmyk: /^cmyk\D+([\d.]+)\D+([\d.]+)\D+([\d.]+)\D+([\d.]+)/i,
                      rgba: /^rgba?\D+([\d.]+)(%?)\D+([\d.]+)(%?)\D+([\d.]+)(%?)\D*?(([\d.]+)(%?)|$)/i,
                      hsla: /^hsla?\D+([\d.]+)\D+([\d.]+)\D+([\d.]+)\D*?(([\d.]+)(%?)|$)/i,
                      hsva: /^hsva?\D+([\d.]+)\D+([\d.]+)\D+([\d.]+)\D*?(([\d.]+)(%?)|$)/i,
                      hexa: /^#?(([\dA-Fa-f]{3,4})|([\dA-Fa-f]{6})|([\dA-Fa-f]{8}))$/i,
                    },
                    o = (e) =>
                      e.map((e) =>
                        /^(|\d+)\.\d+|\d+$/.test(e) ? Number(e) : void 0,
                      );
                  let n;
                  e: for (const i in t)
                    if ((n = t[i].exec(e)))
                      switch (i) {
                        case "cmyk": {
                          const [, e, t, a, l] = o(n);
                          if (e > 100 || t > 100 || a > 100 || l > 100) break e;
                          return { values: v(e, t, a, l), type: i };
                        }
                        case "rgba": {
                          let [, e, , t, , a, , , l] = o(n);
                          if (
                            ((e = "%" === n[2] ? (e / 100) * 255 : e),
                            (t = "%" === n[4] ? (t / 100) * 255 : t),
                            (a = "%" === n[6] ? (a / 100) * 255 : a),
                            (l = "%" === n[9] ? l / 100 : l),
                            e > 255 || t > 255 || a > 255 || l < 0 || l > 1)
                          )
                            break e;
                          return { values: [...b(e, t, a), l], a: l, type: i };
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
                          let [, e, t, a, , l] = o(n);
                          if (
                            ((l = "%" === n[6] ? l / 100 : l),
                            e > 360 || t > 100 || a > 100 || l < 0 || l > 1)
                          )
                            break e;
                          return { values: [...y(e, t, a), l], a: l, type: i };
                        }
                        case "hsva": {
                          let [, e, t, a, , l] = o(n);
                          if (
                            ((l = "%" === n[6] ? l / 100 : l),
                            e > 360 || t > 100 || a > 100 || l < 0 || l > 1)
                          )
                            break e;
                          return { values: [e, t, a, l], a: l, type: i };
                        }
                      }
                  return { values: null, type: null };
                })(e),
                { lockOpacity: i } = this.options,
                a = void 0 !== n && 1 !== n;
              return (
                t && 3 === t.length && (t[3] = void 0),
                { values: !t || (i && a) ? null : t, type: o }
              );
            }
            _t(e) {
              return this.options.i18n[e] || E.I18N_DEFAULTS[e];
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
                  n = C(...t),
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
                this.options.useAsButton ||
                  o.style.setProperty("--pcr-color", n),
                o.classList.remove("clear"),
                (this._lastColor = this._color.clone()),
                this._initializingActive ||
                  e ||
                  this._emit("save", this._color),
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
              this._color = C(e, t, o, n);
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
                return (
                  !!this.setHSVA(...o, t) && this.setColorRepresentation(e)
                );
              }
              return !1;
            }
            setColorRepresentation(e) {
              return (
                (e = e.toUpperCase()),
                !!this._root.interaction.options.find(
                  (t) =>
                    t.getAttribute("data-type").startsWith(e) && !t.click(),
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
          return t.default;
        })()),
      (e.exports = o());
  }),
  Rt = Pt(Ht);
function Zt(e) {
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
function jt(e) {
  e.hide();
}
function Wt(e, t) {
  let o;
  return (
    t.forEach((t, n) => {
      t.id === e && (o = n);
    }),
    o
  );
}
class Xt extends e.PluginSettingTab {
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
      o
        .createEl("span", { text: "     教程： " })
        .createEl("a", {
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
            this.pickr = Rt.create(
              Zt({
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
              .on("cancel", jt);
        }),
      new e.Setting(o)
        .setName(u("🖌️ Set custom font color"))
        .setDesc(u("Click on the picker to adjust the colour"))
        .setClass("custom_font")
        .then((e) => {
          for (let n = 0; n < 5; n++)
            this.pickr = Rt.create(
              Zt({
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
              .on("cancel", jt);
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
    wt.create(a, {
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
          wt.create(n, {
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
                  null === (o = t[Wt(e.target.parentElement.dataset.id, t)]) ||
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
                      (n = t[Wt(e.target.parentElement.dataset.id, t)]) ||
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
const Yt = {
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
function Gt() {
  Object.keys(Yt).forEach((t) => {
    e.addIcon(t, Yt[t]);
  });
}
let Ut, Kt;
class Jt extends e.Plugin {
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
        (Kt = e.requireApiVersion("0.15.0")
          ? activeWindow.document
          : window.document),
        yield this.loadSettings(),
        this.addSettingTab(new Xt(this.app, this)),
        Gt(),
        this.generateCommands(),
        this.app.workspace.onLayoutReady(() => {
          setTimeout(() => {
            this.setupStatusBar();
          });
        }),
        this.init_evt(Kt),
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
      this.registerDomEvent(Kt, "keydown", (e) => {
        if ("following" !== this.settings.positionStyle) return;
        const t = q(this.app, this.settings);
        !e.shiftKey && t && (t.style.visibility = "hidden");
      }),
      this.registerDomEvent(Kt, "wheel", () => {
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
            Ut = e.requireApiVersion("0.15.0")
              ? activeWindow.document
              : window.document;
            let o = Ut;
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
    Gt(),
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
module.exports = Jt;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXMiOlsiLi4vbm9kZV9tb2R1bGVzL3RzbGliL3RzbGliLmVzNi5qcyIsIi4uL3NyYy91dGlsL3V0aWwudHMiLCIuLi9zcmMvaWNvbnMvYXBwSWNvbnMudHMiLCIuLi9zcmMvdXRpbC9zdGF0dXNCYXJDb25zdGFudHMudHMiLCIuLi9zcmMvdHJhbnNsYXRpb25zL2xvY2FsZS9hci50cyIsIi4uL3NyYy90cmFuc2xhdGlvbnMvbG9jYWxlL2VuLnRzIiwiLi4vc3JjL3RyYW5zbGF0aW9ucy9oZWxwZXIudHMiLCIuLi9zcmMvdHJhbnNsYXRpb25zL2xvY2FsZS9jei50cyIsIi4uL3NyYy90cmFuc2xhdGlvbnMvbG9jYWxlL2RhLnRzIiwiLi4vc3JjL3RyYW5zbGF0aW9ucy9sb2NhbGUvZGUudHMiLCIuLi9zcmMvdHJhbnNsYXRpb25zL2xvY2FsZS9lbi1nYi50cyIsIi4uL3NyYy90cmFuc2xhdGlvbnMvbG9jYWxlL2VzLnRzIiwiLi4vc3JjL3RyYW5zbGF0aW9ucy9sb2NhbGUvZnIudHMiLCIuLi9zcmMvdHJhbnNsYXRpb25zL2xvY2FsZS9oaS50cyIsIi4uL3NyYy90cmFuc2xhdGlvbnMvbG9jYWxlL2lkLnRzIiwiLi4vc3JjL3RyYW5zbGF0aW9ucy9sb2NhbGUvaXQudHMiLCIuLi9zcmMvdHJhbnNsYXRpb25zL2xvY2FsZS9qYS50cyIsIi4uL3NyYy90cmFuc2xhdGlvbnMvbG9jYWxlL2tvLnRzIiwiLi4vc3JjL3RyYW5zbGF0aW9ucy9sb2NhbGUvbmwudHMiLCIuLi9zcmMvdHJhbnNsYXRpb25zL2xvY2FsZS9uby50cyIsIi4uL3NyYy90cmFuc2xhdGlvbnMvbG9jYWxlL3BsLnRzIiwiLi4vc3JjL3RyYW5zbGF0aW9ucy9sb2NhbGUvcHQudHMiLCIuLi9zcmMvdHJhbnNsYXRpb25zL2xvY2FsZS9wdC1ici50cyIsIi4uL3NyYy90cmFuc2xhdGlvbnMvbG9jYWxlL3JvLnRzIiwiLi4vc3JjL3RyYW5zbGF0aW9ucy9sb2NhbGUvcnUudHMiLCIuLi9zcmMvdHJhbnNsYXRpb25zL2xvY2FsZS90ci50cyIsIi4uL3NyYy90cmFuc2xhdGlvbnMvbG9jYWxlL3poLWNuLnRzIiwiLi4vc3JjL3RyYW5zbGF0aW9ucy9sb2NhbGUvemgtdHcudHMiLCIuLi9zcmMvbW9kYWxzL3N1Z2dlc3Rlck1vZGFscy50cyIsIi4uL3NyYy9zZXR0aW5ncy9zZXR0aW5nc0RhdGEudHMiLCIuLi9zcmMvbW9kYWxzL2NNZW51VG9vbGJhck1vZGFsLnRzIiwiLi4vbm9kZV9tb2R1bGVzL3NvcnRhYmxlanMvbW9kdWxhci9zb3J0YWJsZS5lc20uanMiLCIuLi9ub2RlX21vZHVsZXMvQHNpbW9ud2VwL3BpY2tyL2Rpc3QvcGlja3IubWluLmpzIiwiLi4vc3JjL3NldHRpbmdzL3NldHRpbmdzVGFiLnRzIiwiLi4vc3JjL2ljb25zL2N1c3RvbUljb25zLnRzIiwiLi4vc3JjL3V0aWwvZnVsbHNjcmVlbi50cyIsIi4uL3NyYy9wbHVnaW4vbWFpbi50cyJdLCJzb3VyY2VzQ29udGVudCI6bnVsbCwibmFtZXMiOlsiX19hd2FpdGVyIiwidGhpc0FyZyIsIl9hcmd1bWVudHMiLCJQIiwiZ2VuZXJhdG9yIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJmdWxmaWxsZWQiLCJ2YWx1ZSIsInN0ZXAiLCJuZXh0IiwiZSIsInJlamVjdGVkIiwicmVzdWx0IiwiZG9uZSIsInRoZW4iLCJhcHBseSIsIndhaXQiLCJkZWxheSIsInNldFRpbWVvdXQiLCJHZW5Ob25EdXBsaWNhdGVJRCIsInJhbmRvbUxlbmd0aCIsImlkU3RyIiwiRGF0ZSIsIm5vdyIsInRvU3RyaW5nIiwiTWF0aCIsInJhbmRvbSIsInN1YnN0ciIsImZpbmRtZW51SUQiLCJwbHVnaW4iLCJjb21tYW5kIiwiaXNzdWIiLCJpbmRleCIsInJlcyIsInN1YmluZGV4IiwibWVudWNtZCIsInNldHRpbmdzIiwibWVudUNvbW1hbmRzIiwiZm9yRWFjaCIsIml0ZW0iLCJpZHgiLCJTdWJtZW51Q29tbWFuZHMiLCJmaW5kSW5kZXgiLCJ2IiwiaWQiLCJTdXBwcmVzc2VkRXJyb3IiLCJhcHBJY29ucyIsImFjdGl2ZURvY3VtZW50Iiwic2V0TWVudVZpc2liaWxpdHkiLCJjTWVudVZpc2liaWxpdHkiLCJyZXF1aXJlQXBpVmVyc2lvbiIsImFjdGl2ZVdpbmRvdyIsImRvY3VtZW50Iiwid2luZG93IiwiY01lbnVUb29sYmFyTW9kYWxCYXIiLCJnZXRFbGVtZW50QnlJZCIsInN0eWxlIiwidmlzaWJpbGl0eSIsInNldEJvdHRvbVZhbHVlIiwicG9zaXRpb25TdHlsZSIsInNldEF0dHJpYnV0ZSIsIm9mZnNldFdpZHRoIiwiY01lbnVCb3R0b21WYWx1ZSIsInJlcGVhdCIsImNNZW51TnVtUm93cyIsImVuIiwiTW9yZSIsIlJlZnJlc2giLCJBZGQiLCJEZWxldGUiLCJsb2NhbGUiLCJhciIsImNzIiwiZGEiLCJkZSIsImVzIiwiZnIiLCJoaSIsIml0IiwiamEiLCJrbyIsIm5sIiwibm4iLCJwbCIsInB0Iiwicm8iLCJydSIsInRyIiwibW9tZW50IiwidCIsInN0ciIsIkNob29zZUZyb21JY29uTGlzdCIsIkZ1enp5U3VnZ2VzdE1vZGFsIiwiY29uc3RydWN0b3IiLCJzdXBlciIsImFwcCIsInRoaXMiLCJzZXRQbGFjZWhvbGRlciIsImNhcGl0YWxKb2luIiwic3RyaW5nIiwic3BsaXQiLCJtYXAiLCJpY29uIiwidG9VcHBlckNhc2UiLCJzdWJzdHJpbmciLCJqb2luIiwiZ2V0SXRlbXMiLCJnZXRJdGVtVGV4dCIsInJlcGxhY2UiLCJ0cmltIiwicmVuZGVyU3VnZ2VzdGlvbiIsImljb25JdGVtIiwic3BhbiIsImNyZWF0ZVNwYW4iLCJjbHMiLCJhcHBlbmRDaGlsZCIsInNldEljb24iLCJvbkNob29zZUl0ZW0iLCJDdXN0b21JY29uIiwib3BlbiIsIm1lbnVJRCIsInB1c2giLCJzYXZlU2V0dGluZ3MiLCJkaXNwYXRjaEV2ZW50IiwiRXZlbnQiLCJjb25zb2xlIiwibG9nIiwibmFtZSIsIkNvbW1hbmRQaWNrZXIiLCJjb21tYW5kcyIsImxpc3RDb21tYW5kcyIsIk5vdGljZSIsIk1vZGFsIiwiY29udGFpbmVyRWwiLCJhZGRDbGFzcyIsIm9uT3BlbiIsImNvbnRlbnRFbCIsImNyZWF0ZUVsIiwidGV4dCIsInRleHRDb21wb25lbnQiLCJUZXh0QXJlYUNvbXBvbmVudCIsImlucHV0RWwiLCJjbGFzc0xpc3QiLCJhZGQiLCJzZXRWYWx1ZSIsIl9hIiwib25DaGFuZ2UiLCJkZWJvdW5jZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJzdWJtaXRFbnRlckNhbGxiYWNrIiwib25DbG9zZSIsImVtcHR5IiwiQ2hhbmdlQ21kbmFtZSIsIlRleHRDb21wb25lbnQiLCJvcGVuU2xpZGVyIiwidG9wZW0iLCJTbGlkZXJDb21wb25lbnQiLCJzZXRMaW1pdHMiLCJzZXREeW5hbWljVG9vbHRpcCIsIkFQUEVORF9NRVRIT0RTIiwiQUVTVEhFVElDX1NUWUxFUyIsIlBPU0lUSU9OX1NUWUxFUyIsIkRFRkFVTFRfU0VUVElOR1MiLCJhZXN0aGV0aWNTdHlsZSIsImFwcGVuZE1ldGhvZCIsInNob3VsZFNob3dNZW51T25TZWxlY3QiLCJjTWVudVdpZHRoIiwiY01lbnVGb250Q29sb3IiLCJjTWVudUJhY2tncm91bmRDb2xvciIsImF1dG9oaWRlIiwiY3VzdG9tX2JnMSIsImN1c3RvbV9iZzIiLCJjdXN0b21fYmczIiwiY3VzdG9tX2JnNCIsImN1c3RvbV9iZzUiLCJjdXN0b21fZmMxIiwiY3VzdG9tX2ZjMiIsImN1c3RvbV9mYzMiLCJjdXN0b21fZmM0IiwiY3VzdG9tX2ZjNSIsImlzTG9hZE9uTW9iaWxlIiwic2VsZkRlc3RydWN0IiwidG9vbEJhckVsZW1lbnQiLCJyZW1vdmUiLCJyb290U3BsaXRzIiwid29ya3NwYWNlIiwicm9vdFNwbGl0IiwiZmxvYXRpbmdTcGxpdCIsImNoaWxkcmVuIiwiY2hpbGQiLCJXb3Jrc3BhY2VXaW5kb3ciLCJnZXRSb290U3BsaXRzIiwibGVhZiIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJjTWVudVRvb2xiYXJQb3BvdmVyQmFyIiwiZWxlbWVudCIsImZpcnN0Q2hpbGQiLCJyZW1vdmVDaGlsZCIsImNsZWFyVG9vbGJhciIsImlzRXhpc3Rvb2xiYXIiLCJjb250YWluZXIiLCJfYiIsImFjdGl2ZUxlYWYiLCJ2aWV3IiwicXVlcnlTZWxlY3RvciIsImdldE5lc3RlZE9iamVjdCIsIm5lc3RlZE9iaiIsInBhdGhBcnIiLCJyZWR1Y2UiLCJvYmoiLCJrZXkiLCJ1bmRlZmluZWQiLCJzZXRIaWxpdGUiLCJrZXlzIiwiaG93IiwiZmxhdCIsImdldEhvdGtleSIsImNtZGlkIiwiaGlnaGxpZ2h0IiwiYXJyIiwiZmluZENvbW1hbmQiLCJkZWZrZXlzIiwiaG90a2V5cyIsImNrIiwiaG90a2V5TWFuYWdlciIsImN1c3RvbUtleXMiLCJpc1NvdXJjZSIsImdldEFjdGl2ZVZpZXdPZlR5cGUiLCJJdGVtVmlldyIsImdldFZpZXdUeXBlIiwiYWN0aXZlVmlldyIsImdldE1vZGUiLCJjaGVja0h0bWwiLCJodG1sU3RyIiwidGVzdCIsImNyZWF0ZVRhYmxlY2VsbCIsImVsIiwidGFiIiwicm93cyIsInJsZW4iLCJsZW5ndGgiLCJpIiwiY2VsbHMiLCJqIiwib25jbGljayIsImJhY2tjb2xvciIsImJhY2tncm91bmRDb2xvciIsInNldGNvbG9ySGV4Iiwic2V0Rm9udGNvbG9yIiwiZmlsbCIsInNldEJhY2tncm91bmRjb2xvciIsImNvbG9yIiwiZWRpdG9yIiwic2VsZWN0VGV4dCIsImdldFNlbGVjdGlvbiIsIl9odG1sMSIsIl9odG1sMiIsInJlcGxhY2VTZWxlY3Rpb24iLCJleGVjIiwiZXhlY3V0ZUNvbW1hbmRCeUlkIiwidGhhdCIsImFDb2xvciIsInN0ckhleCIsImhleCIsIk51bWJlciIsImFOdW0iLCJudW1IZXgiLCJxdWl0ZUZvcm1hdGJydXNoZXMiLCJUZW1wX05vdGljZSIsImhpZGUiLCJzZXRFTl9CR19Gb3JtYXRfQnJ1c2giLCJzZXRFTl9Gb250Q29sb3JfRm9ybWF0X0JydXNoIiwic2V0RU5fVGV4dF9Gb3JtYXRfQnJ1c2giLCJzZXRIZWFkZXIiLCJfc3RyIiwibmV3c3RyIiwibGluZXRleHQiLCJnZXRMaW5lIiwiZ2V0Q3Vyc29yIiwibGluZSIsImxpbmVuZCIsInJlZ2V4IiwibWF0Y2hzdHIiLCJtYXRjaCIsImdldFJhbmdlIiwiY2giLCJzZXRMaW5lIiwic2V0Q3Vyc29yIiwic2V0Rm9ybWF0ZXJhc2VyIiwibm90aWNlRWwiLCJpbm5lclRleHQiLCJtZFRleHQiLCJjcmVhdGVGb2xsb3dpbmdiYXIiLCJzb21ldGhpbmdTZWxlY3RlZCIsImhlaWdodCIsInJlbW92ZUNsYXNzIiwiZWRpdG9yUmVjdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInRvb2xiYXJXaWR0aCIsInRvb2xiYXJIZWlnaHQiLCJvZmZzZXRIZWlnaHQiLCJjb29yZHMiLCJjdXJzb3JGcm9tIiwibWF4IiwiY3Vyc29yQ29vcmRzIiwiY29vcmRzQXRQb3MiLCJvZmZzZXQiLCJwb3NUb09mZnNldCIsIl9jIiwiY20iLCJnZXRDb29yZHMiLCJpc1NlbGVjdGlvbkZyb21Cb3R0b21Ub1RvcCIsInJpZ2h0TWFyZ2luIiwibGVmdFNpZGVEb2NrV2lkdGgiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwiY2xpZW50V2lkdGgiLCJfZSIsIl9kIiwibGVmdFBvc2l0aW9uIiwibGVmdCIsInJpZ2h0IiwidG9wUG9zaXRpb24iLCJ0b3AiLCJib3R0b20iLCJjTWVudVRvb2xiYXJQb3BvdmVyIiwiZ2VuZXJhdGVNZW51IiwiYnRud2lkdGgiLCJsZWFmd2lkdGgiLCJjTWVudVRvb2xiYXIiLCJjbGFzc05hbWUiLCJQb3BvdmVyTWVudSIsImN1cnJlbnRsZWFmIiwibWFya2Rvd25Eb20iLCJpbnNlcnRBZGphY2VudEVsZW1lbnQiLCJtYXJrZG93bkRvbTIiLCJib2R5IiwidGlwIiwiX2J0biIsInNldElTX01PUkVfQnV0dG9uIiwiQnV0dG9uQ29tcG9uZW50Iiwic2V0Q2xhc3MiLCJidXR0b25FbCIsImlubmVySFRNTCIsInN1Ym1lbnUiLCJzZWxlY3RvciIsImRpdiIsImNyZWF0ZURpdiIsInN1Yml0ZW0iLCJob3RrZXkiLCJzdWJfYnRuIiwic2V0VG9vbHRpcCIsIm9uQ2xpY2siLCJidXR0b24yIiwic3VibWVudTIiLCJjb2xvcnBpY2tlciIsInNldHRpbmciLCJvcGVuVGFiQnlJZCIsInNldHRpbmdFSSIsImFjdGl2ZVRhYiIsImNhbGwiLCJiYWNrY29sb3JwaWNrZXIiLCJidXR0b24iLCJNb3JlY29udGFpbmVyIiwiSVNfTU9SRV9CdXR0b24iLCJjTW9yZU1lbnUiLCJtb3JlYnV0dG9uIiwiY3JlYXRlTW9yZW1lbnUiLCJhYnMiLCJpc0xvYWRNb2JpbGUiLCJmb250Y29sb3IiLCJiZ2NvbG9yIiwiZm9udF9jb2xvdXJfZG9tIiwiYmFja2dyb3VuZF9jb2xvdXJfZG9tIiwic2V0c3ZnQ29sb3IiLCJjcmVhdGVNZW51Iiwib3duS2V5cyIsIm9iamVjdCIsImVudW1lcmFibGVPbmx5IiwiT2JqZWN0IiwiZ2V0T3duUHJvcGVydHlTeW1ib2xzIiwic3ltYm9scyIsImZpbHRlciIsInN5bSIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsImVudW1lcmFibGUiLCJfb2JqZWN0U3ByZWFkMiIsInRhcmdldCIsImFyZ3VtZW50cyIsInNvdXJjZSIsIl9kZWZpbmVQcm9wZXJ0eSIsImdldE93blByb3BlcnR5RGVzY3JpcHRvcnMiLCJkZWZpbmVQcm9wZXJ0aWVzIiwiZGVmaW5lUHJvcGVydHkiLCJfdHlwZW9mIiwiU3ltYm9sIiwiaXRlcmF0b3IiLCJwcm90b3R5cGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsIl9leHRlbmRzIiwiYXNzaWduIiwiaGFzT3duUHJvcGVydHkiLCJfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMiLCJleGNsdWRlZCIsInNvdXJjZUtleXMiLCJpbmRleE9mIiwiX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UiLCJzb3VyY2VTeW1ib2xLZXlzIiwicHJvcGVydHlJc0VudW1lcmFibGUiLCJ1c2VyQWdlbnQiLCJwYXR0ZXJuIiwibmF2aWdhdG9yIiwiSUUxMU9yTGVzcyIsIkVkZ2UiLCJGaXJlRm94IiwiU2FmYXJpIiwiSU9TIiwiQ2hyb21lRm9yQW5kcm9pZCIsImNhcHR1cmVNb2RlIiwiY2FwdHVyZSIsInBhc3NpdmUiLCJvbiIsImV2ZW50IiwiZm4iLCJvZmYiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwibWF0Y2hlcyIsIm1zTWF0Y2hlc1NlbGVjdG9yIiwid2Via2l0TWF0Y2hlc1NlbGVjdG9yIiwiXyIsImdldFBhcmVudE9ySG9zdCIsImhvc3QiLCJub2RlVHlwZSIsInBhcmVudE5vZGUiLCJjbG9zZXN0IiwiY3R4IiwiaW5jbHVkZUNUWCIsIl90aHJvdHRsZVRpbWVvdXQiLCJSX1NQQUNFIiwidG9nZ2xlQ2xhc3MiLCJzdGF0ZSIsImNzcyIsInByb3AiLCJ2YWwiLCJkZWZhdWx0VmlldyIsImdldENvbXB1dGVkU3R5bGUiLCJjdXJyZW50U3R5bGUiLCJtYXRyaXgiLCJzZWxmT25seSIsImFwcGxpZWRUcmFuc2Zvcm1zIiwidHJhbnNmb3JtIiwibWF0cml4Rm4iLCJET01NYXRyaXgiLCJXZWJLaXRDU1NNYXRyaXgiLCJDU1NNYXRyaXgiLCJNU0NTU01hdHJpeCIsImZpbmQiLCJ0YWdOYW1lIiwibGlzdCIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwibiIsImdldFdpbmRvd1Njcm9sbGluZ0VsZW1lbnQiLCJzY3JvbGxpbmdFbGVtZW50IiwiZG9jdW1lbnRFbGVtZW50IiwiZ2V0UmVjdCIsInJlbGF0aXZlVG9Db250YWluaW5nQmxvY2siLCJyZWxhdGl2ZVRvTm9uU3RhdGljUGFyZW50IiwidW5kb1NjYWxlIiwiZWxSZWN0Iiwid2lkdGgiLCJpbm5lckhlaWdodCIsImlubmVyV2lkdGgiLCJjb250YWluZXJSZWN0IiwicGFyc2VJbnQiLCJlbE1hdHJpeCIsInNjYWxlWCIsImEiLCJzY2FsZVkiLCJkIiwiaXNTY3JvbGxlZFBhc3QiLCJlbFNpZGUiLCJwYXJlbnRTaWRlIiwicGFyZW50IiwiZ2V0UGFyZW50QXV0b1Njcm9sbEVsZW1lbnQiLCJlbFNpZGVWYWwiLCJwYXJlbnRTaWRlVmFsIiwiZ2V0Q2hpbGQiLCJjaGlsZE51bSIsIm9wdGlvbnMiLCJpbmNsdWRlRHJhZ0VsIiwiY3VycmVudENoaWxkIiwiZGlzcGxheSIsIlNvcnRhYmxlIiwiZ2hvc3QiLCJkcmFnZ2VkIiwiZHJhZ2dhYmxlIiwibGFzdENoaWxkIiwibGFzdCIsImxhc3RFbGVtZW50Q2hpbGQiLCJwcmV2aW91c0VsZW1lbnRTaWJsaW5nIiwibm9kZU5hbWUiLCJjbG9uZSIsImdldFJlbGF0aXZlU2Nyb2xsT2Zmc2V0Iiwib2Zmc2V0TGVmdCIsIm9mZnNldFRvcCIsIndpblNjcm9sbGVyIiwic2Nyb2xsTGVmdCIsInNjcm9sbFRvcCIsImluY2x1ZGVTZWxmIiwiZWxlbSIsImdvdFNlbGYiLCJzY3JvbGxXaWR0aCIsImNsaWVudEhlaWdodCIsInNjcm9sbEhlaWdodCIsImVsZW1DU1MiLCJvdmVyZmxvd1giLCJvdmVyZmxvd1kiLCJpc1JlY3RFcXVhbCIsInJlY3QxIiwicmVjdDIiLCJyb3VuZCIsInRocm90dGxlIiwiY2FsbGJhY2siLCJtcyIsImFyZ3MiLCJfdGhpcyIsInNjcm9sbEJ5IiwieCIsInkiLCJQb2x5bWVyIiwiJCIsImpRdWVyeSIsIlplcHRvIiwiZG9tIiwiY2xvbmVOb2RlIiwiZ2V0Q2hpbGRDb250YWluaW5nUmVjdEZyb21FbGVtZW50IiwiZ2hvc3RFbCIsInJlY3QiLCJBcnJheSIsImZyb20iLCJfcmVjdCRsZWZ0IiwiX3JlY3QkdG9wIiwiX3JlY3QkcmlnaHQiLCJfcmVjdCRib3R0b20iLCJhbmltYXRlZCIsImNoaWxkUmVjdCIsIm1pbiIsIkluZmluaXR5IiwiZXhwYW5kbyIsImdldFRpbWUiLCJBbmltYXRpb25TdGF0ZU1hbmFnZXIiLCJhbmltYXRpb25DYWxsYmFja0lkIiwiYW5pbWF0aW9uU3RhdGVzIiwiY2FwdHVyZUFuaW1hdGlvblN0YXRlIiwiYW5pbWF0aW9uIiwic2xpY2UiLCJmcm9tUmVjdCIsInRoaXNBbmltYXRpb25EdXJhdGlvbiIsImNoaWxkTWF0cml4IiwiZiIsImFkZEFuaW1hdGlvblN0YXRlIiwicmVtb3ZlQW5pbWF0aW9uU3RhdGUiLCJzcGxpY2UiLCJpbmRleE9mT2JqZWN0IiwiYW5pbWF0ZUFsbCIsImNsZWFyVGltZW91dCIsImFuaW1hdGluZyIsImFuaW1hdGlvblRpbWUiLCJ0aW1lIiwidG9SZWN0IiwicHJldkZyb21SZWN0IiwicHJldlRvUmVjdCIsImFuaW1hdGluZ1JlY3QiLCJ0YXJnZXRNYXRyaXgiLCJzcXJ0IiwicG93IiwiY2FsY3VsYXRlUmVhbFRpbWUiLCJhbmltYXRlIiwiYW5pbWF0aW9uUmVzZXRUaW1lciIsImN1cnJlbnRSZWN0IiwiZHVyYXRpb24iLCJ0cmFuc2xhdGVYIiwidHJhbnNsYXRlWSIsImFuaW1hdGluZ1giLCJhbmltYXRpbmdZIiwiZm9yUmVwYWludER1bW15IiwicmVwYWludCIsImVhc2luZyIsInBsdWdpbnMiLCJkZWZhdWx0cyIsImluaXRpYWxpemVCeURlZmF1bHQiLCJQbHVnaW5NYW5hZ2VyIiwibW91bnQiLCJvcHRpb24iLCJwIiwicGx1Z2luTmFtZSIsImNvbmNhdCIsInBsdWdpbkV2ZW50IiwiZXZlbnROYW1lIiwic29ydGFibGUiLCJldnQiLCJldmVudENhbmNlbGVkIiwiY2FuY2VsIiwiZXZlbnROYW1lR2xvYmFsIiwiaW5pdGlhbGl6ZVBsdWdpbnMiLCJpbml0aWFsaXplZCIsIm1vZGlmaWVkIiwibW9kaWZ5T3B0aW9uIiwiZ2V0RXZlbnRQcm9wZXJ0aWVzIiwiZXZlbnRQcm9wZXJ0aWVzIiwibW9kaWZpZWRWYWx1ZSIsIm9wdGlvbkxpc3RlbmVycyIsIl9leGNsdWRlZCIsIl9yZWYiLCJvcmlnaW5hbEV2ZW50IiwiZGF0YSIsImJpbmQiLCJkcmFnRWwiLCJwYXJlbnRFbCIsInJvb3RFbCIsIm5leHRFbCIsImxhc3REb3duRWwiLCJjbG9uZUVsIiwiY2xvbmVIaWRkZW4iLCJkcmFnU3RhcnRlZCIsIm1vdmVkIiwicHV0U29ydGFibGUiLCJhY3RpdmVTb3J0YWJsZSIsImFjdGl2ZSIsIm9sZEluZGV4Iiwib2xkRHJhZ2dhYmxlSW5kZXgiLCJuZXdJbmRleCIsIm5ld0RyYWdnYWJsZUluZGV4IiwiaGlkZUdob3N0Rm9yVGFyZ2V0IiwiX2hpZGVHaG9zdEZvclRhcmdldCIsInVuaGlkZUdob3N0Rm9yVGFyZ2V0IiwiX3VuaGlkZUdob3N0Rm9yVGFyZ2V0IiwiY2xvbmVOb3dIaWRkZW4iLCJjbG9uZU5vd1Nob3duIiwiZGlzcGF0Y2hTb3J0YWJsZUV2ZW50IiwiX2Rpc3BhdGNoRXZlbnQiLCJpbmZvIiwidGFyZ2V0RWwiLCJ0b0VsIiwiZnJvbUVsIiwiZXh0cmFFdmVudFByb3BlcnRpZXMiLCJvbk5hbWUiLCJjaGFyQXQiLCJDdXN0b21FdmVudCIsImNyZWF0ZUV2ZW50IiwiaW5pdEV2ZW50IiwiYnViYmxlcyIsImNhbmNlbGFibGUiLCJ0byIsInB1bGxNb2RlIiwibGFzdFB1dE1vZGUiLCJhbGxFdmVudFByb3BlcnRpZXMiLCJhY3RpdmVHcm91cCIsInRhcEV2dCIsInRvdWNoRXZ0IiwibGFzdER4IiwibGFzdER5IiwidGFwRGlzdGFuY2VMZWZ0IiwidGFwRGlzdGFuY2VUb3AiLCJsYXN0VGFyZ2V0IiwibGFzdERpcmVjdGlvbiIsInRhcmdldE1vdmVEaXN0YW5jZSIsImdob3N0UmVsYXRpdmVQYXJlbnQiLCJhd2FpdGluZ0RyYWdTdGFydGVkIiwiaWdub3JlTmV4dENsaWNrIiwic29ydGFibGVzIiwicGFzdEZpcnN0SW52ZXJ0VGhyZXNoIiwiaXNDaXJjdW1zdGFudGlhbEludmVydCIsImdob3N0UmVsYXRpdmVQYXJlbnRJbml0aWFsU2Nyb2xsIiwiX3NpbGVudCIsInNhdmVkSW5wdXRDaGVja2VkIiwiZG9jdW1lbnRFeGlzdHMiLCJQb3NpdGlvbkdob3N0QWJzb2x1dGVseSIsIkNTU0Zsb2F0UHJvcGVydHkiLCJzdXBwb3J0RHJhZ2dhYmxlIiwiY3JlYXRlRWxlbWVudCIsInN1cHBvcnRDc3NQb2ludGVyRXZlbnRzIiwiY3NzVGV4dCIsInBvaW50ZXJFdmVudHMiLCJfZGV0ZWN0RGlyZWN0aW9uIiwiZWxDU1MiLCJlbFdpZHRoIiwicGFkZGluZ0xlZnQiLCJwYWRkaW5nUmlnaHQiLCJib3JkZXJMZWZ0V2lkdGgiLCJib3JkZXJSaWdodFdpZHRoIiwiY2hpbGQxIiwiY2hpbGQyIiwiZmlyc3RDaGlsZENTUyIsInNlY29uZENoaWxkQ1NTIiwiZmlyc3RDaGlsZFdpZHRoIiwibWFyZ2luTGVmdCIsIm1hcmdpblJpZ2h0Iiwic2Vjb25kQ2hpbGRXaWR0aCIsImZsZXhEaXJlY3Rpb24iLCJncmlkVGVtcGxhdGVDb2x1bW5zIiwidG91Y2hpbmdTaWRlQ2hpbGQyIiwiY2xlYXIiLCJfcHJlcGFyZUdyb3VwIiwidG9GbiIsInB1bGwiLCJzYW1lR3JvdXAiLCJncm91cCIsIm90aGVyR3JvdXAiLCJvcmlnaW5hbEdyb3VwIiwiY2hlY2tQdWxsIiwiY2hlY2tQdXQiLCJwdXQiLCJyZXZlcnRDbG9uZSIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwic3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uIiwibmVhcmVzdEVtcHR5SW5zZXJ0RGV0ZWN0RXZlbnQiLCJ0b3VjaGVzIiwibmVhcmVzdCIsImNsaWVudFgiLCJjbGllbnRZIiwic29tZSIsInRocmVzaG9sZCIsImVtcHR5SW5zZXJ0VGhyZXNob2xkIiwiaW5zaWRlSG9yaXpvbnRhbGx5IiwiaW5zaWRlVmVydGljYWxseSIsInJldCIsIl9vbkRyYWdPdmVyIiwiX2NoZWNrT3V0c2lkZVRhcmdldEVsIiwiX2lzT3V0c2lkZVRoaXNFbCIsInNvcnQiLCJkaXNhYmxlZCIsInN0b3JlIiwiaGFuZGxlIiwic3dhcFRocmVzaG9sZCIsImludmVydFN3YXAiLCJpbnZlcnRlZFN3YXBUaHJlc2hvbGQiLCJyZW1vdmVDbG9uZU9uSGlkZSIsImRpcmVjdGlvbiIsImdob3N0Q2xhc3MiLCJjaG9zZW5DbGFzcyIsImRyYWdDbGFzcyIsImlnbm9yZSIsInByZXZlbnRPbkZpbHRlciIsInNldERhdGEiLCJkYXRhVHJhbnNmZXIiLCJ0ZXh0Q29udGVudCIsImRyb3BCdWJibGUiLCJkcmFnb3ZlckJ1YmJsZSIsImRhdGFJZEF0dHIiLCJkZWxheU9uVG91Y2hPbmx5IiwidG91Y2hTdGFydFRocmVzaG9sZCIsImRldmljZVBpeGVsUmF0aW8iLCJmb3JjZUZhbGxiYWNrIiwiZmFsbGJhY2tDbGFzcyIsImZhbGxiYWNrT25Cb2R5IiwiZmFsbGJhY2tUb2xlcmFuY2UiLCJmYWxsYmFja09mZnNldCIsInN1cHBvcnRQb2ludGVyIiwibmF0aXZlRHJhZ2dhYmxlIiwiX29uVGFwU3RhcnQiLCJnZXQiLCJfb25Nb3ZlIiwiZHJhZ1JlY3QiLCJ0YXJnZXRSZWN0Iiwid2lsbEluc2VydEFmdGVyIiwicmV0VmFsIiwib25Nb3ZlRm4iLCJvbk1vdmUiLCJkcmFnZ2VkUmVjdCIsInJlbGF0ZWQiLCJyZWxhdGVkUmVjdCIsIl9kaXNhYmxlRHJhZ2dhYmxlIiwiX3Vuc2lsZW50IiwiX2dlbmVyYXRlSWQiLCJzcmMiLCJocmVmIiwic3VtIiwiY2hhckNvZGVBdCIsIl9uZXh0VGljayIsIl9jYW5jZWxOZXh0VGljayIsImNvbnRhaW5zIiwiX2dldERpcmVjdGlvbiIsInR5cGUiLCJ0b3VjaCIsInBvaW50ZXJUeXBlIiwib3JpZ2luYWxUYXJnZXQiLCJzaGFkb3dSb290IiwicGF0aCIsImNvbXBvc2VkUGF0aCIsInJvb3QiLCJpbnB1dHMiLCJjaGVja2VkIiwiX3NhdmVJbnB1dENoZWNrZWRTdGF0ZSIsImlzQ29udGVudEVkaXRhYmxlIiwiY3JpdGVyaWEiLCJfcHJlcGFyZURyYWdTdGFydCIsImRyYWdTdGFydEZuIiwib3duZXJEb2N1bWVudCIsIm5leHRTaWJsaW5nIiwiX2xhc3RYIiwiX2xhc3RZIiwiX29uRHJvcCIsIl9kaXNhYmxlRGVsYXllZERyYWdFdmVudHMiLCJfdHJpZ2dlckRyYWdTdGFydCIsIl9kaXNhYmxlRGVsYXllZERyYWciLCJfZGVsYXllZERyYWdUb3VjaE1vdmVIYW5kbGVyIiwiX2RyYWdTdGFydFRpbWVyIiwiZmxvb3IiLCJfb25Ub3VjaE1vdmUiLCJfb25EcmFnU3RhcnQiLCJzZWxlY3Rpb24iLCJyZW1vdmVBbGxSYW5nZXMiLCJlcnIiLCJfZHJhZ1N0YXJ0ZWQiLCJmYWxsYmFjayIsIl9hcHBlbmRHaG9zdCIsIl9udWxsaW5nIiwiX2VtdWxhdGVEcmFnT3ZlciIsImVsZW1lbnRGcm9tUG9pbnQiLCJnaG9zdE1hdHJpeCIsInJlbGF0aXZlU2Nyb2xsT2Zmc2V0IiwiZHgiLCJkeSIsImIiLCJjIiwiY3NzTWF0cml4IiwicmVtb3ZlQXR0cmlidXRlIiwiX2hpZGVDbG9uZSIsImNsb25lSWQiLCJpbnNlcnRCZWZvcmUiLCJfbG9vcElkIiwic2V0SW50ZXJ2YWwiLCJlZmZlY3RBbGxvd2VkIiwiX2RyYWdTdGFydElkIiwicmV2ZXJ0IiwidmVydGljYWwiLCJpc093bmVyIiwiY2FuU29ydCIsImZyb21Tb3J0YWJsZSIsImNvbXBsZXRlZEZpcmVkIiwiZHJhZ092ZXJFdmVudCIsIl9pZ25vcmVXaGlsZUFuaW1hdGluZyIsImNvbXBsZXRlZCIsImVsTGFzdENoaWxkIiwibGFzdEVsUmVjdCIsImNoaWxkQ29udGFpbmluZ1JlY3QiLCJzcGFjZXIiLCJfZ2hvc3RJc0xhc3QiLCJjaGFuZ2VkIiwiZmlyc3RFbFJlY3QiLCJfZ2hvc3RJc0ZpcnN0IiwidGFyZ2V0QmVmb3JlRmlyc3RTd2FwIiwic2libGluZyIsImRpZmZlcmVudExldmVsIiwiZGlmZmVyZW50Um93Q29sIiwiZHJhZ0VsUzFPcHAiLCJkcmFnRWxTMk9wcCIsImRyYWdFbE9wcExlbmd0aCIsInRhcmdldFMxT3BwIiwidGFyZ2V0UzJPcHAiLCJ0YXJnZXRPcHBMZW5ndGgiLCJfZHJhZ0VsSW5Sb3dDb2x1bW4iLCJzaWRlMSIsInNjcm9sbGVkUGFzdFRvcCIsInNjcm9sbEJlZm9yZSIsImlzTGFzdFRhcmdldCIsIm1vdXNlT25BeGlzIiwidGFyZ2V0TGVuZ3RoIiwidGFyZ2V0UzEiLCJ0YXJnZXRTMiIsImludmVydCIsIl9nZXRJbnNlcnREaXJlY3Rpb24iLCJfZ2V0U3dhcERpcmVjdGlvbiIsImRyYWdJbmRleCIsIm5leHRFbGVtZW50U2libGluZyIsImFmdGVyIiwibW92ZVZlY3RvciIsImV4dHJhIiwiYXhpcyIsImluc2VydGlvbiIsIl9zaG93Q2xvbmUiLCJfb2ZmTW92ZUV2ZW50cyIsIl9vZmZVcEV2ZW50cyIsImNsZWFySW50ZXJ2YWwiLCJzYXZlIiwiaGFuZGxlRXZlbnQiLCJkcm9wRWZmZWN0IiwiX2dsb2JhbERyYWdPdmVyIiwidG9BcnJheSIsIm9yZGVyIiwiZ2V0QXR0cmlidXRlIiwidXNlQW5pbWF0aW9uIiwiaXRlbXMiLCJzZXQiLCJkZXN0cm95IiwidXRpbHMiLCJpcyIsImV4dGVuZCIsImRzdCIsIm5leHRUaWNrIiwiY2FuY2VsTmV4dFRpY2siLCJkZXRlY3REaXJlY3Rpb24iLCJfbGVuIiwiX2tleSIsImNyZWF0ZSIsInZlcnNpb24iLCJzY3JvbGxFbCIsInNjcm9sbFJvb3RFbCIsImxhc3RBdXRvU2Nyb2xsWCIsImxhc3RBdXRvU2Nyb2xsWSIsInRvdWNoRXZ0JDEiLCJwb2ludGVyRWxlbUNoYW5nZWRJbnRlcnZhbCIsImF1dG9TY3JvbGxzIiwic2Nyb2xsaW5nIiwiY2xlYXJBdXRvU2Nyb2xscyIsImF1dG9TY3JvbGwiLCJwaWQiLCJjbGVhclBvaW50ZXJFbGVtQ2hhbmdlZEludGVydmFsIiwiaXNGYWxsYmFjayIsInNjcm9sbCIsInNjcm9sbEN1c3RvbUZuIiwic2VucyIsInNjcm9sbFNlbnNpdGl2aXR5Iiwic3BlZWQiLCJzY3JvbGxTcGVlZCIsInNjcm9sbFRoaXNJbnN0YW5jZSIsInNjcm9sbEZuIiwibGF5ZXJzT3V0IiwiY3VycmVudFBhcmVudCIsImNhblNjcm9sbFgiLCJjYW5TY3JvbGxZIiwic2Nyb2xsUG9zWCIsInNjcm9sbFBvc1kiLCJ2eCIsInZ5IiwibGF5ZXIiLCJzY3JvbGxPZmZzZXRZIiwic2Nyb2xsT2Zmc2V0WCIsImJ1YmJsZVNjcm9sbCIsImRyb3AiLCJ0b1NvcnRhYmxlIiwiY2hhbmdlZFRvdWNoZXMiLCJvblNwaWxsIiwiUmV2ZXJ0IiwiUmVtb3ZlIiwic3RhcnRJbmRleCIsImRyYWdTdGFydCIsIl9yZWYyIiwiX3JlZjMiLCJfcmVmNCIsInBhcmVudFNvcnRhYmxlIiwiQXV0b1Njcm9sbCIsImZvcmNlQXV0b1Njcm9sbEZhbGxiYWNrIiwiX2hhbmRsZUF1dG9TY3JvbGwiLCJfaGFuZGxlRmFsbGJhY2tBdXRvU2Nyb2xsIiwiZHJhZ092ZXJDb21wbGV0ZWQiLCJkcmFnT3ZlckJ1YmJsZSIsIm51bGxpbmciLCJvZ0VsZW1TY3JvbGxlciIsIm5ld0VsZW0iLCJzZWxmIiwibyIsInIiLCJ0b1N0cmluZ1RhZyIsImRlZmF1bHQiLCJFIiwiSFRNTENvbGxlY3Rpb24iLCJOb2RlTGlzdCIsImlzQXJyYXkiLCJzIiwiYWRqdXN0YWJsZUlucHV0TnVtYmVycyIsImNyZWF0ZUVsZW1lbnRGcm9tU3RyaW5nIiwiY3JlYXRlRnJvbVRlbXBsYXRlIiwiZXZlbnRQYXRoIiwibCIsInJlc29sdmVFbGVtZW50IiwiZmlyc3RFbGVtZW50Q2hpbGQiLCJwYXJlbnRFbGVtZW50IiwiRWxlbWVudCIsInNoaWZ0S2V5IiwiY3RybEtleSIsImRlbHRhWSIsInNlbGVjdGlvblN0YXJ0IiwiZm9jdXMiLCJzZXRTZWxlY3Rpb25SYW5nZSIsInUiLCJoIiwibSIsImciLCJpc05hTiIsIkEiLCJ0b0ZpeGVkIiwidG9IU1ZBIiwidG9IU0xBIiwidG9SR0JBIiwidG9DTVlLIiwidG9IRVhBIiwicGFkU3RhcnQiLCJDIiwibG9jayIsIm9uY2hhbmdlIiwib25zdG9wIiwiX2tleWJvYXJkIiwiYWN0aXZlRWxlbWVudCIsIndyYXBwZXIiLCJ1cGRhdGUiLCJjYWNoZSIsInN0YXJ0c1dpdGgiLCJfdGFwc3RhcnQiLCJfdGFwc3RvcCIsIl90YXBtb3ZlIiwidHJpZ2dlciIsImsiLCJlbGVtZW50cyIsIlMiLCJ2YXJpYW50RmxpcE9yZGVyIiwic3RhcnQiLCJtaWRkbGUiLCJlbmQiLCJwb3NpdGlvbkZsaXBPcmRlciIsInBvc2l0aW9uIiwibWFyZ2luIiwicGFkZGluZyIsInN0YXRpYyIsImFwcENsYXNzIiwidGhlbWUiLCJ1c2VBc0J1dHRvbiIsImNvbXBhcmlzb24iLCJjbG9zZU9uU2Nyb2xsIiwib3V0cHV0UHJlY2lzaW9uIiwibG9ja09wYWNpdHkiLCJhdXRvUmVwb3NpdGlvbiIsImNvbXBvbmVudHMiLCJpbnRlcmFjdGlvbiIsImkxOG4iLCJzd2F0Y2hlcyIsImlubGluZSIsInNsaWRlcnMiLCJkZWZhdWx0UmVwcmVzZW50YXRpb24iLCJhZGp1c3RhYmxlTnVtYmVycyIsInNob3dBbHdheXMiLCJjbG9zZVdpdGhLZXkiLCJfaW5pdGlhbGl6aW5nQWN0aXZlIiwiX3JlY2FsYyIsIl9uYW5vcG9wIiwiX3Jvb3QiLCJfY29sb3IiLCJfbGFzdENvbG9yIiwiX3N3YXRjaENvbG9ycyIsIl9zZXR1cEFuaW1hdGlvbkZyYW1lIiwiX2V2ZW50TGlzdGVuZXIiLCJpbml0Iiwic2hvdyIsImNoYW5nZSIsImNoYW5nZXN0b3AiLCJzd2F0Y2hzZWxlY3QiLCJERUZBVUxUX09QVElPTlMiLCJpbmNsdWRlcyIsInByZXZpZXciLCJvcGFjaXR5IiwiaHVlIiwicGFsZXR0ZSIsIl9wcmVCdWlsZCIsIl9idWlsZENvbXBvbmVudHMiLCJfYmluZEV2ZW50cyIsIl9maW5hbEJ1aWxkIiwiYWRkU3dhdGNoIiwiSFRNTEVsZW1lbnQiLCJyZWZlcmVuY2UiLCJwb3BwZXIiLCJFcnJvciIsImFycm93IiwidnMiLCJ2bSIsInZlIiwiaHMiLCJobSIsImhlIiwidyIsIk8iLCJfdCIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInNldENvbG9yIiwiX3JlUG9zaXRpb25pbmdQaWNrZXIiLCJfcmVwcmVzZW50YXRpb24iLCJzZXRDb2xvclJlcHJlc2VudGF0aW9uIiwiX2VtaXQiLCJpbnB1dCIsInJnYmEiLCJoc2xhIiwiaHN2YSIsImNteWsiLCJoaWRkZW4iLCJyZXBsYWNlQ2hpbGQiLCJkaXNhYmxlIiwidHJhbnNpdGlvbiIsImxhc3RDb2xvciIsInBpY2tlciIsImN1cnJlbnRDb2xvciIsIl91cGRhdGVPdXRwdXQiLCJiYWNrZ3JvdW5kIiwic2V0UHJvcGVydHkiLCJzbGlkZXIiLCJzZWxlY3RhYmxlIiwiX2NvbXBvbmVudHMiLCJfY2xlYXJDb2xvciIsInNldEhTVkEiLCJhcHBseUNvbG9yIiwiaXNPcGVuIiwiY29kZSIsImdldENvbG9yUmVwcmVzZW50YXRpb24iLCJ0b0xvd2VyQ2FzZSIsInRvUHJlY2lzaW9uIiwiX2V2ZW50QmluZGluZ3MiLCJfcGFyc2VMb2NhbENvbG9yIiwidmFsdWVzIiwiZ2V0Q29udGV4dCIsImZpbGxTdHlsZSIsImhleGEiLCJJMThOX0RFRkFVTFRTIiwicmVtb3ZlU3dhdGNoIiwiY2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJkZXN0cm95QW5kUmVtb3ZlIiwiY2xpY2siLCJnZXRDb2xvciIsImdldFNlbGVjdGVkQ29sb3IiLCJnZXRSb290IiwiZW5hYmxlIiwibW9kdWxlIiwiZXhwb3J0cyIsImdldFBpY2tyU2V0dGluZ3MiLCJvcHRzIiwiaXNWaWV3IiwiZGVmYXVsdENvbG9yIiwib25QaWNrckNhbmNlbCIsImluc3RhbmNlIiwiZ2V0Q29tYW5kaW5kZXgiLCJjTWVudVRvb2xiYXJTZXR0aW5nVGFiIiwiUGx1Z2luU2V0dGluZ1RhYiIsIlNldHRpbmciLCJzZXROYW1lIiwic2V0RGVzYyIsImFkZERyb3Bkb3duIiwiZHJvcGRvd24iLCJtZXRob2RzIiwibWV0aG9kIiwiYWRkT3B0aW9ucyIsImFlc3RoZXRpY3MiLCJhZXN0aGV0aWMiLCJwb3NvdGlvbnMiLCJwb3NvdGlvbiIsImFkZFRvZ2dsZSIsInRvZ2dsZSIsImFkZFNsaWRlciIsImFkZEJ1dHRvbiIsInJlbG9hZEJ1dHRvbiIsInBpY2tyIiwiUGlja3IiLCJjb250cm9sRWwiLCJzZWxlY3QiLCJjTWVudVRvb2xiYXJDb21tYW5kc0NvbnRhaW5lciIsImRyYWdlbGUiLCJvblNvcnQiLCJhcnJheVJlc3VsdCIsInJlbW92ZWQiLCJvblN0YXJ0IiwibmV3Q29tbWFuZCIsInNldHRpbmdFbCIsImFkZGljb24iLCJkZWxldGVCdXR0b24iLCJjTWVudVRvb2xiYXJDb21tYW5kc0NvbnRhaW5lcl9zdWIiLCJzdWJyZXN1bHQiLCJkYXRhc2V0IiwiZXJyb3IiLCJzdWJDb21tYW5kIiwic3Vic2V0dGluZyIsImNoYW5nZW5hbWUiLCJuYW1lRWwiLCJhZGRzdWJCdXR0b24iLCJpY29ucyIsImNNZW51VG9vbGJhclN1YiIsImNNZW51VG9vbGJhckFkZCIsImNNZW51VG9vbGJhckRlbGV0ZSIsImNNZW51VG9vbGJhclJlbG9hZCIsIm9ic2lkaWFuIiwiYWRkSWNvbnMiLCJhZGRJY29uIiwiY01lbnVUb29sYmFyUGx1Z2luIiwiUGx1Z2luIiwibW9kQ29tbWFuZHMiLCJoYW5kbGVjTWVudVRvb2xiYXIiLCJ0b29sYmFyIiwiaGFuZGxlY01lbnVUb29sYmFyX2xheW91dCIsImhhbmRsZWNNZW51VG9vbGJhcl9yZXNpemUiLCJMZWFmX1dpZHRoIiwicmVzZXRUb29sYmFyIiwib25sb2FkIiwibWFuaWZlc3QiLCJsb2FkU2V0dGluZ3MiLCJhZGRTZXR0aW5nVGFiIiwiZ2VuZXJhdGVDb21tYW5kcyIsIm9uTGF5b3V0UmVhZHkiLCJzZXR1cFN0YXR1c0JhciIsImluaXRfZXZ0IiwiZG9jIiwiZW5hYmxlZFBsdWdpbnMiLCJoYXMiLCJyZWdpc3RlckV2ZW50Iiwic2NyZWVuV2lkdGgiLCJzY3JlZW4iLCJQbGF0Zm9ybSIsImlzTW9iaWxlQXBwIiwiRU5fRm9udENvbG9yX0Zvcm1hdF9CcnVzaCIsIkVOX0JHX0Zvcm1hdF9CcnVzaCIsIkVOX1RleHRfRm9ybWF0X0JydXNoIiwicmVnaXN0ZXJEb21FdmVudCIsImNtRWRpdG9yIiwiaGFzRm9jdXMiLCJhZGRDb21tYW5kIiwiaW5kZW50TGlzdCIsInVuaW5kZW50TGlzdCIsInVuZG8iLCJyZWRvIiwiY2xpcGJvYXJkIiwid3JpdGVUZXh0IiwicmVhZFRleHQiLCJtb2RpZmllcnMiLCJ0b2dnbGVGdWxsIiwiaXNGdWxsIiwiZXhpdEZ1bGwiLCJiZUZ1bGwiLCJET0NfRUwiLCJoZWFkRWwiLCJzdHlsZUVsIiwiVFlQRV9SRVFVRVNUX0ZVTExfU0NSRUVOIiwiVFlQRV9FWElUX0ZVTExfU0NSRUVOIiwiVFlQRV9GVUxMX1NDUkVFTl9FTEVNRU5UIiwiTWFya2Rvd25WaWV3IiwiZnVsbHNjcmVlbk11dGF0aW9uT2JzZXJ2ZXIiLCJtb2Ryb290IiwiZ2V0Q3VycmVudEVsZW1lbnQiLCJNdXRhdGlvbk9ic2VydmVyIiwibXV0YXRpb25SZWNvcmRzIiwibXV0YXRpb25SZWNvcmQiLCJhZGRlZE5vZGVzIiwibm9kZSIsIm1lc3NhZ2UiLCJkaXNjb25uZWN0Iiwib2JzZXJ2ZSIsImNoaWxkTGlzdCIsImZ1bGxzY3JlZW5Nb2RlIiwibGVmdFNwbGl0IiwiY29sbGFwc2VkIiwicmlnaHRTcGxpdCIsImxlZnRSaWJib24iLCJ3b3JrcGxhY2VmdWxsc2NyZWVuTW9kZSIsImNvbW1hbmRzTWFwIiwiaHJsaW5lIiwiY2hhciIsInByZWZpeCIsInN1ZmZpeCIsImlzbGluZWhlYWQiLCJqdXN0aWZ5IiwiY2VudGVyIiwidW5kZXJsaW5lIiwic3VwZXJzY3JpcHQiLCJzdWJzY3JpcHQiLCJjb2RlYmxvY2siLCJzZWxlY3RlZFRleHQiLCJjdXJzZXJTdGFydCIsImN1cnNlckVuZCIsIm1vZGUiLCJwcmVTdGFydCIsInRyaW1TdGFydCIsInN1ZkVuZCIsInRyaW1FbmQiLCJyZXBsYWNlUmFuZ2UiLCJhcHBseUNvbW1hbmQiLCJzdGF0dXNCYXJJY29uIiwiYWRkU3RhdHVzQmFySXRlbSIsInN0YXR1c0JhclJlY3QiLCJzdGF0dXNCYXJJY29uUmVjdCIsIm1lbnUiLCJNZW51IiwiYWRkSXRlbSIsInNldFRpdGxlIiwic2V0U2VjdGlvbiIsIml0ZW1Eb20iLCJ0b2dnbGVDb21wb25lbnQiLCJUb2dnbGVDb21wb25lbnQiLCJzZXREaXNhYmxlZCIsInNob3dBdFBvc2l0aW9uIiwib251bmxvYWQiLCJzdGF0dXMiLCJzZXRUZW1wX05vdGljZSIsImNvbnRlbnQiLCJsb2FkRGF0YSIsInNhdmVEYXRhIl0sIm1hcHBpbmdzIjoidUNBa0hPLFNBQVNBLEVBQVVDLEVBQVND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Q0EsYUFDQSxtQkFDQSxpQkFDQSxpQkFDQSxnQkFDQSxpQkFDQSxpQkFDQSxlQUNBLGdCQUNBLGlCQUNBLGtCQUNBLGNBQ0EsYUFDQSxXQUNBLGFBQ0EsU0FDQSxNQUNBLFNBQ0EsT0FDQSxpQkFDQSxlQUNBLGVBQ0EsUUFDQSxXQUNBLFNBQ0EsZUFDQSxnQkFDQSxlQUNBLGVBQ0EsZ0JBQ0EsYUFDQSxtQkFDQSxnQkFDQSxzQkFDQSxnQkFDQSxzQkFDQSxpQkFDQSxtQkFDQSxjQUNBLFNBQ0EsZ0JBQ0EsWUFDQSxhQUNBLGtCQUNBLGlCQUNBLFNBQ0EsU0FDQSxlQUNBLGtCQUNBLGlCQUNBLGlCQUNBLGlCQUNBLHNCQUNBLGlCQUNBLGNBQ0EsWUFDQSxVQUNBLFdBQ0EsV0FDQSxXQUNBLFVBQ0EsVUFDQSxVQUNBLFVBQ0EsVUFDQSxVQUNBLFVBQ0EsVUFDQSxRQUNBLFlBQ0EsZ0JBQ0EsWUFDQSxhQUNBLGtCQUNBLGtCQUNBLGFBQ0EsWUFDQSxrQkFDQSxhQUNBLGFBQ0EsaUJBQ0EsWUFDQSxRQUNBLFNBQ0EsU0FDQSxTQUNBLE9BQ0EsVUFDQSxjQUNBLFNBQ0EsTUFDQSxRQUNBLFVBQ0EsVUFDQSxVQUNBLFlBQ0EsVUFDQSxXQUNBLFNBQ0EsT0FDQSxXQUNBLFlBQ0EsbUJBQ0Esb0JBQ0EsbUJBQ0EsaUJBQ0Esb0JBQ0Esa0JBQ0EsaUJBQ0Esa0JBQ0EsTUFDQSxjQUNBLFlBQ0EsT0FDQSxRQUNBLFlBQ0EsUUFDQSxXQUNBLGVBQ0EsV0FDQSxXQUNBLFNBQ0EsVUFDQSxTQUNBLFNBQ0EsU0FDQSxTQUNBLFNBQ0EsU0FDQSxRQUNBLE9BQ0EsT0FDQSxnQkFDQSxnQkFDQSxTQUNBLGNBQ0EsaUJBQ0EsV0FDQSxXQUNBLFVBQ0EsV0FDQSxZQUNBLFNBQ0EsU0FDQSxPQUNBLFlBQ0EsTUFDQSxZQUNBLFFBQ0EsU0FDQSxPQUNBLFNBQ0EsZ0JBQ0EsVUFDQSxNQUNBLFdBQ0EsVUFDQSxlQUNBLFVBQ0EsUUFDQSxlQUNBLGVBQ0EsYUFDQSxlQUNBLGVBQ0EsYUFDQSxtQkFDQSxpQkFDQSxXQUNBLGVBQ0EsYUFDQSxhQUNBLFlBQ0EsYUFDQSxXQUNBLFlBQ0EsYUFDQSxZQUNBLFlBQ0EsYUFDQSxhQUNBLGFBQ0EsY0FDQSxZQUNBLGFBQ0EsV0FDQSxrQkFDQSxjQUNBLFlBQ0EsZUFDQSxhQUNBLGNBQ0EsaUJBQ0EsY0FDQSxZQUNBLGdCQUNBLFlBQ0EsZ0JBQ0EsY0FDQSxpQkFDQSxtQkFDQSxlQUNBLGdCQUNBLFlBQ0EsY0FDQSxZQUNBLFVBQ0EsZUFDQSxhQUNBLGdCQUNBLGNBQ0EsZUFDQSxVQUNBLFNBQ0EsT0FDQSxRQUNBLE9BQ0EsU0FDQSxjQUNBLFdBQ0EscUJBQ0Esc0JBQ0EsT0FDQSxRQUNBLGlCQUNBLGFBQ0EsZ0JBQ0EsY0FDQSxvQkFDQSxrQkFDQSxrQkFDQSxnQkFDQSxXQUNBLFNBQ0EsUUFDQSxpQkFDQSxlQUNBLGVBQ0EsZ0JBQ0EsZUFDQSxhQUNBLGNBQ0EsY0FDQSxlQUNBLGVBQ0EsYUFDQSxjQUNBLGVBQ0EsY0FDQSxnQkFDQSxjQUNBLGtCQUNBLGdCQUNBLGlCQUNBLGNBQ0EsWUFDQSxXQUNBLFNBQ0EsVUFDQSxhQUNBLFVBQ0EsUUFDQSxTQUNBLFFBQ0EsT0FDQSxrQkFDQSxZQUNBLFVBQ0EsUUFDQSxRQUNBLE1BQ0EsUUFDQSxPQUNBLGtCQUNBLGFBQ0EsYUFDQSxjQUNBLFdBQ0EsWUFDQSwwQkFDQSx5QkFDQSxtQkFDQSxTQUNBLFNBQ0EsY0FDQSxVQUNBLFVBQ0EsUUFDQSxPQUNBLGlCQUNBLFFBQ0EsT0FDQSxrQkFDQSxnQkFDQSxTQUNBLGFBQ0EsT0FDQSxhQUNBLFdBQ0EsT0FDQSxPQUNBLGFBQ0EsY0FDQSxrQkFDQSxZQUNBLGNBQ0EsUUFDQSxjQUNBLFVBQ0EsY0FDQSxVQUNBLE9BQ0EsWUFDQSxZQUNBLGNBQ0EsWUFDQSxhQUNBLFFBQ0EsU0FDQSxRQUNBLFNBQ0EsZUFDQSxXQUNBLE9BQ0EsVUFDQSxZQUNBLFNBQ0EsZUFDQSxXQUNBLE1BQ0EsV0FDQSxlQUNBLFlBQ0EsYUFDQSxpQkFDQSxlQUNBLE9BQ0EsV0FDQSxZQUNBLFdBQ0EsU0FDQSxlQUNBLFFBQ0EsUUFDQSxTQUNBLG1CQUNBLGNBQ0EsY0FDQSxrQkFDQSxTQUNBLE9BQ0EsVUFDQSxZQUNBLGdCQUNBLFlBQ0EsYUFDQSxZQUNBLFNBQ0EsT0FDQSxXQUNBLGNBQ0EsV0FDQSxhQUNBLGFBQ0EsZUFDQSxZQUNBLGFBQ0EsYUFDQSxTQUNBLE9BQ0EsV0FDQSxTQUNBLGVBQ0EsYUFDQSxTQUNBLE9BQ0EsU0FDQSxVQUNBLFVBQ0EsU0FDQSxhQUNBLGFBQ0EsWUFDQSxZQUNBLGdCQUNBLGNBQ0EsZUFDQSxTQUNBLE9BQ0EsUUFDQSxjQUNBLFVBQ0EsTUFDQSxVQUNBLGFBQ0EsV0FDQSxRQUNBLGdCQUNBLFlBQ0EsTUFDQSxPQUNBLGlCQUNBLGlCQUNBLFFBQ0EsVUFDQSxNQUNBLGFBQ0EsWUFDQSxhQUNBLFdBQ0EsZUFDQSxlQUNBLFFBQ0EsY0FDQSxrQkFDQSxVQUNBLE9BQ0Esa0JBQ0EsZ0JBQ0EsZ0JBQ0EsV0FDQSxrQkFDQSxzQkFDQSxnQkFDQSxRQUNBLFVBQ0Esa0JBQ0EsZ0JBQ0Esa0JBQ0EsZ0JBQ0EsT0FDQSxVQUNBLFVBQ0EsVUFDQSxRQUNBLGtCQUNBLGVBQ0EsaUJBQ0EsYUFDQSxVQUNBLFlBQ0EsVUFDQSxTQUNBLFVBQ0EsWUFDQSxnQkFDQSxnQkFDQSxlQUNBLGVBQ0EsaUJBQ0EsWUFDQSxVQUNBLGVBQ0EsZUFDQSxhQUNBLFVBQ0EsV0FDQSxZQUNBLGVBQ0EsZUFDQSxnQkFDQSxRQUNBLFdBQ0EsU0FDQSxVQUNBLGtCQUNBLGFBQ0Esa0JBQ0EsaUJBQ0EsZUFDQSxZQUNBLGlCQUNBLFFBQ0EsWUFDQSxhQUNBLFVBQ0EsTUFDQSxVQUNBLFFBQ0EsUUFDQSxjQUNBLE9BQ0EsV0FDQSxjQUNBLGNBQ0EsT0FDQSxTQUNBLFVBQ0EsVUFDQSxpQkFDQSxZQUNBLFFBQ0EsVUFDQSxTQUNBLFVBQ0EsUUFDQSxpQkFDQSxRQUNBLFVBQ0EsU0FDQSxPQUNBLGNBQ0EsYUFDQSxRQUNBLFdBQ0EsU0FDQSxZQUNBLFFBQ0EsU0FDQSxTQUNBLGdCQUNBLFlBQ0EsYUFDQSxZQUNBLE1BQ0EsUUFDQSxnQkFDQSxPQUNBLFdBQ0EsUUFDQSxVQUNBLFlBQ0EsWUFDQSxPQUNBLFdBQ0EsbUJBQ0EsZUFDQSxTQUNBLFNBQ0EsT0FDQSx1QkFDQSxxQkFDQSxhQUNBLGVBQ0EsYUFDQSxTQUNBLGFBQ0EsV0FDQSxVQUNBLFFBQ0EsUUFDQSxlQUNBLGVBQ0EsZUFDQSxhQUNBLFNBQ0EsUUFDQSxlQUNBLGdCQUNBLFNBQ0EsU0FDQSxRQUNBLFVBQ0EsZ0JBQ0EsZUFDQSxVQUNBLFFBQ0EsY0FDQSxhQUNBLGdCQUNBLGNBQ0EsU0FDQSxRQUNBLFlBQ0EsZUFDQSxRQUNBLFFBQ0EsUUFDQSxRQUNBLHFCQUNBLFVBQ0Esc0JBQ0EsYUFDQSxhQUNBLFFBQ0EsWUFDQSxPQUNBLFdBQ0EsWUFDQSxVQUNBLFNBQ0EsU0FDQSxZQUNBLFdBQ0EsT0FDQSxjQUNBLFVBQ0EsY0FDQSxjQUNBLHFCQUNBLG1CQUNBLGdCQUNBLFlBQ0EsVUFDQSxhQUNBLFdBQ0EsV0FDQSxNQUNBLFVBQ0EsU0FDQSxjQUNBLGNBQ0EsZ0JBQ0EsUUFDQSxTQUNBLFVBQ0EsVUFDQSxRQUNBLFNBQ0EsTUFDQSxPQUNBLFNBQ0EsT0FDQSxrQkFDQSxXQUNBLG9CQUNBLGNBQ0Esd0JBQ0Esa0JBQ0EsY0FDQSxjQUNBLFlBQ0EsU0FDQSxZQUNBLGNBQ0EsUUFDQSxjQUNBLGVBQ0EsVUFDQSxZQUNBLFFBQ0EsVUFDQSxRQUNBLGlCQUNBLFlBQ0EsUUFDQSxTQUNBLGdCQUNBLGNBQ0EsV0FDQSxTQUNBLFFBQ0EsT0FDQSxLQUNBLFNBQ0EsVUFDQSxPQUNBLFdBQ0EsWUFDQSxTQUNBLE9BQ0EsV0FDQSxTQUNBLFNBQ0EsZUFDQSxTQUNBLE1BQ0EsYUFDQSxXQUNBLGFBQ0EsWUFDQSxTQUNBLE9BQ0EsUUFDQSxtQkFDQSxXQUNBLGdCQUNBLFdBQ0EsY0FDQSxVQUNBLFlBQ0EsUUFDQSxPQUNBLFlBQ0EsV0FDQSxXQUNBLFdBQ0EsU0FDQSxTQUNBLFNBQ0EsT0FDQSxRQUNBLFFBQ0EsU0FDQSxVQUNBLFdBQ0EsT0FDQSxPQUNBLE9BQ0EsWUFDQSxTQUNBLFdBQ0EsWUFDQSxX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
