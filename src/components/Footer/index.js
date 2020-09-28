import React from 'react'

function Footer() {
    return(
        <div style={{backgroundColor: '#FF8A5B', height: 300, position: 'relative', bottom: 0, width: '100%'}}>
            <div style={{paddingTop: 30, width: '100%', flexDirection: 'row', display: 'flex', justifyContent: 'space-around'}}>
                <div>Empresas parceiras:</div>
                <div>Contatos:</div>
                <div>Redes sociais:</div>
            </div>
        </div>
    )
}

export default Footer