import styled from 'styled-components'

const Navbar = styled.div`
    width: 100%;
    height: 2rem;
    color: rgba(0, 0, 0, 0.54);
    background-color: white;
    padding: 1rem;
    box-shadow: 0px 1px 3px 0px rgba(0,0,0,0.2),
                0px 1px 1px 0px rgba(0,0,0,0.14),
                0px 2px 1px -1px rgba(0,0,0,0.12);
    display: flex;
    align-items: center;
    position: fixed;
    z-index: 1000;
`;

export default Navbar;