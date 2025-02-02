"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var Header_module_css_1 = require("./Header.module.css");
var Header = function () {
    var _a = (0, react_1.useState)(""), value = _a[0], setValue = _a[1];
    function handleSelect(event) {
        console.log("select");
        setValue(event.target.value);
    }
    return ((0, jsx_runtime_1.jsx)("div", { className: Header_module_css_1.default.container, children: (0, jsx_runtime_1.jsxs)("nav", { className: Header_module_css_1.default.navbar, children: [(0, jsx_runtime_1.jsx)("div", { className: Header_module_css_1.default.logo, children: (0, jsx_runtime_1.jsx)("h3", { children: "\u0423\u0447\u0451\u0442 \u043F\u043E\u043B\u043E\u043C\u043E\u043A \u043A\u043E\u043C\u043F\u044C\u044E\u0442\u0435\u0440\u043E\u0432" }) }), (0, jsx_runtime_1.jsx)("div", { className: Header_module_css_1.default.list, children: (0, jsx_runtime_1.jsx)("form", { children: (0, jsx_runtime_1.jsx)("div", { className: Header_module_css_1.default.selectWrapper, children: (0, jsx_runtime_1.jsxs)("select", { name: "city", id: "city-select", value: value, onChange: function (event) { handleSelect; }, children: [(0, jsx_runtime_1.jsx)("option", { value: "DEFAULT", disabled: true, children: "-- \u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0430\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044E --" }), (0, jsx_runtime_1.jsx)("option", { value: "121\u0430", children: "121\u0430" }), (0, jsx_runtime_1.jsx)("option", { value: "122\u0431", children: "122\u0431" }), (0, jsx_runtime_1.jsx)("option", { value: "123\u0432", children: "123\u0432" }), (0, jsx_runtime_1.jsx)("option", { value: "124\u0433", children: "124\u0433" }), (0, jsx_runtime_1.jsx)("option", { value: "125\u0434", children: "125\u0434" }), (0, jsx_runtime_1.jsx)("option", { value: "126\u0435", children: "126\u0435" })] }) }) }) }), (0, jsx_runtime_1.jsxs)("div", { className: Header_module_css_1.default.userMenu, children: [(0, jsx_runtime_1.jsx)("h6", {}), (0, jsx_runtime_1.jsx)("h3", { children: "\u041F\u0440\u0435\u043F\u043E\u0434\u0430\u0432\u0430\u0442\u0435\u043B\u044C" }), (0, jsx_runtime_1.jsx)("button", { children: "\u0412\u044B\u0439\u0442\u0438" })] })] }) }));
};
exports.default = Header;
