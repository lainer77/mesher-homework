import styled, { css } from 'styled-components';

export const HomePageStyled = styled.article`
    display: flex;
    flex-direction: column;
    height: 100%;
    background-color: ${({ theme }) => theme.colors.white};
`;

export const SwapContainerStyled = styled.section`
    height: 100%;
    ${({ theme }) => theme.flexs.flexCenterCenter}
`;

export const SwapCardStyled = styled.div`
    width: 460px;
    height: 380px;
    border-radius: ${({ theme }) => theme.spacing.lg};
    transition: transform 250ms ease 0s;
    position: relative;
    &::before {
        content: ' ';
        display: flex;
        position: absolute;
        inset: 0px;
        transform: scale(1.2);
        filter: blur(50px);
        background-color: rgba(252, 114, 255, 0.075);
    }
    > div {
        position: absolute;
        border: 1px solid rgba(255, 255, 255, 0.07);
        width: 100%;
        height: fit-content;
        border-radius: ${({ theme }) => theme.spacing.lg};
        padding: 12px 8px 8px;
        background: ${({ theme }) => theme.colors.white};
    }
`;
export const SwapSectionStyled = styled.div`
    font-weight: 500;
    height: 120px;
    line-height: 20px;
    position: relative;
    ${({ theme }) => css`
        background-color: ${theme.colors.swap};
        border-radius: ${theme.spacing.lg};
        color: ${theme.colors.neutral2};
        font-size: ${theme.fontSize.medium};
        padding: ${theme.spacing.md};
        ${theme.flexs.flex}
        flex-direction: column;
    `}
`;
export const SwapButton = styled.button`
    position: absolute;
    border-radius: 12px;
    width: 40px;
    height: 40px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: ${({ theme }) => theme.colors.swap};
    border: 4px solid ${({ theme }) => theme.colors.white};
    cursor: pointer;
    &:hover {
        background: ${({ theme }) => theme.colors.swap};
    }
    &:active {
        background: linear-gradient(0deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.2) 100%),
            ${({ theme }) => theme.colors.swap};
    }
`;
export const SearchTextFieldStyled = styled.input`
    width: 100%;
    background: url(/src/assets/svg/search.svg) 12px center / 20px 20px no-repeat scroll
        rgb(27, 27, 27);
    position: relative;
    display: flex;
    padding: 16px 16px 16px 40px;
    height: 40px;
    -webkit-box-align: center;
    align-items: center;
    white-space: nowrap;
    outline: none;
    border-radius: 12px;
    color: rgb(255, 255, 255);
    border: 1px solid rgba(255, 255, 255, 0.07);
    appearance: none;
    font-weight: 485;
    font-size: 16px;
    transition: border 100ms ease 0s;
`;

export const TokenQuickItemStyled = styled.button<{ isSelected?: boolean }>`
    ${({ theme }) => theme.flexs.flexCenter}
    border: 1px solid rgba(255, 255, 255, 0.07);
    gap: 8px;
    border-radius: 18px;
    padding: 5px 12px 5px 6px;
    width: fit-content;
    background-color: ${({ theme }) => theme.colors.white};
    &:hover {
        background: linear-gradient(0deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.4) 100%), #fff;
    }
    &:active {
        background: linear-gradient(0deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.6) 100%), #fff;
    }
    background: ${({ isSelected }) =>
        isSelected &&
        'linear-gradient(0deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.4) 100%), #fff'};
`;
export const PopularTokenListStyled = styled.div`
    overflow-y: scroll;
    max-height: 100%;
    height: 100%;
`;
export const TokenManageStyled = styled.button`
    min-height: 52px;
    border: unset;
    ${({ theme }) => css`
        background-color: ${theme.colors.neutral1};
        ${theme.flexs.flexCenterCenter};
        color: ${theme.colors.violet};
        &:hover {
            background: linear-gradient(0deg, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.9) 100%), #fff;
        }
        &:active {
            background: linear-gradient(0deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.8) 100%), #fff;
        }
    `}
`;
export const TokenSelectContainerStyled = styled.article<{
    $isOpen: boolean;
    $isTransition: boolean;
}>`
    display: flex;
    flex-direction: column;
    background: ${({ theme }) => theme.colors.white};
    border: 1px solid ${({ theme }) => theme.colors.neutral1};
    border-radius: 20px 20px 0px 0px;
    max-width: 420px;
    width: 100vw;
    /* height: 620px; */
    transform: ${({ $isOpen }) => ($isOpen ? 'translateY(0)' : 'translateY(100%)')};
    transition: transform 300ms;
    opacity: ${({ $isOpen, $isTransition }) => ($isOpen || $isTransition ? 1 : 0)};
    height: ${({ $isOpen, $isTransition }) => ($isOpen || $isTransition ? '620px' : 0)};
`;
