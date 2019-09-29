import styled from 'styled-components'
// Background Image pass
import image from '../../img/legopink.jpg'

const HeroBG = styled.div`
    width: 100%;
    height: 300px;
    background-image: url(${image});
    background-size: cover;
    background-position: center;
    color: white;
    /* flex */
    display: flex;
    align-items: center;
    flex-flow: column;
    /* fix the hight of Navbar */
    padding-top: 4rem;
`;

export default HeroBG;