import "./bootstrap";
import "../css/app.css";

import { createRoot } from "react-dom/client";
import { createInertiaApp } from "@inertiajs/react";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";
//&#8239; is narrow space character
const appName = import.meta.env.VITE_APP_NAME || "Laptop&#8239;POS";

createInertiaApp({
  title: (title) => (title ? `${title}&#8239;-&#8239;${appName}` : appName),
  resolve: (name) =>
    resolvePageComponent(
      `./Pages/${name}.tsx`,
      import.meta.glob("./Pages/**/*.tsx")
    ),
  setup({ el, App, props }) {
    const root = createRoot(el);

    root.render(<App {...props} />);
  },
  progress: {
    color: "#115e59",//primary-800
  },
});
