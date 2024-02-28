"use strict";
var e = require("obsidian");
function t(e, t, o, n) {
  return new (o || (o = Promise))(function (i, r) {
    function a(e) {
      try {
        s(n.next(e));
      } catch (e) {
        r(e);
      }
    }
    function l(e) {
      try {
        s(n.throw(e));
      } catch (e) {
        r(e);
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
              })).then(a, l);
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
    r = e.settings.menuCommands;
  return (
    o
      ? r.forEach((e, o) => {
          if (
            "SubmenuCommands" in e &&
            ((n = e.SubmenuCommands.findIndex((e) => e.id == t.id)), n >= 0)
          )
            return (i = { index: o, subindex: n }), i;
        })
      : ((n = r.findIndex((e) => e.id == t.id)),
        (i = { index: n, subindex: -1 })),
    i
  );
}
const r = [
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
let a;
const l = (t) => {
    a = e.requireApiVersion("0.15.0") ? activeWindow.document : window.document;
    let o = a.getElementById("cMenuToolbarModalBar");
    o && (o.style.visibility = 0 == t ? "hidden" : "visible");
  },
  s = (t) => {
    a = e.requireApiVersion("0.15.0") ? activeWindow.document : window.document;
    let o = a.getElementById("cMenuToolbarModalBar");
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
    return r;
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
    const r = new e.TextAreaComponent(n);
    r.inputEl.classList.add("wideInputPromptInputEl"),
      r
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
    const r = new e.TextComponent(n);
    r.inputEl.classList.add("InputPromptInputEl"),
      r
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
        id: "editing-toolbar:editor:toggle-blockquote",
        name: "Toggle blockquote",
        icon: "quote-glyph",
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
            id: "editing-toolbar:editor:insert-link",
            name: "insert link []()",
            icon: "link-glyph",
          },
          {
            id: "editing-toolbar:editor:insert-embed",
            name: "insert embed ![[]]",
            icon: "note-glyph",
          },
          {
            id: "editing-toolbar:hrline",
            name: "Horizontal divider",
            icon: '<svg width="18" height="18" focusable="false" fill="currentColor"  viewBox="0 0 1024 1024"><g transform="scale(1, -1) translate(0, -896) scale(0.9, 0.9) "><path class="path" d="M912 424 l0 -80 q0 -3 -2.5 -5.5 q-2.5 -2.5 -5.5 -2.5 l-784 0 q-3 0 -5.5 2.5 q-2.5 2.5 -2.5 5.5 l0 80 q0 3 2.5 5.5 q2.5 2.5 5.5 2.5 l784 0 q3 0 5.5 -2.5 q2.5 -2.5 2.5 -5.5 Z"></path></g></svg>',
          },
        ],
      },
      {
        id: "SubmenuCommands-list",
        name: "submenu-list",
        icon: "bullet-list-glyph",
        SubmenuCommands: [
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
    cMenuWidth: 300,
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
  };
let C;
function k() {
  const t = (function () {
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
  t &&
    t.forEach((e) => {
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
  var n;
  const i = o.positionStyle;
  let r;
  return (
    (C = e.requireApiVersion("0.15.0")
      ? activeWindow.document
      : window.document),
    (r =
      "top" == i
        ? null === (n = t.workspace.activeLeaf.view.containerEl) || void 0 === n
          ? void 0
          : n.querySelector("#cMenuToolbarModalBar")
        : C.getElementById("cMenuToolbarModalBar")),
    r || null
  );
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
    var r = o ? [[T(o, [0, "modifiers"])], [T(o, [0, "key"])]] : void 0;
    return r ? M(r, i) : M(t, "");
  }
  return "–";
}
function _(t) {
  const o = t.workspace.getActiveViewOfType(e.MarkdownView);
  if (o) {
    let e = null == o ? void 0 : o.getMode();
    return "preview" != e && "source" == e;
  }
}
function S(e) {
  return /<[^>]+>/g.test(e);
}
function x(t, o, n) {
  C = e.requireApiVersion("0.15.0") ? activeWindow.document : window.document;
  let i = q(t, o.settings),
    r = null == i ? void 0 : i.querySelector("#" + n);
  if (r) {
    let e = r.rows,
      i = e.length;
    for (let r = 1; r < i; r++) {
      let i = e[r].cells;
      for (let e = 0; e < i.length; e++)
        i[e].onclick = function () {
          let e = this.style.backgroundColor;
          if ("" != e) {
            if (((e = D(e)), "x-color-picker-table" == n)) {
              (o.settings.cMenuFontColor = e),
                A(t, o, e),
                C.querySelectorAll("#change-font-color-icon").forEach((t) => {
                  t.style.fill = e;
                });
            } else if ("x-backgroundcolor-picker-table" == n) {
              (o.settings.cMenuBackgroundColor = e),
                B(t, o, e),
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
function A(t, o, n) {
  const i = t.workspace.getActiveViewOfType(e.MarkdownView);
  if (i) {
    const e = i.editor;
    let o = e.getSelection(),
      r = /\<font color=[0-9a-zA-Z#]+[^\<\>]*\>[^\<\>]+\<\/font\>/g,
      a = /^\<font color=[0-9a-zA-Z#]+[^\<\>]*\>([^\<\>]+)\<\/font\>$/,
      l = '<font color="' + n + '">$1</font>';
    if (/\<font color=[^\<]*$|^[^\>]*font\>/g.test(o)) return;
    (o = r.test(o)
      ? a.test(o)
        ? o.replace(a, l)
        : o.replace(/\<font color=[0-9a-zA-Z#]+[^\<\>]*?\>|\<\/font\>/g, "")
      : o.replace(/^(.+)$/gm, l)),
      e.replaceSelection(o),
      e.exec("goRight"),
      t.commands.executeCommandById("editor:focus");
  }
}
function B(t, o, n) {
  const i = t.workspace.getActiveViewOfType(e.MarkdownView);
  if (i) {
    const e = i.editor;
    let o = e.getSelection(),
      r =
        /\<span style=[\"'][^\<\>]+:[0-9a-zA-Z#]+[\"'][^\<\>]*\>[^\<\>]+\<\/span\>/g,
      a =
        /^\<span style=[\"'][^\<\>]+:[0-9a-zA-Z#]+[\"'][^\<\>]*\>([^\<\>]+)\<\/span\>$/,
      l = '<span style="background:' + n + '">$1</span>';
    if (/\<span style=[^\<]*$|^[^\>]*span\>/g.test(o)) return;
    (o = r.test(o)
      ? a.test(o)
        ? o.replace(a, l)
        : o.replace(
            /\<span style=[\"'][^\<\>]+:[0-9a-zA-Z#]+[\"'][^\<\>]*\>|\<\/span\>/g,
            "",
          )
      : o.replace(/^(.+)$/gm, l)),
      e.replaceSelection(o),
      e.exec("goRight"),
      t.commands.executeCommandById("editor:focus");
  }
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
function N(e) {
  e.Temp_Notice && e.Temp_Notice.hide(),
    e.setEN_BG_Format_Brush(!1),
    e.setEN_FontColor_Format_Brush(!1),
    e.setEN_Text_Format_Brush(!1);
}
function L(t) {
  const o = app.workspace.getActiveViewOfType(e.MarkdownView);
  if (o) {
    const e = o.editor;
    let n,
      i = e.getLine(e.getCursor().line),
      r = "";
    const a = /^(\>*(\[[!\w]+\])?\s*)#+\s/;
    let l;
    const s = i.match(a);
    s && (l = s[0].trim()),
      t == l || "" == t
        ? (n = i.replace(a, "$1"))
        : ((n = i.replace(/^\s*(#*|\>|\-|\d+\.)\s*/m, "")), (n = t + " " + n)),
      (r =
        "" != n
          ? e.getRange(e.getCursor(), {
              line: e.getCursor().line,
              ch: i.length,
            })
          : e.getRange(e.getCursor(), { line: e.getCursor().line, ch: 0 })),
      e.setLine(e.getCursor().line, n),
      e.setCursor({
        line: e.getCursor().line,
        ch: Number(n.length - r.length),
      });
  }
}
function O(t, o) {
  const n = t.workspace.getActiveViewOfType(e.MarkdownView);
  if (n) {
    const i = n.editor;
    i.getRange({ line: i.getCursor().line, ch: 0 }, i.getCursor());
    let r = i.getLine(i.getCursor().line);
    "" != r
      ? i.getRange(i.getCursor(), { line: i.getCursor().line, ch: r.length })
      : i.getRange(i.getCursor(), { line: i.getCursor().line, ch: 0 });
    let a = i.getSelection();
    if (null == a || "" == a)
      N(o),
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
        /(^#+\s|(?<=^|\s*)#|^\>|^\- \[( |x)\]|^\+ |\<[^\<\>]+?\>|^1\. |^\s*\- |^\-+$|^\*+$)/gm;
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
}
function I(t, o) {
  let n = o.settings;
  (C = e.requireApiVersion("0.15.0") ? activeWindow.document : window.document),
    (function () {
      const i = () => {
          var i, r;
          let a = 0,
            l = createEl("div");
          if (l)
            if ("top" == n.positionStyle) {
              let e = 5 * (n.cMenuBottomValue - 4.25);
              l.setAttribute(
                "style",
                `position: relative; grid-template-columns: repeat(auto-fit, minmax(28px, 1fr));top: ${e}px;`,
              ),
                (l.className += " top"),
                n.autohide && (l.className += " autohide");
            } else
              l.setAttribute(
                "style",
                `left: calc(50% - calc(${l.offsetWidth}px / 2)); bottom: ${n.cMenuBottomValue}em; grid-template-columns: ${"1fr ".repeat(n.cMenuNumRows)}`,
              );
          l.setAttribute("id", "cMenuToolbarModalBar");
          let s = createEl("div");
          s.addClass("cMenuToolbarpopover"),
            s.addClass("cMenuToolbarTinyAesthetic"),
            s.setAttribute("id", "cMenuToolbarPopoverBar"),
            (s.style.visibility = "hidden"),
            (s.style.height = "0"),
            "default" == n.aestheticStyle
              ? (l.addClass("cMenuToolbarDefaultAesthetic"),
                l.removeClass("cMenuToolbarTinyAesthetic"),
                l.removeClass("cMenuToolbarGlassAesthetic"))
              : "tiny" == n.aestheticStyle
                ? (l.addClass("cMenuToolbarTinyAesthetic"),
                  l.removeClass("cMenuToolbarDefaultAesthetic"),
                  l.removeClass("cMenuToolbarGlassAesthetic"))
                : (l.addClass("cMenuToolbarGlassAesthetic"),
                  l.removeClass("cMenuToolbarTinyAesthetic"),
                  l.removeClass("cMenuToolbarDefaultAesthetic"));
          let c = 99999;
          if ("top" == n.positionStyle) {
            let e = t.workspace.activeLeaf.view.containerEl;
            (null == e ? void 0 : e.querySelector("#cMenuToolbarPopoverBar")) ||
              null == e ||
              e
                .querySelector(".markdown-source-view")
                .insertAdjacentElement("afterbegin", s),
              null == e ||
                e
                  .querySelector(".markdown-source-view")
                  .insertAdjacentElement("afterbegin", l),
              (c =
                null == e
                  ? void 0
                  : e.querySelector(".markdown-source-view").offsetWidth);
          } else
            "body" == n.appendMethod
              ? C.body.appendChild(l)
              : "workspace" == n.appendMethod &&
                (null === (i = C.body) ||
                  void 0 === i ||
                  i
                    .querySelector(".mod-vertical.mod-root")
                    .insertAdjacentElement("afterbegin", l));
          let d =
            null === (r = t.workspace.activeLeaf.view.containerEl) ||
            void 0 === r
              ? void 0
              : r.querySelector("#cMenuToolbarPopoverBar");
          n.menuCommands.forEach((i, r) => {
            let s;
            if ("SubmenuCommands" in i) {
              let u;
              a >= c - 104 && c > 100
                ? (o.setIS_MORE_Button(!0), (u = new e.ButtonComponent(d)))
                : (u = new e.ButtonComponent(l)),
                u.setClass("cMenuToolbarCommandsubItem" + r),
                r >= n.cMenuNumRows
                  ? u.setClass("cMenuToolbarSecond")
                  : "top" != n.positionStyle &&
                    u.buttonEl.setAttribute("aria-label-position", "top"),
                S(i.icon) ? (u.buttonEl.innerHTML = i.icon) : u.setIcon(i.icon),
                (a += 28);
              let h = (function (e) {
                let t = createEl("div");
                return t.addClass(e), t;
              })("subitem");
              h &&
                i.SubmenuCommands.forEach((o) => {
                  let i = E(t, o.id);
                  s = "–" == i ? o.name : o.name + "(" + i + ")";
                  let a = new e.ButtonComponent(h)
                    .setTooltip(s)
                    .setClass("menu-item")
                    .onClick(() => {
                      t.commands.executeCommandById(o.id),
                        0 == n.cMenuVisibility || "following" == n.positionStyle
                          ? (l.style.visibility = "hidden")
                          : (l.style.visibility = "visible");
                    });
                  r < n.cMenuNumRows &&
                    "top" != n.positionStyle &&
                    a.buttonEl.setAttribute("aria-label-position", "top"),
                    "cMenuToolbar-Divider-Line" == o.id &&
                      a.setClass("cMenuToolbar-Divider-Line"),
                    S(o.icon)
                      ? (a.buttonEl.innerHTML = o.icon)
                      : a.setIcon(o.icon),
                    u.buttonEl.insertAdjacentElement("afterbegin", h);
                });
            } else if ("editing-toolbar:change-font-color" == i.id) {
              let r = new e.ButtonComponent(l);
              r
                .setClass("cMenuToolbarCommandsubItem-font-color")
                .setTooltip(u("Font Colors"))
                .onClick(() => {
                  t.commands.executeCommandById(i.id),
                    0 == n.cMenuVisibility || "following" == n.positionStyle
                      ? (l.style.visibility = "hidden")
                      : (l.style.visibility = "visible");
                }),
                S(i.icon) ? (r.buttonEl.innerHTML = i.icon) : r.setIcon(i.icon),
                (a += 26);
              let s = createEl("div");
              if ((s.addClass("subitem"), s)) {
                (s.innerHTML = (function (e) {
                  return `<div class='x-color-picker-wrapper'>\n<div class='x-color-picker' >\n  <table class="x-color-picker-table" id='x-color-picker-table'>\n    <tbody>\n      <tr>\n        <th colspan="10" class="ui-widget-content">Theme Colors</th>\n      </tr>\n      <tr>\n        <td style="background-color:#ffffff"><span></span></td>\n        <td style="background-color:#000000"><span></span></td>\n        <td style="background-color:#eeece1"><span></span></td>\n        <td style="background-color:#1f497d"><span></span></td>\n        <td style="background-color:#4f81bd"><span></span></td>\n        <td style="background-color:#c0504d"><span></span></td>\n        <td style="background-color:#9bbb59"><span></span></td>\n        <td style="background-color:#8064a2"><span></span></td>\n        <td style="background-color:#4bacc6"><span></span></td>\n        <td style="background-color:#f79646"><span></span></td>\n      </tr>\n      <tr>\n        <th colspan="10"></th>\n      </tr>\n      <tr class="top">\n        <td style="background-color:#f2f2f2"><span></span></td>\n        <td style="background-color:#7f7f7f"><span></span></td>\n        <td style="background-color:#ddd9c3"><span></span></td>\n        <td style="background-color:#c6d9f0"><span></span></td>\n        <td style="background-color:#dbe5f1"><span></span></td>\n        <td style="background-color:#f2dcdb"><span></span></td>\n        <td style="background-color:#ebf1dd"><span></span></td>\n        <td style="background-color:#e5e0ec"><span></span></td>\n        <td style="background-color:#dbeef3"><span></span></td>\n        <td style="background-color:#fdeada"><span></span></td>\n      </tr>\n      <tr class="in">\n        <td style="background-color:#d8d8d8"><span></span></td>\n        <td style="background-color:#595959"><span></span></td>\n        <td style="background-color:#c4bd97"><span></span></td>\n        <td style="background-color:#8db3e2"><span></span></td>\n        <td style="background-color:#b8cce4"><span></span></td>\n        <td style="background-color:#e5b9b7"><span></span></td>\n        <td style="background-color:#d7e3bc"><span></span></td>\n        <td style="background-color:#ccc1d9"><span></span></td>\n        <td style="background-color:#b7dde8"><span></span></td>\n        <td style="background-color:#fbd5b5"><span></span></td>\n      </tr>\n      <tr class="in">\n        <td style="background-color:#bfbfbf"><span></span></td>\n        <td style="background-color:#3f3f3f"><span></span></td>\n        <td style="background-color:#938953"><span></span></td>\n        <td style="background-color:#548dd4"><span></span></td>\n        <td style="background-color:#95b3d7"><span></span></td>\n        <td style="background-color:#d99694"><span></span></td>\n        <td style="background-color:#c3d69b"><span></span></td>\n        <td style="background-color:#b2a2c7"><span></span></td>\n        <td style="background-color:#92cddc"><span></span></td>\n        <td style="background-color:#fac08f"><span></span></td>\n      </tr>\n      <tr class="in">\n        <td style="background-color:#a5a5a5"><span></span></td>\n        <td style="background-color:#262626"><span></span></td>\n        <td style="background-color:#494429"><span></span></td>\n        <td style="background-color:#17365d"><span></span></td>\n        <td style="background-color:#366092"><span></span></td>\n        <td style="background-color:#953734"><span></span></td>\n        <td style="background-color:#76923c"><span></span></td>\n        <td style="background-color:#5f497a"><span></span></td>\n        <td style="background-color:#31859b"><span></span></td>\n        <td style="background-color:#e36c09"><span></span></td>\n      </tr>\n      <tr class="bottom">\n        <td style="background-color:#7f7f7f"><span></span></td>\n        <td style="background-color:#0c0c0c"><span></span></td>\n        <td style="background-color:#1d1b10"><span></span></td>\n        <td style="background-color:#0f243e"><span></span></td>\n        <td style="background-color:#244061"><span></span></td>\n        <td style="background-color:#632423"><span></span></td>\n        <td style="background-color:#4f6128"><span></span></td>\n        <td style="background-color:#3f3151"><span></span></td>\n        <td style="background-color:#205867"><span></span></td>\n        <td style="background-color:#974806"><span></span></td>\n      </tr>\n       <tr>\n        <th colspan="10"></th>\n      </tr>\n      <tr>\n        <th colspan="10" class="ui-widget-content">Standard Colors</th>\n      </tr>\n      <tr>\n        <td style="background-color:#c00000"><span></span></td>\n        <td style="background-color:#ff0000"><span></span></td>\n        <td style="background-color:#ffc000"><span></span></td>\n        <td style="background-color:#ffff00"><span></span></td>\n        <td style="background-color:#92d050"><span></span></td>\n        <td style="background-color:#00b050"><span></span></td>\n        <td style="background-color:#00b0f0"><span></span></td>\n        <td style="background-color:#0070c0"><span></span></td>\n        <td style="background-color:#002060"><span></span></td>\n        <td style="background-color:#7030a0"><span></span></td>\n      </tr>\n      <tr>\n      <th colspan="10" class="ui-widget-content">Custom Font Colors</th>\n    </tr>\n    <tr>\n      <td style="background-color:${e.settings.custom_fc1}"><span></span></td>\n      <td style="background-color:${e.settings.custom_fc2}"><span></span></td>\n      <td style="background-color:${e.settings.custom_fc3}"><span></span></td>\n      <td style="background-color:${e.settings.custom_fc4}"><span></span></td>\n      <td style="background-color:${e.settings.custom_fc5}"><span></span></td>\n    </tr>\n    </tbody>\n  </table>\n</div>\n</div>`;
                })(o)),
                  r.buttonEl.insertAdjacentElement("afterbegin", s),
                  x(t, o, "x-color-picker-table");
                let n = s.querySelector(".x-color-picker-wrapper");
                new e.ButtonComponent(n)
                  .setIcon("paintbrush")
                  .setTooltip(u("Format Brush"))
                  .onClick(() => {
                    N(o),
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
              let r = new e.ButtonComponent(l);
              r
                .setClass("cMenuToolbarCommandsubItem-font-color")
                .setTooltip(u("Background color"))
                .onClick(() => {
                  t.commands.executeCommandById(i.id),
                    0 == n.cMenuVisibility || "following" == n.positionStyle
                      ? (l.style.visibility = "hidden")
                      : (l.style.visibility = "visible");
                }),
                S(i.icon) ? (r.buttonEl.innerHTML = i.icon) : r.setIcon(i.icon),
                (a += 26);
              let s = createEl("div");
              if ((s.addClass("subitem"), s)) {
                (s.innerHTML = (function (e) {
                  return `<div class='x-color-picker-wrapper'>\n<div class='x-color-picker' >\n  <table class="x-color-picker-table" id='x-backgroundcolor-picker-table'>\n    <tbody>\n      <tr>\n        <th colspan="5" class="ui-widget-content">Translucent Colors</th>\n      </tr>\n      <tr class="top">\n        <td style="background-color:rgba(140, 140, 140, 0.12)"><span></span></td>\n        <td style="background-color:rgba(92, 92, 92, 0.2)"><span></span></td>\n        <td style="background-color:rgba(163, 67, 31, 0.2)"><span></span></td>\n        <td style="background-color:rgba(240, 107, 5, 0.2)"><span></span></td>\n        <td style="background-color:rgba(240, 200, 0, 0.2)"><span></span></td>\n        </tr>\n        <tr class="bottom">\n        <td style="background-color:rgba(3, 135, 102, 0.2)"><span></span></td>\n        <td style="background-color:rgba(3, 135, 102, 0.2)"><span></span></td>\n        <td style="background-color:rgba(5, 117, 197, 0.2)"><span></span></td>\n        <td style="background-color:rgba(74, 82, 199, 0.2)"><span></span></td>\n        <td style="background-color:rgba(136, 49, 204, 0.2)"><span></span></td>\n      </tr>\n\n      <tr>\n      <th colspan="5" class="ui-widget-content">Highlighter Colors</th>\n    </tr>\n    \n    <tr class="top">\n      <td style="background-color:rgb(255, 248, 143)"><span></span></td>\n      <td style="background-color:rgb(211, 248, 182)"><span></span></td>\n      <td style="background-color:rgb(175, 250, 209)"><span></span></td>\n      <td style="background-color:rgb(177, 255, 255)"><span></span></td>\n      <td style="background-color:rgb(253, 191, 255)"><span></span></td>\n      </tr>\n      <tr class="bottom">\n      <td style="background-color:rgb(210, 203, 255);"><span></span></td>\n      <td style="background-color:rgb(64, 169, 255);"><span></span></td>\n      <td style="background-color:rgb(255, 77, 79);"><span></span></td>\n      <td style="background-color:rgb(212, 177, 6);"><span></span></td>\n      <td style="background-color:rgb(146, 84, 222);"><span></span></td>\n    </tr>\n    <tr>\n    <th colspan="5" class="ui-widget-content">Custom Colors</th>\n  </tr>\n    <tr class="bottom">\n    <td style="background-color: ${e.settings.custom_bg1};"><span></span></td>\n    <td style="background-color:${e.settings.custom_bg2};"><span></span></td>\n    <td style="background-color:${e.settings.custom_bg3};"><span></span></td>\n    <td style="background-color:${e.settings.custom_bg4};"><span></span></td>\n    <td style="background-color:${e.settings.custom_bg5};"><span></span></td>\n  </tr>\n    </tbody>\n  </table>\n</div>\n</div>`;
                })(o)),
                  r.buttonEl.insertAdjacentElement("afterbegin", s),
                  x(t, o, "x-backgroundcolor-picker-table");
                let n = s.querySelector(".x-color-picker-wrapper");
                new e.ButtonComponent(n)
                  .setIcon("paintbrush")
                  .setTooltip(u("Format Brush"))
                  .onClick(() => {
                    N(o),
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
              a >= c - 104 && c > 100
                ? (o.setIS_MORE_Button(!0), (u = new e.ButtonComponent(d)))
                : (u = new e.ButtonComponent(l));
              let h = E(t, i.id);
              (s = "–" == h ? i.name : i.name + "(" + h + ")"),
                u.setTooltip(s).onClick(() => {
                  t.commands.executeCommandById(i.id),
                    0 == n.cMenuVisibility || "following" == n.positionStyle
                      ? (l.style.visibility = "hidden")
                      : (l.style.visibility = "visible");
                }),
                u.setClass("cMenuToolbarCommandItem"),
                r >= n.cMenuNumRows
                  ? u.setClass("cMenuToolbarSecond")
                  : "top" != n.positionStyle &&
                    u.buttonEl.setAttribute("aria-label-position", "top"),
                "cMenuToolbar-Divider-Line" == i.id &&
                  u.setClass("cMenuToolbar-Divider-Line"),
                S(i.icon) ? (u.buttonEl.innerHTML = i.icon) : u.setIcon(i.icon),
                (a += 26);
            }
          }),
            (function (t, o, n) {
              let i = t.workspace.getActiveViewOfType(e.MarkdownView);
              if (i) {
                let t = i.containerEl.querySelector("#cMenuToolbarPopoverBar");
                if (!o.IS_MORE_Button) return;
                let r = n.createEl("span");
                r.addClass("more-menu");
                let a = new e.ButtonComponent(r);
                a
                  .setClass("cMenuToolbarCommandItem")
                  .setTooltip(u("More"))
                  .onClick(() => {
                    "hidden" == t.style.visibility
                      ? ((t.style.visibility = "visible"),
                        (t.style.height = "32px"))
                      : ((t.style.visibility = "hidden"),
                        (t.style.height = "0"));
                  }),
                  (a.buttonEl.innerHTML =
                    '<svg  width="14" height="14"  version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" enable-background="new 0 0 1024 1024" xml:space="preserve"><path fill="#666" d="M510.29 14.13 q17.09 -15.07 40.2 -14.07 q23.12 1 39.2 18.08 l334.66 385.92 q25.12 30.15 34.16 66.83 q9.04 36.68 0.5 73.87 q-8.54 37.19 -32.66 67.34 l-335.67 390.94 q-15.07 18.09 -38.69 20.1 q-23.62 2.01 -41.71 -13.07 q-18.08 -15.08 -20.09 -38.19 q-2.01 -23.12 13.06 -41.21 l334.66 -390.94 q11.06 -13.06 11.56 -29.65 q0.5 -16.58 -10.55 -29.64 l-334.67 -386.92 q-15.07 -17.09 -13.56 -40.7 q1.51 -23.62 19.59 -38.7 ZM81.17 14.13 q17.08 -15.07 40.19 -14.07 q23.11 1 39.2 18.08 l334.66 385.92 q25.12 30.15 34.16 66.83 q9.04 36.68 0.5 73.87 q-8.54 37.19 -32.66 67.34 l-335.67 390.94 q-15.07 18.09 -38.69 20.6 q-23.61 2.51 -41.7 -12.57 q-18.09 -15.08 -20.1 -38.69 q-2.01 -23.62 13.06 -41.71 l334.66 -390.94 q11.06 -13.06 11.56 -29.65 q0.5 -16.58 -10.55 -29.64 l-334.66 -386.92 q-15.08 -17.09 -13.57 -40.7 q1.51 -23.62 19.6 -38.7 Z"/></svg>'),
                  o.setIS_MORE_Button(!1);
              }
            })(t, o, l),
            Math.abs(o.settings.cMenuWidth - Number(a)) > 30 &&
              ((o.settings.cMenuWidth = Number(a)),
              setTimeout(() => {
                o.saveSettings();
              }, 100));
        },
        r = t.workspace.getActiveViewOfType(e.ItemView);
      ("markdown" !== (null == r ? void 0 : r.getViewType()) &&
        "canvas" !== (null == r ? void 0 : r.getViewType())) ||
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
function F(e, t) {
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
function V(e) {
  for (var t = 1; t < arguments.length; t++) {
    var o = null != arguments[t] ? arguments[t] : {};
    t % 2
      ? F(Object(o), !0).forEach(function (t) {
          z(e, t, o[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(o))
        : F(Object(o)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(o, t));
          });
  }
  return e;
}
function $(e) {
  return (
    ($ =
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
    $(e)
  );
}
function z(e, t, o) {
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
function P() {
  return (
    (P =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var o = arguments[t];
          for (var n in o)
            Object.prototype.hasOwnProperty.call(o, n) && (e[n] = o[n]);
        }
        return e;
      }),
    P.apply(this, arguments)
  );
}
function H(e, t) {
  if (null == e) return {};
  var o,
    n,
    i = (function (e, t) {
      if (null == e) return {};
      var o,
        n,
        i = {},
        r = Object.keys(e);
      for (n = 0; n < r.length; n++)
        (o = r[n]), t.indexOf(o) >= 0 || (i[o] = e[o]);
      return i;
    })(e, t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    for (n = 0; n < r.length; n++)
      (o = r[n]),
        t.indexOf(o) >= 0 ||
          (Object.prototype.propertyIsEnumerable.call(e, o) && (i[o] = e[o]));
  }
  return i;
}
function R(e) {
  if ("undefined" != typeof window && window.navigator)
    return !!navigator.userAgent.match(e);
}
var Z = R(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i),
  j = R(/Edge/i),
  X = R(/firefox/i),
  W = R(/safari/i) && !R(/chrome/i) && !R(/android/i),
  Y = R(/iP(ad|od|hone)/i),
  G = R(/chrome/i) && R(/android/i),
  U = { capture: !1, passive: !1 };
function K(e, t, o) {
  e.addEventListener(t, o, !Z && U);
}
function J(e, t, o) {
  e.removeEventListener(t, o, !Z && U);
}
function Q(e, t) {
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
function ee(e) {
  return e.host && e !== document && e.host.nodeType ? e.host : e.parentNode;
}
function te(e, t, o, n) {
  if (e) {
    o = o || document;
    do {
      if (
        (null != t &&
          (">" === t[0] ? e.parentNode === o && Q(e, t) : Q(e, t))) ||
        (n && e === o)
      )
        return e;
      if (e === o) break;
    } while ((e = ee(e)));
  }
  return null;
}
var oe,
  ne = /\s+/g;
function ie(e, t, o) {
  if (e && t)
    if (e.classList) e.classList[o ? "add" : "remove"](t);
    else {
      var n = (" " + e.className + " ")
        .replace(ne, " ")
        .replace(" " + t + " ", " ");
      e.className = (n + (o ? " " + t : "")).replace(ne, " ");
    }
}
function re(e, t, o) {
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
function ae(e, t) {
  var o = "";
  if ("string" == typeof e) o = e;
  else
    do {
      var n = re(e, "transform");
      n && "none" !== n && (o = n + " " + o);
    } while (!t && (e = e.parentNode));
  var i =
    window.DOMMatrix ||
    window.WebKitCSSMatrix ||
    window.CSSMatrix ||
    window.MSCSSMatrix;
  return i && new i(o);
}
function le(e, t, o) {
  if (e) {
    var n = e.getElementsByTagName(t),
      i = 0,
      r = n.length;
    if (o) for (; i < r; i++) o(n[i], i);
    return n;
  }
  return [];
}
function se() {
  var e = document.scrollingElement;
  return e || document.documentElement;
}
function ce(e, t, o, n, i) {
  if (e.getBoundingClientRect || e === window) {
    var r, a, l, s, c, d, u;
    if (
      (e !== window && e.parentNode && e !== se()
        ? ((a = (r = e.getBoundingClientRect()).top),
          (l = r.left),
          (s = r.bottom),
          (c = r.right),
          (d = r.height),
          (u = r.width))
        : ((a = 0),
          (l = 0),
          (s = window.innerHeight),
          (c = window.innerWidth),
          (d = window.innerHeight),
          (u = window.innerWidth)),
      (t || o) && e !== window && ((i = i || e.parentNode), !Z))
    )
      do {
        if (
          i &&
          i.getBoundingClientRect &&
          ("none" !== re(i, "transform") ||
            (o && "static" !== re(i, "position")))
        ) {
          var h = i.getBoundingClientRect();
          (a -= h.top + parseInt(re(i, "border-top-width"))),
            (l -= h.left + parseInt(re(i, "border-left-width"))),
            (s = a + r.height),
            (c = l + r.width);
          break;
        }
      } while ((i = i.parentNode));
    if (n && e !== window) {
      var p = ae(i || e),
        g = p && p.a,
        m = p && p.d;
      p && ((s = (a /= m) + (d /= m)), (c = (l /= g) + (u /= g)));
    }
    return { top: a, left: l, bottom: s, right: c, width: u, height: d };
  }
}
function de(e, t, o) {
  for (var n = me(e, !0), i = ce(e)[t]; n; ) {
    var r = ce(n)[o];
    if (!("top" === o || "left" === o ? i >= r : i <= r)) return n;
    if (n === se()) break;
    n = me(n, !1);
  }
  return !1;
}
function ue(e, t, o, n) {
  for (var i = 0, r = 0, a = e.children; r < a.length; ) {
    if (
      "none" !== a[r].style.display &&
      a[r] !== vt.ghost &&
      (n || a[r] !== vt.dragged) &&
      te(a[r], o.draggable, e, !1)
    ) {
      if (i === t) return a[r];
      i++;
    }
    r++;
  }
  return null;
}
function he(e, t) {
  for (
    var o = e.lastElementChild;
    o && (o === vt.ghost || "none" === re(o, "display") || (t && !Q(o, t)));

  )
    o = o.previousElementSibling;
  return o || null;
}
function pe(e, t) {
  var o = 0;
  if (!e || !e.parentNode) return -1;
  for (; (e = e.previousElementSibling); )
    "TEMPLATE" === e.nodeName.toUpperCase() ||
      e === vt.clone ||
      (t && !Q(e, t)) ||
      o++;
  return o;
}
function ge(e) {
  var t = 0,
    o = 0,
    n = se();
  if (e)
    do {
      var i = ae(e),
        r = i.a,
        a = i.d;
      (t += e.scrollLeft * r), (o += e.scrollTop * a);
    } while (e !== n && (e = e.parentNode));
  return [t, o];
}
function me(e, t) {
  if (!e || !e.getBoundingClientRect) return se();
  var o = e,
    n = !1;
  do {
    if (o.clientWidth < o.scrollWidth || o.clientHeight < o.scrollHeight) {
      var i = re(o);
      if (
        (o.clientWidth < o.scrollWidth &&
          ("auto" == i.overflowX || "scroll" == i.overflowX)) ||
        (o.clientHeight < o.scrollHeight &&
          ("auto" == i.overflowY || "scroll" == i.overflowY))
      ) {
        if (!o.getBoundingClientRect || o === document.body) return se();
        if (n || t) return o;
        n = !0;
      }
    }
  } while ((o = o.parentNode));
  return se();
}
function fe(e, t) {
  return (
    Math.round(e.top) === Math.round(t.top) &&
    Math.round(e.left) === Math.round(t.left) &&
    Math.round(e.height) === Math.round(t.height) &&
    Math.round(e.width) === Math.round(t.width)
  );
}
function be(e, t) {
  return function () {
    if (!oe) {
      var o = arguments,
        n = this;
      1 === o.length ? e.call(n, o[0]) : e.apply(n, o),
        (oe = setTimeout(function () {
          oe = void 0;
        }, t));
    }
  };
}
function ve(e, t, o) {
  (e.scrollLeft += t), (e.scrollTop += o);
}
function ye(e) {
  var t = window.Polymer,
    o = window.jQuery || window.Zepto;
  return t && t.dom
    ? t.dom(e).cloneNode(!0)
    : o
      ? o(e).clone(!0)[0]
      : e.cloneNode(!0);
}
var we = "Sortable" + new Date().getTime();
function Ce() {
  var e,
    t = [];
  return {
    captureAnimationState: function () {
      ((t = []), this.options.animation) &&
        [].slice.call(this.el.children).forEach(function (e) {
          if ("none" !== re(e, "display") && e !== vt.ghost) {
            t.push({ target: e, rect: ce(e) });
            var o = V({}, t[t.length - 1].rect);
            if (e.thisAnimationDuration) {
              var n = ae(e, !0);
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
        r = 0;
      t.forEach(function (e) {
        var t = 0,
          o = e.target,
          a = o.fromRect,
          l = ce(o),
          s = o.prevFromRect,
          c = o.prevToRect,
          d = e.rect,
          u = ae(o, !0);
        u && ((l.top -= u.f), (l.left -= u.e)),
          (o.toRect = l),
          o.thisAnimationDuration &&
            fe(s, l) &&
            !fe(a, l) &&
            (d.top - l.top) / (d.left - l.left) ==
              (a.top - l.top) / (a.left - l.left) &&
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
          fe(l, a) ||
            ((o.prevFromRect = a),
            (o.prevToRect = l),
            t || (t = n.options.animation),
            n.animate(o, d, l, t)),
          t &&
            ((i = !0),
            (r = Math.max(r, t)),
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
            }, r))
          : "function" == typeof o && o(),
        (t = []);
    },
    animate: function (e, t, o, n) {
      if (n) {
        re(e, "transition", ""), re(e, "transform", "");
        var i = ae(this.el),
          r = i && i.a,
          a = i && i.d,
          l = (t.left - o.left) / (r || 1),
          s = (t.top - o.top) / (a || 1);
        (e.animatingX = !!l),
          (e.animatingY = !!s),
          re(e, "transform", "translate3d(" + l + "px," + s + "px,0)"),
          (this.forRepaintDummy = (function (e) {
            return e.offsetWidth;
          })(e)),
          re(
            e,
            "transition",
            "transform " +
              n +
              "ms" +
              (this.options.easing ? " " + this.options.easing : ""),
          ),
          re(e, "transform", "translate3d(0,0,0)"),
          "number" == typeof e.animated && clearTimeout(e.animated),
          (e.animated = setTimeout(function () {
            re(e, "transition", ""),
              re(e, "transform", ""),
              (e.animated = !1),
              (e.animatingX = !1),
              (e.animatingY = !1);
          }, n));
      }
    },
  };
}
var ke = [],
  qe = { initializeByDefault: !0 },
  Te = {
    mount: function (e) {
      for (var t in qe) qe.hasOwnProperty(t) && !(t in e) && (e[t] = qe[t]);
      ke.forEach(function (t) {
        if (t.pluginName === e.pluginName)
          throw "Sortable: Cannot mount plugin ".concat(
            e.pluginName,
            " more than once",
          );
      }),
        ke.push(e);
    },
    pluginEvent: function (e, t, o) {
      var n = this;
      (this.eventCanceled = !1),
        (o.cancel = function () {
          n.eventCanceled = !0;
        });
      var i = e + "Global";
      ke.forEach(function (n) {
        t[n.pluginName] &&
          (t[n.pluginName][i] && t[n.pluginName][i](V({ sortable: t }, o)),
          t.options[n.pluginName] &&
            t[n.pluginName][e] &&
            t[n.pluginName][e](V({ sortable: t }, o)));
      });
    },
    initializePlugins: function (e, t, o, n) {
      for (var i in (ke.forEach(function (n) {
        var i = n.pluginName;
        if (e.options[i] || n.initializeByDefault) {
          var r = new n(e, t, e.options);
          (r.sortable = e),
            (r.options = e.options),
            (e[i] = r),
            P(o, r.defaults);
        }
      }),
      e.options))
        if (e.options.hasOwnProperty(i)) {
          var r = this.modifyOption(e, i, e.options[i]);
          void 0 !== r && (e.options[i] = r);
        }
    },
    getEventProperties: function (e, t) {
      var o = {};
      return (
        ke.forEach(function (n) {
          "function" == typeof n.eventProperties &&
            P(o, n.eventProperties.call(t[n.pluginName], e));
        }),
        o
      );
    },
    modifyOption: function (e, t, o) {
      var n;
      return (
        ke.forEach(function (i) {
          e[i.pluginName] &&
            i.optionListeners &&
            "function" == typeof i.optionListeners[t] &&
            (n = i.optionListeners[t].call(e[i.pluginName], o));
        }),
        n
      );
    },
  };
var Me = ["evt"],
  Ee = function (e, t) {
    var o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
      n = o.evt,
      i = H(o, Me);
    Te.pluginEvent.bind(vt)(
      e,
      t,
      V(
        {
          dragEl: Se,
          parentEl: xe,
          ghostEl: Ae,
          rootEl: Be,
          nextEl: De,
          lastDownEl: Ne,
          cloneEl: Le,
          cloneHidden: Oe,
          dragStarted: Ye,
          putSortable: Pe,
          activeSortable: vt.active,
          originalEvent: n,
          oldIndex: Ie,
          oldDraggableIndex: Ve,
          newIndex: Fe,
          newDraggableIndex: $e,
          hideGhostForTarget: gt,
          unhideGhostForTarget: mt,
          cloneNowHidden: function () {
            Oe = !0;
          },
          cloneNowShown: function () {
            Oe = !1;
          },
          dispatchSortableEvent: function (e) {
            _e({ sortable: t, name: e, originalEvent: n });
          },
        },
        i,
      ),
    );
  };
function _e(e) {
  !(function (e) {
    var t = e.sortable,
      o = e.rootEl,
      n = e.name,
      i = e.targetEl,
      r = e.cloneEl,
      a = e.toEl,
      l = e.fromEl,
      s = e.oldIndex,
      c = e.newIndex,
      d = e.oldDraggableIndex,
      u = e.newDraggableIndex,
      h = e.originalEvent,
      p = e.putSortable,
      g = e.extraEventProperties;
    if ((t = t || (o && o[we]))) {
      var m,
        f = t.options,
        b = "on" + n.charAt(0).toUpperCase() + n.substr(1);
      !window.CustomEvent || Z || j
        ? (m = document.createEvent("Event")).initEvent(n, !0, !0)
        : (m = new CustomEvent(n, { bubbles: !0, cancelable: !0 })),
        (m.to = a || o),
        (m.from = l || o),
        (m.item = i || o),
        (m.clone = r),
        (m.oldIndex = s),
        (m.newIndex = c),
        (m.oldDraggableIndex = d),
        (m.newDraggableIndex = u),
        (m.originalEvent = h),
        (m.pullMode = p ? p.lastPutMode : void 0);
      var v = V(V({}, g), Te.getEventProperties(n, t));
      for (var y in v) m[y] = v[y];
      o && o.dispatchEvent(m), f[b] && f[b].call(t, m);
    }
  })(
    V(
      {
        putSortable: Pe,
        cloneEl: Le,
        targetEl: Se,
        rootEl: Be,
        oldIndex: Ie,
        oldDraggableIndex: Ve,
        newIndex: Fe,
        newDraggableIndex: $e,
      },
      e,
    ),
  );
}
var Se,
  xe,
  Ae,
  Be,
  De,
  Ne,
  Le,
  Oe,
  Ie,
  Fe,
  Ve,
  $e,
  ze,
  Pe,
  He,
  Re,
  Ze,
  je,
  Xe,
  We,
  Ye,
  Ge,
  Ue,
  Ke,
  Je,
  Qe = !1,
  et = !1,
  tt = [],
  ot = !1,
  nt = !1,
  it = [],
  rt = !1,
  at = [],
  lt = "undefined" != typeof document,
  st = Y,
  ct = j || Z ? "cssFloat" : "float",
  dt = lt && !G && !Y && "draggable" in document.createElement("div"),
  ut = (function () {
    if (lt) {
      if (Z) return !1;
      var e = document.createElement("x");
      return (
        (e.style.cssText = "pointer-events:auto"),
        "auto" === e.style.pointerEvents
      );
    }
  })(),
  ht = function (e, t) {
    var o = re(e),
      n =
        parseInt(o.width) -
        parseInt(o.paddingLeft) -
        parseInt(o.paddingRight) -
        parseInt(o.borderLeftWidth) -
        parseInt(o.borderRightWidth),
      i = ue(e, 0, t),
      r = ue(e, 1, t),
      a = i && re(i),
      l = r && re(r),
      s = a && parseInt(a.marginLeft) + parseInt(a.marginRight) + ce(i).width,
      c = l && parseInt(l.marginLeft) + parseInt(l.marginRight) + ce(r).width;
    if ("flex" === o.display)
      return "column" === o.flexDirection ||
        "column-reverse" === o.flexDirection
        ? "vertical"
        : "horizontal";
    if ("grid" === o.display)
      return o.gridTemplateColumns.split(" ").length <= 1
        ? "vertical"
        : "horizontal";
    if (i && a.float && "none" !== a.float) {
      var d = "left" === a.float ? "left" : "right";
      return !r || ("both" !== l.clear && l.clear !== d)
        ? "horizontal"
        : "vertical";
    }
    return i &&
      ("block" === a.display ||
        "flex" === a.display ||
        "table" === a.display ||
        "grid" === a.display ||
        (s >= n && "none" === o[ct]) ||
        (r && "none" === o[ct] && s + c > n))
      ? "vertical"
      : "horizontal";
  },
  pt = function (e) {
    function t(e, o) {
      return function (n, i, r, a) {
        var l =
          n.options.group.name &&
          i.options.group.name &&
          n.options.group.name === i.options.group.name;
        if (null == e && (o || l)) return !0;
        if (null == e || !1 === e) return !1;
        if (o && "clone" === e) return e;
        if ("function" == typeof e) return t(e(n, i, r, a), o)(n, i, r, a);
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
    (n && "object" == $(n)) || (n = { name: n }),
      (o.name = n.name),
      (o.checkPull = t(n.pull, !0)),
      (o.checkPut = t(n.put)),
      (o.revertClone = n.revertClone),
      (e.group = o);
  },
  gt = function () {
    !ut && Ae && re(Ae, "display", "none");
  },
  mt = function () {
    !ut && Ae && re(Ae, "display", "");
  };
lt &&
  !G &&
  document.addEventListener(
    "click",
    function (e) {
      if (et)
        return (
          e.preventDefault(),
          e.stopPropagation && e.stopPropagation(),
          e.stopImmediatePropagation && e.stopImmediatePropagation(),
          (et = !1),
          !1
        );
    },
    !0,
  );
var ft = function (e) {
    if (Se) {
      e = e.touches ? e.touches[0] : e;
      var t =
        ((i = e.clientX),
        (r = e.clientY),
        tt.some(function (e) {
          var t = e[we].options.emptyInsertThreshold;
          if (t && !he(e)) {
            var o = ce(e),
              n = i >= o.left - t && i <= o.right + t,
              l = r >= o.top - t && r <= o.bottom + t;
            return n && l ? (a = e) : void 0;
          }
        }),
        a);
      if (t) {
        var o = {};
        for (var n in e) e.hasOwnProperty(n) && (o[n] = e[n]);
        (o.target = o.rootEl = t),
          (o.preventDefault = void 0),
          (o.stopPropagation = void 0),
          t[we]._onDragOver(o);
      }
    }
    var i, r, a;
  },
  bt = function (e) {
    Se && Se.parentNode[we]._isOutsideThisEl(e.target);
  };
function vt(e, t) {
  if (!e || !e.nodeType || 1 !== e.nodeType)
    throw "Sortable: `el` must be an HTMLElement, not ".concat(
      {}.toString.call(e),
    );
  (this.el = e), (this.options = t = P({}, t)), (e[we] = this);
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
      return ht(e, this.options);
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
    supportPointer: !1 !== vt.supportPointer && "PointerEvent" in window && !W,
    emptyInsertThreshold: 5,
  };
  for (var n in (Te.initializePlugins(this, e, o), o))
    !(n in t) && (t[n] = o[n]);
  for (var i in (pt(t), this))
    "_" === i.charAt(0) &&
      "function" == typeof this[i] &&
      (this[i] = this[i].bind(this));
  (this.nativeDraggable = !t.forceFallback && dt),
    this.nativeDraggable && (this.options.touchStartThreshold = 1),
    t.supportPointer
      ? K(e, "pointerdown", this._onTapStart)
      : (K(e, "mousedown", this._onTapStart),
        K(e, "touchstart", this._onTapStart)),
    this.nativeDraggable && (K(e, "dragover", this), K(e, "dragenter", this)),
    tt.push(this.el),
    t.store && t.store.get && this.sort(t.store.get(this) || []),
    P(this, Ce());
}
function yt(e, t, o, n, i, r, a, l) {
  var s,
    c,
    d = e[we],
    u = d.options.onMove;
  return (
    !window.CustomEvent || Z || j
      ? (s = document.createEvent("Event")).initEvent("move", !0, !0)
      : (s = new CustomEvent("move", { bubbles: !0, cancelable: !0 })),
    (s.to = t),
    (s.from = e),
    (s.dragged = o),
    (s.draggedRect = n),
    (s.related = i || t),
    (s.relatedRect = r || ce(t)),
    (s.willInsertAfter = l),
    (s.originalEvent = a),
    e.dispatchEvent(s),
    u && (c = u.call(d, s, a)),
    c
  );
}
function wt(e) {
  e.draggable = !1;
}
function Ct() {
  rt = !1;
}
function kt(e) {
  for (
    var t = e.tagName + e.className + e.src + e.href + e.textContent,
      o = t.length,
      n = 0;
    o--;

  )
    n += t.charCodeAt(o);
  return n.toString(36);
}
function qt(e) {
  return setTimeout(e, 0);
}
function Tt(e) {
  return clearTimeout(e);
}
(vt.prototype = {
  constructor: vt,
  _isOutsideThisEl: function (e) {
    this.el.contains(e) || e === this.el || (Ge = null);
  },
  _getDirection: function (e, t) {
    return "function" == typeof this.options.direction
      ? this.options.direction.call(this, e, t, Se)
      : this.options.direction;
  },
  _onTapStart: function (e) {
    if (e.cancelable) {
      var t = this,
        o = this.el,
        n = this.options,
        i = n.preventOnFilter,
        r = e.type,
        a =
          (e.touches && e.touches[0]) ||
          (e.pointerType && "touch" === e.pointerType && e),
        l = (a || e).target,
        s =
          (e.target.shadowRoot &&
            ((e.path && e.path[0]) ||
              (e.composedPath && e.composedPath()[0]))) ||
          l,
        c = n.filter;
      if (
        ((function (e) {
          at.length = 0;
          var t = e.getElementsByTagName("input"),
            o = t.length;
          for (; o--; ) {
            var n = t[o];
            n.checked && at.push(n);
          }
        })(o),
        !Se &&
          !(
            (/mousedown|pointerdown/.test(r) && 0 !== e.button) ||
            n.disabled
          ) &&
          !s.isContentEditable &&
          (this.nativeDraggable ||
            !W ||
            !l ||
            "SELECT" !== l.tagName.toUpperCase()) &&
          !(((l = te(l, n.draggable, o, !1)) && l.animated) || Ne === l))
      ) {
        if (((Ie = pe(l)), (Ve = pe(l, n.draggable)), "function" == typeof c)) {
          if (c.call(this, e, l, this))
            return (
              _e({
                sortable: t,
                rootEl: s,
                name: "filter",
                targetEl: l,
                toEl: o,
                fromEl: o,
              }),
              Ee("filter", t, { evt: e }),
              void (i && e.cancelable && e.preventDefault())
            );
        } else if (
          c &&
          (c = c.split(",").some(function (n) {
            if ((n = te(s, n.trim(), o, !1)))
              return (
                _e({
                  sortable: t,
                  rootEl: n,
                  name: "filter",
                  targetEl: l,
                  fromEl: o,
                  toEl: o,
                }),
                Ee("filter", t, { evt: e }),
                !0
              );
          }))
        )
          return void (i && e.cancelable && e.preventDefault());
        (n.handle && !te(s, n.handle, o, !1)) ||
          this._prepareDragStart(e, a, l);
      }
    }
  },
  _prepareDragStart: function (e, t, o) {
    var n,
      i = this,
      r = i.el,
      a = i.options,
      l = r.ownerDocument;
    if (o && !Se && o.parentNode === r) {
      var s = ce(o);
      if (
        ((Be = r),
        (xe = (Se = o).parentNode),
        (De = Se.nextSibling),
        (Ne = o),
        (ze = a.group),
        (vt.dragged = Se),
        (He = {
          target: Se,
          clientX: (t || e).clientX,
          clientY: (t || e).clientY,
        }),
        (Xe = He.clientX - s.left),
        (We = He.clientY - s.top),
        (this._lastX = (t || e).clientX),
        (this._lastY = (t || e).clientY),
        (Se.style["will-change"] = "all"),
        (n = function () {
          Ee("delayEnded", i, { evt: e }),
            vt.eventCanceled
              ? i._onDrop()
              : (i._disableDelayedDragEvents(),
                !X && i.nativeDraggable && (Se.draggable = !0),
                i._triggerDragStart(e, t),
                _e({ sortable: i, name: "choose", originalEvent: e }),
                ie(Se, a.chosenClass, !0));
        }),
        a.ignore.split(",").forEach(function (e) {
          le(Se, e.trim(), wt);
        }),
        K(l, "dragover", ft),
        K(l, "mousemove", ft),
        K(l, "touchmove", ft),
        K(l, "mouseup", i._onDrop),
        K(l, "touchend", i._onDrop),
        K(l, "touchcancel", i._onDrop),
        X &&
          this.nativeDraggable &&
          ((this.options.touchStartThreshold = 4), (Se.draggable = !0)),
        Ee("delayStart", this, { evt: e }),
        !a.delay ||
          (a.delayOnTouchOnly && !t) ||
          (this.nativeDraggable && (j || Z)))
      )
        n();
      else {
        if (vt.eventCanceled) return void this._onDrop();
        K(l, "mouseup", i._disableDelayedDrag),
          K(l, "touchend", i._disableDelayedDrag),
          K(l, "touchcancel", i._disableDelayedDrag),
          K(l, "mousemove", i._delayedDragTouchMoveHandler),
          K(l, "touchmove", i._delayedDragTouchMoveHandler),
          a.supportPointer &&
            K(l, "pointermove", i._delayedDragTouchMoveHandler),
          (i._dragStartTimer = setTimeout(n, a.delay));
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
    Se && wt(Se),
      clearTimeout(this._dragStartTimer),
      this._disableDelayedDragEvents();
  },
  _disableDelayedDragEvents: function () {
    var e = this.el.ownerDocument;
    J(e, "mouseup", this._disableDelayedDrag),
      J(e, "touchend", this._disableDelayedDrag),
      J(e, "touchcancel", this._disableDelayedDrag),
      J(e, "mousemove", this._delayedDragTouchMoveHandler),
      J(e, "touchmove", this._delayedDragTouchMoveHandler),
      J(e, "pointermove", this._delayedDragTouchMoveHandler);
  },
  _triggerDragStart: function (e, t) {
    (t = t || ("touch" == e.pointerType && e)),
      !this.nativeDraggable || t
        ? this.options.supportPointer
          ? K(document, "pointermove", this._onTouchMove)
          : K(document, t ? "touchmove" : "mousemove", this._onTouchMove)
        : (K(Se, "dragend", this), K(Be, "dragstart", this._onDragStart));
    try {
      document.selection
        ? qt(function () {
            document.selection.empty();
          })
        : window.getSelection().removeAllRanges();
    } catch (e) {}
  },
  _dragStarted: function (e, t) {
    if (((Qe = !1), Be && Se)) {
      Ee("dragStarted", this, { evt: t }),
        this.nativeDraggable && K(document, "dragover", bt);
      var o = this.options;
      !e && ie(Se, o.dragClass, !1),
        ie(Se, o.ghostClass, !0),
        (vt.active = this),
        e && this._appendGhost(),
        _e({ sortable: this, name: "start", originalEvent: t });
    } else this._nulling();
  },
  _emulateDragOver: function () {
    if (Re) {
      (this._lastX = Re.clientX), (this._lastY = Re.clientY), gt();
      for (
        var e = document.elementFromPoint(Re.clientX, Re.clientY), t = e;
        e &&
        e.shadowRoot &&
        (e = e.shadowRoot.elementFromPoint(Re.clientX, Re.clientY)) !== t;

      )
        t = e;
      if ((Se.parentNode[we]._isOutsideThisEl(e), t))
        do {
          if (t[we]) {
            if (
              t[we]._onDragOver({
                clientX: Re.clientX,
                clientY: Re.clientY,
                target: e,
                rootEl: t,
              }) &&
              !this.options.dragoverBubble
            )
              break;
          }
          e = t;
        } while ((t = t.parentNode));
      mt();
    }
  },
  _onTouchMove: function (e) {
    if (He) {
      var t = this.options,
        o = t.fallbackTolerance,
        n = t.fallbackOffset,
        i = e.touches ? e.touches[0] : e,
        r = Ae && ae(Ae, !0),
        a = Ae && r && r.a,
        l = Ae && r && r.d,
        s = st && Je && ge(Je),
        c =
          (i.clientX - He.clientX + n.x) / (a || 1) +
          (s ? s[0] - it[0] : 0) / (a || 1),
        d =
          (i.clientY - He.clientY + n.y) / (l || 1) +
          (s ? s[1] - it[1] : 0) / (l || 1);
      if (!vt.active && !Qe) {
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
        r
          ? ((r.e += c - (Ze || 0)), (r.f += d - (je || 0)))
          : (r = { a: 1, b: 0, c: 0, d: 1, e: c, f: d });
        var u = "matrix("
          .concat(r.a, ",")
          .concat(r.b, ",")
          .concat(r.c, ",")
          .concat(r.d, ",")
          .concat(r.e, ",")
          .concat(r.f, ")");
        re(Ae, "webkitTransform", u),
          re(Ae, "mozTransform", u),
          re(Ae, "msTransform", u),
          re(Ae, "transform", u),
          (Ze = c),
          (je = d),
          (Re = i);
      }
      e.cancelable && e.preventDefault();
    }
  },
  _appendGhost: function () {
    if (!Ae) {
      var e = this.options.fallbackOnBody ? document.body : Be,
        t = ce(Se, !0, st, !0, e),
        o = this.options;
      if (st) {
        for (
          Je = e;
          "static" === re(Je, "position") &&
          "none" === re(Je, "transform") &&
          Je !== document;

        )
          Je = Je.parentNode;
        Je !== document.body && Je !== document.documentElement
          ? (Je === document && (Je = se()),
            (t.top += Je.scrollTop),
            (t.left += Je.scrollLeft))
          : (Je = se()),
          (it = ge(Je));
      }
      ie((Ae = Se.cloneNode(!0)), o.ghostClass, !1),
        ie(Ae, o.fallbackClass, !0),
        ie(Ae, o.dragClass, !0),
        re(Ae, "transition", ""),
        re(Ae, "transform", ""),
        re(Ae, "box-sizing", "border-box"),
        re(Ae, "margin", 0),
        re(Ae, "top", t.top),
        re(Ae, "left", t.left),
        re(Ae, "width", t.width),
        re(Ae, "height", t.height),
        re(Ae, "opacity", "0.8"),
        re(Ae, "position", st ? "absolute" : "fixed"),
        re(Ae, "zIndex", "100000"),
        re(Ae, "pointerEvents", "none"),
        (vt.ghost = Ae),
        e.appendChild(Ae),
        re(
          Ae,
          "transform-origin",
          (Xe / parseInt(Ae.style.width)) * 100 +
            "% " +
            (We / parseInt(Ae.style.height)) * 100 +
            "%",
        );
    }
  },
  _onDragStart: function (e, t) {
    var o = this,
      n = e.dataTransfer,
      i = o.options;
    Ee("dragStart", this, { evt: e }),
      vt.eventCanceled
        ? this._onDrop()
        : (Ee("setupClone", this),
          vt.eventCanceled ||
            ((Le = ye(Se)).removeAttribute("id"),
            (Le.draggable = !1),
            (Le.style["will-change"] = ""),
            this._hideClone(),
            ie(Le, this.options.chosenClass, !1),
            (vt.clone = Le)),
          (o.cloneId = qt(function () {
            Ee("clone", o),
              vt.eventCanceled ||
                (o.options.removeCloneOnHide || Be.insertBefore(Le, Se),
                o._hideClone(),
                _e({ sortable: o, name: "clone" }));
          })),
          !t && ie(Se, i.dragClass, !0),
          t
            ? ((et = !0), (o._loopId = setInterval(o._emulateDragOver, 50)))
            : (J(document, "mouseup", o._onDrop),
              J(document, "touchend", o._onDrop),
              J(document, "touchcancel", o._onDrop),
              n &&
                ((n.effectAllowed = "move"),
                i.setData && i.setData.call(o, n, Se)),
              K(document, "drop", o),
              re(Se, "transform", "translateZ(0)")),
          (Qe = !0),
          (o._dragStartId = qt(o._dragStarted.bind(o, t, e))),
          K(document, "selectstart", o),
          (Ye = !0),
          W && re(document.body, "user-select", "none"));
  },
  _onDragOver: function (e) {
    var t,
      o,
      n,
      i,
      r = this.el,
      a = e.target,
      l = this.options,
      s = l.group,
      c = vt.active,
      d = ze === s,
      u = l.sort,
      h = Pe || c,
      p = this,
      g = !1;
    if (!rt) {
      if (
        (void 0 !== e.preventDefault && e.cancelable && e.preventDefault(),
        (a = te(a, l.draggable, r, !0)),
        x("dragOver"),
        vt.eventCanceled)
      )
        return g;
      if (
        Se.contains(e.target) ||
        (a.animated && a.animatingX && a.animatingY) ||
        p._ignoreWhileAnimating === a
      )
        return B(!1);
      if (
        ((et = !1),
        c &&
          !l.disabled &&
          (d
            ? u || (n = xe !== Be)
            : Pe === this ||
              ((this.lastPutMode = ze.checkPull(this, c, Se, e)) &&
                s.checkPut(this, c, Se, e))))
      ) {
        if (
          ((i = "vertical" === this._getDirection(e, a)),
          (t = ce(Se)),
          x("dragOverValid"),
          vt.eventCanceled)
        )
          return g;
        if (n)
          return (
            (xe = Be),
            A(),
            this._hideClone(),
            x("revert"),
            vt.eventCanceled ||
              (De ? Be.insertBefore(Se, De) : Be.appendChild(Se)),
            B(!0)
          );
        var m = he(r, l.draggable);
        if (
          !m ||
          ((function (e, t, o) {
            var n = ce(he(o.el, o.options.draggable)),
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
          if (m === Se) return B(!1);
          if (
            (m && r === e.target && (a = m),
            a && (o = ce(a)),
            !1 !== yt(Be, r, Se, t, a, o, e, !!a))
          )
            return (
              A(),
              m && m.nextSibling
                ? r.insertBefore(Se, m.nextSibling)
                : r.appendChild(Se),
              (xe = r),
              D(),
              B(!0)
            );
        } else if (
          m &&
          (function (e, t, o) {
            var n = ce(ue(o.el, 0, o.options, !0)),
              i = 10;
            return t
              ? e.clientX < n.left - i ||
                  (e.clientY < n.top && e.clientX < n.right)
              : e.clientY < n.top - i ||
                  (e.clientY < n.bottom && e.clientX < n.left);
          })(e, i, this)
        ) {
          var f = ue(r, 0, l, !0);
          if (f === Se) return B(!1);
          if (((o = ce((a = f))), !1 !== yt(Be, r, Se, t, a, o, e, !1)))
            return A(), r.insertBefore(Se, f), (xe = r), D(), B(!0);
        } else if (a.parentNode === r) {
          o = ce(a);
          var b,
            v,
            y,
            w = Se.parentNode !== r,
            C = !(function (e, t, o) {
              var n = o ? e.left : e.top,
                i = o ? e.right : e.bottom,
                r = o ? e.width : e.height,
                a = o ? t.left : t.top,
                l = o ? t.right : t.bottom,
                s = o ? t.width : t.height;
              return n === a || i === l || n + r / 2 === a + s / 2;
            })(
              (Se.animated && Se.toRect) || t,
              (a.animated && a.toRect) || o,
              i,
            ),
            k = i ? "top" : "left",
            q = de(a, "top", "top") || de(Se, "top", "top"),
            T = q ? q.scrollTop : void 0;
          if (
            (Ge !== a &&
              ((v = o[k]), (ot = !1), (nt = (!C && l.invertSwap) || w)),
            (b = (function (e, t, o, n, i, r, a, l) {
              var s = n ? e.clientY : e.clientX,
                c = n ? o.height : o.width,
                d = n ? o.top : o.left,
                u = n ? o.bottom : o.right,
                h = !1;
              if (!a)
                if (l && Ke < c * i) {
                  if (
                    (!ot &&
                      (1 === Ue ? s > d + (c * r) / 2 : s < u - (c * r) / 2) &&
                      (ot = !0),
                    ot)
                  )
                    h = !0;
                  else if (1 === Ue ? s < d + Ke : s > u - Ke) return -Ue;
                } else if (
                  s > d + (c * (1 - i)) / 2 &&
                  s < u - (c * (1 - i)) / 2
                )
                  return (function (e) {
                    return pe(Se) < pe(e) ? 1 : -1;
                  })(t);
              if ((h = h || a) && (s < d + (c * r) / 2 || s > u - (c * r) / 2))
                return s > d + c / 2 ? 1 : -1;
              return 0;
            })(
              e,
              a,
              o,
              i,
              C ? 1 : l.swapThreshold,
              null == l.invertedSwapThreshold
                ? l.swapThreshold
                : l.invertedSwapThreshold,
              nt,
              Ge === a,
            )),
            0 !== b)
          ) {
            var M = pe(Se);
            do {
              (M -= b), (y = xe.children[M]);
            } while (y && ("none" === re(y, "display") || y === Ae));
          }
          if (0 === b || y === a) return B(!1);
          (Ge = a), (Ue = b);
          var E = a.nextElementSibling,
            _ = !1,
            S = yt(Be, r, Se, t, a, o, e, (_ = 1 === b));
          if (!1 !== S)
            return (
              (1 !== S && -1 !== S) || (_ = 1 === S),
              (rt = !0),
              setTimeout(Ct, 30),
              A(),
              _ && !E
                ? r.appendChild(Se)
                : a.parentNode.insertBefore(Se, _ ? E : a),
              q && ve(q, 0, T - q.scrollTop),
              (xe = Se.parentNode),
              void 0 === v || nt || (Ke = Math.abs(v - ce(a)[k])),
              D(),
              B(!0)
            );
        }
        if (r.contains(Se)) return B(!1);
      }
      return !1;
    }
    function x(l, s) {
      Ee(
        l,
        p,
        V(
          {
            evt: e,
            isOwner: d,
            axis: i ? "vertical" : "horizontal",
            revert: n,
            dragRect: t,
            targetRect: o,
            canSort: u,
            fromSortable: h,
            target: a,
            completed: B,
            onMove: function (o, n) {
              return yt(Be, r, Se, t, o, ce(o), e, n);
            },
            changed: D,
          },
          s,
        ),
      );
    }
    function A() {
      x("dragOverAnimationCapture"),
        p.captureAnimationState(),
        p !== h && h.captureAnimationState();
    }
    function B(t) {
      return (
        x("dragOverCompleted", { insertion: t }),
        t &&
          (d ? c._hideClone() : c._showClone(p),
          p !== h &&
            (ie(Se, Pe ? Pe.options.ghostClass : c.options.ghostClass, !1),
            ie(Se, l.ghostClass, !0)),
          Pe !== p && p !== vt.active
            ? (Pe = p)
            : p === vt.active && Pe && (Pe = null),
          h === p && (p._ignoreWhileAnimating = a),
          p.animateAll(function () {
            x("dragOverAnimationComplete"), (p._ignoreWhileAnimating = null);
          }),
          p !== h && (h.animateAll(), (h._ignoreWhileAnimating = null))),
        ((a === Se && !Se.animated) || (a === r && !a.animated)) && (Ge = null),
        l.dragoverBubble ||
          e.rootEl ||
          a === document ||
          (Se.parentNode[we]._isOutsideThisEl(e.target), !t && ft(e)),
        !l.dragoverBubble && e.stopPropagation && e.stopPropagation(),
        (g = !0)
      );
    }
    function D() {
      (Fe = pe(Se)),
        ($e = pe(Se, l.draggable)),
        _e({
          sortable: p,
          name: "change",
          toEl: r,
          newIndex: Fe,
          newDraggableIndex: $e,
          originalEvent: e,
        });
    }
  },
  _ignoreWhileAnimating: null,
  _offMoveEvents: function () {
    J(document, "mousemove", this._onTouchMove),
      J(document, "touchmove", this._onTouchMove),
      J(document, "pointermove", this._onTouchMove),
      J(document, "dragover", ft),
      J(document, "mousemove", ft),
      J(document, "touchmove", ft);
  },
  _offUpEvents: function () {
    var e = this.el.ownerDocument;
    J(e, "mouseup", this._onDrop),
      J(e, "touchend", this._onDrop),
      J(e, "pointerup", this._onDrop),
      J(e, "touchcancel", this._onDrop),
      J(document, "selectstart", this);
  },
  _onDrop: function (e) {
    var t = this.el,
      o = this.options;
    (Fe = pe(Se)),
      ($e = pe(Se, o.draggable)),
      Ee("drop", this, { evt: e }),
      (xe = Se && Se.parentNode),
      (Fe = pe(Se)),
      ($e = pe(Se, o.draggable)),
      vt.eventCanceled ||
        ((Qe = !1),
        (nt = !1),
        (ot = !1),
        clearInterval(this._loopId),
        clearTimeout(this._dragStartTimer),
        Tt(this.cloneId),
        Tt(this._dragStartId),
        this.nativeDraggable &&
          (J(document, "drop", this), J(t, "dragstart", this._onDragStart)),
        this._offMoveEvents(),
        this._offUpEvents(),
        W && re(document.body, "user-select", ""),
        re(Se, "transform", ""),
        e &&
          (Ye &&
            (e.cancelable && e.preventDefault(),
            !o.dropBubble && e.stopPropagation()),
          Ae && Ae.parentNode && Ae.parentNode.removeChild(Ae),
          (Be === xe || (Pe && "clone" !== Pe.lastPutMode)) &&
            Le &&
            Le.parentNode &&
            Le.parentNode.removeChild(Le),
          Se &&
            (this.nativeDraggable && J(Se, "dragend", this),
            wt(Se),
            (Se.style["will-change"] = ""),
            Ye &&
              !Qe &&
              ie(Se, Pe ? Pe.options.ghostClass : this.options.ghostClass, !1),
            ie(Se, this.options.chosenClass, !1),
            _e({
              sortable: this,
              name: "unchoose",
              toEl: xe,
              newIndex: null,
              newDraggableIndex: null,
              originalEvent: e,
            }),
            Be !== xe
              ? (Fe >= 0 &&
                  (_e({
                    rootEl: xe,
                    name: "add",
                    toEl: xe,
                    fromEl: Be,
                    originalEvent: e,
                  }),
                  _e({
                    sortable: this,
                    name: "remove",
                    toEl: xe,
                    originalEvent: e,
                  }),
                  _e({
                    rootEl: xe,
                    name: "sort",
                    toEl: xe,
                    fromEl: Be,
                    originalEvent: e,
                  }),
                  _e({
                    sortable: this,
                    name: "sort",
                    toEl: xe,
                    originalEvent: e,
                  })),
                Pe && Pe.save())
              : Fe !== Ie &&
                Fe >= 0 &&
                (_e({
                  sortable: this,
                  name: "update",
                  toEl: xe,
                  originalEvent: e,
                }),
                _e({
                  sortable: this,
                  name: "sort",
                  toEl: xe,
                  originalEvent: e,
                })),
            vt.active &&
              ((null != Fe && -1 !== Fe) || ((Fe = Ie), ($e = Ve)),
              _e({ sortable: this, name: "end", toEl: xe, originalEvent: e }),
              this.save())))),
      this._nulling();
  },
  _nulling: function () {
    Ee("nulling", this),
      (Be =
        Se =
        xe =
        Ae =
        De =
        Le =
        Ne =
        Oe =
        He =
        Re =
        Ye =
        Fe =
        $e =
        Ie =
        Ve =
        Ge =
        Ue =
        Pe =
        ze =
        vt.dragged =
        vt.ghost =
        vt.clone =
        vt.active =
          null),
      at.forEach(function (e) {
        e.checked = !0;
      }),
      (at.length = Ze = je = 0);
  },
  handleEvent: function (e) {
    switch (e.type) {
      case "drop":
      case "dragend":
        this._onDrop(e);
        break;
      case "dragenter":
      case "dragover":
        Se &&
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
        r = this.options;
      n < i;
      n++
    )
      te((e = o[n]), r.draggable, this.el, !1) &&
        t.push(e.getAttribute(r.dataIdAttr) || kt(e));
    return t;
  },
  sort: function (e, t) {
    var o = {},
      n = this.el;
    this.toArray().forEach(function (e, t) {
      var i = n.children[t];
      te(i, this.options.draggable, n, !1) && (o[e] = i);
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
    return te(e, t || this.options.draggable, this.el, !1);
  },
  option: function (e, t) {
    var o = this.options;
    if (void 0 === t) return o[e];
    var n = Te.modifyOption(this, e, t);
    (o[e] = void 0 !== n ? n : t), "group" === e && pt(o);
  },
  destroy: function () {
    Ee("destroy", this);
    var e = this.el;
    (e[we] = null),
      J(e, "mousedown", this._onTapStart),
      J(e, "touchstart", this._onTapStart),
      J(e, "pointerdown", this._onTapStart),
      this.nativeDraggable && (J(e, "dragover", this), J(e, "dragenter", this)),
      Array.prototype.forEach.call(
        e.querySelectorAll("[draggable]"),
        function (e) {
          e.removeAttribute("draggable");
        },
      ),
      this._onDrop(),
      this._disableDelayedDragEvents(),
      tt.splice(tt.indexOf(this.el), 1),
      (this.el = e = null);
  },
  _hideClone: function () {
    if (!Oe) {
      if ((Ee("hideClone", this), vt.eventCanceled)) return;
      re(Le, "display", "none"),
        this.options.removeCloneOnHide &&
          Le.parentNode &&
          Le.parentNode.removeChild(Le),
        (Oe = !0);
    }
  },
  _showClone: function (e) {
    if ("clone" === e.lastPutMode) {
      if (Oe) {
        if ((Ee("showClone", this), vt.eventCanceled)) return;
        Se.parentNode != Be || this.options.group.revertClone
          ? De
            ? Be.insertBefore(Le, De)
            : Be.appendChild(Le)
          : Be.insertBefore(Le, Se),
          this.options.group.revertClone && this.animate(Se, Le),
          re(Le, "display", ""),
          (Oe = !1);
      }
    } else this._hideClone();
  },
}),
  lt &&
    K(document, "touchmove", function (e) {
      (vt.active || Qe) && e.cancelable && e.preventDefault();
    }),
  (vt.utils = {
    on: K,
    off: J,
    css: re,
    find: le,
    is: function (e, t) {
      return !!te(e, t, e, !1);
    },
    extend: function (e, t) {
      if (e && t) for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o]);
      return e;
    },
    throttle: be,
    closest: te,
    toggleClass: ie,
    clone: ye,
    index: pe,
    nextTick: qt,
    cancelNextTick: Tt,
    detectDirection: ht,
    getChild: ue,
  }),
  (vt.get = function (e) {
    return e[we];
  }),
  (vt.mount = function () {
    for (var e = arguments.length, t = new Array(e), o = 0; o < e; o++)
      t[o] = arguments[o];
    t[0].constructor === Array && (t = t[0]),
      t.forEach(function (e) {
        if (!e.prototype || !e.prototype.constructor)
          throw "Sortable: Mounted plugin must be a constructor function, not ".concat(
            {}.toString.call(e),
          );
        e.utils && (vt.utils = V(V({}, vt.utils), e.utils)), Te.mount(e);
      });
  }),
  (vt.create = function (e, t) {
    return new vt(e, t);
  }),
  (vt.version = "1.15.0");
var Mt,
  Et,
  _t,
  St,
  xt,
  At,
  Bt = [],
  Dt = !1;
function Nt() {
  Bt.forEach(function (e) {
    clearInterval(e.pid);
  }),
    (Bt = []);
}
function Lt() {
  clearInterval(At);
}
var Ot = be(function (e, t, o, n) {
    if (t.scroll) {
      var i,
        r = (e.touches ? e.touches[0] : e).clientX,
        a = (e.touches ? e.touches[0] : e).clientY,
        l = t.scrollSensitivity,
        s = t.scrollSpeed,
        c = se(),
        d = !1;
      Et !== o &&
        ((Et = o),
        Nt(),
        (Mt = t.scroll),
        (i = t.scrollFn),
        !0 === Mt && (Mt = me(o, !0)));
      var u = 0,
        h = Mt;
      do {
        var p = h,
          g = ce(p),
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
          M = re(p),
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
            (Math.abs(v - r) <= l && E + y < q) - (Math.abs(b - r) <= l && !!E),
          x =
            k &&
            (Math.abs(f - a) <= l && _ + w < T) - (Math.abs(m - a) <= l && !!_);
        if (!Bt[u]) for (var A = 0; A <= u; A++) Bt[A] || (Bt[A] = {});
        (Bt[u].vx == S && Bt[u].vy == x && Bt[u].el === p) ||
          ((Bt[u].el = p),
          (Bt[u].vx = S),
          (Bt[u].vy = x),
          clearInterval(Bt[u].pid),
          (0 == S && 0 == x) ||
            ((d = !0),
            (Bt[u].pid = setInterval(
              function () {
                n && 0 === this.layer && vt.active._onTouchMove(xt);
                var t = Bt[this.layer].vy ? Bt[this.layer].vy * s : 0,
                  o = Bt[this.layer].vx ? Bt[this.layer].vx * s : 0;
                ("function" == typeof i &&
                  "continue" !==
                    i.call(
                      vt.dragged.parentNode[we],
                      o,
                      t,
                      e,
                      xt,
                      Bt[this.layer].el,
                    )) ||
                  ve(Bt[this.layer].el, o, t);
              }.bind({ layer: u }),
              24,
            )))),
          u++;
      } while (t.bubbleScroll && h !== c && (h = me(h, !1)));
      Dt = d;
    }
  }, 30),
  It = function (e) {
    var t = e.originalEvent,
      o = e.putSortable,
      n = e.dragEl,
      i = e.activeSortable,
      r = e.dispatchSortableEvent,
      a = e.hideGhostForTarget,
      l = e.unhideGhostForTarget;
    if (t) {
      var s = o || i;
      a();
      var c =
          t.changedTouches && t.changedTouches.length ? t.changedTouches[0] : t,
        d = document.elementFromPoint(c.clientX, c.clientY);
      l(),
        s &&
          !s.el.contains(d) &&
          (r("spill"), this.onSpill({ dragEl: n, putSortable: o }));
    }
  };
function Ft() {}
function Vt() {}
function $t(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
(Ft.prototype = {
  startIndex: null,
  dragStart: function (e) {
    var t = e.oldDraggableIndex;
    this.startIndex = t;
  },
  onSpill: function (e) {
    var t = e.dragEl,
      o = e.putSortable;
    this.sortable.captureAnimationState(), o && o.captureAnimationState();
    var n = ue(this.sortable.el, this.startIndex, this.options);
    n ? this.sortable.el.insertBefore(t, n) : this.sortable.el.appendChild(t),
      this.sortable.animateAll(),
      o && o.animateAll();
  },
  drop: It,
}),
  P(Ft, { pluginName: "revertOnSpill" }),
  (Vt.prototype = {
    onSpill: function (e) {
      var t = e.dragEl,
        o = e.putSortable || this.sortable;
      o.captureAnimationState(),
        t.parentNode && t.parentNode.removeChild(t),
        o.animateAll();
    },
    drop: It,
  }),
  P(Vt, { pluginName: "removeOnSpill" }),
  vt.mount(
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
              ? K(document, "dragover", this._handleAutoScroll)
              : this.options.supportPointer
                ? K(document, "pointermove", this._handleFallbackAutoScroll)
                : t.touches
                  ? K(document, "touchmove", this._handleFallbackAutoScroll)
                  : K(document, "mousemove", this._handleFallbackAutoScroll);
          },
          dragOverCompleted: function (e) {
            var t = e.originalEvent;
            this.options.dragOverBubble ||
              t.rootEl ||
              this._handleAutoScroll(t);
          },
          drop: function () {
            this.sortable.nativeDraggable
              ? J(document, "dragover", this._handleAutoScroll)
              : (J(document, "pointermove", this._handleFallbackAutoScroll),
                J(document, "touchmove", this._handleFallbackAutoScroll),
                J(document, "mousemove", this._handleFallbackAutoScroll)),
              Lt(),
              Nt(),
              clearTimeout(oe),
              (oe = void 0);
          },
          nulling: function () {
            (xt = Et = Mt = Dt = At = _t = St = null), (Bt.length = 0);
          },
          _handleFallbackAutoScroll: function (e) {
            this._handleAutoScroll(e, !0);
          },
          _handleAutoScroll: function (e, t) {
            var o = this,
              n = (e.touches ? e.touches[0] : e).clientX,
              i = (e.touches ? e.touches[0] : e).clientY,
              r = document.elementFromPoint(n, i);
            if (
              ((xt = e),
              t || this.options.forceAutoScrollFallback || j || Z || W)
            ) {
              Ot(e, this.options, r, t);
              var a = me(r, !0);
              !Dt ||
                (At && n === _t && i === St) ||
                (At && Lt(),
                (At = setInterval(function () {
                  var r = me(document.elementFromPoint(n, i), !0);
                  r !== a && ((a = r), Nt()), Ot(e, o.options, r, t);
                }, 10)),
                (_t = n),
                (St = i));
            } else {
              if (!this.options.bubbleScroll || me(r, !0) === se())
                return void Nt();
              Ot(e, this.options, me(r, !1), !1);
            }
          },
        }),
        P(e, { pluginName: "scroll", initializeByDefault: !0 })
      );
    })(),
  ),
  vt.mount(Vt, Ft);
/*! Pickr 1.8.2 MIT | https://github.com/Simonwep/pickr */
var zt = (function (e) {
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
          for (const r of t)
            for (const t of o) r[e](t, n, { capture: !1, ...i });
          return Array.prototype.slice.call(arguments, 1);
        }
        e.r(o),
          e.d(o, {
            adjustableInputNumbers: () => d,
            createElementFromString: () => a,
            createFromTemplate: () => l,
            eventPath: () => s,
            off: () => r,
            on: () => i,
            resolveElement: () => c,
          });
        const i = n.bind(null, "addEventListener"),
          r = n.bind(null, "removeEventListener");
        function a(e) {
          const t = document.createElement("div");
          return (t.innerHTML = e.trim()), t.firstElementChild;
        }
        function l(e) {
          const t = (e, t) => {
              const o = e.getAttribute(t);
              return e.removeAttribute(t), o;
            },
            o = (e, n = {}) => {
              const i = t(e, ":obj"),
                r = t(e, ":ref"),
                a = i ? (n[i] = {}) : n;
              r && (n[r] = e);
              for (const n of Array.from(e.children)) {
                const e = t(n, ":arr"),
                  i = o(n, e ? {} : a);
                e && (a[e] || (a[e] = [])).push(Object.keys(i).length ? i : n);
              }
              return n;
            };
          return o(a(e));
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
              r = e.selectionStart;
            (e.value = e.value.replace(/[\d.]+/g, (e, o) =>
              o <= r && o + e.length >= r
                ? ((r = o), t(Number(e), n, i))
                : (i++, e),
            )),
              e.focus(),
              e.setSelectionRange(r, r),
              o.preventDefault(),
              e.dispatchEvent(new Event("input"));
          }
          i(e, "focus", () => i(window, "wheel", o, { passive: !1 })),
            i(e, "blur", () => r(window, "wheel", o));
        }
        const { min: u, max: h, floor: p, round: g } = Math;
        function m(e, t, o) {
          (t /= 100), (o /= 100);
          const n = p((e = (e / 360) * 6)),
            i = e - n,
            r = o * (1 - t),
            a = o * (1 - i * t),
            l = o * (1 - (1 - i) * t),
            s = n % 6;
          return [
            255 * [o, a, r, r, l, o][s],
            255 * [l, o, o, a, r, r][s],
            255 * [r, r, l, o, o, a][s],
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
            r = i - n;
          let a, l;
          if (0 === r) a = l = 0;
          else {
            l = r / i;
            const n = ((i - e) / 6 + r / 2) / r,
              s = ((i - t) / 6 + r / 2) / r,
              c = ((i - o) / 6 + r / 2) / r;
            e === i
              ? (a = c - s)
              : t === i
                ? (a = 1 / 3 + n - c)
                : o === i && (a = 2 / 3 + s - n),
              a < 0 ? (a += 1) : a > 1 && (a -= 1);
          }
          return [360 * a, 100 * l, 100 * i];
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
            const r = (e) => !!n[2] == ("number" == typeof e);
            switch (i) {
              case "cmyk": {
                const [, e, t, r, a] = o(n);
                if (e > 100 || t > 100 || r > 100 || a > 100) break e;
                return { values: v(e, t, r, a), type: i };
              }
              case "rgba": {
                const [, , , e, t, a, l] = o(n);
                if (e > 255 || t > 255 || a > 255 || l < 0 || l > 1 || !r(l))
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
                const [, , , e, t, a, l] = o(n);
                if (e > 360 || t > 100 || a > 100 || l < 0 || l > 1 || !r(l))
                  break e;
                return { values: [...y(e, t, a), l], a: l, type: i };
              }
              case "hsva": {
                const [, , , e, t, a, l] = o(n);
                if (e > 360 || t > 100 || a > 100 || l < 0 || l > 1 || !r(l))
                  break e;
                return { values: [e, t, a, l], a: l, type: i };
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
            r = {
              h: e,
              s: t,
              v: o,
              a: n,
              toHSVA() {
                const e = [r.h, r.s, r.v, r.a];
                return (
                  (e.toString = i(
                    e,
                    (e) => `hsva(${e[0]}, ${e[1]}%, ${e[2]}%, ${r.a})`,
                  )),
                  e
                );
              },
              toHSLA() {
                const e = [...f(r.h, r.s, r.v), r.a];
                return (
                  (e.toString = i(
                    e,
                    (e) => `hsla(${e[0]}, ${e[1]}%, ${e[2]}%, ${r.a})`,
                  )),
                  e
                );
              },
              toRGBA() {
                const e = [...m(r.h, r.s, r.v), r.a];
                return (
                  (e.toString = i(
                    e,
                    (e) => `rgba(${e[0]}, ${e[1]}, ${e[2]}, ${r.a})`,
                  )),
                  e
                );
              },
              toCMYK() {
                const e = (function (e, t, o) {
                  const n = m(e, t, o),
                    i = n[0] / 255,
                    r = n[1] / 255,
                    a = n[2] / 255,
                    l = u(1 - i, 1 - r, 1 - a);
                  return [
                    100 * (1 === l ? 0 : (1 - i - l) / (1 - l)),
                    100 * (1 === l ? 0 : (1 - r - l) / (1 - l)),
                    100 * (1 === l ? 0 : (1 - a - l) / (1 - l)),
                    100 * l,
                  ];
                })(r.h, r.s, r.v);
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
                  })(r.h, r.s, r.v),
                  t =
                    r.a >= 1
                      ? ""
                      : Number((255 * r.a).toFixed(0))
                          .toString(16)
                          .toUpperCase()
                          .padStart(2, "0");
                return (
                  t && e.push(t),
                  (e.toString = () => `#${e.join("").toUpperCase()}`),
                  e
                );
              },
              clone: () => k(r.h, r.s, r.v, r.a),
            };
          return r;
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
                    r = "ArrowUp" === i,
                    a = "ArrowRight" === i,
                    l = "ArrowDown" === i,
                    s = "ArrowLeft" === i;
                  if ("keydown" === n && (r || a || l || s)) {
                    let n = 0,
                      i = 0;
                    "v" === o
                      ? (n = r || a ? 1 : -1)
                      : "h" === o
                        ? (n = r || a ? -1 : 1)
                        : ((i = r ? -1 : l ? 1 : 0), (n = s ? -1 : a ? 1 : 0)),
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
                  { lock: i, element: r, wrapper: a } = o,
                  l = a.getBoundingClientRect();
                let s = 0,
                  c = 0;
                if (e) {
                  const t = e && e.touches && e.touches[0];
                  (s = e ? (t || e).clientX : 0),
                    (c = e ? (t || e).clientY : 0),
                    s < l.left
                      ? (s = l.left)
                      : s > l.left + l.width && (s = l.left + l.width),
                    c < l.top
                      ? (c = l.top)
                      : c > l.top + l.height && (c = l.top + l.height),
                    (s -= l.left),
                    (c -= l.top);
                } else n && ((s = n.x * l.width), (c = n.y * l.height));
                "h" !== i &&
                  (r.style.left = `calc(${(s / l.width) * 100}% - ${r.offsetWidth / 2}px)`),
                  "v" !== i &&
                    (r.style.top = `calc(${(c / l.height) * 100}% - ${r.offsetHeight / 2}px)`),
                  (t.cache = { x: s / l.width, y: c / l.height });
                const d = q(s / l.width),
                  u = q(c / l.height);
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
                  r(
                    document,
                    ["mouseup", "touchend", "touchcancel"],
                    t._tapstop,
                  ),
                  r(document, ["mousemove", "touchmove"], t._tapmove);
              },
              trigger() {
                t._tapmove();
              },
              update(e = 0, o = 0) {
                const {
                  left: n,
                  top: i,
                  width: r,
                  height: a,
                } = t.options.wrapper.getBoundingClientRect();
                "h" === t.options.lock && (o = e),
                  t._tapmove({ clientX: n + r * e, clientY: i + a * o });
              },
              destroy() {
                const { options: e, _tapstart: o, _keyboard: n } = t;
                r(document, ["keydown", "keyup"], n),
                  r([e.wrapper, e.element], "mousedown", o),
                  r([e.wrapper, e.element], "touchstart", o, { passive: !1 });
              },
            },
            { options: o, _tapstart: n, _keyboard: a } = t;
          return (
            i([o.wrapper, o.element], "mousedown", n),
            i([o.wrapper, o.element], "touchstart", n, { passive: !1 }),
            i(document, ["keydown", "keyup"], a),
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
          return { destroy: () => r(...t) };
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
                position: r,
                variantFlipOrder: a,
                positionFlipOrder: l,
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
              [g, m = "middle"] = r.split("-"),
              f = l[g],
              b = a[m],
              { top: v, left: y, bottom: w, right: C } = n;
            for (const e of f) {
              const o = "t" === e || "b" === e,
                n = h[e],
                [i, r] = o ? ["top", "left"] : ["left", "top"],
                [a, l] = o ? [u.height, u.width] : [u.width, u.height],
                [s, c] = o ? [w, C] : [C, w],
                [d, g] = o ? [v, y] : [y, v];
              if (!(n < d || n + a > s))
                for (const a of b) {
                  const s = p[(o ? "v" : "h") + a];
                  if (!(s < g || s + l > c))
                    return (
                      (t.style[r] = s - u[r] + "px"),
                      (t.style[i] = n - u[i] + "px"),
                      e + a
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
              lockOpacity: r,
              padding: a,
            } = e;
            ["nano", "monolith"].includes(n) && !i && (e.sliders = "h"),
              o.interaction || (o.interaction = {});
            const { preview: l, opacity: s, hue: c, palette: d } = o;
            (o.opacity = !r && s),
              (o.palette = d || l || s || c),
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
            })(u, h, { margin: a })),
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
                  theme: r,
                  lockOpacity: a,
                } = e.options,
                s = (e) => (e ? "" : 'style="display:none" hidden'),
                c = (t) => e._t(t),
                d = l(
                  `\n      <div :ref="root" class="pickr">\n\n        ${o ? "" : '<button type="button" :ref="button" class="pcr-button"></button>'}\n\n        <div :ref="app" class="pcr-app ${i || ""}" data-theme="${r}" ${n ? 'style="position: unset"' : ""} aria-label="${c("ui:dialog")}" role="window">\n          <div class="pcr-selection" ${s(t.palette)}>\n            <div :obj="preview" class="pcr-color-preview" ${s(t.preview)}>\n              <button type="button" :ref="lastColor" class="pcr-last-color" aria-label="${c("btn:last-color")}"></button>\n              <div :ref="currentColor" class="pcr-current-color"></div>\n            </div>\n\n            <div :obj="palette" class="pcr-color-palette">\n              <div :ref="picker" class="pcr-picker"></div>\n              <div :ref="palette" class="pcr-palette" tabindex="0" aria-label="${c("aria:palette")}" role="listbox"></div>\n            </div>\n\n            <div :obj="hue" class="pcr-color-chooser" ${s(t.hue)}>\n              <div :ref="picker" class="pcr-picker"></div>\n              <div :ref="slider" class="pcr-hue pcr-slider" tabindex="0" aria-label="${c("aria:hue")}" role="slider"></div>\n            </div>\n\n            <div :obj="opacity" class="pcr-color-opacity" ${s(t.opacity)}>\n              <div :ref="picker" class="pcr-picker"></div>\n              <div :ref="slider" class="pcr-opacity pcr-slider" tabindex="0" aria-label="${c("aria:opacity")}" role="slider"></div>\n            </div>\n          </div>\n\n          <div class="pcr-swatches ${t.palette ? "" : "pcr-last"}" :ref="swatches"></div>\n\n          <div :obj="interaction" class="pcr-interaction" ${s(Object.keys(t.interaction).length)}>\n            <input :ref="result" class="pcr-result" type="text" spellcheck="false" ${s(t.interaction.input)} aria-label="${c("aria:input")}">\n\n            <input :arr="options" class="pcr-type" data-type="HEXA" value="${a ? "HEX" : "HEXA"}" type="button" ${s(t.interaction.hex)}>\n            <input :arr="options" class="pcr-type" data-type="RGBA" value="${a ? "RGB" : "RGBA"}" type="button" ${s(t.interaction.rgba)}>\n            <input :arr="options" class="pcr-type" data-type="HSLA" value="${a ? "HSL" : "HSLA"}" type="button" ${s(t.interaction.hsla)}>\n            <input :arr="options" class="pcr-type" data-type="HSVA" value="${a ? "HSV" : "HSVA"}" type="button" ${s(t.interaction.hsva)}>\n            <input :arr="options" class="pcr-type" data-type="CMYK" value="CMYK" type="button" ${s(t.interaction.cmyk)}>\n\n            <input :ref="save" class="pcr-save" value="${c("btn:save")}" type="button" ${s(t.interaction.save)} aria-label="${c("aria:btn:save")}">\n            <input :ref="cancel" class="pcr-cancel" value="${c("btn:cancel")}" type="button" ${s(t.interaction.cancel)} aria-label="${c("aria:btn:cancel")}">\n            <input :ref="clear" class="pcr-clear" value="${c("btn:clear")}" type="button" ${s(t.interaction.clear)} aria-label="${c("aria:btn:clear")}">\n          </div>\n        </div>\n      </div>\n    `,
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
              r = () => this._color || (this._color = this._lastColor.clone()),
              a = {
                palette: T({
                  element: e._root.palette.picker,
                  wrapper: e._root.palette.palette,
                  onstop: () => e._emit("changestop", "slider", e),
                  onchange(o, n) {
                    if (!t.palette) return;
                    const i = r(),
                      { _root: a, options: l } = e,
                      { lastColor: s, currentColor: c } = a.preview;
                    e._recalc &&
                      ((i.s = 100 * o),
                      (i.v = 100 - 100 * n),
                      i.v < 0 && (i.v = 0),
                      e._updateOutput("slider"));
                    const d = i.toRGBA().toString(0);
                    (this.element.style.background = d),
                      (this.wrapper.style.background = `\n                        linear-gradient(to top, rgba(0, 0, 0, ${i.a}), transparent),\n                        linear-gradient(to left, hsla(${i.h}, 100%, 50%, ${i.a}), rgba(255, 255, 255, ${i.a}))\n                    `),
                      l.comparison
                        ? l.useAsButton ||
                          e._lastColor ||
                          s.style.setProperty("--pcr-color", d)
                        : (a.button.style.setProperty("--pcr-color", d),
                          a.button.classList.remove("clear"));
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
                    const n = r();
                    e._recalc && (n.h = 360 * o),
                      (this.element.style.backgroundColor = `hsl(${n.h}, 100%, 50%)`),
                      a.palette.trigger();
                  },
                }),
                opacity: T({
                  lock: "v" === n ? "h" : "v",
                  element: e._root.opacity.picker,
                  wrapper: e._root.opacity.slider,
                  onstop: () => e._emit("changestop", "slider", e),
                  onchange(o) {
                    if (!t.opacity || !t.palette) return;
                    const n = r();
                    e._recalc && (n.a = Math.round(100 * o) / 100),
                      (this.element.style.background = `rgba(0, 0, 0, ${n.a})`),
                      a.palette.trigger();
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
            this._components = a;
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
                    r = e + (t >= 100 ? 1e3 * o : o);
                  return r <= 0 ? 0 : Number((r < t ? r : t).toPrecision(3));
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
              r = void 0 !== n && 1 !== n;
            return (
              t && 3 === t.length && (t[3] = void 0),
              { values: !t || (i && r) ? null : t, type: o }
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
                r = a(
                  `<button type="button" style="--pcr-color: ${n.toRGBA().toString(0)}" aria-label="${this._t("btn:swatch")}"/>`,
                );
              return (
                o.swatches.appendChild(r),
                e.push({ el: r, color: n }),
                this._eventBindings.push(
                  i(r, "click", () => {
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
              this._eventBindings.forEach((e) => r(...e)),
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
            const r = this._recalc;
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
            const { hue: a, opacity: l, palette: s } = this._components;
            return (
              a.update(e / 360),
              l.update(n),
              s.update(t / 100, 1 - o / 100),
              i || this.applyColor(),
              r && this._updateOutput(),
              (this._recalc = r),
              !0
            );
          }
          setColor(e, t = !1) {
            if (null === e) return this._clearColor(t), !0;
            const { values: o, type: n } = this._parseLocalColor(e);
            if (o) {
              const e = n.toUpperCase(),
                { options: i } = this._root.interaction,
                r = i.find((t) => t.getAttribute("data-type") === e);
              if (r && !r.hidden)
                for (const e of i)
                  e.classList[e === r ? "add" : "remove"]("active");
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
  Pt = $t(zt);
function Ht(e) {
  const {
    el: t,
    isView: o,
    containerEl: n,
    swatches: i,
    opacity: r,
    defaultColor: a,
  } = e;
  return {
    el: t,
    container: o ? document.body : n,
    theme: "nano",
    swatches: i,
    lockOpacity: !r,
    default: a,
    position: "left-middle",
    components: {
      preview: !0,
      hue: !0,
      opacity: !!r,
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
function Rt(e) {
  e.hide();
}
function Zt(e, t) {
  let o;
  return (
    t.forEach((t, n) => {
      t.id === e && (o = n);
    }),
    o
  );
}
class jt extends e.PluginSettingTab {
  constructor(e, t) {
    super(e, t),
      (this.plugin = t),
      addEventListener("cMenuToolbar-NewCommand", () => {
        k(), I(e, this.plugin), this.display();
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
            this.pickr = Pt.create(
              Ht({
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
              .on("cancel", Rt);
        }),
      new e.Setting(o)
        .setName(u("🖌️ Set custom font color"))
        .setDesc(u("Click on the picker to adjust the colour"))
        .setClass("custom_font")
        .then((e) => {
          for (let n = 0; n < 5; n++)
            this.pickr = Pt.create(
              Ht({
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
              .on("cancel", Rt);
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
    const r = o.createEl("div", { cls: "cMenuToolbarSettingsTabsContainer" });
    let a = "";
    vt.create(r, {
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
        a = e.item.className;
      },
    }),
      this.plugin.settings.menuCommands.forEach((o, i) => {
        const l = new e.Setting(r);
        if ("SubmenuCommands" in o) {
          if (
            (l.settingEl.setAttribute("data-id", o.id),
            l
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
          const n = l.settingEl.createEl("div", {
            cls: "cMenuToolbarSettingsTabsContainer_sub",
          });
          vt.create(n, {
            group: {
              name: "item",
              pull: !0,
              put: function () {
                return !a.includes("cMenuToolbarCommandsubItem");
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
            onStart: function (e) {},
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
                  null === (o = t[Zt(e.target.parentElement.dataset.id, t)]) ||
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
                      (n = t[Zt(e.target.parentElement.dataset.id, t)]) ||
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
              const r = new e.Setting(n);
              r
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
                r.nameEl;
            });
        } else
          l.addButton((e) => {
            e.setClass("cMenuToolbarSettingsIcon").onClick(() =>
              t(this, void 0, void 0, function* () {
                new h(this.plugin, o, !1).open();
              }),
            ),
              S(o.icon) ? (e.buttonEl.innerHTML = o.icon) : e.setIcon(o.icon);
          }),
            "cMenuToolbar-Divider-Line" == o.id &&
              l.setClass("cMenuToolbar-Divider-Line"),
            l
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
    const l = o.createEl("div", { cls: "cDonationSection" }),
      s = createEl("p"),
      c = createEl("p");
    c.appendText(
      "If you like this Plugin and are considering donating to support continued development, use the button below!",
    ),
      s.setAttribute("style", "color: var(--text-muted)"),
      l.appendChild(c),
      l.appendChild(s),
      l.appendChild(Xt("https://www.buymeacoffee.com/cuman"));
  }
  hide() {
    setTimeout(() => {
      dispatchEvent(new Event("cMenuToolbar-NewCommand"));
    }, 100),
      this.pickr.destroyAndRemove();
  }
}
const Xt = (e) => {
    const t = createEl("a");
    return (
      t.setAttribute("href", e),
      t.addClass("buymeacoffee-img"),
      (t.innerHTML =
        '<img src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee &emoji=&slug=Cuman&button_colour=BD5FFF&font_colour=ffffff&font_family=Poppins&outline_colour=000000&coffee_colour=FFDD00" />'),
      t
    );
  },
  Wt = {
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
  Object.keys(Wt).forEach((t) => {
    e.addIcon(t, Wt[t]);
  });
}
let Gt;
Object.defineProperty(exports, "__esModule", { value: !0 }),
  (exports.toggleFull =
    exports.isFull =
    exports.exitFull =
    exports.beFull =
      void 0);
let Ut,
  Kt = document.documentElement,
  Jt = Kt.querySelector("head"),
  Qt = document.createElement("style"),
  eo = "requestFullscreen",
  to = "exitFullscreen",
  oo = "fullscreenElement";
if ("webkitRequestFullScreen" in Kt)
  (eo = "webkitRequestFullScreen"),
    (to = "webkitExitFullscreen"),
    (oo = "webkitFullscreenElement");
else if ("msRequestFullscreen" in Kt)
  (eo = "msRequestFullscreen"),
    (to = "msExitFullscreen"),
    (oo = "msFullscreenElement");
else if ("mozRequestFullScreen" in Kt)
  (eo = "mozRequestFullScreen"),
    (to = "mozCancelFullScreen"),
    (oo = "mozFullScreenElement");
else if (!("requestFullscreen" in Kt)) throw "当前浏览器不支持Fullscreen API !";
function no(e) {
  return e instanceof HTMLElement ? e : Kt;
}
function io(e) {
  return no(e)[eo]();
}
function ro() {
  return Kt.contains(Qt) && (null == Jt || Jt.removeChild(Qt)), document[to]();
}
function ao(e) {
  return no(e) === document[oo];
}
(exports.beFull = io),
  (exports.exitFull = ro),
  (exports.isFull = ao),
  (exports.toggleFull = function (e) {
    return ao(e) ? (ro(), !1) : (io(e), !0);
  });
class lo extends e.Plugin {
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
          icon: "quote-glyph",
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
      ]),
      (this.handlecMenuToolbar = () => {
        if (1 == this.settings.cMenuVisibility) {
          let t = this.app.workspace.getActiveViewOfType(e.MarkdownView),
            o = q(this.app, this.settings);
          if (t)
            if (o) {
              if ("following" != this.settings.positionStyle)
                try {
                  o.style.visibility = "visible";
                } catch (e) {
                  console.log(o, "toolbar_error");
                }
            } else
              setTimeout(() => {
                I(this.app, this);
              }, 100);
        }
      }),
      (this.handlecMenuToolbar_layout = () => {
        if (1 != this.settings.cMenuVisibility) return !1;
        {
          let t = q(this.app, this.settings),
            o = this.app.workspace.getActiveViewOfType(e.MarkdownView);
          !1 !== _(app) && o
            ? !0 === _(app) &&
              (t
                ? "following" == this.settings.positionStyle
                  ? (t.style.visibility = "hidden")
                  : (t.style.visibility = "visible")
                : setTimeout(() => {
                    I(this.app, this);
                  }, 100))
            : t && (t.style.visibility = "hidden");
        }
      }),
      (this.handlecMenuToolbar_resize = () => {
        var t, o;
        if (
          1 != this.settings.cMenuVisibility ||
          "top" != this.settings.positionStyle
        )
          return !1;
        if (_(app)) {
          let n = this.app.workspace.getActiveViewOfType(e.MarkdownView);
          if (n) {
            let i =
              null !==
                (o =
                  null === (t = n.containerEl) || void 0 === t
                    ? void 0
                    : t.querySelector(".markdown-source-view").offsetWidth) &&
              void 0 !== o
                ? o
                : 0;
            if (this.Leaf_Width == i) return !1;
            if (
              i > 0 &&
              ((this.Leaf_Width = i), this.settings.cMenuWidth && i)
            ) {
              if (
                i - this.settings.cMenuWidth < 78 &&
                i > this.settings.cMenuWidth
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
                        (e.firstChild && e.removeChild(e.firstChild),
                        e.remove());
                    });
                })(),
                  I(app, this);
              }, 200);
            }
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
          }),
        this.addSettingTab(new jt(this.app, this)),
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
  init_evt(o) {
    (this.EN_FontColor_Format_Brush = !1),
      (this.EN_BG_Format_Brush = !1),
      (this.EN_Text_Format_Brush = !1),
      this.registerDomEvent(o, "mouseup", (o) =>
        t(this, void 0, void 0, function* () {
          o.button &&
            (this.EN_FontColor_Format_Brush ||
              this.EN_BG_Format_Brush ||
              this.EN_Text_Format_Brush) &&
            N(this);
          let n = this.app.workspace.getActiveViewOfType(e.MarkdownView);
          if (!n) return;
          let i = n.editor;
          if (i.hasFocus()) {
            let o = q(this.app, this.settings);
            if (null == i.getSelection() || "" == i.getSelection())
              return void (
                o &&
                ("following" != this.settings.positionStyle ||
                  (o.style.visibility = "hidden"))
              );
            this.EN_FontColor_Format_Brush
              ? A(this.app, 0, this.settings.cMenuFontColor)
              : this.EN_BG_Format_Brush
                ? B(this.app, 0, this.settings.cMenuBackgroundColor)
                : this.EN_Text_Format_Brush
                  ? O(this.app, this)
                  : "following" == this.settings.positionStyle &&
                    (this.registerDomEvent(Ut, "keydown", (e) =>
                      t(this, void 0, void 0, function* () {
                        e.shiftKey || (o && (o.style.visibility = "hidden"));
                      }),
                    ),
                    ((t, o) => {
                      var n, i, r, a;
                      let l = _(t),
                        s = q(t, o);
                      if (l) {
                        const l = t.workspace.getActiveViewOfType(
                          e.MarkdownView,
                        ).editor;
                        if (s) {
                          let t = l.somethingSelected();
                          (s.style.visibility = t ? "visible" : "hidden"),
                            s.addClass("cMenuToolbarFlex"),
                            s.removeClass("cMenuToolbarGrid");
                          let c = 1;
                          (s.style.height = 40 * c + "px"),
                            "tiny" == o.aestheticStyle &&
                              (s.style.height = 25 * c + "px");
                          let d =
                              null !==
                                (i =
                                  null ===
                                    (n = C.getElementsByClassName(
                                      "side-dock-ribbon mod-left",
                                    )[0]) || void 0 === n
                                    ? void 0
                                    : n.clientWidth) && void 0 !== i
                                ? i
                                : 0,
                            u =
                              null !==
                                (a =
                                  null ===
                                    (r =
                                      C.getElementsByClassName(
                                        "mod-left-split",
                                      )[0]) || void 0 === r
                                    ? void 0
                                    : r.clientWidth) && void 0 !== a
                                ? a
                                : 0,
                            h = C.getElementById(
                              "cMenuToolbarModalBar",
                            ).offsetWidth,
                            p = C.getElementById(
                              "cMenuToolbarModalBar",
                            ).offsetHeight,
                            g = C.body.offsetWidth,
                            m = ((e) => {
                              var t, o, n;
                              const i = e.getCursor("head");
                              let r;
                              if (e.cursorCoords)
                                r = e.cursorCoords(!0, "window");
                              else {
                                if (!e.coordsAtPos) return;
                                {
                                  const a = e.posToOffset(i);
                                  r =
                                    null !==
                                      (n =
                                        null === (o = (t = e.cm).coordsAtPos) ||
                                        void 0 === o
                                          ? void 0
                                          : o.call(t, a)) && void 0 !== n
                                      ? n
                                      : e.coordsAtPos(a);
                                }
                              }
                              return r;
                            })(l),
                            f = l.getCursor("head").ch,
                            b = l.getCursor("from").ch,
                            v = 0,
                            y = m.left - u - d + 20;
                          m.left + h + 15 > g &&
                            (y = m.left - u - d - h / 1.3 - 60),
                            e.requireApiVersion("1.0.0")
                              ? f == b
                                ? (v = m.top - p - 10)
                                : ((v = m.top + 25), (y -= 40))
                              : f == b
                                ? (v = m.top - p - 30)
                                : ((v = m.top), (y -= 40)),
                            y < 0 && (y = 0),
                            "visible" != s.style.visibility ||
                              ((s.style.left = y + "px"),
                              (s.style.top = v + "px"));
                        }
                      } else s.style.visibility = "hidden";
                    })(this.app, this.settings));
          } else
            (this.EN_FontColor_Format_Brush ||
              this.EN_BG_Format_Brush ||
              this.EN_Text_Format_Brush) &&
              N(this);
        }),
      );
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
              : l(this.settings.cMenuVisibility),
            k(),
            yield this.saveSettings();
        }),
    }),
      this.addCommand({
        id: "format-eraser",
        name: "Format Eraser",
        callback: () => O(this.app, this),
        icon: '<svg width="18" height="18" focusable="false" fill="currentColor"  viewBox="0 0 1024 1024"><g transform="scale(1, -1) translate(0, -896) scale(0.9, 0.9) "><path class="path" d="M889 512 l-211 211 q-26 27 -61 36 q-35 9 -70 0 q-35 -9 -61 -36 l-351 -350 q-26 -27 -35.5 -62 q-9.5 -35 0 -70 q9.5 -35 35.5 -61 l170 -170 q12 -12 29 -12 l215 0 q17 0 29 12 l311 310 q26 26 35.5 61 q9.5 35 0 70 q-9.5 35 -35.5 61 ZM831 453 q15 -15 15.5 -36.5 q0.5 -21.5 -14.5 -37.5 l-300 -298 l-181 0 l-158 158 q-15 15 -15 37 q0 22 15 38 l351 351 q16 16 38 16 q22 0 37 -16 l212 -212 ZM686 217 l-59 -59 l-317 315 l58 59 l318 -315 ZM883 81 q18 0 30.5 -12 q12.5 -12 12.5 -29 q0 -17 -12.5 -29 q-12.5 -12 -29.5 -13 l-456 0 q-17 0 -29.5 12 q-12.5 12 -12.5 29 q0 17 12 29 q12 12 29 13 l456 0 Z"></path></g></svg>',
      }),
      this.addCommand({
        id: "off-Format-Brush",
        name: "OFF Format Brush",
        callback: () => N(this),
      }),
      this.addCommand({
        id: "change-font-color",
        name: "Change font color[html]",
        callback: () => {
          var e;
          return A(
            app,
            0,
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
          return B(
            app,
            0,
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
        callback: () =>
          this.app.workspace
            .getActiveViewOfType(e.MarkdownView)
            .editor.indentList(),
        icon: "indent-glyph",
      }),
      this.addCommand({
        id: "undent-list",
        name: "unindent-list",
        callback: () =>
          this.app.workspace
            .getActiveViewOfType(e.MarkdownView)
            .editor.unindentList(),
        icon: "unindent-glyph",
      }),
      this.addCommand({
        id: "editor-undo",
        name: "undo editor",
        callback: () =>
          this.app.workspace.getActiveViewOfType(e.MarkdownView).editor.undo(),
        icon: "undo-glyph",
      }),
      this.addCommand({
        id: "editor-redo",
        name: "redo editor",
        callback: () =>
          this.app.workspace.getActiveViewOfType(e.MarkdownView).editor.redo(),
        icon: "redo-glyph",
      }),
      this.addCommand({
        id: "fullscreen-focus",
        name: "Fullscreen focus mode",
        hotkeys: [{ modifiers: ["Mod", "Shift"], key: "F11" }],
        callback: () =>
          (function (t) {
            var o;
            const n = t.workspace.getActiveViewOfType(e.MarkdownView);
            if (!n) return;
            let i,
              r = n.containerEl,
              a =
                null === (o = document.body) || void 0 === o
                  ? void 0
                  : o.querySelector(
                      ".mod-vertical.mod-root .workspace-tab-container",
                    );
            (i = new MutationObserver(function (e) {
              e.forEach(function (e) {
                e.addedNodes.forEach(function (e) {
                  if (ao(a))
                    try {
                      document.body.removeChild(e), r.appendChild(e);
                    } catch (e) {
                      console.log(e.message);
                    }
                });
              });
            })),
              a.addEventListener("fullscreenchange", function (e) {
                ao(a) || i.disconnect();
              }),
              ao(a)
                ? (i.disconnect(), ro())
                : (io(a), i.observe(document.body, { childList: !0 }));
          })(app),
        icon: "fullscreen",
      }),
      this.addCommand({
        id: "workplace-fullscreen-focus",
        name: "workplace-Fullscreen ",
        callback: () =>
          (function (t) {
            var o, n;
            Gt = e.requireApiVersion("0.15.0")
              ? activeWindow.document
              : window.document;
            let i =
                null === (o = Gt.body) || void 0 === o
                  ? void 0
                  : o.querySelector(" .mod-right-split.is-collapsed"),
              r =
                null === (n = Gt.body) || void 0 === n
                  ? void 0
                  : n.querySelector(" .mod-left-split.is-collapsed");
            i && !r && t.commands.executeCommandById("app:toggle-left-sidebar"),
              !i &&
                r &&
                t.commands.executeCommandById("app:toggle-right-sidebar"),
              ((!i && !r) || (i && r)) &&
                (t.commands.executeCommandById("app:toggle-left-sidebar"),
                t.commands.executeCommandById("app:toggle-right-sidebar"));
          })(app),
        hotkeys: [{ modifiers: ["Mod"], key: "F11" }],
        icon: "remix-SplitCellsHorizontal",
      }),
      this.addCommand({
        id: "header0-text",
        name: "Remove header level",
        callback: () => L(""),
        hotkeys: [{ modifiers: ["Mod"], key: "`" }],
        icon: "heading-glyph",
      }),
      this.addCommand({
        id: "header1-text",
        name: "Header 1",
        callback: () => L("#"),
        icon: "header-1",
      }),
      this.addCommand({
        id: "header2-text",
        name: "Header 2",
        callback: () => L("##"),
        icon: "header-2",
      }),
      this.addCommand({
        id: "header3-text",
        name: "Header 3",
        callback: () => L("###"),
        icon: "header-3",
      }),
      this.addCommand({
        id: "header4-text",
        name: "Header 4",
        callback: () => L("####"),
        icon: "header-4",
      }),
      this.addCommand({
        id: "header5-text",
        name: "Header 5",
        callback: () => L("#####"),
        icon: "header-5",
      }),
      this.addCommand({
        id: "header6-text",
        name: "Header 6",
        callback: () => L("######"),
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
    Object.keys(n).forEach((i) => {
      this.addCommand({
        id: `${i}`,
        name: `Toggle ${i}`,
        icon: `${i}-glyph`,
        callback: () =>
          t(this, void 0, void 0, function* () {
            const t = this.app.workspace.getActiveViewOfType(e.MarkdownView);
            if (t) {
              const e = t.editor;
              ((e, t) => {
                const o = t.getSelection(),
                  n = t.getCursor("from"),
                  i = t.getCursor("to");
                let r = e.prefix;
                e.islinehead && n.ch > 0 && (r = "\n" + r);
                const a = e.suffix || r,
                  l = (o) => {
                    t.setCursor(n.line + e.line * o, i.ch + e.char * o);
                  },
                  s = { line: n.line - e.line, ch: n.ch - r.length };
                if (t.getRange(s, n) == r.trimStart()) {
                  const r = { line: n.line + e.line, ch: i.ch + a.length };
                  if (t.getRange(i, r) == a.trimEnd())
                    return t.replaceRange(o, s, r), l(-1);
                }
                t.replaceSelection(`${r}${o}${a}`), l(1);
              })(n[i], e),
                yield o(10),
                app.commands.executeCommandById("editor:focus");
            }
          }),
      });
    }),
      this.modCommands.forEach((n) => {
        this.addCommand({
          id: `${n.id}`,
          name: `${n.name}`,
          icon: `${n.icon}`,
          callback: () =>
            t(this, void 0, void 0, function* () {
              const t = this.app.workspace.getActiveViewOfType(
                e.MarkdownView,
              ).editor;
              t.getCursor("from");
              const i = t.getCursor("to");
              let r;
              (r =
                "editor:insert-embed" == `${n.id}`
                  ? 3
                  : "editor:insert-link" == `${n.id}` ||
                      "editor:insert-tag" == `${n.id}`
                    ? 1
                    : "editor:insert-wikilink" == `${n.id}` ||
                        "editor:toggle-bold" == `${n.id}`
                      ? 2
                      : "editor:toggle-italics" == `${n.id}`
                        ? 1
                        : "editor:toggle-strikethrough" == `${n.id}`
                          ? 2
                          : "editor:toggle-code" == `${n.id}`
                            ? 1
                            : "editor:toggle-blockquote" == `${n.id}` ||
                                "editor:toggle-bullet-list" == `${n.id}`
                              ? 2
                              : "editor:toggle-checklist-status" == `${n.id}`
                                ? 4
                                : "editor:toggle-comments" == `${n.id}` ||
                                    "editor:toggle-highlight" == `${n.id}`
                                  ? 2
                                  : "editor:toggle-numbered-list" == `${n.id}`
                                    ? 3
                                    : 2),
                app.commands.executeCommandById(`${n.id}`),
                t.setCursor(i.line, i.ch + r),
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
              r = () =>
                t(this, void 0, void 0, function* () {
                  (this.settings.cMenuVisibility =
                    !this.settings.cMenuVisibility),
                    i.setValue(this.settings.cMenuVisibility),
                    1 == this.settings.cMenuVisibility
                      ? setTimeout(() => {
                          dispatchEvent(new Event("cMenuToolbar-NewCommand"));
                        }, 100)
                      : l(this.settings.cMenuVisibility),
                    k(),
                    yield this.saveSettings();
                });
            o.onClick((e) => {
              e.preventDefault(), e.stopImmediatePropagation(), r();
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
module.exports = lo;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXMiOlsiLi4vbm9kZV9tb2R1bGVzL3RzbGliL3RzbGliLmVzNi5qcyIsIi4uL3NyYy91dGlsL3V0aWwudHMiLCIuLi9zcmMvaWNvbnMvYXBwSWNvbnMudHMiLCIuLi9zcmMvdXRpbC9zdGF0dXNCYXJDb25zdGFudHMudHMiLCIuLi9zcmMvdHJhbnNsYXRpb25zL2xvY2FsZS9hci50cyIsIi4uL3NyYy90cmFuc2xhdGlvbnMvbG9jYWxlL2VuLnRzIiwiLi4vc3JjL3RyYW5zbGF0aW9ucy9oZWxwZXIudHMiLCIuLi9zcmMvdHJhbnNsYXRpb25zL2xvY2FsZS9jei50cyIsIi4uL3NyYy90cmFuc2xhdGlvbnMvbG9jYWxlL2RhLnRzIiwiLi4vc3JjL3RyYW5zbGF0aW9ucy9sb2NhbGUvZGUudHMiLCIuLi9zcmMvdHJhbnNsYXRpb25zL2xvY2FsZS9lbi1nYi50cyIsIi4uL3NyYy90cmFuc2xhdGlvbnMvbG9jYWxlL2VzLnRzIiwiLi4vc3JjL3RyYW5zbGF0aW9ucy9sb2NhbGUvZnIudHMiLCIuLi9zcmMvdHJhbnNsYXRpb25zL2xvY2FsZS9oaS50cyIsIi4uL3NyYy90cmFuc2xhdGlvbnMvbG9jYWxlL2lkLnRzIiwiLi4vc3JjL3RyYW5zbGF0aW9ucy9sb2NhbGUvaXQudHMiLCIuLi9zcmMvdHJhbnNsYXRpb25zL2xvY2FsZS9qYS50cyIsIi4uL3NyYy90cmFuc2xhdGlvbnMvbG9jYWxlL2tvLnRzIiwiLi4vc3JjL3RyYW5zbGF0aW9ucy9sb2NhbGUvbmwudHMiLCIuLi9zcmMvdHJhbnNsYXRpb25zL2xvY2FsZS9uby50cyIsIi4uL3NyYy90cmFuc2xhdGlvbnMvbG9jYWxlL3BsLnRzIiwiLi4vc3JjL3RyYW5zbGF0aW9ucy9sb2NhbGUvcHQudHMiLCIuLi9zcmMvdHJhbnNsYXRpb25zL2xvY2FsZS9wdC1ici50cyIsIi4uL3NyYy90cmFuc2xhdGlvbnMvbG9jYWxlL3JvLnRzIiwiLi4vc3JjL3RyYW5zbGF0aW9ucy9sb2NhbGUvcnUudHMiLCIuLi9zcmMvdHJhbnNsYXRpb25zL2xvY2FsZS90ci50cyIsIi4uL3NyYy90cmFuc2xhdGlvbnMvbG9jYWxlL3poLWNuLnRzIiwiLi4vc3JjL3RyYW5zbGF0aW9ucy9sb2NhbGUvemgtdHcudHMiLCIuLi9zcmMvbW9kYWxzL3N1Z2dlc3Rlck1vZGFscy50cyIsIi4uL3NyYy9zZXR0aW5ncy9zZXR0aW5nc0RhdGEudHMiLCIuLi9zcmMvbW9kYWxzL2NNZW51VG9vbGJhck1vZGFsLnRzIiwiLi4vbm9kZV9tb2R1bGVzL3NvcnRhYmxlanMvbW9kdWxhci9zb3J0YWJsZS5lc20uanMiLCIuLi9ub2RlX21vZHVsZXMvQHNpbW9ud2VwL3BpY2tyL2Rpc3QvcGlja3IubWluLmpzIiwiLi4vc3JjL3NldHRpbmdzL3NldHRpbmdzVGFiLnRzIiwiLi4vc3JjL2ljb25zL2N1c3RvbUljb25zLnRzIiwiLi4vc3JjL3V0aWwvZnVsbHNjcmVlbi50cyIsIi4uL3NyYy9wbHVnaW4vbWFpbi50cyJdLCJzb3VyY2VzQ29udGVudCI6bnVsbCwibmFtZXMiOlsiX19hd2FpdGVyIiwidGhpc0FyZyIsIl9hcmd1bWVudHMiLCJQIiwiZ2VuZXJhdG9yIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJmdWxmaWxsZWQiLCJ2YWx1ZSIsInN0ZXAiLCJuZXh0IiwiZSIsInJlamVjdGVkIiwicmVzdWx0IiwiZG9uZSIsInRoZW4iLCJhcHBseSIsIndhaXQiLCJkZWxheSIsInNldFRpbWVvdXQiLCJHZW5Ob25EdXBsaWNhdGVJRCIsInJhbmRvbUxlbmd0aCIsImlkU3RyIiwiRGF0ZSIsIm5vdyIsInRvU3RyaW5nIiwiTWF0aCIsInJhbmRvbSIsInN1YnN0ciIsImZpbmRtZW51SUQiLCJwbHVnaW4iLCJjb21tYW5kIiwiaXNzdWIiLCJpbmRleCIsInJlcyIsInN1YmluZGV4IiwibWVudWNtZCIsInNldHRpbmdzIiwibWVudUNvbW1hbmRzIiwiZm9yRWFjaCIsIml0ZW0iLCJpZHgiLCJTdWJtZW51Q29tbWFuZHMiLCJmaW5kSW5kZXgiLCJ2IiwiaWQiLCJhcHBJY29ucyIsImFjdGl2ZURvY3VtZW50Iiwic2V0TWVudVZpc2liaWxpdHkiLCJjTWVudVZpc2liaWxpdHkiLCJyZXF1aXJlQXBpVmVyc2lvbiIsImFjdGl2ZVdpbmRvdyIsImRvY3VtZW50Iiwid2luZG93IiwiY01lbnVUb29sYmFyTW9kYWxCYXIiLCJnZXRFbGVtZW50QnlJZCIsInN0eWxlIiwidmlzaWJpbGl0eSIsInNldEJvdHRvbVZhbHVlIiwicG9zaXRpb25TdHlsZSIsInNldEF0dHJpYnV0ZSIsIm9mZnNldFdpZHRoIiwiY01lbnVCb3R0b21WYWx1ZSIsInJlcGVhdCIsImNNZW51TnVtUm93cyIsImVuIiwiTW9yZSIsIlJlZnJlc2giLCJBZGQiLCJEZWxldGUiLCJsb2NhbGUiLCJhciIsImNzIiwiZGEiLCJkZSIsImVzIiwiZnIiLCJoaSIsIml0IiwiamEiLCJrbyIsIm5sIiwibm4iLCJwbCIsInB0Iiwicm8iLCJydSIsInRyIiwibW9tZW50IiwidCIsInN0ciIsIkNob29zZUZyb21JY29uTGlzdCIsIkZ1enp5U3VnZ2VzdE1vZGFsIiwiY29uc3RydWN0b3IiLCJzdXBlciIsImFwcCIsInRoaXMiLCJzZXRQbGFjZWhvbGRlciIsImNhcGl0YWxKb2luIiwic3RyaW5nIiwic3BsaXQiLCJtYXAiLCJpY29uIiwidG9VcHBlckNhc2UiLCJzdWJzdHJpbmciLCJqb2luIiwiZ2V0SXRlbXMiLCJnZXRJdGVtVGV4dCIsInJlcGxhY2UiLCJ0cmltIiwicmVuZGVyU3VnZ2VzdGlvbiIsImljb25JdGVtIiwic3BhbiIsImNyZWF0ZVNwYW4iLCJjbHMiLCJhcHBlbmRDaGlsZCIsInNldEljb24iLCJvbkNob29zZUl0ZW0iLCJDdXN0b21JY29uIiwib3BlbiIsIm1lbnVJRCIsInB1c2giLCJzYXZlU2V0dGluZ3MiLCJkaXNwYXRjaEV2ZW50IiwiRXZlbnQiLCJjb25zb2xlIiwibG9nIiwibmFtZSIsIkNvbW1hbmRQaWNrZXIiLCJjb21tYW5kcyIsImxpc3RDb21tYW5kcyIsIk5vdGljZSIsIk1vZGFsIiwiY29udGFpbmVyRWwiLCJhZGRDbGFzcyIsIm9uT3BlbiIsImNvbnRlbnRFbCIsImNyZWF0ZUVsIiwidGV4dCIsInRleHRDb21wb25lbnQiLCJUZXh0QXJlYUNvbXBvbmVudCIsImlucHV0RWwiLCJjbGFzc0xpc3QiLCJhZGQiLCJzZXRWYWx1ZSIsIl9hIiwib25DaGFuZ2UiLCJkZWJvdW5jZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJzdWJtaXRFbnRlckNhbGxiYWNrIiwib25DbG9zZSIsImVtcHR5IiwiQ2hhbmdlQ21kbmFtZSIsIlRleHRDb21wb25lbnQiLCJvcGVuU2xpZGVyIiwidG9wZW0iLCJTbGlkZXJDb21wb25lbnQiLCJzZXRMaW1pdHMiLCJzZXREeW5hbWljVG9vbHRpcCIsIkFQUEVORF9NRVRIT0RTIiwiQUVTVEhFVElDX1NUWUxFUyIsIlBPU0lUSU9OX1NUWUxFUyIsIkRFRkFVTFRfU0VUVElOR1MiLCJhZXN0aGV0aWNTdHlsZSIsImFwcGVuZE1ldGhvZCIsInNob3VsZFNob3dNZW51T25TZWxlY3QiLCJjTWVudVdpZHRoIiwiY01lbnVGb250Q29sb3IiLCJjTWVudUJhY2tncm91bmRDb2xvciIsImF1dG9oaWRlIiwiY3VzdG9tX2JnMSIsImN1c3RvbV9iZzIiLCJjdXN0b21fYmczIiwiY3VzdG9tX2JnNCIsImN1c3RvbV9iZzUiLCJjdXN0b21fZmMxIiwiY3VzdG9tX2ZjMiIsImN1c3RvbV9mYzMiLCJjdXN0b21fZmM0IiwiY3VzdG9tX2ZjNSIsInNlbGZEZXN0cnVjdCIsInJvb3RTcGxpdHMiLCJ3b3Jrc3BhY2UiLCJyb290U3BsaXQiLCJmbG9hdGluZ1NwbGl0IiwiY2hpbGRyZW4iLCJjaGlsZCIsIldvcmtzcGFjZVdpbmRvdyIsImdldFJvb3RTcGxpdHMiLCJsZWFmIiwicXVlcnlTZWxlY3RvckFsbCIsImNNZW51VG9vbGJhclBvcG92ZXJCYXIiLCJlbGVtZW50IiwiZmlyc3RDaGlsZCIsInJlbW92ZUNoaWxkIiwicmVtb3ZlIiwiY2xlYXJUb29sYmFyIiwiaXNFeGlzdG9vbGJhciIsInBvc2l0aW9uIiwiY29udGFpbmVyIiwiYWN0aXZlTGVhZiIsInZpZXciLCJxdWVyeVNlbGVjdG9yIiwiZ2V0TmVzdGVkT2JqZWN0IiwibmVzdGVkT2JqIiwicGF0aEFyciIsInJlZHVjZSIsIm9iaiIsImtleSIsInVuZGVmaW5lZCIsInNldEhpbGl0ZSIsImtleXMiLCJob3ciLCJmbGF0IiwiZ2V0SG90a2V5IiwiY21kaWQiLCJoaWdobGlnaHQiLCJhcnIiLCJmaW5kQ29tbWFuZCIsImRlZmtleXMiLCJob3RrZXlzIiwiY2siLCJob3RrZXlNYW5hZ2VyIiwiY3VzdG9tS2V5cyIsImdldE1vZGVzdGF0ZSIsImFjdGl2ZVBhbmUiLCJnZXRBY3RpdmVWaWV3T2ZUeXBlIiwiTWFya2Rvd25WaWV3IiwiY3VycmVudG1vZGUiLCJnZXRNb2RlIiwiY2hlY2tIdG1sIiwiaHRtbFN0ciIsInRlc3QiLCJjcmVhdGVUYWJsZWNlbGwiLCJlbCIsInRhYiIsInJvd3MiLCJybGVuIiwibGVuZ3RoIiwiaSIsImNlbGxzIiwiaiIsIm9uY2xpY2siLCJiYWNrY29sb3IiLCJiYWNrZ3JvdW5kQ29sb3IiLCJzZXRjb2xvckhleCIsInNldEZvbnRjb2xvciIsImZpbGwiLCJzZXRCYWNrZ3JvdW5kY29sb3IiLCJjb2xvciIsImVkaXRvciIsInNlbGVjdFRleHQiLCJnZXRTZWxlY3Rpb24iLCJfaHRtbDAiLCJfaHRtbDEiLCJfaHRtbDIiLCJyZXBsYWNlU2VsZWN0aW9uIiwiZXhlYyIsImV4ZWN1dGVDb21tYW5kQnlJZCIsInRoYXQiLCJhQ29sb3IiLCJzdHJIZXgiLCJoZXgiLCJOdW1iZXIiLCJhTnVtIiwibnVtSGV4IiwicXVpdGVGb3JtYXRicnVzaGVzIiwiVGVtcF9Ob3RpY2UiLCJoaWRlIiwic2V0RU5fQkdfRm9ybWF0X0JydXNoIiwic2V0RU5fRm9udENvbG9yX0Zvcm1hdF9CcnVzaCIsInNldEVOX1RleHRfRm9ybWF0X0JydXNoIiwic2V0SGVhZGVyIiwiX3N0ciIsIm5ld3N0ciIsImxpbmV0ZXh0IiwiZ2V0TGluZSIsImdldEN1cnNvciIsImxpbmUiLCJsaW5lbmQiLCJyZWdleCIsIm1hdGNoc3RyIiwibWF0Y2giLCJnZXRSYW5nZSIsImNoIiwic2V0TGluZSIsInNldEN1cnNvciIsInNldEZvcm1hdGVyYXNlciIsIm5vdGljZUVsIiwiaW5uZXJUZXh0IiwibWRUZXh0IiwiY01lbnVUb29sYmFyUG9wb3ZlciIsImdlbmVyYXRlTWVudSIsImJ0bndpZHRoIiwiY01lbnVUb29sYmFyIiwiY2xhc3NOYW1lIiwiUG9wb3Zlck1lbnUiLCJoZWlnaHQiLCJyZW1vdmVDbGFzcyIsImxlYWZ3aWR0aCIsImN1cnJlbnRsZWFmIiwiaW5zZXJ0QWRqYWNlbnRFbGVtZW50IiwiYm9keSIsIl9iIiwidGlwIiwiX2J0biIsInNldElTX01PUkVfQnV0dG9uIiwiQnV0dG9uQ29tcG9uZW50Iiwic2V0Q2xhc3MiLCJidXR0b25FbCIsImlubmVySFRNTCIsInN1Ym1lbnUiLCJzZWxlY3RvciIsImRpdiIsImNyZWF0ZURpdiIsInN1Yml0ZW0iLCJob3RrZXkiLCJzdWJfYnRuIiwic2V0VG9vbHRpcCIsIm9uQ2xpY2siLCJidXR0b24yIiwic3VibWVudTIiLCJjb2xvcnBpY2tlciIsInNldHRpbmciLCJvcGVuVGFiQnlJZCIsInNldHRpbmdFSSIsImFjdGl2ZVRhYiIsImNhbGwiLCJiYWNrY29sb3JwaWNrZXIiLCJidXR0b24iLCJNb3JlY29udGFpbmVyIiwiSVNfTU9SRV9CdXR0b24iLCJjTW9yZU1lbnUiLCJtb3JlYnV0dG9uIiwiY3JlYXRlTW9yZW1lbnUiLCJhYnMiLCJJdGVtVmlldyIsImdldFZpZXdUeXBlIiwiZm9udGNvbG9yIiwiYmdjb2xvciIsImZvbnRfY29sb3VyX2RvbSIsImJhY2tncm91bmRfY29sb3VyX2RvbSIsInNldHN2Z0NvbG9yIiwiY3JlYXRlTWVudSIsIm93bktleXMiLCJvYmplY3QiLCJlbnVtZXJhYmxlT25seSIsIk9iamVjdCIsImdldE93blByb3BlcnR5U3ltYm9scyIsInN5bWJvbHMiLCJmaWx0ZXIiLCJzeW0iLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJlbnVtZXJhYmxlIiwiX29iamVjdFNwcmVhZDIiLCJ0YXJnZXQiLCJhcmd1bWVudHMiLCJzb3VyY2UiLCJfZGVmaW5lUHJvcGVydHkiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzIiwiZGVmaW5lUHJvcGVydGllcyIsImRlZmluZVByb3BlcnR5IiwiX3R5cGVvZiIsIlN5bWJvbCIsIml0ZXJhdG9yIiwicHJvdG90eXBlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJfZXh0ZW5kcyIsImFzc2lnbiIsImhhc093blByb3BlcnR5IiwiX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIiwiZXhjbHVkZWQiLCJzb3VyY2VLZXlzIiwiaW5kZXhPZiIsIl9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlIiwic291cmNlU3ltYm9sS2V5cyIsInByb3BlcnR5SXNFbnVtZXJhYmxlIiwidXNlckFnZW50IiwicGF0dGVybiIsIm5hdmlnYXRvciIsIklFMTFPckxlc3MiLCJFZGdlIiwiRmlyZUZveCIsIlNhZmFyaSIsIklPUyIsIkNocm9tZUZvckFuZHJvaWQiLCJjYXB0dXJlTW9kZSIsImNhcHR1cmUiLCJwYXNzaXZlIiwib24iLCJldmVudCIsImZuIiwib2ZmIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIm1hdGNoZXMiLCJtc01hdGNoZXNTZWxlY3RvciIsIndlYmtpdE1hdGNoZXNTZWxlY3RvciIsIl8iLCJnZXRQYXJlbnRPckhvc3QiLCJob3N0Iiwibm9kZVR5cGUiLCJwYXJlbnROb2RlIiwiY2xvc2VzdCIsImN0eCIsImluY2x1ZGVDVFgiLCJfdGhyb3R0bGVUaW1lb3V0IiwiUl9TUEFDRSIsInRvZ2dsZUNsYXNzIiwic3RhdGUiLCJjc3MiLCJwcm9wIiwidmFsIiwiZGVmYXVsdFZpZXciLCJnZXRDb21wdXRlZFN0eWxlIiwiY3VycmVudFN0eWxlIiwibWF0cml4Iiwic2VsZk9ubHkiLCJhcHBsaWVkVHJhbnNmb3JtcyIsInRyYW5zZm9ybSIsIm1hdHJpeEZuIiwiRE9NTWF0cml4IiwiV2ViS2l0Q1NTTWF0cml4IiwiQ1NTTWF0cml4IiwiTVNDU1NNYXRyaXgiLCJmaW5kIiwidGFnTmFtZSIsImxpc3QiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsIm4iLCJnZXRXaW5kb3dTY3JvbGxpbmdFbGVtZW50Iiwic2Nyb2xsaW5nRWxlbWVudCIsImRvY3VtZW50RWxlbWVudCIsImdldFJlY3QiLCJyZWxhdGl2ZVRvQ29udGFpbmluZ0Jsb2NrIiwicmVsYXRpdmVUb05vblN0YXRpY1BhcmVudCIsInVuZG9TY2FsZSIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImVsUmVjdCIsInRvcCIsImxlZnQiLCJib3R0b20iLCJyaWdodCIsIndpZHRoIiwiaW5uZXJIZWlnaHQiLCJpbm5lcldpZHRoIiwiY29udGFpbmVyUmVjdCIsInBhcnNlSW50IiwiZWxNYXRyaXgiLCJzY2FsZVgiLCJhIiwic2NhbGVZIiwiZCIsImlzU2Nyb2xsZWRQYXN0IiwiZWxTaWRlIiwicGFyZW50U2lkZSIsInBhcmVudCIsImdldFBhcmVudEF1dG9TY3JvbGxFbGVtZW50IiwiZWxTaWRlVmFsIiwicGFyZW50U2lkZVZhbCIsImdldENoaWxkIiwiY2hpbGROdW0iLCJvcHRpb25zIiwiaW5jbHVkZURyYWdFbCIsImN1cnJlbnRDaGlsZCIsImRpc3BsYXkiLCJTb3J0YWJsZSIsImdob3N0IiwiZHJhZ2dlZCIsImRyYWdnYWJsZSIsImxhc3RDaGlsZCIsImxhc3QiLCJsYXN0RWxlbWVudENoaWxkIiwicHJldmlvdXNFbGVtZW50U2libGluZyIsIm5vZGVOYW1lIiwiY2xvbmUiLCJnZXRSZWxhdGl2ZVNjcm9sbE9mZnNldCIsIm9mZnNldExlZnQiLCJvZmZzZXRUb3AiLCJ3aW5TY3JvbGxlciIsInNjcm9sbExlZnQiLCJzY3JvbGxUb3AiLCJpbmNsdWRlU2VsZiIsImVsZW0iLCJnb3RTZWxmIiwiY2xpZW50V2lkdGgiLCJzY3JvbGxXaWR0aCIsImNsaWVudEhlaWdodCIsInNjcm9sbEhlaWdodCIsImVsZW1DU1MiLCJvdmVyZmxvd1giLCJvdmVyZmxvd1kiLCJpc1JlY3RFcXVhbCIsInJlY3QxIiwicmVjdDIiLCJyb3VuZCIsInRocm90dGxlIiwiY2FsbGJhY2siLCJtcyIsImFyZ3MiLCJfdGhpcyIsInNjcm9sbEJ5IiwieCIsInkiLCJQb2x5bWVyIiwiJCIsImpRdWVyeSIsIlplcHRvIiwiZG9tIiwiY2xvbmVOb2RlIiwiZXhwYW5kbyIsImdldFRpbWUiLCJBbmltYXRpb25TdGF0ZU1hbmFnZXIiLCJhbmltYXRpb25DYWxsYmFja0lkIiwiYW5pbWF0aW9uU3RhdGVzIiwiY2FwdHVyZUFuaW1hdGlvblN0YXRlIiwiYW5pbWF0aW9uIiwic2xpY2UiLCJyZWN0IiwiZnJvbVJlY3QiLCJ0aGlzQW5pbWF0aW9uRHVyYXRpb24iLCJjaGlsZE1hdHJpeCIsImYiLCJhZGRBbmltYXRpb25TdGF0ZSIsInJlbW92ZUFuaW1hdGlvblN0YXRlIiwic3BsaWNlIiwiaW5kZXhPZk9iamVjdCIsImFuaW1hdGVBbGwiLCJjbGVhclRpbWVvdXQiLCJhbmltYXRpbmciLCJhbmltYXRpb25UaW1lIiwidGltZSIsInRvUmVjdCIsInByZXZGcm9tUmVjdCIsInByZXZUb1JlY3QiLCJhbmltYXRpbmdSZWN0IiwidGFyZ2V0TWF0cml4Iiwic3FydCIsInBvdyIsImNhbGN1bGF0ZVJlYWxUaW1lIiwiYW5pbWF0ZSIsIm1heCIsImFuaW1hdGlvblJlc2V0VGltZXIiLCJjdXJyZW50UmVjdCIsImR1cmF0aW9uIiwidHJhbnNsYXRlWCIsInRyYW5zbGF0ZVkiLCJhbmltYXRpbmdYIiwiYW5pbWF0aW5nWSIsImZvclJlcGFpbnREdW1teSIsInJlcGFpbnQiLCJlYXNpbmciLCJhbmltYXRlZCIsInBsdWdpbnMiLCJkZWZhdWx0cyIsImluaXRpYWxpemVCeURlZmF1bHQiLCJQbHVnaW5NYW5hZ2VyIiwibW91bnQiLCJvcHRpb24iLCJwIiwicGx1Z2luTmFtZSIsImNvbmNhdCIsInBsdWdpbkV2ZW50IiwiZXZlbnROYW1lIiwic29ydGFibGUiLCJldnQiLCJldmVudENhbmNlbGVkIiwiY2FuY2VsIiwiZXZlbnROYW1lR2xvYmFsIiwiaW5pdGlhbGl6ZVBsdWdpbnMiLCJpbml0aWFsaXplZCIsIm1vZGlmaWVkIiwibW9kaWZ5T3B0aW9uIiwiZ2V0RXZlbnRQcm9wZXJ0aWVzIiwiZXZlbnRQcm9wZXJ0aWVzIiwibW9kaWZpZWRWYWx1ZSIsIm9wdGlvbkxpc3RlbmVycyIsIl9leGNsdWRlZCIsIl9yZWYiLCJvcmlnaW5hbEV2ZW50IiwiZGF0YSIsImJpbmQiLCJkcmFnRWwiLCJwYXJlbnRFbCIsImdob3N0RWwiLCJyb290RWwiLCJuZXh0RWwiLCJsYXN0RG93bkVsIiwiY2xvbmVFbCIsImNsb25lSGlkZGVuIiwiZHJhZ1N0YXJ0ZWQiLCJtb3ZlZCIsInB1dFNvcnRhYmxlIiwiYWN0aXZlU29ydGFibGUiLCJhY3RpdmUiLCJvbGRJbmRleCIsIm9sZERyYWdnYWJsZUluZGV4IiwibmV3SW5kZXgiLCJuZXdEcmFnZ2FibGVJbmRleCIsImhpZGVHaG9zdEZvclRhcmdldCIsIl9oaWRlR2hvc3RGb3JUYXJnZXQiLCJ1bmhpZGVHaG9zdEZvclRhcmdldCIsIl91bmhpZGVHaG9zdEZvclRhcmdldCIsImNsb25lTm93SGlkZGVuIiwiY2xvbmVOb3dTaG93biIsImRpc3BhdGNoU29ydGFibGVFdmVudCIsIl9kaXNwYXRjaEV2ZW50IiwiaW5mbyIsInRhcmdldEVsIiwidG9FbCIsImZyb21FbCIsImV4dHJhRXZlbnRQcm9wZXJ0aWVzIiwib25OYW1lIiwiY2hhckF0IiwiQ3VzdG9tRXZlbnQiLCJjcmVhdGVFdmVudCIsImluaXRFdmVudCIsImJ1YmJsZXMiLCJjYW5jZWxhYmxlIiwidG8iLCJmcm9tIiwicHVsbE1vZGUiLCJsYXN0UHV0TW9kZSIsImFsbEV2ZW50UHJvcGVydGllcyIsImFjdGl2ZUdyb3VwIiwidGFwRXZ0IiwidG91Y2hFdnQiLCJsYXN0RHgiLCJsYXN0RHkiLCJ0YXBEaXN0YW5jZUxlZnQiLCJ0YXBEaXN0YW5jZVRvcCIsImxhc3RUYXJnZXQiLCJsYXN0RGlyZWN0aW9uIiwidGFyZ2V0TW92ZURpc3RhbmNlIiwiZ2hvc3RSZWxhdGl2ZVBhcmVudCIsImF3YWl0aW5nRHJhZ1N0YXJ0ZWQiLCJpZ25vcmVOZXh0Q2xpY2siLCJzb3J0YWJsZXMiLCJwYXN0Rmlyc3RJbnZlcnRUaHJlc2giLCJpc0NpcmN1bXN0YW50aWFsSW52ZXJ0IiwiZ2hvc3RSZWxhdGl2ZVBhcmVudEluaXRpYWxTY3JvbGwiLCJfc2lsZW50Iiwic2F2ZWRJbnB1dENoZWNrZWQiLCJkb2N1bWVudEV4aXN0cyIsIlBvc2l0aW9uR2hvc3RBYnNvbHV0ZWx5IiwiQ1NTRmxvYXRQcm9wZXJ0eSIsInN1cHBvcnREcmFnZ2FibGUiLCJjcmVhdGVFbGVtZW50Iiwic3VwcG9ydENzc1BvaW50ZXJFdmVudHMiLCJjc3NUZXh0IiwicG9pbnRlckV2ZW50cyIsIl9kZXRlY3REaXJlY3Rpb24iLCJlbENTUyIsImVsV2lkdGgiLCJwYWRkaW5nTGVmdCIsInBhZGRpbmdSaWdodCIsImJvcmRlckxlZnRXaWR0aCIsImJvcmRlclJpZ2h0V2lkdGgiLCJjaGlsZDEiLCJjaGlsZDIiLCJmaXJzdENoaWxkQ1NTIiwic2Vjb25kQ2hpbGRDU1MiLCJmaXJzdENoaWxkV2lkdGgiLCJtYXJnaW5MZWZ0IiwibWFyZ2luUmlnaHQiLCJzZWNvbmRDaGlsZFdpZHRoIiwiZmxleERpcmVjdGlvbiIsImdyaWRUZW1wbGF0ZUNvbHVtbnMiLCJ0b3VjaGluZ1NpZGVDaGlsZDIiLCJjbGVhciIsIl9wcmVwYXJlR3JvdXAiLCJ0b0ZuIiwicHVsbCIsInNhbWVHcm91cCIsImdyb3VwIiwib3RoZXJHcm91cCIsIm9yaWdpbmFsR3JvdXAiLCJjaGVja1B1bGwiLCJjaGVja1B1dCIsInB1dCIsInJldmVydENsb25lIiwicHJldmVudERlZmF1bHQiLCJzdG9wUHJvcGFnYXRpb24iLCJzdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24iLCJuZWFyZXN0RW1wdHlJbnNlcnREZXRlY3RFdmVudCIsInRvdWNoZXMiLCJuZWFyZXN0IiwiY2xpZW50WCIsImNsaWVudFkiLCJzb21lIiwidGhyZXNob2xkIiwiZW1wdHlJbnNlcnRUaHJlc2hvbGQiLCJpbnNpZGVIb3Jpem9udGFsbHkiLCJpbnNpZGVWZXJ0aWNhbGx5IiwicmV0IiwiX29uRHJhZ092ZXIiLCJfY2hlY2tPdXRzaWRlVGFyZ2V0RWwiLCJfaXNPdXRzaWRlVGhpc0VsIiwic29ydCIsImRpc2FibGVkIiwic3RvcmUiLCJoYW5kbGUiLCJzd2FwVGhyZXNob2xkIiwiaW52ZXJ0U3dhcCIsImludmVydGVkU3dhcFRocmVzaG9sZCIsInJlbW92ZUNsb25lT25IaWRlIiwiZGlyZWN0aW9uIiwiZ2hvc3RDbGFzcyIsImNob3NlbkNsYXNzIiwiZHJhZ0NsYXNzIiwiaWdub3JlIiwicHJldmVudE9uRmlsdGVyIiwic2V0RGF0YSIsImRhdGFUcmFuc2ZlciIsInRleHRDb250ZW50IiwiZHJvcEJ1YmJsZSIsImRyYWdvdmVyQnViYmxlIiwiZGF0YUlkQXR0ciIsImRlbGF5T25Ub3VjaE9ubHkiLCJ0b3VjaFN0YXJ0VGhyZXNob2xkIiwiZGV2aWNlUGl4ZWxSYXRpbyIsImZvcmNlRmFsbGJhY2siLCJmYWxsYmFja0NsYXNzIiwiZmFsbGJhY2tPbkJvZHkiLCJmYWxsYmFja1RvbGVyYW5jZSIsImZhbGxiYWNrT2Zmc2V0Iiwic3VwcG9ydFBvaW50ZXIiLCJuYXRpdmVEcmFnZ2FibGUiLCJfb25UYXBTdGFydCIsImdldCIsIl9vbk1vdmUiLCJkcmFnUmVjdCIsInRhcmdldFJlY3QiLCJ3aWxsSW5zZXJ0QWZ0ZXIiLCJyZXRWYWwiLCJvbk1vdmVGbiIsIm9uTW92ZSIsImRyYWdnZWRSZWN0IiwicmVsYXRlZCIsInJlbGF0ZWRSZWN0IiwiX2Rpc2FibGVEcmFnZ2FibGUiLCJfdW5zaWxlbnQiLCJfZ2VuZXJhdGVJZCIsInNyYyIsImhyZWYiLCJzdW0iLCJjaGFyQ29kZUF0IiwiX25leHRUaWNrIiwiX2NhbmNlbE5leHRUaWNrIiwiY29udGFpbnMiLCJfZ2V0RGlyZWN0aW9uIiwidHlwZSIsInRvdWNoIiwicG9pbnRlclR5cGUiLCJvcmlnaW5hbFRhcmdldCIsInNoYWRvd1Jvb3QiLCJwYXRoIiwiY29tcG9zZWRQYXRoIiwicm9vdCIsImlucHV0cyIsImNoZWNrZWQiLCJfc2F2ZUlucHV0Q2hlY2tlZFN0YXRlIiwiaXNDb250ZW50RWRpdGFibGUiLCJjcml0ZXJpYSIsIl9wcmVwYXJlRHJhZ1N0YXJ0IiwiZHJhZ1N0YXJ0Rm4iLCJvd25lckRvY3VtZW50IiwibmV4dFNpYmxpbmciLCJfbGFzdFgiLCJfbGFzdFkiLCJfb25Ecm9wIiwiX2Rpc2FibGVEZWxheWVkRHJhZ0V2ZW50cyIsIl90cmlnZ2VyRHJhZ1N0YXJ0IiwiX2Rpc2FibGVEZWxheWVkRHJhZyIsIl9kZWxheWVkRHJhZ1RvdWNoTW92ZUhhbmRsZXIiLCJfZHJhZ1N0YXJ0VGltZXIiLCJmbG9vciIsIl9vblRvdWNoTW92ZSIsIl9vbkRyYWdTdGFydCIsInNlbGVjdGlvbiIsInJlbW92ZUFsbFJhbmdlcyIsImVyciIsIl9kcmFnU3RhcnRlZCIsImZhbGxiYWNrIiwiX2FwcGVuZEdob3N0IiwiX251bGxpbmciLCJfZW11bGF0ZURyYWdPdmVyIiwiZWxlbWVudEZyb21Qb2ludCIsImdob3N0TWF0cml4IiwicmVsYXRpdmVTY3JvbGxPZmZzZXQiLCJkeCIsImR5IiwiYiIsImMiLCJjc3NNYXRyaXgiLCJyZW1vdmVBdHRyaWJ1dGUiLCJfaGlkZUNsb25lIiwiY2xvbmVJZCIsImluc2VydEJlZm9yZSIsIl9sb29wSWQiLCJzZXRJbnRlcnZhbCIsImVmZmVjdEFsbG93ZWQiLCJfZHJhZ1N0YXJ0SWQiLCJyZXZlcnQiLCJ2ZXJ0aWNhbCIsImlzT3duZXIiLCJjYW5Tb3J0IiwiZnJvbVNvcnRhYmxlIiwiY29tcGxldGVkRmlyZWQiLCJkcmFnT3ZlckV2ZW50IiwiX2lnbm9yZVdoaWxlQW5pbWF0aW5nIiwiY29tcGxldGVkIiwiZWxMYXN0Q2hpbGQiLCJzcGFjZXIiLCJfZ2hvc3RJc0xhc3QiLCJjaGFuZ2VkIiwiX2dob3N0SXNGaXJzdCIsInRhcmdldEJlZm9yZUZpcnN0U3dhcCIsInNpYmxpbmciLCJkaWZmZXJlbnRMZXZlbCIsImRpZmZlcmVudFJvd0NvbCIsImRyYWdFbFMxT3BwIiwiZHJhZ0VsUzJPcHAiLCJkcmFnRWxPcHBMZW5ndGgiLCJ0YXJnZXRTMU9wcCIsInRhcmdldFMyT3BwIiwidGFyZ2V0T3BwTGVuZ3RoIiwiX2RyYWdFbEluUm93Q29sdW1uIiwic2lkZTEiLCJzY3JvbGxlZFBhc3RUb3AiLCJzY3JvbGxCZWZvcmUiLCJpc0xhc3RUYXJnZXQiLCJtb3VzZU9uQXhpcyIsInRhcmdldExlbmd0aCIsInRhcmdldFMxIiwidGFyZ2V0UzIiLCJpbnZlcnQiLCJfZ2V0SW5zZXJ0RGlyZWN0aW9uIiwiX2dldFN3YXBEaXJlY3Rpb24iLCJkcmFnSW5kZXgiLCJuZXh0RWxlbWVudFNpYmxpbmciLCJhZnRlciIsIm1vdmVWZWN0b3IiLCJleHRyYSIsImF4aXMiLCJpbnNlcnRpb24iLCJfc2hvd0Nsb25lIiwiX29mZk1vdmVFdmVudHMiLCJfb2ZmVXBFdmVudHMiLCJjbGVhckludGVydmFsIiwic2F2ZSIsImhhbmRsZUV2ZW50IiwiZHJvcEVmZmVjdCIsIl9nbG9iYWxEcmFnT3ZlciIsInRvQXJyYXkiLCJvcmRlciIsImdldEF0dHJpYnV0ZSIsInVzZUFuaW1hdGlvbiIsIml0ZW1zIiwic2V0IiwiZGVzdHJveSIsIkFycmF5IiwidXRpbHMiLCJpcyIsImV4dGVuZCIsImRzdCIsIm5leHRUaWNrIiwiY2FuY2VsTmV4dFRpY2siLCJkZXRlY3REaXJlY3Rpb24iLCJfbGVuIiwiX2tleSIsImNyZWF0ZSIsInZlcnNpb24iLCJzY3JvbGxFbCIsInNjcm9sbFJvb3RFbCIsImxhc3RBdXRvU2Nyb2xsWCIsImxhc3RBdXRvU2Nyb2xsWSIsInRvdWNoRXZ0JDEiLCJwb2ludGVyRWxlbUNoYW5nZWRJbnRlcnZhbCIsImF1dG9TY3JvbGxzIiwic2Nyb2xsaW5nIiwiY2xlYXJBdXRvU2Nyb2xscyIsImF1dG9TY3JvbGwiLCJwaWQiLCJjbGVhclBvaW50ZXJFbGVtQ2hhbmdlZEludGVydmFsIiwiaXNGYWxsYmFjayIsInNjcm9sbCIsInNjcm9sbEN1c3RvbUZuIiwic2VucyIsInNjcm9sbFNlbnNpdGl2aXR5Iiwic3BlZWQiLCJzY3JvbGxTcGVlZCIsInNjcm9sbFRoaXNJbnN0YW5jZSIsInNjcm9sbEZuIiwibGF5ZXJzT3V0IiwiY3VycmVudFBhcmVudCIsImNhblNjcm9sbFgiLCJjYW5TY3JvbGxZIiwic2Nyb2xsUG9zWCIsInNjcm9sbFBvc1kiLCJ2eCIsInZ5IiwibGF5ZXIiLCJzY3JvbGxPZmZzZXRZIiwic2Nyb2xsT2Zmc2V0WCIsImJ1YmJsZVNjcm9sbCIsImRyb3AiLCJ0b1NvcnRhYmxlIiwiY2hhbmdlZFRvdWNoZXMiLCJvblNwaWxsIiwiUmV2ZXJ0IiwiUmVtb3ZlIiwic3RhcnRJbmRleCIsImRyYWdTdGFydCIsIl9yZWYyIiwiX3JlZjMiLCJfcmVmNCIsInBhcmVudFNvcnRhYmxlIiwiQXV0b1Njcm9sbCIsImZvcmNlQXV0b1Njcm9sbEZhbGxiYWNrIiwiX2hhbmRsZUF1dG9TY3JvbGwiLCJfaGFuZGxlRmFsbGJhY2tBdXRvU2Nyb2xsIiwiZHJhZ092ZXJDb21wbGV0ZWQiLCJkcmFnT3ZlckJ1YmJsZSIsIm51bGxpbmciLCJvZ0VsZW1TY3JvbGxlciIsIm5ld0VsZW0iLCJzZWxmIiwibW9kdWxlIiwiZXhwb3J0cyIsIm8iLCJyIiwidG9TdHJpbmdUYWciLCJkZWZhdWx0IiwiTCIsIkhUTUxDb2xsZWN0aW9uIiwiTm9kZUxpc3QiLCJpc0FycmF5IiwicyIsImFkanVzdGFibGVJbnB1dE51bWJlcnMiLCJjcmVhdGVFbGVtZW50RnJvbVN0cmluZyIsImNyZWF0ZUZyb21UZW1wbGF0ZSIsImV2ZW50UGF0aCIsImwiLCJyZXNvbHZlRWxlbWVudCIsImZpcnN0RWxlbWVudENoaWxkIiwicGFyZW50RWxlbWVudCIsIkVsZW1lbnQiLCJzaGlmdEtleSIsImN0cmxLZXkiLCJkZWx0YVkiLCJzZWxlY3Rpb25TdGFydCIsImZvY3VzIiwic2V0U2VsZWN0aW9uUmFuZ2UiLCJtaW4iLCJ1IiwiaCIsIm0iLCJnIiwiaXNOYU4iLCJ3IiwidG9Mb3dlckNhc2UiLCJnZXRDb250ZXh0IiwiZmlsbFN0eWxlIiwiY215ayIsInJnYmEiLCJoc2xhIiwiaHN2YSIsImhleGEiLCJ2YWx1ZXMiLCJBIiwidG9GaXhlZCIsInRvSFNWQSIsInRvSFNMQSIsInRvUkdCQSIsInRvQ01ZSyIsInRvSEVYQSIsInBhZFN0YXJ0IiwiQyIsImxvY2siLCJvbmNoYW5nZSIsIm9uc3RvcCIsIl9rZXlib2FyZCIsImFjdGl2ZUVsZW1lbnQiLCJ3cmFwcGVyIiwidXBkYXRlIiwiY2FjaGUiLCJzdGFydHNXaXRoIiwiX3RhcHN0YXJ0IiwiX3RhcHN0b3AiLCJfdGFwbW92ZSIsIm9mZnNldEhlaWdodCIsInRyaWdnZXIiLCJrIiwiZWxlbWVudHMiLCJTIiwidmFyaWFudEZsaXBPcmRlciIsInN0YXJ0IiwibWlkZGxlIiwiZW5kIiwicG9zaXRpb25GbGlwT3JkZXIiLCJtYXJnaW4iLCJPIiwidnMiLCJ2bSIsInZlIiwiaHMiLCJobSIsImhlIiwiRSIsImluaXQiLCJzaG93IiwiY2hhbmdlIiwiY2hhbmdlc3RvcCIsInN3YXRjaHNlbGVjdCIsIkRFRkFVTFRfT1BUSU9OUyIsInN3YXRjaGVzIiwiY29tcG9uZW50cyIsInRoZW1lIiwic2xpZGVycyIsImxvY2tPcGFjaXR5IiwicGFkZGluZyIsImluY2x1ZGVzIiwiaW50ZXJhY3Rpb24iLCJwcmV2aWV3Iiwib3BhY2l0eSIsImh1ZSIsInBhbGV0dGUiLCJfcHJlQnVpbGQiLCJfYnVpbGRDb21wb25lbnRzIiwiX2JpbmRFdmVudHMiLCJfZmluYWxCdWlsZCIsImFkZFN3YXRjaCIsIl9yb290IiwiX25hbm9wb3AiLCJIVE1MRWxlbWVudCIsInJlZmVyZW5jZSIsInBvcHBlciIsIkVycm9yIiwiX3QiLCJfc2V0dXBBbmltYXRpb25GcmFtZSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInNldENvbG9yIiwiX3JlUG9zaXRpb25pbmdQaWNrZXIiLCJkZWZhdWx0UmVwcmVzZW50YXRpb24iLCJfcmVwcmVzZW50YXRpb24iLCJzZXRDb2xvclJlcHJlc2VudGF0aW9uIiwic2hvd0Fsd2F5cyIsIl9pbml0aWFsaXppbmdBY3RpdmUiLCJfZW1pdCIsInVzZUFzQnV0dG9uIiwiaW5saW5lIiwiYXBwQ2xhc3MiLCJpbnB1dCIsImhpZGRlbiIsInJlcGxhY2VDaGlsZCIsImRpc2FibGUiLCJjb21wYXJpc29uIiwidHJhbnNpdGlvbiIsImxhc3RDb2xvciIsIl9jb2xvciIsIl9sYXN0Q29sb3IiLCJwaWNrZXIiLCJjdXJyZW50Q29sb3IiLCJfcmVjYWxjIiwiX3VwZGF0ZU91dHB1dCIsImJhY2tncm91bmQiLCJzZXRQcm9wZXJ0eSIsIl9zd2F0Y2hDb2xvcnMiLCJzbGlkZXIiLCJzZWxlY3RhYmxlIiwiX2NvbXBvbmVudHMiLCJfY2xlYXJDb2xvciIsInNldEhTVkEiLCJhcHBseUNvbG9yIiwiY2xvc2VXaXRoS2V5IiwiaXNPcGVuIiwiY29kZSIsImFkanVzdGFibGVOdW1iZXJzIiwiZ2V0Q29sb3JSZXByZXNlbnRhdGlvbiIsInRvUHJlY2lzaW9uIiwiYXV0b1JlcG9zaXRpb24iLCJjbG9zZU9uU2Nyb2xsIiwiX2V2ZW50QmluZGluZ3MiLCJvdXRwdXRQcmVjaXNpb24iLCJfcGFyc2VMb2NhbENvbG9yIiwiaTE4biIsIkkxOE5fREVGQVVMVFMiLCJfZXZlbnRMaXN0ZW5lciIsInJlbW92ZVN3YXRjaCIsImNhbmNlbEFuaW1hdGlvbkZyYW1lIiwiZGVzdHJveUFuZFJlbW92ZSIsImNsaWNrIiwiZ2V0Q29sb3IiLCJnZXRTZWxlY3RlZENvbG9yIiwiZ2V0Um9vdCIsImVuYWJsZSIsImdldFBpY2tyU2V0dGluZ3MiLCJvcHRzIiwiaXNWaWV3IiwiZGVmYXVsdENvbG9yIiwib25QaWNrckNhbmNlbCIsImluc3RhbmNlIiwiZ2V0Q29tYW5kaW5kZXgiLCJjTWVudVRvb2xiYXJTZXR0aW5nVGFiIiwiUGx1Z2luU2V0dGluZ1RhYiIsIlNldHRpbmciLCJzZXROYW1lIiwic2V0RGVzYyIsImFkZERyb3Bkb3duIiwiZHJvcGRvd24iLCJtZXRob2RzIiwibWV0aG9kIiwiYWRkT3B0aW9ucyIsImFlc3RoZXRpY3MiLCJhZXN0aGV0aWMiLCJwb3NvdGlvbnMiLCJwb3NvdGlvbiIsImFkZFRvZ2dsZSIsInRvZ2dsZSIsImFkZFNsaWRlciIsImFkZEJ1dHRvbiIsInJlbG9hZEJ1dHRvbiIsInBpY2tyIiwiUGlja3IiLCJjb250cm9sRWwiLCJzZWxlY3QiLCJjTWVudVRvb2xiYXJDb21tYW5kc0NvbnRhaW5lciIsImRyYWdlbGUiLCJvblNvcnQiLCJhcnJheVJlc3VsdCIsInJlbW92ZWQiLCJvblN0YXJ0IiwibmV3Q29tbWFuZCIsInNldHRpbmdFbCIsImFkZGljb24iLCJkZWxldGVCdXR0b24iLCJjTWVudVRvb2xiYXJDb21tYW5kc0NvbnRhaW5lcl9zdWIiLCJzdWJyZXN1bHQiLCJkYXRhc2V0IiwiZXJyb3IiLCJfYyIsInN1YkNvbW1hbmQiLCJzdWJzZXR0aW5nIiwiY2hhbmdlbmFtZSIsIm5hbWVFbCIsImFkZHN1YkJ1dHRvbiIsImNEb25hdGlvbkRpdiIsImNyZWRpdCIsImRvbmF0ZVRleHQiLCJhcHBlbmRUZXh0IiwiY3JlYXRlRG9uYXRlQnV0dG9uIiwibGluayIsImljb25zIiwiY01lbnVUb29sYmFyU3ViIiwiY01lbnVUb29sYmFyQWRkIiwiY01lbnVUb29sYmFyRGVsZXRlIiwiY01lbnVUb29sYmFyUmVsb2FkIiwib2JzaWRpYW4iLCJhZGRJY29ucyIsImFkZEljb24iLCJ0b2dnbGVGdWxsIiwiaXNGdWxsIiwiZXhpdEZ1bGwiLCJiZUZ1bGwiLCJET0NfRUwiLCJoZWFkRWwiLCJzdHlsZUVsIiwiVFlQRV9SRVFVRVNUX0ZVTExfU0NSRUVOIiwiVFlQRV9FWElUX0ZVTExfU0NSRUVOIiwiVFlQRV9GVUxMX1NDUkVFTl9FTEVNRU5UIiwiZ2V0Q3VycmVudEVsZW1lbnQiLCJjTWVudVRvb2xiYXJQbHVnaW4iLCJQbHVnaW4iLCJtb2RDb21tYW5kcyIsImhhbmRsZWNNZW51VG9vbGJhciIsInRvb2xiYXIiLCJoYW5kbGVjTWVudVRvb2xiYXJfbGF5b3V0IiwiaGFuZGxlY01lbnVUb29sYmFyX3Jlc2l6ZSIsIkxlYWZfV2lkdGgiLCJyZXNldFRvb2xiYXIiLCJvbmxvYWQiLCJtYW5pZmVzdCIsImxvYWRTZXR0aW5ncyIsImdlbmVyYXRlQ29tbWFuZHMiLCJvbkxheW91dFJlYWR5Iiwic2V0dXBTdGF0dXNCYXIiLCJpbml0X2V2dCIsImRvYyIsImFkZFNldHRpbmdUYWIiLCJyZWdpc3RlckV2ZW50IiwiRU5fRm9udENvbG9yX0Zvcm1hdF9CcnVzaCIsIkVOX0JHX0Zvcm1hdF9CcnVzaCIsIkVOX1RleHRfRm9ybWF0X0JydXNoIiwicmVnaXN0ZXJEb21FdmVudCIsImNtRWRpdG9yIiwiaGFzRm9jdXMiLCJpc291cmNlIiwic29tZXRoaW5nU2VsZWN0ZWQiLCJjbWhlaWdodCIsInJsZWZ0d2lkdGgiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwibGVmdHdpZHRoIiwiX2QiLCJiYXJ3aWR0aCIsImJhckhlaWdodCIsImJvZHl3aWR0aCIsImNvb3JkcyIsImN1cnNvckZyb20iLCJjdXJzb3JDb29yZHMiLCJjb29yZHNBdFBvcyIsIm9mZnNldCIsInBvc1RvT2Zmc2V0IiwiY20iLCJnZXRDb29yZHMiLCJjdXJzb3JfaGVhZCIsImN1cnNvcl9mcm9tIiwidG9wcHgiLCJsZWZ0cHgiLCJjcmVhdGVGb2xsb3dpbmdiYXIiLCJhZGRDb21tYW5kIiwiaW5kZW50TGlzdCIsInVuaW5kZW50TGlzdCIsInVuZG8iLCJyZWRvIiwibW9kaWZpZXJzIiwiZnVsbHNjcmVlbk11dGF0aW9uT2JzZXJ2ZXIiLCJtb2Ryb290IiwiTXV0YXRpb25PYnNlcnZlciIsIm11dGF0aW9uUmVjb3JkcyIsIm11dGF0aW9uUmVjb3JkIiwiYWRkZWROb2RlcyIsIm5vZGUiLCJtZXNzYWdlIiwiZGlzY29ubmVjdCIsIm9ic2VydmUiLCJjaGlsZExpc3QiLCJmdWxsc2NyZWVuTW9kZSIsInJpZ2h0bGVhZiIsImxlZnRsZWFmIiwid29ya3BsYWNlZnVsbHNjcmVlbk1vZGUiLCJjb21tYW5kc01hcCIsImhybGluZSIsImNoYXIiLCJwcmVmaXgiLCJzdWZmaXgiLCJpc2xpbmVoZWFkIiwianVzdGlmeSIsImNlbnRlciIsInVuZGVybGluZSIsInN1cGVyc2NyaXB0Iiwic3Vic2NyaXB0IiwiY29kZWJsb2NrIiwic2VsZWN0ZWRUZXh0IiwiY3Vyc2VyU3RhcnQiLCJjdXJzZXJFbmQiLCJtb2RlIiwicHJlU3RhcnQiLCJ0cmltU3RhcnQiLCJzdWZFbmQiLCJ0cmltRW5kIiwicmVwbGFjZVJhbmdlIiwiYXBwbHlDb21tYW5kIiwic3RhdHVzQmFySWNvbiIsImFkZFN0YXR1c0Jhckl0ZW0iLCJzdGF0dXNCYXJSZWN0Iiwic3RhdHVzQmFySWNvblJlY3QiLCJtZW51IiwiTWVudSIsImFkZEl0ZW0iLCJzZXRUaXRsZSIsInNldFNlY3Rpb24iLCJpdGVtRG9tIiwidG9nZ2xlQ29tcG9uZW50IiwiVG9nZ2xlQ29tcG9uZW50Iiwic2V0RGlzYWJsZWQiLCJzaG93QXRQb3NpdGlvbiIsIm9udW5sb2FkIiwic3RhdHVzIiwic2V0VGVtcF9Ob3RpY2UiLCJjb250ZW50IiwibG9hZERhdGEiLCJzYXZlRGF0YSJdLCJtYXBwaW5ncyI6InVDQXFFTyxTQUFTQSxFQUFVQyxFQUFTQyxFQUFZQyxFQUFHQyxHQUU5QyxPQUFPLElBQUtELElBQU1BLEVBQUlFLFdBQVUsU0FBVUMsRUFBU0MsR0FDL0MsU0FBU0MsRUFBVUMsR0FBUyxJQUFNQyxFQUFLTixFQUFVTyxLQUFLRixJQUFXLE1BQU9HLEdBQUtMLEVBQU9LLEdBQU8sQ0FDM0YsU0FBU0MsRUFBU0osR0FBUyxJQUFNQyxFQUFLTixFQUFpQixNQUFFSyxJQUFXLE1BQU9HLEdBQUtMLEVBQU9LLEdBQU8sQ0FDOUYsU0FBU0YsRUFBS0ksR0FKbEIsSUFBZUwsRUFJYUssRUFBT0MsS0FBT1QsRUFBUVEsRUFBT0wsUUFKMUNBLEVBSXlESyxFQUFPTCxNQUpoREEsYUFBaUJOLEVBQUlNLEVBQVEs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QSxVQUNBLFVBQ0EsVUFDQSxVQUNBLFVBQ0EsVUFDQSxRQUNBLFlBQ0EsZ0JBQ0EsWUFDQSxhQUNBLGtCQUNBLGtCQUNBLGFBQ0EsWUFDQSxrQkFDQSxhQUNBLGFBQ0EsaUJBQ0EsWUFDQSxRQUNBLFNBQ0EsU0FDQSxTQUNBLE9BQ0EsVUFDQSxjQUNBLFNBQ0EsTUFDQSxRQUNBLFVBQ0EsVUFDQSxVQUNBLFlBQ0EsVUFDQSxXQUNBLFNBQ0EsT0FDQSxXQUNBLFlBQ0EsbUJBQ0Esb0JBQ0EsbUJBQ0EsaUJBQ0Esb0JBQ0Esa0JBQ0EsaUJBQ0Esa0JBQ0EsTUFDQSxjQUNBLFlBQ0EsT0FDQSxRQUNBLFlBQ0EsUUFDQSxXQUNBLGVBQ0EsV0FDQSxXQUNBLFNBQ0EsVUFDQSxTQUNBLFNBQ0EsU0FDQSxTQUNBLFNBQ0EsU0FDQSxRQUNBLE9BQ0EsT0FDQSxnQkFDQSxnQkFDQSxTQUNBLGNBQ0EsaUJBQ0EsV0FDQSxXQUNBLFVBQ0EsV0FDQSxZQUNBLFNBQ0EsU0FDQSxPQUNBLFlBQ0EsTUFDQSxZQUNBLFFBQ0EsU0FDQSxPQUNBLFNBQ0EsZ0JBQ0EsVUFDQSxNQUNBLFdBQ0EsVUFDQSxlQUNBLFVBQ0EsUUFDQSxlQUNBLGVBQ0EsYUFDQSxlQUNBLGVBQ0EsYUFDQSxtQkFDQSxpQkFDQSxXQUNBLGVBQ0EsYUFDQSxhQUNBLFlBQ0EsYUFDQSxXQUNBLFlBQ0EsYUFDQSxZQUNBLFlBQ0EsYUFDQSxhQUNBLGFBQ0EsY0FDQSxZQUNBLGFBQ0EsV0FDQSxrQkFDQSxjQUNBLFlBQ0EsZUFDQSxhQUNBLGNBQ0EsaUJBQ0EsY0FDQSxZQUNBLGdCQUNBLFlBQ0EsZ0JBQ0EsY0FDQSxpQkFDQSxtQkFDQSxlQUNBLGdCQUNBLFlBQ0EsY0FDQSxZQUNBLFVBQ0EsZUFDQSxhQUNBLGdCQUNBLGNBQ0EsZUFDQSxVQUNBLFNBQ0EsT0FDQSxRQUNBLE9BQ0EsU0FDQSxjQUNBLFdBQ0EscUJBQ0Esc0JBQ0EsT0FDQSxRQUNBLGlCQUNBLGFBQ0EsZ0JBQ0EsY0FDQSxvQkFDQSxrQkFDQSxrQkFDQSxnQkFDQSxXQUNBLFNBQ0EsUUFDQSxpQkFDQSxlQUNBLGVBQ0EsZ0JBQ0EsZUFDQSxhQUNBLGNBQ0EsY0FDQSxlQUNBLGVBQ0EsYUFDQSxjQUNBLGVBQ0EsY0FDQSxnQkFDQSxjQUNBLGtCQUNBLGdCQUNBLGlCQUNBLGNBQ0EsWUFDQSxXQUNBLFNBQ0EsVUFDQSxhQUNBLFVBQ0EsUUFDQSxTQUNBLFFBQ0EsT0FDQSxrQkFDQSxZQUNBLFVBQ0EsUUFDQSxRQUNBLE1BQ0EsUUFDQSxPQUNBLGtCQUNBLGFBQ0EsYUFDQSxjQUNBLFdBQ0EsWUFDQSwwQkFDQSx5QkFDQSxtQkFDQSxTQUNBLFNBQ0EsY0FDQSxVQUNBLFVBQ0EsUUFDQSxPQUNBLGlCQUNBLFFBQ0EsT0FDQSxrQkFDQSxnQkFDQSxTQUNBLGFBQ0EsT0FDQSxhQUNBLFdBQ0EsT0FDQSxPQUNBLGFBQ0EsY0FDQSxrQkFDQSxZQUNBLGNBQ0EsUUFDQSxjQUNBLFVBQ0EsY0FDQSxVQUNBLE9BQ0EsWUFDQSxZQUNBLGNBQ0EsWUFDQSxhQUNBLFFBQ0EsU0FDQSxRQUNBLFNBQ0EsZUFDQSxXQUNBLE9BQ0EsVUFDQSxZQUNBLFNBQ0EsZUFDQSxXQUNBLE1BQ0EsV0FDQSxlQUNBLFlBQ0EsYUFDQSxpQkFDQSxlQUNBLE9BQ0EsV0FDQSxZQUNBLFdBQ0EsU0FDQSxlQUNBLFFBQ0EsUUFDQSxTQUNBLG1CQUNBLGNBQ0EsY0FDQSxrQkFDQSxTQUNBLE9BQ0EsVUFDQSxZQUNBLGdCQUNBLFlBQ0EsYUFDQSxZQUNBLFNBQ0EsT0FDQSxXQUNBLGNBQ0EsV0FDQSxhQUNBLGFBQ0EsZUFDQSxZQUNBLGFBQ0EsYUFDQSxTQUNBLE9BQ0EsV0FDQSxTQUNBLGVBQ0EsYUFDQSxTQUNBLE9BQ0EsU0FDQSxVQUNBLFVBQ0EsU0FDQSxhQUNBLGFBQ0EsWUFDQSxZQUNBLGdCQUNBLGNBQ0EsZUFDQSxTQUNBLE9BQ0EsUUFDQSxjQUNBLFVBQ0EsTUFDQSxVQUNBLGFBQ0EsV0FDQSxRQUNBLGdCQUNBLFlBQ0EsTUFDQSxPQUNBLGlCQUNBLGlCQUNBLFFBQ0EsVUFDQSxNQUNBLGFBQ0EsWUFDQSxhQUNBLFdBQ0EsZUFDQSxlQUNBLFFBQ0EsY0FDQSxrQkFDQSxVQUNBLE9BQ0Esa0JBQ0EsZ0JBQ0EsZ0JBQ0EsV0FDQSxrQkFDQSxzQkFDQSxnQkFDQSxRQUNBLFVBQ0Esa0JBQ0EsZ0JBQ0Esa0JBQ0EsZ0JBQ0EsT0FDQSxVQUNBLFVBQ0EsVUFDQSxRQUNBLGtCQUNBLGVBQ0EsaUJBQ0EsYUFDQSxVQUNBLFlBQ0EsVUFDQSxTQUNBLFVBQ0EsWUFDQSxnQkFDQSxnQkFDQSxlQUNBLGVBQ0EsaUJBQ0EsWUFDQSxVQUNBLGVBQ0EsZUFDQSxhQUNBLFVBQ0EsV0FDQSxZQUNBLGVBQ0EsZUFDQSxnQkFDQSxRQUNBLFdBQ0EsU0FDQSxVQUNBLGtCQUNBLGFBQ0Esa0JBQ0EsaUJBQ0EsZUFDQSxZQUNBLGlCQUNBLFFBQ0EsWUFDQSxhQUNBLFVBQ0EsTUFDQSxVQUNBLFFBQ0EsUUFDQSxjQUNBLE9BQ0EsV0FDQSxjQUNBLGNBQ0EsT0FDQSxTQUNBLFVBQ0EsVUFDQSxpQkFDQSxZQUNBLFFBQ0EsVUFDQSxTQUNBLFVBQ0EsUUFDQSxpQkFDQSxRQUNBLFVBQ0EsU0FDQSxPQUNBLGNBQ0EsYUFDQSxRQUNBLFdBQ0EsU0FDQSxZQUNBLFFBQ0EsU0FDQSxTQUNBLGdCQUNBLFlBQ0EsYUFDQSxZQUNBLE1BQ0EsUUFDQSxnQkFDQSxPQUNBLFdBQ0EsUUFDQSxVQUNBLFlBQ0EsWUFDQSxPQUNBLFdBQ0EsbUJBQ0EsZUFDQSxTQUNBLFNBQ0EsT0FDQSx1QkFDQSxxQkFDQSxhQUNBLGVBQ0EsYUFDQSxTQUNBLGFBQ0EsV0FDQSxVQUNBLFFBQ0EsUUFDQSxlQUNBLGVBQ0EsZUFDQSxhQUNBLFNBQ0EsUUFDQSxlQUNBLGdCQUNBLFNBQ0EsU0FDQSxRQUNBLFVBQ0EsZ0JBQ0EsZUFDQSxVQUNBLFFBQ0EsY0FDQSxhQUNBLGdCQUNBLGNBQ0EsU0FDQSxRQUNBLFlBQ0EsZUFDQSxRQUNBLFFBQ0EsUUFDQSxRQUNBLHFCQUNBLFVBQ0Esc0JBQ0EsYUFDQSxhQUNBLFFBQ0EsWUFDQSxPQUNBLFdBQ0EsWUFDQSxVQUNBLFNBQ0EsU0FDQSxZQUNBLFdBQ0EsT0FDQSxjQUNBLFVBQ0EsY0FDQSxjQUNBLHFCQUNBLG1CQUNBLGdCQUNBLFlBQ0EsVUFDQSxhQUNBLFdBQ0EsV0FDQSxNQUNBLFVBQ0EsU0FDQSxjQUNBLGNBQ0EsZ0JBQ0EsUUFDQSxTQUNBLFVBQ0EsVUFDQSxRQUNBLFNBQ0EsTUFDQSxPQUNBLFNBQ0EsT0FDQSxrQkFDQSxXQUNBLG9CQUNBLGNBQ0Esd0JBQ0Esa0JBQ0EsY0FDQSxjQUNBLFlBQ0EsU0FDQSxZQUNBLGNBQ0EsUUFDQSxjQUNBLGVBQ0EsVUFDQSxZQUNBLFFBQ0EsVUFDQSxRQUNBLGlCQUNBLFlBQ0EsUUFDQSxTQUNBLGdCQUNBLGNBQ0EsV0FDQSxTQUNBLFFBQ0EsT0FDQSxLQUNBLFNBQ0EsVUFDQSxPQUNBLFdBQ0EsWUFDQSxTQUNBLE9BQ0EsV0FDQSxTQUNBLFNBQ0EsZUFDQSxTQUNBLE1BQ0EsYUFDQSxXQUNBLGFBQ0EsWUFDQSxTQUNBLE9BQ0EsUUFDQSxtQkFDQSxXQUNBLGdCQUNBLFdBQ0EsY0FDQSxVQUNBLFlBQ0EsUUFDQSxPQUNBLFlBQ0EsV0FDQSxXQUNBLFdBQ0EsU0FDQSxTQUNBLFNBQ0EsT0FDQSxRQUNBLFFBQ0EsU0FDQSxVQUNBLFdBQ0EsT0FDQSxPQUNBLE9BQ0EsWUFDQSxTQUNBLFdBQ0EsWUFDQSxXQUNBLElBQ0EsVUFDQSxVQUNBLE1BQ0EsVUFDQSxXQUNBLGFBQ0EsUUFDQSxTQUNBLGlCQUNBLFdBQ0EsU0FDQSxTQUNBLGFBQ0EsY0FDQSx3QkFDQSxjQUNBLGFBQ0EsYUFDQSxXQUNBLE9BQ0EsWUFDQSxTQUNBLGFBQ0EsZUFDQSxlQUNBLGFBQ0Esb0JBQ0EsY0FDQSxPQUNBLGFBQ0EsWUFDQSxVQUNBLHVCQUNBLHdCQUNBLHFCQUNBLHVCQUNBLGdCQUNBLHNCQUNBLE1BQ0EsbUJBQ0EsT0FDQSxtQkFDQSxpQkFDQSwwQkFDQSxlQUNBLGdCQUNBLHFCQUNBLGNBQ0EsUUFDQSxVQUNBLFFBQ0EsT0FDQSxlQUNBLE9BQ0EsYUFDQSxRQUNBLE9BQ0EsUUFDQSxhQUNBLGNBQ0EsY0FDQSx3QkFDQSxZQUNB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
