import { store, persistor } from "./Store/store";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { IntlProvider } from "react-intl";
import ReactDOM from "react-dom/client";
import App from "./App";
import DispLang from "./Components/Shared/DispLang";
import Arabic from "./Languages/ar.json";
import English from "./Languages/en.json";
import "./index.css";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <IntlProvider
    locale={DispLang ? "ar" : "en"}
    messages={DispLang ? Arabic : English}
  >
    <BrowserRouter>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    </BrowserRouter>
  </IntlProvider>
);
