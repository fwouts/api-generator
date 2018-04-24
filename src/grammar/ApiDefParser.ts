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
	public static readonly T__20=21;
	public static readonly T__21=22;
	public static readonly T__22=23;
	public static readonly NAME=24;
	public static readonly NUMBER=25;
	public static readonly LINEBREAK=26;
	public static readonly WHITESPACE=27;
	public static readonly BLOCK_COMMENT=28;
	public static readonly LINE_COMMENT=29;
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
	public static readonly RULE_map = 11;
	public static readonly RULE_struct = 12;
	public static readonly RULE_structfield = 13;
	public static readonly RULE_statusname = 14;
	public static readonly RULE_statuscode = 15;
	public static readonly RULE_fieldname = 16;
	public static readonly RULE_typename = 17;
	public static readonly RULE_symbol = 18;
	public static readonly RULE_name = 19;
	public static readonly RULE_separator = 20;
	public static readonly ruleNames: string[] = [
		"api", "endpoint", "headers", "endpointname", "endpointoutput", "method", 
		"route", "subpath", "typedef", "type", "array", "map", "struct", "structfield", 
		"statusname", "statuscode", "fieldname", "typename", "symbol", "name", 
		"separator"
	];

	private static readonly _LITERAL_NAMES: (string | undefined)[] = [
		undefined, "'endpoint'", "':'", "'@headers'", "'('", "')'", "'->'", "'GET'", 
		"'POST'", "'PUT'", "'DELETE'", "'/'", "'type'", "'='", "'|'", "'[]'", 
		"'Array<'", "'>'", "'Map<'", "'{'", "'}'", "'?'", "'@'", "';'"
	];
	private static readonly _SYMBOLIC_NAMES: (string | undefined)[] = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, "NAME", "NUMBER", "LINEBREAK", "WHITESPACE", 
		"BLOCK_COMMENT", "LINE_COMMENT"
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
			this.state = 45;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===ApiDefParser.LINEBREAK) {
				{
				{
				this.state = 42;
				this.match(ApiDefParser.LINEBREAK);
				}
				}
				this.state = 47;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 52;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ApiDefParser.T__0) | (1 << ApiDefParser.T__2) | (1 << ApiDefParser.T__11))) !== 0)) {
				{
				this.state = 50;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case ApiDefParser.T__0:
				case ApiDefParser.T__2:
					{
					this.state = 48;
					this.endpoint();
					}
					break;
				case ApiDefParser.T__11:
					{
					this.state = 49;
					this.typedef();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 54;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 55;
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
			this.state = 58;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===ApiDefParser.T__2) {
				{
				this.state = 57;
				this.headers();
				}
			}

			this.state = 60;
			this.match(ApiDefParser.T__0);
			this.state = 61;
			this.endpointname();
			this.state = 62;
			this.match(ApiDefParser.T__1);
			this.state = 63;
			this.method();
			this.state = 64;
			this.route();
			this.state = 65;
			this.typename();
			this.state = 67; 
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 66;
					this.endpointoutput();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 69; 
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,4,this._ctx);
			} while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER );
			this.state = 71;
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
			this.state = 73;
			this.match(ApiDefParser.T__2);
			this.state = 74;
			this.match(ApiDefParser.T__3);
			this.state = 75;
			this.typename();
			this.state = 76;
			this.match(ApiDefParser.T__4);
			this.state = 78; 
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 77;
				this.match(ApiDefParser.LINEBREAK);
				}
				}
				this.state = 80; 
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
			this.state = 82;
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
			this.state = 85; 
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 84;
				this.match(ApiDefParser.LINEBREAK);
				}
				}
				this.state = 87; 
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ( _la===ApiDefParser.LINEBREAK );
			this.state = 89;
			this.match(ApiDefParser.T__5);
			this.state = 90;
			this.statusname();
			this.state = 91;
			this.statuscode();
			this.state = 92;
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
			this.state = 94;
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
			this.state = 98; 
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 96;
				this.match(ApiDefParser.T__10);
				this.state = 97;
				this.subpath();
				}
				}
				this.state = 100; 
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
			this.state = 103;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===ApiDefParser.T__1) {
				{
				this.state = 102;
				_localctx._dynamic = this.match(ApiDefParser.T__1);
				}
			}

			this.state = 105;
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
			this.state = 107;
			this.match(ApiDefParser.T__11);
			this.state = 108;
			this.typename();
			this.state = 112;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===ApiDefParser.LINEBREAK) {
				{
				{
				this.state = 109;
				this.match(ApiDefParser.LINEBREAK);
				}
				}
				this.state = 114;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 115;
			this.match(ApiDefParser.T__12);
			this.state = 119;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===ApiDefParser.LINEBREAK) {
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
			this.type(0);
			this.state = 123;
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
			this.state = 161;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,16,this._ctx) ) {
			case 1:
				{
				this.state = 126;
				this.array();
				this.state = 130;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,11,this._ctx);
				while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
					if ( _alt===1 ) {
						{
						{
						this.state = 127;
						this.match(ApiDefParser.LINEBREAK);
						}
						} 
					}
					this.state = 132;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input,11,this._ctx);
				}
				}
				break;

			case 2:
				{
				this.state = 133;
				this.map();
				this.state = 137;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,12,this._ctx);
				while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
					if ( _alt===1 ) {
						{
						{
						this.state = 134;
						this.match(ApiDefParser.LINEBREAK);
						}
						} 
					}
					this.state = 139;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input,12,this._ctx);
				}
				}
				break;

			case 3:
				{
				this.state = 140;
				this.struct();
				this.state = 144;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,13,this._ctx);
				while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
					if ( _alt===1 ) {
						{
						{
						this.state = 141;
						this.match(ApiDefParser.LINEBREAK);
						}
						} 
					}
					this.state = 146;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input,13,this._ctx);
				}
				}
				break;

			case 4:
				{
				this.state = 147;
				this.symbol();
				this.state = 151;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,14,this._ctx);
				while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
					if ( _alt===1 ) {
						{
						{
						this.state = 148;
						this.match(ApiDefParser.LINEBREAK);
						}
						} 
					}
					this.state = 153;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input,14,this._ctx);
				}
				}
				break;

			case 5:
				{
				this.state = 154;
				this.typename();
				this.state = 158;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,15,this._ctx);
				while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
					if ( _alt===1 ) {
						{
						{
						this.state = 155;
						this.match(ApiDefParser.LINEBREAK);
						}
						} 
					}
					this.state = 160;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input,15,this._ctx);
				}
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 174;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,18,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					if ( this._parseListeners!=null ) this.triggerExitRuleEvent();
					{
					{
					_localctx = new TypeContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, ApiDefParser.RULE_type);
					this.state = 163;
					if (!(this.precpred(this._ctx, 4))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 4)");
					this.state = 164;
					this.match(ApiDefParser.T__13);
					this.state = 168;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la===ApiDefParser.LINEBREAK) {
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
				_alt = this.interpreter.adaptivePredict(this._input,18,this._ctx);
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
			this.state = 184;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ApiDefParser.T__0:
			case ApiDefParser.T__11:
			case ApiDefParser.NAME:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 177;
				this.typename();
				this.state = 178;
				this.match(ApiDefParser.T__14);
				}
				break;
			case ApiDefParser.T__15:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 180;
				this.match(ApiDefParser.T__15);
				this.state = 181;
				this.typename();
				this.state = 182;
				this.match(ApiDefParser.T__16);
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
	
	public map(): MapContext {
		let _localctx: MapContext = new MapContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, ApiDefParser.RULE_map);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 186;
			this.match(ApiDefParser.T__17);
			this.state = 187;
			this.typename();
			this.state = 188;
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
	
	public struct(): StructContext {
		let _localctx: StructContext = new StructContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, ApiDefParser.RULE_struct);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 190;
			this.match(ApiDefParser.T__18);
			this.state = 194;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===ApiDefParser.LINEBREAK) {
				{
				{
				this.state = 191;
				this.match(ApiDefParser.LINEBREAK);
				}
				}
				this.state = 196;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 202;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ApiDefParser.T__0) | (1 << ApiDefParser.T__11) | (1 << ApiDefParser.NAME))) !== 0)) {
				{
				{
				this.state = 197;
				this.structfield();
				this.state = 198;
				this.separator();
				}
				}
				this.state = 204;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 205;
			this.match(ApiDefParser.T__19);
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
		this.enterRule(_localctx, 26, ApiDefParser.RULE_structfield);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 207;
			this.fieldname();
			this.state = 209;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===ApiDefParser.T__20) {
				{
				this.state = 208;
				_localctx._optional = this.match(ApiDefParser.T__20);
				}
			}

			this.state = 211;
			this.match(ApiDefParser.T__1);
			this.state = 212;
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
		this.enterRule(_localctx, 28, ApiDefParser.RULE_statusname);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 214;
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
		this.enterRule(_localctx, 30, ApiDefParser.RULE_statuscode);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 216;
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
		this.enterRule(_localctx, 32, ApiDefParser.RULE_fieldname);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 218;
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
		this.enterRule(_localctx, 34, ApiDefParser.RULE_typename);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 220;
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
		this.enterRule(_localctx, 36, ApiDefParser.RULE_symbol);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 222;
			this.match(ApiDefParser.T__21);
			this.state = 223;
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
		this.enterRule(_localctx, 38, ApiDefParser.RULE_name);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 225;
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
		this.enterRule(_localctx, 40, ApiDefParser.RULE_separator);
		let _la: number;
		try {
			this.state = 245;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,26,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 230;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===ApiDefParser.LINEBREAK) {
					{
					{
					this.state = 227;
					this.match(ApiDefParser.LINEBREAK);
					}
					}
					this.state = 232;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 233;
				this.match(ApiDefParser.T__22);
				this.state = 237;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===ApiDefParser.LINEBREAK) {
					{
					{
					this.state = 234;
					this.match(ApiDefParser.LINEBREAK);
					}
					}
					this.state = 239;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 241; 
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 240;
					this.match(ApiDefParser.LINEBREAK);
					}
					}
					this.state = 243; 
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
		"\x03\uAF6F\u8320\u479D\uB75C\u4880\u1605\u191C\uAB37\x03\x1F\xFA\x04\x02"+
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07"+
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04"+
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04"+
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x03\x02\x07\x02."+
		"\n\x02\f\x02\x0E\x021\v\x02\x03\x02\x03\x02\x07\x025\n\x02\f\x02\x0E\x02"+
		"8\v\x02\x03\x02\x03\x02\x03\x03\x05\x03=\n\x03\x03\x03\x03\x03\x03\x03"+
		"\x03\x03\x03\x03\x03\x03\x03\x03\x06\x03F\n\x03\r\x03\x0E\x03G\x03\x03"+
		"\x03\x03\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x06\x04Q\n\x04\r\x04"+
		"\x0E\x04R\x03\x05\x03\x05\x03\x06\x06\x06X\n\x06\r\x06\x0E\x06Y\x03\x06"+
		"\x03\x06\x03\x06\x03\x06\x03\x06\x03\x07\x03\x07\x03\b\x03\b\x06\be\n"+
		"\b\r\b\x0E\bf\x03\t\x05\tj\n\t\x03\t\x03\t\x03\n\x03\n\x03\n\x07\nq\n"+
		"\n\f\n\x0E\nt\v\n\x03\n\x03\n\x07\nx\n\n\f\n\x0E\n{\v\n\x03\n\x03\n\x03"+
		"\n\x03\v\x03\v\x03\v\x07\v\x83\n\v\f\v\x0E\v\x86\v\v\x03\v\x03\v\x07\v"+
		"\x8A\n\v\f\v\x0E\v\x8D\v\v\x03\v\x03\v\x07\v\x91\n\v\f\v\x0E\v\x94\v\v"+
		"\x03\v\x03\v\x07\v\x98\n\v\f\v\x0E\v\x9B\v\v\x03\v\x03\v\x07\v\x9F\n\v"+
		"\f\v\x0E\v\xA2\v\v\x05\v\xA4\n\v\x03\v\x03\v\x03\v\x07\v\xA9\n\v\f\v\x0E"+
		"\v\xAC\v\v\x03\v\x07\v\xAF\n\v\f\v\x0E\v\xB2\v\v\x03\f\x03\f\x03\f\x03"+
		"\f\x03\f\x03\f\x03\f\x05\f\xBB\n\f\x03\r\x03\r\x03\r\x03\r\x03\x0E\x03"+
		"\x0E\x07\x0E\xC3\n\x0E\f\x0E\x0E\x0E\xC6\v\x0E\x03\x0E\x03\x0E\x03\x0E"+
		"\x07\x0E\xCB\n\x0E\f\x0E\x0E\x0E\xCE\v\x0E\x03\x0E\x03\x0E\x03\x0F\x03"+
		"\x0F\x05\x0F\xD4\n\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x10\x03\x10\x03\x11"+
		"\x03\x11\x03\x12\x03\x12\x03\x13\x03\x13\x03\x14\x03\x14\x03\x14\x03\x15"+
		"\x03\x15\x03\x16\x07\x16\xE7\n\x16\f\x16\x0E\x16\xEA\v\x16\x03\x16\x03"+
		"\x16\x07\x16\xEE\n\x16\f\x16\x0E\x16\xF1\v\x16\x03\x16\x06\x16\xF4\n\x16"+
		"\r\x16\x0E\x16\xF5\x05\x16\xF8\n\x16\x03\x16\x02\x02\x03\x14\x17\x02\x02"+
		"\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16"+
		"\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02*\x02\x02"+
		"\x04\x03\x02\t\f\x05\x02\x03\x03\x0E\x0E\x1A\x1A\u0102\x02/\x03\x02\x02"+
		"\x02\x04<\x03\x02\x02\x02\x06K\x03\x02\x02\x02\bT\x03\x02\x02\x02\nW\x03"+
		"\x02\x02\x02\f`\x03\x02\x02\x02\x0Ed\x03\x02\x02\x02\x10i\x03\x02\x02"+
		"\x02\x12m\x03\x02\x02\x02\x14\xA3\x03\x02\x02\x02\x16\xBA\x03\x02\x02"+
		"\x02\x18\xBC\x03\x02\x02\x02\x1A\xC0\x03\x02\x02\x02\x1C\xD1\x03\x02\x02"+
		"\x02\x1E\xD8\x03\x02\x02\x02 \xDA\x03\x02\x02\x02\"\xDC\x03\x02\x02\x02"+
		"$\xDE\x03\x02\x02\x02&\xE0\x03\x02\x02\x02(\xE3\x03\x02\x02\x02*\xF7\x03"+
		"\x02\x02\x02,.\x07\x1C\x02\x02-,\x03\x02\x02\x02.1\x03\x02\x02\x02/-\x03"+
		"\x02\x02\x02/0\x03\x02\x02\x0206\x03\x02\x02\x021/\x03\x02\x02\x0225\x05"+
		"\x04\x03\x0235\x05\x12\n\x0242\x03\x02\x02\x0243\x03\x02\x02\x0258\x03"+
		"\x02\x02\x0264\x03\x02\x02\x0267\x03\x02\x02\x0279\x03\x02\x02\x0286\x03"+
		"\x02\x02\x029:\x07\x02\x02\x03:\x03\x03\x02\x02\x02;=\x05\x06\x04\x02"+
		"<;\x03\x02\x02\x02<=\x03\x02\x02\x02=>\x03\x02\x02\x02>?\x07\x03\x02\x02"+
		"?@\x05\b\x05\x02@A\x07\x04\x02\x02AB\x05\f\x07\x02BC\x05\x0E\b\x02CE\x05"+
		"$\x13\x02DF\x05\n\x06\x02ED\x03\x02\x02\x02FG\x03\x02\x02\x02GE\x03\x02"+
		"\x02\x02GH\x03\x02\x02\x02HI\x03\x02\x02\x02IJ\x05*\x16\x02J\x05\x03\x02"+
		"\x02\x02KL\x07\x05\x02\x02LM\x07\x06\x02\x02MN\x05$\x13\x02NP\x07\x07"+
		"\x02\x02OQ\x07\x1C\x02\x02PO\x03\x02\x02\x02QR\x03\x02\x02\x02RP\x03\x02"+
		"\x02\x02RS\x03\x02\x02\x02S\x07\x03\x02\x02\x02TU\x05(\x15\x02U\t\x03"+
		"\x02\x02\x02VX\x07\x1C\x02\x02WV\x03\x02\x02\x02XY\x03\x02\x02\x02YW\x03"+
		"\x02\x02\x02YZ\x03\x02\x02\x02Z[\x03\x02\x02\x02[\\\x07\b\x02\x02\\]\x05"+
		"\x1E\x10\x02]^\x05 \x11\x02^_\x05$\x13\x02_\v\x03\x02\x02\x02`a\t\x02"+
		"\x02\x02a\r\x03\x02\x02\x02bc\x07\r\x02\x02ce\x05\x10\t\x02db\x03\x02"+
		"\x02\x02ef\x03\x02\x02\x02fd\x03\x02\x02\x02fg\x03\x02\x02\x02g\x0F\x03"+
		"\x02\x02\x02hj\x07\x04\x02\x02ih\x03\x02\x02\x02ij\x03\x02\x02\x02jk\x03"+
		"\x02\x02\x02kl\x05(\x15\x02l\x11\x03\x02\x02\x02mn\x07\x0E\x02\x02nr\x05"+
		"$\x13\x02oq\x07\x1C\x02\x02po\x03\x02\x02\x02qt\x03\x02\x02\x02rp\x03"+
		"\x02\x02\x02rs\x03\x02\x02\x02su\x03\x02\x02\x02tr\x03\x02\x02\x02uy\x07"+
		"\x0F\x02\x02vx\x07\x1C\x02\x02wv\x03\x02\x02\x02x{\x03\x02\x02\x02yw\x03"+
		"\x02\x02\x02yz\x03\x02\x02\x02z|\x03\x02\x02\x02{y\x03\x02\x02\x02|}\x05"+
		"\x14\v\x02}~\x05*\x16\x02~\x13\x03\x02\x02\x02\x7F\x80\b\v\x01\x02\x80"+
		"\x84\x05\x16\f\x02\x81\x83\x07\x1C\x02\x02\x82\x81\x03\x02\x02\x02\x83"+
		"\x86\x03\x02\x02\x02\x84\x82\x03\x02\x02\x02\x84\x85\x03\x02\x02\x02\x85"+
		"\xA4\x03\x02\x02\x02\x86\x84\x03\x02\x02\x02\x87\x8B\x05\x18\r\x02\x88"+
		"\x8A\x07\x1C\x02\x02\x89\x88\x03\x02\x02\x02\x8A\x8D\x03\x02\x02\x02\x8B"+
		"\x89\x03\x02\x02\x02\x8B\x8C\x03\x02\x02\x02\x8C\xA4\x03\x02\x02\x02\x8D"+
		"\x8B\x03\x02\x02\x02\x8E\x92\x05\x1A\x0E\x02\x8F\x91\x07\x1C\x02\x02\x90"+
		"\x8F\x03\x02\x02\x02\x91\x94\x03\x02\x02\x02\x92\x90\x03\x02\x02\x02\x92"+
		"\x93\x03\x02\x02\x02\x93\xA4\x03\x02\x02\x02\x94\x92\x03\x02\x02\x02\x95"+
		"\x99\x05&\x14\x02\x96\x98\x07\x1C\x02\x02\x97\x96\x03\x02\x02\x02\x98"+
		"\x9B\x03\x02\x02\x02\x99\x97\x03\x02\x02\x02\x99\x9A\x03\x02\x02\x02\x9A"+
		"\xA4\x03\x02\x02\x02\x9B\x99\x03\x02\x02\x02\x9C\xA0\x05$\x13\x02\x9D"+
		"\x9F\x07\x1C\x02\x02\x9E\x9D\x03\x02\x02\x02\x9F\xA2\x03\x02\x02\x02\xA0"+
		"\x9E\x03\x02\x02\x02\xA0\xA1\x03\x02\x02\x02\xA1\xA4\x03\x02\x02\x02\xA2"+
		"\xA0\x03\x02\x02\x02\xA3\x7F\x03\x02\x02\x02\xA3\x87\x03\x02\x02\x02\xA3"+
		"\x8E\x03\x02\x02\x02\xA3\x95\x03\x02\x02\x02\xA3\x9C\x03\x02\x02\x02\xA4"+
		"\xB0\x03\x02\x02\x02\xA5\xA6\f\x06\x02\x02\xA6\xAA\x07\x10\x02\x02\xA7"+
		"\xA9\x07\x1C\x02\x02\xA8\xA7\x03\x02\x02\x02\xA9\xAC\x03\x02\x02\x02\xAA"+
		"\xA8\x03\x02\x02\x02\xAA\xAB\x03\x02\x02\x02\xAB\xAD\x03\x02\x02\x02\xAC"+
		"\xAA\x03\x02\x02\x02\xAD\xAF\x05\x14\v\x07\xAE\xA5\x03\x02\x02\x02\xAF"+
		"\xB2\x03\x02\x02\x02\xB0\xAE\x03\x02\x02\x02\xB0\xB1\x03\x02\x02\x02\xB1"+
		"\x15\x03\x02\x02\x02\xB2\xB0\x03\x02\x02\x02\xB3\xB4\x05$\x13\x02\xB4"+
		"\xB5\x07\x11\x02\x02\xB5\xBB\x03\x02\x02\x02\xB6\xB7\x07\x12\x02\x02\xB7"+
		"\xB8\x05$\x13\x02\xB8\xB9\x07\x13\x02\x02\xB9\xBB\x03\x02\x02\x02\xBA"+
		"\xB3\x03\x02\x02\x02\xBA\xB6\x03\x02\x02\x02\xBB\x17\x03\x02\x02\x02\xBC"+
		"\xBD\x07\x14\x02\x02\xBD\xBE\x05$\x13\x02\xBE\xBF\x07\x13\x02\x02\xBF"+
		"\x19\x03\x02\x02\x02\xC0\xC4\x07\x15\x02\x02\xC1\xC3\x07\x1C\x02\x02\xC2"+
		"\xC1\x03\x02\x02\x02\xC3\xC6\x03\x02\x02\x02\xC4\xC2\x03\x02\x02\x02\xC4"+
		"\xC5\x03\x02\x02\x02\xC5\xCC\x03\x02\x02\x02\xC6\xC4\x03\x02\x02\x02\xC7"+
		"\xC8\x05\x1C\x0F\x02\xC8\xC9\x05*\x16\x02\xC9\xCB\x03\x02\x02\x02\xCA"+
		"\xC7\x03\x02\x02\x02\xCB\xCE\x03\x02\x02\x02\xCC\xCA\x03\x02\x02\x02\xCC"+
		"\xCD\x03\x02\x02\x02\xCD\xCF\x03\x02\x02\x02\xCE\xCC\x03\x02\x02\x02\xCF"+
		"\xD0\x07\x16\x02\x02\xD0\x1B\x03\x02\x02\x02\xD1\xD3\x05\"\x12\x02\xD2"+
		"\xD4\x07\x17\x02\x02\xD3\xD2\x03\x02\x02\x02\xD3\xD4\x03\x02\x02\x02\xD4"+
		"\xD5\x03\x02\x02\x02\xD5\xD6\x07\x04\x02\x02\xD6\xD7\x05\x14\v\x02\xD7"+
		"\x1D\x03\x02\x02\x02\xD8\xD9\x05(\x15\x02\xD9\x1F\x03\x02\x02\x02\xDA"+
		"\xDB\x07\x1B\x02\x02\xDB!\x03\x02\x02\x02\xDC\xDD\x05(\x15\x02\xDD#\x03"+
		"\x02\x02\x02\xDE\xDF\x05(\x15\x02\xDF%\x03\x02\x02\x02\xE0\xE1\x07\x18"+
		"\x02\x02\xE1\xE2\x05(\x15\x02\xE2\'\x03\x02\x02\x02\xE3\xE4\t\x03\x02"+
		"\x02\xE4)\x03\x02\x02\x02\xE5\xE7\x07\x1C\x02\x02\xE6\xE5\x03\x02\x02"+
		"\x02\xE7\xEA\x03\x02\x02\x02\xE8\xE6\x03\x02\x02\x02\xE8\xE9\x03\x02\x02"+
		"\x02\xE9\xEB\x03\x02\x02\x02\xEA\xE8\x03\x02\x02\x02\xEB\xEF\x07\x19\x02"+
		"\x02\xEC\xEE\x07\x1C\x02\x02\xED\xEC\x03\x02\x02\x02\xEE\xF1\x03\x02\x02"+
		"\x02\xEF\xED\x03\x02\x02\x02\xEF\xF0\x03\x02\x02\x02\xF0\xF8\x03\x02\x02"+
		"\x02\xF1\xEF\x03\x02\x02\x02\xF2\xF4\x07\x1C\x02\x02\xF3\xF2\x03\x02\x02"+
		"\x02\xF4\xF5\x03\x02\x02\x02\xF5\xF3\x03\x02\x02\x02\xF5\xF6\x03\x02\x02"+
		"\x02\xF6\xF8\x03\x02\x02\x02\xF7\xE8\x03\x02\x02\x02\xF7\xF3\x03\x02\x02"+
		"\x02\xF8+\x03\x02\x02\x02\x1D/46<GRYfiry\x84\x8B\x92\x99\xA0\xA3\xAA\xB0"+
		"\xBA\xC4\xCC\xD3\xE8\xEF\xF5\xF7";
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
	public map(): MapContext | undefined {
		return this.tryGetRuleContext(0, MapContext);
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


export class MapContext extends ParserRuleContext {
	public typename(): TypenameContext {
		return this.getRuleContext(0, TypenameContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return ApiDefParser.RULE_map; }
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


