// Generated from src/grammar/ApiDef.g4 by ANTLR 4.6-SNAPSHOT

import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
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
  public static readonly T__14 = 15;
  public static readonly T__15 = 16;
  public static readonly T__16 = 17;
  public static readonly T__17 = 18;
  public static readonly T__18 = 19;
  public static readonly T__19 = 20;
  public static readonly NAME = 21;
  public static readonly LINEBREAK = 22;
  public static readonly WHITESPACE = 23;
  public static readonly BLOCK_COMMENT = 24;
  public static readonly LINE_COMMENT = 25;
  public static readonly RULE_api = 0;
  public static readonly RULE_endpoint = 1;
  public static readonly RULE_headers = 2;
  public static readonly RULE_endpointname = 3;
  public static readonly RULE_method = 4;
  public static readonly RULE_route = 5;
  public static readonly RULE_subpath = 6;
  public static readonly RULE_typedef = 7;
  public static readonly RULE_type = 8;
  public static readonly RULE_array = 9;
  public static readonly RULE_struct = 10;
  public static readonly RULE_structfield = 11;
  public static readonly RULE_fieldname = 12;
  public static readonly RULE_typename = 13;
  public static readonly RULE_symbol = 14;
  public static readonly RULE_name = 15;
  public static readonly RULE_separator = 16;
  public static readonly ruleNames: string[] = [
    "api",
    "endpoint",
    "headers",
    "endpointname",
    "method",
    "route",
    "subpath",
    "typedef",
    "type",
    "array",
    "struct",
    "structfield",
    "fieldname",
    "typename",
    "symbol",
    "name",
    "separator",
  ];

  private static readonly _LITERAL_NAMES: (string | undefined)[] = [
    undefined,
    "'endpoint'",
    "':'",
    "'->'",
    "'@headers'",
    "'('",
    "')'",
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
    undefined,
    undefined,
    undefined,
    "NAME",
    "LINEBREAK",
    "WHITESPACE",
    "BLOCK_COMMENT",
    "LINE_COMMENT",
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
        this.state = 37;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (_la === ApiDefParser.LINEBREAK) {
          {
            {
              this.state = 34;
              this.match(ApiDefParser.LINEBREAK);
            }
          }
          this.state = 39;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        }
        this.state = 44;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (
          (_la & ~0x1f) === 0 &&
          ((1 << _la) &
            ((1 << ApiDefParser.T__0) |
              (1 << ApiDefParser.T__3) |
              (1 << ApiDefParser.T__11))) !==
            0
        ) {
          {
            this.state = 42;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
              case ApiDefParser.T__0:
              case ApiDefParser.T__3:
                {
                  this.state = 40;
                  this.endpoint();
                }
                break;
              case ApiDefParser.T__11:
                {
                  this.state = 41;
                  this.typedef();
                }
                break;
              default:
                throw new NoViableAltException(this);
            }
          }
          this.state = 46;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        }
        this.state = 47;
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
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 50;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === ApiDefParser.T__3) {
          {
            this.state = 49;
            this.headers();
          }
        }

        this.state = 52;
        this.match(ApiDefParser.T__0);
        this.state = 56;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (_la === ApiDefParser.LINEBREAK) {
          {
            {
              this.state = 53;
              this.match(ApiDefParser.LINEBREAK);
            }
          }
          this.state = 58;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        }
        this.state = 59;
        this.endpointname();
        this.state = 63;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (_la === ApiDefParser.LINEBREAK) {
          {
            {
              this.state = 60;
              this.match(ApiDefParser.LINEBREAK);
            }
          }
          this.state = 65;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        }
        this.state = 66;
        this.match(ApiDefParser.T__1);
        this.state = 70;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (_la === ApiDefParser.LINEBREAK) {
          {
            {
              this.state = 67;
              this.match(ApiDefParser.LINEBREAK);
            }
          }
          this.state = 72;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        }
        this.state = 73;
        this.method();
        this.state = 77;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (_la === ApiDefParser.LINEBREAK) {
          {
            {
              this.state = 74;
              this.match(ApiDefParser.LINEBREAK);
            }
          }
          this.state = 79;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        }
        this.state = 80;
        this.route();
        this.state = 84;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (_la === ApiDefParser.LINEBREAK) {
          {
            {
              this.state = 81;
              this.match(ApiDefParser.LINEBREAK);
            }
          }
          this.state = 86;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        }
        this.state = 87;
        this.typename();
        this.state = 91;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (_la === ApiDefParser.LINEBREAK) {
          {
            {
              this.state = 88;
              this.match(ApiDefParser.LINEBREAK);
            }
          }
          this.state = 93;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        }
        this.state = 94;
        this.match(ApiDefParser.T__2);
        this.state = 98;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (_la === ApiDefParser.LINEBREAK) {
          {
            {
              this.state = 95;
              this.match(ApiDefParser.LINEBREAK);
            }
          }
          this.state = 100;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        }
        this.state = 101;
        this.typename();
        this.state = 102;
        this.separator();
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

  public headers(): HeadersContext {
    let _localctx: HeadersContext = new HeadersContext(this._ctx, this.state);
    this.enterRule(_localctx, 4, ApiDefParser.RULE_headers);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 104;
        this.match(ApiDefParser.T__3);
        this.state = 105;
        this.match(ApiDefParser.T__4);
        this.state = 106;
        this.typename();
        this.state = 107;
        this.match(ApiDefParser.T__5);
        this.state = 111;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (_la === ApiDefParser.LINEBREAK) {
          {
            {
              this.state = 108;
              this.match(ApiDefParser.LINEBREAK);
            }
          }
          this.state = 113;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
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

  public endpointname(): EndpointnameContext {
    let _localctx: EndpointnameContext = new EndpointnameContext(
      this._ctx,
      this.state,
    );
    this.enterRule(_localctx, 6, ApiDefParser.RULE_endpointname);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 114;
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
    this.enterRule(_localctx, 8, ApiDefParser.RULE_method);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 116;
        _la = this._input.LA(1);
        if (
          !(
            (_la & ~0x1f) === 0 &&
            ((1 << _la) &
              ((1 << ApiDefParser.T__6) |
                (1 << ApiDefParser.T__7) |
                (1 << ApiDefParser.T__8) |
                (1 << ApiDefParser.T__9))) !==
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
    this.enterRule(_localctx, 10, ApiDefParser.RULE_route);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 120;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
          {
            {
              this.state = 118;
              this.match(ApiDefParser.T__10);
              this.state = 119;
              this.subpath();
            }
          }
          this.state = 122;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        } while (_la === ApiDefParser.T__10);
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
    this.enterRule(_localctx, 12, ApiDefParser.RULE_subpath);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 125;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === ApiDefParser.T__1) {
          {
            this.state = 124;
            _localctx._dynamic = this.match(ApiDefParser.T__1);
          }
        }

        this.state = 127;
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
    this.enterRule(_localctx, 14, ApiDefParser.RULE_typedef);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 129;
        this.match(ApiDefParser.T__11);
        this.state = 130;
        this.typename();
        this.state = 134;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (_la === ApiDefParser.LINEBREAK) {
          {
            {
              this.state = 131;
              this.match(ApiDefParser.LINEBREAK);
            }
          }
          this.state = 136;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        }
        this.state = 137;
        this.match(ApiDefParser.T__12);
        this.state = 141;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (_la === ApiDefParser.LINEBREAK) {
          {
            {
              this.state = 138;
              this.match(ApiDefParser.LINEBREAK);
            }
          }
          this.state = 143;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        }
        this.state = 144;
        this.type(0);
        this.state = 145;
        this.separator();
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

  public type(): TypeContext;
  public type(_p: number): TypeContext;

  public type(_p?: number): TypeContext {
    if (_p === undefined) {
      _p = 0;
    }

    let _parentctx: ParserRuleContext = this._ctx;
    let _parentState: number = this.state;
    let _localctx: TypeContext = new TypeContext(this._ctx, _parentState);
    let _startState: number = 16;
    this.enterRecursionRule(_localctx, 16, ApiDefParser.RULE_type, _p);
    let _la: number;
    try {
      let _alt: number;
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 176;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 20, this._ctx)) {
          case 1:
            {
              this.state = 148;
              this.array();
              this.state = 152;
              this._errHandler.sync(this);
              _alt = this.interpreter.adaptivePredict(
                this._input,
                16,
                this._ctx,
              );
              while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                  {
                    {
                      this.state = 149;
                      this.match(ApiDefParser.LINEBREAK);
                    }
                  }
                }
                this.state = 154;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(
                  this._input,
                  16,
                  this._ctx,
                );
              }
            }
            break;

          case 2:
            {
              this.state = 155;
              this.struct();
              this.state = 159;
              this._errHandler.sync(this);
              _alt = this.interpreter.adaptivePredict(
                this._input,
                17,
                this._ctx,
              );
              while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                  {
                    {
                      this.state = 156;
                      this.match(ApiDefParser.LINEBREAK);
                    }
                  }
                }
                this.state = 161;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(
                  this._input,
                  17,
                  this._ctx,
                );
              }
            }
            break;

          case 3:
            {
              this.state = 162;
              this.symbol();
              this.state = 166;
              this._errHandler.sync(this);
              _alt = this.interpreter.adaptivePredict(
                this._input,
                18,
                this._ctx,
              );
              while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                  {
                    {
                      this.state = 163;
                      this.match(ApiDefParser.LINEBREAK);
                    }
                  }
                }
                this.state = 168;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(
                  this._input,
                  18,
                  this._ctx,
                );
              }
            }
            break;

          case 4:
            {
              this.state = 169;
              this.typename();
              this.state = 173;
              this._errHandler.sync(this);
              _alt = this.interpreter.adaptivePredict(
                this._input,
                19,
                this._ctx,
              );
              while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                  {
                    {
                      this.state = 170;
                      this.match(ApiDefParser.LINEBREAK);
                    }
                  }
                }
                this.state = 175;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(
                  this._input,
                  19,
                  this._ctx,
                );
              }
            }
            break;
        }
        this._ctx._stop = this._input.tryLT(-1);
        this.state = 189;
        this._errHandler.sync(this);
        _alt = this.interpreter.adaptivePredict(this._input, 22, this._ctx);
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            if (this._parseListeners != null) this.triggerExitRuleEvent();
            {
              {
                _localctx = new TypeContext(_parentctx, _parentState);
                this.pushNewRecursionContext(
                  _localctx,
                  _startState,
                  ApiDefParser.RULE_type,
                );
                this.state = 178;
                if (!this.precpred(this._ctx, 4))
                  throw new FailedPredicateException(
                    this,
                    "this.precpred(this._ctx, 4)",
                  );
                this.state = 179;
                this.match(ApiDefParser.T__13);
                this.state = 183;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === ApiDefParser.LINEBREAK) {
                  {
                    {
                      this.state = 180;
                      this.match(ApiDefParser.LINEBREAK);
                    }
                  }
                  this.state = 185;
                  this._errHandler.sync(this);
                  _la = this._input.LA(1);
                }
                this.state = 186;
                this.type(5);
              }
            }
          }
          this.state = 191;
          this._errHandler.sync(this);
          _alt = this.interpreter.adaptivePredict(this._input, 22, this._ctx);
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
      this.unrollRecursionContexts(_parentctx);
    }
    return _localctx;
  }

  public array(): ArrayContext {
    let _localctx: ArrayContext = new ArrayContext(this._ctx, this.state);
    this.enterRule(_localctx, 18, ApiDefParser.RULE_array);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 192;
        this.typename();
        this.state = 193;
        this.match(ApiDefParser.T__14);
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
        this.state = 195;
        this.match(ApiDefParser.T__15);
        this.state = 199;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (_la === ApiDefParser.LINEBREAK) {
          {
            {
              this.state = 196;
              this.match(ApiDefParser.LINEBREAK);
            }
          }
          this.state = 201;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        }
        this.state = 207;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (
          (_la & ~0x1f) === 0 &&
          ((1 << _la) &
            ((1 << ApiDefParser.T__0) |
              (1 << ApiDefParser.T__11) |
              (1 << ApiDefParser.NAME))) !==
            0
        ) {
          {
            {
              this.state = 202;
              this.structfield();
              this.state = 203;
              this.separator();
            }
          }
          this.state = 209;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        }
        this.state = 210;
        this.match(ApiDefParser.T__16);
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
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 212;
        this.fieldname();
        this.state = 214;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === ApiDefParser.T__17) {
          {
            this.state = 213;
            _localctx._optional = this.match(ApiDefParser.T__17);
          }
        }

        this.state = 216;
        this.match(ApiDefParser.T__1);
        this.state = 217;
        this.type(0);
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
        this.state = 219;
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

  public typename(): TypenameContext {
    let _localctx: TypenameContext = new TypenameContext(this._ctx, this.state);
    this.enterRule(_localctx, 26, ApiDefParser.RULE_typename);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 221;
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

  public symbol(): SymbolContext {
    let _localctx: SymbolContext = new SymbolContext(this._ctx, this.state);
    this.enterRule(_localctx, 28, ApiDefParser.RULE_symbol);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 223;
        this.match(ApiDefParser.T__18);
        this.state = 224;
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
    this.enterRule(_localctx, 30, ApiDefParser.RULE_name);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 226;
        _la = this._input.LA(1);
        if (
          !(
            (_la & ~0x1f) === 0 &&
            ((1 << _la) &
              ((1 << ApiDefParser.T__0) |
                (1 << ApiDefParser.T__11) |
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

  public separator(): SeparatorContext {
    let _localctx: SeparatorContext = new SeparatorContext(
      this._ctx,
      this.state,
    );
    this.enterRule(_localctx, 32, ApiDefParser.RULE_separator);
    let _la: number;
    try {
      this.state = 246;
      this._errHandler.sync(this);
      switch (this.interpreter.adaptivePredict(this._input, 29, this._ctx)) {
        case 1:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 231;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while (_la === ApiDefParser.LINEBREAK) {
              {
                {
                  this.state = 228;
                  this.match(ApiDefParser.LINEBREAK);
                }
              }
              this.state = 233;
              this._errHandler.sync(this);
              _la = this._input.LA(1);
            }
            this.state = 234;
            this.match(ApiDefParser.T__19);
            this.state = 238;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while (_la === ApiDefParser.LINEBREAK) {
              {
                {
                  this.state = 235;
                  this.match(ApiDefParser.LINEBREAK);
                }
              }
              this.state = 240;
              this._errHandler.sync(this);
              _la = this._input.LA(1);
            }
          }
          break;

        case 2:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 242;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            do {
              {
                {
                  this.state = 241;
                  this.match(ApiDefParser.LINEBREAK);
                }
              }
              this.state = 244;
              this._errHandler.sync(this);
              _la = this._input.LA(1);
            } while (_la === ApiDefParser.LINEBREAK);
          }
          break;
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

  public sempred(
    _localctx: RuleContext,
    ruleIndex: number,
    predIndex: number,
  ): boolean {
    switch (ruleIndex) {
      case 8:
        return this.type_sempred(_localctx as TypeContext, predIndex);
    }
    return true;
  }
  private type_sempred(_localctx: TypeContext, predIndex: number): boolean {
    switch (predIndex) {
      case 0:
        return this.precpred(this._ctx, 4);
    }
    return true;
  }

  public static readonly _serializedATN: string = "\x03\uAF6F\u8320\u479D\uB75C\u4880\u1605\u191C\uAB37\x03\x1B\xFB\x04\x02" +
    "\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
    "\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
    "\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x03" +
    "\x02\x07\x02&\n\x02\f\x02\x0E\x02)\v\x02\x03\x02\x03\x02\x07\x02-\n\x02" +
    "\f\x02\x0E\x020\v\x02\x03\x02\x03\x02\x03\x03\x05\x035\n\x03\x03\x03\x03" +
    "\x03\x07\x039\n\x03\f\x03\x0E\x03<\v\x03\x03\x03\x03\x03\x07\x03@\n\x03" +
    "\f\x03\x0E\x03C\v\x03\x03\x03\x03\x03\x07\x03G\n\x03\f\x03\x0E\x03J\v" +
    "\x03\x03\x03\x03\x03\x07\x03N\n\x03\f\x03\x0E\x03Q\v\x03\x03\x03\x03\x03" +
    "\x07\x03U\n\x03\f\x03\x0E\x03X\v\x03\x03\x03\x03\x03\x07\x03\\\n\x03\f" +
    "\x03\x0E\x03_\v\x03\x03\x03\x03\x03\x07\x03c\n\x03\f\x03\x0E\x03f\v\x03" +
    "\x03\x03\x03\x03\x03\x03\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x07\x04" +
    "p\n\x04\f\x04\x0E\x04s\v\x04\x03\x05\x03\x05\x03\x06\x03\x06\x03\x07\x03" +
    "\x07\x06\x07{\n\x07\r\x07\x0E\x07|\x03\b\x05\b\x80\n\b\x03\b\x03\b\x03" +
    "\t\x03\t\x03\t\x07\t\x87\n\t\f\t\x0E\t\x8A\v\t\x03\t\x03\t\x07\t\x8E\n" +
    "\t\f\t\x0E\t\x91\v\t\x03\t\x03\t\x03\t\x03\n\x03\n\x03\n\x07\n\x99\n\n" +
    "\f\n\x0E\n\x9C\v\n\x03\n\x03\n\x07\n\xA0\n\n\f\n\x0E\n\xA3\v\n\x03\n\x03" +
    "\n\x07\n\xA7\n\n\f\n\x0E\n\xAA\v\n\x03\n\x03\n\x07\n\xAE\n\n\f\n\x0E\n" +
    "\xB1\v\n\x05\n\xB3\n\n\x03\n\x03\n\x03\n\x07\n\xB8\n\n\f\n\x0E\n\xBB\v" +
    "\n\x03\n\x07\n\xBE\n\n\f\n\x0E\n\xC1\v\n\x03\v\x03\v\x03\v\x03\f\x03\f" +
    "\x07\f\xC8\n\f\f\f\x0E\f\xCB\v\f\x03\f\x03\f\x03\f\x07\f\xD0\n\f\f\f\x0E" +
    "\f\xD3\v\f\x03\f\x03\f\x03\r\x03\r\x05\r\xD9\n\r\x03\r\x03\r\x03\r\x03" +
    "\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x10\x03\x10\x03\x10\x03\x11\x03\x11\x03" +
    "\x12\x07\x12\xE8\n\x12\f\x12\x0E\x12\xEB\v\x12\x03\x12\x03\x12\x07\x12" +
    "\xEF\n\x12\f\x12\x0E\x12\xF2\v\x12\x03\x12\x06\x12\xF5\n\x12\r\x12\x0E" +
    "\x12\xF6\x05\x12\xF9\n\x12\x03\x12\x02\x02\x03\x12\x13\x02\x02\x04\x02" +
    "\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18" +
    '\x02\x1A\x02\x1C\x02\x1E\x02 \x02"\x02\x02\x04\x03\x02\t\f\x05\x02\x03' +
    "\x03\x0E\x0E\x17\x17\u0109\x02'\x03\x02\x02\x02\x044\x03\x02\x02\x02" +
    "\x06j\x03\x02\x02\x02\bt\x03\x02\x02\x02\nv\x03\x02\x02\x02\fz\x03\x02" +
    "\x02\x02\x0E\x7F\x03\x02\x02\x02\x10\x83\x03\x02\x02\x02\x12\xB2\x03\x02" +
    "\x02\x02\x14\xC2\x03\x02\x02\x02\x16\xC5\x03\x02\x02\x02\x18\xD6\x03\x02" +
    "\x02\x02\x1A\xDD\x03\x02\x02\x02\x1C\xDF\x03\x02\x02\x02\x1E\xE1\x03\x02" +
    '\x02\x02 \xE4\x03\x02\x02\x02"\xF8\x03\x02\x02\x02$&\x07\x18\x02\x02' +
    "%$\x03\x02\x02\x02&)\x03\x02\x02\x02'%\x03\x02\x02\x02'(\x03\x02\x02" +
    "\x02(.\x03\x02\x02\x02)'\x03\x02\x02\x02*-\x05\x04\x03\x02+-\x05\x10" +
    "\t\x02,*\x03\x02\x02\x02,+\x03\x02\x02\x02-0\x03\x02\x02\x02.,\x03\x02" +
    "\x02\x02./\x03\x02\x02\x02/1\x03\x02\x02\x020.\x03\x02\x02\x0212\x07\x02" +
    "\x02\x032\x03\x03\x02\x02\x0235\x05\x06\x04\x0243\x03\x02\x02\x0245\x03" +
    "\x02\x02\x0256\x03\x02\x02\x026:\x07\x03\x02\x0279\x07\x18\x02\x0287\x03" +
    "\x02\x02\x029<\x03\x02\x02\x02:8\x03\x02\x02\x02:;\x03\x02\x02\x02;=\x03" +
    "\x02\x02\x02<:\x03\x02\x02\x02=A\x05\b\x05\x02>@\x07\x18\x02\x02?>\x03" +
    "\x02\x02\x02@C\x03\x02\x02\x02A?\x03\x02\x02\x02AB\x03\x02\x02\x02BD\x03" +
    "\x02\x02\x02CA\x03\x02\x02\x02DH\x07\x04\x02\x02EG\x07\x18\x02\x02FE\x03" +
    "\x02\x02\x02GJ\x03\x02\x02\x02HF\x03\x02\x02\x02HI\x03\x02\x02\x02IK\x03" +
    "\x02\x02\x02JH\x03\x02\x02\x02KO\x05\n\x06\x02LN\x07\x18\x02\x02ML\x03" +
    "\x02\x02\x02NQ\x03\x02\x02\x02OM\x03\x02\x02\x02OP\x03\x02\x02\x02PR\x03" +
    "\x02\x02\x02QO\x03\x02\x02\x02RV\x05\f\x07\x02SU\x07\x18\x02\x02TS\x03" +
    "\x02\x02\x02UX\x03\x02\x02\x02VT\x03\x02\x02\x02VW\x03\x02\x02\x02WY\x03" +
    "\x02\x02\x02XV\x03\x02\x02\x02Y]\x05\x1C\x0F\x02Z\\\x07\x18\x02\x02[Z" +
    "\x03\x02\x02\x02\\_\x03\x02\x02\x02][\x03\x02\x02\x02]^\x03\x02\x02\x02" +
    "^`\x03\x02\x02\x02_]\x03\x02\x02\x02`d\x07\x05\x02\x02ac\x07\x18\x02\x02" +
    "ba\x03\x02\x02\x02cf\x03\x02\x02\x02db\x03\x02\x02\x02de\x03\x02\x02\x02" +
    'eg\x03\x02\x02\x02fd\x03\x02\x02\x02gh\x05\x1C\x0F\x02hi\x05"\x12\x02' +
    "i\x05\x03\x02\x02\x02jk\x07\x06\x02\x02kl\x07\x07\x02\x02lm\x05\x1C\x0F" +
    "\x02mq\x07\b\x02\x02np\x07\x18\x02\x02on\x03\x02\x02\x02ps\x03\x02\x02" +
    "\x02qo\x03\x02\x02\x02qr\x03\x02\x02\x02r\x07\x03\x02\x02\x02sq\x03\x02" +
    "\x02\x02tu\x05 \x11\x02u\t\x03\x02\x02\x02vw\t\x02\x02\x02w\v\x03\x02" +
    "\x02\x02xy\x07\r\x02\x02y{\x05\x0E\b\x02zx\x03\x02\x02\x02{|\x03\x02\x02" +
    "\x02|z\x03\x02\x02\x02|}\x03\x02\x02\x02}\r\x03\x02\x02\x02~\x80\x07\x04" +
    "\x02\x02\x7F~\x03\x02\x02\x02\x7F\x80\x03\x02\x02\x02\x80\x81\x03\x02" +
    "\x02\x02\x81\x82\x05 \x11\x02\x82\x0F\x03\x02\x02\x02\x83\x84\x07\x0E" +
    "\x02\x02\x84\x88\x05\x1C\x0F\x02\x85\x87\x07\x18\x02\x02\x86\x85\x03\x02" +
    "\x02\x02\x87\x8A\x03\x02\x02\x02\x88\x86\x03\x02\x02\x02\x88\x89\x03\x02" +
    "\x02\x02\x89\x8B\x03\x02\x02\x02\x8A\x88\x03\x02\x02\x02\x8B\x8F\x07\x0F" +
    "\x02\x02\x8C\x8E\x07\x18\x02\x02\x8D\x8C\x03\x02\x02\x02\x8E\x91\x03\x02" +
    "\x02\x02\x8F\x8D\x03\x02\x02\x02\x8F\x90\x03\x02\x02\x02\x90\x92\x03\x02" +
    '\x02\x02\x91\x8F\x03\x02\x02\x02\x92\x93\x05\x12\n\x02\x93\x94\x05"\x12' +
    "\x02\x94\x11\x03\x02\x02\x02\x95\x96\b\n\x01\x02\x96\x9A\x05\x14\v\x02" +
    "\x97\x99\x07\x18\x02\x02\x98\x97\x03\x02\x02\x02\x99\x9C\x03\x02\x02\x02" +
    "\x9A\x98\x03\x02\x02\x02\x9A\x9B\x03\x02\x02\x02\x9B\xB3\x03\x02\x02\x02" +
    "\x9C\x9A\x03\x02\x02\x02\x9D\xA1\x05\x16\f\x02\x9E\xA0\x07\x18\x02\x02" +
    "\x9F\x9E\x03\x02\x02\x02\xA0\xA3\x03\x02\x02\x02\xA1\x9F\x03\x02\x02\x02" +
    "\xA1\xA2\x03\x02\x02\x02\xA2\xB3\x03\x02\x02\x02\xA3\xA1\x03\x02\x02\x02" +
    "\xA4\xA8\x05\x1E\x10\x02\xA5\xA7\x07\x18\x02\x02\xA6\xA5\x03\x02\x02\x02" +
    "\xA7\xAA\x03\x02\x02\x02\xA8\xA6\x03\x02\x02\x02\xA8\xA9\x03\x02\x02\x02" +
    "\xA9\xB3\x03\x02\x02\x02\xAA\xA8\x03\x02\x02\x02\xAB\xAF\x05\x1C\x0F\x02" +
    "\xAC\xAE\x07\x18\x02\x02\xAD\xAC\x03\x02\x02\x02\xAE\xB1\x03\x02\x02\x02" +
    "\xAF\xAD\x03\x02\x02\x02\xAF\xB0\x03\x02\x02\x02\xB0\xB3\x03\x02\x02\x02" +
    "\xB1\xAF\x03\x02\x02\x02\xB2\x95\x03\x02\x02\x02\xB2\x9D\x03\x02\x02\x02" +
    "\xB2\xA4\x03\x02\x02\x02\xB2\xAB\x03\x02\x02\x02\xB3\xBF\x03\x02\x02\x02" +
    "\xB4\xB5\f\x06\x02\x02\xB5\xB9\x07\x10\x02\x02\xB6\xB8\x07\x18\x02\x02" +
    "\xB7\xB6\x03\x02\x02\x02\xB8\xBB\x03\x02\x02\x02\xB9\xB7\x03\x02\x02\x02" +
    "\xB9\xBA\x03\x02\x02\x02\xBA\xBC\x03\x02\x02\x02\xBB\xB9\x03\x02\x02\x02" +
    "\xBC\xBE\x05\x12\n\x07\xBD\xB4\x03\x02\x02\x02\xBE\xC1\x03\x02\x02\x02" +
    "\xBF\xBD\x03\x02\x02\x02\xBF\xC0\x03\x02\x02\x02\xC0\x13\x03\x02\x02\x02" +
    "\xC1\xBF\x03\x02\x02\x02\xC2\xC3\x05\x1C\x0F\x02\xC3\xC4\x07\x11\x02\x02" +
    "\xC4\x15\x03\x02\x02\x02\xC5\xC9\x07\x12\x02\x02\xC6\xC8\x07\x18\x02\x02" +
    "\xC7\xC6\x03\x02\x02\x02\xC8\xCB\x03\x02\x02\x02\xC9\xC7\x03\x02\x02\x02" +
    "\xC9\xCA\x03\x02\x02\x02\xCA\xD1\x03\x02\x02\x02\xCB\xC9\x03\x02\x02\x02" +
    '\xCC\xCD\x05\x18\r\x02\xCD\xCE\x05"\x12\x02\xCE\xD0\x03\x02\x02\x02\xCF' +
    "\xCC\x03\x02\x02\x02\xD0\xD3\x03\x02\x02\x02\xD1\xCF\x03\x02\x02\x02\xD1" +
    "\xD2\x03\x02\x02\x02\xD2\xD4\x03\x02\x02\x02\xD3\xD1\x03\x02\x02\x02\xD4" +
    "\xD5\x07\x13\x02\x02\xD5\x17\x03\x02\x02\x02\xD6\xD8\x05\x1A\x0E\x02\xD7" +
    "\xD9\x07\x14\x02\x02\xD8\xD7\x03\x02\x02\x02\xD8\xD9\x03\x02\x02\x02\xD9" +
    "\xDA\x03\x02\x02\x02\xDA\xDB\x07\x04\x02\x02\xDB\xDC\x05\x12\n\x02\xDC" +
    "\x19\x03\x02\x02\x02\xDD\xDE\x05 \x11\x02\xDE\x1B\x03\x02\x02\x02\xDF" +
    "\xE0\x05 \x11\x02\xE0\x1D\x03\x02\x02\x02\xE1\xE2\x07\x15\x02\x02\xE2" +
    "\xE3\x05 \x11\x02\xE3\x1F\x03\x02\x02\x02\xE4\xE5\t\x03\x02\x02\xE5!\x03" +
    "\x02\x02\x02\xE6\xE8\x07\x18\x02\x02\xE7\xE6\x03\x02\x02\x02\xE8\xEB\x03" +
    "\x02\x02\x02\xE9\xE7\x03\x02\x02\x02\xE9\xEA\x03\x02\x02\x02\xEA\xEC\x03" +
    "\x02\x02\x02\xEB\xE9\x03\x02\x02\x02\xEC\xF0\x07\x16\x02\x02\xED\xEF\x07" +
    "\x18\x02\x02\xEE\xED\x03\x02\x02\x02\xEF\xF2\x03\x02\x02\x02\xF0\xEE\x03" +
    "\x02\x02\x02\xF0\xF1\x03\x02\x02\x02\xF1\xF9\x03\x02\x02\x02\xF2\xF0\x03" +
    "\x02\x02\x02\xF3\xF5\x07\x18\x02\x02\xF4\xF3\x03\x02\x02\x02\xF5\xF6\x03" +
    "\x02\x02\x02\xF6\xF4\x03\x02\x02\x02\xF6\xF7\x03\x02\x02\x02\xF7\xF9\x03" +
    "\x02\x02\x02\xF8\xE9\x03\x02\x02\x02\xF8\xF4\x03\x02\x02\x02\xF9#\x03" +
    "\x02\x02\x02 ',.4:AHOV]dq|\x7F\x88\x8F\x9A\xA1\xA8\xAF\xB2\xB9\xBF\xC9" +
    "\xD1\xD8\xE9\xF0\xF6\xF8";
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
  public LINEBREAK(): TerminalNode[];
  public LINEBREAK(i: number): TerminalNode;
  public LINEBREAK(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(ApiDefParser.LINEBREAK);
    } else {
      return this.getToken(ApiDefParser.LINEBREAK, i);
    }
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
  public separator(): SeparatorContext {
    return this.getRuleContext(0, SeparatorContext);
  }
  public headers(): HeadersContext | undefined {
    return this.tryGetRuleContext(0, HeadersContext);
  }
  public LINEBREAK(): TerminalNode[];
  public LINEBREAK(i: number): TerminalNode;
  public LINEBREAK(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(ApiDefParser.LINEBREAK);
    } else {
      return this.getToken(ApiDefParser.LINEBREAK, i);
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

export class HeadersContext extends ParserRuleContext {
  public typename(): TypenameContext {
    return this.getRuleContext(0, TypenameContext);
  }
  public LINEBREAK(): TerminalNode[];
  public LINEBREAK(i: number): TerminalNode;
  public LINEBREAK(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(ApiDefParser.LINEBREAK);
    } else {
      return this.getToken(ApiDefParser.LINEBREAK, i);
    }
  }
  constructor(parent: ParserRuleContext, invokingState: number);
  constructor(parent: ParserRuleContext, invokingState: number) {
    super(parent, invokingState);
  }
  @Override
  public get ruleIndex(): number {
    return ApiDefParser.RULE_headers;
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
  public type(): TypeContext {
    return this.getRuleContext(0, TypeContext);
  }
  public separator(): SeparatorContext {
    return this.getRuleContext(0, SeparatorContext);
  }
  public LINEBREAK(): TerminalNode[];
  public LINEBREAK(i: number): TerminalNode;
  public LINEBREAK(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(ApiDefParser.LINEBREAK);
    } else {
      return this.getToken(ApiDefParser.LINEBREAK, i);
    }
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

export class TypeContext extends ParserRuleContext {
  public array(): ArrayContext | undefined {
    return this.tryGetRuleContext(0, ArrayContext);
  }
  public LINEBREAK(): TerminalNode[];
  public LINEBREAK(i: number): TerminalNode;
  public LINEBREAK(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(ApiDefParser.LINEBREAK);
    } else {
      return this.getToken(ApiDefParser.LINEBREAK, i);
    }
  }
  public type(): TypeContext[];
  public type(i: number): TypeContext;
  public type(i?: number): TypeContext | TypeContext[] {
    if (i === undefined) {
      return this.getRuleContexts(TypeContext);
    } else {
      return this.getRuleContext(i, TypeContext);
    }
  }
  public struct(): StructContext | undefined {
    return this.tryGetRuleContext(0, StructContext);
  }
  public symbol(): SymbolContext | undefined {
    return this.tryGetRuleContext(0, SymbolContext);
  }
  public typename(): TypenameContext | undefined {
    return this.tryGetRuleContext(0, TypenameContext);
  }
  constructor(parent: ParserRuleContext, invokingState: number);
  constructor(parent: ParserRuleContext, invokingState: number) {
    super(parent, invokingState);
  }
  @Override
  public get ruleIndex(): number {
    return ApiDefParser.RULE_type;
  }
}

export class ArrayContext extends ParserRuleContext {
  public typename(): TypenameContext {
    return this.getRuleContext(0, TypenameContext);
  }
  constructor(parent: ParserRuleContext, invokingState: number);
  constructor(parent: ParserRuleContext, invokingState: number) {
    super(parent, invokingState);
  }
  @Override
  public get ruleIndex(): number {
    return ApiDefParser.RULE_array;
  }
}

export class StructContext extends ParserRuleContext {
  public LINEBREAK(): TerminalNode[];
  public LINEBREAK(i: number): TerminalNode;
  public LINEBREAK(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(ApiDefParser.LINEBREAK);
    } else {
      return this.getToken(ApiDefParser.LINEBREAK, i);
    }
  }
  public structfield(): StructfieldContext[];
  public structfield(i: number): StructfieldContext;
  public structfield(i?: number): StructfieldContext | StructfieldContext[] {
    if (i === undefined) {
      return this.getRuleContexts(StructfieldContext);
    } else {
      return this.getRuleContext(i, StructfieldContext);
    }
  }
  public separator(): SeparatorContext[];
  public separator(i: number): SeparatorContext;
  public separator(i?: number): SeparatorContext | SeparatorContext[] {
    if (i === undefined) {
      return this.getRuleContexts(SeparatorContext);
    } else {
      return this.getRuleContext(i, SeparatorContext);
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
  public _optional!: Token;
  public fieldname(): FieldnameContext {
    return this.getRuleContext(0, FieldnameContext);
  }
  public type(): TypeContext {
    return this.getRuleContext(0, TypeContext);
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

export class SymbolContext extends ParserRuleContext {
  public name(): NameContext {
    return this.getRuleContext(0, NameContext);
  }
  constructor(parent: ParserRuleContext, invokingState: number);
  constructor(parent: ParserRuleContext, invokingState: number) {
    super(parent, invokingState);
  }
  @Override
  public get ruleIndex(): number {
    return ApiDefParser.RULE_symbol;
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

export class SeparatorContext extends ParserRuleContext {
  public LINEBREAK(): TerminalNode[];
  public LINEBREAK(i: number): TerminalNode;
  public LINEBREAK(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(ApiDefParser.LINEBREAK);
    } else {
      return this.getToken(ApiDefParser.LINEBREAK, i);
    }
  }
  constructor(parent: ParserRuleContext, invokingState: number);
  constructor(parent: ParserRuleContext, invokingState: number) {
    super(parent, invokingState);
  }
  @Override
  public get ruleIndex(): number {
    return ApiDefParser.RULE_separator;
  }
}
