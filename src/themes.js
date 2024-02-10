import { ThemeState } from "./main";

export class Theme {
    constructor(name) {
        this.name = name;

        this.isDefault = function () {
            return name === "Dark";
        };

        this.set = function () {
            document.body.classList.remove(...document.body.classList);

            document.body.classList.add(this.cssClass());
            if (name === "Dark") document.body.classList.add("s-base--dark");
            if (name === "Bright") document.body.classList.add("s-base--bright");
            if (name === "Angular") document.body.classList.add("s-base--angular")
        };

        this.cssClass = function() {
            return `t-${this.name.replace(/\s+/gu, "-").toLowerCase()}`
        };
    }
    static currentName() {
        return ThemeState;
    }
    static current() {
        return Themes.find(Theme.currentName());
    }
    static set(name) {
        const theme = Themes.find(name);
        theme.set();
        return theme;
    }
};

export const Themes = {
    all: [
        Theme("Angular"),
        Theme("Dark"),
        Theme("Bright"),
    ],

    find(name) {
        return Themes.all
          .find(theme => theme.name === name);
    }
}