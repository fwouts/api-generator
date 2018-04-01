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
  public static readonly NAME = 18;
  public static readonly LINEBREAK = 19;
  public static readonly WHITESPACE = 20;
  public static readonly RULE_api = 0;
  public static readonly RULE_endpoint = 1;
  public static readonly RULE_endpointname = 2;
  public static readonly RULE_method = 3;
  public static readonly RULE_route = 4;
  public static readonly RULE_subpath = 5;
  public static readonly RULE_typedef = 6;
  public static readonly RULE_type = 7;
  public static readonly RULE_array = 8;
  public static readonly RULE_struct = 9;
  public static readonly RULE_structfield = 10;
  public static readonly RULE_fieldname = 11;
  public static readonly RULE_typename = 12;
  public static readonly RULE_symbol = 13;
  public static readonly RULE_name = 14;
  public static readonly RULE_separator = 15;
  public static readonly ruleNames: string[] = [
    "api",
    "endpoint",
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
        this.state = 35;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (_la === ApiDefParser.LINEBREAK) {
          {
            {
              this.state = 32;
              this.match(ApiDefParser.LINEBREAK);
            }
          }
          this.state = 37;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        }
        this.state = 42;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (_la === ApiDefParser.T__0 || _la === ApiDefParser.T__8) {
          {
            this.state = 40;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
              case ApiDefParser.T__0:
                {
                  this.state = 38;
                  this.endpoint();
                }
                break;
              case ApiDefParser.T__8:
                {
                  this.state = 39;
                  this.typedef();
                }
                break;
              default:
                throw new NoViableAltException(this);
            }
          }
          this.state = 44;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        }
        this.state = 45;
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
        this.state = 47;
        this.match(ApiDefParser.T__0);
        this.state = 51;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (_la === ApiDefParser.LINEBREAK) {
          {
            {
              this.state = 48;
              this.match(ApiDefParser.LINEBREAK);
            }
          }
          this.state = 53;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        }
        this.state = 54;
        this.endpointname();
        this.state = 58;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (_la === ApiDefParser.LINEBREAK) {
          {
            {
              this.state = 55;
              this.match(ApiDefParser.LINEBREAK);
            }
          }
          this.state = 60;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        }
        this.state = 61;
        this.match(ApiDefParser.T__1);
        this.state = 65;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (_la === ApiDefParser.LINEBREAK) {
          {
            {
              this.state = 62;
              this.match(ApiDefParser.LINEBREAK);
            }
          }
          this.state = 67;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        }
        this.state = 68;
        this.method();
        this.state = 72;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (_la === ApiDefParser.LINEBREAK) {
          {
            {
              this.state = 69;
              this.match(ApiDefParser.LINEBREAK);
            }
          }
          this.state = 74;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        }
        this.state = 75;
        this.route();
        this.state = 79;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (_la === ApiDefParser.LINEBREAK) {
          {
            {
              this.state = 76;
              this.match(ApiDefParser.LINEBREAK);
            }
          }
          this.state = 81;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        }
        this.state = 82;
        this.typename();
        this.state = 86;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (_la === ApiDefParser.LINEBREAK) {
          {
            {
              this.state = 83;
              this.match(ApiDefParser.LINEBREAK);
            }
          }
          this.state = 88;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        }
        this.state = 89;
        this.match(ApiDefParser.T__2);
        this.state = 93;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (_la === ApiDefParser.LINEBREAK) {
          {
            {
              this.state = 90;
              this.match(ApiDefParser.LINEBREAK);
            }
          }
          this.state = 95;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        }
        this.state = 96;
        this.typename();
        this.state = 97;
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

  public endpointname(): EndpointnameContext {
    let _localctx: EndpointnameContext = new EndpointnameContext(
      this._ctx,
      this.state,
    );
    this.enterRule(_localctx, 4, ApiDefParser.RULE_endpointname);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 99;
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
        this.state = 101;
        _la = this._input.LA(1);
        if (
          !(
            (_la & ~0x1f) === 0 &&
            ((1 << _la) &
              ((1 << ApiDefParser.T__3) |
                (1 << ApiDefParser.T__4) |
                (1 << ApiDefParser.T__5) |
                (1 << ApiDefParser.T__6))) !==
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
        this.state = 105;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
          {
            {
              this.state = 103;
              this.match(ApiDefParser.T__7);
              this.state = 104;
              this.subpath();
            }
          }
          this.state = 107;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        } while (_la === ApiDefParser.T__7);
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
        this.state = 110;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === ApiDefParser.T__1) {
          {
            this.state = 109;
            _localctx._dynamic = this.match(ApiDefParser.T__1);
          }
        }

        this.state = 112;
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
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 114;
        this.match(ApiDefParser.T__8);
        this.state = 115;
        this.typename();
        this.state = 119;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (_la === ApiDefParser.LINEBREAK) {
          {
            {
              this.state = 116;
              this.match(ApiDefParser.LINEBREAK);
            }
          }
          this.state = 121;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        }
        this.state = 122;
        this.match(ApiDefParser.T__9);
        this.state = 126;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (_la === ApiDefParser.LINEBREAK) {
          {
            {
              this.state = 123;
              this.match(ApiDefParser.LINEBREAK);
            }
          }
          this.state = 128;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        }
        this.state = 129;
        this.type(0);
        this.state = 130;
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
    let _startState: number = 14;
    this.enterRecursionRule(_localctx, 14, ApiDefParser.RULE_type, _p);
    let _la: number;
    try {
      let _alt: number;
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 161;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 18, this._ctx)) {
          case 1:
            {
              this.state = 133;
              this.array();
              this.state = 137;
              this._errHandler.sync(this);
              _alt = this.interpreter.adaptivePredict(
                this._input,
                14,
                this._ctx,
              );
              while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                  {
                    {
                      this.state = 134;
                      this.match(ApiDefParser.LINEBREAK);
                    }
                  }
                }
                this.state = 139;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(
                  this._input,
                  14,
                  this._ctx,
                );
              }
            }
            break;

          case 2:
            {
              this.state = 140;
              this.struct();
              this.state = 144;
              this._errHandler.sync(this);
              _alt = this.interpreter.adaptivePredict(
                this._input,
                15,
                this._ctx,
              );
              while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                  {
                    {
                      this.state = 141;
                      this.match(ApiDefParser.LINEBREAK);
                    }
                  }
                }
                this.state = 146;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(
                  this._input,
                  15,
                  this._ctx,
                );
              }
            }
            break;

          case 3:
            {
              this.state = 147;
              this.symbol();
              this.state = 151;
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
                      this.state = 148;
                      this.match(ApiDefParser.LINEBREAK);
                    }
                  }
                }
                this.state = 153;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(
                  this._input,
                  16,
                  this._ctx,
                );
              }
            }
            break;

          case 4:
            {
              this.state = 154;
              this.typename();
              this.state = 158;
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
                      this.state = 155;
                      this.match(ApiDefParser.LINEBREAK);
                    }
                  }
                }
                this.state = 160;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(
                  this._input,
                  17,
                  this._ctx,
                );
              }
            }
            break;
        }
        this._ctx._stop = this._input.tryLT(-1);
        this.state = 174;
        this._errHandler.sync(this);
        _alt = this.interpreter.adaptivePredict(this._input, 20, this._ctx);
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
                this.state = 163;
                if (!this.precpred(this._ctx, 4))
                  throw new FailedPredicateException(
                    this,
                    "this.precpred(this._ctx, 4)",
                  );
                this.state = 164;
                this.match(ApiDefParser.T__10);
                this.state = 168;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === ApiDefParser.LINEBREAK) {
                  {
                    {
                      this.state = 165;
                      this.match(ApiDefParser.LINEBREAK);
                    }
                  }
                  this.state = 170;
                  this._errHandler.sync(this);
                  _la = this._input.LA(1);
                }
                this.state = 171;
                this.type(5);
              }
            }
          }
          this.state = 176;
          this._errHandler.sync(this);
          _alt = this.interpreter.adaptivePredict(this._input, 20, this._ctx);
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
    this.enterRule(_localctx, 16, ApiDefParser.RULE_array);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 177;
        this.typename();
        this.state = 178;
        this.match(ApiDefParser.T__11);
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
    this.enterRule(_localctx, 18, ApiDefParser.RULE_struct);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 180;
        this.match(ApiDefParser.T__12);
        this.state = 184;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (_la === ApiDefParser.LINEBREAK) {
          {
            {
              this.state = 181;
              this.match(ApiDefParser.LINEBREAK);
            }
          }
          this.state = 186;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        }
        this.state = 192;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (
          (_la & ~0x1f) === 0 &&
          ((1 << _la) &
            ((1 << ApiDefParser.T__0) |
              (1 << ApiDefParser.T__8) |
              (1 << ApiDefParser.NAME))) !==
            0
        ) {
          {
            {
              this.state = 187;
              this.structfield();
              this.state = 188;
              this.separator();
            }
          }
          this.state = 194;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        }
        this.state = 195;
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
    this.enterRule(_localctx, 20, ApiDefParser.RULE_structfield);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 197;
        this.fieldname();
        this.state = 199;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === ApiDefParser.T__14) {
          {
            this.state = 198;
            _localctx._optional = this.match(ApiDefParser.T__14);
          }
        }

        this.state = 201;
        this.match(ApiDefParser.T__1);
        this.state = 202;
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
    this.enterRule(_localctx, 22, ApiDefParser.RULE_fieldname);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 204;
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
    this.enterRule(_localctx, 24, ApiDefParser.RULE_typename);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 206;
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
    this.enterRule(_localctx, 26, ApiDefParser.RULE_symbol);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 208;
        this.match(ApiDefParser.T__15);
        this.state = 209;
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
    this.enterRule(_localctx, 28, ApiDefParser.RULE_name);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 211;
        _la = this._input.LA(1);
        if (
          !(
            (_la & ~0x1f) === 0 &&
            ((1 << _la) &
              ((1 << ApiDefParser.T__0) |
                (1 << ApiDefParser.T__8) |
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
    this.enterRule(_localctx, 30, ApiDefParser.RULE_separator);
    let _la: number;
    try {
      this.state = 231;
      this._errHandler.sync(this);
      switch (this.interpreter.adaptivePredict(this._input, 27, this._ctx)) {
        case 1:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 216;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while (_la === ApiDefParser.LINEBREAK) {
              {
                {
                  this.state = 213;
                  this.match(ApiDefParser.LINEBREAK);
                }
              }
              this.state = 218;
              this._errHandler.sync(this);
              _la = this._input.LA(1);
            }
            this.state = 219;
            this.match(ApiDefParser.T__16);
            this.state = 223;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while (_la === ApiDefParser.LINEBREAK) {
              {
                {
                  this.state = 220;
                  this.match(ApiDefParser.LINEBREAK);
                }
              }
              this.state = 225;
              this._errHandler.sync(this);
              _la = this._input.LA(1);
            }
          }
          break;

        case 2:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 227;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            do {
              {
                {
                  this.state = 226;
                  this.match(ApiDefParser.LINEBREAK);
                }
              }
              this.state = 229;
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
      case 7:
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

  public static readonly _serializedATN: string = "\x03\uAF6F\u8320\u479D\uB75C\u4880\u1605\u191C\uAB37\x03\x16\xEC\x04\x02" +
    "\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
    "\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
    "\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x03\x02\x07\x02$" +
    "\n\x02\f\x02\x0E\x02'\v\x02\x03\x02\x03\x02\x07\x02+\n\x02\f\x02\x0E" +
    "\x02.\v\x02\x03\x02\x03\x02\x03\x03\x03\x03\x07\x034\n\x03\f\x03\x0E\x03" +
    "7\v\x03\x03\x03\x03\x03\x07\x03;\n\x03\f\x03\x0E\x03>\v\x03\x03\x03\x03" +
    "\x03\x07\x03B\n\x03\f\x03\x0E\x03E\v\x03\x03\x03\x03\x03\x07\x03I\n\x03" +
    "\f\x03\x0E\x03L\v\x03\x03\x03\x03\x03\x07\x03P\n\x03\f\x03\x0E\x03S\v" +
    "\x03\x03\x03\x03\x03\x07\x03W\n\x03\f\x03\x0E\x03Z\v\x03\x03\x03\x03\x03" +
    "\x07\x03^\n\x03\f\x03\x0E\x03a\v\x03\x03\x03\x03\x03\x03\x03\x03\x04\x03" +
    "\x04\x03\x05\x03\x05\x03\x06\x03\x06\x06\x06l\n\x06\r\x06\x0E\x06m\x03" +
    "\x07\x05\x07q\n\x07\x03\x07\x03\x07\x03\b\x03\b\x03\b\x07\bx\n\b\f\b\x0E" +
    "\b{\v\b\x03\b\x03\b\x07\b\x7F\n\b\f\b\x0E\b\x82\v\b\x03\b\x03\b\x03\b" +
    "\x03\t\x03\t\x03\t\x07\t\x8A\n\t\f\t\x0E\t\x8D\v\t\x03\t\x03\t\x07\t\x91" +
    "\n\t\f\t\x0E\t\x94\v\t\x03\t\x03\t\x07\t\x98\n\t\f\t\x0E\t\x9B\v\t\x03" +
    "\t\x03\t\x07\t\x9F\n\t\f\t\x0E\t\xA2\v\t\x05\t\xA4\n\t\x03\t\x03\t\x03" +
    "\t\x07\t\xA9\n\t\f\t\x0E\t\xAC\v\t\x03\t\x07\t\xAF\n\t\f\t\x0E\t\xB2\v" +
    "\t\x03\n\x03\n\x03\n\x03\v\x03\v\x07\v\xB9\n\v\f\v\x0E\v\xBC\v\v\x03\v" +
    "\x03\v\x03\v\x07\v\xC1\n\v\f\v\x0E\v\xC4\v\v\x03\v\x03\v\x03\f\x03\f\x05" +
    "\f\xCA\n\f\x03\f\x03\f\x03\f\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0F\x03\x0F" +
    "\x03\x0F\x03\x10\x03\x10\x03\x11\x07\x11\xD9\n\x11\f\x11\x0E\x11\xDC\v" +
    "\x11\x03\x11\x03\x11\x07\x11\xE0\n\x11\f\x11\x0E\x11\xE3\v\x11\x03\x11" +
    "\x06\x11\xE6\n\x11\r\x11\x0E\x11\xE7\x05\x11\xEA\n\x11\x03\x11\x02\x02" +
    "\x03\x10\x12\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02" +
    "\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\x02\x04" +
    "\x03\x02\x06\t\x05\x02\x03\x03\v\v\x14\x14\xF9\x02%\x03\x02\x02\x02\x04" +
    "1\x03\x02\x02\x02\x06e\x03\x02\x02\x02\bg\x03\x02\x02\x02\nk\x03\x02\x02" +
    "\x02\fp\x03\x02\x02\x02\x0Et\x03\x02\x02\x02\x10\xA3\x03\x02\x02\x02\x12" +
    "\xB3\x03\x02\x02\x02\x14\xB6\x03\x02\x02\x02\x16\xC7\x03\x02\x02\x02\x18" +
    "\xCE\x03\x02\x02\x02\x1A\xD0\x03\x02\x02\x02\x1C\xD2\x03\x02\x02\x02\x1E" +
    '\xD5\x03\x02\x02\x02 \xE9\x03\x02\x02\x02"$\x07\x15\x02\x02#"\x03\x02' +
    "\x02\x02$'\x03\x02\x02\x02%#\x03\x02\x02\x02%&\x03\x02\x02\x02&,\x03" +
    "\x02\x02\x02'%\x03\x02\x02\x02(+\x05\x04\x03\x02)+\x05\x0E\b\x02*(\x03" +
    "\x02\x02\x02*)\x03\x02\x02\x02+.\x03\x02\x02\x02,*\x03\x02\x02\x02,-\x03" +
    "\x02\x02\x02-/\x03\x02\x02\x02.,\x03\x02\x02\x02/0\x07\x02\x02\x030\x03" +
    "\x03\x02\x02\x0215\x07\x03\x02\x0224\x07\x15\x02\x0232\x03\x02\x02\x02" +
    "47\x03\x02\x02\x0253\x03\x02\x02\x0256\x03\x02\x02\x0268\x03\x02\x02\x02" +
    "75\x03\x02\x02\x028<\x05\x06\x04\x029;\x07\x15\x02\x02:9\x03\x02\x02\x02" +
    ";>\x03\x02\x02\x02<:\x03\x02\x02\x02<=\x03\x02\x02\x02=?\x03\x02\x02\x02" +
    "><\x03\x02\x02\x02?C\x07\x04\x02\x02@B\x07\x15\x02\x02A@\x03\x02\x02\x02" +
    "BE\x03\x02\x02\x02CA\x03\x02\x02\x02CD\x03\x02\x02\x02DF\x03\x02\x02\x02" +
    "EC\x03\x02\x02\x02FJ\x05\b\x05\x02GI\x07\x15\x02\x02HG\x03\x02\x02\x02" +
    "IL\x03\x02\x02\x02JH\x03\x02\x02\x02JK\x03\x02\x02\x02KM\x03\x02\x02\x02" +
    "LJ\x03\x02\x02\x02MQ\x05\n\x06\x02NP\x07\x15\x02\x02ON\x03\x02\x02\x02" +
    "PS\x03\x02\x02\x02QO\x03\x02\x02\x02QR\x03\x02\x02\x02RT\x03\x02\x02\x02" +
    "SQ\x03\x02\x02\x02TX\x05\x1A\x0E\x02UW\x07\x15\x02\x02VU\x03\x02\x02\x02" +
    "WZ\x03\x02\x02\x02XV\x03\x02\x02\x02XY\x03\x02\x02\x02Y[\x03\x02\x02\x02" +
    "ZX\x03\x02\x02\x02[_\x07\x05\x02\x02\\^\x07\x15\x02\x02]\\\x03\x02\x02" +
    "\x02^a\x03\x02\x02\x02_]\x03\x02\x02\x02_`\x03\x02\x02\x02`b\x03\x02\x02" +
    "\x02a_\x03\x02\x02\x02bc\x05\x1A\x0E\x02cd\x05 \x11\x02d\x05\x03\x02\x02" +
    "\x02ef\x05\x1E\x10\x02f\x07\x03\x02\x02\x02gh\t\x02\x02\x02h\t\x03\x02" +
    "\x02\x02ij\x07\n\x02\x02jl\x05\f\x07\x02ki\x03\x02\x02\x02lm\x03\x02\x02" +
    "\x02mk\x03\x02\x02\x02mn\x03\x02\x02\x02n\v\x03\x02\x02\x02oq\x07\x04" +
    "\x02\x02po\x03\x02\x02\x02pq\x03\x02\x02\x02qr\x03\x02\x02\x02rs\x05\x1E" +
    "\x10\x02s\r\x03\x02\x02\x02tu\x07\v\x02\x02uy\x05\x1A\x0E\x02vx\x07\x15" +
    "\x02\x02wv\x03\x02\x02\x02x{\x03\x02\x02\x02yw\x03\x02\x02\x02yz\x03\x02" +
    "\x02\x02z|\x03\x02\x02\x02{y\x03\x02\x02\x02|\x80\x07\f\x02\x02}\x7F\x07" +
    "\x15\x02\x02~}\x03\x02\x02\x02\x7F\x82\x03\x02\x02\x02\x80~\x03\x02\x02" +
    "\x02\x80\x81\x03\x02\x02\x02\x81\x83\x03\x02\x02\x02\x82\x80\x03\x02\x02" +
    "\x02\x83\x84\x05\x10\t\x02\x84\x85\x05 \x11\x02\x85\x0F\x03\x02\x02\x02" +
    "\x86\x87\b\t\x01\x02\x87\x8B\x05\x12\n\x02\x88\x8A\x07\x15\x02\x02\x89" +
    "\x88\x03\x02\x02\x02\x8A\x8D\x03\x02\x02\x02\x8B\x89\x03\x02\x02\x02\x8B" +
    "\x8C\x03\x02\x02\x02\x8C\xA4\x03\x02\x02\x02\x8D\x8B\x03\x02\x02\x02\x8E" +
    "\x92\x05\x14\v\x02\x8F\x91\x07\x15\x02\x02\x90\x8F\x03\x02\x02\x02\x91" +
    "\x94\x03\x02\x02\x02\x92\x90\x03\x02\x02\x02\x92\x93\x03\x02\x02\x02\x93" +
    "\xA4\x03\x02\x02\x02\x94\x92\x03\x02\x02\x02\x95\x99\x05\x1C\x0F\x02\x96" +
    "\x98\x07\x15\x02\x02\x97\x96\x03\x02\x02\x02\x98\x9B\x03\x02\x02\x02\x99" +
    "\x97\x03\x02\x02\x02\x99\x9A\x03\x02\x02\x02\x9A\xA4\x03\x02\x02\x02\x9B" +
    "\x99\x03\x02\x02\x02\x9C\xA0\x05\x1A\x0E\x02\x9D\x9F\x07\x15\x02\x02\x9E" +
    "\x9D\x03\x02\x02\x02\x9F\xA2\x03\x02\x02\x02\xA0\x9E\x03\x02\x02\x02\xA0" +
    "\xA1\x03\x02\x02\x02\xA1\xA4\x03\x02\x02\x02\xA2\xA0\x03\x02\x02\x02\xA3" +
    "\x86\x03\x02\x02\x02\xA3\x8E\x03\x02\x02\x02\xA3\x95\x03\x02\x02\x02\xA3" +
    "\x9C\x03\x02\x02\x02\xA4\xB0\x03\x02\x02\x02\xA5\xA6\f\x06\x02\x02\xA6" +
    "\xAA\x07\r\x02\x02\xA7\xA9\x07\x15\x02\x02\xA8\xA7\x03\x02\x02\x02\xA9" +
    "\xAC\x03\x02\x02\x02\xAA\xA8\x03\x02\x02\x02\xAA\xAB\x03\x02\x02\x02\xAB" +
    "\xAD\x03\x02\x02\x02\xAC\xAA\x03\x02\x02\x02\xAD\xAF\x05\x10\t\x07\xAE" +
    "\xA5\x03\x02\x02\x02\xAF\xB2\x03\x02\x02\x02\xB0\xAE\x03\x02\x02\x02\xB0" +
    "\xB1\x03\x02\x02\x02\xB1\x11\x03\x02\x02\x02\xB2\xB0\x03\x02\x02\x02\xB3" +
    "\xB4\x05\x1A\x0E\x02\xB4\xB5\x07\x0E\x02\x02\xB5\x13\x03\x02\x02\x02\xB6" +
    "\xBA\x07\x0F\x02\x02\xB7\xB9\x07\x15\x02\x02\xB8\xB7\x03\x02\x02\x02\xB9" +
    "\xBC\x03\x02\x02\x02\xBA\xB8\x03\x02\x02\x02\xBA\xBB\x03\x02\x02\x02\xBB" +
    "\xC2\x03\x02\x02\x02\xBC\xBA\x03\x02\x02\x02\xBD\xBE\x05\x16\f\x02\xBE" +
    "\xBF\x05 \x11\x02\xBF\xC1\x03\x02\x02\x02\xC0\xBD\x03\x02\x02\x02\xC1" +
    "\xC4\x03\x02\x02\x02\xC2\xC0\x03\x02\x02\x02\xC2\xC3\x03\x02\x02\x02\xC3" +
    "\xC5\x03\x02\x02\x02\xC4\xC2\x03\x02\x02\x02\xC5\xC6\x07\x10\x02\x02\xC6" +
    "\x15\x03\x02\x02\x02\xC7\xC9\x05\x18\r\x02\xC8\xCA\x07\x11\x02\x02\xC9" +
    "\xC8\x03\x02\x02\x02\xC9\xCA\x03\x02\x02\x02\xCA\xCB\x03\x02\x02\x02\xCB" +
    "\xCC\x07\x04\x02\x02\xCC\xCD\x05\x10\t\x02\xCD\x17\x03\x02\x02\x02\xCE" +
    "\xCF\x05\x1E\x10\x02\xCF\x19\x03\x02\x02\x02\xD0\xD1\x05\x1E\x10\x02\xD1" +
    "\x1B\x03\x02\x02\x02\xD2\xD3\x07\x12\x02\x02\xD3\xD4\x05\x1E\x10\x02\xD4" +
    "\x1D\x03\x02\x02\x02\xD5\xD6\t\x03\x02\x02\xD6\x1F\x03\x02\x02\x02\xD7" +
    "\xD9\x07\x15\x02\x02\xD8\xD7\x03\x02\x02\x02\xD9\xDC\x03\x02\x02\x02\xDA" +
    "\xD8\x03\x02\x02\x02\xDA\xDB\x03\x02\x02\x02\xDB\xDD\x03\x02\x02\x02\xDC" +
    "\xDA\x03\x02\x02\x02\xDD\xE1\x07\x13\x02\x02\xDE\xE0\x07\x15\x02\x02\xDF" +
    "\xDE\x03\x02\x02\x02\xE0\xE3\x03\x02\x02\x02\xE1\xDF\x03\x02\x02\x02\xE1" +
    "\xE2\x03\x02\x02\x02\xE2\xEA\x03\x02\x02\x02\xE3\xE1\x03\x02\x02\x02\xE4" +
    "\xE6\x07\x15\x02\x02\xE5\xE4\x03\x02\x02\x02\xE6\xE7\x03\x02\x02\x02\xE7" +
    "\xE5\x03\x02\x02\x02\xE7\xE8\x03\x02\x02\x02\xE8\xEA\x03\x02\x02\x02\xE9" +
    "\xDA\x03\x02\x02\x02\xE9\xE5\x03\x02\x02\x02\xEA!\x03\x02\x02\x02\x1E" +
    "%*,5<CJQX_mpy\x80\x8B\x92\x99\xA0\xA3\xAA\xB0\xBA\xC2\xC9\xDA\xE1\xE7" +
    "\xE9";
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
