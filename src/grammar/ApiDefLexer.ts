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
  public static readonly STRING = 9;
  public static readonly WS = 10;
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
    "STRING",
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
    "STRING",
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

  public static readonly _serializedATN: string = "\x03\uAF6F\u8320\u479D\uB75C\u4880\u1605\u191C\uAB37\x02\f?\b\x01\x04" +
    "\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04" +
    "\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x03\x02\x03\x02\x03" +
    "\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03\x04\x03\x04\x03\x05\x03\x05\x03" +
    "\x06\x03\x06\x03\x07\x03\x07\x03\b\x03\b\x03\t\x03\t\x07\t+\n\t\f\t\x0E" +
    "\t.\v\t\x03\n\x03\n\x07\n2\n\n\f\n\x0E\n5\v\n\x03\n\x03\n\x03\v\x06\v" +
    ":\n\v\r\v\x0E\v;\x03\v\x03\v\x02\x02\x02\f\x03\x02\x03\x05\x02\x04\x07" +
    "\x02\x05\t\x02\x06\v\x02\x07\r\x02\b\x0F\x02\t\x11\x02\n\x13\x02\v\x15" +
    "\x02\f\x03\x02\x06\x04\x02C\\c|\x05\x022;C\\c|\x03\x02$$\x05\x02\v\f\x0E" +
    '\x0F""A\x02\x03\x03\x02\x02\x02\x02\x05\x03\x02\x02\x02\x02\x07\x03' +
    "\x02\x02\x02\x02\t\x03\x02\x02\x02\x02\v\x03\x02\x02\x02\x02\r\x03\x02" +
    "\x02\x02\x02\x0F\x03\x02\x02\x02\x02\x11\x03\x02\x02\x02\x02\x13\x03\x02" +
    "\x02\x02\x02\x15\x03\x02\x02\x02\x03\x17\x03\x02\x02\x02\x05\x1C\x03\x02" +
    '\x02\x02\x07\x1E\x03\x02\x02\x02\t \x03\x02\x02\x02\v"\x03\x02\x02\x02' +
    "\r$\x03\x02\x02\x02\x0F&\x03\x02\x02\x02\x11(\x03\x02\x02\x02\x13/\x03" +
    "\x02\x02\x02\x159\x03\x02\x02\x02\x17\x18\x07v\x02\x02\x18\x19\x07{\x02" +
    "\x02\x19\x1A\x07r\x02\x02\x1A\x1B\x07g\x02\x02\x1B\x04\x03\x02\x02\x02" +
    "\x1C\x1D\x07?\x02\x02\x1D\x06\x03\x02\x02\x02\x1E\x1F\x07=\x02\x02\x1F" +
    '\b\x03\x02\x02\x02 !\x07~\x02\x02!\n\x03\x02\x02\x02"#\x07}\x02\x02#' +
    "\f\x03\x02\x02\x02$%\x07\x7F\x02\x02%\x0E\x03\x02\x02\x02&'\x07<\x02" +
    "\x02'\x10\x03\x02\x02\x02(,\t\x02\x02\x02)+\t\x03\x02\x02*)\x03\x02\x02" +
    "\x02+.\x03\x02\x02\x02,*\x03\x02\x02\x02,-\x03\x02\x02\x02-\x12\x03\x02" +
    "\x02\x02.,\x03\x02\x02\x02/3\x07$\x02\x0202\n\x04\x02\x0210\x03\x02\x02" +
    "\x0225\x03\x02\x02\x0231\x03\x02\x02\x0234\x03\x02\x02\x0246\x03\x02\x02" +
    "\x0253\x03\x02\x02\x0267\x07$\x02\x027\x14\x03\x02\x02\x028:\t\x05\x02" +
    "\x0298\x03\x02\x02\x02:;\x03\x02\x02\x02;9\x03\x02\x02\x02;<\x03\x02\x02" +
    "\x02<=\x03\x02\x02\x02=>\b\v\x02\x02>\x16\x03\x02\x02\x02\x06\x02,3;\x03" +
    "\b\x02\x02";
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
