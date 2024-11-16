import type { Config } from "jest";
import { pathsToModuleNameMapper } from "ts-jest";
import * as tsConfigPaths from "./tsconfig.paths.json";

const config: Config = {
  preset: "ts-jest",
  testEnvironment: "node",
  moduleNameMapper: pathsToModuleNameMapper(
    tsConfigPaths.compilerOptions.paths,
    { prefix: "<rootDir>/" }
  ),
  moduleDirectories: ["node_modules", "src", "test"],
  roots: ["<rootDir>/test"],
};

export default config;
