export const validateDecimal = (inputValue: string): boolean => {
    // 소수점 열 자리까지만 허용하는 정규식 패턴
    const decimalPattern = /^[+-]?([0-9]*[.])?[0-9]{0,10}$/;
    return decimalPattern.test(inputValue);
};
