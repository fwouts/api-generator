// Generated from src/grammar/ApiDef.g4 by ANTLR 4.6-SNAPSHOT

import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { CharStream } from "antlr4ts/CharStream";
import { Lexer } from "antlr4ts/Lexer";
import { LexerATNSimulator } from "antlr4ts/atn/LexerATNSimulator";
import { NotNull } from "antlr4ts/Decorators";
import { Override } from "antlr4ts/Decorators";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

export class ApiDefLexer extends Lexer {
  public static readonly T__0 = 1;
  public static readonly T__1 = 2;
  public static readonly T__2 = 3;
  public static readonly T__3 = 4;
  public static readonly T__4 = 5;
  public static readonly T__5 = 6;
  public static readonly T__6 = 7;
  public static readonly NAME = 8;
  public static readonly WS = 9;
  public static readonly modeNames: string[] = ["DEFAULT_MODE"];

  public static readonly ruleNames: string[] = [
    "T__0",
    "T__1",
    "T__2",
    "T__3",
    "T__4",
    "T__5",
    "T__6",
    "NAME",
    "WS",
  ];

  private static readonly _LITERAL_NAMES: (string | undefined)[] = [
    undefined,
    "'type'",
    "'='",
    "';'",
    "'|'",
    "'{'",
    "'}'",
    "':'",
  ];
  private static readonly _SYMBOLIC_NAMES: (string | undefined)[] = [
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    "NAME",
    "WS",
  ];
  public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(
    ApiDefLexer._LITERAL_NAMES,
    ApiDefLexer._SYMBOLIC_NAMES,
    [],
  );

  @Override
  @NotNull
  public get vocabulary(): Vocabulary {
    return ApiDefLexer.VOCABULARY;
  }

  constructor(input: CharStream) {
    super(input);
    this._interp = new LexerATNSimulator(ApiDefLexer._ATN, this);
  }

  @Override
  public get grammarFileName(): string {
    return "ApiDef.g4";
  }

  @Override
  public get ruleNames(): string[] {
    return ApiDefLexer.ruleNames;
  }

  @Override
  public get serializedATN(): string {
    return ApiDefLexer._serializedATN;
  }

  @Override
  public get modeNames(): string[] {
    return ApiDefLexer.modeNames;
  }

  public static readonly _serializedATN: string = "\x03\uAF6F\u8320\u479D\uB75C\u4880\u1605\u191C\uAB37\x02\v4\b\x01\x04" +
    "\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04" +
    "\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x03\x02\x03\x02\x03\x02\x03\x02" +
    "\x03\x02\x03\x03\x03\x03\x03\x04\x03\x04\x03\x05\x03\x05\x03\x06\x03\x06" +
    "\x03\x07\x03\x07\x03\b\x03\b\x03\t\x03\t\x07\t)\n\t\f\t\x0E\t,\v\t\x03" +
    "\n\x06\n/\n\n\r\n\x0E\n0\x03\n\x03\n\x02\x02\x02\v\x03\x02\x03\x05\x02" +
    "\x04\x07\x02\x05\t\x02\x06\v\x02\x07\r\x02\b\x0F\x02\t\x11\x02\n\x13\x02" +
    '\v\x03\x02\x05\x04\x02C\\c|\x05\x022;C\\c|\x05\x02\v\f\x0E\x0F""5\x02' +
    "\x03\x03\x02\x02\x02\x02\x05\x03\x02\x02\x02\x02\x07\x03\x02\x02\x02\x02" +
    "\t\x03\x02\x02\x02\x02\v\x03\x02\x02\x02\x02\r\x03\x02\x02\x02\x02\x0F" +
    "\x03\x02\x02\x02\x02\x11\x03\x02\x02\x02\x02\x13\x03\x02\x02\x02\x03\x15" +
    "\x03\x02\x02\x02\x05\x1A\x03\x02\x02\x02\x07\x1C\x03\x02\x02\x02\t\x1E" +
    '\x03\x02\x02\x02\v \x03\x02\x02\x02\r"\x03\x02\x02\x02\x0F$\x03\x02\x02' +
    "\x02\x11&\x03\x02\x02\x02\x13.\x03\x02\x02\x02\x15\x16\x07v\x02\x02\x16" +
    "\x17\x07{\x02\x02\x17\x18\x07r\x02\x02\x18\x19\x07g\x02\x02\x19\x04\x03" +
    "\x02\x02\x02\x1A\x1B\x07?\x02\x02\x1B\x06\x03\x02\x02\x02\x1C\x1D\x07" +
    "=\x02\x02\x1D\b\x03\x02\x02\x02\x1E\x1F\x07~\x02\x02\x1F\n\x03\x02\x02" +
    '\x02 !\x07}\x02\x02!\f\x03\x02\x02\x02"#\x07\x7F\x02\x02#\x0E\x03\x02' +
    "\x02\x02$%\x07<\x02\x02%\x10\x03\x02\x02\x02&*\t\x02\x02\x02')\t\x03" +
    "\x02\x02('\x03\x02\x02\x02),\x03\x02\x02\x02*(\x03\x02\x02\x02*+\x03" +
    "\x02\x02\x02+\x12\x03\x02\x02\x02,*\x03\x02\x02\x02-/\t\x04\x02\x02.-" +
    "\x03\x02\x02\x02/0\x03\x02\x02\x020.\x03\x02\x02\x0201\x03\x02\x02\x02" +
    "12\x03\x02\x02\x0223\b\n\x02\x023\x14\x03\x02\x02\x02\x05\x02*0\x03\b" +
    "\x02\x02";
  public static __ATN: ATN;
  public static get _ATN(): ATN {
    if (!ApiDefLexer.__ATN) {
      ApiDefLexer.__ATN = new ATNDeserializer().deserialize(
        Utils.toCharArray(ApiDefLexer._serializedATN),
      );
    }

    return ApiDefLexer.__ATN;
  }
}
