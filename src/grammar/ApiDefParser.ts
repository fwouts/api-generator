// Generated from src/grammar/ApiDef.g4 by ANTLR 4.6-SNAPSHOT


import { ATN } from 'antlr4ts/atn/ATN';
import { ATNDeserializer } from 'antlr4ts/atn/ATNDeserializer';
import { FailedPredicateException } from 'antlr4ts/FailedPredicateException';
import { NotNull } from 'antlr4ts/Decorators';
import { NoViableAltException } from 'antlr4ts/NoViableAltException';
import { Override } from 'antlr4ts/Decorators';
import { Parser } from 'antlr4ts/Parser';
import { ParserRuleContext } from 'antlr4ts/ParserRuleContext';
import { ParserATNSimulator } from 'antlr4ts/atn/ParserATNSimulator';
import { ParseTreeListener } from 'antlr4ts/tree/ParseTreeListener';
import { ParseTreeVisitor } from 'antlr4ts/tree/ParseTreeVisitor';
import { RecognitionException } from 'antlr4ts/RecognitionException';
import { RuleContext } from 'antlr4ts/RuleContext';
import { RuleVersion } from 'antlr4ts/RuleVersion';
import { TerminalNode } from 'antlr4ts/tree/TerminalNode';
import { Token } from 'antlr4ts/Token';
import { TokenStream } from 'antlr4ts/TokenStream';
import { Vocabulary } from 'antlr4ts/Vocabulary';
import { VocabularyImpl } from 'antlr4ts/VocabularyImpl';

import * as Utils from 'antlr4ts/misc/Utils';


export class ApiDefParser extends Parser {
	public static readonly T__0=1;
	public static readonly T__1=2;
	public static readonly T__2=3;
	public static readonly T__3=4;
	public static readonly T__4=5;
	public static readonly T__5=6;
	public static readonly T__6=7;
	public static readonly NAME=8;
	public static readonly STRING=9;
	public static readonly WS=10;
	public static readonly RULE_api = 0;
	public static readonly RULE_typedef = 1;
	public static readonly RULE_union = 2;
	public static readonly RULE_singletype = 3;
	public static readonly RULE_typename = 4;
	public static readonly RULE_struct = 5;
	public static readonly RULE_structfield = 6;
	public static readonly ruleNames: string[] = [
		"api", "typedef", "union", "singletype", "typename", "struct", "structfield"
	];

	private static readonly _LITERAL_NAMES: (string | undefined)[] = [
		undefined, "'type'", "'='", "';'", "'|'", "'{'", "'}'", "':'"
	];
	private static readonly _SYMBOLIC_NAMES: (string | undefined)[] = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, "NAME", "STRING", "WS"
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(ApiDefParser._LITERAL_NAMES, ApiDefParser._SYMBOLIC_NAMES, []);

	@Override
	@NotNull
	public get vocabulary(): Vocabulary {
		return ApiDefParser.VOCABULARY;
	}

	@Override
	public get grammarFileName(): string { return "ApiDef.g4"; }

	@Override
	public get ruleNames(): string[] { return ApiDefParser.ruleNames; }

	@Override
	public get serializedATN(): string { return ApiDefParser._serializedATN; }

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(ApiDefParser._ATN, this);
	}
	@RuleVersion(0)
	public api(): ApiContext {
		let _localctx: ApiContext = new ApiContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, ApiDefParser.RULE_api);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 17;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===ApiDefParser.T__0) {
				{
				{
				this.state = 14;
				this.typedef();
				}
				}
				this.state = 19;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public typedef(): TypedefContext {
		let _localctx: TypedefContext = new TypedefContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, ApiDefParser.RULE_typedef);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 20;
			this.match(ApiDefParser.T__0);
			this.state = 21;
			this.match(ApiDefParser.NAME);
			this.state = 22;
			this.match(ApiDefParser.T__1);
			this.state = 23;
			this.union();
			this.state = 24;
			this.match(ApiDefParser.T__2);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public union(): UnionContext {
		let _localctx: UnionContext = new UnionContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, ApiDefParser.RULE_union);
		let _la: number;
		try {
			this.state = 42;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ApiDefParser.T__4:
			case ApiDefParser.NAME:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 26;
				this.singletype();
				this.state = 31;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===ApiDefParser.T__3) {
					{
					{
					this.state = 27;
					this.match(ApiDefParser.T__3);
					this.state = 28;
					this.singletype();
					}
					}
					this.state = 33;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				break;
			case ApiDefParser.T__3:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 34;
				this.match(ApiDefParser.T__3);
				this.state = 35;
				this.singletype();
				this.state = 38; 
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 36;
					this.match(ApiDefParser.T__3);
					this.state = 37;
					this.singletype();
					}
					}
					this.state = 40; 
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while ( _la===ApiDefParser.T__3 );
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public singletype(): SingletypeContext {
		let _localctx: SingletypeContext = new SingletypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, ApiDefParser.RULE_singletype);
		try {
			this.state = 46;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ApiDefParser.NAME:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 44;
				this.typename();
				}
				break;
			case ApiDefParser.T__4:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 45;
				this.struct();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public typename(): TypenameContext {
		let _localctx: TypenameContext = new TypenameContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, ApiDefParser.RULE_typename);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 48;
			this.match(ApiDefParser.NAME);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public struct(): StructContext {
		let _localctx: StructContext = new StructContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, ApiDefParser.RULE_struct);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 50;
			this.match(ApiDefParser.T__4);
			this.state = 54; 
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 51;
				this.structfield();
				this.state = 52;
				this.match(ApiDefParser.T__2);
				}
				}
				this.state = 56; 
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ( _la===ApiDefParser.NAME );
			this.state = 58;
			this.match(ApiDefParser.T__5);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public structfield(): StructfieldContext {
		let _localctx: StructfieldContext = new StructfieldContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, ApiDefParser.RULE_structfield);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 60;
			this.match(ApiDefParser.NAME);
			this.state = 61;
			this.match(ApiDefParser.T__6);
			this.state = 62;
			this.union();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public static readonly _serializedATN: string =
		"\x03\uAF6F\u8320\u479D\uB75C\u4880\u1605\u191C\uAB37\x03\fC\x04\x02\t"+
		"\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07\t"+
		"\x07\x04\b\t\b\x03\x02\x07\x02\x12\n\x02\f\x02\x0E\x02\x15\v\x02\x03\x03"+
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x04\x03\x04\x03\x04\x07\x04"+
		" \n\x04\f\x04\x0E\x04#\v\x04\x03\x04\x03\x04\x03\x04\x03\x04\x06\x04)"+
		"\n\x04\r\x04\x0E\x04*\x05\x04-\n\x04\x03\x05\x03\x05\x05\x051\n\x05\x03"+
		"\x06\x03\x06\x03\x07\x03\x07\x03\x07\x03\x07\x06\x079\n\x07\r\x07\x0E"+
		"\x07:\x03\x07\x03\x07\x03\b\x03\b\x03\b\x03\b\x03\b\x02\x02\x02\t\x02"+
		"\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x02\x02A\x02\x13\x03\x02"+
		"\x02\x02\x04\x16\x03\x02\x02\x02\x06,\x03\x02\x02\x02\b0\x03\x02\x02\x02"+
		"\n2\x03\x02\x02\x02\f4\x03\x02\x02\x02\x0E>\x03\x02\x02\x02\x10\x12\x05"+
		"\x04\x03\x02\x11\x10\x03\x02\x02\x02\x12\x15\x03\x02\x02\x02\x13\x11\x03"+
		"\x02\x02\x02\x13\x14\x03\x02\x02\x02\x14\x03\x03\x02\x02\x02\x15\x13\x03"+
		"\x02\x02\x02\x16\x17\x07\x03\x02\x02\x17\x18\x07\n\x02\x02\x18\x19\x07"+
		"\x04\x02\x02\x19\x1A\x05\x06\x04\x02\x1A\x1B\x07\x05\x02\x02\x1B\x05\x03"+
		"\x02\x02\x02\x1C!\x05\b\x05\x02\x1D\x1E\x07\x06\x02\x02\x1E \x05\b\x05"+
		"\x02\x1F\x1D\x03\x02\x02\x02 #\x03\x02\x02\x02!\x1F\x03\x02\x02\x02!\""+
		"\x03\x02\x02\x02\"-\x03\x02\x02\x02#!\x03\x02\x02\x02$%\x07\x06\x02\x02"+
		"%(\x05\b\x05\x02&\'\x07\x06\x02\x02\')\x05\b\x05\x02(&\x03\x02\x02\x02"+
		")*\x03\x02\x02\x02*(\x03\x02\x02\x02*+\x03\x02\x02\x02+-\x03\x02\x02\x02"+
		",\x1C\x03\x02\x02\x02,$\x03\x02\x02\x02-\x07\x03\x02\x02\x02.1\x05\n\x06"+
		"\x02/1\x05\f\x07\x020.\x03\x02\x02\x020/\x03\x02\x02\x021\t\x03\x02\x02"+
		"\x0223\x07\n\x02\x023\v\x03\x02\x02\x0248\x07\x07\x02\x0256\x05\x0E\b"+
		"\x0267\x07\x05\x02\x0279\x03\x02\x02\x0285\x03\x02\x02\x029:\x03\x02\x02"+
		"\x02:8\x03\x02\x02\x02:;\x03\x02\x02\x02;<\x03\x02\x02\x02<=\x07\b\x02"+
		"\x02=\r\x03\x02\x02\x02>?\x07\n\x02\x02?@\x07\t\x02\x02@A\x05\x06\x04"+
		"\x02A\x0F\x03\x02\x02\x02\b\x13!*,0:";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!ApiDefParser.__ATN) {
			ApiDefParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(ApiDefParser._serializedATN));
		}

		return ApiDefParser.__ATN;
	}

}

export class ApiContext extends ParserRuleContext {
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
	@Override public get ruleIndex(): number { return ApiDefParser.RULE_api; }
}


export class TypedefContext extends ParserRuleContext {
	public NAME(): TerminalNode { return this.getToken(ApiDefParser.NAME, 0); }
	public union(): UnionContext {
		return this.getRuleContext(0, UnionContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return ApiDefParser.RULE_typedef; }
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
	@Override public get ruleIndex(): number { return ApiDefParser.RULE_union; }
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
	@Override public get ruleIndex(): number { return ApiDefParser.RULE_singletype; }
}


export class TypenameContext extends ParserRuleContext {
	public NAME(): TerminalNode { return this.getToken(ApiDefParser.NAME, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return ApiDefParser.RULE_typename; }
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
	@Override public get ruleIndex(): number { return ApiDefParser.RULE_struct; }
}


export class StructfieldContext extends ParserRuleContext {
	public NAME(): TerminalNode { return this.getToken(ApiDefParser.NAME, 0); }
	public union(): UnionContext {
		return this.getRuleContext(0, UnionContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return ApiDefParser.RULE_structfield; }
}


