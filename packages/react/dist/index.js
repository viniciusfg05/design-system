"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// ../tokens/dist/index.js
var require_dist = __commonJS({
  "../tokens/dist/index.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = (target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    };
    var __copyProps2 = (to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    };
    var __toCommonJS2 = (mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod);
    var src_exports2 = {};
    __export2(src_exports2, {
      colors: () => colors2,
      fontSizes: () => fontSizes2,
      fontWeights: () => fontWeights2,
      fonts: () => fonts2,
      lineHeights: () => lineHeights2,
      radii: () => radii2,
      space: () => space2
    });
    module2.exports = __toCommonJS2(src_exports2);
    var colors2 = {
      white: "#FFF",
      black: "#000",
      test: "#fff",
      gray100: "#E1E1E6",
      gray200: "#A9A9B2",
      gray400: "#7C7C8A",
      gray500: "#505059",
      gray600: "#323238",
      gray700: "#29292E",
      gray800: "#202024",
      gray900: "#121214",
      ignite300: "#00B37E",
      ignite500: "#00875F",
      ignite700: "#015F43",
      ignite900: "#00291D"
    };
    var fontSizes2 = {
      xxs: "0.625rem",
      xs: "0.75rem",
      sm: "0.875rem",
      md: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "4xl": "2rem",
      "5xl": "2.25rem",
      "6xl": "3rem",
      "7xl": "4rem",
      "8xl": "4.5rem",
      "9xl": "6rem"
    };
    var fontWeights2 = {
      regular: "400",
      medium: "500",
      bold: "700"
    };
    var fonts2 = {
      default: "Roboto, sans-serif",
      code: "monospace"
    };
    var lineHeights2 = {
      shorter: "125%",
      short: "140%",
      base: "160%",
      tall: "180%"
    };
    var radii2 = {
      px: "1px",
      xs: "4px",
      sm: "6px",
      md: "8px",
      lg: "16px",
      full: "99999px"
    };
    var space2 = {
      1: "0.25rem",
      2: "0.5rem",
      3: "0.75rem",
      4: "1rem",
      5: "1.25rem",
      6: "1.5rem",
      7: "1.75rem",
      8: "2rem",
      10: "2.5rem",
      12: "3rem",
      16: "4rem",
      20: "5rem",
      40: "10rem",
      64: "16rem",
      80: "20rem"
    };
  }
});

// src/index.tsx
var src_exports = {};
__export(src_exports, {
  Avatar: () => Avatar2,
  Box: () => Box,
  Button: () => Button,
  Checkbox: () => Checkbox2,
  Heading: () => Heading,
  MultStep: () => MultStep,
  Text: () => Text,
  TextArea: () => TextArea,
  TextInput: () => TextInput,
  Toast: () => Toast2,
  Tooltip: () => Tooltip,
  formattedDate: () => formattedDate
});
module.exports = __toCommonJS(src_exports);

// src/styles/index.ts
var import_dist = __toESM(require_dist());
var import_react = require("@stitches/react");
var {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config
} = (0, import_react.createStitches)({
  themeMap: __spreadProps(__spreadValues({}, import_react.defaultThemeMap), {
    height: "space",
    width: "space"
  }),
  theme: {
    colors: import_dist.colors,
    fontSizes: import_dist.fontSizes,
    fontWeights: import_dist.fontWeights,
    fonts: import_dist.fonts,
    lineHeights: import_dist.lineHeights,
    radii: import_dist.radii,
    space: import_dist.space
  }
});

// src/components/box.tsx
var Box = styled("div", {
  padding: "$4",
  borderRadius: "$md",
  backgroundColor: "$gray800",
  border: "1px solid $gray600"
});
Box.displayName = "Box";

// src/components/textArea.tsx
var TextArea = styled("textarea", {
  backgroundColor: "$gray900",
  padding: "$3 $4",
  borderRadius: "$sm",
  boxSizing: "border-box",
  border: "2px solid $gray900",
  fontFamily: "$default",
  fontSize: "$sm",
  color: "$white",
  fontWeight: "$regular",
  resize: "vertical",
  minHeight: 80,
  "&:focus": {
    outline: 0,
    borderColor: "$ignite300"
  },
  "&:disabled": {
    opacity: 0.5,
    cursor: "not-allowed"
  },
  "&:placeholder": {
    color: "$gray400"
  }
});
TextArea.displayName = "TextArea";

// src/components/text.tsx
var Text = styled("p", {
  fontFamily: "$default",
  lineHeight: "$base",
  margin: 0,
  color: "$gray100",
  variants: {
    size: {
      xxs: { fontSize: "$xxs" },
      xs: { fontSize: "$xs" },
      sm: { fontSize: "$sm" },
      md: { fontSize: "$md" },
      lg: { fontSize: "$lg" },
      xl: { fontSize: "$xl" },
      "2xl": { fontSize: "$2xl" },
      "4xl": { fontSize: "$4xl" },
      "5xl": { fontSize: "$5xl" },
      "6xl": { fontSize: "$6xl" },
      "7xl": { fontSize: "$7xl" },
      "8xl": { fontSize: "$8xl" },
      "9xl": { fontSize: "$9xl" }
    }
  },
  defaultVariants: {
    size: "md"
  }
});
Text.displayName = "Text";

// src/components/heading.tsx
var Heading = styled("h2", {
  fontFamily: "$default",
  lineHeight: "$shorter",
  margin: 0,
  color: "$gray100",
  variants: {
    size: {
      sm: { fontSize: "$xl" },
      md: { fontSize: "$2xl" },
      lg: { fontSize: "$4xl" },
      "2xl": { fontSize: "$5xl" },
      "3xl": { fontSize: "$6xl" },
      "4xl": { fontSize: "$7xl" },
      "5xl": { fontSize: "$8xl" },
      "6xl": { fontSize: "$9xl" }
    }
  },
  defaultVariants: {
    size: "md"
  }
});
Heading.displayName = "Heading";

// src/components/button.tsx
var Button = styled("button", {
  all: "unset",
  borderRadius: "$sm",
  fontSize: "$sm",
  fontWeight: "$medium",
  fontFamily: "$default",
  textAlign: "center",
  minWidth: 120,
  boxSizing: "border-box",
  padding: "0 $4",
  transition: "background 0.3s",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "$2",
  cursor: "pointer",
  svg: {
    width: "$4",
    height: "$4"
  },
  "&:disabled": {
    cursor: "not-allowed"
  },
  variants: {
    variant: {
      primary: {
        color: "$white",
        background: "$ignite500",
        "&:not(:disabled):hover": {
          background: "$ignite300"
        },
        "&:disabled": {
          backgroundColor: "$gray200"
        }
      },
      secondary: {
        color: "$ignite300",
        border: "2px solid $ignite500",
        "&:not(:disabled):hover": {
          background: "$ignite500",
          color: "$white"
        },
        "&:disabled": {
          color: "$gray200",
          borderColor: "$gray200"
        }
      },
      tertiary: {
        color: "$gray100",
        "&:not(:disabled):hover": {
          color: "$white"
        },
        "&:disabled": {
          color: "$gray600"
        }
      }
    },
    size: {
      sm: {
        height: 38
      },
      md: {
        height: 46
      }
    }
  },
  defaultVariants: {
    variant: "primary",
    size: "md"
  }
});
Button.displayName = "Button";

// src/components/Avatar/index.tsx
var import_phosphor_react = require("phosphor-react");

// src/components/Avatar/styles.ts
var Avatar = __toESM(require("@radix-ui/react-avatar"));
var AvatarContainerStyled = styled(Avatar.Root, {
  borderRadius: "$full",
  display: "inline-block",
  width: "$12",
  height: "$12",
  overflow: "hidden"
});
var AvatarImageStyled = styled(Avatar.Image, {
  width: "100%",
  height: "100%",
  objectFit: "cover",
  borderRadius: "inherit"
});
var AvatarFallbackStyled = styled(Avatar.Fallback, {
  width: "100%",
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "$gray600",
  color: "$gray800",
  svg: {
    width: "$6",
    height: "$6"
  }
});
AvatarImageStyled.displayName = "Avatar";

// src/components/Avatar/index.tsx
var import_jsx_runtime = require("react/jsx-runtime");
function Avatar2(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AvatarContainerStyled, {
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AvatarImageStyled, __spreadValues({}, props)),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AvatarFallbackStyled, {
        delayMs: 600,
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_phosphor_react.User, {})
      })
    ]
  });
}

// src/components/TextInput/styles.ts
var TextInputContainer = styled("div", {
  backgroundColor: "$gray900",
  padding: "$3 $4",
  borderRadius: "$sm",
  boxSizing: "border-box",
  border: "2px solid $gray900",
  display: "flex",
  alignItems: "baseline",
  "&:has(input:focus)": {
    borderColor: "$ignite300"
  },
  "&:has(input:disabled)": {
    opacity: 0.5,
    cursor: "not-allowed"
  }
});
var Prefix = styled("span", {
  fontFamily: "$default",
  fontSize: "$sm",
  color: "$gray400",
  fontWeight: "regular"
});
var Input = styled("input", {
  fontFamily: "$default",
  fontSize: "$sm",
  color: "$white",
  fontWeight: "regular",
  background: "transparent",
  border: 0,
  width: "100%",
  "&:focus": {
    outline: 0
  },
  "&:disabled": {
    cursor: "not-allowed"
  },
  "&:placeholder": {
    color: "$gray400"
  }
});
TextInputContainer.displayName = "Input";

// src/components/TextInput/index.tsx
var import_jsx_runtime2 = require("react/jsx-runtime");
function TextInput(_a) {
  var _b = _a, { prefix } = _b, props = __objRest(_b, ["prefix"]);
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(TextInputContainer, {
    children: [
      !!prefix && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Prefix, {
        children: prefix
      }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Input, __spreadValues({}, props))
    ]
  });
}

// src/components/Checkbox/index.tsx
var import_phosphor_react2 = require("phosphor-react");

// src/components/Checkbox/styles.ts
var Checkbox = __toESM(require("@radix-ui/react-checkbox"));
var import_react2 = require("@stitches/react");
var CheckboxContainerStyled = styled(Checkbox.Root, {
  all: "unset",
  width: "$6",
  height: "$6",
  backgroundColor: "$gray900",
  borderRadius: "$xs",
  lineHeight: 0,
  cursor: "pointer",
  overflow: "hidden",
  boxSizing: "border-box",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  border: "2px solid $gray900",
  '&[data-state="checked"]': {
    backgroundColor: "$ignite300"
  },
  "&:focus": {
    border: "2px solid $ignite300"
  }
});
var slideIn = (0, import_react2.keyframes)({
  from: {
    transform: "translateY(-100%)"
  },
  to: {
    transform: "translateY(0)"
  }
});
var slideOut = (0, import_react2.keyframes)({
  from: {
    transform: "translateY(0)"
  },
  to: {
    transform: "translateY(-100%)"
  }
});
var CheckboxIndicatorStyled = styled(Checkbox.Indicator, {
  color: "$white",
  width: "$4",
  height: "$4",
  '&[data-state="checked"]': {
    animation: `${slideIn} 200ms ease-out`
  },
  '&[data-state="unchecked"]': {
    animation: `${slideOut} 200ms ease-out`
  }
});
CheckboxContainerStyled.displayName = "Checkbox";

// src/components/Checkbox/index.tsx
var import_jsx_runtime3 = require("react/jsx-runtime");
function Checkbox2(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(CheckboxContainerStyled, __spreadProps(__spreadValues({}, props), {
    children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(CheckboxIndicatorStyled, {
      asChild: true,
      children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_phosphor_react2.Check, {
        weight: "bold"
      })
    })
  }));
}

// src/components/MultStep/styles.ts
var MultStepCotainerStyled = styled("div", {
  width: "100%"
});
var LabelStyled = styled(Text, {
  color: "$gray200",
  defaultVariants: {
    size: "xs"
  }
});
var StepsStyled = styled("div", {
  display: "grid",
  gridTemplateColumns: "repeat(var(--steps-size), 1fr)",
  gap: "$2",
  marginTop: "$1"
});
var StepStyled = styled("div", {
  height: "$1",
  borderRadius: "$px",
  backgroundColor: "$gray600",
  variants: {
    active: {
      true: {
        backgroundColor: "$gray100"
      }
    }
  }
});

// src/components/MultStep/index.tsx
var import_jsx_runtime4 = require("react/jsx-runtime");
function MultStep({ size, currentStep = 1 }) {
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(MultStepCotainerStyled, {
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(LabelStyled, {
        children: [
          "Passo ",
          currentStep,
          " de ",
          size
        ]
      }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(StepsStyled, {
        css: { "--steps-size": size },
        children: Array.from({ length: size }, (_, i) => i + 1).map((step) => {
          return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(StepStyled, {
            active: currentStep >= step
          });
        })
      })
    ]
  });
}
MultStep.displayName = "MultStep";

// src/components/Toast/index.tsx
var import_react4 = require("react");

// src/components/Toast/styles.ts
var Toast = __toESM(require("@radix-ui/react-toast"));
var import_react3 = require("@stitches/react");
var ToastContainerStyled = styled(Toast.Provider, {});
var slideIn2 = (0, import_react3.keyframes)({
  from: {
    transform: "translateX(110%)"
  },
  to: {
    transform: "translateX(0%)"
  }
});
var slideOut2 = (0, import_react3.keyframes)({
  from: {
    transform: "translateX(-0%)"
  },
  to: {
    transform: "translateX(110%)"
  }
});
var ToastContentStyled = styled(Toast.Root, {
  width: "22.5rem",
  height: "100%",
  backgroundColor: "$gray600",
  borderRadius: "$md",
  padding: "$4",
  '&[data-state="open"]': {
    animation: `${slideIn2} 200ms ease-out`
  },
  '&[data-state="closed"]': {
    animation: `${slideOut2} 200ms ease-out`
  }
});
var ToastTitleStyled = styled(Toast.Title, {
  fontSize: "$xl",
  fontWeight: "$bold",
  color: "$white",
  marginBottom: "$1",
  fontFamily: "Roboto"
});
var ToastActionStyled = styled(Toast.Action, {
  display: "flex",
  alignitems: "center",
  justifyContent: "center",
  position: "absolute",
  width: "$5",
  height: "$5",
  background: "transparent",
  border: 0,
  lineHeight: 0,
  top: "1.5rem",
  right: "1.5rem"
});
var HeaderContentStyled = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center"
});
var DescriptionStyled = styled(Toast.Description, {
  margin: 0,
  color: "$gray200",
  fontFamily: "Roboto",
  fontSize: "$sm",
  lineHeight: "$tall"
});
var DescriptionDateStyled = styled("div", {
  display: "flex",
  alignItems: "center",
  p: {
    textTransform: "capitalize",
    margin: 0
  },
  span: {
    marginLeft: "$1",
    marginRight: "$1"
  },
  strong: {
    fontWeight: "normal",
    marginRight: "$1"
  }
});
var DescriptionStringStyled = styled("p", {});
var ViewportStyled = styled(Toast.Viewport, {
  "--viewport-padding": "$4",
  position: "fixed",
  bottom: 0,
  right: 0,
  display: "flex",
  flexDirection: "column",
  gap: 10,
  width: "390px",
  maxWidth: "100vw",
  margin: 0,
  listStyle: "none",
  zIndex: 2147483647,
  outline: "none",
  padding: "$4"
});

// src/components/Toast/index.tsx
var import_phosphor_react3 = require("phosphor-react");
var import_date_fns = require("date-fns");
var import_locale = require("date-fns/locale");
var import_jsx_runtime5 = require("react/jsx-runtime");
var formattedDate = (0, import_date_fns.format)(new Date(), "dd MMM aaaa", {
  locale: import_locale.ptBR
});
function Toast2(_a) {
  var _b = _a, { description, interval, IsDate } = _b, props = __objRest(_b, ["description", "interval", "IsDate"]);
  const [open, setOpen] = (0, import_react4.useState)(false);
  const date = new Date();
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(ToastContainerStyled, __spreadProps(__spreadValues({
    swipeDirection: "right"
  }, props), {
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(Button, {
        onClick: () => {
          setOpen(true);
          setTimeout(() => {
            setOpen(false);
          }, interval);
        },
        children: "Add to Calendar"
      }),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(ToastContentStyled, {
        open,
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(HeaderContentStyled, {
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(ToastTitleStyled, {
                children: "Agendamento realizado"
              }),
              /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(ToastActionStyled, {
                asChild: true,
                altText: "Goto schedule to undo",
                onClick: () => setOpen(false),
                children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_phosphor_react3.X, {
                  size: 12
                })
              })
            ]
          }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(DescriptionStyled, {
            children: !IsDate ? /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(Text, {
              children: description
            }) : /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(DescriptionDateStyled, {
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("p", {
                  children: (0, import_date_fns.format)(date, "eee", { locale: import_locale.ptBR })
                }),
                /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("strong", {
                  children: ","
                }),
                /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("p", {
                  children: (0, import_date_fns.format)(date, "dd", { locale: import_locale.ptBR })
                }),
                /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("span", {
                  children: "de"
                }),
                /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("p", {
                  children: (0, import_date_fns.format)(date, "MMMM", { locale: import_locale.ptBR })
                }),
                /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("span", {
                  children: "\xE0s"
                }),
                /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("p", {
                  children: [
                    (0, import_date_fns.format)(date, "k", { locale: import_locale.ptBR }),
                    "h"
                  ]
                })
              ]
            })
          })
        ]
      }),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(ViewportStyled, {})
    ]
  }));
}

// src/components/Tooltip/styles.ts
var Toast3 = __toESM(require("@radix-ui/react-tooltip"));
var import_react5 = require("@stitches/react");
var ToolTipContainerStyled = styled(Toast3.Provider, {});
var ToolTipRootStyled = styled(Toast3.Root, {});
var ToolTipTriggerStyled = styled(Toast3.Trigger, {});
var ToolTipPortalStyled = styled(Toast3.Portal, {});
var ToolTipArrowStyled = styled(Toast3.Arrow, {
  fill: "$gray900",
  width: "1rem",
  height: "0.5rem"
});
var transformSlide = (0, import_react5.keyframes)({
  from: {
    transform: "translateY(-100%)"
  },
  to: {
    transform: "translateY(0)"
  }
});
var slideIn3 = (0, import_react5.keyframes)({
  from: {
    transform: "scale(0)",
    height: "0",
    opacity: "0"
  },
  to: {
    transform: "scale(1)",
    height: "2.75",
    opacity: "1"
  }
});
var slideOut3 = (0, import_react5.keyframes)({
  to: {
    transform: "scale(0)",
    height: "0",
    opacity: "0"
  },
  from: {
    transform: "scale(1)",
    height: "2.75",
    opacity: "1"
  }
});
var ToolTipContentStyled = styled(Toast3.Content, {
  backgroundColor: "$gray900",
  color: "$gray100",
  padding: "$3",
  borderRadius: "$md",
  width: "13.125rem",
  height: "2.75",
  fontFamily: "Inter, roboto",
  fontSizes: "$sm",
  alignItems: "center",
  textAlign: "center",
  border: "none",
  '&[data-state="delayed-open"]': {
    animation: `${slideIn3} 200ms ease-out `
  },
  '&[data-state="closed"]': {
    animation: `${slideOut3} 200ms ease-out`
  }
});

// src/components/Tooltip/index.tsx
var import_jsx_runtime6 = require("react/jsx-runtime");
function Tooltip(_a) {
  var _b = _a, { content } = _b, props = __objRest(_b, ["content"]);
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(ToolTipContainerStyled, __spreadProps(__spreadValues({}, props), {
    children: /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(ToolTipRootStyled, {
      delayDuration: 200,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(ToolTipTriggerStyled, {
          asChild: true,
          children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(Button, {
            children: props.children
          })
        }),
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(ToolTipPortalStyled, {
          children: /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(ToolTipContentStyled, {
            sideOffset: 5,
            "data-align": "center",
            children: [
              content,
              /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(ToolTipArrowStyled, {})
            ]
          })
        })
      ]
    })
  }));
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Avatar,
  Box,
  Button,
  Checkbox,
  Heading,
  MultStep,
  Text,
  TextArea,
  TextInput,
  Toast,
  Tooltip,
  formattedDate
});
