package com.cos.jwt.config.jwt;

interface JwtProps {
	//인터페이스 변수는 public static final 생략되어있음
	String secret="비밀키";
	String auth="Bearer";
	String header="Authorization";
}
