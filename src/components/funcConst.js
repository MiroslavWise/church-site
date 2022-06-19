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
const Aa = styled.a`
        text-decoration: none;
        color: rgba(0, 0, 0, 0.5);
        background-color: inherit;
        padding: 0;
        cursor: pointer;
`

const GrayH5 = styled.h5`
        color: rgba(0,0,0,0.4);
        padding-left: 20px;
`
const StyleH5 = styled.h5`
                padding-left: 10px;
        `
const Pp10 = styled.a`
        background-color: inherit;
        padding-left: 10px;
`
const LinkBible = ({link, text}) => {
        return(
                <StrongLink target='_blank' href={link}>{text}</StrongLink>
        )
}
const LinkA = ({link, text}) =>{
        return(
                <Aa target='_blank' href={link}>{text}</Aa>
        )
}
export {header, styleCard, ScrollTop, StrongLink, GrayH5, StyleH5, Pp10, LinkBible, LinkA}