// Generated from src/grammar/ApiDef.g4 by ANTLR 4.6-SNAPSHOT

import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

export class ApiDefParser extends Parser {
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
  public static readonly NAME = 15;
  public static readonly WS = 16;
  public static readonly RULE_api = 0;
  public static readonly RULE_endpoint = 1;
  public static readonly RULE_endpointname = 2;
  public static readonly RULE_method = 3;
  public static readonly RULE_route = 4;
  public static readonly RULE_subpath = 5;
  public static readonly RULE_typedef = 6;
  public static readonly RULE_union = 7;
  public static readonly RULE_singletype = 8;
  public static readonly RULE_typename = 9;
  public static readonly RULE_struct = 10;
  public static readonly RULE_structfield = 11;
  public static readonly RULE_fieldname = 12;
  public static readonly ruleNames: string[] = [
    "api",
    "endpoint",
    "endpointname",
    "method",
    "route",
    "subpath",
    "typedef",
    "union",
    "singletype",
    "typename",
    "struct",
    "structfield",
    "fieldname",
  ];

  private static readonly _LITERAL_NAMES: (string | undefined)[] = [
    undefined,
    "'endpoint'",
    "':'",
    "'->'",
    "';'",
    "'GET'",
    "'POST'",
    "'PUT'",
    "'DELETE'",
    "'/'",
    "'type'",
    "'='",
    "'|'",
    "'{'",
    "'}'",
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
    "NAME",
    "WS",
  ];
  public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(
    ApiDefParser._LITERAL_NAMES,
    ApiDefParser._SYMBOLIC_NAMES,
    [],
  );

  @Override
  @NotNull
  public get vocabulary(): Vocabulary {
    return ApiDefParser.VOCABULARY;
  }

  @Override
  public get grammarFileName(): string {
    return "ApiDef.g4";
  }

  @Override
  public get ruleNames(): string[] {
    return ApiDefParser.ruleNames;
  }

  @Override
  public get serializedATN(): string {
    return ApiDefParser._serializedATN;
  }

  constructor(input: TokenStream) {
    super(input);
    this._interp = new ParserATNSimulator(ApiDefParser._ATN, this);
  }

  public api(): ApiContext {
    let _localctx: ApiContext = new ApiContext(this._ctx, this.state);
    this.enterRule(_localctx, 0, ApiDefParser.RULE_api);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 30;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (_la === ApiDefParser.T__0 || _la === ApiDefParser.T__9) {
          {
            this.state = 28;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
              case ApiDefParser.T__0:
                {
                  this.state = 26;
                  this.endpoint();
                }
                break;
              case ApiDefParser.T__9:
                {
                  this.state = 27;
                  this.typedef();
                }
                break;
              default:
                throw new NoViableAltException(this);
            }
          }
          this.state = 32;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        }
        this.state = 33;
        this.match(ApiDefParser.EOF);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }

  public endpoint(): EndpointContext {
    let _localctx: EndpointContext = new EndpointContext(this._ctx, this.state);
    this.enterRule(_localctx, 2, ApiDefParser.RULE_endpoint);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 35;
        this.match(ApiDefParser.T__0);
        this.state = 36;
        this.endpointname();
        this.state = 37;
        this.match(ApiDefParser.T__1);
        this.state = 38;
        this.method();
        this.state = 39;
        this.route();
        this.state = 40;
        this.typename();
        this.state = 41;
        this.match(ApiDefParser.T__2);
        this.state = 42;
        this.typename();
        this.state = 43;
        this.match(ApiDefParser.T__3);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }

  public endpointname(): EndpointnameContext {
    let _localctx: EndpointnameContext = new EndpointnameContext(
      this._ctx,
      this.state,
    );
    this.enterRule(_localctx, 4, ApiDefParser.RULE_endpointname);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 45;
        this.match(ApiDefParser.NAME);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }

  public method(): MethodContext {
    let _localctx: MethodContext = new MethodContext(this._ctx, this.state);
    this.enterRule(_localctx, 6, ApiDefParser.RULE_method);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 47;
        _la = this._input.LA(1);
        if (
          !(
            (_la & ~0x1f) === 0 &&
            ((1 << _la) &
              ((1 << ApiDefParser.T__4) |
                (1 << ApiDefParser.T__5) |
                (1 << ApiDefParser.T__6) |
                (1 << ApiDefParser.T__7))) !==
              0
          )
        ) {
          this._errHandler.recoverInline(this);
        } else {
          if (this._input.LA(1) === Token.EOF) {
            this.matchedEOF = true;
          }

          this._errHandler.reportMatch(this);
          this.consume();
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }

  public route(): RouteContext {
    let _localctx: RouteContext = new RouteContext(this._ctx, this.state);
    this.enterRule(_localctx, 8, ApiDefParser.RULE_route);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 51;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
          {
            {
              this.state = 49;
              this.match(ApiDefParser.T__8);
              this.state = 50;
              this.subpath();
            }
          }
          this.state = 53;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        } while (_la === ApiDefParser.T__8);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }

  public subpath(): SubpathContext {
    let _localctx: SubpathContext = new SubpathContext(this._ctx, this.state);
    this.enterRule(_localctx, 10, ApiDefParser.RULE_subpath);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 56;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === ApiDefParser.T__1) {
          {
            this.state = 55;
            _localctx._dynamic = this.match(ApiDefParser.T__1);
          }
        }

        this.state = 58;
        this.match(ApiDefParser.NAME);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }

  public typedef(): TypedefContext {
    let _localctx: TypedefContext = new TypedefContext(this._ctx, this.state);
    this.enterRule(_localctx, 12, ApiDefParser.RULE_typedef);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 60;
        this.match(ApiDefParser.T__9);
        this.state = 61;
        this.typename();
        this.state = 62;
        this.match(ApiDefParser.T__10);
        this.state = 63;
        this.union();
        this.state = 64;
        this.match(ApiDefParser.T__3);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }

  public union(): UnionContext {
    let _localctx: UnionContext = new UnionContext(this._ctx, this.state);
    this.enterRule(_localctx, 14, ApiDefParser.RULE_union);
    let _la: number;
    try {
      this.state = 82;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
        case ApiDefParser.T__12:
        case ApiDefParser.NAME:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 66;
            this.singletype();
            this.state = 71;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while (_la === ApiDefParser.T__11) {
              {
                {
                  this.state = 67;
                  this.match(ApiDefParser.T__11);
                  this.state = 68;
                  this.singletype();
                }
              }
              this.state = 73;
              this._errHandler.sync(this);
              _la = this._input.LA(1);
            }
          }
          break;
        case ApiDefParser.T__11:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 74;
            this.match(ApiDefParser.T__11);
            this.state = 75;
            this.singletype();
            this.state = 78;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            do {
              {
                {
                  this.state = 76;
                  this.match(ApiDefParser.T__11);
                  this.state = 77;
                  this.singletype();
                }
              }
              this.state = 80;
              this._errHandler.sync(this);
              _la = this._input.LA(1);
            } while (_la === ApiDefParser.T__11);
          }
          break;
        default:
          throw new NoViableAltException(this);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }

  public singletype(): SingletypeContext {
    let _localctx: SingletypeContext = new SingletypeContext(
      this._ctx,
      this.state,
    );
    this.enterRule(_localctx, 16, ApiDefParser.RULE_singletype);
    try {
      this.state = 86;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
        case ApiDefParser.NAME:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 84;
            this.typename();
          }
          break;
        case ApiDefParser.T__12:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 85;
            this.struct();
          }
          break;
        default:
          throw new NoViableAltException(this);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }

  public typename(): TypenameContext {
    let _localctx: TypenameContext = new TypenameContext(this._ctx, this.state);
    this.enterRule(_localctx, 18, ApiDefParser.RULE_typename);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 88;
        this.match(ApiDefParser.NAME);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }

  public struct(): StructContext {
    let _localctx: StructContext = new StructContext(this._ctx, this.state);
    this.enterRule(_localctx, 20, ApiDefParser.RULE_struct);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 90;
        this.match(ApiDefParser.T__12);
        this.state = 96;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (_la === ApiDefParser.NAME) {
          {
            {
              this.state = 91;
              this.structfield();
              this.state = 92;
              this.match(ApiDefParser.T__3);
            }
          }
          this.state = 98;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        }
        this.state = 99;
        this.match(ApiDefParser.T__13);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }

  public structfield(): StructfieldContext {
    let _localctx: StructfieldContext = new StructfieldContext(
      this._ctx,
      this.state,
    );
    this.enterRule(_localctx, 22, ApiDefParser.RULE_structfield);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 101;
        this.fieldname();
        this.state = 102;
        this.match(ApiDefParser.T__1);
        this.state = 103;
        this.union();
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }

  public fieldname(): FieldnameContext {
    let _localctx: FieldnameContext = new FieldnameContext(
      this._ctx,
      this.state,
    );
    this.enterRule(_localctx, 24, ApiDefParser.RULE_fieldname);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 105;
        this.match(ApiDefParser.NAME);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }

  public static readonly _serializedATN: string = "\x03\uAF6F\u8320\u479D\uB75C\u4880\u1605\u191C\uAB37\x03\x12n\x04\x02" +
    "\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
    "\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
    '\x0E\t\x0E\x03\x02\x03\x02\x07\x02\x1F\n\x02\f\x02\x0E\x02"\v\x02\x03' +
    "\x02\x03\x02\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
    "\x03\x03\x03\x03\x03\x03\x04\x03\x04\x03\x05\x03\x05\x03\x06\x03\x06\x06" +
    "\x066\n\x06\r\x06\x0E\x067\x03\x07\x05\x07;\n\x07\x03\x07\x03\x07\x03" +
    "\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\t\x03\t\x03\t\x07\tH\n\t\f\t\x0E" +
    "\tK\v\t\x03\t\x03\t\x03\t\x03\t\x06\tQ\n\t\r\t\x0E\tR\x05\tU\n\t\x03\n" +
    "\x03\n\x05\nY\n\n\x03\v\x03\v\x03\f\x03\f\x03\f\x03\f\x07\fa\n\f\f\f\x0E" +
    "\fd\v\f\x03\f\x03\f\x03\r\x03\r\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0E\x02" +
    "\x02\x02\x0F\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02" +
    "\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x02\x03\x03\x02\x07\ni\x02 \x03" +
    "\x02\x02\x02\x04%\x03\x02\x02\x02\x06/\x03\x02\x02\x02\b1\x03\x02\x02" +
    "\x02\n5\x03\x02\x02\x02\f:\x03\x02\x02\x02\x0E>\x03\x02\x02\x02\x10T\x03" +
    "\x02\x02\x02\x12X\x03\x02\x02\x02\x14Z\x03\x02\x02\x02\x16\\\x03\x02\x02" +
    "\x02\x18g\x03\x02\x02\x02\x1Ak\x03\x02\x02\x02\x1C\x1F\x05\x04\x03\x02" +
    "\x1D\x1F\x05\x0E\b\x02\x1E\x1C\x03\x02\x02\x02\x1E\x1D\x03\x02\x02\x02" +
    '\x1F"\x03\x02\x02\x02 \x1E\x03\x02\x02\x02 !\x03\x02\x02\x02!#\x03\x02' +
    '\x02\x02" \x03\x02\x02\x02#$\x07\x02\x02\x03$\x03\x03\x02\x02\x02%&\x07' +
    "\x03\x02\x02&'\x05\x06\x04\x02'(\x07\x04\x02\x02()\x05\b\x05\x02)*\x05" +
    "\n\x06\x02*+\x05\x14\v\x02+,\x07\x05\x02\x02,-\x05\x14\v\x02-.\x07\x06" +
    "\x02\x02.\x05\x03\x02\x02\x02/0\x07\x11\x02\x020\x07\x03\x02\x02\x021" +
    "2\t\x02\x02\x022\t\x03\x02\x02\x0234\x07\v\x02\x0246\x05\f\x07\x0253\x03" +
    "\x02\x02\x0267\x03\x02\x02\x0275\x03\x02\x02\x0278\x03\x02\x02\x028\v" +
    "\x03\x02\x02\x029;\x07\x04\x02\x02:9\x03\x02\x02\x02:;\x03\x02\x02\x02" +
    ";<\x03\x02\x02\x02<=\x07\x11\x02\x02=\r\x03\x02\x02\x02>?\x07\f\x02\x02" +
    "?@\x05\x14\v\x02@A\x07\r\x02\x02AB\x05\x10\t\x02BC\x07\x06\x02\x02C\x0F" +
    "\x03\x02\x02\x02DI\x05\x12\n\x02EF\x07\x0E\x02\x02FH\x05\x12\n\x02GE\x03" +
    "\x02\x02\x02HK\x03\x02\x02\x02IG\x03\x02\x02\x02IJ\x03\x02\x02\x02JU\x03" +
    "\x02\x02\x02KI\x03\x02\x02\x02LM\x07\x0E\x02\x02MP\x05\x12\n\x02NO\x07" +
    "\x0E\x02\x02OQ\x05\x12\n\x02PN\x03\x02\x02\x02QR\x03\x02\x02\x02RP\x03" +
    "\x02\x02\x02RS\x03\x02\x02\x02SU\x03\x02\x02\x02TD\x03\x02\x02\x02TL\x03" +
    "\x02\x02\x02U\x11\x03\x02\x02\x02VY\x05\x14\v\x02WY\x05\x16\f\x02XV\x03" +
    "\x02\x02\x02XW\x03\x02\x02\x02Y\x13\x03\x02\x02\x02Z[\x07\x11\x02\x02" +
    "[\x15\x03\x02\x02\x02\\b\x07\x0F\x02\x02]^\x05\x18\r\x02^_\x07\x06\x02" +
    "\x02_a\x03\x02\x02\x02`]\x03\x02\x02\x02ad\x03\x02\x02\x02b`\x03\x02\x02" +
    "\x02bc\x03\x02\x02\x02ce\x03\x02\x02\x02db\x03\x02\x02\x02ef\x07\x10\x02" +
    "\x02f\x17\x03\x02\x02\x02gh\x05\x1A\x0E\x02hi\x07\x04\x02\x02ij\x05\x10" +
    "\t\x02j\x19\x03\x02\x02\x02kl\x07\x11\x02\x02l\x1B\x03\x02\x02\x02\v\x1E" +
    " 7:IRTXb";
  public static __ATN: ATN;
  public static get _ATN(): ATN {
    if (!ApiDefParser.__ATN) {
      ApiDefParser.__ATN = new ATNDeserializer().deserialize(
        Utils.toCharArray(ApiDefParser._serializedATN),
      );
    }

    return ApiDefParser.__ATN;
  }
}

export class ApiContext extends ParserRuleContext {
  public EOF(): TerminalNode {
    return this.getToken(ApiDefParser.EOF, 0);
  }
  public endpoint(): EndpointContext[];
  public endpoint(i: number): EndpointContext;
  public endpoint(i?: number): EndpointContext | EndpointContext[] {
    if (i === undefined) {
      return this.getRuleContexts(EndpointContext);
    } else {
      return this.getRuleContext(i, EndpointContext);
    }
  }
  public typedef(): TypedefContext[];
  public typedef(i: number): TypedefContext;
  public typedef(i?: number): TypedefContext | TypedefContext[] {
    if (i === undefined) {
      return this.getRuleContexts(TypedefContext);
    } else {
      return this.getRuleContext(i, TypedefContext);
    }
  }
  constructor(parent: ParserRuleContext, invokingState: number);
  constructor(parent: ParserRuleContext, invokingState: number) {
    super(parent, invokingState);
  }
  @Override
  public get ruleIndex(): number {
    return ApiDefParser.RULE_api;
  }
}

export class EndpointContext extends ParserRuleContext {
  public endpointname(): EndpointnameContext {
    return this.getRuleContext(0, EndpointnameContext);
  }
  public method(): MethodContext {
    return this.getRuleContext(0, MethodContext);
  }
  public route(): RouteContext {
    return this.getRuleContext(0, RouteContext);
  }
  public typename(): TypenameContext[];
  public typename(i: number): TypenameContext;
  public typename(i?: number): TypenameContext | TypenameContext[] {
    if (i === undefined) {
      return this.getRuleContexts(TypenameContext);
    } else {
      return this.getRuleContext(i, TypenameContext);
    }
  }
  constructor(parent: ParserRuleContext, invokingState: number);
  constructor(parent: ParserRuleContext, invokingState: number) {
    super(parent, invokingState);
  }
  @Override
  public get ruleIndex(): number {
    return ApiDefParser.RULE_endpoint;
  }
}

export class EndpointnameContext extends ParserRuleContext {
  public NAME(): TerminalNode {
    return this.getToken(ApiDefParser.NAME, 0);
  }
  constructor(parent: ParserRuleContext, invokingState: number);
  constructor(parent: ParserRuleContext, invokingState: number) {
    super(parent, invokingState);
  }
  @Override
  public get ruleIndex(): number {
    return ApiDefParser.RULE_endpointname;
  }
}

export class MethodContext extends ParserRuleContext {
  constructor(parent: ParserRuleContext, invokingState: number);
  constructor(parent: ParserRuleContext, invokingState: number) {
    super(parent, invokingState);
  }
  @Override
  public get ruleIndex(): number {
    return ApiDefParser.RULE_method;
  }
}

export class RouteContext extends ParserRuleContext {
  public subpath(): SubpathContext[];
  public subpath(i: number): SubpathContext;
  public subpath(i?: number): SubpathContext | SubpathContext[] {
    if (i === undefined) {
      return this.getRuleContexts(SubpathContext);
    } else {
      return this.getRuleContext(i, SubpathContext);
    }
  }
  constructor(parent: ParserRuleContext, invokingState: number);
  constructor(parent: ParserRuleContext, invokingState: number) {
    super(parent, invokingState);
  }
  @Override
  public get ruleIndex(): number {
    return ApiDefParser.RULE_route;
  }
}

export class SubpathContext extends ParserRuleContext {
  public _dynamic!: Token;
  public NAME(): TerminalNode {
    return this.getToken(ApiDefParser.NAME, 0);
  }
  constructor(parent: ParserRuleContext, invokingState: number);
  constructor(parent: ParserRuleContext, invokingState: number) {
    super(parent, invokingState);
  }
  @Override
  public get ruleIndex(): number {
    return ApiDefParser.RULE_subpath;
  }
}

export class TypedefContext extends ParserRuleContext {
  public typename(): TypenameContext {
    return this.getRuleContext(0, TypenameContext);
  }
  public union(): UnionContext {
    return this.getRuleContext(0, UnionContext);
  }
  constructor(parent: ParserRuleContext, invokingState: number);
  constructor(parent: ParserRuleContext, invokingState: number) {
    super(parent, invokingState);
  }
  @Override
  public get ruleIndex(): number {
    return ApiDefParser.RULE_typedef;
  }
}

export class UnionContext extends ParserRuleContext {
  public singletype(): SingletypeContext[];
  public singletype(i: number): SingletypeContext;
  public singletype(i?: number): SingletypeContext | SingletypeContext[] {
    if (i === undefined) {
      return this.getRuleContexts(SingletypeContext);
    } else {
      return this.getRuleContext(i, SingletypeContext);
    }
  }
  constructor(parent: ParserRuleContext, invokingState: number);
  constructor(parent: ParserRuleContext, invokingState: number) {
    super(parent, invokingState);
  }
  @Override
  public get ruleIndex(): number {
    return ApiDefParser.RULE_union;
  }
}

export class SingletypeContext extends ParserRuleContext {
  public typename(): TypenameContext | undefined {
    return this.tryGetRuleContext(0, TypenameContext);
  }
  public struct(): StructContext | undefined {
    return this.tryGetRuleContext(0, StructContext);
  }
  constructor(parent: ParserRuleContext, invokingState: number);
  constructor(parent: ParserRuleContext, invokingState: number) {
    super(parent, invokingState);
  }
  @Override
  public get ruleIndex(): number {
    return ApiDefParser.RULE_singletype;
  }
}

export class TypenameContext extends ParserRuleContext {
  public NAME(): TerminalNode {
    return this.getToken(ApiDefParser.NAME, 0);
  }
  constructor(parent: ParserRuleContext, invokingState: number);
  constructor(parent: ParserRuleContext, invokingState: number) {
    super(parent, invokingState);
  }
  @Override
  public get ruleIndex(): number {
    return ApiDefParser.RULE_typename;
  }
}

export class StructContext extends ParserRuleContext {
  public structfield(): StructfieldContext[];
  public structfield(i: number): StructfieldContext;
  public structfield(i?: number): StructfieldContext | StructfieldContext[] {
    if (i === undefined) {
      return this.getRuleContexts(StructfieldContext);
    } else {
      return this.getRuleContext(i, StructfieldContext);
    }
  }
  constructor(parent: ParserRuleContext, invokingState: number);
  constructor(parent: ParserRuleContext, invokingState: number) {
    super(parent, invokingState);
  }
  @Override
  public get ruleIndex(): number {
    return ApiDefParser.RULE_struct;
  }
}

export class StructfieldContext extends ParserRuleContext {
  public fieldname(): FieldnameContext {
    return this.getRuleContext(0, FieldnameContext);
  }
  public union(): UnionContext {
    return this.getRuleContext(0, UnionContext);
  }
  constructor(parent: ParserRuleContext, invokingState: number);
  constructor(parent: ParserRuleContext, invokingState: number) {
    super(parent, invokingState);
  }
  @Override
  public get ruleIndex(): number {
    return ApiDefParser.RULE_structfield;
  }
}

export class FieldnameContext extends ParserRuleContext {
  public NAME(): TerminalNode {
    return this.getToken(ApiDefParser.NAME, 0);
  }
  constructor(parent: ParserRuleContext, invokingState: number);
  constructor(parent: ParserRuleContext, invokingState: number) {
    super(parent, invokingState);
  }
  @Override
  public get ruleIndex(): number {
    return ApiDefParser.RULE_fieldname;
  }
}
