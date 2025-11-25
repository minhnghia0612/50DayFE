import './Search.css'
import { useState } from 'react'

function Search( {setCard, setRepos, setError} ){
    const SEARCH_API = 'https://api.github.com/users/';
    const [account, setAccount] = useState('');

    const handleSearch = async () =>{
        if(account.trim() === "") return;
       
        try {
            const userRes = await fetch(SEARCH_API + account);
            if (!userRes.ok) {
                setError('No profile with this username');
                setCard(null);
                setRepos([]);
                setAccount('');
                return;
            }
            const userData = await userRes.json();
            setError(null);
            setCard(userData);
            console.log(userData);
            if ( userData.repos_url ) {
                const queryParams = new URLSearchParams({
                    sort: 'created',
                    direction: 'desc',
                });
                const reposRes = await fetch(userData.repos_url + '?' + queryParams.toString());
                if (!reposRes.ok) {
                    throw new Error('Error fetching repositories');
                }
                const reposData = await reposRes.json();
                setRepos(reposData);
            } else {
                setRepos([]);
            }
            setAccount('');
        } catch (error) {
            console.error(error);
        }
    }
    return (
        <div className='search'>
            <input type="text" 
            placeholder='Search a GitHub User'
            value = {account}
            onChange={ (e) => setAccount(e.target.value) }
            onKeyDown={ (e) => {
                if (e.key === "Enter")
                    {handleSearch()}
                } 
                } />
        </div>
    )
}
export default Search