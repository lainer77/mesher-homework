export function usdConvertAtoB(ATokens: number, AToUsd: number, BToUsd: number): number {
    const usdValue = ATokens * AToUsd; // A 토큰의 USD 가치 계산
    const BTokens = usdValue / BToUsd; // USD를 B 토큰으로 변환
    return parseFloat(BTokens.toFixed(10)); // 결과를 소수점 10자리까지 반올림하여 반환
}
