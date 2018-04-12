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
import { RecognitionException } from 'antlr4ts/RecognitionException';
import { RuleContext } from 'antlr4ts/RuleContext';
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
	public static readonly T__7=8;
	public static readonly T__8=9;
	public static readonly T__9=10;
	public static readonly T__10=11;
	public static readonly T__11=12;
	public static readonly T__12=13;
	public static readonly T__13=14;
	public static readonly T__14=15;
	public static readonly T__15=16;
	public static readonly T__16=17;
	public static readonly T__17=18;
	public static readonly T__18=19;
	public static readonly T__19=20;
	public static readonly NAME=21;
	public static readonly NUMBER=22;
	public static readonly LINEBREAK=23;
	public static readonly WHITESPACE=24;
	public static readonly BLOCK_COMMENT=25;
	public static readonly LINE_COMMENT=26;
	public static readonly RULE_api = 0;
	public static readonly RULE_endpoint = 1;
	public static readonly RULE_headers = 2;
	public static readonly RULE_endpointname = 3;
	public static readonly RULE_endpointoutput = 4;
	public static readonly RULE_method = 5;
	public static readonly RULE_route = 6;
	public static readonly RULE_subpath = 7;
	public static readonly RULE_typedef = 8;
	public static readonly RULE_type = 9;
	public static readonly RULE_array = 10;
	public static readonly RULE_struct = 11;
	public static readonly RULE_structfield = 12;
	public static readonly RULE_statusname = 13;
	public static readonly RULE_statuscode = 14;
	public static readonly RULE_fieldname = 15;
	public static readonly RULE_typename = 16;
	public static readonly RULE_symbol = 17;
	public static readonly RULE_name = 18;
	public static readonly RULE_separator = 19;
	public static readonly ruleNames: string[] = [
		"api", "endpoint", "headers", "endpointname", "endpointoutput", "method", 
		"route", "subpath", "typedef", "type", "array", "struct", "structfield", 
		"statusname", "statuscode", "fieldname", "typename", "symbol", "name", 
		"separator"
	];

	private static readonly _LITERAL_NAMES: (string | undefined)[] = [
		undefined, "'endpoint'", "':'", "'@headers'", "'('", "')'", "'->'", "'GET'", 
		"'POST'", "'PUT'", "'DELETE'", "'/'", "'type'", "'='", "'|'", "'[]'", 
		"'{'", "'}'", "'?'", "'@'", "';'"
	];
	private static readonly _SYMBOLIC_NAMES: (string | undefined)[] = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		"NAME", "NUMBER", "LINEBREAK", "WHITESPACE", "BLOCK_COMMENT", "LINE_COMMENT"
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
	
	public api(): ApiContext {
		let _localctx: ApiContext = new ApiContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, ApiDefParser.RULE_api);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 43;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===ApiDefParser.LINEBREAK) {
				{
				{
				this.state = 40;
				this.match(ApiDefParser.LINEBREAK);
				}
				}
				this.state = 45;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 50;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ApiDefParser.T__0) | (1 << ApiDefParser.T__2) | (1 << ApiDefParser.T__11))) !== 0)) {
				{
				this.state = 48;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case ApiDefParser.T__0:
				case ApiDefParser.T__2:
					{
					this.state = 46;
					this.endpoint();
					}
					break;
				case ApiDefParser.T__11:
					{
					this.state = 47;
					this.typedef();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 52;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 53;
			this.match(ApiDefParser.EOF);
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
	
	public endpoint(): EndpointContext {
		let _localctx: EndpointContext = new EndpointContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, ApiDefParser.RULE_endpoint);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 56;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===ApiDefParser.T__2) {
				{
				this.state = 55;
				this.headers();
				}
			}

			this.state = 58;
			this.match(ApiDefParser.T__0);
			this.state = 59;
			this.endpointname();
			this.state = 60;
			this.match(ApiDefParser.T__1);
			this.state = 61;
			this.method();
			this.state = 62;
			this.route();
			this.state = 63;
			this.typename();
			this.state = 65; 
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 64;
					this.endpointoutput();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 67; 
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,4,this._ctx);
			} while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER );
			this.state = 69;
			this.separator();
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
	
	public headers(): HeadersContext {
		let _localctx: HeadersContext = new HeadersContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, ApiDefParser.RULE_headers);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 71;
			this.match(ApiDefParser.T__2);
			this.state = 72;
			this.match(ApiDefParser.T__3);
			this.state = 73;
			this.typename();
			this.state = 74;
			this.match(ApiDefParser.T__4);
			this.state = 76; 
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 75;
				this.match(ApiDefParser.LINEBREAK);
				}
				}
				this.state = 78; 
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ( _la===ApiDefParser.LINEBREAK );
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
	
	public endpointname(): EndpointnameContext {
		let _localctx: EndpointnameContext = new EndpointnameContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, ApiDefParser.RULE_endpointname);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 80;
			this.name();
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
	
	public endpointoutput(): EndpointoutputContext {
		let _localctx: EndpointoutputContext = new EndpointoutputContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, ApiDefParser.RULE_endpointoutput);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 83; 
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 82;
				this.match(ApiDefParser.LINEBREAK);
				}
				}
				this.state = 85; 
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ( _la===ApiDefParser.LINEBREAK );
			this.state = 87;
			this.match(ApiDefParser.T__5);
			this.state = 88;
			this.statusname();
			this.state = 89;
			this.statuscode();
			this.state = 90;
			this.typename();
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
	
	public method(): MethodContext {
		let _localctx: MethodContext = new MethodContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, ApiDefParser.RULE_method);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 92;
			_la = this._input.LA(1);
			if ( !((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ApiDefParser.T__6) | (1 << ApiDefParser.T__7) | (1 << ApiDefParser.T__8) | (1 << ApiDefParser.T__9))) !== 0)) ) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
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
	
	public route(): RouteContext {
		let _localctx: RouteContext = new RouteContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, ApiDefParser.RULE_route);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 96; 
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 94;
				this.match(ApiDefParser.T__10);
				this.state = 95;
				this.subpath();
				}
				}
				this.state = 98; 
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ( _la===ApiDefParser.T__10 );
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
	
	public subpath(): SubpathContext {
		let _localctx: SubpathContext = new SubpathContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, ApiDefParser.RULE_subpath);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 101;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===ApiDefParser.T__1) {
				{
				this.state = 100;
				_localctx._dynamic = this.match(ApiDefParser.T__1);
				}
			}

			this.state = 103;
			this.name();
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
	
	public typedef(): TypedefContext {
		let _localctx: TypedefContext = new TypedefContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, ApiDefParser.RULE_typedef);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 105;
			this.match(ApiDefParser.T__11);
			this.state = 106;
			this.typename();
			this.state = 110;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===ApiDefParser.LINEBREAK) {
				{
				{
				this.state = 107;
				this.match(ApiDefParser.LINEBREAK);
				}
				}
				this.state = 112;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 113;
			this.match(ApiDefParser.T__12);
			this.state = 117;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===ApiDefParser.LINEBREAK) {
				{
				{
				this.state = 114;
				this.match(ApiDefParser.LINEBREAK);
				}
				}
				this.state = 119;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 120;
			this.type(0);
			this.state = 121;
			this.separator();
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

	public type(): TypeContext;
	public type(_p: number): TypeContext;
	
	public type(_p?: number): TypeContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: TypeContext = new TypeContext(this._ctx, _parentState);
		let _startState: number = 18;
		this.enterRecursionRule(_localctx, 18, ApiDefParser.RULE_type, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 152;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,15,this._ctx) ) {
			case 1:
				{
				this.state = 124;
				this.array();
				this.state = 128;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,11,this._ctx);
				while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
					if ( _alt===1 ) {
						{
						{
						this.state = 125;
						this.match(ApiDefParser.LINEBREAK);
						}
						} 
					}
					this.state = 130;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input,11,this._ctx);
				}
				}
				break;

			case 2:
				{
				this.state = 131;
				this.struct();
				this.state = 135;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,12,this._ctx);
				while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
					if ( _alt===1 ) {
						{
						{
						this.state = 132;
						this.match(ApiDefParser.LINEBREAK);
						}
						} 
					}
					this.state = 137;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input,12,this._ctx);
				}
				}
				break;

			case 3:
				{
				this.state = 138;
				this.symbol();
				this.state = 142;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,13,this._ctx);
				while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
					if ( _alt===1 ) {
						{
						{
						this.state = 139;
						this.match(ApiDefParser.LINEBREAK);
						}
						} 
					}
					this.state = 144;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input,13,this._ctx);
				}
				}
				break;

			case 4:
				{
				this.state = 145;
				this.typename();
				this.state = 149;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,14,this._ctx);
				while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
					if ( _alt===1 ) {
						{
						{
						this.state = 146;
						this.match(ApiDefParser.LINEBREAK);
						}
						} 
					}
					this.state = 151;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input,14,this._ctx);
				}
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 165;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,17,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					if ( this._parseListeners!=null ) this.triggerExitRuleEvent();
					{
					{
					_localctx = new TypeContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, ApiDefParser.RULE_type);
					this.state = 154;
					if (!(this.precpred(this._ctx, 4))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 4)");
					this.state = 155;
					this.match(ApiDefParser.T__13);
					this.state = 159;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la===ApiDefParser.LINEBREAK) {
						{
						{
						this.state = 156;
						this.match(ApiDefParser.LINEBREAK);
						}
						}
						this.state = 161;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 162;
					this.type(5);
					}
					} 
				}
				this.state = 167;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,17,this._ctx);
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
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	
	public array(): ArrayContext {
		let _localctx: ArrayContext = new ArrayContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, ApiDefParser.RULE_array);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 168;
			this.typename();
			this.state = 169;
			this.match(ApiDefParser.T__14);
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
	
	public struct(): StructContext {
		let _localctx: StructContext = new StructContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, ApiDefParser.RULE_struct);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 171;
			this.match(ApiDefParser.T__15);
			this.state = 175;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===ApiDefParser.LINEBREAK) {
				{
				{
				this.state = 172;
				this.match(ApiDefParser.LINEBREAK);
				}
				}
				this.state = 177;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 183;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ApiDefParser.T__0) | (1 << ApiDefParser.T__11) | (1 << ApiDefParser.NAME))) !== 0)) {
				{
				{
				this.state = 178;
				this.structfield();
				this.state = 179;
				this.separator();
				}
				}
				this.state = 185;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 186;
			this.match(ApiDefParser.T__16);
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
	
	public structfield(): StructfieldContext {
		let _localctx: StructfieldContext = new StructfieldContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, ApiDefParser.RULE_structfield);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 188;
			this.fieldname();
			this.state = 190;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===ApiDefParser.T__17) {
				{
				this.state = 189;
				_localctx._optional = this.match(ApiDefParser.T__17);
				}
			}

			this.state = 192;
			this.match(ApiDefParser.T__1);
			this.state = 193;
			this.type(0);
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
	
	public statusname(): StatusnameContext {
		let _localctx: StatusnameContext = new StatusnameContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, ApiDefParser.RULE_statusname);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 195;
			this.name();
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
	
	public statuscode(): StatuscodeContext {
		let _localctx: StatuscodeContext = new StatuscodeContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, ApiDefParser.RULE_statuscode);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 197;
			this.match(ApiDefParser.NUMBER);
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
	
	public fieldname(): FieldnameContext {
		let _localctx: FieldnameContext = new FieldnameContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, ApiDefParser.RULE_fieldname);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 199;
			this.name();
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
	
	public typename(): TypenameContext {
		let _localctx: TypenameContext = new TypenameContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, ApiDefParser.RULE_typename);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 201;
			this.name();
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
	
	public symbol(): SymbolContext {
		let _localctx: SymbolContext = new SymbolContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, ApiDefParser.RULE_symbol);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 203;
			this.match(ApiDefParser.T__18);
			this.state = 204;
			this.name();
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
	
	public name(): NameContext {
		let _localctx: NameContext = new NameContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, ApiDefParser.RULE_name);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 206;
			_la = this._input.LA(1);
			if ( !((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ApiDefParser.T__0) | (1 << ApiDefParser.T__11) | (1 << ApiDefParser.NAME))) !== 0)) ) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
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
	
	public separator(): SeparatorContext {
		let _localctx: SeparatorContext = new SeparatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, ApiDefParser.RULE_separator);
		let _la: number;
		try {
			this.state = 226;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,24,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 211;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===ApiDefParser.LINEBREAK) {
					{
					{
					this.state = 208;
					this.match(ApiDefParser.LINEBREAK);
					}
					}
					this.state = 213;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 214;
				this.match(ApiDefParser.T__19);
				this.state = 218;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===ApiDefParser.LINEBREAK) {
					{
					{
					this.state = 215;
					this.match(ApiDefParser.LINEBREAK);
					}
					}
					this.state = 220;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 222; 
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 221;
					this.match(ApiDefParser.LINEBREAK);
					}
					}
					this.state = 224; 
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while ( _la===ApiDefParser.LINEBREAK );
				}
				break;
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

	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 9:
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

	public static readonly _serializedATN: string =
		"\x03\uAF6F\u8320\u479D\uB75C\u4880\u1605\u191C\uAB37\x03\x1C\xE7\x04\x02"+
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07"+
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04"+
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04"+
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x03\x02\x07\x02,\n\x02\f\x02\x0E"+
		"\x02/\v\x02\x03\x02\x03\x02\x07\x023\n\x02\f\x02\x0E\x026\v\x02\x03\x02"+
		"\x03\x02\x03\x03\x05\x03;\n\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03"+
		"\x03\x03\x03\x03\x06\x03D\n\x03\r\x03\x0E\x03E\x03\x03\x03\x03\x03\x04"+
		"\x03\x04\x03\x04\x03\x04\x03\x04\x06\x04O\n\x04\r\x04\x0E\x04P\x03\x05"+
		"\x03\x05\x03\x06\x06\x06V\n\x06\r\x06\x0E\x06W\x03\x06\x03\x06\x03\x06"+
		"\x03\x06\x03\x06\x03\x07\x03\x07\x03\b\x03\b\x06\bc\n\b\r\b\x0E\bd\x03"+
		"\t\x05\th\n\t\x03\t\x03\t\x03\n\x03\n\x03\n\x07\no\n\n\f\n\x0E\nr\v\n"+
		"\x03\n\x03\n\x07\nv\n\n\f\n\x0E\ny\v\n\x03\n\x03\n\x03\n\x03\v\x03\v\x03"+
		"\v\x07\v\x81\n\v\f\v\x0E\v\x84\v\v\x03\v\x03\v\x07\v\x88\n\v\f\v\x0E\v"+
		"\x8B\v\v\x03\v\x03\v\x07\v\x8F\n\v\f\v\x0E\v\x92\v\v\x03\v\x03\v\x07\v"+
		"\x96\n\v\f\v\x0E\v\x99\v\v\x05\v\x9B\n\v\x03\v\x03\v\x03\v\x07\v\xA0\n"+
		"\v\f\v\x0E\v\xA3\v\v\x03\v\x07\v\xA6\n\v\f\v\x0E\v\xA9\v\v\x03\f\x03\f"+
		"\x03\f\x03\r\x03\r\x07\r\xB0\n\r\f\r\x0E\r\xB3\v\r\x03\r\x03\r\x03\r\x07"+
		"\r\xB8\n\r\f\r\x0E\r\xBB\v\r\x03\r\x03\r\x03\x0E\x03\x0E\x05\x0E\xC1\n"+
		"\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x10\x03\x10\x03\x11\x03"+
		"\x11\x03\x12\x03\x12\x03\x13\x03\x13\x03\x13\x03\x14\x03\x14\x03\x15\x07"+
		"\x15\xD4\n\x15\f\x15\x0E\x15\xD7\v\x15\x03\x15\x03\x15\x07\x15\xDB\n\x15"+
		"\f\x15\x0E\x15\xDE\v\x15\x03\x15\x06\x15\xE1\n\x15\r\x15\x0E\x15\xE2\x05"+
		"\x15\xE5\n\x15\x03\x15\x02\x02\x03\x14\x16\x02\x02\x04\x02\x06\x02\b\x02"+
		"\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C"+
		"\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02\x02\x04\x03\x02\t\f\x05\x02\x03"+
		"\x03\x0E\x0E\x17\x17\xED\x02-\x03\x02\x02\x02\x04:\x03\x02\x02\x02\x06"+
		"I\x03\x02\x02\x02\bR\x03\x02\x02\x02\nU\x03\x02\x02\x02\f^\x03\x02\x02"+
		"\x02\x0Eb\x03\x02\x02\x02\x10g\x03\x02\x02\x02\x12k\x03\x02\x02\x02\x14"+
		"\x9A\x03\x02\x02\x02\x16\xAA\x03\x02\x02\x02\x18\xAD\x03\x02\x02\x02\x1A"+
		"\xBE\x03\x02\x02\x02\x1C\xC5\x03\x02\x02\x02\x1E\xC7\x03\x02\x02\x02 "+
		"\xC9\x03\x02\x02\x02\"\xCB\x03\x02\x02\x02$\xCD\x03\x02\x02\x02&\xD0\x03"+
		"\x02\x02\x02(\xE4\x03\x02\x02\x02*,\x07\x19\x02\x02+*\x03\x02\x02\x02"+
		",/\x03\x02\x02\x02-+\x03\x02\x02\x02-.\x03\x02\x02\x02.4\x03\x02\x02\x02"+
		"/-\x03\x02\x02\x0203\x05\x04\x03\x0213\x05\x12\n\x0220\x03\x02\x02\x02"+
		"21\x03\x02\x02\x0236\x03\x02\x02\x0242\x03\x02\x02\x0245\x03\x02\x02\x02"+
		"57\x03\x02\x02\x0264\x03\x02\x02\x0278\x07\x02\x02\x038\x03\x03\x02\x02"+
		"\x029;\x05\x06\x04\x02:9\x03\x02\x02\x02:;\x03\x02\x02\x02;<\x03\x02\x02"+
		"\x02<=\x07\x03\x02\x02=>\x05\b\x05\x02>?\x07\x04\x02\x02?@\x05\f\x07\x02"+
		"@A\x05\x0E\b\x02AC\x05\"\x12\x02BD\x05\n\x06\x02CB\x03\x02\x02\x02DE\x03"+
		"\x02\x02\x02EC\x03\x02\x02\x02EF\x03\x02\x02\x02FG\x03\x02\x02\x02GH\x05"+
		"(\x15\x02H\x05\x03\x02\x02\x02IJ\x07\x05\x02\x02JK\x07\x06\x02\x02KL\x05"+
		"\"\x12\x02LN\x07\x07\x02\x02MO\x07\x19\x02\x02NM\x03\x02\x02\x02OP\x03"+
		"\x02\x02\x02PN\x03\x02\x02\x02PQ\x03\x02\x02\x02Q\x07\x03\x02\x02\x02"+
		"RS\x05&\x14\x02S\t\x03\x02\x02\x02TV\x07\x19\x02\x02UT\x03\x02\x02\x02"+
		"VW\x03\x02\x02\x02WU\x03\x02\x02\x02WX\x03\x02\x02\x02XY\x03\x02\x02\x02"+
		"YZ\x07\b\x02\x02Z[\x05\x1C\x0F\x02[\\\x05\x1E\x10\x02\\]\x05\"\x12\x02"+
		"]\v\x03\x02\x02\x02^_\t\x02\x02\x02_\r\x03\x02\x02\x02`a\x07\r\x02\x02"+
		"ac\x05\x10\t\x02b`\x03\x02\x02\x02cd\x03\x02\x02\x02db\x03\x02\x02\x02"+
		"de\x03\x02\x02\x02e\x0F\x03\x02\x02\x02fh\x07\x04\x02\x02gf\x03\x02\x02"+
		"\x02gh\x03\x02\x02\x02hi\x03\x02\x02\x02ij\x05&\x14\x02j\x11\x03\x02\x02"+
		"\x02kl\x07\x0E\x02\x02lp\x05\"\x12\x02mo\x07\x19\x02\x02nm\x03\x02\x02"+
		"\x02or\x03\x02\x02\x02pn\x03\x02\x02\x02pq\x03\x02\x02\x02qs\x03\x02\x02"+
		"\x02rp\x03\x02\x02\x02sw\x07\x0F\x02\x02tv\x07\x19\x02\x02ut\x03\x02\x02"+
		"\x02vy\x03\x02\x02\x02wu\x03\x02\x02\x02wx\x03\x02\x02\x02xz\x03\x02\x02"+
		"\x02yw\x03\x02\x02\x02z{\x05\x14\v\x02{|\x05(\x15\x02|\x13\x03\x02\x02"+
		"\x02}~\b\v\x01\x02~\x82\x05\x16\f\x02\x7F\x81\x07\x19\x02\x02\x80\x7F"+
		"\x03\x02\x02\x02\x81\x84\x03\x02\x02\x02\x82\x80\x03\x02\x02\x02\x82\x83"+
		"\x03\x02\x02\x02\x83\x9B\x03\x02\x02\x02\x84\x82\x03\x02\x02\x02\x85\x89"+
		"\x05\x18\r\x02\x86\x88\x07\x19\x02\x02\x87\x86\x03\x02\x02\x02\x88\x8B"+
		"\x03\x02\x02\x02\x89\x87\x03\x02\x02\x02\x89\x8A\x03\x02\x02\x02\x8A\x9B"+
		"\x03\x02\x02\x02\x8B\x89\x03\x02\x02\x02\x8C\x90\x05$\x13\x02\x8D\x8F"+
		"\x07\x19\x02\x02\x8E\x8D\x03\x02\x02\x02\x8F\x92\x03\x02\x02\x02\x90\x8E"+
		"\x03\x02\x02\x02\x90\x91\x03\x02\x02\x02\x91\x9B\x03\x02\x02\x02\x92\x90"+
		"\x03\x02\x02\x02\x93\x97\x05\"\x12\x02\x94\x96\x07\x19\x02\x02\x95\x94"+
		"\x03\x02\x02\x02\x96\x99\x03\x02\x02\x02\x97\x95\x03\x02\x02\x02\x97\x98"+
		"\x03\x02\x02\x02\x98\x9B\x03\x02\x02\x02\x99\x97\x03\x02\x02\x02\x9A}"+
		"\x03\x02\x02\x02\x9A\x85\x03\x02\x02\x02\x9A\x8C\x03\x02\x02\x02\x9A\x93"+
		"\x03\x02\x02\x02\x9B\xA7\x03\x02\x02\x02\x9C\x9D\f\x06\x02\x02\x9D\xA1"+
		"\x07\x10\x02\x02\x9E\xA0\x07\x19\x02\x02\x9F\x9E\x03\x02\x02\x02\xA0\xA3"+
		"\x03\x02\x02\x02\xA1\x9F\x03\x02\x02\x02\xA1\xA2\x03\x02\x02\x02\xA2\xA4"+
		"\x03\x02\x02\x02\xA3\xA1\x03\x02\x02\x02\xA4\xA6\x05\x14\v\x07\xA5\x9C"+
		"\x03\x02\x02\x02\xA6\xA9\x03\x02\x02\x02\xA7\xA5\x03\x02\x02\x02\xA7\xA8"+
		"\x03\x02\x02\x02\xA8\x15\x03\x02\x02\x02\xA9\xA7\x03\x02\x02\x02\xAA\xAB"+
		"\x05\"\x12\x02\xAB\xAC\x07\x11\x02\x02\xAC\x17\x03\x02\x02\x02\xAD\xB1"+
		"\x07\x12\x02\x02\xAE\xB0\x07\x19\x02\x02\xAF\xAE\x03\x02\x02\x02\xB0\xB3"+
		"\x03\x02\x02\x02\xB1\xAF\x03\x02\x02\x02\xB1\xB2\x03\x02\x02\x02\xB2\xB9"+
		"\x03\x02\x02\x02\xB3\xB1\x03\x02\x02\x02\xB4\xB5\x05\x1A\x0E\x02\xB5\xB6"+
		"\x05(\x15\x02\xB6\xB8\x03\x02\x02\x02\xB7\xB4\x03\x02\x02\x02\xB8\xBB"+
		"\x03\x02\x02\x02\xB9\xB7\x03\x02\x02\x02\xB9\xBA\x03\x02\x02\x02\xBA\xBC"+
		"\x03\x02\x02\x02\xBB\xB9\x03\x02\x02\x02\xBC\xBD\x07\x13\x02\x02\xBD\x19"+
		"\x03\x02\x02\x02\xBE\xC0\x05 \x11\x02\xBF\xC1\x07\x14\x02\x02\xC0\xBF"+
		"\x03\x02\x02\x02\xC0\xC1\x03\x02\x02\x02\xC1\xC2\x03\x02\x02\x02\xC2\xC3"+
		"\x07\x04\x02\x02\xC3\xC4\x05\x14\v\x02\xC4\x1B\x03\x02\x02\x02\xC5\xC6"+
		"\x05&\x14\x02\xC6\x1D\x03\x02\x02\x02\xC7\xC8\x07\x18\x02\x02\xC8\x1F"+
		"\x03\x02\x02\x02\xC9\xCA\x05&\x14\x02\xCA!\x03\x02\x02\x02\xCB\xCC\x05"+
		"&\x14\x02\xCC#\x03\x02\x02\x02\xCD\xCE\x07\x15\x02\x02\xCE\xCF\x05&\x14"+
		"\x02\xCF%\x03\x02\x02\x02\xD0\xD1\t\x03\x02\x02\xD1\'\x03\x02\x02\x02"+
		"\xD2\xD4\x07\x19\x02\x02\xD3\xD2\x03\x02\x02\x02\xD4\xD7\x03\x02\x02\x02"+
		"\xD5\xD3\x03\x02\x02\x02\xD5\xD6\x03\x02\x02\x02\xD6\xD8\x03\x02\x02\x02"+
		"\xD7\xD5\x03\x02\x02\x02\xD8\xDC\x07\x16\x02\x02\xD9\xDB\x07\x19\x02\x02"+
		"\xDA\xD9\x03\x02\x02\x02\xDB\xDE\x03\x02\x02\x02\xDC\xDA\x03\x02\x02\x02"+
		"\xDC\xDD\x03\x02\x02\x02\xDD\xE5\x03\x02\x02\x02\xDE\xDC\x03\x02\x02\x02"+
		"\xDF\xE1\x07\x19\x02\x02\xE0\xDF\x03\x02\x02\x02\xE1\xE2\x03\x02\x02\x02"+
		"\xE2\xE0\x03\x02\x02\x02\xE2\xE3\x03\x02\x02\x02\xE3\xE5\x03\x02\x02\x02"+
		"\xE4\xD5\x03\x02\x02\x02\xE4\xE0\x03\x02\x02\x02\xE5)\x03\x02\x02\x02"+
		"\x1B-24:EPWdgpw\x82\x89\x90\x97\x9A\xA1\xA7\xB1\xB9\xC0\xD5\xDC\xE2\xE4";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!ApiDefParser.__ATN) {
			ApiDefParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(ApiDefParser._serializedATN));
		}

		return ApiDefParser.__ATN;
	}

}

export class ApiContext extends ParserRuleContext {
	public EOF(): TerminalNode { return this.getToken(ApiDefParser.EOF, 0); }
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
	@Override public get ruleIndex(): number { return ApiDefParser.RULE_api; }
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
	public typename(): TypenameContext {
		return this.getRuleContext(0, TypenameContext);
	}
	public separator(): SeparatorContext {
		return this.getRuleContext(0, SeparatorContext);
	}
	public headers(): HeadersContext | undefined {
		return this.tryGetRuleContext(0, HeadersContext);
	}
	public endpointoutput(): EndpointoutputContext[];
	public endpointoutput(i: number): EndpointoutputContext;
	public endpointoutput(i?: number): EndpointoutputContext | EndpointoutputContext[] {
		if (i === undefined) {
			return this.getRuleContexts(EndpointoutputContext);
		} else {
			return this.getRuleContext(i, EndpointoutputContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return ApiDefParser.RULE_endpoint; }
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
	@Override public get ruleIndex(): number { return ApiDefParser.RULE_headers; }
}


export class EndpointnameContext extends ParserRuleContext {
	public name(): NameContext {
		return this.getRuleContext(0, NameContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return ApiDefParser.RULE_endpointname; }
}


export class EndpointoutputContext extends ParserRuleContext {
	public statusname(): StatusnameContext {
		return this.getRuleContext(0, StatusnameContext);
	}
	public statuscode(): StatuscodeContext {
		return this.getRuleContext(0, StatuscodeContext);
	}
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
	@Override public get ruleIndex(): number { return ApiDefParser.RULE_endpointoutput; }
}


export class MethodContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return ApiDefParser.RULE_method; }
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
	@Override public get ruleIndex(): number { return ApiDefParser.RULE_route; }
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
	@Override public get ruleIndex(): number { return ApiDefParser.RULE_subpath; }
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
	@Override public get ruleIndex(): number { return ApiDefParser.RULE_typedef; }
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
	@Override public get ruleIndex(): number { return ApiDefParser.RULE_type; }
}


export class ArrayContext extends ParserRuleContext {
	public typename(): TypenameContext {
		return this.getRuleContext(0, TypenameContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return ApiDefParser.RULE_array; }
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
	@Override public get ruleIndex(): number { return ApiDefParser.RULE_struct; }
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
	@Override public get ruleIndex(): number { return ApiDefParser.RULE_structfield; }
}


export class StatusnameContext extends ParserRuleContext {
	public name(): NameContext {
		return this.getRuleContext(0, NameContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return ApiDefParser.RULE_statusname; }
}


export class StatuscodeContext extends ParserRuleContext {
	public NUMBER(): TerminalNode { return this.getToken(ApiDefParser.NUMBER, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return ApiDefParser.RULE_statuscode; }
}


export class FieldnameContext extends ParserRuleContext {
	public name(): NameContext {
		return this.getRuleContext(0, NameContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return ApiDefParser.RULE_fieldname; }
}


export class TypenameContext extends ParserRuleContext {
	public name(): NameContext {
		return this.getRuleContext(0, NameContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return ApiDefParser.RULE_typename; }
}


export class SymbolContext extends ParserRuleContext {
	public name(): NameContext {
		return this.getRuleContext(0, NameContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return ApiDefParser.RULE_symbol; }
}


export class NameContext extends ParserRuleContext {
	public NAME(): TerminalNode { return this.getToken(ApiDefParser.NAME, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return ApiDefParser.RULE_name; }
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
	@Override public get ruleIndex(): number { return ApiDefParser.RULE_separator; }
}


