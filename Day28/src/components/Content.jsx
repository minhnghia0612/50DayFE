import './Content.css'

function Content({ Card, repos , error}){
    return (
        <div className='content'>
            {error ? (
                <div className="content-error"><h2>{error}</h2></div>
            ) : 
            !Card ? (
                null
            ) :
            (
                <div className="card-container">
                    <div className="bg">
                        <img src={Card?.avatar_url} alt={Card?.login} />
                    </div>
                    <div className="info">
                        <h2>{Card?.name}</h2>
                        <p>{Card?.bio}</p>
                        {
                            !Card? null :
                                <div className="follower">
                                    <ul>
                                        <li>{Card?.followers } <strong> Followers</strong></li>
                                        <li>{Card?.following} <strong> Following</strong></li>
                                        <li>{Card?.public_repos} <strong> Repos</strong></li>
                                    </ul>
                                </div>
                        }
                        <div className="link-repo">
                            { repos.slice(0,5).map((repo) => (
                                <a key={repo.id}
                                href={repo.html_url}
                                target="_blank"// mở link trong tab mới
                                rel="noreferrer" // phòng chống lỗ hổng bảo mật
                                className='repo'
                                >
                                    {repo.name}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
                )
            }
        </div>
)
}
export default Content