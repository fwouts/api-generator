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
  public static readonly NAME = 8;
  public static readonly WS = 9;
  public static readonly RULE_api = 0;
  public static readonly RULE_typedef = 1;
  public static readonly RULE_union = 2;
  public static readonly RULE_singletype = 3;
  public static readonly RULE_typename = 4;
  public static readonly RULE_struct = 5;
  public static readonly RULE_structfield = 6;
  public static readonly RULE_fieldname = 7;
  public static readonly ruleNames: string[] = [
    "api",
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
        this.state = 19;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (_la === ApiDefParser.T__0) {
          {
            {
              this.state = 16;
              this.typedef();
            }
          }
          this.state = 21;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        }
        this.state = 22;
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

  public typedef(): TypedefContext {
    let _localctx: TypedefContext = new TypedefContext(this._ctx, this.state);
    this.enterRule(_localctx, 2, ApiDefParser.RULE_typedef);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 24;
        this.match(ApiDefParser.T__0);
        this.state = 25;
        this.typename();
        this.state = 26;
        this.match(ApiDefParser.T__1);
        this.state = 27;
        this.union();
        this.state = 28;
        this.match(ApiDefParser.T__2);
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
    this.enterRule(_localctx, 4, ApiDefParser.RULE_union);
    let _la: number;
    try {
      this.state = 46;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
        case ApiDefParser.T__4:
        case ApiDefParser.NAME:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 30;
            this.singletype();
            this.state = 35;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while (_la === ApiDefParser.T__3) {
              {
                {
                  this.state = 31;
                  this.match(ApiDefParser.T__3);
                  this.state = 32;
                  this.singletype();
                }
              }
              this.state = 37;
              this._errHandler.sync(this);
              _la = this._input.LA(1);
            }
          }
          break;
        case ApiDefParser.T__3:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 38;
            this.match(ApiDefParser.T__3);
            this.state = 39;
            this.singletype();
            this.state = 42;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            do {
              {
                {
                  this.state = 40;
                  this.match(ApiDefParser.T__3);
                  this.state = 41;
                  this.singletype();
                }
              }
              this.state = 44;
              this._errHandler.sync(this);
              _la = this._input.LA(1);
            } while (_la === ApiDefParser.T__3);
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
    this.enterRule(_localctx, 6, ApiDefParser.RULE_singletype);
    try {
      this.state = 50;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
        case ApiDefParser.NAME:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 48;
            this.typename();
          }
          break;
        case ApiDefParser.T__4:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 49;
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
    this.enterRule(_localctx, 8, ApiDefParser.RULE_typename);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 52;
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
    this.enterRule(_localctx, 10, ApiDefParser.RULE_struct);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 54;
        this.match(ApiDefParser.T__4);
        this.state = 60;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (_la === ApiDefParser.NAME) {
          {
            {
              this.state = 55;
              this.structfield();
              this.state = 56;
              this.match(ApiDefParser.T__2);
            }
          }
          this.state = 62;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        }
        this.state = 63;
        this.match(ApiDefParser.T__5);
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
    this.enterRule(_localctx, 12, ApiDefParser.RULE_structfield);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 65;
        this.fieldname();
        this.state = 66;
        this.match(ApiDefParser.T__6);
        this.state = 67;
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
    this.enterRule(_localctx, 14, ApiDefParser.RULE_fieldname);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 69;
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

  public static readonly _serializedATN: string = "\x03\uAF6F\u8320\u479D\uB75C\u4880\u1605\u191C\uAB37\x03\vJ\x04\x02\t" +
    "\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07\t" +
    "\x07\x04\b\t\b\x04\t\t\t\x03\x02\x07\x02\x14\n\x02\f\x02\x0E\x02\x17\v" +
    "\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
    "\x04\x03\x04\x03\x04\x07\x04$\n\x04\f\x04\x0E\x04'\v\x04\x03\x04\x03" +
    "\x04\x03\x04\x03\x04\x06\x04-\n\x04\r\x04\x0E\x04.\x05\x041\n\x04\x03" +
    "\x05\x03\x05\x05\x055\n\x05\x03\x06\x03\x06\x03\x07\x03\x07\x03\x07\x03" +
    "\x07\x07\x07=\n\x07\f\x07\x0E\x07@\v\x07\x03\x07\x03\x07\x03\b\x03\b\x03" +
    "\b\x03\b\x03\t\x03\t\x03\t\x02\x02\x02\n\x02\x02\x04\x02\x06\x02\b\x02" +
    "\n\x02\f\x02\x0E\x02\x10\x02\x02\x02G\x02\x15\x03\x02\x02\x02\x04\x1A" +
    "\x03\x02\x02\x02\x060\x03\x02\x02\x02\b4\x03\x02\x02\x02\n6\x03\x02\x02" +
    "\x02\f8\x03\x02\x02\x02\x0EC\x03\x02\x02\x02\x10G\x03\x02\x02\x02\x12" +
    "\x14\x05\x04\x03\x02\x13\x12\x03\x02\x02\x02\x14\x17\x03\x02\x02\x02\x15" +
    "\x13\x03\x02\x02\x02\x15\x16\x03\x02\x02\x02\x16\x18\x03\x02\x02\x02\x17" +
    "\x15\x03\x02\x02\x02\x18\x19\x07\x02\x02\x03\x19\x03\x03\x02\x02\x02\x1A" +
    "\x1B\x07\x03\x02\x02\x1B\x1C\x05\n\x06\x02\x1C\x1D\x07\x04\x02\x02\x1D" +
    "\x1E\x05\x06\x04\x02\x1E\x1F\x07\x05\x02\x02\x1F\x05\x03\x02\x02\x02 " +
    '%\x05\b\x05\x02!"\x07\x06\x02\x02"$\x05\b\x05\x02#!\x03\x02\x02\x02' +
    "$'\x03\x02\x02\x02%#\x03\x02\x02\x02%&\x03\x02\x02\x02&1\x03\x02\x02" +
    "\x02'%\x03\x02\x02\x02()\x07\x06\x02\x02),\x05\b\x05\x02*+\x07\x06\x02" +
    "\x02+-\x05\b\x05\x02,*\x03\x02\x02\x02-.\x03\x02\x02\x02.,\x03\x02\x02" +
    "\x02./\x03\x02\x02\x02/1\x03\x02\x02\x020 \x03\x02\x02\x020(\x03\x02\x02" +
    "\x021\x07\x03\x02\x02\x0225\x05\n\x06\x0235\x05\f\x07\x0242\x03\x02\x02" +
    "\x0243\x03\x02\x02\x025\t\x03\x02\x02\x0267\x07\n\x02\x027\v\x03\x02\x02" +
    "\x028>\x07\x07\x02\x029:\x05\x0E\b\x02:;\x07\x05\x02\x02;=\x03\x02\x02" +
    "\x02<9\x03\x02\x02\x02=@\x03\x02\x02\x02><\x03\x02\x02\x02>?\x03\x02\x02" +
    "\x02?A\x03\x02\x02\x02@>\x03\x02\x02\x02AB\x07\b\x02\x02B\r\x03\x02\x02" +
    "\x02CD\x05\x10\t\x02DE\x07\t\x02\x02EF\x05\x06\x04\x02F\x0F\x03\x02\x02" +
    "\x02GH\x07\n\x02\x02H\x11\x03\x02\x02\x02\b\x15%.04>";
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
