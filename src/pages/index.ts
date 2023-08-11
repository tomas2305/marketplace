import { lazy } from "react";

export {HomePage} from "./home"

export const LoginPage = lazy(() => import("./login"));
export const CharacterPage = lazy(() => import("./character"));