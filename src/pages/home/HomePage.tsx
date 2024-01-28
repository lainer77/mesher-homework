import ModalContainer from './_containers/ModalContainer';
import SwapContainer from './_containers/SwapContainer';
import { HomePageStyled } from './HomePage.styled';

export default function HomePage() {
    return (
        <>
            <HomePageStyled>
                <SwapContainer />
            </HomePageStyled>
            <ModalContainer />
        </>
    );
}
