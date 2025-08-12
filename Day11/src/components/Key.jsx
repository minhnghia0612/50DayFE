import './Key.css';
import { useEffect,useState } from 'react';
function Key(){
    const [keyChange, setKeyChange] = useState(null);

    useEffect(() => {const keyDown = (e) =>{
        setKeyChange({
            key: e.key,
            code: e.code,
            keyCode: e.keyCode,
        });
    };
        window.addEventListener('keydown', keyDown);
        return () => {
            window.removeEventListener('keydown', keyDown);
        };
    }, []);

    return(
        <>
            <div className="key-container" >
                {keyChange === null ?(
                <p className='key'>Press any key to get the keyCode</p>)
                 :(
                    <><div className="key">
                        {keyChange.key === ' ' ? 'Space': String(keyChange.key)}
                        <small>event.key</small>
                    </div>
                    <div className="key">
                        <small>event.keyCode</small>
                        {keyChange.keyCode}
                    </div>
                    <div className="key">
                        <small>event.code</small>
                        {keyChange.code}
                    </div>
                    </>)}
            </div>
        </>
    )
}

export default Key;