import program from "commander";
import * as fs from "fs";
import { generateTypeScript } from "./generators/typescript";
import { parse } from "./parser";
import { resolve } from "./resolver";

export interface Environment {
  argv: string[];
  info(out: any): void;
  warn(out: any): void;
  error(out: any, e?: Error): void;
}

export function cli(env: Environment) {
  program
    .command("generate <target> <source>")
    .action((target: string, source: string, options: {}) => {
      try {
        if (!fs.existsSync(source)) {
          env.error(`No such file: ${source}.`);
          return;
        }
        const input = fs.readFileSync(source, "utf8");
        const api = parse(input);
        switch (target) {
          case "typescript":
            const result = resolve(api);
            if (result.kind === "failure") {
              env.error(result.errors.join("\n"));
              break;
            }
            const generated = generateTypeScript(result.definedTypes);
            env.info(generated);
            break;
          default:
            env.error(`Unknown target: ${target}.`);
        }
      } catch (e) {
        env.error(e);
      }
    });

  program.command("*").action((command) => {
    env.error(`Unknown command: ${command}.`);
  });

  // Evaluate CLI arguments.
  program.parse(env.argv);
}

if (require.main === module) {
  cli({
    argv: process.argv,
    info: console.log,
    warn: console.warn,
    error: (out: any, e?: Error) => {
      if (e) {
        // tslint:disable-next-line no-console
        console.error(out, e);
      } else {
        // tslint:disable-next-line no-console
        console.error(out);
      }
      process.exitCode = 1;
    },
  });
}
