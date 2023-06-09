import styled from "styled-components";

// 디자인 부분
const Wrapper = styled.div`
    padding : 1rem
    display : flex
    flex-direction : row
    align-items : flex-start;
    justify-content : flex-start
    background-color : lightgrey;
`;

// 디자인 부분
const Block = styled.div`
    padding : ${(props) => props.padding};
    border : 1px soild black;
    order-radius : lrem;
    background-color : ${(props) => props.backgroundcolor};
    color : white;
    font-size : 2rem;
    font-weight : bold;
    text-align : center;
`;

const blockItems = [
    {
        label : "1",
        padding : "1rem",
        backgroundcolor : "red"
    }, {
        label : "2",
        padding : "3rem",
        backgroundcolor : "green"
    }, {
        label : "3",
        padding : "2rem",
        backgroundcolor : "blue"
    }
];

function Blocks (props) {
    return (
        <Wrapper>
            {blockItems.map((blockItems) => {
                return (
                    <Block
                        padding = {blockItems.padding}
                        backgroundcolor = {blockItems.backgroundcolor}
                    >
                        {blockItems.label}
                    </Block>
                );
            })}
        </Wrapper>
    );
}

export default Blocks;