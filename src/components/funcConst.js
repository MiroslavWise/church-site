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

export {header, styleCard}