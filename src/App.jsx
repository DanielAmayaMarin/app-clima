import { BrowserName } from "./helpers/utils";
import {Clima} from "./components/Clima";
import { BrowserLock } from "./components/BrowserLock";

export const App = () => {
  return (
    <>
      {BrowserName() !== "Chrome" && <BrowserLock />}
      {BrowserName() === "Chrome" && <Clima />}
    </>
  );
};
