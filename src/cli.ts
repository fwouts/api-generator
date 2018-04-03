import { Command } from "commander";
import fs from "fs-extra";
import { output } from "./generators/io";
import { GenerateOptions, generateTypeScript } from "./generators/typescript";
import { parse } from "./parser";
import { resolve } from "./resolver";

export interface Environment {
  argv: string[];
  info(out: any): void;
  warn(out: any): void;
  error(out: any, e?: Error): void;
}

export function cli(env: Environment) {
  const program = new Command();

  program
    .command("generate <target> <source> <destination>")
    .option("-c, --client <base-url>")
    .option("-s, --server")
    .action(
      (
        target: string,
        source: string,
        destination: string,
        options: {
          client?: string;
          server?: true;
        },
      ) => {
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
              const generateOptions: GenerateOptions = {};
              if (options.client) {
                generateOptions.client = {
                  baseUrl: options.client,
                };
              }
              if (options.server) {
                generateOptions.server = {};
              }
              const generated = generateTypeScript(
                result.definedEndpoints,
                result.definedTypes,
                generateOptions,
              );
              output(generated, destination);
              env.info(`API generated at ${destination}.`);
              break;
            default:
              env.error(`Unknown target: ${target}.`);
          }
        } catch (e) {
          env.error(e);
        }
      },
    );

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
