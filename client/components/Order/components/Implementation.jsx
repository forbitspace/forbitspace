import styled from "styled-components";

const Implementation = () => {
    const ImplementData = [
        {
            title: 'Stop-loss-order',
            text: 'Based on the conditional orders feature, a stop-loss order is executed when it reaches a particular price point set by the user. When the price limit is reached, the open position will close to prevent further losses.'
        },
        {
            title: 'Trailing Stop Order',
            text: 'In a sell trailing stop order, also implemented on the conditional order feature, the user sets the stop price  at a fixed amount below market with an attached ‘trailing’ amount. If the market price increases, the stop price rises by the trailing amount. If the price falls, the stop-loss price remains unchanged.'
        },
        {
            title: 'Auction',
            text: 'Thanks to the dynamic pricing feature, the protocol can be used to power auctions. For instance, Maker DAO’s Liquidation 2.0 Module is based on the auction model, and users could take part in Maker DAO auctions, using the 1inch Limit Order Protocol.'
        },
        {
            title: 'forbitspace Grants program',
            text: 'We have implemented some use cases based on the 1inch Limit Order Protocol, such as, for instance, stop loss and trailing stop orders. However, there are still plentiful opportunities for implementing use cases on the 1inch Limit Order Protocol, such as auctions. If you are a developer interested in building a specific solution on  the protocol, you can apply for a grant from the 1inch Foundation.'
        },
    ];
    const RenderImplement = ({ data }) => {
        return (
            <BoxContent>
                {data.map(item => (
                    <Content>
                        <Title>{item.title}</Title>
                        <Text>
                            {item.text}
                        </Text>
                    </Content>
                ))}
            </BoxContent>
        );
    }
    return (
        <WrapperImplement>
            <HeaderContent>
                <Title>Implementations</Title>
                <Text>
                    Below are some use cases for the 1inch Limit Order Protocol. But the
                    protocol is very flexible, and you can build much more on top of it!
                </Text>
            </HeaderContent>
            <RenderImplement data={ImplementData} />

        </WrapperImplement>
    );
}

const WrapperImplement = styled.section`
    text-align: center;
    position: relative;
    padding: 50px 0;
`
const HeaderContent = styled.div`
    @media (max-width: 576px) {
        margin-left: 0;
        margin-top: 40px;
    }
`

const Title = styled.h2`
    font-size: 4rem;
    line-height: 1.2;
    font-weight: 600;
    @media (max-width: 576px) {
      font-size: 45px;
      letter-spacing: 2px;
    }
    @media (max-width: 375px) {
      font-size: 35px;
    }
`

const Text = styled.p`
    font-size: 1.2rem;
    font-weight: 300;
    margin: 0;
    @media (max-width: 576px) {
        font-size: 14px;
    }
    @media (max-width: 320px) {
        font-size: 12px;
    }
`

const BoxContent = styled.div`
    display: flex;
    flex-wrap: wrap;
    row-gap: 240px;
    justify-content: space-between;

    margin: 150px auto 50px;

    @media (max-width: 768px){
        padding: 0 10px;
    }

    @media (max-width: 768px){
        gap: 10px!important;
        margin: 20px auto;
    }
`

const Content = styled.div`
    width: calc((100% - 80px));
    text-align: left;

    padding: 15px 35px;
    border-radius: 12px;

    transition: 0.2s;

    h2{
        font-size: 44px;
    }

    :nth-child(odd){
        padding-right: 50%;
        @media (max-width: 1024px){
            padding-right: 40%;
        }
    }
    :nth-child(even){
        text-align: right;
        padding-left: 50%;
        @media (max-width: 1024px){
            padding-left: 35%;
        }
    }
    :nth-child(4){
        padding-left: 40%;
        @media (max-width: 1024px){
            padding-left: 30%;
        }
    }

    :hover{
        transform: scale(1.12);
    }

    @media (max-width: 768px){
        width: calc(100% - 20px);
        text-align: left!important;
        padding: 10px!important;
        margin: 40px 0!important;

        h2{
            font-size: 30px;
            font-weight: 600;
            letter-spacing: unset;
        }
    }

    @media (max-width: 415px){
        padding: 0px!important;
        margin: 20px 0!important;

        h2{
            font-size: 20px;
            font-weight: 500;
        }
    }
`


export default Implementation;