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
  public static readonly RULE_name = 13;
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
    "name",
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
        this.state = 32;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (_la === ApiDefParser.T__0 || _la === ApiDefParser.T__9) {
          {
            this.state = 30;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
              case ApiDefParser.T__0:
                {
                  this.state = 28;
                  this.endpoint();
                }
                break;
              case ApiDefParser.T__9:
                {
                  this.state = 29;
                  this.typedef();
                }
                break;
              default:
                throw new NoViableAltException(this);
            }
          }
          this.state = 34;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        }
        this.state = 35;
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
        this.state = 37;
        this.match(ApiDefParser.T__0);
        this.state = 38;
        this.endpointname();
        this.state = 39;
        this.match(ApiDefParser.T__1);
        this.state = 40;
        this.method();
        this.state = 41;
        this.route();
        this.state = 42;
        this.typename();
        this.state = 43;
        this.match(ApiDefParser.T__2);
        this.state = 44;
        this.typename();
        this.state = 45;
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
        this.state = 47;
        this.name();
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
        this.state = 49;
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
        this.state = 53;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
          {
            {
              this.state = 51;
              this.match(ApiDefParser.T__8);
              this.state = 52;
              this.subpath();
            }
          }
          this.state = 55;
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
        this.state = 58;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === ApiDefParser.T__1) {
          {
            this.state = 57;
            _localctx._dynamic = this.match(ApiDefParser.T__1);
          }
        }

        this.state = 60;
        this.name();
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
        this.state = 62;
        this.match(ApiDefParser.T__9);
        this.state = 63;
        this.typename();
        this.state = 64;
        this.match(ApiDefParser.T__10);
        this.state = 65;
        this.union();
        this.state = 66;
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
      this.state = 84;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
        case ApiDefParser.T__0:
        case ApiDefParser.T__9:
        case ApiDefParser.T__12:
        case ApiDefParser.NAME:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 68;
            this.singletype();
            this.state = 73;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while (_la === ApiDefParser.T__11) {
              {
                {
                  this.state = 69;
                  this.match(ApiDefParser.T__11);
                  this.state = 70;
                  this.singletype();
                }
              }
              this.state = 75;
              this._errHandler.sync(this);
              _la = this._input.LA(1);
            }
          }
          break;
        case ApiDefParser.T__11:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 76;
            this.match(ApiDefParser.T__11);
            this.state = 77;
            this.singletype();
            this.state = 80;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            do {
              {
                {
                  this.state = 78;
                  this.match(ApiDefParser.T__11);
                  this.state = 79;
                  this.singletype();
                }
              }
              this.state = 82;
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
      this.state = 88;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
        case ApiDefParser.T__0:
        case ApiDefParser.T__9:
        case ApiDefParser.NAME:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 86;
            this.typename();
          }
          break;
        case ApiDefParser.T__12:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 87;
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
        this.state = 90;
        this.name();
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
        this.state = 92;
        this.match(ApiDefParser.T__12);
        this.state = 98;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (
          (_la & ~0x1f) === 0 &&
          ((1 << _la) &
            ((1 << ApiDefParser.T__0) |
              (1 << ApiDefParser.T__9) |
              (1 << ApiDefParser.NAME))) !==
            0
        ) {
          {
            {
              this.state = 93;
              this.structfield();
              this.state = 94;
              this.match(ApiDefParser.T__3);
            }
          }
          this.state = 100;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        }
        this.state = 101;
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
        this.state = 103;
        this.fieldname();
        this.state = 104;
        this.match(ApiDefParser.T__1);
        this.state = 105;
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
        this.state = 107;
        this.name();
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

  public name(): NameContext {
    let _localctx: NameContext = new NameContext(this._ctx, this.state);
    this.enterRule(_localctx, 26, ApiDefParser.RULE_name);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 109;
        _la = this._input.LA(1);
        if (
          !(
            (_la & ~0x1f) === 0 &&
            ((1 << _la) &
              ((1 << ApiDefParser.T__0) |
                (1 << ApiDefParser.T__9) |
                (1 << ApiDefParser.NAME))) !==
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

  public static readonly _serializedATN: string = "\x03\uAF6F\u8320\u479D\uB75C\u4880\u1605\u191C\uAB37\x03\x12r\x04\x02" +
    "\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
    "\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
    "\x0E\t\x0E\x04\x0F\t\x0F\x03\x02\x03\x02\x07\x02!\n\x02\f\x02\x0E\x02" +
    "$\v\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
    "\x03\x03\x03\x03\x03\x03\x03\x03\x03\x04\x03\x04\x03\x05\x03\x05\x03\x06" +
    "\x03\x06\x06\x068\n\x06\r\x06\x0E\x069\x03\x07\x05\x07=\n\x07\x03\x07" +
    "\x03\x07\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\t\x03\t\x03\t\x07\tJ" +
    "\n\t\f\t\x0E\tM\v\t\x03\t\x03\t\x03\t\x03\t\x06\tS\n\t\r\t\x0E\tT\x05" +
    "\tW\n\t\x03\n\x03\n\x05\n[\n\n\x03\v\x03\v\x03\f\x03\f\x03\f\x03\f\x07" +
    "\fc\n\f\f\f\x0E\ff\v\f\x03\f\x03\f\x03\r\x03\r\x03\r\x03\r\x03\x0E\x03" +
    "\x0E\x03\x0F\x03\x0F\x03\x0F\x02\x02\x02\x10\x02\x02\x04\x02\x06\x02\b" +
    "\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02" +
    '\x1C\x02\x02\x04\x03\x02\x07\n\x05\x02\x03\x03\f\f\x11\x11l\x02"\x03' +
    "\x02\x02\x02\x04'\x03\x02\x02\x02\x061\x03\x02\x02\x02\b3\x03\x02\x02" +
    "\x02\n7\x03\x02\x02\x02\f<\x03\x02\x02\x02\x0E@\x03\x02\x02\x02\x10V\x03" +
    "\x02\x02\x02\x12Z\x03\x02\x02\x02\x14\\\x03\x02\x02\x02\x16^\x03\x02\x02" +
    "\x02\x18i\x03\x02\x02\x02\x1Am\x03\x02\x02\x02\x1Co\x03\x02\x02\x02\x1E" +
    "!\x05\x04\x03\x02\x1F!\x05\x0E\b\x02 \x1E\x03\x02\x02\x02 \x1F\x03\x02" +
    '\x02\x02!$\x03\x02\x02\x02" \x03\x02\x02\x02"#\x03\x02\x02\x02#%\x03' +
    '\x02\x02\x02$"\x03\x02\x02\x02%&\x07\x02\x02\x03&\x03\x03\x02\x02\x02' +
    "'(\x07\x03\x02\x02()\x05\x06\x04\x02)*\x07\x04\x02\x02*+\x05\b\x05\x02" +
    "+,\x05\n\x06\x02,-\x05\x14\v\x02-.\x07\x05\x02\x02./\x05\x14\v\x02/0\x07" +
    "\x06\x02\x020\x05\x03\x02\x02\x0212\x05\x1C\x0F\x022\x07\x03\x02\x02\x02" +
    "34\t\x02\x02\x024\t\x03\x02\x02\x0256\x07\v\x02\x0268\x05\f\x07\x0275" +
    "\x03\x02\x02\x0289\x03\x02\x02\x0297\x03\x02\x02\x029:\x03\x02\x02\x02" +
    ":\v\x03\x02\x02\x02;=\x07\x04\x02\x02<;\x03\x02\x02\x02<=\x03\x02\x02" +
    "\x02=>\x03\x02\x02\x02>?\x05\x1C\x0F\x02?\r\x03\x02\x02\x02@A\x07\f\x02" +
    "\x02AB\x05\x14\v\x02BC\x07\r\x02\x02CD\x05\x10\t\x02DE\x07\x06\x02\x02" +
    "E\x0F\x03\x02\x02\x02FK\x05\x12\n\x02GH\x07\x0E\x02\x02HJ\x05\x12\n\x02" +
    "IG\x03\x02\x02\x02JM\x03\x02\x02\x02KI\x03\x02\x02\x02KL\x03\x02\x02\x02" +
    "LW\x03\x02\x02\x02MK\x03\x02\x02\x02NO\x07\x0E\x02\x02OR\x05\x12\n\x02" +
    "PQ\x07\x0E\x02\x02QS\x05\x12\n\x02RP\x03\x02\x02\x02ST\x03\x02\x02\x02" +
    "TR\x03\x02\x02\x02TU\x03\x02\x02\x02UW\x03\x02\x02\x02VF\x03\x02\x02\x02" +
    "VN\x03\x02\x02\x02W\x11\x03\x02\x02\x02X[\x05\x14\v\x02Y[\x05\x16\f\x02" +
    "ZX\x03\x02\x02\x02ZY\x03\x02\x02\x02[\x13\x03\x02\x02\x02\\]\x05\x1C\x0F" +
    "\x02]\x15\x03\x02\x02\x02^d\x07\x0F\x02\x02_`\x05\x18\r\x02`a\x07\x06" +
    "\x02\x02ac\x03\x02\x02\x02b_\x03\x02\x02\x02cf\x03\x02\x02\x02db\x03\x02" +
    "\x02\x02de\x03\x02\x02\x02eg\x03\x02\x02\x02fd\x03\x02\x02\x02gh\x07\x10" +
    "\x02\x02h\x17\x03\x02\x02\x02ij\x05\x1A\x0E\x02jk\x07\x04\x02\x02kl\x05" +
    "\x10\t\x02l\x19\x03\x02\x02\x02mn\x05\x1C\x0F\x02n\x1B\x03\x02\x02\x02" +
    'op\t\x03\x02\x02p\x1D\x03\x02\x02\x02\v "9<KTVZd';
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
  public name(): NameContext {
    return this.getRuleContext(0, NameContext);
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
  public name(): NameContext {
    return this.getRuleContext(0, NameContext);
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
  public name(): NameContext {
    return this.getRuleContext(0, NameContext);
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
  public name(): NameContext {
    return this.getRuleContext(0, NameContext);
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

export class NameContext extends ParserRuleContext {
  public NAME(): TerminalNode {
    return this.getToken(ApiDefParser.NAME, 0);
  }
  constructor(parent: ParserRuleContext, invokingState: number);
  constructor(parent: ParserRuleContext, invokingState: number) {
    super(parent, invokingState);
  }
  @Override
  public get ruleIndex(): number {
    return ApiDefParser.RULE_name;
  }
}
