import styled from "styled-components"

const header = (
        <div style={{width: '100%', height:200, }}></div>
);

const styleCard = (photo) => {
        return {
        width: '100%',
        backgroundImage: `url(${photo})`, 
        backgroundSize: 'cover', 
        borderRadius: 20,
        padding: 15,
        margin: 10,}
}

const ScrollTop = () => {
        document.documentElement.scrollTop = 0
}

const StrongLink = styled.a`
                font-style: italic;
                font-weight: bold;
                text-decoration: none;
                color: rgba(0, 0, 0, 0.5);
                background-color: inherit;
                padding: 0;
                cursor: pointer;
        `

export {header, styleCard, ScrollTop, StrongLink}