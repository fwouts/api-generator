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
  public static readonly T__7 = 8;
  public static readonly T__8 = 9;
  public static readonly T__9 = 10;
  public static readonly T__10 = 11;
  public static readonly T__11 = 12;
  public static readonly T__12 = 13;
  public static readonly T__13 = 14;
  public static readonly T__14 = 15;
  public static readonly T__15 = 16;
  public static readonly T__16 = 17;
  public static readonly NAME = 18;
  public static readonly LINEBREAK = 19;
  public static readonly WHITESPACE = 20;
  public static readonly modeNames: string[] = ["DEFAULT_MODE"];

  public static readonly ruleNames: string[] = [
    "T__0",
    "T__1",
    "T__2",
    "T__3",
    "T__4",
    "T__5",
    "T__6",
    "T__7",
    "T__8",
    "T__9",
    "T__10",
    "T__11",
    "T__12",
    "T__13",
    "T__14",
    "T__15",
    "T__16",
    "NAME",
    "LINEBREAK",
    "WHITESPACE",
  ];

  private static readonly _LITERAL_NAMES: (string | undefined)[] = [
    undefined,
    "'endpoint'",
    "':'",
    "'->'",
    "'GET'",
    "'POST'",
    "'PUT'",
    "'DELETE'",
    "'/'",
    "'type'",
    "'='",
    "'|'",
    "'[]'",
    "'{'",
    "'}'",
    "'?'",
    "'@'",
    "';'",
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
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    "NAME",
    "LINEBREAK",
    "WHITESPACE",
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

  public static readonly _serializedATN: string = "\x03\uAF6F\u8320\u479D\uB75C\u4880\u1605\u191C\uAB37\x02\x16u\b\x01\x04" +
    "\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04" +
    "\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r" +
    "\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12" +
    "\x04\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x03\x02\x03\x02\x03\x02\x03" +
    "\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03\x04\x03" +
    "\x04\x03\x04\x03\x05\x03\x05\x03\x05\x03\x05\x03\x06\x03\x06\x03\x06\x03" +
    "\x06\x03\x06\x03\x07\x03\x07\x03\x07\x03\x07\x03\b\x03\b\x03\b\x03\b\x03" +
    "\b\x03\b\x03\b\x03\t\x03\t\x03\n\x03\n\x03\n\x03\n\x03\n\x03\v\x03\v\x03" +
    "\f\x03\f\x03\r\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x10\x03" +
    "\x10\x03\x11\x03\x11\x03\x12\x03\x12\x03\x13\x03\x13\x07\x13h\n\x13\f" +
    "\x13\x0E\x13k\v\x13\x03\x14\x03\x14\x03\x15\x06\x15p\n\x15\r\x15\x0E\x15" +
    "q\x03\x15\x03\x15\x02\x02\x02\x16\x03\x02\x03\x05\x02\x04\x07\x02\x05" +
    "\t\x02\x06\v\x02\x07\r\x02\b\x0F\x02\t\x11\x02\n\x13\x02\v\x15\x02\f\x17" +
    "\x02\r\x19\x02\x0E\x1B\x02\x0F\x1D\x02\x10\x1F\x02\x11!\x02\x12#\x02\x13" +
    "%\x02\x14'\x02\x15)\x02\x16\x03\x02\x06\x04\x02C\\c|\x05\x022;C\\c|\x04" +
    '\x02\f\f\x0F\x0F\x05\x02\v\v\x0E\x0E""v\x02\x03\x03\x02\x02\x02\x02' +
    "\x05\x03\x02\x02\x02\x02\x07\x03\x02\x02\x02\x02\t\x03\x02\x02\x02\x02" +
    "\v\x03\x02\x02\x02\x02\r\x03\x02\x02\x02\x02\x0F\x03\x02\x02\x02\x02\x11" +
    "\x03\x02\x02\x02\x02\x13\x03\x02\x02\x02\x02\x15\x03\x02\x02\x02\x02\x17" +
    "\x03\x02\x02\x02\x02\x19\x03\x02\x02\x02\x02\x1B\x03\x02\x02\x02\x02\x1D" +
    "\x03\x02\x02\x02\x02\x1F\x03\x02\x02\x02\x02!\x03\x02\x02\x02\x02#\x03" +
    "\x02\x02\x02\x02%\x03\x02\x02\x02\x02'\x03\x02\x02\x02\x02)\x03\x02\x02" +
    "\x02\x03+\x03\x02\x02\x02\x054\x03\x02\x02\x02\x076\x03\x02\x02\x02\t" +
    "9\x03\x02\x02\x02\v=\x03\x02\x02\x02\rB\x03\x02\x02\x02\x0FF\x03\x02\x02" +
    "\x02\x11M\x03\x02\x02\x02\x13O\x03\x02\x02\x02\x15T\x03\x02\x02\x02\x17" +
    "V\x03\x02\x02\x02\x19X\x03\x02\x02\x02\x1B[\x03\x02\x02\x02\x1D]\x03\x02" +
    "\x02\x02\x1F_\x03\x02\x02\x02!a\x03\x02\x02\x02#c\x03\x02\x02\x02%e\x03" +
    "\x02\x02\x02'l\x03\x02\x02\x02)o\x03\x02\x02\x02+,\x07g\x02\x02,-\x07" +
    "p\x02\x02-.\x07f\x02\x02./\x07r\x02\x02/0\x07q\x02\x0201\x07k\x02\x02" +
    "12\x07p\x02\x0223\x07v\x02\x023\x04\x03\x02\x02\x0245\x07<\x02\x025\x06" +
    "\x03\x02\x02\x0267\x07/\x02\x0278\x07@\x02\x028\b\x03\x02\x02\x029:\x07" +
    "I\x02\x02:;\x07G\x02\x02;<\x07V\x02\x02<\n\x03\x02\x02\x02=>\x07R\x02" +
    "\x02>?\x07Q\x02\x02?@\x07U\x02\x02@A\x07V\x02\x02A\f\x03\x02\x02\x02B" +
    "C\x07R\x02\x02CD\x07W\x02\x02DE\x07V\x02\x02E\x0E\x03\x02\x02\x02FG\x07" +
    "F\x02\x02GH\x07G\x02\x02HI\x07N\x02\x02IJ\x07G\x02\x02JK\x07V\x02\x02" +
    "KL\x07G\x02\x02L\x10\x03\x02\x02\x02MN\x071\x02\x02N\x12\x03\x02\x02\x02" +
    "OP\x07v\x02\x02PQ\x07{\x02\x02QR\x07r\x02\x02RS\x07g\x02\x02S\x14\x03" +
    "\x02\x02\x02TU\x07?\x02\x02U\x16\x03\x02\x02\x02VW\x07~\x02\x02W\x18\x03" +
    "\x02\x02\x02XY\x07]\x02\x02YZ\x07_\x02\x02Z\x1A\x03\x02\x02\x02[\\\x07" +
    "}\x02\x02\\\x1C\x03\x02\x02\x02]^\x07\x7F\x02\x02^\x1E\x03\x02\x02\x02" +
    '_`\x07A\x02\x02` \x03\x02\x02\x02ab\x07B\x02\x02b"\x03\x02\x02\x02cd' +
    "\x07=\x02\x02d$\x03\x02\x02\x02ei\t\x02\x02\x02fh\t\x03\x02\x02gf\x03" +
    "\x02\x02\x02hk\x03\x02\x02\x02ig\x03\x02\x02\x02ij\x03\x02\x02\x02j&\x03" +
    "\x02\x02\x02ki\x03\x02\x02\x02lm\t\x04\x02\x02m(\x03\x02\x02\x02np\t\x05" +
    "\x02\x02on\x03\x02\x02\x02pq\x03\x02\x02\x02qo\x03\x02\x02\x02qr\x03\x02" +
    "\x02\x02rs\x03\x02\x02\x02st\b\x15\x02\x02t*\x03\x02\x02\x02\x05\x02i" +
    "q\x03\b\x02\x02";
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
